import { useQuery } from "react-query";
import Axios from "axios";
import { Card } from "./Card/Card";
import "./Flags.css";
import { useState } from "react";

export function Flags() {
  const [filter, setFilter] = useState("");
  const filterFunction = (e) => {
    setFilter(e.target.value);
  };

  const { isLoading, error, data, isFetching } = useQuery("data", () =>
    Axios.get(`https://restcountries.com/v2/all`).then((res) => res.data)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="input-div">
        <input
          type="text"
          placeholder="Type country"
          className="country-input"
          onChange={filterFunction}
        />
      </div>
      <div className="container-flags">
        {filter === ""
          ? data.map((country) => {
              return (
                <Card
                  name={country.name}
                  capital={country.capital}
                  region={country.region}
                  flag={country.flag}
                  population={country.population}
                  currencies={country.currencies?.[0]?.code}
                />
              );
            })
          : data
              .filter(
                (nameCountry) =>
                  nameCountry.name.includes(filter) ||
                  nameCountry.name.toLowerCase().includes(filter)
              )
              .map((country) => {
                return (
                  <div className="container-flags">
                    <Card
                      name={country.name}
                      capital={country.capital}
                      region={country.region}
                      flag={country.flag}
                      population={country.population}
                      currencies={country.currencies?.[0]?.code}
                    />
                  </div>
                );
              })}
      </div>
    </div>
  );
}
