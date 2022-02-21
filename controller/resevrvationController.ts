const Reservation = require("../models/reservation");

const insertReservations = (room_id, capacity) => {
  return new Promise((resolve, reject) => {
    const reservation = new Reservation({
      room_id,
      capacity,
    });
    reservation.save((err, reservationData) => {
      reservationData ? resolve(reservationData) : reject(err);
    });
  });
};

const getAllReservations = () => {
  return new Promise((resolve, reject) => {
    Reservation.find({}, {}, (err, reservationData) => {
      reservationData ? resolve(reservationData) : reject(err);
    });
  });
};

const getOneReservationById = (_id) => {
  return new Promise((resolve, reject) => {
    Reservation.findOne(_id, (err, reservationData) => {
      reservationData ? resolve(reservationData) : reject(err);
    });
  });
};

const updateReservationById = (_id, updateReservation) => {
  return new Promise((resolve, reject) => {
    Reservation.findOneAndUpdate(
      _id,
      updateReservation,
      (reservationData, err) => {
        reservationData ? resolve(reservationData) : reject(err);
      }
    );
  });
};

const deleteOneReservationById = (_id) => {
  return new Promise((resolve, reject) => {
    Reservation.deleteOne(
      {},
      {
        _id,
      },
      (err, reservationData) => {
        err ? reject(err) : resolve(reservationData);
      }
    );
  });
};

module.exports = {
  insertReservations,
  getAllReservations,
  getOneReservationById,
  updateReservationById,
  deleteOneReservationById,
};
