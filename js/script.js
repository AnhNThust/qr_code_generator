$(document).ready(function () {
  $("#btnGen").click(function (e) {
    e.preventDefault();
    let url = $("#txtUrl").val();

    $("#qrCode").qrcode({
      render: 'canvas',
			size: 200,
			text: url
    });
  });
});
