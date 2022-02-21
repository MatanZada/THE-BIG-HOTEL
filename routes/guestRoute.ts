import express from "express";
const router = express.Router();

const {
  insertGuest,
  getAllGuest,
  getOneGuestById,
  updateGuestById,
  deleteOneGuestById,
  showMeAll,
} = require("../controller/guestController");

router.post("/", (req, res) => {
  const { name, gender, dateOfBirth, isVip } = req.body;
  insertGuest(name, gender, dateOfBirth, isVip)
    .then((guestDate) => res.json(guestDate))
    .catch((error) => res.json(error));
});

router.get("/", (req, res) => {
  getAllGuest()
    .then((guestDate) =>
      res.json({
        guestDate,
      })
    )
    .catch((error) => res.json(error));
});

router.get("/:guestId", (req, res) => {
  getOneGuestById(req.params.guestId)
    .then((guestDate) => res.json(guestDate))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.put("/:UpId", (req, res) => {
  updateGuestById(req.params.UpId)
    .then((guestDate) => res.json(guestDate))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.delete("/:DelId", (req, res) => {
  deleteOneGuestById(req.params.DelId)
    .then((guestDate) => res.json(guestDate))
    .catch((error) => res.json(error));
});

router.get("/", (req, res) => {
  showMeAll()
    .then((guestDate) => res.json(guestDate))
    .catch((error) => res.json(error));
});

module.exports = router;
