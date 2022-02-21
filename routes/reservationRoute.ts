import express from "express";
const router = express.Router();

const {
  insertReservations,
  getAllReservations,
  getOneReservationById,
  updateReservationById,
  deleteOneReservationById,
} = require("../controller/resevrvationController");

router.post("/", (req, res) => {
  const { room_id, capacity } = req.body;
  insertReservations(room_id, capacity)
    .then((reservationData) => res.json(reservationData))
    .catch((error) => res.json(error));
});

router.get("/", (req, res) => {
  getAllReservations()
    .then((reservationData) =>
      res.json({
        reservationData,
      })
    )
    .catch((error) => res.json(error));
});

router.get("/:reservationId", (req, res) => {
  getOneReservationById(req.params.reservationId)
    .then((reservationData) =>
      res.json({
        reservationData,
      })
    )
    .catch((error) => res.json(error));
});

router.put("/:UpId", (req, res) => {
  updateReservationById(req.params.UpId)
    .then((reservationData) =>
      res.json({
        reservationData,
      })
    )
    .catch((error) => res.json(error));
});

router.delete("/:delId", (req, res) => {
  deleteOneReservationById(req.params.delId)
    .then((reservationData) => res.json(reservationData))
    .catch((error) => res.json(error));
});

module.exports = router;
