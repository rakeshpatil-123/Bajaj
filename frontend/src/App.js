import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div>
            <InputForm setResponse={setResponse} />
            {response && (
                <ResponseDisplay
                    response={response}
                    setSelectedOptions={setSelectedOptions}
                    selectedOptions={selectedOptions}
                />
            )}
        </div>
    );
};

export default App;
