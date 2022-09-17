import { useRef, useState } from "react";
import "../styles/Filtres.css";
import { useScrollbar } from "../hooks/useScrollbar";
import HelpBtn from "./HelpBtn";
import SelectVineHouse from "./SelectVineHouse";
import Angle from "./Angle";
import Checkboxes from "./Checkboxes";
import WrapperList from "./WrapperList";

export default function Filtres({
  vineHouses,
  landType,
  tmax,
  tmin,
  tavr,
  relifAspect,
  angle
}) {
  const [helpWindow, setHelpWindow] = useState(false);
  function handleStoreChoose(props) {
    return null;
  }

  return (
    <section className="filtres">
      <SelectVineHouse
        onStoreChoose={handleStoreChoose}
        vineHouses={vineHouses}
      />
      <WrapperList
        helpWindow={helpWindow}
        setHelpWindow={setHelpWindow}
        landType={landType}
        tmax={tmax}
        tmin={tmin}
        tavr={tavr}
        relifAspect={relifAspect}
        Langle={angle}
      />
      {helpWindow && (
        <div
          className="section-bookmarks"
          style={{ top: "0", right: "-54.2%" }}
        >
          Подсказка
        </div>
      )}
    </section>
  );
}
