import {useState, useEffect} from "react";
import Degustation from "./Degustation.js"

export default function Degustations() {

  const [degustations, setDegustations] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setDegustations(data))
    .catch((error) => console.log("Could not load degustations", error));
  }, [])

  return (
    <div className="container">
      <div className="display">
        <h3>Dernières dégustations : </h3>
        {degustations.map( (degustation) => {
          return <Degustation
            key= {degustation.id}
            details={degustation}
           />
        }
        )}
      </div>
    </div>
  )
}
