import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponse }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            // Trim and check if the input is empty
            const trimmedInput = jsonInput.trim();
            if (!trimmedInput) {
                setError("Input cannot be empty");
                return;
            }

            // Try to parse the JSON
            const parsedInput = JSON.parse(trimmedInput);

            // Check if the structure is correct
            if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
                setError('Invalid JSON structure: "data" should be an array.');
                return;
            }

            // If valid, send the request
            const res = await axios.post('<Heroku URL>/api/bfhl', { data: parsedInput.data });
            setResponse(res.data);
        } catch (err) {
            console.log('Error:', err);
            setError('Invalid JSON input. Please enter a valid JSON format.');
        }
    };

    return (
        <div>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Enter JSON"
                rows="5"
                cols="50"
            />
            <button onClick={handleSubmit}>Submit</button>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </div>
    );
};

export default InputForm;
