import { Button } from "react-bootstrap";
import InputQuantity from "./InputQuantity";
import SelectMeasurement from "./SelectMeasurement";
import SelectIngredient from "./SelectIngredient";
import { useState } from "react";

export default function Ingredient({index, measurementSelection, ingredientSelection, inputQuantity, onIngredientChange, onMeasurementChange, onQuantityChange, onClick}){

    const [selectedMeasurement, setSelectedMeasurement] = useState(measurementSelection);
    const [selectedIngredient, setSelectedIngredient] = useState(ingredientSelection);
    const [quantityValue, setQuantityValue] = useState(inputQuantity);



    function handleButtonDelete(){

        onClick();
    }

    const handleSelectedIngredientChange = (event) => {
        const value = event.target.value;

        setSelectedIngredient(value)
        onIngredientChange(value);
    };

    const handleInputQuantityChange = (event) => {
        const value = event.target.value;

        setQuantityValue(value)
        onQuantityChange(value);
    };

    const handleSelectedMeasurementChange = (event) => {
        const value = event.target.value;

        setSelectedMeasurement(value)
        onMeasurementChange(value);
    };


    return(

        <>
            <tr key={index}>
                <td><SelectIngredient selection={selectedIngredient} onChange={handleSelectedIngredientChange} /></td>
                <td><InputQuantity defaultValue={quantityValue} onChange={handleInputQuantityChange} /></td>
                <td><SelectMeasurement selection={selectedMeasurement} onChange={handleSelectedMeasurementChange} /></td>
                <td><Button variant="danger" onClick={handleButtonDelete}>Delete</Button> </td>
            </tr>        
        </>
    )
}