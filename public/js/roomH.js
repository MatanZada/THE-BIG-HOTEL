$(function () {
  $('[data-role="Insert-Room"]').click(function () {
    let dataInputsRooms = {
      isVip: $('[data-role="is-vip"]').is(":checked"),
      haveBath: $('[data-role="haveBath"]').is(":checked"),
      roomNumber: $('[data-role="numberRoom"]').val(),
    };
    $.post("/room", dataInputsRooms, {
      dataInputsRooms,
    });
  });

  $('[data-role="save-btnAllRoom"]').click(function () {
    $.ajax({
      url: "/room",
      type: "GET",
      success: function (result) {
        console.log(result);
        document.getElementById("getAllRoom").textContent = JSON.stringify(
          result,
          undefined,
          2
        );
      },
    });
  });
  $('[data-role="save-btnAllRoomWithBath"]').click(function () {
    $.get({
      url: "/room/:haveBath/true",
      type: "GET",
      success: function (result) {
        console.log(result);
        document.getElementById("getAllRoomWithBath").textContent =
          JSON.stringify(result, undefined, 2);
      },
    });
  });
  $('[data-role="save-btnAllRoomsAreNotVip"]').click(function () {
    $.ajax({
      url: "/room/:isVip/false",
      type: "GET",
      success: function (result) {
        console.log(result);
        document.getElementById("getAllRoomsAreNotVip").textContent =
          JSON.stringify(result, undefined, 2);
      },
    });
  });
});
