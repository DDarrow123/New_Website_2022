const EcommHeader = () => {
    return (
        <header className="l-masthead">
        <section className="container">
            <ul className="masthead-nav-wrapper d-flex justify-content-lg-between">
            <div href="#" className="masthead-link home-link">Vision.R</div>
            <div className="masthead-container d-none d-lg-flex align-items-center">
            <li href="#" className="masthead-link">Low Solution</li>
            <li href="#" className="masthead-link">Low Technology</li> 
            <li href="#" className="masthead-link">High Price</li>
            <button href="#" className="buy-button">
                <span className="button-text">Buy It</span>
            </button>
            </div>   
        </ul>
        </section>
        </header>
    )
};

export default EcommHeader;
