
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';





function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
     
        <Route path ="/" element ={<Home></Home>}></Route>
        <Route path ="/home" element ={<Home></Home>}></Route>
        <Route path ="/login" element ={<Login></Login>}></Route>
        <Route path ="/register" element ={<Register></Register>}></Route>
        <Route path ="/about" element ={<About></About>}></Route>
        <Route path ="*" element={<Notfound></Notfound>}></Route>
      </Routes>

      
    
      
    </div>
  );
}

export default App;

