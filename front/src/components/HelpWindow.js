export default function HelpWindow({ helpWindow }) {
  return (
    <div
      className="section-bookmarks"
      style={{  display: helpWindow?"flex" : "none" }}
    >
      Подсказка
    </div>
  );
}