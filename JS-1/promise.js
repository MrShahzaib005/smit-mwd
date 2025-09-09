// A promise has 3 phases :
// 1. Pending ( api data sent )
// 2. Resolve ( api accepted )
// 3. Reject ( api rejected )

let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");

// const coffee = ["coffee powder", "milk", "sugar", "water", "salt"]

// let myPromise = new Promise((resolve, reject) =>{
//     if(coffee.includes("coffee powder") && coffee.includes("sugar")
//     && coffee.includes("milk")){
//         resolve("Coffee is ready");
//     } else {
//         reject("something went wrong")
//     }
// })

// myPromise.then((success)=>{
//     console.log("success");
// }).catch((err)=>{
//     console.log(err);
// })

const changeColor = (tag, text, color, time ) => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            if(tag){
                tag.style.color = color;
                tag.innerHTML = text;
                res();
            } else {
                rej();
            }
        },time)
    })
};

changeColor(heading1,"ONE","red",1000)
    .then(()=> changeColor(heading1,"ONE","red",1000))
    .then(()=> changeColor(heading2,"TWO","pink",1000))
    .then(()=> changeColor(heading3,"THREE","orange",1000))
    .then(()=> changeColor(heading4,"FOUR","green",1000))
    .then(()=> changeColor(heading5,"FIVE","blue",1000))
    .then(()=> changeColor(heading6,"SIX","cyan",1000))
    .catch((err)=>{
        console.log(err);
    })