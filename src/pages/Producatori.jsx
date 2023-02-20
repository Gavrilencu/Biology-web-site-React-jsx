import React from "react";
import { Link } from "react-router-dom";


const Producatori = () => {
    const produse = [
        {
            id: 1,
            name: "CHROMAGAR",
            imagine: require("../catalog/Chromagar.jpg")
        },
        {
            id: 2,
            name: "SANIMED-M",
            imagine: require("../catalog/sanimedlogo.webp")
        },
        {
            id: 3,
            name: "STAKPURE",
            imagine: require("../catalog/stakpurelogo.png")
        },

    ]



    return(
        <div className="home">
      <h1 className="home_title">Producatori</h1>
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
export default Producatori;