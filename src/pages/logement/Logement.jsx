import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../../components/rate/Rate";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";

import "./logement.scss";
import Accordeon from "../../components/accordeon/Accordeon";

const Logement = () => {
  const params = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    (async () => {
      const resp = await fetch("/logements.json");
      const logements = await resp.json();

      const foundLogement = logements.find((l) => l.id === params.id);
      setLogement(foundLogement);
    })();
  }, [params.id]);

  if (!logement) {
    return null;
  }

  return (
    <>
      <Carousel pictures={logement.pictures} />
      <div className="logementGlobal">
        <div className="logement-header">
          <div>
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <ul className="tags">
              {logement.tags.map((tag) => (
                <li key={tag}>
                  <Tag name={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
        </div>
        <div className="DescriptionLogement">
          <Rate rating={logement.rating} />
          <div className="accordeons-Logement">
            <Accordeon title="Description">
              <p>{logement.description}</p>
            </Accordeon>
            <Accordeon title="Equipements">
              <ul>
                {logement.equipments.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Accordeon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logement;
