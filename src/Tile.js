import React from "react";

function Tile({image, title, children}) {
    return (
        <section>
            {image &&
                <img src={image} alt={title}/>
            }
            {title &&
                <h2>{title}</h2>
            }
            {children}
        </section>
    );
}

export default Tile;