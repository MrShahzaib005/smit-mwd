// for loop
// for of loop
// for in loop
// for each loop
// anonomous function
// call back function
// mapping

// let nums = [1,2,3,4,5,6]
// for(let num of nums){
//     console.log(num*num);
// }
// console.log("_________________________________");

// for(let index in nums){
//     console.log(index**2);
// }
// console.log("_________________________________");

// nums.forEach((num)=>{
//     console.log(num**2);
// })

// Mapping

// let marks = [2,3,45,6,7,8];
// let results = marks.map((mark)=>{
//     return mark;
// })

// filter

// let games = ["cricket","badminton","table tennis","horse riding","rugby","hockey"]

// let result = games.filter((game)=>{
//     return game[0]==="h" || game[0]==="H";
// })

// console.log(result);

// let marks = [8,12,5,15,20,18,25,0,30,32,6,50];
// let results = marks.filter((mark)=>{
//     return mark > 10;
// })
// console.log(results);

// Maps cannot filter out. becasue it will give undefined values

// let n_result = results.map((result)=>{
//     return result*2;
// })

// console.log(n_result);

// let numbers = [5, 12, 8, 130, 44, 3, 99, 20];

// let results = numbers.filter(number => number > 10).map(num => num+10).filter(even => even%2===0).map(double => double*2)
// console.log(results);
// let arr = [70,77,89,33,80,92,96];

// for (let i =0;  i< ar1.length; i++) {
//     console.log(ar1[i]+2)
// }

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     } 
// }
// arr.push(100);//Add at the end of array
// arr.push(200);
// arr.pop()// remove from the end of array
// arr.unshift(11)//add item at the start and fix the indexing
// arr.unshift(10)
// arr.shift()//remove from the start and fix the indexing

// let result = arr.slice(1,3);
// console.log(arr);

// arr.splice(3,0,"Ahmed")
// console.log(arr);

// arr.splice(1,1,"Ali",110011)
// console.log(arr);

// arr.splice(5,2)
// console.log(arr);

// Reduce method

let marks = [5,35,45,20,10,12,35];
// Filter of 25 and 75
// [65,45,85,30]
// Map + 5 
// [70,50,90,35]
// Reduce 
// []

let ans = marks.filter(mark => mark > 25 && mark < 75).map(add => add + 5).reduce((accu,val)=> accu+val)
console.log(ans);


