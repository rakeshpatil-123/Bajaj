import React from 'react';
import Select from 'react-select';

const ResponseDisplay = ({ response, setSelectedOptions, selectedOptions }) => {
    const options = [
        { value: 'alphabets', label: 'Alphabets' },
        { value: 'numbers', label: 'Numbers' },
        { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
    ];

    // Handle the change to set the selected options correctly
    const handleChange = (selected) => {
        // Ensure selected is an array of objects with 'value' and 'label'
        setSelectedOptions(selected);
    };

    return (
        <div>
            <Select
                options={options}
                isMulti
                onChange={handleChange} // Update selected options on change
            />
            {/* Display the selected options */}
            {selectedOptions.map((opt) => (
                <div key={opt.value}>
                    <h3>{opt.label}</h3>
                    <p>{JSON.stringify(response[opt.value] || [])}</p> {/* If the key doesn't exist, return an empty array */}
                </div>
            ))}
        </div>
    );
};

export default ResponseDisplay;
