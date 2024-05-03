import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';

const Nav =()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.clear();
        console.log("logout")
    }
    return (
        <div>
            <ul className='nav-ul'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li>{ auth ? <Link onClick={logOut} to='/signup'>Logout</Link> : <Link to='/signup'>SignUp</Link> }</li>
            </ul>
        </div>
    )
}

export default Nav;