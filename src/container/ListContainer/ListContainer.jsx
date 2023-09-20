import SearchArea from "../../components/SearchArea/SearchArea";
import FlagsContainer from "../FlagsContainer/FlagsContainer";
import React, { useState, useEffect } from 'react';

const ListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the API endpoint you want to call
        const apiUrl = 'https://restcountries.com/v3.1/all';

        // Fetch data from the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                console.log(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <SearchArea />
            <FlagsContainer />
            <div>
      <h1>API Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
        </div>
    )
}
export default ListContainer;