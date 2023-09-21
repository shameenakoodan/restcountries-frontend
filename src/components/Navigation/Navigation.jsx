import "./Navigation.scss";
const Navigation = ({toggleTheme,theme}) => {
    
    const moon = process.env.PUBLIC_URL + "/icons/moon.png";
    return (
        <div className={`navigation ${theme}`}>
            <div className="left-nav">Where in the world? </div>
            <button className= {`button-container ${theme}`} onClick={toggleTheme}>
                <img src={moon} alt="Moon" className="button-img" />
                <span className="button-text">Dark Mode</span>
            </button>
        </div>
    )
}
export default Navigation;