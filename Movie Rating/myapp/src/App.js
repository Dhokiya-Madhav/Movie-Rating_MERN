import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header';
import Slide from './components/carouselHome';
import MovieData from './components/movieData';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Signup from './components/signUp'
import Admin from './components/admin';
import Viewmore from './components/viewmore';
import Index from './components';
import Login from './components/login/login';
import ForgotPassword from './components/forgotPasswordEmail';
function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path="/movie" element={<Index/>} ></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/viewmore" element={<Viewmore/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      
    </>
  );
}

export default App;
