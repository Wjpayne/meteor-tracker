import React, { useEffect, useState } from "react";
import axios from "axios";


export const NasaAPI = () => {
  const [data, setData] = useState([]);

  const startDate = "2021-05-21";

  const fetchData = async () => {
    const neoDate = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${process.env.REACT_APP_NASA_KEY}`
    );

    setData((result) => [...result, neoDate.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((element) => (
        <div key= {element.near_earth_objects}>
          {element.near_earth_objects[startDate].map((neo) => (
            <div key={neo.id}>{neo.id}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
