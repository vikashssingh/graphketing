import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Assignments() {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        // Fetch assignments from backend API
        axios.post('/assignments')
            .then(response => {
                setAssignments(response.data);
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    }, []);

    // Render assignments
    return (
        <div>
            <h2>Assignments</h2>
            {/* Display assignments */}
        </div>
    );
}

export default Assignments;