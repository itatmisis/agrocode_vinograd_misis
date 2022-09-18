import { useEffect, useState } from "react";
import "../styles/Checkboxes.css"
export default function Checkboxes({ landType,choises,abs_h }) {
  //const [checked, setChecked] = useState([false].fill(false,choises.reduce((len,i)=>len+1)));
  ;
  let checked = [false].fill(false,choises.reduce((len,i)=>len+1))
  function handleChange(index) {
    checked[index] = !checked[index];
  }
  if (!abs_h){
    return (
      <div className="checkboxes">
        {choises.map((el, i) => {
          return (
            <label key={`${i} ${el}`}>
              <input
                type="checkbox"
                id={`${i}`}
                checked={checked[i] || i==landType}
                onChange={handleChange(i)}
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
            <label key={`${i} ${el}`}>
              <input
                type="checkbox"
                id={`${i}`}
                checked={checked[i] || i == abs_h}
                onChange={handleChange(i)}
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