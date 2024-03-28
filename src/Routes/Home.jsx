import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../context";

const Home = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [dentista, setDentista] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentista(data));
  }, []);

  
  return (
    <main className=''>
      <h1>Home</h1>
      <div
        className='card-grid'
        style={{ color: theme.font, backgroundColor: theme.backgroundColor }}
      >
        {dentista.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;