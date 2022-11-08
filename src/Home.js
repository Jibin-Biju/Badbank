import bank_Image from "./img/bank.png";
import "./css/style.css";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="card bg-light mb-3" style={{ maxWidth: "600px", margin:"auto" }}>
                <div className="card-header" style={{textAlign:"center", fontSize:"20px"}}>BadBank Landing Module</div>
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", fontSize:"20px"}}>Welcome to the bank</h5>
                    <p className="card-text" style={{textAlign:"center", fontSize:"20px"}}>You can move around using the navigation bar.</p>
                    <img src={bank_Image} style={{marginLeft:"30px"}} className="img-fluid" alt="Responsive image"/>
                </div>
            </div></>
    )
}

export default Home;