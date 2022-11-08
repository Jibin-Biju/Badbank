import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Withdraw from "./Withdraw";
import Balance from "./Balance";
import Deposit from "./Deposit";
import All_data from "./All_data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Withdraw" element={<Withdraw />} />
        <Route exact path="/Balance" element={<Balance />} />
        <Route exact path="/Deposit" element={<Deposit />} />
        <Route exact path="/Userdata" element={<All_data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
