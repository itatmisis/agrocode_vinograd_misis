import { useRef, useState } from "react";
import "../styles/Filtres.css";
import { useScrollbar } from "../hooks/useScrollbar";
import HelpBtn from "./HelpBtn";
import SelectVineHouse from "./SelectVineHouse";
import Angle from "./Angle";
import Checkboxes from "./Checkboxes";
import WrapperList from "./WrapperList";
import HelpWindow from "./HelpWindow";

export default function Filtres({
  vineHouses,
  landType,
  setLandType,
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
  prek,
  setPrek
  ,slope,
  setSlope
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
        setLandType={setLandType}
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
        prek={prek}
        setPrek={setPrek}
        slope={slope}
        setSlope={setSlope}
      />
      <HelpWindow helpWindow={helpWindow} />
      <button className="save-btn btn" onClick={handleSaveClick}>
        Сохранить
      </button>
    </section>
  );
}
