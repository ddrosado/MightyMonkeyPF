import mercadopago from "mercadopago";
const postBookings = require('../controllers/bookings/postBookings')
const User = db.User


export default async (req, res) => {
  try {
    console.log('QUERY', req.query);
    console.log('BODY', req.body);
    console.log('METHOD', req.method);

    const payment = req.query;

    if (payment.type === 'payment') {
      const newBookings = [];
      const bookingsItems = (
        await mercadopago.payment.findById(payment['data.id'])
      ).response.additional_info.items;
      console.log('items ?', bookingsItems);

      bookingsItems.forEach(async (item) => {
        const [date, schedule, duration] = item.description.split(' ');
        const info = { date, schedule, duration: Number(duration) };
        const newBooking = await postBookings(info);
        newBookings.push(newBooking);
      });

      // El pago ha sido procesado con éxito, ahora actualizamos la propiedad isMember del usuario
      if (req.body.type === 'payment' && req.body.data.status === 'approved') {
        const externalReference = req.body.data.userId; // ID del usuario en tu sistema

        // Buscamos al usuario por su externalReference en la base de datos usando Sequelize
        const user = await User.findOne({
          where: {
            externalReference, // Esto asume que externalReference es el campo que usas para identificar al usuario
          },
        });

        if (user) {
          // Actualiza la propiedad isMember del usuario a true
          user.isMember = true;
          await user.save();
        }
      }

      res.status(200).json(newBookings);
    }
  } catch (error) {
    // Maneja el error aquí
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
