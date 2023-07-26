import { useState } from "react"
import { Form, Button } from "react-bootstrap";

export default function Ingredient({ id, index, defaultName, defaultDescription, onNameChange, onDescriptionChange, onDelete }){

    const [name, setName] = useState(defaultName || "")
    const [description, setDescription] = useState(defaultDescription || "");

    function handleNameChange(event){
        const value = event.target.value;

        setName(value);
        onNameChange(value, index);
    }

    function handleDescriptionChange(event){
        const value = event.target.value;

        setDescription(value);
        onDescriptionChange(value, index);
    }

    function handleDeleteIngredient(){
        onDelete(index);
    }

    return (

        <tr key={id}>
            <td className="col-4">
                <Form.Control type="text" placeholder="Enter Ingredient name" onChange={handleNameChange} value={name}/>
            </td>
            <td className="col-7">
                <textarea className="col-12" value={description} onChange={handleDescriptionChange}></textarea>
            </td>
            <td className="col-1">
                <Button variant="danger" onClick={handleDeleteIngredient}>X</Button>
            </td>
        </tr>
    )
}