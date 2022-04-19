import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { auth, setAuth } = useAuth();
    console.log(auth?.user);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/');
    }

    const ROLES = {
        'User': 2001,
        'Editor': 1984,
        'Admin': 5150
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='icon-home'>
                <Link to="/" style={{ textDecorationLine: 'none', }}>
                    <img src='Pics/logo.png' style={{ width: 50, height: 50, marginLeft: 25 }} />
                    <a style={{ fontSize: 20, color: 'white' }}>Home</a>
                </Link>
            </div>

            <div className='btn-nav'>

                <div>
                    {auth?.user ? (
                        auth?.roles?.find(role => [ROLES.User]?.includes(role)) ?
                            (<>
                                <Link to="admin" style={{ color: 'white' }}>
                                    <button type="button" class="btn btn-outline-light" style={{ width: 140, marginRight: 20 }}>
                                        Admin
                                    </button>
                                </Link>

                                <button type="button" class="btn btn-outline-light" onClick={logout} style={{ width: 140, marginRight: 20 }}>
                                    Logout
                                </button>
                            </>)
                            :
                            (auth?.roles?.find(role => [ROLES.Editor]?.includes(role)) ?
                                (<Link to="editor" style={{ color: 'white' }}>
                                    <button type="button" class="btn btn-outline-light" style={{ width: 140, marginRight: 20 }}>
                                        Editor
                                    </button>
                                </Link>)
                                :
                                (<></>))
                    ) :
                        (<>
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
                        </>)}

                    <Link to="linkpage" style={{ color: 'white' }}>
                        <button type="button" class="btn btn-outline-light" style={{ width: 140, marginRight: 20 }}>
                            linkpage
                        </button>
                    </Link>
                </div>

            </div>

        </nav>



    )
}

export default Navbar;