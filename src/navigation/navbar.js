import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about"
import Register from "./pages/register"
import Login from "./pages/login"
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