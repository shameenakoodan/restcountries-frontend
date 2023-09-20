import FlagCard from "../../components/FlagsCard/FlagCard";
import SearchArea from "../../components/SearchArea/SearchArea";
import FlagsContainer from "../FlagsContainer/FlagsContainer";
import React, { useState, useEffect } from 'react';
import "./ListContainer.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const ListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    //Handle the input from search box
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
    useEffect(() => {
        // Define the API endpoint you want to call
        const apiUrl = 'https://restcountries.com/v3.1/all';

        // Fetch data from the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                //console.log(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    let filteredFlags = data.filter((flag)=>{
        console.log("Hello");
        const flagName = flag.name.common.toLowerCase();
            return flagName.includes(searchTerm);
    })
    return (
        <div>
            <SearchBox handleInput = {handleInput}/>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flags-container">
                        {filteredFlags.map((item) => (
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
