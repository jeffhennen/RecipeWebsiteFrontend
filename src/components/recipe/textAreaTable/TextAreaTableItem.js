import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function TextAreaTableItem({ defaultValue, index, onDelete, onChange, ordered, uniqueKey }) {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(event) {
    const eventValue = event.target.value;
    setValue(eventValue);
    onChange(eventValue, index);
  }

  function handleDeleteRow() {
    onDelete(index);
  }



  return (
    <tr key={uniqueKey}>
      {ordered ? <td className="col-1">{`${index + 1}.`}</td> : null}
      <td className="col-10">
        <textarea
          className="col-12"
          value={value}
          onChange={handleValueChange}
        ></textarea>
      </td>
      <td className="col-1">
        <Button variant="danger" onClick={handleDeleteRow}>
          X
        </Button>
      </td>
    </tr>
  );
}
