import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, ToastContainer } from "react-bootstrap";
import IngredientsTable from "../components/recipe/IngredientsTable";
import TextAreaTable from "../components/recipe/textAreaTable/TextAreaTable";
import Recipe_Header from "../components/recipe/Recipe_Header";


export default function Recipe(){
    
    const {id} = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state


    

    const GETRECIPEENDPOINT = `http://Hennenapi.com:3000/api/recipes/${id}`
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(GETRECIPEENDPOINT);
            const data = await response.json();

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
            console.error("Error:", error);
            setLoading(false); // Set loading to false in case of error
          }
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    if (loading) {
        return <div>Loading...</div>; // Render loading indicator if still loading
    }



    return (
        
        <>
            <Recipe_Header defaultName={name} defaultDescription={description} setDescription={setDescription} setName={setName}/>
            <Container>
                <IngredientsTable ingredientList={ingredients} setIngredients={setIngredients}/>
            </Container>
            <Container>
                <Row >


                            <TextAreaTable contentList={steps} setContent={setSteps} contentName={"Steps"} ordered={true} />


                            <TextAreaTable contentList={notes} setContent={setNotes} contentName={"Notes"} ordered={false}/>

                </Row>
            </Container>
            <Container className=" pt-3 pb-5">
                <Row className="d-flex ">
                    <Col lg={6} className="pb-5">
                        <Button size="lg" className="col-8 h-100">Save</Button>
                    </Col>
                    <Col lg={6} className="pt-5">
                        <Button variant="danger" size="lg" className="col-8 h-100">Delete Recipe</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

