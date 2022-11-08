import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";
import Navbar from "./Navbar";

const All_data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch(`https://badbank-react.herokuapp.com/user/get`);
        result = await result.json();
        setData(result);
    }
    return (
        <>
            <Navbar />
            <table id="customers">
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Balance</th>
                </tr>
                {data.map((user) => {
                    return (<tr id={user._id}>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.balance}</td>
                    </tr>);
                })}
            </table>

        </>
    )
}

export default All_data;