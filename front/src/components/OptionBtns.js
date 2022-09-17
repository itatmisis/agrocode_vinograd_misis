import "../styles/OptionBtns.css";
export default function OptionBtns({onBookmarksClick,onLayersClick}) {
  return (
    <div className="optionsBtns-holder">
      <div className="option-btn btn option-btn bookmarks" onClick={onBookmarksClick}>
        
      </div>
      <div className="option-btn btn layers" onClick={onLayersClick}></div>
    </div>
  );
}
