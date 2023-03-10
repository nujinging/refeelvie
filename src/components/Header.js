import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const logo = "https://www.tving.com/img/tving-new-logo-pc.svg";
    return (
        <>
            <header className="wrap_header">
                <div className="header_container">
                    <div className="navigation">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <ul className="menu">
                            <li>
                                <Link to="/movie">영화</Link>
                            </li>
                            <li>
                                <Link to="/movie">TV프로그램</Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </header >
        </>
    );
}

export default Header;