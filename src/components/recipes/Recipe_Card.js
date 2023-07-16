import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Recipe_Card({id, name, description, img}){
    return(
        <Link to={`/recipes/${id}`} className="recipe-card-link col-sm-3 p-2">
            <Card className="recipe-card">
                <CardImg>{img}</CardImg>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}