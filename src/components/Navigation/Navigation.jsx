import "./Navigation.scss";
const Navigation = () => {
    const moon = process.env.PUBLIC_URL + "/icons/moon.png";
    return (
        <div className="navigation">
            <div className="left-nav">Where in the world? </div>
            <button className="button-container">
                <img src={moon} alt="Moon" className="button-img" />
                <span className="button-text">Dark Mode</span>
            </button>
        </div>
    )
}
export default Navigation;