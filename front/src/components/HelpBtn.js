import { useState } from "react";

export default function HelpBtn({ helpWindow, setHelpWindow }) {
  function handleHelpClick(params) {
    setHelpWindow(!helpWindow);
  }
  return (
    <>
      <button className="help-btn btn" onClick={handleHelpClick}>
        ?
      </button>
    </>
  );
}
