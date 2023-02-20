import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const produse = [
        {
            id: 1,
            name: "Mediul Chromogen Mastitis",
            imagine: require("../catalog/mastitis.webp")
        },
        {
            id: 2,
            name: "S.S. Agar",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 3,
            name: "MUELLER HINTON AGAR",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 4,
            name: "SALT AGAR",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 5,
            name: "MEDIUL PIZU",
            imagine: require("../catalog/pizu-medium-500x500.webp")
        },
        {
            id: 6,
            name: "MEDIU ACINETOBACTER",
            imagine: require("../catalog/ACINETOBACTER-1-500x500.webp")
        },
        {
            id: 7,
            name: "MEDIU MSUPERCARBA",
            imagine: require("../catalog/Round mSuperCARBA-500x500.webp")
        },
        {
            id: 8,
            name: "MEDIU ENTEROBACTERIA",
            imagine: require("../catalog/Entrobacteria rond 2-500x500.webp")
        },
        {
            id: 9,
            name: "MEDIU EIKMAN",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 10,
            name: "APĂ CU PEPTONĂ TAMPONATĂ",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 11,
            name: "AGAR CU CĂRBUNE DE CAZEINĂ",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 12,
            name: "MEDIU LACTOZĂ-CISTEINĂ CU ALBASTRU DE BROMTIMOL",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 13,
            name: "MEDIU LACTOZĂ-PEPTONĂ",
            imagine: require("../catalog/universal_bootle.jpg")
        },
        {
            id: 14,
            name: "BULION DE SARE",
            imagine: require("../catalog/universal_bootle.jpg")
        },
      

    ]
    return(
        <div className="home">
        <h1 className="home_title">Mediul Nutrient</h1>
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
export default Home;