$(function () {
  let dataReservationInputs = {
    room_id: $('[data-role="roomIdInput"]').val(),
    capacity: $('[data-role="caoacityInput"]').val(),
  };

  $('[data-role="save-btnReservation"]').click(function () {
    let dataReservationInputs = {
      room_id: $('[data-role="roomIdInput"]').val(),
      capacity: $('[data-role="caoacityInput"]').val(),
    };
    $.post("/reservation", dataReservationInputs, {
      dataReservationInputs,
    });
  });

  $('[data-role="save-btnAllReservation"]').click(function () {
    $.ajax({
      url: "/reservation",
      type: "GET",
      success: function (result) {
        console.log(result);
        document.getElementById("getAllReservation").textContent =
          JSON.stringify(result, undefined, 2);
      },
    });
  });

  $('[data-role="save-btnFindOneReservation"]').click(function () {
    let reservationId = $('[data-role="findReservationById"]').val();
    $.get({
      url: "/reservation/:reservationId",
      type: "GET",
      data: {
        _id: reservationId,
      },
      success: function (result) {
        document.getElementById("findOneReservation").textContent =
          JSON.stringify(result);
      },
    });
  });

  $('[data-role="save-btnFindOneReservationAndUpdate"]').click(function () {
    let reservationFindOneAndUpdate = $(
      '[data-role="findOneReservationAndUpdate"]'
    ).val();
    $.ajax({
      url: "/reservation/:UpId",
      type: "PUT",
      data: {
        _id: reservationFindOneAndUpdate,
      },
      success: function (result) {
        document.getElementById("findOneReservationAndUpdate").textContent =
          JSON.stringify(result, undefined, 2);
      },
    });
  });

  $('[data-role="DeleteOnereservationById"]').click(function () {
    let oneReservationDelete = $(
      '[data-role="DeleteOnereservationById"]'
    ).val();
    $.ajax({
      url: "/reservation/:delId",
      type: "DELETE",
      data: {
        id: oneReservationDelete,
      },
      success: function () {
        $("#deleteOneReservation").append("<p>The reservation was deleted</p>");
      },
    });
  });
});
