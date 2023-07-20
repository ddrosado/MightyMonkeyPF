import { User, Booking } from './models';

// Ahora puedes utilizar los modelos en este archivo
const obtenerUsuarios = async () => {
  const usuarios = await User.findAll();
  console.log(usuarios);
};

const obtenerReservas = async () => {
  const reservas = await Booking.findAll();
  console.log(reservas);
};

// Llama a las funciones para obtener usuarios y reservas
obtenerUsuarios();
obtenerReservas();
