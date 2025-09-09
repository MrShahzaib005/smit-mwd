let products = [
    {
        title: "Wireless Mouse",
        color: "Black",
        category: "Electronics",
        price: 1999
    },
    {
        title: "Running Shoes",
        color: "Blue",
        category: "Footwear",
        price: 4999
    },
    {
        title: "Bluetooth Headphones",
        color: "White",
        category: "Electronics",
        price: 3499
    },
    {
        title: "Cotton T-Shirt",
        color: "Gray",
        category: "Clothing",
        price: 799
    },
    {
        title: "Smartwatch",
        color: "Silver",
        category: "Wearables",
        price: 7999
    },
    {
        title: "Backpack",
        color: "Navy Blue",
        category: "Accessories",
        price: 2599
    },
    {
        title: "Desk Lamp",
        color: "Yellow",
        category: "Home Decor",
        price: 1499
    }
];
//  products.map((product)=>{
//     console.log(product.title, product.color,product.price);
    
//  })
// let ans = products.filter((product)=>{
//     return product.color[0] === "y" || product.color[0]==="Y";
// })
// ans.map((res)=>{
//     console.log(res.title, res.price);
// })
// let ans = products.filter(col=> col.color[0]==="N" || col.color[0]==="n").map(res => console.log(res.title, res.price))

// Filter out the students whose name starting letter is a and marks are above 80
let students = [
    {
        name : "ali",
        marks : 92,
    },
    {
        name : "ahmed",
        marks : 59,
    },
    {
        name : "Zeb",
        marks : 65,
    },
    {
        name : "akbar",
        marks : 86,
    },
    {
        name : "haseeb",
        marks : 77,
    },
    {
        name : "talha",
        marks : 80,
    },
]

let result = students.filter( a1 => a1.name[0] === "a" && a1.marks >=80 ).reduce((accu, val)=> accu+val.marks,0);

console.log(result);
