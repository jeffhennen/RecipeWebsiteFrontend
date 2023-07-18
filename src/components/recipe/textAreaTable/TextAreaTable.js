import { useState } from "react";
import { Table } from "react-bootstrap";
import TextAreaTableItem from "./TextAreaTableItem";

export default function TextAreaTable({contentList, setContent, contentName, ordered}){

    const [tableItems, setTableItems] = useState(generateTableItems());


    function onDelete(index){

        const newList = [...contentList];
        newList.splice(index,1);
        setContent(newList);
    }

    function onChange(value, index){

        const newList = [...contentList];
        newList[index] = value;
        setContent(newList);
    }

    function onAdd(){

        const newList = [...tableItems];
        newList.push("");
        setContent(newList);
    }

    function generateTableItems(){

        const tempTableItems = contentList.map( (tableItem, index) =>{

            return (

                <TextAreaTableItem

                    key={index}
                    defaultValue={tableItem}
                    onDelete={onDelete}
                    onChange={onChange}
                    onAdd={onAdd}
                />
            );
        });

        return tempTableItems;
    }

    return(

        <Table>
            <thead>
                <th colSpan={ordered ? 3: 2}>{contentName}</th>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}