import FlagCard from "../../components/FlagsCard/FlagCard";
import SearchArea from "../../components/SearchArea/SearchArea";
import React, { useState, useEffect } from 'react';
import "./ListContainer.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import DropDown from "../../components/DropDown/DropDown";

const ListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [region, setRegion] = useState("");
    //Handle the input from search box
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
    const handleDropDown = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        console.log(cleanInput);
        setRegion(cleanInput);
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
    let filteredFlags = data.filter((flag) => {
        const flagName = flag.name.common.toLowerCase();
        const regionName = flag.region.toLowerCase();
        return flagName.includes(searchTerm) && regionName.includes(region);
    })
    return (
        <div>
            <div className="search">
                <SearchBox handleInput={handleInput}/>
                <DropDown handleInput={handleDropDown} />
            </div>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flags-container">
                        {filteredFlags.map((item) => (
                            <FlagCard key={item.key} population={item.population} name={item.name} capital={item.capital} region={item.region} flags={item.flags.png} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListContainer;
//            <li key={item.id}>{item.name.common}</li>
