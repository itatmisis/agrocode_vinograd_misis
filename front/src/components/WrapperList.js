import { useRef, useState } from "react";
import "../styles/Filtres.css";
import { useScrollbar } from "../hooks/useScrollbar";
import Checkboxes from "./Checkboxes";
import Temperature from "./Temperature";
import HelpBtn from "./HelpBtn";
export default function WrapperList({
  helpWindow,
  setHelpWindow,
  landType,
  medianTemp,
  minTemp,
  maxTemp,
  setMedianTemp,
  setMinTemp,
  setMaxTemp,
  relifAspect,
  setRelifAspect,
  Langle,
  abs_h,
  needsToSave,
  setNeedsToSave,
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
            medianTemp={medianTemp}
            minTemp={minTemp}
            maxTemp={maxTemp}
            setMedianTemp={setMedianTemp}
            setMinTemp={setMinTemp}
            setMaxTemp={setMaxTemp}
            needsToSave={needsToSave}
            setNeedsToSave={setNeedsToSave}
          />
          <li className="option2 option">
            <h4>Cреднее количество осадков: {medianDownfall}мм</h4>
            <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />
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
            <h4>уклон рельефа местности, °</h4>
            <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />
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
            <h4>Оценка состава и плотности сложения верхнего слоя почв</h4>
            <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />
            <Checkboxes
              landType={landType}
              choises={[
                "Глина",
                "Пылеватая глина",
                "Пылевато-глинистый суглинок",
                "Опесчаненная глина",
                "Опесчаненный глинистый суглинок",
                "Глинистый суглинок",
                "Тонкий суглинок",
                "Пылеватый суглинок",
                "Суглинок",
                "Песок",
                "Суглинистый песок",
                "Опесчаненный суглинок",
              ]}
            ></Checkboxes>
          </li>
          <li className="option5 option">
            Абсолютная отметка местности
            <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />
            <div className="abs-img"></div>
            <Checkboxes
              landType={abs_h}
              choises={[
                "900-1200 м",
                "1500-1900 м",
                "1200-1500 м",
                "1900-2100 м",
              ]}
            ></Checkboxes>
          </li>
          <li className="option6 option">
            Экспозиция (ориентация) рельефа местности
            <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />
            <br />
            {
              //expos/
            }
            <div style={{display:"flex", alignItems:"center"}}>
              <input
                type="text"
                placeholder={`${relifAspect}`}
                className="expos-input"
                value={relifAspect}
                onChange={(e) => setRelifAspect(e.target.value)}
              />
              <div className="expos-img"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
