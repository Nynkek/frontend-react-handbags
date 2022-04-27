import React from "react";

function Tile({image, title, paragraaf}) {
    return (
        <section>
            {image &&
                <img src={image} alt={title}/>
            }
            <h2>{title}</h2>
            <p className="paragraaf">{paragraaf}</p>
        </section>

    );
}

export default Tile;