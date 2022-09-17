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
                <Filtres vineHouses={vineHouses} />
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
                {sub_windows[1] ? <Layers setMapStyle={setMapStyle}/> : <></>}
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
