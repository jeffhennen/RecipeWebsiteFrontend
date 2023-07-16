import { useState } from "react";

export default function({defaultValue, onChange}){

    const [quantity, setQuantity] = useState(defaultValue)

    const handleInputQuantityChange = (event) =>{
        const value = event.target.value;

        setQuantity(value);
        onChange(value);
    };

    return (

        <input type="number" value={quantity} onChange={handleInputQuantityChange}/>
    )
}