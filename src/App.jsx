import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'


function App() {
  //Tema
  
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/dentist/:id'  element={<Detail/>} />
          <Route path='/Favs'    element={<Favs/>} />
          <Route path='*' element={<h1>... Ruta no encontrada ...</h1>} />
        </Routes>
        <Footer />
      </div>
  );

}

export default App;