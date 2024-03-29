import React, {useState, useContext} from "react";
import { ThemeContext } from "../Theme";

const Form = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const correoForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (usuario.nombre.length > 5 && correoForm.test(usuario.correo)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div style={{ color: theme.font, backgroundColor: theme.backgroundColor }}>
      <h4>Usuario: {usuario.nombre}</h4>
      {!show && (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input type='text' 
          onChange={({ target }) =>
              setUsuario({ ...usuario, nombre: target.value })
            }
          />
          <label>Correo: </label>
          <input type='text'
            onChange={(event) =>
              setUsuario({ ...usuario, correo: event.target.value })
            }
          />
          <button>Enviar</button>
        </form>
      )}
      {show && (
        <h4>
          Gracias {usuario.nombre}, te contactaremos cuando antes vía mail
        </h4>
      )}
      {err && <p>Por favor verifique su información nuevamente.</p>}
      <hr />
    </div>



 /*    <div>
      <form>
      </form>
    </div> */
  );
};

export default Form;
