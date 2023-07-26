import { useEffect, useState } from "react";
import Ingredient from "./IngredientPageTableComponent";
import { v4 as uuidv4 } from 'uuid';
import { Table, Button } from "react-bootstrap";

export default function IngredientTable({ ingredientList, setIngredientList }){

    const [ingredientComponents, setIngredientComponents] = useState([]);

    const INGREDIENTENDPOINT = "https://HennenAPI.com/api/Ingredients"

    useEffect( () =>{

        const tempIngredientComponents = ingredientList.map( (ingredient, index) =>{

            return (
                <Ingredient
                    key={ingredient.id || ingredient.uuid}
                    id={ingredient.id || ingredient.uuid}
                    index={index}
                    defaultName={ingredient.name}
                    defaultDescription={ingredient.description}
                    onNameChange={handleNameChange}
                    onDescriptionChange={handleDescriptionChange}
                    onDelete={handleDeleteRow}
                />
            )
        }, [ingredientList]);

        setIngredientComponents(tempIngredientComponents);
    }, [ingredientList])

    function handleNameChange(name, index){

        const newList = [...ingredientList]
        newList[index].name = name
        setIngredientList(newList);
    }

    function handleDescriptionChange(description, index){

        const newList = [...ingredientList]
        newList[index].description = description
        setIngredientList(newList);
    }

    async function handleDeleteRow(index) {
        const ingredientIdToDelete = ingredientList[index].id;
      
        try {
          // Make the API call to delete the ingredient
          const response = await fetch(`${INGREDIENTENDPOINT}/${ingredientIdToDelete}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            // Check for 400 Bad Request (ingredient in use) and handle the error
            if (response.status === 400) {
              const errorData = await response.json();
              // Handle the error response and show it to the user (e.g., using an alert)
              alert(errorData.error);
            } else {
              // Handle other unexpected errors (e.g., server error)
              alert('Failed to delete the ingredient.');
            }
          } else {
            // Delete the ingredient from the list if the deletion was successful
            const newList = [...ingredientList];
            newList.splice(index, 1);
            setIngredientList(newList);
          }
        } catch (error) {
          // Handle any other errors that occur during the API call
          alert('An error occurred while deleting the ingredient.');
          console.error(error);
        }
      }

      async function addIngredient() {
        const newIngredient = {
          name: "New Ingredient",
          description: "Description goes here",
        };
      
        try {
          // Make the API call to add the new ingredient to the backend
          const response = await fetch(INGREDIENTENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newIngredient),
          });
      
          if (response.ok) {
            // If the ingredient was successfully added to the backend,
            // get the newly created ingredient ID from the response
            const data = await response.json();
            newIngredient.id = data.id
            newIngredient.uuid = uuidv4();
      
            // Update the ingredient list state with the new ingredient
            setIngredientList((prevList) => [...prevList, newIngredient]);
          } else {
            // Handle errors if the ingredient addition fails
            alert('Failed to add the ingredient.');
          }
        } catch (error) {
          // Handle other errors that may occur during the API call
          console.error(error);
          alert('An error occurred while adding the ingredient.');
        }
      }

    return (

        <Table>
            <thead>
                <tr key={uuidv4()}>
                    <th colSpan={3} className="text-center">Ingredients</th>
                </tr>
                <tr className="text-center" key={uuidv4()}>
                    <th className="col-5">Name</th>
                    <th className="col-6">Description</th>
                    <th className="col-1">Action</th>
                </tr>
            </thead>
            <tbody>
                {ingredientComponents}
                <tr key={uuidv4()}>
                    <td colSpan={3}>
                        <Button className="col-12" onClick={addIngredient}>Add Ingredient</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}