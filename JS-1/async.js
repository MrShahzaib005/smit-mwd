// synchronous  // single threading
// 1 sec = 1000
// asynchronous // multi threading
// Event Loop : Call Stack/ Web Browser API/ Queue/ Check Call stack is empty/
// Send functions from Micro Task Queue

let container = document.querySelector(".container");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");

const changeColor = () => {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    container.style.backgroundColor = `rgb(${red},${green},${blue})`
}
let id = setInterval(()=>{
        changeColor()
    },1000)

start.addEventListener("click",()=>{
    id = setInterval(()=>{
        changeColor()
    },1000)
});

stop.addEventListener("click",()=>{
    clearInterval(id);
})