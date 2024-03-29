import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../Theme";

const Navbar = () => {
  //Tema
  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <nav className='' style={{ color: theme.font, backgroundColor: theme.backgroundColor }}>
      <Link to = '/'> Home </Link>
      <Link to = '/Favs'> Destacados </Link>
      <Link to = '/Contact'> Contacto </Link>

      {/* Cambio de tema */}
      {/* <button onClick={toggleTheme}>🌙 ☀️</button> */}
      <button onClick={toggleTheme}>{theme === themes.light ? "🌙" : "☀️"} </button>
    </nav>
  )
}

export default Navbar