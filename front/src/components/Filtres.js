import { useRef, useState } from "react";
import "../styles/Filtres.css"
import { useScrollbar } from "../hooks/useScrollbar";
import HelpBtn from "./HelpBtn";
export default function Filtres({vineHouses}) {
  const [medianTemp, setMedianTemp] = useState(()=>0);
  const [maxTemp, setMaxTemp] = useState(()=>0);
  const [minTemp, setMinTemp] = useState(()=>0);
  const [medianDownfall,setMedianDownfall] = useState(()=>200)
  let needScroll = true;
  const listWrapper = useRef(null)
  function handleStoreChoose(props) {
    return null
  }
  useScrollbar(listWrapper,needScroll)
  return (
    <section className="filtres">
      <select
        className="selectShop"
        onChange={(e) => handleStoreChoose(e.target.value)}
      >
        {vineHouses.map((el) => (
          <option value={`${el.name}`}>{el.name}</option>
        ))}
        <option value="km20">KM20</option>
        <option value="belief">BELIEF</option>
        <option value="brandshop">BRANDSHOP</option>
      </select>
      <div
        ref={listWrapper}
        style={{ height: needScroll ? "80vh" : "auto", minHeight: "60vh" }}
      >
        <ul className="filtresSubOptions">
          <li className="option1 option">
            <HelpBtn/>

            <h4>Средняя температура: {medianTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMedianTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={medianTemp}
              className="slider"
            ></input>
            <h4>Максимальная температура: {maxTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMaxTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={maxTemp}
              className="slider"
            ></input>
            <h4>Минимальная температура: {minTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMinTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={minTemp}
              className="slider"
            ></input>
          </li>
          <li className="option2 option">
            многолетнее среднее количество осадков, мм
            <h4>Cреднее количество осадков: {medianDownfall}мм</h4>
            <input
              type="range"
              onChange={(event) => setMedianDownfall(() => event.target.value)}
              min={10}
              max={2000}
              step={0.1}
              value={medianDownfall}
              className="slider"
            ></input>
          </li>
          <li className="option3 option">абсолютная отметка местности, м</li>
          <li className="option4 option">уклон рельефа местности, °</li>
          <li className="option5 option">
            экспозиция (ориентация) рельефа местности, °
          </li>
          <li className="option6 option">
            оценка механического (гранулометрического) состава и плотности
            сложения верхнего слоя почв
          </li>
          <li className="option7 option">
            координаты существующих виноградных угодий в Краснодарском крае
          </li>
          <li className="option8 option">
            базовая классификация земель ( лес/пашня/селитебные территории)
          </li>
        </ul>
      </div>
    </section>
  );
}






