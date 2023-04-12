import React
    from "react";
import './PageBanner.css';


function PageBanner({bannerImage, bannerTitle, bannerMessage, bannerNameOfUser}) {
    return(
        <header className="page-banner">
            <section className="left-side-banner">
                <img src={bannerImage} alt="tent"/>
            </section>
            <section className="right-side-banner" style={{ background: "linear-gradient(120deg, #8fb8e0 0%, #ffffff 100%)" }}>
                <section className="welcome">
                    <h2>{bannerTitle}</h2>
                    <h2>{bannerNameOfUser}</h2>
                </section>
                    <h1>{bannerMessage}</h1>
            </section>
        </header>
    )
}

export default PageBanner;