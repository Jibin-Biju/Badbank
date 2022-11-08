import { useState, useEffect } from "react";
import "./css/style.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Withdraw = () => {
    const [balance, setBalance] = useState(0);//coming from backend
    const [userBalance, setUserBalance] = useState(0);//coming from user input
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch(`https://badbank-react.herokuapp.com/user/get/${sessionStorage.getItem('id')}`);
        result = await result.json();
        setBalance(result.result.balance);
    }
    const isWithdraw = async () => {

        if (userBalance <= 0) {
            alert("please enter any valid amount");
        }
        else if (Number(userBalance) > Number(balance)) {
            alert("You do not have enough money to withdraw!")
        } else {
            let result = await fetch(`https://badbank-react.herokuapp.com/user/edit/${sessionStorage.getItem('id')}`, {
                method: 'put',
                body: JSON.stringify({
                    "balance": Number(balance) - Number(userBalance)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (result.status == 200) {
                result = await result.json();
                alert("Amount Withdrawn Successfully!");
                navigate("/Home")
            }
            else {
                alert(result.result);
            }
        }

    }

    return (
        <>
            <Navbar />
            <div className="card text-white bg-success mb-3" style={{ maxWidth: "400px", height: "250px", margin: "auto" }}>
                <div className="card-header" style={{ textAlign: "center", fontSize: "20px" }}>Withdraw</div>
                <div className="card-body" style={{ fontSize: "20px" }}>
                    Amount<br />
                    <input onChange={(e) => setUserBalance(e.target.value)} type="number" className="form-control" id="withdrawAmount" placeholder="Enter amount" /><br />
                    <button onClick={isWithdraw} type="submit" className="btn" style={{ color: "black", textAlign: "center", fontSize: "20px" }} >Widthdraw</button>
                </div>
            </div>
        </>
    )
}

export default Withdraw;