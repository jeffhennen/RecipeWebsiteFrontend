import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import TextAreaTableItem from "./TextAreaTableItem";

export default function TextAreaTable({contentList, setContent, contentName, ordered}) {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    setTableItems(generateTableItems());
  }, [contentList]);

  function onDelete(index) {
    const newList = [...contentList];
    newList.splice(index, 1);
    setContent(newList);
  }

  function onChange(value, index) {
    const newList = [...contentList];
    newList[index] = value;
    setContent(newList);
  }

  function onAdd() {
    const newList = [...contentList];
    newList.push("");
    setContent(newList);
  }

  function generateTableItems() {
    return contentList.map((tableItem, index) => {
      const uniqueKey = tableItem.id || index;
      return (
        <TextAreaTableItem
          key={uniqueKey}
          defaultValue={tableItem}
          index={index}
          onDelete={onDelete}
          onChange={onChange}
          onAdd={onAdd}
          ordered={ordered}
          uniqueKey={uniqueKey}
        />
      );
    });
  }

  return (
    <Table className="pt-5 pb-5">
      <tbody>
        <tr>
          <th className={"text-center"} colSpan={ordered ? 3 : 2}>
            {contentName}
          </th>
        </tr>
        {tableItems}
        <tr>
          <td colSpan={ordered ? 3 : 2}>
            <Button className="col-12" onClick={onAdd}>
              {ordered ? "Add Step": "Add Note"}
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
