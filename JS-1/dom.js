// let button = document.querySelector("#Btn");
// button.style.backgroundColor = "red";
// console.log(button);


// let logo = document.querySelector("#logo");
// logo.style.width = "250px"

// let heading = document.querySelector(".heading");
// let green = document.querySelector(".green");
// let blue = document.querySelector(".blue");
// let pink = document.querySelector(".pink");
// let orange = document.querySelector(".orange");

// let changeColor = (color) => {
//     heading.innerHTML = `Hi I am ${color}`;
//     heading.style.color = color;
// };

// green.addEventListener("click", () => changeColor("green"));
// blue.addEventListener("click", () => changeColor("blue"));
// pink.addEventListener("click", () => changeColor("pink"));
// orange.addEventListener("click", () => changeColor("orange"));

const colorsArrays = ["AliceBlue", "Aqua", "Brown", "CadetBlue", "Coral", "Cornsilk", "DarkCyan", "DarkOrchid", "orange", "black", "grey", "green"]

let container = document.querySelector("div")
let colorInput = document.querySelector(".colorInput");
let applyColor = document.querySelector(".applyColor");
let currentColor = document.querySelector(".currentColor");
let randomColor = document.querySelector(".randomColor");

const changeColor = (color) => {
    container.style.backgroundColor = color 
    currentColor.innerHTML = color
}

const handleApplyColor = () => {
    let color = colorInput.value 
    changeColor(color)
}

const handleRandomColor = () => {
    let randomNumber = Math.floor(Math.random()*colorsArrays.length);
    changeColor(colorsArrays[randomNumber])
}

applyColor.addEventListener("click", handleApplyColor)
randomColor.addEventListener("click", handleRandomColor)