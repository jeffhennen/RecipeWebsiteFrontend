import Option from "../../Option";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'

export default function SelectIngredient({selection, onChange}){

    const [selectedValue, setSelectedValue] = useState(selection);
    const [ingredients, setIngredients] = useState([]);

    const GETRECIPEENDPOINT = `http://Hennenapi.com:3000/api/Ingredients`

    useEffect( () =>{

        fetch(GETRECIPEENDPOINT)
        .then(response => response.json())
        .then(data => {

            const ingredientOptions = data.map(ingredient => {

                return(
                    <Option key={ingredient.id} value={ingredient.id} label={ingredient.name}/>
                )
            })

            setIngredients(ingredientOptions);
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        });
    })


    const handleIngredientChange = (event) =>{
        const value = event.target.value;

        selectedValue(value);
        onChange(value);
    };


    return (
        <>
            <Form.Select aria-label="Select Ingredient" value={selectedValue} onChange={handleIngredientChange}>
                {ingredients}
            </Form.Select>
        </>
    )
}