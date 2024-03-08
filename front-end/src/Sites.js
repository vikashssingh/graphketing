import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sites() {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        // Fetch sites from backend API
        axios.get('/sites')
            .then(response => {
                setSites(response.data);
            })
            .catch(error => {
                console.error('Error fetching sites:', error);
            });
    }, []);

    // Render sites list
    return (
        <div>
            <h2>Sites</h2>
            <ul>
                {sites.map(site => (
                    <li key={site.site_id}>{site.date}</li>
                ))}
            </ul>
            {/* Add site form */}
        </div>
    );
}

export default Sites;