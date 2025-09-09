let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.style.color = "red";
//     heading1.innerHTML = "Heading1";
//     setTimeout(()=>{
//         heading2.style.color = "pink";
//         heading2.innerHTML = "Heading2";
//         setTimeout(()=>{
//             heading3.style.color = "yellow";
//             heading3.innerHTML = "Heading3";
//             setTimeout(()=>{
//                 heading4.style.color = "blue";
//                 heading4.innerHTML = "Heading4";
//                 setTimeout(()=>{
//                     heading5.style.color = "orange";
//                     heading5.innerHTML = "Heading5";
//                     setTimeout(()=>{
//                         heading6.style.color = "brown";
//                         heading6.innerHTML = "Heading6";
//                         setTimeout(()=>{
//                             heading7.style.color = "grey";
//                             heading7.innerHTML = "Heading7";
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// Pyramids Functions

const changeColor = (tag, text, color, time, onSuccess, onFailure) => {
    setTimeout(()=>{
        if(tag){
            tag.style.color = color;
        tag.innerHTML = text;
        if(onSuccess){
            onSuccess("Affirmative");
        }
        }else {
            onFailure("Something went wrong")
        }
    },time)
}

changeColor(heading1,"ONE","red",1000,()=>{
    changeColor(heading2,"TWO","pink",1000,()=>{
        changeColor(heading3,"THREE","cyan",1000,()=>{
            changeColor(heading4,"FOUR","grey",1000,()=>{
                changeColor(heading5,"FIVE","blue",1000,()=>{
                    changeColor(heading6,"SIX","orange",1000,()=>{
                        changeColor(heading7,"SEVEN","brown",1000)
                    },console.log("error"))
                },()=> console.log("error"))
            },()=> console.log("error"))
        },()=> console.log("error"))
    },()=> console.log("error"))
},()=> console.log("error"))