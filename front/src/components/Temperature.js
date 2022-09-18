import HelpBtn from "./HelpBtn";
import {  useEffect, useState } from "react";
export default function Temperature({
  helpWindow,
  setHelpWindow,
  medianTemp,
  minTemp,
  maxTemp,
  setMedianTemp,
  setMinTemp,
  setMaxTemp,
}) {
  return (
    <>
      <li className="option1 option">
        <HelpBtn helpWindow={helpWindow} setHelpWindow={setHelpWindow} />

        <h4>Средняя температура: {medianTemp}</h4>
        <input
          type="range"
          onChange={(event) => setMedianTemp(() => event.target.value)}
          min={-100}
          max={100}
          step={0.1}
          value={medianTemp}
          className="slider medianSlider"
        ></input>
        <h4>Максимальная температура: {maxTemp}</h4>
        <input
          type="range"
          onChange={(event) => setMaxTemp(() => event.target.value)}
          min={-100}
          max={100}
          step={0.1}
          value={maxTemp}
          className="slider maxSlider"
        ></input>
        <h4>Минимальная температура: {minTemp}</h4>
        <input
          type="range"
          onChange={(event) => setMinTemp(() => event.target.value)}
          min={-100}
          max={100}
          step={0.1}
          value={minTemp}
          className="slider minSlider"
        ></input>
      </li>
    </>
  );
}
