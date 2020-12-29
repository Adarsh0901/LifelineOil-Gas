import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <React.Fragment>
            <header>
                <div className="header img-responsive">
                    <div className="header-selection">
                        <div className="header-content">
                            <div className="logo">
                            <Link to="/" ><img src="/images/logo.png" alt="logo" width="25%" height="90px"/></Link>
                            </div>
                            <div className="heading" data-aos="fade-up" data-aos-duration="1200">
                                लाइफलाइन इंजीनियरिंग एंड कंस्ट्रक्शन <br/>
                                Lifeline Engineering and Construction
                            </div>
                        </div>
                    </div>
                    <div className="navbar1">
                        <Link to="/" className="btn btn-info" role="button">HOME</Link>&nbsp;
                        <Link to="/Oil-Gas" className="btn btn-info" role="button">OIL & GAS</Link>&nbsp;
                        <Link to="/media-news" className="btn btn-info" role="button">MEDIA & NEWS</Link>&nbsp;
                        <Link to="/subsidiary" className="btn btn-info" role="button">SUBSIDIARY</Link>&nbsp;
                        <Link to="/ContactUs" className="btn btn-info" role="button">CONTACT US</Link>&nbsp;
                        
                    </div>
                    
                    <nav className="navbar navbar-expand-lg navbar-light bg-info navbar2 fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 className="navbar-brand">Menu</h1>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="nav navbar-nav ">
                                <li className="nav-item active Nav-item">
                                    <Link to="/" className="Nav-item">HOME<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item Nav-item">
                                    <Link to="/Oil-Gas" className="Nav-item">OIL & GAS</Link>
                                </li>
                                <li className="nav-item Nav-item">
                                    <Link to="/media-news" className="Nav-item">MEDIA & NEWS</Link>
                                </li>
                                <li className="nav-item Nav-item">
                                    <Link to="/subsidiary" className="Nav-item">SUBSIDIARY</Link>
                                </li>
                                <li className="nav-item Nav-item">
                                    <Link to="/ContactUs" className="Nav-item">CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;