import mongoose from "mongoose";

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The filed name is a required filed!",
    },
    gender: {
      type: String,
      required: "The filed gender is a required filed!",
    },
    dateOfBirth: {
      type: Date,
      required: "The filed dateOfBirth is a required filed!",
    },
    isVip: {
      type: Boolean,
      required: "The filed isVip is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);

guestSchema.methods.canDrink = function () {
  let now = new Date();
  let year = now.getFullYear();
  let myYear = this.dateOfBirth.getFullYear()
  if (year - 18 > myYear) {
    this._doc.canDrink = true;
  } else {
    this._doc.canDrink = false;
  }
};
module.exports = mongoose.model("Guest", guestSchema);
