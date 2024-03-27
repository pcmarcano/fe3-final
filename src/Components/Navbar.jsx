import React, { useContext } from "react";
import ThemeContext from "../context";
import { Link } from "react-router-dom";


const Navbar = () => {
  //Tema
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <nav className='' style={{color: theme.font, backgroundColor: theme.backgroundColor}}>
      {/* Links a Fav y Contac */}
      <Link to = '/'> Home </Link>
      <Link to = '/Favs'> Destacados </Link>
      <Link to = '/Contact'> Contacto </Link>

      {/* CAmbio de tema */}
      <button onClick={handleChangeTheme} style={{color: theme.font, backgroundColor: theme.backgroundColor}}>Cambiar tema</button>
    </nav>
  )
}

export default Navbar