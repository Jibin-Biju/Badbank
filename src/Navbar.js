import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState("");
    useEffect(() => {
        let name = sessionStorage.getItem('email');
        setUsername(name.split('@')[0]);
        setRole(sessionStorage.getItem('post'));
    }, []);

    const isLogout = () => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('post');
    }
    return (
        <div id="navigation">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/Home">BadBank</Link>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            role == "Customer" ?
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/Deposit" id="Deposit">Deposit</Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "10px" }}>
                                        <Link class="nav-link" to="/Withdraw" id="Withdraw">Withdraw</Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "10px" }}>
                                        <Link class="nav-link" to="/Balance" id="Balance">Balance</Link>
                                    </li>
                                </> : 
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Userdata">User Data</Link>
                                </li>

                        }

                    </ul>
                </div>
                <div>
                    <p>username: {username}</p>
                    <p>Role: {sessionStorage.getItem('post')}</p>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link onClick={isLogout} class="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;