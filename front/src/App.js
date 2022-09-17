import { useState } from 'react';
import './App.css';
import Map_bx from './components/Map_bx';
import OptionBtns from './components/OptionBtns';
import Bookmarks from "./components/Bookmarks";
import Filtres from './components/Filtres';

function App() {
  const [bookmarks,setBookmarks] = useState(()=>[])
  const [vineHouses, setVineHouses] = useState(() => [
    //example
    { name: "Вина Придонья", coords: [19, 19] },
    { name: "Добрые Вина", coords: [19, 18] }
  ]);
  const [sub_windows, setSub_windows] = useState(()=>[0, 0]);
  function handleBookmarksClick(params) {
    setSub_windows([!sub_windows[0], sub_windows[1]]);
  }
  function handleLayersClick(params) {
    setSub_windows([sub_windows[0], !sub_windows[1]]);
  }
  return (
    <section>
      <Filtres vineHouses={vineHouses} />
      <OptionBtns
        onBookmarksClick={handleBookmarksClick}
        onLayersClick={handleLayersClick}
      />
      {sub_windows[0] ? <Bookmarks bookmarks={bookmarks}></Bookmarks> : <></>}
      <Map_bx></Map_bx>
    </section>
  );
}

export default App;
