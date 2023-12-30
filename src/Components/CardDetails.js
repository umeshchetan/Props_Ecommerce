import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CardDetails.css';

function CardDetails() {
    const { id } = useParams();
    // console.log(card);
    const [card, setCard] = useState('')

    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setCard(data)
        // console.log(data.title);
    }

    useEffect(() => {
        fetchData() // Is used to call the backend data
    }, [])

    let rating = Array.from({ length: 5 }, (v, i) => {
        let number = i + 0.5;
        return <span className='starContainer' key={i}>
            {
                card.rating >= i + 1 ? (<i className="fa-solid fa-star stars" ></i>) 
                : card.rating >= number ? (<i className="fa-solid fa-star-half-stroke stars"></i>) 
                : (<i className="fa-regular fa-star stars"></i>)
            }
        </span>
    });

    return (
        <div>
            <div className='backBtn'>
                <Link to='/'><button>Back</button></Link>
            </div>
            {/* <h1>Card Details {id}</h1> */}
            <div className='cardDetail'>
                <img src={card.thumbnail} />
                <h1>Brand: <span className='brand'>{card.brand}</span></h1>
                <h2>Title: {card.title}</h2>
                <p>{card.description}</p>
                <p>{card.rating} <span>{rating}</span></p>
                <h3>Price: ${card.price}/-   <span>{card.discountPercentage}% off</span></h3>
            </div>
        </div>
    )
}

export default CardDetails;