
    // -----------------------------
    // Configuration
    // -----------------------------
    const DIFFICULTIES = {
      easy:   { cols: 4, rows: 4 }, // 16 cards -> 8 pairs
      medium: { cols: 5, rows: 4 }, // 20 cards -> 10 pairs
      hard:   { cols: 6, rows: 4 }, // 24 cards -> 12 pairs
    };

    // A fun, diverse emoji pool — feel free to replace with your theme!
    const EMOJI_POOL = [
      '🍎','🍊','🍋','🍉','🍇','🍓','🍒','🍍','🥝','🥥','🥑','🌶️','🍔','🍕','🍟','🌮',
      '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐷','🐸','🐵','🐤','🦆',
      '⚽','🏀','🏈','⚾','🎾','🏐','🎱','🥏','🏓','🏸','🥊','⛳','🎯','🎮','🎲','🧩',
      '🚗','🚌','🚲','✈️','🚀','🛸','🚁','🚂','⛵','🚤','🛴','🏍️','🚑','🚒','🚜','🚕'
    ];

    // -----------------------------
    // Utility helpers
    // -----------------------------
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    const pad2 = n => String(n).padStart(2, '0');

    function shuffle(array) {
      // Fisher–Yates shuffle
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // -----------------------------
    // Game state
    // -----------------------------
    const state = {
      levelKey: 'easy',
      gridEl: null,
      lock: false,
      first: null,
      second: null,
      foundPairs: 0,
      totalPairs: 0,
      moves: 0,
      timeMs: 0,
      timerId: null,
      hasStarted: false,
    };

    // -----------------------------
    // Timer logic
    // -----------------------------
    function startTimer() {
      if (state.timerId) return;
      const t0 = performance.now() - state.timeMs;
      state.timerId = setInterval(() => {
        state.timeMs = performance.now() - t0;
        renderTime();
      }, 250);
    }

    function stopTimer() {
      clearInterval(state.timerId);
      state.timerId = null;
    }

    function resetTimer() {
      stopTimer();
      state.timeMs = 0;
      renderTime();
    }

    function renderTime() {
      const secs = Math.floor(state.timeMs / 1000);
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      $('#time').textContent = `${pad2(m)}:${pad2(s)}`;
    }

    // -----------------------------
    // Local storage for best times
    // -----------------------------
    function bestKey() { return `mm_best_${state.levelKey}`; }

    function loadBest() {
      const ms = +localStorage.getItem(bestKey());
      if (!ms) return null;
      const secs = Math.floor(ms / 1000);
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${pad2(m)}:${pad2(s)}`;
    }

    function maybeSaveBest() {
      const current = state.timeMs|0;
      const key = bestKey();
      const prev = +localStorage.getItem(key) || Infinity;
      if (current < prev) {
        localStorage.setItem(key, String(current));
      }
    }

    function renderBest() {
      $('#best').textContent = loadBest() || '—';
    }

    // -----------------------------
    // Board setup
    // -----------------------------
    function makeDeck(pairs) {
      // Pick N emojis and duplicate to make pairs
      const chosen = shuffle(EMOJI_POOL.slice()).slice(0, pairs);
      const deck = shuffle(chosen.concat(chosen));
      return deck;
    }

    function createCard(emoji, index) {
      const card = document.createElement('button');
      card.className = 'card';
      card.setAttribute('type', 'button');
      card.setAttribute('aria-label', 'Memory card');
      card.dataset.value = emoji;
      card.dataset.index = index;
      card.innerHTML = `
        <div class="card-inner">
          <div class="face front"></div>
          <div class="face back">${emoji}</div>
        </div>
      `;
      card.addEventListener('click', onCardClick);
      return card;
    }

    function layoutGrid(cols) {
      const grid = $('#grid');
      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    }

    function resetStateForNewGame() {
      state.lock = false;
      state.first = null; state.second = null;
      state.foundPairs = 0; state.moves = 0; state.hasStarted = false;
      $('#found').textContent = '0';
      $('#moves').textContent = '0';
      resetTimer();
    }

    function newGame(levelKey = state.levelKey) {
      state.levelKey = levelKey;
      const lvl = DIFFICULTIES[levelKey];
      const totalCards = lvl.cols * lvl.rows;
      const pairs = totalCards / 2;
      state.totalPairs = pairs;

      resetStateForNewGame();
      renderBest();

      $('#diffPill').textContent =
        levelKey.charAt(0).toUpperCase() + levelKey.slice(1) + ` (${lvl.cols}×${lvl.rows})`;

      const grid = $('#grid');
      grid.replaceChildren();
      layoutGrid(lvl.cols);

      const deck = makeDeck(pairs);
      deck.forEach((emoji, i) => grid.appendChild(createCard(emoji, i)));
    }

    // -----------------------------
    // Interaction logic
    // -----------------------------
    function flipUp(card) { card.classList.add('is-flipped'); }
    function flipDown(card) { card.classList.remove('is-flipped'); }

    function onCardClick(e) {
      const card = e.currentTarget;
      if (state.lock) return;               // ignore during compare
      if (card.classList.contains('is-flipped')) return; // already up

      // Start timer on the very first move
      if (!state.hasStarted) { startTimer(); state.hasStarted = true; }

      flipUp(card);

      if (!state.first) {
        state.first = card;
        return;
      }

      state.second = card;
      state.lock = true; // temporarily lock input while we compare
      state.moves += 1;
      $('#moves').textContent = String(state.moves);

      const match = state.first.dataset.value === state.second.dataset.value;
      if (match) {
        // Mark as matched, keep face-up
        [state.first, state.second].forEach(c => c.classList.add('is-matched'));
        afterCompare(true);
      } else {
        // Flip back after a short delay
        setTimeout(() => {
          flipDown(state.first);
          flipDown(state.second);
          afterCompare(false);
        }, 650);
      }
    }

    function afterCompare(matched) {
      if (matched) {
        state.foundPairs += 1;
        $('#found').textContent = String(state.foundPairs);
      }
      // Clear selection and unlock
      state.first = null; state.second = null; state.lock = false;

      // Win check
      if (state.foundPairs === state.totalPairs) {
        stopTimer();
        maybeSaveBest();
        showWin();
        renderBest();
      }
    }

    // -----------------------------
    // Win overlay
    // -----------------------------
    function showWin() {
      const secs = Math.floor(state.timeMs / 1000);
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      $('#winStats').textContent = `Time ${pad2(m)}:${pad2(s)} • Moves ${state.moves}`;
      $('#overlay').classList.add('show');
    }

    function hideWin() { $('#overlay').classList.remove('show'); }

    // -----------------------------
    // Wiring UI controls
    // -----------------------------
    function initUI() {
      $('#newGameBtn').addEventListener('click', () => { hideWin(); newGame(state.levelKey); });
      $('#difficulty').addEventListener('change', (e) => {
        const key = e.target.value;
        hideWin();
        newGame(key);
      });
      $('#playAgainBtn').addEventListener('click', () => { hideWin(); newGame(state.levelKey); });
      $('#changeLevelBtn').addEventListener('click', () => {
        hideWin();
        const select = $('#difficulty');
        // rotate to next option for quick retry with variety
        const i = select.selectedIndex;
        select.selectedIndex = (i + 1) % select.options.length;
        newGame(select.value);
      });
    }

    // -----------------------------
    // Boot
    // -----------------------------
    window.addEventListener('DOMContentLoaded', () => {
      initUI();
      newGame('easy');
      // Ensure the <select> reflects current level
      $('#difficulty').value = 'easy';
    });