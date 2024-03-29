import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { ThemeContext } from "./Theme";


function App() {
  //Tema
const { theme } = useContext(ThemeContext);
  
  return (
      <div className='App'  style={{color: theme.font, backgroundColor: theme.background}}>
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