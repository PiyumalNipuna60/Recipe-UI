import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
import FoodMenu from './pages/foodMenuPage/FoodMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/home" element={<FoodMenu />} /> 
      </Routes>
    </Router>
  );
}

export default App;
