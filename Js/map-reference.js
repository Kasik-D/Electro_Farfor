am4core.useTheme(am4themes_animated);

var chart2 = am4core.create("chartdiv2", am4maps.MapChart);
am4core.options.autoSetClassName = true;

// Set map definition
chart2.geodata = am4geodata_ukraineLow;
console.log("done by me -> https://github.com/Kasik-D");

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

polygonTemplate2.fill = chart2.colors.getIndex(0);

polygonTemplate2.fill = am4core.color("#d3d3d3");

// = am4core.color("#fce3cb");

// Create hover state and set alternative fill color
var hs2 = polygonTemplate2.states.create("hover");

hs2.properties.fill = chart2.colors.getIndex(2);

var activeState = polygonTemplate2.states.create("active");
activeState.properties.fill = am4core.color("#f39235");

polygonTemplate2.events.on("over", function (ev) {
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
  },
  {
    id: "UA-18",
    name: "Zhytomyr",
    fill: am4core.color("#d3d3d3"),
  },
  {
    id: "UA-59",
    name: "Sumy",
    fill: am4core.color("#d3d3d3"),
  },
  {
    id: "UA-71",
    name: "Cherkasy",
    fill: am4core.color("#d3d3d3"),
  },
  {
    id: "UA-12",
    name: "Dnipropetrovsk",
    fill: am4core.color("#d3d3d3"),
  },
  {
    id: "UA-23",
    name: "Zaporizhzhya",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Lviv",
    id: "UA-46",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Ivano-Frankivsk",
    id: "UA-26",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Zaporizhzhya",
    id: "UA-23",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Vinnytsia",
    id: "UA-05",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Chernihiv",
    id: "UA-74",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Mykolaiv",
    id: "UA-48",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Poltava",
    id: "UA-53",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Kharkiv",
    id: "UA-63",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Kyiv",
    id: "UA-32",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Kyiv City",
    id: "UA-30",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Rivne",
    id: "UA-56",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Zakarpattia",
    id: "UA-21",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Chernivtsi",
    id: "UA-77",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Kherson",
    id: "UA-65",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Khmelnytskyi",
    id: "UA-68",
    fill: am4core.color("#d3d3d3"),
  },
  {
    name: "Donetsk",
    id: "UA-14",
    fill: am4core.color("#d3d3d3"),
  },
];

// Bind "fill" property to "fill" key in data
polygonTemplate2.propertyFields.fill = "fill";

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
    name: "«ДНІПРОВСЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 47.8,
    longitude: 33.5,
    count: 2,
    name: "«ГІРНИЧА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 48.15,
    longitude: 33.5,
    count: 3,
    name: "«КРИВОРІЗЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 47.8,
    longitude: 34.5,
    count: 4,
    name: "«НІКОПОЛЬСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 47.9,
    longitude: 35.3,
    count: 5,
    name: "«ЗАПОРІЗЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 48,
    longitude: 35,
    count: 6,
    name: "«ДНІПРО-ДОНБАС»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 47,
    longitude: 35.3,
    count: 7,
    name: "«МЕЛІТОПОЛЬСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 49.5,
    longitude: 24.2,
    count: 8,
    name: "«ЗАХІДНОУКРАЇНСЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 49.7,
    longitude: 24,
    count: 9,
    name: "«ЛЬВІВ-2»",
    text: "ПС 220 КВ",
  },
  {
    latitude: 49.7,
    longitude: 23.7,
    count: 10,
    name: "«ЛЬВІВ ЗАХІДНА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 49,
    longitude: 24.5,
    count: 11,
    name: "«БОГОРОДЧАНИ»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 50.8,
    longitude: 26.4,
    count: 12,
    name: "«РІВНЕ»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 48.4,
    longitude: 22.8,
    count: 13,
    name: "«МУКАЧЕВЕ»",
    text: "ПС 400 КВ",
  },
  {
    latitude: 49.5,
    longitude: 28.5,
    count: 14,
    name: "«ВІННИЦЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 48.5,
    longitude: 25.8,
    count: 16,
    name: "«Чернівецька»",
    text: "ПС 330 кВ",
  },
  {
    latitude: 47,
    longitude: 33.5,
    count: 17,
    name: "«Каховська»",
    text: "ПС 750 кВ",
  },
  {
    latitude: 47.1,
    longitude: 31.8,
    count: 18,
    name: "«ТРИХАТИ»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 46.5,
    longitude: 34.3,
    count: 19,
    name: "«Сиваш»",
    text: "ПС 330/35 кВ",
  },
  {
    latitude: 46.9,
    longitude: 31.3,
    count: 20,
    name: "«ПРОГРЕСІВКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 46.8,
    longitude: 31.7,
    count: 21,
    name: "«БЕРЕЗАНЬ»",
    text: "ПС 220 КВ",
  },
  {
    latitude: 49.2,
    longitude: 33.8,
    count: 22,
    name: "«КРЕМЕНЧУК»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 50.7,
    longitude: 33.6,
    count: 23,
    name: "«ПІВНІЧНО-УКРАЇНСЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 49.5,
    longitude: 36.3,
    count: 24,
    name: "«СТЕПОВА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 50.1,
    longitude: 36.8,
    count: 25,
    name: "«ЛОСЄВЕ»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 51.2,
    longitude: 34.4,
    count: 26,
    name: "«СУМИ»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 50.55,
    longitude: 29.8,
    count: 27,
    name: "«КИЇВСЬКА»",
    text: "ПС 750 КВ",
  },
  {
    latitude: 50.3,
    longitude: 30.4,
    count: 28,
    name: "«НОВОКИЇВСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 51.7,
    longitude: 31,
    count: 29,
    name: "«ЧЕРНІГІВСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 49.5,
    longitude: 32,
    count: 30,
    name: "«ЧЕРКАСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 49.7,
    longitude: 30.2,
    count: 31,
    name: "«БІЛОЦЕРКІВСЬКА»",
    text: "ПС 330 КВ",
  },
  {
    latitude: 47.4,
    longitude: 34.8,
    count: 32,
    name: "«Запорізька»",
    text: "АЕС",
  },
  {
    latitude: 47.7,
    longitude: 31.4,
    count: 33,
    name: "«Южно-Українська»",
    text: "АЕС",
  },
  {
    latitude: 50.2,
    longitude: 26.8,
    count: 34,
    name: "«Хмельницька»",
    text: "АЕС",
  },
  {
    latitude: 51.4,
    longitude: 26.1,
    count: 35,
    name: "«Рівненська»",
    text: "АЕС",
  },
  {
    latitude: 50.5,
    longitude: 30.58,
    count: 36,
    name: "«Київська»",
    text: "ТЕЦ-5",
  },
  {
    latitude: 50,
    longitude: 30.8,
    count: 37,
    name: "«Трипільська»",
    text: "ТЕС",
  },
  {
    latitude: 48.5,
    longitude: 38,
    count: 38,
    name: "«Вуглегірська»",
    text: "ТЕС",
  },
  {
    latitude: 49.3,
    longitude: 24.6,
    count: 39,
    name: "«Бурштинська»",
    text: "ТЕС",
  },
  {
    latitude: 48,
    longitude: 37.6,
    count: 40,
    name: "«Слов'янська»",
    text: "ТЕС",
  },
  {
    latitude: 49.5,
    longitude: 36.7,
    count: 41,
    name: "«Зміївська»",
    text: "ТЕС",
  },
];

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
  dot.className = "dot";
  holder.appendChild(dot);

  // create pulse
  var pulse = document.createElement("div");
  pulse.className = "pulse";
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
      $(".pop-up__map__text__1").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__1").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__2").hover(
    function (e) {
      $(".pop-up__map__text__2").show();
      $(".pop-up__map__text__2").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__2").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__3").hover(
    function (e) {
      $(".pop-up__map__text__3").show();
      $(".pop-up__map__text__3").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__3").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__4").hover(
    function (e) {
      $(".pop-up__map__text__4").show();
      $(".pop-up__map__text__4").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__4").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__5").hover(
    function (e) {
      $(".pop-up__map__text__5").show();
      $(".pop-up__map__text__5").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__5").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__6").hover(
    function (e) {
      $(".pop-up__map__text__6").show();
      $(".pop-up__map__text__6").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__6").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__7").hover(
    function (e) {
      $(".pop-up__map__text__7").show();
      $(".pop-up__map__text__7").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__7").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__8").hover(
    function (e) {
      $(".pop-up__map__text__8").show();
      $(".pop-up__map__text__8").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__8").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__9").hover(
    function (e) {
      $(".pop-up__map__text__9").show();
      $(".pop-up__map__text__9").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__9").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__10").hover(
    function (e) {
      $(".pop-up__map__text__10").show();
      $(".pop-up__map__text__10").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__10").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__11").hover(
    function (e) {
      $(".pop-up__map__text__11").show();
      $(".pop-up__map__text__11").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__11").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__12").hover(
    function (e) {
      $(".pop-up__map__text__12").show();
      $(".pop-up__map__text__12").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__12").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__13").hover(
    function (e) {
      $(".pop-up__map__text__13").show();
      $(".pop-up__map__text__13").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__13").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__14").hover(
    function (e) {
      $(".pop-up__map__text__14").show();
      $(".pop-up__map__text__14").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__14").hide();
    }
  );
});

$(function () {
  $(".trigger__map__text__15").hover(
    function (e) {
      $(".pop-up__map__text__15").show();
      $(".pop-up__map__text__15").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__15").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__16").hover(
    function (e) {
      $(".pop-up__map__text__16").show();
      $(".pop-up__map__text__16").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__16").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__17").hover(
    function (e) {
      $(".pop-up__map__text__17").show();
      $(".pop-up__map__text__17").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__17").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__18").hover(
    function (e) {
      $(".pop-up__map__text__18").show();
      $(".pop-up__map__text__18").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__18").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__19").hover(
    function (e) {
      $(".pop-up__map__text__19").show();
      $(".pop-up__map__text__19").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__19").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__20").hover(
    function (e) {
      $(".pop-up__map__text__20").show();
      $(".pop-up__map__text__20").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__20").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__21").hover(
    function (e) {
      $(".pop-up__map__text__21").show();
      $(".pop-up__map__text__21").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__21").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__22").hover(
    function (e) {
      $(".pop-up__map__text__22").show();
      $(".pop-up__map__text__22").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__22").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__23").hover(
    function (e) {
      $(".pop-up__map__text__23").show();
      $(".pop-up__map__text__23").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__23").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__24").hover(
    function (e) {
      $(".pop-up__map__text__24").show();
      $(".pop-up__map__text__24").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__24").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__25").hover(
    function (e) {
      $(".pop-up__map__text__25").show();
      $(".pop-up__map__text__25").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__25").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__26").hover(
    function (e) {
      $(".pop-up__map__text__26").show();
      $(".pop-up__map__text__26").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__26").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__27").hover(
    function (e) {
      $(".pop-up__map__text__27").show();
      $(".pop-up__map__text__27").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__27").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__28").hover(
    function (e) {
      $(".pop-up__map__text__28").show();
      $(".pop-up__map__text__28").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__28").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__29").hover(
    function (e) {
      $(".pop-up__map__text__29").show();
      $(".pop-up__map__text__29").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__29").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__30").hover(
    function (e) {
      $(".pop-up__map__text__30").show();
      $(".pop-up__map__text__30").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__30").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__31").hover(
    function (e) {
      $(".pop-up__map__text__31").show();
      $(".pop-up__map__text__31").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__31").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__32").hover(
    function (e) {
      $(".pop-up__map__text__32").show();
      $(".pop-up__map__text__32").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__32").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__33").hover(
    function (e) {
      $(".pop-up__map__text__33").show();
      $(".pop-up__map__text__33").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__33").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__34").hover(
    function (e) {
      $(".pop-up__map__text__34").show();
      $(".pop-up__map__text__34").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__34").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__35").hover(
    function (e) {
      $(".pop-up__map__text__35").show();
      $(".pop-up__map__text__35").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__35").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__36").hover(
    function (e) {
      $(".pop-up__map__text__36").show();
      $(".pop-up__map__text__36").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__36").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__37").hover(
    function (e) {
      $(".pop-up__map__text__37").show();
      $(".pop-up__map__text__37").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__37").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__38").hover(
    function (e) {
      $(".pop-up__map__text__38").show();
      $(".pop-up__map__text__38").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__38").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__39").hover(
    function (e) {
      $(".pop-up__map__text__39").show();
      $(".pop-up__map__text__39").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__39").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__40").hover(
    function (e) {
      $(".pop-up__map__text__40").show();
      $(".pop-up__map__text__40").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__40").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__41").hover(
    function (e) {
      $(".pop-up__map__text__41").show();
      $(".pop-up__map__text__41").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__41").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__42").hover(
    function (e) {
      $(".pop-up__map__text__42").show();
      $(".pop-up__map__text__42").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__42").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__43").hover(
    function (e) {
      $(".pop-up__map__text__43").show();
      $(".pop-up__map__text__43").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__43").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__44").hover(
    function (e) {
      $(".pop-up__map__text__44").show();
      $(".pop-up__map__text__44").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__44").hide();
    }
  );
});
$(function () {
  $(".trigger__map__text__45").hover(
    function (e) {
      $(".pop-up__map__text__45").show();
      $(".pop-up__map__text__45").css("display", "flex");
    },
    function () {
      $(".pop-up__map__text__45").hide();
    }
  );
});
