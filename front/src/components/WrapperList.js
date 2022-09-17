import { useRef, useState } from "react";
import "../styles/Filtres.css";
import { useScrollbar } from "../hooks/useScrollbar";
import HelpBtn from "./HelpBtn";
import Checkboxes from "./Checkboxes";
export default function WrapperList(params) {
  const [medianTemp, setMedianTemp] = useState(() => 0);
  const [maxTemp, setMaxTemp] = useState(() => 0);
  const [minTemp, setMinTemp] = useState(() => 0);
  const [medianDownfall, setMedianDownfall] = useState(() => 200);
  const [angle, setAngle] = useState(() => 15);
  let needScroll = true;
  const listWrapper = useRef(null);
  useScrollbar(listWrapper, needScroll);
  return (
    <>
      <div
        ref={listWrapper}
        style={{ height: needScroll ? "80vh" : "auto", minHeight: "60vh" }}
      >
        <ul className="filtresSubOptions">
          <li className="option1 option">
            <HelpBtn />

            <h4>Средняя температура: {medianTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMedianTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={medianTemp}
              className="slider medianSlider"
            ></input>
            <h4>Максимальная температура: {maxTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMaxTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={maxTemp}
              className="slider maxSlider"
            ></input>
            <h4>Минимальная температура: {minTemp}</h4>
            <input
              type="range"
              onChange={(event) => setMinTemp(() => event.target.value)}
              min={-55}
              max={55}
              step={0.1}
              value={minTemp}
              className="slider minSlider"
            ></input>
          </li>
          <li className="option2 option">
            <h4>Cреднее количество осадков: {medianDownfall}мм</h4>
            <input
              type="range"
              onChange={(event) => setMedianDownfall(() => event.target.value)}
              min={10}
              max={2000}
              step={0.1}
              value={medianDownfall}
              className="slider-downfall"
            ></input>
          </li>
          <li className="option4 option">
            уклон рельефа местности, °
            <div className="ing">
              <div className="angle" />
              <div className="view_angle">{angle}</div>
            </div>
            <input
              type="range"
              onChange={(event) => setAngle(() => event.target.value)}
              min={5}
              max={45}
              step={1}
              value={angle}
              className="slider"
            ></input>
          </li>
          <li className="option3 option">
            Оценка состава и плотности сложения верхнего слоя почв
            <Checkboxes list={{ name: 1, chosed: 0 }}></Checkboxes>
          </li>
        </ul>
      </div>
    </>
  );
}
