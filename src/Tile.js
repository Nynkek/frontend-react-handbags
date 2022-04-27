import React from "react";

function Tile({image, title, paragraaf1, paragraaf2}) {
    return (
        <section>
            {image &&
                <img src={image} alt={title}/>
            }
            <h2>{title}</h2>
            <p>{paragraaf1}</p>

            {paragraaf2 &&
                <p>{paragraaf2}</p>
            }
        </section>

    );
}

export default Tile;