import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about"
import Register from "./pages/register"
import Login from "./pages/login"
import Builds from "./pages/homecards/builds";
import Profile from "./pages/homecards/profile";
import History from "./pages/homecards/history";
import ItemForm from "../forms/itemForm";
import BuildForm from "../forms/buildForm";
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
                <Route path="profile" element={<Profile />} />
                <Route path="history" element={<History />} />
                <Route path="builds" element={<Builds />} />
                <Route path="addItem" element={<ItemForm />} />
                <Route path="addBuild" element={<BuildForm />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
}

export default Navbar