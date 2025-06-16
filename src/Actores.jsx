// Actores.jsx
import React from 'react';
import './estilos.css';

const actores = [
  { nombre: "Leonardo DiCaprio", foto: "foto1.jpg" },
  { nombre: "Scarlett Johansson", foto: "foto2.jpg" },
  { nombre: "Denzel Washington", foto: "foto3.jpg" }
];

function Actores(proms) {
  return (
    <div className="tarjetas-container">
      {actores.map((actor, index) => (
        <div key={index} className="tarjeta-actor">
          <img className="imagen-actor" src={actor.foto} alt={actor.nombre} />
          <h4>{actor.nombre}</h4>
        </div>
      ))}
    </div>
  );
}

export default Actores;
