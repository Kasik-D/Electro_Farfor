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

var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_ukraineLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Colors
var color1 = am4core.color("#000");

chart.homeGeoPoint = {
  latitude: 48,
  longitude: 31,
};
chart.homeZoomLevel = 0.75;
chart.minZoomLevel = 0.75;
chart.maxZoomLevel = 0.75;
chart.chartContainer.wheelable = false;
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// // Exclude Antartica
// polygonSeries.exclude = ["AQ"];
// polygonSeries.include = ["UA"];
// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;

polygonTemplate.tooltipText = "{name}";

polygonTemplate.fill = am4core.color("#f3f3f3");

// = am4core.color("#f39235");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");

hs.properties.fill = am4core.color("#000");

polygonSeries.exclude = ["AQ"];

polygonSeries.data = [
  {
    id: "UA-07",
    name: "Volyn",
    fill: am4core.color("#f39235"),
  },
  {
    id: "UA-18",
    name: "Zhytomyr",
    fill: am4core.color("#f39235"),
  },
  {
    id: "UA-59",
    name: "Sumy",
    fill: am4core.color("#f39235"),
  },
  {
    id: "UA-71",
    name: "Cherkasy",
    fill: am4core.color("#f39235"),
  },
];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";

var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;

// Creating a pin bullet
var pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);

// Configuring pin appearance
pin.background.fill = color1;
pin.background.pointerBaseWidth = 1;
pin.background.pointerLength = 250;
pin.background.propertyFields.pointerLength = "length";
pin.circle.fill = pin.background.fill;
pin.fontWeight = "bold";
pin.fontFamily = "Montserrat";
pin.label = new am4core.Label();
pin.label.text = "{title}";
pin.label.fill = am4core.color("#fff");
pin.fontSize = 12;
if (document.documentElement.clientWidth < 770) {
  pin.fontSize = 10;
}
if (document.documentElement.clientWidth < 520) {
  pin.fontSize = 7;
}

// 770

var label = pin.createChild(am4core.Label);
// label.text = "{title}";
// label.fontWeight = "bold";
// label.propertyFields.dy = "length";
// label.verticalCenter = "middle";
// label.fill = color1;
label.adapter.add("dy", function (dy) {
  return (20 + dy) * -1;
});

// Creating a "heat rule" to modify "radius" of the bullet based
// on value in data
imageSeries.heatRules.push({
  target: pin.background,
  property: "radius",
  min: 44,
  max: 30,
  dataField: "value",
});

if (document.documentElement.clientWidth < 770) {
  imageSeries.heatRules.push({
    target: pin.background,
    property: "radius",
    min: 30,
    max: 30,
    dataField: "value",
  });
}

if (document.documentElement.clientWidth < 520) {
  imageSeries.heatRules.push({
    target: pin.background,
    property: "radius",
    min: 20,
    max: 24,
    dataField: "value",
  });
}

imageSeries.heatRules.push({
  target: label,
  property: "dx",
  min: 30,
  max: 40,
  dataField: "value",
});

imageSeries.heatRules.push({
  target: label,
  property: "paddingBottom",
  min: 0,
  max: 10,
  dataField: "value",
});

//if (document.documentElement.clientWidth < 770)
// Pin data
imageSeries.data = [
  {
    latitude: 49,
    longitude: 30.8,
    value: 12,
    title: "Cherkasy",
    length:
      document.documentElement.clientWidth < 400
        ? 20
        : document.documentElement.clientWidth < 770
        ? 40
        : 100,
  },
  {
    latitude: 51,
    longitude: 25,
    value: 5,
    title: "Volyn",
    length:
      document.documentElement.clientWidth < 400
        ? 20
        : document.documentElement.clientWidth < 770
        ? 35
        : 70,
  },
  {
    latitude: 51,
    longitude: 34,
    value: 100000,
    title: "Sumy",
    length: document.documentElement.clientWidth < 770 ? 40 : 100,
  },
  {
    latitude: 50.5,
    longitude: 28.5,
    value: 8,
    title: "Zhytomyr",
    length: document.documentElement.clientWidth < 770 ? 38 : 80,
  },
];
