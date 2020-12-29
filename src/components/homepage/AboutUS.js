import React, {useEffect} from 'react';
import './Aboutus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs =()=>{
    useEffect(()=>{
        AOS.init({});
    },[])

    return(
        <React.Fragment>
            <div className="container">
                <strong><h2 className="About-Us-Head" >ABOUT US</h2></strong>
                <div className="row">
                    <div className="col-md-7 About-Us-Desc">
                        <p>
                            LIFELINE ENGINEERING & CONSTRUCTION since its establishment in the year 2014 has beenin the business, offering a Wide range of services and engineering solutions for OIL & GAS, Civil Sector and other major industries in the disciplines of Mechanical, Civil and Electrical. We have a position to undertake complex high value and high technology Mechanical Engineering Projects having executed a wide range of projects.
                        </p>
                        <p>
                            During this period, the Company has grown steadily depending on consistency, expertise, professionalism, quality service and customer support. Controlled growth is an important aspect of Life Line Engineering & Construction philosophy, allowing the company to maintain continuity and highest level of customer service. 
                        </p>
                        <p>
                            Life Line is well recognized by its commitment to providing quality service and working closely with its clients. Extensive abilites with provem experience for design. Detailed Engineering ,Fabricaion, Installation, Maintenance in the aforesaid disciplines qualifies Life Line as a dependable partner-in-success.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src="/images/wallpaper.jpg" className="img-responsive About-Us-Img" alt="About-us-img" data-aos="fade-zoom" data-aos-duration="1200"/>
                    </div>
                </div>
            </div>
            <div className="Vision-back" data-aos="fade-down" data-aos-duration="1200">
                <div className="container">
                
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/V&M.jpg" alt="Vision Mission" className="img-responsive Vision-img"></img>
                        </div>
                        <div className="col-md-6">
                            
                            <strong><h2 className="Vision-head">VISION & MISSION</h2></strong>
                            <strong><h2 style={{color:'#021c42'}}>OUR VISION</h2></strong>
                            <div className="Vision-desc">
                                <p>
                                    To become a world class engineering Construction operation and Maintenance company in  All over India Services  We provide a comprehensive services and solution for the Oil & Gas, Petrochemical, Power and Desalition projects. We strive to build quality Construction projects and earn our clients confidence and satisfaction all times. To provide the best possible working conditions to our clients and sub-contractors.
                                </p>
                            </div>
                            <strong><h2 style={{color:'#021c42'}}>OUR MISSION</h2></strong>
                            <div className="Vision-desc">
                                <p>
                                    Lead the market through reputation for reliability. Adhere to National Standard for Safety & Engineering skills. All of our team members apply their specialized skills and utilize modern technology to gaurantee the success of our projects. Emphasis on steady growth and increase the value of our company.We will strive to implement a long term relationship with our clients, based on safety, quality, timely services and an anticipatedof their needs. To help fulfill this mission, we will treat all employees fairly and involve them in the quality improvement process to insure responsiveness and cost effective work execution. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-down" data-aos-duration="1200">
                <strong><h2 className="HSE-Head">HEALTH, SAFETY AND ENVIRONMENT</h2></strong>
                <div className="HSE-Desc">
                    <p>
                        HSE policy is made for every personnel in the company to provide health and safe place in which to work and everybody must know to take positive action for any safety related problems.
                    </p>
                    <ol>
                            <li> Provide a safe place of work and healhy environments for our employees.</li>
                            <li> Provide safe access and safety measures as required for the job.</li>
                            <li> Prevent any lose production or damage to equipment's or property.</li>
                            <li> Pursue continjous improvement of HSE management system and performance.</li>
                            <li> Consulting employees on health and safety for providing stronger commitment implementing decision or action, greater cooperation and trust, healthier and safer work places and bette decision about health and safety.</li>
                            <li> Ensure all employees are trained performed the job in productive and a safe manner through proper training and tool box meeting.</li>
                            <li> Implement practices and procedures for the use, handling, storage and transportation of materials and substances.</li>
                            <li> To regard all accidents are preventable.</li>
                            <li> Always remember safety is not one man's responsibility.</li>
                     </ol>
                </div>
            </div>
        </React.Fragment>
    )
}



export default AboutUs