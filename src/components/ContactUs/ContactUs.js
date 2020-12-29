import React from 'react';
import './ContactUs.css';

const ContactUS =()=>{
    return(
        <React.Fragment>
            <div>
                <div className="container">
                    <center><h3 className="Contact-head">CONTACT US</h3></center>
                    <center>
                    <div className="card contact-card col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">Head Office:</h5>
                            <p className="card-text">
                                4th Floor, Room No.E/404, Rama Nagar Apts, Bldg.No. 02, Tulinj Road, Near Post office, Nallasopara(East), Tal. Vasai, Dist. Palghar- 401209<br/>
                                Email: info@llec.in<br/>
                                MOB: +91 9199678994<br/>
                                MOB: +91 9472670648
                            </p>
                        </div>
                    </div>
                    </center>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUS;