import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';


function NavBarComp(props) {
  const { product } = props;
  return (
    <div className='nav'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/cart'><li>Cart {product.length == 0 ? '' : product.length}</li></Link>
      </ul>
    </div>
  )
}

export default  NavBarComp;