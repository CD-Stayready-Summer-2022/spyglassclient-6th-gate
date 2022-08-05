import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Goals} from "./pages/Goals"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/goals' element={<Goals/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
