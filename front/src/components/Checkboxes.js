import { useEffect, useState } from "react";
import "../styles/Checkboxes.css"
export default function Checkboxes({ landType }) {
  const [checked, setChecked] = useState([false]);
  useEffect(()=>{

  },[])
  function handleChange({ params }) {
    setChecked(!checked);
  }
  
  return (
    <div className="checkboxes">
      {}
      <label>
        <input type="checkbox" checked={landType ==1} onChange={handleChange} />
        Глина
      </label>
      <label>
        <input type="checkbox" checked={landType ==2} onChange={handleChange} />
        Пылеватая глина
      </label>
      <label>
        <input type="checkbox" checked={landType ==3} onChange={handleChange} />
        Пылевато-глинистый суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==4} onChange={handleChange} />
        Опесчаненная глина
      </label>
      <label>
        <input type="checkbox" checked={landType ==5} onChange={handleChange} />
        Опесчаненный глинистый суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==6} onChange={handleChange} />
        Глинистый суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==7} onChange={handleChange} />
        Тонкий суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==8} onChange={handleChange} />
        Пылеватый суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==9} onChange={handleChange} />
        Суглинок
      </label>
      <label>
        <input type="checkbox" checked={landType ==10} onChange={handleChange} />
        Песок
      </label>
      <label>
        <input type="checkbox" checked={landType ==11} onChange={handleChange} />
        Суглинистый песок
      </label>
      <label>
        <input type="checkbox" checked={landType ==12} onChange={handleChange} />
        Опесчаненный суглинок
      </label>
    </div>
  );
}