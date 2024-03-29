import React, { useContext } from "react";
import Form from '../Components/Form'
import { ThemeContext } from "../Theme";

const Contact = () => {
    //Tema
    const { theme } = useContext(ThemeContext);

  return (
    <div style={{color: theme.font, backgroundColor: theme.background}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact