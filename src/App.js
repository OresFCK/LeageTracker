import './App.css';
import ExampleComponent from './test';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs"


function App() {
  return (
    <div>
      <div className="App">
      <h1>Example Component</h1>
    </div>
    <div style={{marginLeft:'25px'}}>
    <ExampleComponent />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </div>
    
  );
}

// npm install php bin/console doctrine:database:create composer install

export default App;
