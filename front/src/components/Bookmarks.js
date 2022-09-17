import "../styles/Bookmarks.css";
export default function Bookmarks({bookmarks}) {
  return (
    <>
      <section className="section-bookmarks" >
        {bookmarks[0]?<></>: "Добавьте первую закладку"}
      </section>
    </>
  );
}
