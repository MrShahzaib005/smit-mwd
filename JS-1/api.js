// APPLICATION PROGRAMMING INTERFACE 

// 4 methods in API 
// GET, POST, PUT OR PATCH, DELETE
// Open Source API's

// https://fakestoreapi.com/products

// let container = document.querySelector(".productsContainer")

const fetchProducts = async () => {
    try {
       const response = await fetch("https://fakestoreapi.com/products");
       const products = await response.json()
       getAllProducts(products)
       console.log(products);
       
    } catch (error) {
        console.log(error);
    }
}

const getAllProducts = (products) => {
    let container = document.querySelector(".productsContainer")
    container.innerHTML = products.map((product) => 
        `
        <div>
            <img src = "${product.image}" >
            <h3> ${product.title} </h3>
            <h4> $${product.price}</h4>

            
        </div>
    `)
}

fetchProducts();