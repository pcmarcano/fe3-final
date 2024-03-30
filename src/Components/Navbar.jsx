import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../Theme";

const Navbar = () => {
  //Tema
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div >
      <nav className=''>
        <Link
          to='/'
          style={{ color: theme.font, backgroundColor: theme.background }}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          to='/Favs'
          style={{ color: theme.font, backgroundColor: theme.background }}
        >
          {" "}
          Destacados{" "}
        </Link>
        <Link
          to='/Contact'
          style={{ color: theme.font, backgroundColor: theme.background }}
        >
          {" "}
          Contacto{" "}
        </Link>
        <button onClick={toggleTheme}>
          {theme === themes.light ? "🌙" : "☀️"}{" "}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
