import './destinations.css';
import { useState, useEffect } from 'react';

import Card from '../Card/Card';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.jsonbin.io/v3/b/650713322639b33ebfa7d297",
                {
                    method: "GET",
                    withCredentials: true,
                    headers: {
                        "X-ACCESS-KEY": "$2b$10$NzCtzXwaCoxnRsTshnUixuW9T.QE56mg1lIed1/Z4yGgsCHqjZz.i",
                        "Content-type": "application/json"
                    }
                }
            );
            // console.log(`Response ${response}`)
            const data = await response.json();
            setDestinations(data.record.data);
            console.log(`Destination: ${JSON.stringify(data)}`)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(`Destinations: ${typeof (destinations)}`)
        console.log(`Destinations: ${destinations}`)
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