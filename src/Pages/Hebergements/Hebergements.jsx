import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Hebergements.scss";
import Slide from "../../Components/Slide/Slide";
import datas from "../../Datas/hebergement.json";
import Collapse from "../../Components/Collapse/Collapse";
import Error from "../../Pages/Error/Error";

function Hebergements() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dataHebergement = datas.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dataHebergement, navigate]);

  if (!dataHebergement) {
    return <Error />;
  }

  const createTags = () =>
    dataHebergement.tags.map((tag, index) => (
      <span className="tags" key={`${tag}-${dataHebergement.id}-${index}`}>
        {tag}
      </span>
    ));

  const name = dataHebergement.host.name
    .split(" ")
    .map((word, index) => (
      <span key={`${word}-${index}-${dataHebergement.id}`}>{word}</span>
    ));

  const stars = [1, 2, 3, 4, 5];
  const rating = () =>
    stars.map(star => (
      <i
        key={`${star}-${dataHebergement.id}`}
        className={`stars fa-solid fa-star ${Math.round(dataHebergement.rating) >= star ? "" : "starNoColor"}`}
      ></i>
    ));

  return (
    dataHebergement && (
      <main role="main" className="mainAppart">
        <section aria-label="Carroussel">
          <Slide pictures={dataHebergement.pictures} title={dataHebergement.title} />
        </section>
        <section aria-label="Informations principales" className="introductionAppart">
          <div className="mainIntroduction">
            <h2 className="h2Appart">{dataHebergement.title}</h2>
            <div>{dataHebergement.location}</div>
            <div className="containerTag">{createTags()}</div>
          </div>
          <div className="informationHost">
            <div className="host">
              <div className="hostName">{name}</div>
              <img className="hostPicture" src={dataHebergement.host.picture} alt={dataHebergement.host.name} />
            </div>
            <div className="ratingStars">{rating()}</div>
          </div>
        </section>
        <section aria-label="Détails du logement" className="detailsAppart">
          <Collapse titleCollapse="Description" textCollapse={dataHebergement.description} />
          <Collapse
            titleCollapse="Équipements"
            textCollapse={
              <ul>
                {dataHebergement.equipments.map((equipment, index) => (
                  <li key={`${equipment}-${dataHebergement.id}-${index}`}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    )
  );
}

export default Hebergements;
