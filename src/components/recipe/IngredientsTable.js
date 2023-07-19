import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Ingredient from "./Ingredient/Ingredient";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export default function IngredientsTable({ ingredientList, setIngredients }) {
    const [ingredientComponents, setIngredientComponents] = useState([]);

    useEffect(() => {
        generateIngredientComponents();
    }, [ingredientList]);

    function generateIngredientComponents() {
        const tempIngredientComponent = ingredientList.map((ingredient, index) => {


            const uniqueKey = ingredient.id || uuidv4();
            return (
                <Ingredient
                    key={uniqueKey}
                    index={index}
                    measurementSelection={ingredient.measurement}
                    ingredientSelection={ingredient.ingredientId}
                    inputQuantity={ingredient.quantity}
                    onIngredientChange={handleIngredientChange}
                    onMeasurementChange={handleMeasurementChange}
                    onQuantityChange={handleQuantityChange}
                    onClick={handleDeleteRow}
                />
            );
        });

        setIngredientComponents(tempIngredientComponent);
    }

    function handleIngredientChange(value, index) {
        const newList = [...ingredientList];
        newList[index].ingredientId = value;
        setIngredients(newList);
    }

    function handleMeasurementChange(value, index) {
        const newList = [...ingredientList];
        newList[index].measurement = value;
        setIngredients(newList);
    }

    function handleQuantityChange(value, index) {
        const newList = [...ingredientList];
        newList[index].quantity = value;
        setIngredients(newList);
    }

    function handleDeleteRow(index) {
        const newList = [...ingredientList];
        newList.splice(index, 1);
        setIngredients(newList);
    }

    function addIngredient() {
        const newList = [...ingredientList];
        newList.push({
            id: '',
            recipeId: 1,
            ingredientId: '',
            quantity: 0,
            measurement: ''
        });
        setIngredients(newList);
    }

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th colSpan={4} className="text-center">Ingredients</th>
                </tr>
                <tr className="text-center">
                    <th className="col-6">Ingredient</th>
                    <th className="col-1">Quantity</th>
                    <th className="col-4">Measurement</th>
                    <th className="col-1">Action</th>
                </tr>
                </thead>
                <tbody>
                    {ingredientComponents}
                    <tr>
                        <td colSpan={4}><Button className="col-12" onClick={addIngredient}>Add Ingredient</Button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
