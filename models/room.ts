import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    isVip: {
      type: Boolean,
      required: "The filed isVip is a required filed!",
    },
    haveBath: {
      type: Boolean,
      required: "The filed haveBath is a required filed!",
    },
    roomNumber: {
      type: Number,
      required: "The filed roomNumber is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);
roomSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Room", roomSchema);
