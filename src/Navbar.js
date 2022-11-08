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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/Home">BadBank</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            role == "Customer" ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Deposit" id="Deposit">Deposit</Link>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "10px" }}>
                                        <Link className="nav-link" to="/Withdraw" id="Withdraw">Withdraw</Link>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "10px" }}>
                                        <Link className="nav-link" to="/Balance" id="Balance">Balance</Link>
                                    </li>
                                </> : 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Userdata">User Data</Link>
                                </li>

                        }

                    </ul>
                </div>
                <div>
                    <p>username: {username}</p>
                    <p>Role: {sessionStorage.getItem('post')}</p>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link onClick={isLogout} className="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;