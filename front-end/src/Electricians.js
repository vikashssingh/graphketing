import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Electricians() {
    const [electricians, setElectricians] = useState([]);

    useEffect(() => {
        // Fetch electricians from backend API
        axios.get('/electricians')
            .then(response => {
                setElectricians(response.data);
            })
            .catch(error => {
                console.error('Error fetching electricians:', error);
            });
    }, []);

    // Render electricians list
    return (
        <div>
            <h2>Electricians</h2>
            <ul>
                {electricians.map(electrician => (
                    <li key={electrician.electrician_id}>{electrician.name}</li>
                ))}
            </ul>
            {/* Add electrician form */}
        </div>
    );
}

export default Electricians;