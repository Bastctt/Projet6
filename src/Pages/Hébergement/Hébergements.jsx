import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Hébergements.css";
import Slide from "../../Components/Slide/Slide";
import datas from "../../Datas/Hébergements.json";
import Collapse from "../../Components/Collapse/Collapse";

function Hébergements() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dataHebergement = datas.find(data => data.id === id);

  useEffect(() => {
    if (dataHebergement === undefined) {
      navigate("/error");
    }
    window.scrollTo(0, 0); // Défilement vers le haut de la page
  }, [dataHebergement, navigate]);

  const equipments = dataHebergement && dataHebergement.equipments;

  const tags = dataHebergement && dataHebergement.tags;
  const createTags = () =>
    dataHebergement && tags.map(tag => <span className="tags" key={`${tag}-${dataHebergement.id}`}>{tag}</span>);

  const nameArray = dataHebergement && dataHebergement.host.name.split(" ");
  const name = dataHebergement && nameArray.map((word, index) => <span key={`${word}-${index}-${dataHebergement.id}`}>{word}</span>);

  const stars = dataHebergement && [1, 2, 3, 4, 5];
  const rating = () =>
    dataHebergement && stars.map(star => Math.round(dataHebergement.rating) >= star ? <i key={`${star}-${dataHebergement.id}`} className="stars fa-solid fa-star"></i> : <i key={`${star}-${dataHebergement.id}`} className="stars starNoColor fa-solid fa-star"></i>);

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
              <img className="hostPicture" src={dataHebergement.host.picture} alt={`${dataHebergement.host.name}`} />
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
                {equipments.map(equipment => (
                  <li key={`${equipment}-${dataHebergement.id}`}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    )
  );
}

export default Hébergements;
