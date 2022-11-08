import "./css/style.css";
import "./css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useEffect, useContext } from "react";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [role, setRole] = useState('Customer');
    const navigate = useNavigate();
    useEffect(() => {
        //     if(post!=''){
        //         console.log(email);
        //         navigate('/');
        //     }
    }, []);

    const isValid = async () => {
        console.log(email);
        console.log(pass);
        console.log(role);
        let result = await fetch('https://badbank-react.herokuapp.com/signup', {
            method: 'post',
            body: JSON.stringify({
                "email": email,
                "password": pass,
                "post": role,
                "balance": 0
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (result.status==200) {
            result = await result.json(); 
            alert(result.result);  
            navigate('/');         
        } else {
            result = await result.json();
            console.log(result)
            alert(result.result);
        }
        

    }
    return (
        <div className="login-bg">
            <div id="wrap">
                <div className="loginParentContainer">
                    <div className="subContainer">
                        <div style={{ textAlign: "center" }}>
                            <h2>Signup</h2>
                        </div>
                        <div className="loginForm">
                            <label htmlFor="">Role</label><br/>
                            <select onChange={(e) => setRole(e.target.value)} style={{width:"100%", height:"45px", borderRadius:"3px",border:"1px solid #ccc", cursor:"pointer", outline:"none" }} >
                                <option>Customer</option>
                                <option>Employee</option>
                            </select><br /><br />
                            <label htmlFor="">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                            <label htmlFor="">Password</label>
                            <input onChange={(e) => setPass(e.target.value)} type="password" className="field" /><br />
                            <button onClick={isValid} type="submit" className="Loginbtn" >Signup</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;