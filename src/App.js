import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Goals} from "./pages/Goals"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import { AddGoal } from "./pages/AddGoal";
import { UpdateGoal } from "./pages/UpdateGoal";

function App() {
  return (
    <>
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Goals/></ProtectedRoute>} />
          <Route path='/add' element={<ProtectedRoute><AddGoal /></ProtectedRoute>} />
          <Route path="/update/:id" element={<ProtectedRoute><UpdateGoal /></ProtectedRoute>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
    </>
  );
}

export default App;
