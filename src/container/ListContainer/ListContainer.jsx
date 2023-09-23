import FlagCard from "../../components/FlagsCard/FlagCard";
import React, { useState, useEffect } from 'react';
import "./ListContainer.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import DropDown from "../../components/DropDown/DropDown";
import PopUp from "../../components/PopUp/PopUp";
const ListContainer = (props) => {
    const { theme } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [region, setRegion] = useState("");
    const [isPopupOpen, setPopupOpen] = useState(false); // State for controlling the popup
    const [selectedFlag, setSelectedFlag] = useState(null); // State for storing selected flag data

    //Handle the input from search box
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
    const openPopup = (item) => {
        const myMap = new Map();
        console.log(item);
        myMap.set('Name',item.name.common);
        const firstKey = Object.keys(item.name.nativeName)[0];
        console.log(firstKey);
        const natName = item.name.nativeName[firstKey].official;

        console.log("NA"+natName)
        myMap.set('Native Name',natName);
        myMap.set('flag', item.flags.png);
        myMap.set('population',item.population)
        if(item.hasOwnProperty("capital"))
            myMap.set('Capital', item.capital);
        else
            myMap.set('Capital',"N/A");
        myMap.set('Region',item.region);
        if(item.hasOwnProperty("subregion"))
            myMap.set('Sub Region',item.subregion)
        else
            myMap.set('Sub Region',"N/A");

        myMap.set('TopLevel Domain',item.tld)
        if(item.hasOwnProperty("subregion")){
            const firstKey = Object.keys(item.currencies)[0];
            const chineseYuanName = item.currencies[firstKey].name;
            myMap.set('Currencies',chineseYuanName);
        }
        else
            myMap.set('Currencies',"N/A");
        const languageValues = Object.values(item.languages);
        console.log(languageValues);
          myMap.set('Languages',languageValues);

        setSelectedFlag(myMap); // Set the selected flag data when a FlagCard is clicked
        setPopupOpen(true);
    }
    const handleDropDown = (event) => {
        const cleanInput = event.target.value.toLowerCase();
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
                        {filteredFlags.map((item,index) => (
                            <div key={index} onClick={() => openPopup(item)}>
                                <FlagCard
                                    population={item.population}
                                    name={item.name}
                                    capital={item.capital}
                                    region={item.region}
                                    flags={item.flags.png}
                                    onClick={openPopup}
                                    
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {isPopupOpen && selectedFlag && (
                <PopUp
                    isPopupOpen={isPopupOpen}
                    closePopup={() => setPopupOpen(false)}
                    selectedFlag={selectedFlag} // Pass the selected flag data to the Popup
                />
            )}
        </div>
    )
}
export default ListContainer;
//            <li key={item.id}>{item.name.common}</li>
