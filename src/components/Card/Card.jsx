import './card.css';


const Card = ({ destination }) => {

    return (
        <div className='card'>
            <div className="cardContainer">
                <img src={destination.image} alt={destination.name} className="cardImg" />
                <h2 className="destinationName">{destination.name}</h2>
                <p className="destinationDesc">{destination.description}</p>
            </div>
        </div>
    )
}

export default Card