import { useEffect, useState } from "react";
import "./App.css";
import { toLatLon } from "utm";
import { fromLatLon } from "utm";
import Map_bx from "./components/Map_bx";
import OptionBtns from "./components/OptionBtns";
import Bookmarks from "./components/Bookmarks";
import Filtres from "./components/Filtres";
import MainPage from "./components/MainPage";
import { Routes, Route, Link, json } from "react-router-dom";
import Layers from "./components/Layers";
function App() {
  const [bookmarks, setBookmarks] = useState(() => []);
  const [vineHouses, setVineHouses] = useState(() => [
    //example
    { name: "Лефкадия", coords: [44.942348, 37.850501] },
    { name: "Абрау Дюрсо", coords: [44.701748, 37.599908] },
    { name: "Мысхако", coords: [44.667525, 37.760244] },
  ]);
  const [changes, setChanges] = useState({
    SOILTEXTURE: 0, // +- landType
    TMAX: 0, //+
    TMIN: 0, //+
    TAVG: 0, //+
    RELIEF_ASPECT: 0, //+
    RELIEF_SLOPE: 0, //+ relifAspect
    PREC: 0, //+-
  });
  const [needsToSave, setNeedsToSave] = useState(false);
  const [medianTemp, setMedianTemp] = useState(() => average(example.TAVG[0]));
  const [maxTemp, setMaxTemp] = useState(() => average(example.TMAX[0]));
  const [minTemp, setMinTemp] = useState(() => average(example.TMIN[0]));
  const [relifAspect, setRelifAspect] = useState(() => example.RELIEF_ASPECT);
  const [landType, setLandType] = useState(() => [example.SOILTEXTURE]);
  const [slope, setSlope] = useState(() => Math.round(example.RELIEF_SLOPE));
  const [prek, setPrek] = useState(() => average(example.PREC[0]));
  const [point, setPoint] = useState(() => {
    "default";
  });
  const [viewport, setViewport] = useState({
    latitude: 56.009097,
    longitude: 92.872515,
    zoom: 5,
  });
  ///

  ///
  useEffect(() => {
    let pushingData = JSON.stringify({
      TMAX: maxTemp,
      TMIN: minTemp,
      TAVG: medianTemp,
      RELIEF_ASPECT: relifAspect,
      RELIEF_SLOPE: slope,
      PREC: prek,
      LATITUDE: viewport["latitude"],
      LONGITUDE: viewport["longitude"],
    });
    fetch(" http://89.108.65.158", {
      method: "POST",
      body: pushingData,
    })
      .then((response) => response.json())
      .then((res) => JSON.parse(res))
      .then((result) => {
        setPoint(null);
      });
    console.log("points", point);
  }, [viewport]);
  useEffect(() => {
    console.log(
      maxTemp,
      minTemp,
      medianTemp,
      relifAspect,
      landType,
      slope,
      prek
    );
  });
  function FromJSONtoLatLon(res) {
    let ans = [
      toLatLon(
        res["easting"],
        res["northing"],
        res["zoneNum"],
        res["zoneLetter"]
      ),
    ];
    return ans;
  }
  console.clear();
  console.log("UTM");
  console.log(FromJSONtoLatLon({ easting: 505959.40497265797, northing: 2553302.5038646543, zoneNum: 38, zoneLetter: "D" }))
  /*[(result["easting"], result["northing"])],
        [result["easting"] + 100, result["northing"]],
        [result["easting"] + 100, result["northing"] + 100],
        [result["easting"], result["northing"] + 100],*/

  function handleStoreChoose(el) {
    setViewport({
      latitude: el.coords[0],
      longitude: el.coords[1],
      ...viewport,
    });
  }
  let defViewport = { latitude: 56.009097, longitude: 92.872515, zoom: 5 };
  const [isDefPoint, setIsDefPoint] = useState(
    () =>
      viewport["latitude"] == defViewport["latitude"] &&
      viewport["longitude"] == defViewport["longitude"]
  );
  function handleSaveClick(params) {
    if (!needsToSave) {
      setNeedsToSave(() => !needsToSave);

      setTimeout(() => {
        setNeedsToSave(() => needsToSave);
      }, 3000);
    }
  }
  function average(list) {
    let summ = 0;
    for (let i of list) {
      summ += i;
    }
    return Math.round(summ / 12);
  }
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/risinglight/cl83dlzfp003n15priila25c1"
  );
  useEffect(() => {
    console.log("rerender");
    console.log(fromLatLon(-67.13734351262877, 45.137451890638886), "utm");
  });
  const [sub_windows, setSub_windows] = useState(() => [0, 0]);

  function handleBookmarksClick(params) {
    setSub_windows([!sub_windows[0], sub_windows[1]]);
  }

  function handleLayersClick(params) {
    setSub_windows([sub_windows[0], !sub_windows[1]]);
  }
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<></>} />
          <Route
            path="/map"
            element={
              <section>
                <Filtres
                  onStoreChoose={handleStoreChoose}
                  vineHouses={vineHouses}
                  landType={landType}
                  setLandType={setLandType}
                  medianTemp={medianTemp}
                  minTemp={minTemp}
                  maxTemp={maxTemp}
                  setMedianTemp={setMedianTemp}
                  setMinTemp={setMinTemp}
                  setMaxTemp={setMaxTemp}
                  relifAspect={relifAspect}
                  setRelifAspect={setRelifAspect}
                  angle={example.RELIEF_SLOPE}
                  abs_h={r}
                  needsToSave={needsToSave}
                  setNeedsToSave={setNeedsToSave}
                  prek={prek}
                  setPrek={setPrek}
                  slope={slope}
                  setSlope={setSlope}
                  onSaveClick={handleSaveClick}
                />
                <div className="chooseDot">
                  {isDefPoint
                    ? "Выберите место на карте"
                    : `${viewport["latitude"]},${viewport["longitude"]}`}
                </div>
                <OptionBtns
                  onBookmarksClick={handleBookmarksClick}
                  onLayersClick={handleLayersClick}
                  setMapStyle={setMapStyle}
                />
                {sub_windows[0] ? (
                  <Bookmarks bookmarks={bookmarks}></Bookmarks>
                ) : (
                  <></>
                )}
                {sub_windows[1] ? <Layers setMapStyle={setMapStyle} /> : <></>}
                <Map_bx
                  mapStyle={mapStyle}
                  viewport={viewport}
                  setViewport={setViewport}
                  setIsDefPoint={setIsDefPoint}
                  defViewport={defViewport}
                ></Map_bx>
              </section>
            }
          />
          <Route path="/smt" element={<></>} />
          <Route path="*" element={<>404 eror</>} />
        </Routes>
      }
    </>
  );
}

export default App;
const example = {
  x: 4095,
  y: 4095,
  ADMIN: false, // территория принадлежит Краснодарскому краю
  LANDCOVER: 2, // землепользование
  PREC: Array(
    [94, 78, 84, 132, 122, 126, 117, 119, 131, 149, 152, 130],
    Uint16Array
  ), //Среднемесячное количество осадков, мм (12 каналов файла соответствуют месяцам).
  RELIEF_ASPECT: 162.15979, //Экспозиция (угол ориентации) местности, градусы.

  RELIEF_HEIGHT: 2008, //Высота местности, м

  RELIEF_SLOPE: 42.42567, //Уклон местности, градусы

  SOILTEXTURE: 9, //Тип почвы по гранулометрическому составу.
  SUNNY_DAYS_ARR_OCT: 66, //Среднее количество солнечных дней в период с апреля по октябрь, дней

  TAVG: Array([-54, -52, -26, 28, 68, 100, 131, 126, 92, 49, -1, -34]), //Среднемесячная температура воздуха, 0.1 градусов Цельсия (12 каналов файла соответствуют месяцам).
  TMAX: Array([-16, 18, 44, 70, 118, 157, 192, 186, 146, 98, 36, 2]), //Максимальная температура воздуха по месяцам, 0.1 градусов Цельсия (12 каналов файла соответствуют месяцам).

  TMIN: Array([-92, -95, -69, -14, 18, 44, 69, 67, 37, 1, -38, -70]), //Минимальная температура воздуха по месяцам, 0.1 градусов Цельсия (12 каналов файла соответствуют месяцам).

  VINEYARDS: false, //Территории, занятые виноградниками:
  WATER_SEASONALYTY: 0,
};
let r = 0;
if (example.RELIEF_HEIGHT <= 1200) {
  r = 0;
} else if (example.RELIEF_HEIGHT <= 1500) {
  r = 1;
} else if (example.RELIEF_HEIGHT <= 1900) {
  r = 2;
} else {
  r = 3;
}
