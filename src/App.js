import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
