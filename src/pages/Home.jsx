import React from "react";
import { Link } from "react-router-dom";






const Home = () => {
  const produse = [
    {
      id: 1,
      name: "Mediul Chromogen Mastitis",
      imagine: require('../catalog/mastitis.webp'),
    },
    {
      id: 2,
      name: "Mediul Chromogen Capylobacter",
      imagine: require('../catalog/capylobacter.webp'),
    },
    {
      id: 3,
      name: "Mediul cromogen Oriebtation",
      imagine: require('../catalog/orientation.webp'),
    },
    {
      id: 4,
      name: "Mediul cromogen SterpB",
      imagine: require('../catalog/strepb.webp'),
    },
    {
      id: 5,
      name: "Chit de vopsire GRAMS",
      imagine: require('../catalog/gramm1.webp'),
    },
    {
        id: 6,
        name: 'Chit de vopsire ZIEHL-NIELSEN',
        imagine: require('../catalog/ziehl.webp'),
      },
  ];

  return (
    <div className="home">
      <h1 className="home_title">Noutati</h1>
      <div className="produse">
        {produse.map((produs) => (
          <div className="produs" key={produs.id}>
            <Link className="box" to={`/produse/${produs.id}`}>
              <img className="box_image" src={produs.imagine} alt={produs.name} />
              <h2 className="name">{produs.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
