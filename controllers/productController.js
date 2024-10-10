import Products from "../models/productModel.js"


export const addProduct = async (req, res) => {
    await Products.create({
        name: "Test Product",
        description: "Test Product",
        price: 100,
    })
    res.send("Product added successfully")
}

export const getProducts = async() => {
    
}