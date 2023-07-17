import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Ingredient from "./Ingredient/Ingredient";

export default function IngredientsTable({ingredientList, setIngredients}){

    console.log(ingredientList);
    const [ingredientComponents, setIngredientComponents] = useState([]);


    useEffect( () => {

        if(ingredientList){
            const tempIngredientComponent = ingredientList.map(( ingredient, index )  =>{

                return(
    
                    <Ingredient
                        key={index}
                        index={index}
                        measurementSelection={ingredient.measurement}
                        ingredientSelection={ingredient.id}
                        inputQuantity={ingredient.quantity}
                        onIngredientChange={handleIngredientChange}
                        onMeasurementChange={handleMeasurementChange}
                        onQuantityChange={handleQuantityChange}
                        onClick={handleDeleteRow}
                    />
                )
            })
            setIngredientComponents(tempIngredientComponent);
        }
    },[]);

    function handleIngredientChange(){


    }
    
    function handleMeasurementChange(){
        
    }
    
    function handleQuantityChange(){
        
    }

    function handleDeleteRow(){
        
    }


    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={4} className="text-center">Ingredients</th>
                    </tr>
                    <tr className="text-center">
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th>Measurement</th>
                        <th>Action</th>
                    </tr>
                    {ingredientComponents}
                </thead>
            </Table>
        </>
    );
}