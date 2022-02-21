$(function () {
  let dataInputs = {
    name: $('[data-role="name-giest"]').val(),
    gender: $('[data-role="gender"]').val(),
    dateOfBirth: $('[data-role="date"]').val(),
    isVip: $('[data-role="is-vip"]').is(":checked"),
  };

  $('[data-role="save-btn"]').click(function () {
    let dataInputs = {
      name: $('[data-role="name-giest"]').val(),
      gender: $('[data-role="gender"]').val(),
      dateOfBirth: $('[data-role="date"]').val(),
      isVip: $('[data-role="is-vip"]').is(":checked"),
    };
    $.post("/guest", dataInputs, {
      dataInputs,
    });
  });

  function populateGuest(element, data) {
    element.html("");
    $.each(data, function (key, value) {
      let option = $("<option>");
      option.text(value.name);
      option.attr("value", value._id);
      element.append(option);
    });
  }


  $('[data-role="save-btnAllGuest"]').click(function () {
    $.ajax({
      url: "/guest",
      type: "GET",
      success: function (result) {
        console.log(result);
        document.getElementById("getAllGuest").textContent = JSON.stringify(
          result,
          undefined,
          2
        );
      },
    });
  });

  $('[data-role="save-btnFindOneGuest"]').click(function () {
    let guestId = $('[data-role="findById"]').val();
    $.get({
      url: "/guest/:guestId",
      type: "GET",
      data: {
        _id: guestId,
      },
      success: function (result) {
        document.getElementById("findOneGuest").textContent =
          JSON.stringify(result);
      },
    });
  });

  $('[data-role="save-btnFindOneGuestAndUpdate"]').click(function () {
    let guestFindOneAndUpdate = $('[data-role="findOneGuestAndUpdate"]').val();
    $.ajax({
      url: "/guest/:UpId",
      type: "PUT",
      data: {
        _id: guestFindOneAndUpdate,
      },
      success: function (result) {
        document.getElementById("findOneGuestAndUpdate").textContent =
          JSON.stringify(result, undefined, 2);
      },
    });
  });

  $('[data-role="delete-btnDelete"]').click(function () {
    let oneGuestDelete = $('[data-role="DeleteOneGuestById"]').val();
    $.ajax({
      url: "/guest/:DelId",
      type: "DELETE",
      data: {
        id: oneGuestDelete,
      },
      success: function () {
        $("#deleteOneGuest").append("<p>The guest was deleted</p>");
      },
    });
  });
});