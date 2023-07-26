import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import IngredientsTable from "../components/recipe/IngredientsTable";
import TextAreaTable from "../components/recipe/textAreaTable/TextAreaTable";
import RecipeHeader from "../components/recipe/RecipeHeader";




export default function AddRecipe(){
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([""]);
    const [notes, setNotes] = useState([""]);



    

    const GETCREATERECIPEENDPOINT = `https://HennenApi.com/api/recipes/addRecipe`
    

    async function createRecipe(){

        
        const newRecipe = {

            name: name,
            description: description,
            Recipe_Ingredient: ingredients,
            steps: {
                stepsList: steps
            },
            notes: {
                notesList: notes
            }
        }

        console.log(newRecipe);


        try {
            const response = await fetch(GETCREATERECIPEENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRecipe),
            });
      
            if (response.ok) {
                // Recipe updated successfully
                
                alert('Recipe was created');
                navigate("/recipes")
            } else {
                // Failed to update recipe
                alert('Failed to add recipe');
            }
        } catch (error) {
            alert('Error:', error);
        }
    }


    return (
        
        <>
            <RecipeHeader defaultName={name} defaultDescription={description} setDescription={setDescription} setName={setName}/>
            <Container className="pt-4 pb-4">
                <IngredientsTable ingredientList={ingredients} setIngredients={setIngredients}/>
            </Container>
            <Container className="p-4">
                <Row > 
                    <Col>
                        <TextAreaTable contentList={steps} setContent={setSteps} contentName={"Steps"} ordered={true} />
                    </Col>  
                    <Col>
                        <TextAreaTable contentList={notes} setContent={setNotes} contentName={"Notes"} ordered={false}/>
                    </Col>
                </Row>
            </Container>
            <Container className=" pt-3 pb-5">
                <Row className="d-flex ">
                    <Col className="text-center">
                        <Button  className="col-10 h-100" onClick={createRecipe}>Create Recipe</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

