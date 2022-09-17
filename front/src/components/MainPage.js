import "../styles/MainPage.css"
import Header from "./Header";
import { Link } from "react-router-dom";
export default function MainPage(params) {
  return (
    <div className="bg">
      <section className="mainPage">
        <Header></Header>
        <section className="mainPage-mainSection section">
          <section className="mainPage-subSection section">
            <h1>
              Смени <span>рутину</span>
              <br />
              на свои <span>вина</span>
            </h1>
            <div className="slogan">
              Сервис по поиску подходящих земель для виноградников
            </div>
            <button className="findBtn btn">
              <Link to="/map">Найти</Link>
            </button>
          </section>
          <section className="mainPage-subSection section">
            <div className="gallery">
              <div className="galleryItem galleryItem-1"></div>
              <div className="galleryItem galleryItem-2"></div>
              <div className="galleryItem galleryItem-3"></div>
              <div className="galleryItem galleryItem-4"></div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}