import React, { useEffect, useState } from 'react';
import './Cart.css';

export default function Cart(props) {
  const { product, setProduct } = props;
  const [price, setPrice] = useState(0)


  const handleRemove = (items) => {
    // console.log(id);
    let filterItem = product.filter((item) => {
      if (item.id != items) {
        return item
      }
    })
    setProduct(filterItem)
    // handlePrice()
  }

  const handlePrice = () => {
    let res = 0;
    // console.log('data==>',item);
    product.map((items) => {
      res += items.price
    })
    setPrice(res)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <div>
      {/* <h1>I am Cart Page...</h1> */}
      <div>
        {
          product.length == 0 ? (<h1>Cart is Empty...</h1>) : (
            product.map((item, id) => {
              return (
                <>
                  <div className="cardCart" key={id}>
                    <img src={item.thumbnail} />
                    <div className='cardContent'>
                      <h4><b>{item.title}</b></h4>
                      <p>{item.description.substring(0, 40).concat('...')}</p>
                      <p><b>Rating:</b> {item.rating}</p>
                      <p><b>Price:</b> ${item.price}/-</p>
                    </div>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </>
              )
            })
          )
        }
        <div style={{ width: '100%', height: '80px', border: '3px solid black', display: 'grid', placeItems: 'center' }}>
          <h1>Total Price: {price}/- </h1>
        </div>
      </div>
    </div>
  )
}
