// location
$(function () {
  var current = location.pathname;
  $(".header__link").each(function () {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr("href").indexOf(current) !== -1) {
      $this.addClass("active__");
    }
  });
});

// pop-up ///////////////////////////////////////////

$(function () {
  // var moveLeft = -400;
  // var moveDown = 10;

  $("a.trigger__catalog").hover(
    function (e) {
      $(".pop__up__catalog__help").show();
      $("div#pop__up__catalog").show();
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
    },
    function () {
      $("div#pop__up__catalog").hide();
    },
    function () {
      $(".pop__up__catalog__help").hide();
    }
  );

  $("div#pop__up__catalog").hover(
    function (e) {
      $("div#pop__up__catalog").show();
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
    },
    function () {
      $("div#pop__up__catalog").hide();
    }
  );

  $(".pop__up__catalog__help").hover(
    function (e) {
      $("div#pop__up__catalog").show();
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
    },
    function () {
      $("div#pop__up__catalog").hide();
    }
  );

  // $("a.trigger__catalog").mousemove(function (e) {
  //   $("div#pop__up__catalog")
  //     .css("top", e.pageY + moveDown)
  //     .css("left", e.pageX + moveLeft);
  // });
});

// Валидация форми ....................................................................................

function checkEmail(emailAddress) {
  var sQtext = "[^\\x0d\\x22\\x5c\\x80-\\xff]";
  var sDtext = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]";
  var sAtom =
    "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+";
  var sQuotedPair = "\\x5c[\\x00-\\x7f]";
  var sDomainLiteral = "\\x5b(" + sDtext + "|" + sQuotedPair + ")*\\x5d";
  var sQuotedString = "\\x22(" + sQtext + "|" + sQuotedPair + ")*\\x22";
  var sDomain_ref = sAtom;
  var sSubDomain = "(" + sDomain_ref + "|" + sDomainLiteral + ")";
  var sWord = "(" + sAtom + "|" + sQuotedString + ")";
  var sDomain = sSubDomain + "(\\x2e" + sSubDomain + ")*";
  var sLocalPart = sWord + "(\\x2e" + sWord + ")*";
  var sAddrSpec = sLocalPart + "\\x40" + sDomain; // complete RFC822 email address spec
  var sValidEmail = "^" + sAddrSpec + "$"; // as whole string

  var reValidEmail = new RegExp(sValidEmail);

  return reValidEmail.test(emailAddress);
}

let btn = document.querySelector(".validate__btn");

let form = document.querySelector(".validate_form");

let name_input = document.querySelector(".form__field_name");
let phone_input = document.querySelector(".form__field_phone");
let email_input = document.querySelector(".form__field_email");

$(".form__field_phone").keyup(function () {
  var Value = $(".form__field_phone");
  Value.val(Value.val().replace(/[^0-9\.]/g, ""));
});

if (!form) {
} else {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (name_input.value.length < 8) {
      $(".name").addClass("detailed_catalog_name_input_validate");
    } else {
      $(".name").removeClass("detailed_catalog_name_input_validate");
    }
    if (phone_input.value.length < 7) {
      $(".phone").addClass("detailed_catalog_phone_input_validate");
    } else {
      $(".phone").removeClass("detailed_catalog_phone_input_validate");
    }
    if (!checkEmail(email_input.value)) {
      $(".email").addClass("detailed_catalog_email_input_validate");
    } else {
      $(".email").removeClass("detailed_catalog_email_input_validate");
    }
  });
}

$(document).ready(function () {
  $(".header__burger").click(function () {
    $(
      ".header__burger, .header__menu, .header, .header__language, .header__logo, .header__body"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  let a;
  if (document.documentElement.clientHeight <= 330) {
    a = 20;
  } else {
    a = 100;
  }
  if (height > a) {
    $(".header__body").addClass("header-fixed");
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $(".header__body").removeClass("header-fixed");
  }
});

//  Animation Scroll

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", AnimOnScroll);
  function AnimOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  AnimOnScroll();
}

am4core.useTheme(am4themes_animated);

var chart2 = am4core.create("chartdiv2", am4maps.MapChart);
am4core.options.autoSetClassName = true;

// Set map definition
chart2.geodata = am4geodata_ukraineLow;

// Set projection
chart2.projection = new am4maps.projections.Miller();

// Colors
var color1 = am4core.color("#000");

chart2.homeGeoPoint = {
  latitude: 48,
  longitude: 31,
};
chart2.homeZoomLevel = 0.75;
chart2.minZoomLevel = 0.75;
chart2.maxZoomLevel = 0.75;
chart2.chartContainer.wheelable = false;
chart2.seriesContainer.draggable = false;
chart2.seriesContainer.resizable = false;

// Create map polygon series
var polygonSeries2 = chart2.series.push(new am4maps.MapPolygonSeries());

// // Exclude Antartica
// polygonSeries2.exclude = ["AQ"];
// polygonSeries2.include = ["UA"];
// Make map load polygon (like country names) data from GeoJSON
polygonSeries2.useGeodata = true;

// Configure series
var polygonTemplate2 = polygonSeries2.mapPolygons.template;

polygonTemplate2.tooltipText = "{name}";

polygonTemplate2.fill = am4core.color("#e0e0e0");

// = am4core.color("#f39235");

// Create hover state and set alternative fill color
var hs = polygonTemplate2.states.create("hover");

hs.properties.fill = am4core.color("#000");

polygonSeries2.exclude = ["AQ"];

polygonSeries2.data = [
  //   {
  //     id: "UA-07",
  //     name: "Volyn",
  //     fill: am4core.color("#f39235"),
  //     dataff: "fffe",
  //   },
  //   {
  //     id: "UA-18",
  //     name: "Zhytomyr",
  //     fill: am4core.color("#f39235"),
  //   },
  {
    id: "UA-59",
    name: "Sumy",
    fill: am4core.color("#f39235"),
  },
  //   {
  //     id: "UA-71",
  //     name: "Cherkasy",
  //     fill: am4core.color("#f39235"),
  //   },
];

// Bind "fill" property to "fill" key in data
polygonTemplate2.propertyFields.fill = "fill";

var imageSeries2 = chart2.series.push(new am4maps.MapImageSeries());
var imageTemplate2 = imageSeries2.mapImages.template;
imageTemplate2.propertyFields.longitude = "longitude";
imageTemplate2.propertyFields.latitude = "latitude";
imageTemplate2.nonScaling = true;

// Creating a pin2 bullet
var pin2 = imageTemplate2.createChild(am4plugins_bullets.PinBullet);

// Configuring pin2 appearance
pin2.background.fill = color1;
pin2.background.pointerBaseWidth = 1;
pin2.background.pointerLength = 250;
pin2.background.propertyFields.pointerLength = "length";
pin2.circle.fill = pin2.background.fill;
pin2.fontWeight = "bold";
pin2.fontFamily = "Montserrat";
pin2.label2 = new am4core.Label();
pin2.label2.text = "{title}";
pin2.label2.fill = am4core.color("#fff");
pin2.fontSize = 12;
if (document.documentElement.clientWidth < 770) {
  pin2.fontSize = 10;
}
if (document.documentElement.clientWidth < 520) {
  pin2.fontSize = 7;
}

// 770

var label2 = pin2.createChild(am4core.Label2);
// label2.text = "{title}";
// label2.fontWeight = "bold";
// label2.propertyFields.dy = "length";
// label2.verticalCenter = "middle";
// label2.fill = color1;
label2.adapter.add("dy", function (dy) {
  return (20 + dy) * -1;
});

// Creating a "heat rule" to modify "radius" of the bullet based
// on value in data
// imageSeries2.heatRules.push({
//   target: pin2.background,
//   property: "radius",
//   min: 44,
//   max: 30,
//   dataField: "value",
// });

// if (document.documentElement.clientWidth < 770) {
//   imageSeries2.heatRules.push({
//     target: pin2.background,
//     property: "radius",
//     min: 30,
//     max: 30,
//     dataField: "value",
//   });
// }

// if (document.documentElement.clientWidth < 520) {
//   imageSeries2.heatRules.push({
//     target: pin2.background,
//     property: "radius",
//     min: 20,
//     max: 24,
//     dataField: "value",
//   });
// }

// imageSeries2.heatRules.push({
//   target: label2,
//   property: "dx",
//   min: 30,
//   max: 40,
//   dataField: "value",
// });

// imageSeries2.heatRules.push({
//   target: label2,
//   property: "paddingBottom",
//   min: 0,
//   max: 10,
//   dataField: "value",
// });

$(function () {
  $(".amcharts-Container-group").css({
    "font-family": '"Montserrat", sans-serif',
  });
});

// this function creates and returns a new marker element
// function createCustomMarker(image) {
//   var chart2 = image.dataItem.component.chart2;

//   // create holder
//   var holder = document.createElement("div");
//   holder.className = "map-marker ppp_p";
//   holder.title = image.dataItem.dataContext.title;
//   holder.style.position = "absolute";

//   // maybe add a link to it?
//   if (undefined != image.url) {
//     holder.onclick = function () {
//       window.location.href = image.url;
//     };
//     holder.className += " map-clickable";
//   }

//   // create dot
//   var dot = document.createElement("div");
//   dot.className = "dot";
//   holder.appendChild(dot);

//   // create pulse
//   var pulse = document.createElement("div");
//   pulse.className = "pulse";
//   holder.appendChild(pulse);

//   // append the marker to the map container
//   chart2.svgContainer.htmlElement.appendChild(holder);

//   return holder;
// }

if ($(window).width() <= 1025) {
  $(function () {
    var moveLeft = -100;
    var moveDown = -380;

    if ($(window).width() <= 1400) {
      var moveLeft = -300;
    }

    if ($(window).width() <= 1400) {
      var moveDown = -250;
    }

    if ($(window).width() <= 770) {
      var moveLeft = -400;
      var moveDown = -150;
    }

    if ($(window).width() <= 600) {
      var moveLeft = -300;
      var moveDown = -150;
    }

    if ($(window).width() <= 420) {
      var moveLeft = -230;
      var moveDown = -150;
    }

    if ($(window).width() <= 350) {
      var moveLeft = -180;
      var moveDown = -150;
    }

    $(".chartdiv__modal__window").click(function (e) {
      $("div#pop-up").show();
      $(".chartdiv").css("z-index", 0);
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
    });

    $(".pop-up_bac").on("click", function () {
      $("div#pop-up").hide();
      $(".chartdiv").css("z-index", 1);
    });

    $("div.trigger").mousemove(function (e) {
      $("div#pop-up")
        .css("top", e.pageY + moveDown)
        .css("left", e.pageX + moveLeft);
    });
  });
} else {
  $(function () {
    var moveLeft = -100;
    var moveDown = -380;

    if ($(window).width() <= 1400) {
      var moveLeft = -300;
    }

    if ($(window).width() <= 1400) {
      var moveDown = -250;
    }

    if ($(window).width() <= 770) {
      var moveLeft = -400;
      var moveDown = -150;
    }

    if ($(window).width() <= 600) {
      var moveLeft = -300;
      var moveDown = -150;
    }

    if ($(window).width() <= 420) {
      var moveLeft = -230;
      var moveDown = -150;
    }

    if ($(window).width() <= 350) {
      var moveLeft = -180;
      var moveDown = -150;
    }

    $("div.trigger").hover(
      function (e) {
        $("div#pop-up").show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
      },
      function () {
        $("div#pop-up").hide();
      }
    );

    $("div.trigger").mousemove(function (e) {
      $("div#pop-up")
        .css("top", e.pageY + moveDown)
        .css("left", e.pageX + moveLeft);
    });
  });
}
