import bank_Image from "./img/bank.png";
import "./css/style.css";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <div class="card bg-light mb-3" style={{ maxWidth: "600px", margin:"auto" }}>
                <div class="card-header" style={{textAlign:"center", fontSize:"20px"}}>BadBank Landing Module</div>
                <div class="card-body">
                    <h5 class="card-title" style={{textAlign:"center", fontSize:"20px"}}>Welcome to the bank</h5>
                    <p class="card-text" style={{textAlign:"center", fontSize:"20px"}}>You can move around using the navigation bar.</p>
                    <img src={bank_Image} style={{marginLeft:"30px"}} class="img-fluid" alt="Responsive image"/>
                </div>
            </div></>
    )
}

export default Home;