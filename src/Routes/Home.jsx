import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
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