import { useRef, useState } from "react";
import "../styles/Filtres.css"
import { useScrollbar } from "../hooks/useScrollbar";
import HelpBtn from "./HelpBtn";
import SelectVineHouse from "./SelectVineHouse";
import Angle from "./Angle";
import Checkboxes from "./Checkboxes";
import WrapperList from "./WrapperList";
export default function Filtres({vineHouses}) {
  
  function handleStoreChoose(props) {
    return null
  }
  
  return (
    <section className="filtres">
      <SelectVineHouse
        onStoreChoose={handleStoreChoose}
        vineHouses={vineHouses}
      />
      <WrapperList
    
      />
        
    </section>
  );
}






