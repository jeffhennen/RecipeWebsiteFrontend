import { Button } from "react-bootstrap";
import InputQuantity from "./InputQuantity";
import SelectMeasurement from "./SelectMeasurement";
import SelectIngredient from "./SelectIngredient";
import { useState } from "react";

export default function Ingredient({
  index,
  measurementSelection,
  ingredientSelection,
  inputQuantity,
  onIngredientChange,
  onMeasurementChange,
  onQuantityChange,
  onClick
}) {
  const [selectedMeasurement, setSelectedMeasurement] = useState(measurementSelection ? measurementSelection : "");
  const [selectedIngredient, setSelectedIngredient] = useState(ingredientSelection ? ingredientSelection : "");
  const [quantityValue, setQuantityValue] = useState(inputQuantity ? inputQuantity : "");

  function handleButtonDelete() {
    onClick(index);
  }

  const handleSelectedIngredientChange = (value) => {
    setSelectedIngredient(value);
    onIngredientChange(value, index);
  };

  const handleInputQuantityChange = (value) => {
    setQuantityValue(value);
    onQuantityChange(value, index);
  };

  const handleSelectedMeasurementChange = (value) => {
    setSelectedMeasurement(value);
    onMeasurementChange(value, index);
  };

  return (
    <>
      <tr key={index}>
        <td className="col-6">
          <SelectIngredient
            selection={selectedIngredient}
            onChange={handleSelectedIngredientChange}
          />
        </td>
        <td className="col-1">
          <InputQuantity
            defaultValue={quantityValue}
            onChange={handleInputQuantityChange}
          />
        </td>
        <td className="col-4">
          <SelectMeasurement
            selection={selectedMeasurement}
            onChange={handleSelectedMeasurementChange}
          />
        </td>
        <td className="col-1">
          <Button variant="danger" onClick={handleButtonDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
