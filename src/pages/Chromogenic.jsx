
import React from "react";
import { useParams, Link } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Produs from "./Produs";




const Chromogenic = () => {
  

    const produse = [
        {
            id: 1,
            name: "MEDIUL CROMOGEN CANDIDA",
            imagine: require("../catalog/candida-bottle-500x500.webp"),
    
        },
        {
            id: 2,
            name: "MEDIUL STAPH AUREUS",
            imagine: require("../catalog/staph-aureus-bottle-500x500.webp"),

        },
        {
            id: 3,
            name: "MEDIU CROMOGEN MRSA",
            imagine: require("../catalog/mrsa-bottle-500x500.webp")
        },
        {
            id: 4,
            name: "MEDIU CROMOGEN KPC",
            imagine: require("../catalog/kpc-bottle-500x500.webp")
        },
        {
            id: 5,
            name: "MEDIU CROMOGEN ORIENTARE",
            imagine: require("../catalog/orientation-bottle-500x500.webp")
        },
        {
            id: 6,
            name: "MEDIU CROMOGEN ESBL",
            imagine: require("../catalog/esbl-bottle-500x500.webp")
        },
        {
            id: 7,
            name: "MEDIU CROMOGEN CHROMAGAR VRE",
            imagine: require("../catalog/vre-bottle-500x500.webp")
        },
        {
            id: 8,
            name: "MEDIU CROMOGEN CHROMAGAR STREPB",
            imagine: require("../catalog/strep-b-bottle-500x500.webp")
        },
        {
            id: 9,
            name: "LIM RAMBAQUICK STREPB",
            imagine: require("../catalog/LIM RambaQUICK StrepB Broth-500x500.webp")
        },
        {
            id: 10,
            name: "MEDIU CROMOGEN CHROMAGAR ACINETOBACTER",
            imagine: require("../catalog/ACINETOBACTER-1-500x500.webp")
        },
        {
            id: 11,
            name: "SUPLIMENT CHROMAGAR ACINETOBACTER MDR",
            imagine: require("../catalog/LIM RambaQUICK StrepB Broth-500x500 (1).webp")
        },
        {
            id: 12,
            name: "MEDIU CROMOGEN CHROMAGAR C.DIFICILE",
            imagine: require("../catalog/c-difficile-bottle-500x500.webp")
        },
        {
            id: 13,
            name: "MEDIU CROMOGEN CHROMAGAR MSUPERCARBA",
            imagine: require("../catalog/msupercarba-bottle-500x500.webp")
        },
        {
            id: 14,
            name: "MEDIU CROMOGEN CHROMAGAR MH ORIENTATION",
            imagine: require("../catalog/mh-orientation-bottle-500x500.webp")
        },
        {
            id: 15 ,
            name: "MEDIU CROMOGEN CHROMAGAR LISTERIA",
            imagine: require("../catalog/listeria-bottle-500x500.webp")
        },
        {
            id: 16 ,
            name: "MEDIU CROMOGENIC CHROMAGAR IDENTIFICATION LISTERIA",
            imagine: require("../catalog/identification-listeria-bottle-500x500.webp")
        },
        {
            id: 17 ,
            name: "MEDIU CROMOGEN CHROMAGAR VIBRIO",
            imagine: require("../catalog/vibrio-bottle-500x500.webp")
        },
        {
            id: 18 ,
            name: "MEDIU CROMOGEN CHROMAGAR PSEUDOMONAS",
            imagine: require("../catalog/pseudomonas-bottle-500x500.webp")
        },
        {
            id: 19 ,
            name: "MEDIU CROMOGEN CHROMAGAR SALMONELLA",
            imagine: require("../catalog/salmonella-bottle-500x500.webp")
        },
        {
            id: 20 ,
            name: "MEDIU CROMOGENIC CHROMAGAR SALMONELLA PLUS",
            imagine: require("../catalog/salmonella-plus-bottle-500x500.webp")
        },
        {
            id: 21 ,
            name: "SUPLIMENT CHROMAGAR WHITE OPAQUE",
            imagine: require("../catalog/LIM RambaQUICK StrepB Broth-500x500 (1).webp")
        },
        {
            id:  22,
            name: "RAMBAQUICK SALMONELLA",
            imagine: require("../catalog/ramba-quick-salmonella-500x500.webp")
        },
        {
            id: 23 ,
            name: "MEDIUL CROMOGEN RAMBACH AGAR",
            imagine: require("../catalog/rambach-agar-bottle-500x500.webp")
        },
        {
            id: 24 ,
            name: "MEDIU CROMOGEN CHROMAGAR E.COLI",
            imagine: require("../catalog/e-coli-bottle-500x500.webp")
        },
        {
            id: 25 ,
            name: "MEDIU CROMOGEN CHROMAGAR ECC",
            imagine: require("../catalog/ecc-bottle-500x500.webp")
        },
        {
            id: 26 ,
            name: "MEDIU CROMOGEN CHROMAGAR LIQUID ECC",
            imagine: require("../catalog/liquid-ecc-bottle-500x500.webp")
        },
        {
            id: 27 ,
            name: "MEDIU CROMOGEN CHROMAGAR O157",
            imagine: require("../catalog/o157-bottle-500x500.webp")
        },
         {
            id: 28 ,
            name: "MEDIU CROMOGEN AQUACHROM ECC",
            imagine: require("../catalog/aquachrom-ecc-bottle-500x500.webp")
        },
         {
            id: 29 ,
            name: "MEDIU CROMOGEN CHROMAGAR TBX",
            imagine: require("../catalog/tbx-bottle-500x500.webp")
        },
        {
            id: 30 ,
            name:  "MEDIU CROMOGEN CHROMAGAR STEC",
            imagine: require("../catalog/stec-bottle-500x500.webp")
        },
        {
            id:  31,
            name:  "MEDIU CROMOGEN CHROMAGAR B.CEREUS",
            imagine: require("../catalog/B.cereus-bottle-500x500.webp")
        },
        {
            id:  32,
            name:  "MEDIU CROMOGEN CHROMAGAR CRONOBACTER",
            imagine: require("../catalog/cronobacter-bottle-500x500.webp")
        },
        {
            id:  33,
            name:  "MEDIU CROMOGEN CHROMAGAR MALASSEZIA",
            imagine: require("../catalog/malassezia-bottle-500x500.webp")
        },
        {
            id:  34,
            name:  "MEDIU CROMOGEN CHROMAGAR MASTITA",
            imagine: require("../catalog/mastitis.webp")
        },
      

    ]
    return(
     <div className="home">
        <h1 className="home_title">Mediul Chromogenic</h1>
        <div className="produse">
          {produse.map((produs) => (
            <div className="produs"    >
              <Link className="box" key={produs.id} to={`/produs/${produs.id}`} >
                <img className="box_image" src={produs.imagine} />
                <h2 className="name">{produs.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
}
export default Chromogenic;