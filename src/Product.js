import React from "react";


function Product({ labelText, image, title, price }) {
    return (
        <article>
            <span>{labelText}</span>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;