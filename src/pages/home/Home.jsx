import { useEffect, useState } from "react";
import "./home.scss";
import Card from "../../components/card/Card.jsx";

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/logements.json");
      const data = await resp.json();
      setLogements(data);
    };
    fetchData();
  }, []);

  return (
    <ul className="logements">
      {logements.map((logement) => (
        <li key={logement.id}>
          <Card
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        </li>
      ))}
    </ul>
  );
};

export default Home;
