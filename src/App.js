import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UploadFood from "./components/UploadFood";
import MyOrders from "./components/MyOrders";
import Contact from "./pages/Contact";
import VerifyOtp from "./components/VerifyOtp";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/food-upload" element={<UploadFood/>} />
        <Route path="/my-orders" element={<MyOrders/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/otp-verify" element={<VerifyOtp/>} />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/privacy-policy" element={ <PrivacyPolicy /> } />
        <Route path="/Admin-panel" element={ <AdminPanel /> } />
      </Routes>
    </div>
  );
}

export default App;
