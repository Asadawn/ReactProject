import "./App.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Userlist from "./Userlist";
//import Calculater from './Components/Calculater';

import Todo from "./Components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
