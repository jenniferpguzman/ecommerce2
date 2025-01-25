import React from 'react'


function Products({products}){
    return(
        <>
        <div className="product_list">Products</div>
                {products.map((product, index) => (
                <div key={index} className="product-card">
                    <h2>{product.style_number}</h2>
                    <h2>{product.title}</h2>
                    <h2>{product.description}</h2>
                    <h2>{product.price}</h2>
                    <h2>{product.category}</h2>
                    {/* <h2>{product.image_url}</h2> */}

                </div>
                ))}
        </>
    );
}

export default Products;