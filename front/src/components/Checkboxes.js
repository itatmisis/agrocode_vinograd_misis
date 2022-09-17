import { useState } from "react";

export default function Checkboxes({list}) {
  const [checked,setChecked] = useState([false])
  function handleChange(params) {
    setChecked(!checked)
  }
 return (
   <>
   {}
     <label>
       <input type="checkbox" checked={checked} onChange={handleChange} />
       My Value
     </label>
   </>
 ); 
}