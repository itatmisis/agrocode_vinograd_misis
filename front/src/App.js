import { useEffect, useState } from 'react';
import './App.css';
import Map_bx from './components/Map_bx';
import OptionBtns from './components/OptionBtns';
import Bookmarks from "./components/Bookmarks";
import Filtres from './components/Filtres';
import MainPage from './components/MainPage';
import { Routes, Route, Link } from "react-router-dom";
import Layers from './components/Layers';
function App() {
  const [bookmarks,setBookmarks] = useState(()=>[])
  const [vineHouses, setVineHouses] = useState(() => [
    //example
    { name: "Вина Придонья", coords: [19, 19] },
    { name: "Добрые Вина", coords: [19, 18] }
  ]);
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/risinglight/cl83dlzfp003n15priila25c1"
  );
  useEffect(()=>{console.log("rerender")})
  const [sub_windows, setSub_windows] = useState(()=>[0, 0]);
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
                  vineHouses={vineHouses}
                  landType={example.SOILTEXTURE}
                  tmax={example.TMAX}
                  tmin={example.TMIN}
                  tavr={example.TAVG}
                  relifAspect={example.RELIEF_ASPECT}
                  angle={example.RELIEF_SLOPE}
                />
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
                <Map_bx mapStyle={mapStyle}></Map_bx>
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