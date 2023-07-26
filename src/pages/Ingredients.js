import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import IngredientTable from "../components/Ingredients/IngredientPageTable";

export default function Ingredients(){

    const [ingredientList, setIngredientList] = useState([]);

    const GETINGREDIENTENDPOINT = `https://HennenApi.com/api/Ingredients`

    useEffect(() =>{

        fetchIngredients();
        //Need to implement the fetch and setIngredients
    }, [])

    async function fetchIngredients() {
        try {
          const response = await fetch(GETINGREDIENTENDPOINT);
          const data = await response.json();


          setIngredientList(data);
      
        } catch (error) {
          // Handle any errors
          console.error('Error:', error);
        }
    }

    async function updateIngredients(){

        // Make the fetch request to update ingredients
        fetch(GETINGREDIENTENDPOINT, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredientList),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update ingredients');
            }
            return response.json();
        })
        .then((data) => {
            alert(data.message); // Optional: Handle the response data after successful update
        })
        .catch((error) => {
            alert("Error: ", error); // Handle the error
        });
    }


    return (
        <Container>
            <h1 className="text-center pt-5 pb-5">Ingredients List</h1>
            <p className="text-center pb-3">Below is the list of all ingredients, please enter the ingredients that you would like to use for upcoming recipes that you would like to make.</p>
            <IngredientTable ingredientList={ingredientList} setIngredientList={setIngredientList}/>
            <Button onClick={updateIngredients}>Update Ingredients</Button>
        </Container>
    )
}

