import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    room_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
      required: "The filed room_id is a required filed!",
    },
    capacity: {
      type: Number,
      required: "The filed capacity is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);
reservationSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Reservation", reservationSchema);

