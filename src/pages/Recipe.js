import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IngredientsTable from "../components/recipe/IngredientsTable";
import TextAreaTable from "../components/recipe/textAreaTable/TextAreaTable";


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
    
            console.log(data);
            setDescription(data.description);
            setIngredients(data.Recipe_Ingredient);
            setSteps(data.steps.stepsList);
            setNotes(data.notes);
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
            {/* <Recipe_Header/> */}
            <Container className="p-5">
                <IngredientsTable ingredientList={ingredients} setIngredients={setIngredients}/>
            </Container>
            <Container>
                <Container>
                    <TextAreaTable contentList={steps} setContent={setSteps} contentName={"Cooking Steps"} ordered={true} />
                </Container>
                <Container>
                    {/* {notes} */}
                </Container>
            </Container>
        </>
    )
}

