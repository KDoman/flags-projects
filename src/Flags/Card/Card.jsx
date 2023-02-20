import { useState } from "react";
import "./Card.css";

export function Card(props) {
  const [Hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className="div-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {Hover ? (
        <div className="more-country-info">
          <p>
            Population: <b>{props.population}</b>
          </p>
          {props.currencies ? (
            <p>
              Currencies: <b>{props.currencies}</b>
            </p>
          ) : (
            <p>Currencies: - </p>
          )}
        </div>
      ) : (
        <div>
          <div className="country-info">
            <p>
              Country: <b>{props.name}</b>
            </p>
            {props.capital ? (
              <p>
                Capital: <b>{props.capital}</b>
              </p>
            ) : (
              <p>Capital: -</p>
            )}
            <p>
              Region: <b>{props.region}</b>
            </p>
          </div>
          <img className="img-flag" src={props.flag}></img>
        </div>
      )}
    </div>
  );
}
