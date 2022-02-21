import express from "express";
const router = express.Router();

const {
  insertRoom,
  getAllRooms,
  returnsAllRoomsWithBath,
  gettingAllRoomsAreNotVip,
} = require("../controller/roomController");

router.post("/", (req, res) => {
  const { isVip, haveBath, roomNumber } = req.body;
  insertRoom(isVip, haveBath, roomNumber)
    .then((roomDate) => res.json(roomDate))
    .catch((error) => res.json(error));
});

router.get("/", (req, res) => {
  getAllRooms()
    .then((roomDate) =>
      res.json({
        roomDate,
      })
    )
    .catch((error) => res.json(error));
});

router.get("/:haveBathRoom/true", (req, res) => {
  const { haveBath } = req.body;
  returnsAllRoomsWithBath(haveBath)
    .then((roomDate) =>
      res.json({
        roomDate,
      })
    )
    .catch((error) => res.json(error));
});

router.get("/:isVip/false", (req, res) => {
  const { isVip } = req.body;
  gettingAllRoomsAreNotVip(isVip)
    .then((roomDate) =>
      res.json({
        roomDate,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
