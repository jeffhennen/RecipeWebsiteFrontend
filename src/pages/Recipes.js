import { CardGroup, Container } from "react-bootstrap";
import Recipe_Card from "../components/recipes/Recipe_Card";
import { useEffect, useState } from "react";

export default function Recipes(){

    const GETRECIPECARDENDPOINT= "http://Hennenapi.com:3000/api/recipeCards"
    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch(GETRECIPECARDENDPOINT)
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data
            const newCards = data.map(card => {
            console.log("return statement Fetch");
                return(
                  
                  <Recipe_Card 
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    description={card.description}
                  />
                )
              })
            
              setCards(newCards);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });

    }, []);



    return (
        <>
        <Container fluid>
            <Container className="justify-content-center">
                <h1 className="text-center pt-5 pb-5">Welcome to the Recipes Page</h1>
                <p className="text-center">This page has all the corresponding recipes that are currently in our database, please click any of the corresponding recipes to navigate to their corresponding page.</p>
            </Container>
            <CardGroup className="">
                {cards}
            </CardGroup>
        </Container>

        </>
    )
}

