//  done by me ->  https://github.com/Kasik-D

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

polygonSeries2.useGeodata = true;

// Configure series
var polygonTemplate2 = polygonSeries2.mapPolygons.template;

polygonTemplate2.tooltipText = "{name}";

polygonTemplate2.fill = chart2.colors.getIndex(0);

polygonTemplate2.fill = am4core.color("#d3d3d3");

// Create hover state and set alternative fill color
var hs2 = polygonTemplate2.states.create("hover");

hs2.properties.fill = chart2.colors.getIndex(2);

var activeState = polygonTemplate2.states.create("active");
activeState.properties.fill = am4core.color("#f39235");

polygonTemplate2.events.on("over", function (ev) {
  ev.target.dataItem.dataContext.dot_arr.forEach((el) => {
    $(`.dot__${el}`).css("border", "10px solid #000");
    $(`.pulse__${el}`).css("border", "5px solid #000");
    $(`.pulse__${el}`).css("background-color", "#000");
  });
  polygonTemplate2.clones.values.forEach((element) => {
    element.isActive = false;
  });
  ev.target.isActive = true;
});

polygonTemplate2.events.on("out", function (ev) {
  if (
    String(ev.event.relatedTarget.className).indexOf("map-marker") != -1 ||
    String(ev.event.relatedTarget.className).indexOf("dot") != -1 ||
    String(ev.event.relatedTarget.className).indexOf("pulse") != -1
  ) {
  } else {
    ev.target.isActive = false;
    $(".dot").css("border", "10px solid #f39235");
    $(".pulse").css("border", "5px solid #f39235");
    $(".pulse").css("background-color", "#f39235");
  }
});

// polygonTemplate2.events.on("out", function (ev) {
//   if (String(ev.event.relatedTarget.className).indexOf("dot") != -1) {
//   } else {
//     ev.target.isActive = false;
//   }
// });

hs2.properties.fill = am4core.color("#f39235");

polygonSeries2.exclude = ["AQ"];

polygonSeries2.data = [
  {
    id: "UA-07",
    name: "Volyn",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Ternopil",
    id: "UA-61",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Odessa",
    id: "UA-51",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Luhansk",
    id: "UA-09",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Sevastopol",
    id: "UA-40",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Kirovohrad",
    id: "UA-35",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    name: "Crimea",
    id: "UA-43",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    id: "UA-18",
    name: "Zhytomyr",
    fill: am4core.color("#d3d3d3"),
    hoverable: false,
  },
  {
    id: "UA-59",
    name: "Sumy",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [23, 26],
  },
  {
    id: "UA-71",
    name: "Cherkasy",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [30],
  },
  {
    id: "UA-12",
    name: "Dnipropetrovsk",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [1, 2, 3, 4],
  },
  {
    id: "UA-23",
    name: "Zaporizhzhya",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [5, 6, 7, 32],
  },
  {
    name: "Lviv",
    id: "UA-46",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [8, 9, 10],
  },
  {
    name: "Ivano-Frankivsk",
    id: "UA-26",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [11, 39],
  },
  {
    name: "Vinnytsia",
    id: "UA-05",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [14],
  },
  {
    name: "Chernihiv",
    id: "UA-74",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [29],
  },
  {
    name: "Mykolaiv",
    id: "UA-48",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [33, 18, 20, 21],
  },
  {
    name: "Poltava",
    id: "UA-53",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [22],
  },
  {
    name: "Kharkiv",
    id: "UA-63",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [24, 41, 25],
  },
  {
    name: "Kyiv",
    id: "UA-32",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [27, 28, 31, 37],
  },
  {
    name: "Kyiv City",
    id: "UA-30",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [36],
  },
  {
    name: "Rivne",
    id: "UA-56",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [12, 35],
  },
  {
    name: "Zakarpattia",
    id: "UA-21",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [13],
  },
  {
    name: "Chernivtsi",
    id: "UA-77",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [16],
  },
  {
    name: "Kherson",
    id: "UA-65",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [17, 19],
  },
  {
    name: "Khmelnytskyi",
    id: "UA-68",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [34],
  },
  {
    name: "Donetsk",
    id: "UA-14",
    fill: am4core.color("#d3d3d3"),
    dot_arr: [40, 38],
  },
];

// Bind "fill" property to "fill" key in data
polygonTemplate2.propertyFields.fill = "fill";
polygonTemplate2.propertyFields.interactionsEnabled = "hoverable";

var imageSeries2 = chart2.series.push(new am4maps.MapImageSeries());
var imageTemplate2 = imageSeries2.mapImages.template;
imageTemplate2.propertyFields.longitude = "longitude";
imageTemplate2.propertyFields.latitude = "latitude";
imageTemplate2.nonScaling = true;

var imageSeries2 = chart2.series.push(new am4maps.MapImageSeries());
imageSeries2.mapImages.template.propertyFields.longitude = "longitude";
imageSeries2.mapImages.template.propertyFields.latitude = "latitude";
imageSeries2.data = [
  {
    latitude: 48.5,
    longitude: 34,
    count: 1,
    name: "??????????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 47.8,
    longitude: 33.5,
    count: 2,
    name: "??????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 48.15,
    longitude: 33.5,
    count: 3,
    name: "??????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 47.8,
    longitude: 34.5,
    count: 4,
    name: "????????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 47.9,
    longitude: 35.3,
    count: 5,
    name: "????????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 48,
    longitude: 35,
    count: 6,
    name: "??????????????-??????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 47,
    longitude: 35.3,
    count: 7,
    name: "????????????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 49.5,
    longitude: 24.2,
    count: 8,
    name: "??????????????????????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 49.7,
    longitude: 24,
    count: 9,
    name: "????????????-2??",
    text: "???? 220 ????",
  },
  {
    latitude: 49.7,
    longitude: 23.7,
    count: 10,
    name: "???????????? ????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 49,
    longitude: 24.5,
    count: 11,
    name: "??????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 50.8,
    longitude: 26.4,
    count: 12,
    name: "??????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 48.4,
    longitude: 22.8,
    count: 13,
    name: "????????????????????",
    text: "???? 400 ????",
  },
  {
    latitude: 49.5,
    longitude: 28.5,
    count: 14,
    name: "??????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 48.5,
    longitude: 25.8,
    count: 16,
    name: "??????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 47,
    longitude: 33.5,
    count: 17,
    name: "??????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 47.1,
    longitude: 31.8,
    count: 18,
    name: "??????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 46.5,
    longitude: 34.3,
    count: 19,
    name: "??????????????",
    text: "???? 330/35 ????",
  },
  {
    latitude: 46.9,
    longitude: 31.3,
    count: 20,
    name: "??????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 46.8,
    longitude: 31.7,
    count: 21,
    name: "????????????????????",
    text: "???? 220 ????",
  },
  {
    latitude: 49.2,
    longitude: 33.8,
    count: 22,
    name: "??????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 50.7,
    longitude: 33.6,
    count: 23,
    name: "??????????????????-??????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 49.5,
    longitude: 36.3,
    count: 24,
    name: "??????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 50.1,
    longitude: 36.8,
    count: 25,
    name: "????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 51.2,
    longitude: 34.4,
    count: 26,
    name: "????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 50.55,
    longitude: 29.8,
    count: 27,
    name: "????????????????????",
    text: "???? 750 ????",
  },
  {
    latitude: 50.3,
    longitude: 30.4,
    count: 28,
    name: "????????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 51.7,
    longitude: 31,
    count: 29,
    name: "????????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 49.5,
    longitude: 32,
    count: 30,
    name: "??????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 49.7,
    longitude: 30.2,
    count: 31,
    name: "????????????????????????????????",
    text: "???? 330 ????",
  },
  {
    latitude: 47.4,
    longitude: 34.8,
    count: 32,
    name: "????????????????????????",
    text: "??????",
  },
  {
    latitude: 47.7,
    longitude: 31.4,
    count: 33,
    name: "??????????-??????????????????????",
    text: "??????",
  },
  {
    latitude: 50.2,
    longitude: 26.8,
    count: 34,
    name: "??????????????????????????",
    text: "??????",
  },
  {
    latitude: 51.4,
    longitude: 26.1,
    count: 35,
    name: "????????????????????????",
    text: "??????",
  },
  {
    latitude: 50.5,
    longitude: 30.58,
    count: 36,
    name: "????????????????????",
    text: "??????-5",
  },
  {
    latitude: 50,
    longitude: 30.8,
    count: 37,
    name: "??????????????????????????",
    text: "??????",
  },
  {
    latitude: 48.5,
    longitude: 38,
    count: 38,
    name: "????????????????????????????",
    text: "??????",
  },
  {
    latitude: 49.3,
    longitude: 24.6,
    count: 39,
    name: "??????????????????????????",
    text: "??????",
  },
  {
    latitude: 48,
    longitude: 37.6,
    count: 40,
    name: "??????????'??????????????",
    text: "??????",
  },
  {
    latitude: 49.5,
    longitude: 36.7,
    count: 41,
    name: "??????????????????????",
    text: "??????",
  },
];

// console.log(polygonTemplate2.clones.values);

// add events to recalculate map position when the map is moved or zoomed
chart2.events.on("ready", updateCustomMarkers);
chart2.events.on("mappositionchanged", updateCustomMarkers);

$(function () {
  $(".amcharts-Container-group").css({
    "font-family": '"Montserrat", sans-serif',
  });
});

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers(event) {
  // go through all of the images
  imageSeries2.mapImages.each(function (image) {
    // check if it has corresponding HTML element
    if (!image.dummyData || !image.dummyData.externalElement) {
      // create onex
      image.dummyData = {
        externalElement: createCustomMarker(image),
      };
    }

    // reposition the element accoridng to coordinates
    var xy = chart2.geoPointToSVG({
      longitude: image.longitude,
      latitude: image.latitude,
    });
    image.dummyData.externalElement.style.top = xy.y + "px";
    image.dummyData.externalElement.style.left = xy.x + "px";
  });
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
  var chart2 = image.dataItem.component.chart;

  // create holder

  var holder = document.createElement("div");
  holder.className = `map-marker trigger__map__text__${image.dataItem.dataContext.count}`;
  holder.style.position = "absolute";

  // maybe add a link to it?
  // create dot
  var dot = document.createElement("div");
  dot.className = `dot dot__${image.dataItem.dataContext.count}`;
  holder.appendChild(dot);

  // create pulse
  var pulse = document.createElement("div");
  pulse.className = `pulse pulse__${image.dataItem.dataContext.count}`;
  holder.appendChild(pulse);

  // maybe add a link to it?

  // if (undefined != image.url) {
  //   holder.onclick = function () {
  //     window.location.href = image.url;
  //   };
  //   holder.className += " map-clickable";
  // }

  // console.log(image);

  // create dot
  // var dot = document.createElement("div");
  // dot.className = `img__location_1 img__location trigger__map__text__${image.dataItem.dataContext.count}`;
  // holder.appendChild(dot);

  var text = document.createElement("div");
  text.className = `pop-up__map__text pop-up__map__text__${image.dataItem.dataContext.count}`;
  text.innerHTML = `<p>${image.dataItem.dataContext.text} <br> ${image.dataItem.dataContext.name} </p>`;
  holder.appendChild(text);
  // create pulse
  //   var pulse = document.createElement("div");
  //   pulse.className = "pulse";
  //   holder.appendChild(pulse);

  // append the marker to the map container
  chart2.svgContainer.htmlElement.appendChild(holder);

  return holder;
}

$(function () {
  $(".trigger__map__text__1").hover(
    function (e) {
      $(".pop-up__map__text__1").show();
      $(".pop-up__map__text__1").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__1").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__1").hide();
      $(".pop-up__map__text__1").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__2").hover(
    function (e) {
      $(".pop-up__map__text__2").show();
      $(".pop-up__map__text__2").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__2").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__2").hide();
      $(".pop-up__map__text__2").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__3").hover(
    function (e) {
      $(".pop-up__map__text__3").show();
      $(".pop-up__map__text__3").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__3").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__3").hide();
      $(".pop-up__map__text__3").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__4").hover(
    function (e) {
      $(".pop-up__map__text__4").show();
      $(".pop-up__map__text__4").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__4").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__4").hide();
      $(".pop-up__map__text__4").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__5").hover(
    function (e) {
      $(".pop-up__map__text__5").show();
      $(".pop-up__map__text__5").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__5").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__5").hide();
      $(".pop-up__map__text__5").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__6").hover(
    function (e) {
      $(".pop-up__map__text__6").show();
      $(".pop-up__map__text__6").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__6").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__6").hide();
      $(".pop-up__map__text__6").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__7").hover(
    function (e) {
      $(".pop-up__map__text__7").show();
      $(".pop-up__map__text__7").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__7").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__7").hide();
      $(".pop-up__map__text__7").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__8").hover(
    function (e) {
      $(".pop-up__map__text__8").show();
      $(".pop-up__map__text__8").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__8").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__8").hide();
      $(".pop-up__map__text__8").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__9").hover(
    function (e) {
      $(".pop-up__map__text__9").show();
      $(".pop-up__map__text__9").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__9").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__9").hide();
      $(".pop-up__map__text__9").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__10").hover(
    function (e) {
      $(".pop-up__map__text__10").show();
      $(".pop-up__map__text__10").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__10").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__10").hide();
      $(".pop-up__map__text__10").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__11").hover(
    function (e) {
      $(".pop-up__map__text__11").show();
      $(".pop-up__map__text__11").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__11").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__11").hide();
      $(".pop-up__map__text__11").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__12").hover(
    function (e) {
      $(".pop-up__map__text__12").show();
      $(".pop-up__map__text__12").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__12").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__12").hide();
      $(".pop-up__map__text__12").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__13").hover(
    function (e) {
      $(".pop-up__map__text__13").show();
      $(".pop-up__map__text__13").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__13").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__13").hide();
      $(".pop-up__map__text__13").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__14").hover(
    function (e) {
      $(".pop-up__map__text__14").show();
      $(".pop-up__map__text__14").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__14").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__14").hide();
      $(".pop-up__map__text__14").css("opacity", "0");
    }
  );
});

$(function () {
  $(".trigger__map__text__15").hover(
    function (e) {
      $(".pop-up__map__text__15").show();
      $(".pop-up__map__text__15").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__15").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__15").hide();
      $(".pop-up__map__text__15").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__16").hover(
    function (e) {
      $(".pop-up__map__text__16").show();
      $(".pop-up__map__text__16").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__16").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__16").hide();
      $(".pop-up__map__text__16").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__17").hover(
    function (e) {
      $(".pop-up__map__text__17").show();
      $(".pop-up__map__text__17").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__17").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__17").hide();
      $(".pop-up__map__text__17").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__18").hover(
    function (e) {
      $(".pop-up__map__text__18").show();
      $(".pop-up__map__text__18").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__18").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__18").hide();
      $(".pop-up__map__text__18").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__19").hover(
    function (e) {
      $(".pop-up__map__text__19").show();
      $(".pop-up__map__text__19").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__19").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__19").hide();
      $(".pop-up__map__text__19").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__20").hover(
    function (e) {
      $(".pop-up__map__text__20").show();
      $(".pop-up__map__text__20").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__20").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__20").hide();
      $(".pop-up__map__text__20").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__21").hover(
    function (e) {
      $(".pop-up__map__text__21").show();
      $(".pop-up__map__text__21").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__21").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__21").hide();
      $(".pop-up__map__text__21").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__22").hover(
    function (e) {
      $(".pop-up__map__text__22").show();
      $(".pop-up__map__text__22").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__22").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__22").hide();
      $(".pop-up__map__text__22").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__23").hover(
    function (e) {
      $(".pop-up__map__text__23").show();
      $(".pop-up__map__text__23").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__23").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__23").hide();
      $(".pop-up__map__text__23").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__24").hover(
    function (e) {
      $(".pop-up__map__text__24").show();
      $(".pop-up__map__text__24").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__24").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__24").hide();
      $(".pop-up__map__text__24").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__25").hover(
    function (e) {
      $(".pop-up__map__text__25").show();
      $(".pop-up__map__text__25").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__25").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__25").hide();
      $(".pop-up__map__text__25").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__26").hover(
    function (e) {
      $(".pop-up__map__text__26").show();
      $(".pop-up__map__text__26").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__26").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__26").hide();
      $(".pop-up__map__text__26").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__27").hover(
    function (e) {
      $(".pop-up__map__text__27").show();
      $(".pop-up__map__text__27").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__27").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__27").hide();
      $(".pop-up__map__text__27").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__28").hover(
    function (e) {
      $(".pop-up__map__text__28").show();
      $(".pop-up__map__text__28").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__28").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__28").hide();
      $(".pop-up__map__text__28").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__29").hover(
    function (e) {
      $(".pop-up__map__text__29").show();
      $(".pop-up__map__text__29").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__29").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__29").hide();
      $(".pop-up__map__text__29").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__30").hover(
    function (e) {
      $(".pop-up__map__text__30").show();
      $(".pop-up__map__text__30").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__30").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__30").hide();
      $(".pop-up__map__text__30").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__31").hover(
    function (e) {
      $(".pop-up__map__text__31").show();
      $(".pop-up__map__text__31").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__31").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__31").hide();
      $(".pop-up__map__text__31").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__32").hover(
    function (e) {
      $(".pop-up__map__text__32").show();
      $(".pop-up__map__text__32").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__32").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__32").hide();
      $(".pop-up__map__text__32").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__33").hover(
    function (e) {
      $(".pop-up__map__text__33").show();
      $(".pop-up__map__text__33").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__33").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__33").hide();
      $(".pop-up__map__text__33").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__34").hover(
    function (e) {
      $(".pop-up__map__text__34").show();
      $(".pop-up__map__text__34").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__34").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__34").hide();
      $(".pop-up__map__text__34").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__35").hover(
    function (e) {
      $(".pop-up__map__text__35").show();
      $(".pop-up__map__text__35").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__35").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__35").hide();
      $(".pop-up__map__text__35").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__36").hover(
    function (e) {
      $(".pop-up__map__text__36").show();
      $(".pop-up__map__text__36").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__36").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__36").hide();
      $(".pop-up__map__text__36").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__37").hover(
    function (e) {
      $(".pop-up__map__text__37").show();
      $(".pop-up__map__text__37").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__37").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__37").hide();
      $(".pop-up__map__text__37").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__38").hover(
    function (e) {
      $(".pop-up__map__text__38").show();
      $(".pop-up__map__text__38").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__38").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__38").hide();
      $(".pop-up__map__text__38").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__39").hover(
    function (e) {
      $(".pop-up__map__text__39").show();
      $(".pop-up__map__text__39").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__39").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__39").hide();
      $(".pop-up__map__text__39").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__40").hover(
    function (e) {
      $(".pop-up__map__text__40").show();
      $(".pop-up__map__text__40").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__40").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__40").hide();
      $(".pop-up__map__text__40").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__41").hover(
    function (e) {
      $(".pop-up__map__text__41").show();
      $(".pop-up__map__text__41").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__41").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__41").hide();
      $(".pop-up__map__text__41").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__42").hover(
    function (e) {
      $(".pop-up__map__text__42").show();
      $(".pop-up__map__text__42").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__42").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__42").hide();
      $(".pop-up__map__text__42").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__43").hover(
    function (e) {
      $(".pop-up__map__text__43").show();
      $(".pop-up__map__text__43").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__43").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__43").hide();
      $(".pop-up__map__text__43").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__44").hover(
    function (e) {
      $(".pop-up__map__text__44").show();
      $(".pop-up__map__text__44").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__44").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__44").hide();
      $(".pop-up__map__text__44").css("opacity", "0");
    }
  );
});
$(function () {
  $(".trigger__map__text__45").hover(
    function (e) {
      $(".pop-up__map__text__45").show();
      $(".pop-up__map__text__45").animate({ opacity: 1 }, 500);
      $(".pop-up__map__text__45").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__45").hide();
      $(".pop-up__map__text__45").css("opacity", "0");
    }
  );
});
