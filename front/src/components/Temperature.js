import HelpBtn from "./HelpBtn";
import {  useState } from "react";
export default function Temperature({ helpWindow, setHelpWindow, tmax, tmin, tavr }) {
  const [medianTemp, setMedianTemp] = useState(() => average(tavr[0]));
  const [maxTemp, setMaxTemp] = useState(() => average(tmax[0]));
  const [minTemp, setMinTemp] = useState(() => average(tmin[0]));
  function average(list) {
    let summ = 0;
    for(let i of list){
      summ+=i
    }
    return Math.round(summ/12)
  }
  return (
    <>
      <li className="option1 option">
        <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />

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
    </>
  );
}
