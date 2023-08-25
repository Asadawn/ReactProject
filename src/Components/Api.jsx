import axios from "axios";

import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/genres",
      headers: {
        "X-RapidAPI-Key": "1accdc753bmshf39c655215eb6e7p1d954cjsnfd3a3bfea8ae",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
