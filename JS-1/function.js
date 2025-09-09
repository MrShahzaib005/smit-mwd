// function greetings(name,time){
//     console.log("Good" + time +" "+ name);
    
// }

// greetings("Ahmed","Morning")

// function isEven(num){
//     if(num%2==0){
//         console.log("Number is even");
        
//     }else{
//         console.log("Function is odd");
        
//     }
// }

// for (let index = 0; index <= 50 ; index++) {
//     isEven(index)
// }

// function traffic(signal){
    
//     if(signal === "red") {
//         console.log("The card must stop")
//     } else if( signal === "green") {
//         console.log("The car must go")
//     } else {
//         console.log("The must start engine");
//     }
    
// }

// traffic("red")
// traffic("green")
// traffic("orange")

// function discount(price,dis){

//     console.log("The price for shirt is " +price);
//     let discount=price*(dis/100)
//     price = price - discount
//     console.log("After "+dis +"% discount the price is reduced to "+ price);
    
// }

// discount(25000,60)

function table(x,n){
    for( i = 0; i<= n; i++){
        console.log(x + " * "+ i+" = "+ x*i); 
    }
}

table(15,12)