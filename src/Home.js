import { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import FilterButtonComp from './Components/FilterButtonComp';

function Home(props) {
    const { handleProductCart } = props;

    const [user, setUser] = useState([])
    
    const fetchData = async () => {
        // fetch('https://dummyjson.com/products')
        //     .then((res) => res.json())
        //     .then((data) => setUser(data.products)) // data 10 records
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setUser(data.products)
    }

    useEffect(() => {
        fetchData() // Is used to call the backend data
    }, [])

  
    return (
        <div>
            <h1>Home</h1>
            <FilterButtonComp user={user} setUser={setUser} />
            <div className='parent'>
                {
                    user.map((item, id) => {
                        return (
                            <div className="card" key={id} >
                                <div className="container">
                                    <div>
                                        <img src={item.thumbnail} />
                                    </div>
                                    <h4><b>{item.title}</b></h4>
                                    <p>{item.description.substring(0, 20).concat('...')}</p>
                                    <p><b>Rating:</b> {item.rating}</p>
                                    <p><b>Price:</b> ${item.price}/-</p>
                                </div>
                                <div className='buttonGroup'>
                                    <button id='addBtn' onClick={() => handleProductCart(item)}>Add to Cart</button>
                                    <Link to={{ pathname: `/cart/${item.id}` }}>
                                        <button id='viewBtn'>View</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Home;