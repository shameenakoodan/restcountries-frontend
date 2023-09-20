import FlagCard from "../../components/FlagsCard/FlagCard";
import SearchArea from "../../components/SearchArea/SearchArea";
import FlagsContainer from "../FlagsContainer/FlagsContainer";
import React, { useState, useEffect } from 'react';
import "./ListContainer.scss";

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
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flags-container">
                        {data.map((item) => (
                            <FlagCard population={item.population} name={item.name} capital={item.capital} region={item.region} flags={item.flags.png} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListContainer;
//            <li key={item.id}>{item.name.common}</li>
