// Parallax

$(function () {
  var isMobile = window.matchMedia("only screen and (max-width: 768px)");
  var moveForce = 30; // max popup movement in pixels
  var rotateForce = 3.5; // max popup rotation in deg
  $(".wrap").mousemove(function (e) {
    var docX = $(this).outerWidth();
    var docY = $(this).outerHeight();

    var moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
    var moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;

    var rotateY = (e.pageX / docX) * rotateForce * 2 - rotateForce;
    var rotateX = -((e.pageY / docY) * rotateForce * 2 - rotateForce);

    $(".wrap").css({
      "-moz-transform":
        "rotateX(" +
        rotateX +
        "deg" +
        ") rotateY(" +
        rotateY +
        "deg" +
        ") translateZ(0)",
      "-webkit-transform":
        "rotateX(" +
        rotateX +
        "deg" +
        ") rotateY(" +
        rotateY +
        "deg" +
        ") translateZ(0)",
      "-ms-transform":
        "rotateX(" +
        rotateX +
        "deg" +
        ") rotateY(" +
        rotateY +
        "deg" +
        ") translateZ(0)",
      "-o-transform":
        "rotateX(" +
        rotateX +
        "deg" +
        ") rotateY(" +
        rotateY +
        "deg" +
        ") translateZ(0)",
      transform:
        "rotateX(" +
        rotateX +
        "deg" +
        ") rotateY(" +
        rotateY +
        "deg" +
        ") translateZ(0)",
    });
  });
  if (isMobile.matches) {
    function onDeviceMotion(event) {
      rotateForce = 10; // max popup rotation in deg
      var accel = event.accelerationIncludingGravity;

      var docX = $(this).outerWidth();
      var docY = $(this).outerHeight();

      var accelX = ((accel.x - 30) / 200) * docX;
      var accelY = ((accel.y - 30) / 200) * docY;


      var moveX = ((accelX - docX) / docX) * -moveForce;
      var moveY = ((accelY - docY) / docY) * -moveForce;

      var rotateY = -((accelX / docX) * rotateForce * 2 - rotateForce);
      var rotateX = -((accelY / docY) * rotateForce * 2 - rotateForce);

      $(".").css({
        "-moz-transform":
          "rotateX(" +
          rotateX +
          "deg" +
          ") rotateY(" +
          rotateY +
          "deg" +
          ") translateZ(0)",
        "-webkit-transform":
          "rotateX(" +
          rotateX +
          "deg" +
          ") rotateY(" +
          rotateY +
          "deg" +
          ") translateZ(0)",
        "-ms-transform":
          "rotateX(" +
          rotateX +
          "deg" +
          ") rotateY(" +
          rotateY +
          "deg" +
          ") translateZ(0)",
        "-o-transform":
          "rotateX(" +
          rotateX +
          "deg" +
          ") rotateY(" +
          rotateY +
          "deg" +
          ") translateZ(0)",
        transform:
          "rotateX(" +
          rotateX +
          "deg" +
          ") rotateY(" +
          rotateY +
          "deg" +
          ") translateZ(0)",
      });
    }
    window.addEventListener("devicemotion", onDeviceMotion, false);
  }
});
