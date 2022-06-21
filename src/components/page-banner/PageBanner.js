import React
    from "react";
import './PageBanner.css';


function PageBanner({bannerImage, bannerTitle, bannerMessage}) {
    return(
        <header className="page-banner">
            <div className="left-side-banner">
                <img src={bannerImage} alt="tent"/>
            </div>
            <div className="right-side-banner" style={{ background: "linear-gradient(120deg, #8fb8e0 0%, #ffffff 100%)" }}>
                <div className="welcome">
                    <h2>{bannerTitle}</h2>
                </div>
                    <h1>{bannerMessage}</h1>
            </div>
        </header>
    )
}

export default PageBanner;