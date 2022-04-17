import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {


    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='icon-home'>
                <Link to="/">
                    <img src='Pics/logo.png' style={{ width: 50, height: 50, marginLeft: 25 }} />
                </Link>
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/" style={{ fontSize: 20, color: 'white' }}>Home</a>
            </div>

            <div className='btn-nav'>

                <div>

                    <Link to="login" style={{ color: 'white' }}>
                        <button type="button" class="btn btn-outline-light" style={{ width: 140, marginRight: 20 }}>
                            Login
                        </button>
                    </Link>

                    <Link to="register" style={{ color: 'white' }}>
                        <button type="button" class="btn btn-outline-light" style={{ width: 140, marginRight: 20 }}>
                            Register
                        </button>
                    </Link>
                </div>

            </div>



        </nav>



    )
}

export default Navbar;