import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import IngredientsTable from "../components/recipe/IngredientsTable";
import TextAreaTable from "../components/recipe/textAreaTable/TextAreaTable";
import Recipe_Header from "../components/recipe/Recipe_Header";




export default function Recipe(){
    
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state


    

    const GETUPDATERECIPEENDPOINT = `https://Hennenapi.com/api/recipes/${id}`
    
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(GETUPDATERECIPEENDPOINT);
            const data = await response.json();


            console.log("Fetch Recipe");
            console.log(data);
            setDescription(data.description);
            setIngredients(data.Recipe_Ingredient);
            setSteps(data.steps.stepsList);
            if(data.notes.notesList){
                setNotes(data.notes.notesList);
            }else{
                const tempNotes = [""];
                setNotes(tempNotes);
            }

            setName(data.name);
            setLoading(false); // Set loading to false once data is received
          } catch (error) {
            if (!loading) {
                alert('Error:', error);
                setLoading(false);
            }
          }
          setLoading(false);
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    if (loading) {
        return <div>Loading...</div>; // Render loading indicator if still loading
    }

    async function updateRecipe(){

        const newIngredients = ingredients.map((ingredient) =>{ 

            if(ingredient.id == ""){
                return ({
                    recipeId: id,
                    ingredientId: ingredient.ingredientId,
                    quantity: Number(ingredient.quantity),
                    measurement: ingredient.measurement
                })
            }else{
                return ({
                    id: ingredient.id,
                    recipeId: id,
                    ingredientId: ingredient.ingredientId,
                    quantity: Number(ingredient.quantity),
                    measurement: ingredient.measurement
                })
            }
        })
        const recipe= {
            name: name,
            description: description,
            steps: {
                stepsList: steps
            },
            Recipe_Ingredient: newIngredients,
            notes: {
                notesList: notes
            }
        }

        console.log("Update Data");
        console.log(recipe);

        try {
            const response = await fetch(GETUPDATERECIPEENDPOINT, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            });
      
            if (response.ok) {
                // Recipe updated successfully
                
                alert('Recipe updated');
                window.location.reload(true);
            } else {
                // Failed to update recipe
                alert('Failed to update recipe');
            }
        } catch (error) {
            alert('Error:', error);
        }
    }

    async function deleteRecipe(){
        try {
            const response = await fetch(GETUPDATERECIPEENDPOINT, {
                method: 'DELETE',
            });
        
            if (response.ok) {
                // Recipe deleted successfully
                alert('Recipe deleted');
                // Redirect back to the /recipes page
                navigate("/recipes");

            } else {
                // Failed to delete recipe
                alert('Failed to delete recipe');
            }
        } catch (error) {
            alert('Error:', error);
        }
    };



    return (
        
        <>
            <Recipe_Header defaultName={name} defaultDescription={description} setDescription={setDescription} setName={setName}/>
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
                        <Button  className="col-10 h-100" onClick={updateRecipe}>Update Recipe</Button>
                    </Col>
                    <Col className="text-center">
                        <Button variant="danger" className="col-10 h-100" onClick={deleteRecipe}>Delete Recipe</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

