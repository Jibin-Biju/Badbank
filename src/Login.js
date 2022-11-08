import "./css/style.css";
import "./css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useEffect, useContext } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
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
        let result = await fetch('http://localhost:8080/login', {
            method: 'post',
            body: JSON.stringify({
                "email": email,
                "password": pass
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (result.status == 200) {
            result = await result.json();
            console.log(result);
            sessionStorage.setItem('post', result.result.post);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('id', result.result._id);
            navigate('/Home');
        } else {
            result = await result.json();
            alert(result.result);
        }


    }
    return (
        <>
            <div className="login-bg">
                <div id="wrap">
                    <div className="loginParentContainer">
                        <div className="subContainer">
                            <div style={{ textAlign: "center" }}>
                                <h2>Login</h2>
                            </div>
                            <div className="loginForm">
                                <label htmlFor="">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                                <label htmlFor="">Password</label>
                                <input onChange={(e) => setPass(e.target.value)} type="password" className="field" /><br />
                                <button onClick={isValid} type="submit" className="Loginbtn" >Login</button>

                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <Link to="/Signup">Create an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;