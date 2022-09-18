export default function HelpWindow({ helpWindow }) {
  return (
    <div
      className="section-bookmarks"
      style={{ top: "0", right: "-74.2%", display: helpWindow?"flex" : "none" }}
    >
      Подсказка
    </div>
  );
}