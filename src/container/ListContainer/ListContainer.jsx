import FlagCard from "../../components/FlagsCard/FlagCard";
import React, { useState, useEffect } from 'react';
import "./ListContainer.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import DropDown from "../../components/DropDown/DropDown";

const ListContainer = (props) => {
    const { theme } = props;
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
        console.log(theme);
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
    const callMe = () => {
    }
    return (
        <div className={`main ${theme}`}>
            <div className="search">
                <SearchBox handleInput={handleInput} />
                <DropDown handleInput={handleDropDown} />
            </div>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flags-container">
                        {filteredFlags.map((item) => (
                            <div key={item.key} onClick={callMe}>
                                <FlagCard
                                    population={item.population}
                                    name={item.name}
                                    capital={item.capital}
                                    region={item.region}
                                    flags={item.flags.png}
                                />
                            </div>))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListContainer;
//            <li key={item.id}>{item.name.common}</li>
