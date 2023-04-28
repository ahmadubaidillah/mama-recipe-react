import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Pages/Home";
import AddRecipe from "./Pages/AddRecipe";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DetailRecipe from "./Pages/DetailRecipe";
import VideoStep from "./Pages/VideoStep";
import Profile from "./Pages/Profile";
import Profile2 from "./Pages/Profile2";
import Profile3 from "./Pages/Profile3";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/DetailRecipe" element={<DetailRecipe />} />
        <Route path="/VideoStep" element={<VideoStep />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile2" element={<Profile2 />} />
        <Route path="/Profile3" element={<Profile3 />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
