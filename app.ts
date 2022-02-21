import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

const guestRoute = require("./routes/guestRoute");
const roomRoute = require("./routes/roomRoute");
const reservationRoute = require("./routes/reservationRoute");

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/guest", guestRoute);
app.use("/room", roomRoute);
app.use("/reservation", reservationRoute);

app.get("/", (req, res) => {
  return res.json({
    hello: "world",
  });
});

app.all("/*", (req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

mongoose
  .connect("mongodb://0.0.0.0:27017/THE-BIG-HOTEL")
  .then(() => {
    app.listen(port, () => {
      console.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.error(err));
