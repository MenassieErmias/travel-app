import './destinations.css';
import { useState, useEffect } from 'react';

import Card from '../Card/Card';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5500/data/");
            const data = await response.json();
            setDestinations(data);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(`Destinations: ${typeof (destinations)}`)
    }, [destinations])

    return (
        <main className="destinations" id='destinations'>
            <div className="cardsContainer">
                {
                    destinations.map((destination, index) => (
                        <Card destination={destination} key={index} />
                    ))
                }

            </div>
        </main>
    )
}

export default Destinations