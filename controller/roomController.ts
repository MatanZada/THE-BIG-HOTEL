const Room = require("../models/room");

const insertRoom = (isVip, haveBath, roomNumber) => {
  return new Promise((resolve, reject) => {
    const room = new Room({
      isVip,
      haveBath,
      roomNumber,
    });
    room.save((err, roomData) => {
      roomData ? resolve(roomData) : reject(err);
    });
  });
};

const getAllRooms = () => {
  return new Promise((resolve, reject) => {
    Room.find({}, {}, (err, roomData) => {
      roomData ? resolve(roomData) : reject(err);
    });
  });
};

const returnsAllRoomsWithBath = () => {
  return new Promise((resolve, reject) => {
    Room.find(
      {
        haveBath: true,
      },
      (err, roomData) => {
        roomData ? resolve(roomData) : reject(err);
      }
    );
  });
};

const gettingAllRoomsAreNotVip = () => {
  return new Promise((resolve, reject) => {
    Room.find(
      {
        isVip: false,
      },
      (err, roomData) => {
        roomData ? resolve(roomData) : reject(err);
      }
    );
  });
};

module.exports = {
  insertRoom,
  getAllRooms,
  returnsAllRoomsWithBath,
  gettingAllRoomsAreNotVip,
};
