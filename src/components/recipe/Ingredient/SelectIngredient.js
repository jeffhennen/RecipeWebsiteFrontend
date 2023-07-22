import Option from "../../Option";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'

export default function SelectIngredient({selection, onChange}){

    const [selectedValue, setSelectedValue] = useState(selection ? selection: null);
    const [ingredients, setIngredients] = useState();

    const GETRECIPEENDPOINT = `https://Hennenapi.com/api/Ingredients`

    useEffect( () =>{

        fetchIngredients();
    }, [])

    async function fetchIngredients(){

        await fetch(GETRECIPEENDPOINT)
        .then(response => response.json())
        .then(data => {

            const ingredientOptions = data.map(ingredient => {

                return(
                    <Option key={ingredient.id} value={ingredient.id} label={ingredient.name}/>
                )
            })

            setIngredients(ingredientOptions);

            if(selectedValue == null && ingredientOptions.length > 0){
                setSelectedValue(ingredientOptions[0].props.value);
                onChange(ingredientOptions[0].props.value);
            }
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        })
    }


    const handleIngredientChange = (event) =>{

        fetchIngredients();
        const value = event.target.value;

        setSelectedValue(value);
        onChange(value);
    };


    return (
        <>
            <Form.Select aria-label="Select Ingredient" value={selectedValue ? selectedValue: ''} onChange={handleIngredientChange}>
                {ingredients}
            </Form.Select>
        </>
    )
}