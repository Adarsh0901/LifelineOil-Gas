import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './homepage/AboutUS';
import OilGas from './Oil&gas/OilGas';
import ContactUS from './ContactUs/ContactUs';
import MediaNews from './MediaNews/MediaNews';
import Subsidiary from './Subsidiary/Subsidiary';


const Routing = () =>{
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Oil-Gas" component={OilGas}></Route>
                <Route exact path="/ContactUs" component={ContactUS}></Route>
                <Route exact path="/media-news" component={MediaNews}></Route>
                <Route exact path="/subsidiary" component={Subsidiary}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;