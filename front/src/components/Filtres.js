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
  medianTemp,
  minTemp,
  maxTemp,
  setMedianTemp,
  setMinTemp,
  setMaxTemp,
  relifAspect,
  setRelifAspect,
  angle,
  abs_h,
  needsToSave,
  setNeedsToSave,
}) {
  const [helpWindow, setHelpWindow] = useState(false);
  // upload to server
  function handleSaveClick(params) {
    if (!needsToSave) {
      setNeedsToSave(()=>!needsToSave);
      setTimeout(() => {
        setNeedsToSave(()=>needsToSave);
        
      }, 3000);
    }
  }
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
        medianTemp={medianTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        setMedianTemp={setMedianTemp}
        setMinTemp={setMinTemp}
        setMaxTemp={setMaxTemp}
        relifAspect={relifAspect}
        setRelifAspect={setRelifAspect}
        Langle={angle}
        abs_h={abs_h}
  
        needsToSave={needsToSave}
        setNeedsToSave={setNeedsToSave}
      />
      {helpWindow && (
        <div
          className="section-bookmarks"
          style={{ top: "0", right: "-74.2%" }}
        >
          Подсказка
        </div>
      )}
      <button className="save-btn btn" onClick={handleSaveClick}>
        Сохранить
      </button>
    </section>
  );
}
