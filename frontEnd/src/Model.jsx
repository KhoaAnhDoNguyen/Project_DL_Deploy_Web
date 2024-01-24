import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios'

function Model() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch data from Flask API when the component mounts
        axios.get('http://localhost:5000/results')
            .then(response => {
                // Update the state with the members data
                setResults(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching results:', error);
            });
    }, []); // Empty dependency array ensures the effect runs once when the component mounts


    return (
        <div>
            <h2>Results is:</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    )
  }
  
  export default Model