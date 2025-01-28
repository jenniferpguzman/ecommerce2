import React from 'react'
// import '../stylesheets/Navbar.css'
import '../stylesheets/Product.css'

function Products({products}){
    return(
        <>
        <div className="product_list">Products</div>
                {products.map((product, index) => (
                <div key={index} className="product-card">
                    <h2>{product.style_number}</h2>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <img src={product.image_url} alt={product.title} />

                </div>
                ))}
        </>
    );
}

export default Products;