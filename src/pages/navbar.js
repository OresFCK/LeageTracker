import Layout from "./layout";
import Home from "./home";
import About from "./about"
import Register from "./register"
import Login from "./login"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
}

export default Navbar