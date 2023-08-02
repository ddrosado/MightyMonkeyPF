const { db } = require('../../db');
db.sequelize.sync();
const { Booking, Court } = db;


module.exports = async (sportId, date) => {
    // Dame todos los IDs de canchas del deporte
const sportCourts = await Court.findAll({
    where: {
        sportId: sportId, 
    },
    attributes: ['id'], 
});

const sportCourtIds = sportCourts.map((court) => court.id);

const bookings = await Booking.findAll({
    where: {
    date: date,
        CourtId: sportCourtIds, // Filtramos solo las reservas de las canchas del deporte específico encontradas en el paso anterior
    },
    include: [
    {
        model: Court,
    },
    ],
});

return bookings;
};
