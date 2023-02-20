import React from "react";
import { Link } from "react-router-dom";


const Laborator = () => {
    const produse = [
        {
            id: 1,
            name: "Sisteme de filtrare a apei",
            imagine: require("../catalog/stakpure-omniatap-uv-sistemy-vodopodgotovki.jpg")
        },
    ]
    return(
        <div className="home">
        <h1 className="home_title">Echipament pentru Laborator</h1>
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
    )
}
export default Laborator;