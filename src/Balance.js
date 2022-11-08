import { useState, useEffect } from "react";
import "./css/style.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Balance = () => {
    const [balance, setBalance] = useState(0);//coming from backend
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch(`https://badbank-react.herokuapp.com/user/get/${sessionStorage.getItem('id')}`);
        result = await result.json();
        setBalance(result.result.balance);
    }
    return (
        <>
            <Navbar />
            <div className="card text-white bg-info mb-3" style={{ maxWidth: "300px", height: "200px", margin: "auto" }}>
                <div style={{fontSize:"20px", textAlign:"center", marginTop:"80px"}}>Balance: {balance}</div>
            </div>
        </>
    )
}

export default Balance;