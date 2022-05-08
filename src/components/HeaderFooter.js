import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faYoutube, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function HeaderFooter({children}){
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SearchTerm: ", searchTerm);
    };

    return (
        <>
            <header className="header">
                <NavLink to="/about" className="NavLink">
                    ABOUT US
                </NavLink>  
                <NavLink to="/products" className="NavLink">
                    PRODUCTS
                </NavLink> 
                <NavLink to="/" className="logo">
                    YOUR<br/>LOGO
                </NavLink>
                <NavLink to="/cart" className="NavLink">
                    CART
                </NavLink>
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        className="search-bar"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </header>
            <div className="content-wrapper">
                {children}
            </div>
            <footer className="footer">
                <div className="footer-social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icon" />
                    <FontAwesomeIcon icon={faDiscord} size="2x" className="social-icon" />
                </div>
                <div className="footer-copyright">&copy; {new Date().getFullYear()} Matthew Schutzner</div>
            </footer>
        </>
    )
}