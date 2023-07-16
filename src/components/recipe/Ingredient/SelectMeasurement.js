import { Form } from 'react-bootstrap';
import Option from '../../Option'
import { useState } from 'react';

export default function SelectMeasurement({selection, onChange}){

    const [selectedValue, setSelectedValue] = useState(selection);
    const [options, setOptions] = useState([])
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
      ];

    const tempOptions = measurements.map( (measurement, index) => {
        
        return (
            <Option key={index} value={measurement.value} label={measurement.label}/>
        )
    })
    setOptions(tempOptions);

    const handleMeasurementChange = (event) => {
        const value = event.target.value;

        setSelectedValue(value)
        onChange(value);
      };

    return(

        <Form.Select aria-label='Select Measurement' value={selectedValue} onChange={handleMeasurementChange}>
            {options}
        </Form.Select>
    )
}