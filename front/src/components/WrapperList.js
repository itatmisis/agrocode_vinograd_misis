import { useRef, useState } from "react";
import "../styles/Filtres.css";
import { useScrollbar } from "../hooks/useScrollbar";
import Checkboxes from "./Checkboxes";
import Temperature from "./Temperature";

export default function WrapperList({
  helpWindow,
  setHelpWindow,
  landType,
  tmax,
  tmin,
  tavr,
  relifAspect,
  Langle
}) {
  const [medianDownfall, setMedianDownfall] = useState(() =>
    Math.round(relifAspect)
  );
  const [angle, setAngle] = useState(() => Math.round(Langle));

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
          <Temperature
            helpWindow={helpWindow}
            setHelpWindow={setHelpWindow}
            tmax={tmax}
            tmin={tmin}
            tavr={tavr}
          />
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
          <li className="option3 option">
            уклон рельефа местности, °
            <div className="ing">
              <div className="angle" />
              <div className="view_angle">{angle}°</div>
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
          <li className="option4 option">
            Оценка состава и плотности сложения верхнего слоя почв
            <Checkboxes landType={landType}></Checkboxes>
          </li>
        </ul>
      </div>
    </>
  );
}
