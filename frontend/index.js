function getParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

window.onload = async () => {
  let code = getParams().get("division");
  let year = getParams().get("year-range");
  let scale = getParams().get("scale");
  let jsonResp;
  alert(code + year + scale);
  jsonResp = await fetchfunc(code ? code : "s", year ? year : "2015");
  x(jsonResp, scale ? scale : "c", code ? code : "s");
};

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFzaGdvZWwyOCIsImEiOiJjbGVjbjR1dGMxa3VyM3ZvNmszbWJiZjh2In0.mIWb0Fb03iisO3DHakRX9w";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

async function fetchfunc(code = "s", year = "2015") {
  let resp = await fetch(
    `http://127.0.0.1:8000/v1/all?code=${code}&year=${year}`
  );
  let json = await resp.json();
  return json;
}

async function fetchCoordinates(loc) {
  let coordinates = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?limit=2&access_token=pk.eyJ1IjoieWFzaGdvZWwyOCIsImEiOiJjbGVjbjR1dGMxa3VyM3ZvNmszbWJiZjh2In0.mIWb0Fb03iisO3DHakRX9w`
  );
  let json = await coordinates.json();
  return json;
}

const submit = document.querySelector("#btnSubmit");
const divison = document.querySelector("#division");
const year = document.querySelector("#year");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `http://127.0.0.1:5501/frontend/?year-range=${year.value}&division=${division.value}`;
  alert("sddsd:" + year.value + divison.value);
});

async function addMarker(elementArr, coordinates, loc) {
  let str = `<h3>Location : ${loc}</h3>`;
  const div = document.createElement("div");
  div.id = loc.replace(/ /g, "_");
  div.classList.add = "markerPopUp";
  div.style.position = "absolute";
  div.style.width = "90%";
  div.style.height = "400px";
  const marker2 = new mapboxgl.Marker({
    color: "black",
    rotation: 45,
  })
    .setLngLat([coordinates[0], coordinates[1]])
    .setPopup(
      new mapboxgl.Popup({
        offset: 25,
      }).setHTML(
        `<div id=${loc.replace(/ /g, "_")} class="markerPopUp" onClick=f(\"${loc
          .replace(/ /g, "_")
          .toString()}\",${JSON.stringify(elementArr)})></div>`
      )
    )
    .addTo(map);
}
const div = {
  s: "state",
  c: "county",
  n: "nation",
};
const x = (jsonResp, scale = "c", code = "s") => {
  arr = {};
  const degScale = {
    c: "TempInC",
    f: "TempInF",
  };

  Object.keys(jsonResp).forEach(async (key) => {
    let loc = jsonResp[key][div[code]].Name;
    if (arr[loc] !== undefined) {
      arr[loc].push({
        label: jsonResp[key].Year.toString(),
        y: jsonResp[key][degScale[scale]],
      });
    } else {
      arr[loc] = [
        {
          label: jsonResp[key].Year.toString(),
          y: jsonResp[key][degScale[scale]],
        },
      ];
    }
    let data = await fetchCoordinates(loc);
    let coordinates = data.features[0].geometry.coordinates;
    const marker = addMarker(arr[loc], coordinates, loc);
  });
};

async function plotGraph(arr, loc, deg = "C") {
  const div = document.querySelector("#chartContainer");
  let chart = await new CanvasJS.Chart(loc, {
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: `Year Wise Temp in ${deg} For ${loc}`,
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelFontSize: 16,
        indexLabelPlacement: "outside",
        dataPoints: arr,
        // dataPoints: [
        //   { x: 1, y: 1 },
        //   { x: 2, y: 2 },
        //   { x: 10, y: 10 },
        // ],
      },
    ],
  });
  await chart.render();
}

const f = (loc, elementArr) => {
  const div = document.getElementById(loc);
  //const jsonRes = JSON.parse(elementArr);
  plotGraph(elementArr, loc);
};
