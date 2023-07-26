import FormSelect from 'react-bootstrap/FormSelect';
import Option from '../../Option';
import { useEffect, useState } from 'react';

export default function SelectMeasurement({ selection, onChange }) {
  const [selectedValue, setSelectedValue] = useState(selection ? selection: null);
  const [options, setOptions] = useState([]);

  const measurements = [
    { label: 'Teaspoon (tsp)', value: 'tsp' },
    { label: 'Tablespoon (tbsp)', value: 'tbsp' },
    { label: 'Fluid Ounce (fl oz)', value: 'fl oz' },
    { label: 'Cup', value: 'cup' },
    { label: 'Pint', value: 'pint' },
    { label: 'Quart', value: 'quart' },
    { label: 'Gallon', value: 'gallon' },
    { label: 'Ounce (oz)', value: 'oz' },
    { label: 'Pound (lb)', value: 'lb' },
    { label: 'Gram (g)', value: 'g' },
    { label: 'Kilogram (kg)', value: 'kg' },
    { label: 'Milliliter (ml)', value: 'ml' },
    { label: 'Liter (l)', value: 'l' },
    { label: 'Units', value: 'Units' },
    { label: 'Dash', value: 'Dash' },
  ];

  measurements.sort();

  useEffect(() => {

    const tempOptions = measurements.map((measurement, index) => {
      return <Option key={index} value={measurement.value} label={measurement.label} />;
    });
    setOptions(tempOptions);

    if(selectedValue == null){
      setSelectedValue(tempOptions[0].props.value);
      onChange(tempOptions[0].props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMeasurementChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <FormSelect aria-label="Select Measurement" value={selectedValue ? selectedValue: ''} onChange={handleMeasurementChange}>
      {options}
    </FormSelect>
  );
}
