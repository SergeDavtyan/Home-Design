import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Works from "./components/works/Works";
import SliderPage from "./components/slider/SliderPage";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={ <SliderPage /> } />
          <Route path='/works' element={ <Works /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contacts' element={ <Contacts /> } />
      </Routes>
    </>
  );
}

export default App;
