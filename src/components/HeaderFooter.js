import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderFooter({children}){
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SearchTerm: ", searchTerm);
    };

    return (
        <>
            <header className="header">
                <NavLink to="/" className="NavLink">
                    Home
                </NavLink>  
                <NavLink to="Products" className="NavLink">
                    Products
                </NavLink>
                <div className="logo">
                    Your<br/>Logo
                </div>
                <NavLink to="Cart" className="NavLink">
                    Cart
                </NavLink>
                <form onSubmit={handleSubmit}>
                    <div className="search-wrapper">
                        <input
                            className="search-bar"
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </div>
                </form>
            </header>
                {children}
            <footer className="footer">
                <div className="Copyright">&copy; {new Date().getFullYear()} Matthew Schutzner</div>
            </footer>
        </>
    )
}