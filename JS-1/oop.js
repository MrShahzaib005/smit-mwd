// let students = {
//     name : "abc",
//     age : 12,

//     inroduction : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`);
        
//     }
// }

// function student(name, age){
//     return {
//         name : name, 
//         age :age,

//         introduction(){
//             console.log(`My name is ${name} and my age is ${age}`);
            
//         }
//     }
// }

// let s1 = student("abc",12);
// let s2 = student("def",13);

// s1.introduction()

function BankAccount(name, balance) {
    this.name = name;
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance+=amount
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance-=amount
}
BankAccount.prototype.showBalance = function () {
    console.log(`${this.name} has ${this.balance} in his account`);
    
}

let s1 = new BankAccount("Ahmed",1000);
let s2 = new BankAccount("Ali", 2000)

s1.deposit(5000);
s1.withdraw(1000);
s1.showBalance();
s2.showBalance();
console.log(s1,s2);
