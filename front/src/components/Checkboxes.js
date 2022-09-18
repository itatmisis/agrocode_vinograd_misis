import { useEffect, useState } from "react";
import "../styles/Checkboxes.css"
export default function Checkboxes({ landType,choises,abs_h }) {
  const [checked, setChecked] = useState([false].fill(false,choises.reduce((len,i)=>len+1)));
  ;
  function handleChange({ params }) {
    setChecked(!checked);
  }
  if (!abs_h){
    return (
      <div className="checkboxes">
        {choises.map((el, i) => {
          return (
            <label>
              <input
                type="checkbox"
                checked={!checked || i==landType}
                onChange={handleChange}
              />
              {el}
            </label>
          );
        })}
      </div>
    );
  }
  else{
    return (
      <div className="checkboxes">
        {choises.map((el, i) => {
          return (
            <label>
              <input
                type="checkbox"
                checked={checked || i==abs_h}
                onChange={handleChange}
              />
              {el}
            </label>
          );
        })}
      </div>
    );
  }
}
/*
function Tget(objectR){
  for (каждого ключа){
    if (значение !=0){
      data = fetch("адресс сервера или что")
    }
  }
  заполнение объекта измененными параметрами
}
*/