'use client'
import React from 'react';
import style from './CourtPicker.module.css';

const CourtPicker = ({ courts, onCourtSelected }) => {
  const handleCourtChange = (event) => {
    // Llamamos a la función "onCourtSelected" y pasamos la cancha seleccionada.
    const selectedCourt = event.target.value;
    onCourtSelected(selectedCourt);
  };

  return (
    <div className={style.courtsContainer}>
      <h2>Pick a court</h2>
      {/* Usamos un select para mostrar las opciones de canchas */}
      <select onChange={handleCourtChange}>
        {/* Agregamos una opción por defecto */}
        <option value="">Select a court</option>
        {courts?.map((court) => (
          // Usamos el ID de la cancha como valor y el nombre de la cancha como texto de la opción
          <option key={court.id} value={court.name}>
            {court.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourtPicker;





