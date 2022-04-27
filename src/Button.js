import React from "react";

function Button({cta,disabled}) {
    return (


            <button onClick={() => console.log({cta})} disabled={disabled} type="button">{cta}</button>


    );
}

export default Button;