import { useState, useEffect } from "react";
import "./css/style.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Deposit = () => {
    const [balance, setBalance] = useState(0);//coming from backend
    const [userBalance, setUserBalance] = useState(0);//coming from user input
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch(`http://localhost:8080/user/get/${sessionStorage.getItem('id')}`);
        result = await result.json();
        setBalance(result.result.balance);
    }
    const isDeposit = async () => {

        if (userBalance <= 0) {
            alert("please enter any valid amount");
        } else {
            let result = await fetch(`http://localhost:8080/user/edit/${sessionStorage.getItem('id')}`, {
                method: 'put',
                body: JSON.stringify({
                    "balance": Number(balance) + Number(userBalance) 
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (result.status == 200) {
                result = await result.json();
                alert(result.result);
                navigate("/Home")
            }
            else{
                alert(result.result);
            }
        }

    }
    return (
        <>
            <Navbar />
            <div class="card text-white bg-warning mb-3" style={{ maxWidth: "400px", height: "250px", margin: "auto" }}>
                <div class="card-header" style={{ textAlign: "center", fontSize: "20px" }}>Deposit</div>
                <div class="card-body" style={{ fontSize: "20px" }}>
                    Amount<br />
                    <input onChange={(e) => setUserBalance(e.target.value)} type="number" class="form-control" id="depositAmount" placeholder="Enter amount" min={1} required /><br />
                    <button onClick={isDeposit} type="submit" class="btn" style={{ color: "black", textAlign: "center", fontSize: "20px" }}>Deposit</button>
                </div>
            </div>
        </>
    )
}

export default Deposit;