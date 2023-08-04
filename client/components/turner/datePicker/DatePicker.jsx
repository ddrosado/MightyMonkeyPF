'use client'

import React, { useState, useEffect } from 'react';
import style from './DatePicker.module.css';

const DatePicker = ({ selectedDate, onDateSelected }) => {
  // Obtener la fecha actual
  const currentDate = new Date().toISOString().split('T')[0];

  // Obtener la fecha límite para seleccionar (30 días después de la fecha actual)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split('T')[0];

  // Inicializar el estado con la fecha actual
  const [dateValue, setDateValue] = useState(currentDate);

  // Actualizar el estado si la fecha seleccionada cambia desde el componente padre
  useEffect(() => {
    setDateValue(selectedDate);
  }, [selectedDate]);

  // Manejar el evento onChange para notificar al componente padre (Turner) sobre el cambio en la fecha seleccionada.
  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setDateValue(selectedDate);
    onDateSelected(selectedDate);
  };

  return (
    <div className={style.dateContainer}>
      <h2>Pick a date</h2>
      {/* Usamos el atributo min y max para restringir la selección de fechas */}
      {/* Usamos el estado dateValue como valor por defecto */}
      <input type="date" value={dateValue} min={currentDate} max={maxDateFormatted} onChange={handleChange} />
    </div>
  );
};

export default DatePicker;