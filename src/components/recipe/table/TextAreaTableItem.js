import {useState} from 'react'
import Button from "./Button";

export default function TextAreaTableItem({defaultValue, index, onDelete, onChange, ordered}){

    const [value, setValue] = useState(defaultValue || "")

    function handleValueChange(event){

        const eventValue = event.target.value;
        setValue(eventValue);
        onChange(eventValue);
    }

    function handleDeleteRow(event){
        
        onDelete(index);
    }

    return (

        <tr key={index}>
            {ordered ? <td>{index}</td>: null}
            <td><textarea value={value} onChange={handleValueChange}></textarea></td>
            <td><Button onClick={handleDeleteRow}>X</Button></td>
        </tr>
        
    )
}