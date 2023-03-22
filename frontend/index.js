//TAG: Global Variables
let yearStart = "1895";
let yearEnd = "1905";
let code = "nation";
let scale = "celcius";
let map;

//TAG: CONSTANTS
const submit = document.querySelector("#btnSubmit");
const body = document.getElementsByTagName("body")[0];
const form = document.querySelector("#from");
const codeSelected = document.querySelector("#division");
const yearSelected = document.querySelector("#year");
const scaleSelected = document.querySelector("#scale");
const loader = document.getElementsByClassName("loader")[0];
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("chartContainer");
const modalContent = modal.getElementsByClassName("modal-content")[0];
const yearStartSelected = document.getElementById("YearStart");
const yearEndSelected = document.getElementById("YearEnd");
const plotDiv = document.getElementById("chartContainer");
const baseUrl = `http://127.0.0.1:8000/v1`;

// TAG: MAPBOX APIS AND SETTINGS
mapboxgl.accessToken =
  "pk.eyJ1IjoieWFzaGdvZWwyOCIsImEiOiJjbGVjbjR1dGMxa3VyM3ZvNmszbWJiZjh2In0.mIWb0Fb03iisO3DHakRX9w";
const getMap = () => {
  modal.style.display = "none";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // v11 for 2d and v12 for 3d
    center: [-97, 38], // starting position [lng, lat]
    zoom: 5, // starting zoom
  });
  return map;
};
//geocoding:
async function fetchCoordinates(loc) {
  let coordinates = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?country=us&limit=2&access_token=pk.eyJ1IjoieWFzaGdvZWwyOCIsImEiOiJjbGVjbjR1dGMxa3VyM3ZvNmszbWJiZjh2In0.mIWb0Fb03iisO3DHakRX9w`
  );
  let json = await coordinates.json();
  return json;
}

//TAG: ADD MARKERS
async function addMarker(coordinates) {
  const marker2 = new mapboxgl.Marker({
    color: "black",
    rotation: 45,
  })
    .setLngLat([coordinates[0], coordinates[1]])
    .setPopup(
      new mapboxgl.Popup({
        offset: 25,
      }).setHTML()
    )
    .addTo(map);
  return marker2;
}

//TAG: EVENT LISTENERS
body.onclick = () => {
  modal.style.display = "none";
};
window.onload = async () => {
  map = getMap();
  const divData = await fetchDivisons("nation");
  plotMarkers(divData, code);
};
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  let formCode = codeSelected.value;
  let formScale = scaleSelected.value;
  let formYearStart = yearStartSelected.value;
  let formYearEnd = yearEndSelected.value;
  if (code !== formCode) map = getMap();
  code = formCode ? formCode : code;
  scale = formScale ? formScale : scale;
  yearStart = formYearStart ? formYearStart : yearStart;
  yearEnd = formYearEnd ? formYearEnd : yearEnd;
  alert(code + scale + yearStart + yearEnd);
  const divData = await fetchDivisons();
  plotMarkers(divData);
});

document.onkeydown = (e) => {
  if (e.keyCode == 27) {
    modal.style.display = "none";
  }
};

//TAG: FETCH DATA

async function FetchPostType(url) {
  const resp = await fetch(url, {
    method: "POST",
    body: "",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await resp.json();
  return json;
}
async function fetchDivisons() {
  let resp = await fetch(`${baseUrl}/${code}`);
  let json = await resp.json();
  return json;
}

async function fetchYearData(loc, code, yearStart = 1895) {
  let url = `${baseUrl}/${code}/${yearStart}/${loc}`;
  let json = await FetchPostType(url);
  return json;
}

async function fetchYearRangeData(loc) {
  let url = `${baseUrl}/${code}/${yearStart}/${yearEnd}/${loc}`;
  let json = await FetchPostType(url);
  return json;
}

//TAG: PLOT RELATED FUNCTIONS
const arrMarker = [];
const plotMarkers = (divData) => {
  divData.forEach(async (div) => {
    let loc = div.Name;
    let data = await fetchCoordinates(loc);
    let coordinates = data.features[0].geometry.coordinates;
    addMarker(coordinates).then((marker) => {
      marker._element.onclick = () => PopupHandler(loc);
      marker.getPopup()._content.style.display = "none";
    });
  });
};

async function PopupHandler(loc) {
  modal.style.display = "block";
  const yearData = await fetchYearRangeData(loc);
  const resp = convertDataToGraphCoOrdinates(yearData);
  modal.style.display = "block";
  plotGraph(resp, loc);
}

function convertDataToGraphCoOrdinates(arr) {
  const arrXY = [];
  const scaleToShow = {
    celcius: "TempInC",
    fahrenheit: "TempInF",
  };
  arr.forEach((ele) => {
    const loc = ele[code].Name;
    arrXY.push({
      label: ele.Year,
      y: ele[scaleToShow[scale]],
    });
  });
  return arrXY;
}

async function plotGraph(arr, loc) {
  let chart = await new CanvasJS.Chart("modal", {
    exportEnabled: true,
    theme: "light1",
    title: {
      text: `Year Wise Temp in ${scale} For ${loc}`,
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column",
        indexLabelFontColor: "#5A5757",
        indexLabelFontSize: 16,
        indexLabelPlacement: "outside",
        dataPoints: arr,
      },
    ],
  });
  await chart.render();
}
