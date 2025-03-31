import './about.css';

const About = () => {
    return ( <section className="about">
        <div className="container">
            <div className="about__figurs">
                    <div className="about__figure_1"></div>
                    <div className="about__figure_2"></div>
                </div>
            <div className="about__content">
                <h2>About project</h2>
                <div className="about__text">
                    <span>Krokam is a platform for interactive audio guides and navigators that provides information about cultural, historical and natural sites in Belarus. It provides an opportunity to get acquainted with objects virtually and can become a good assistant in the area where the objects are located.</span>
                    <span>The platform has been created and aimed at providing quality service and presenting the heritage of Belarus to everyone who is interested. In addition, it provides an opportunity to develop advertising to promote objects of cultural and historical significance, and increases the level of national self-awareness of the inhabitants of Belarus.</span>
                    <span>The developments presented on the «Krokam» platform highlight information about various places or historical events, which allows the user to select an application according to their interests. Each application describes a particular point, gives a brief text and/or voice description, and shows its location on a map. Applications are designed to be used both in a regular web browser and as mobile applications for Android and iOS.</span>
                    <span>The «Krokam» platform is open for further development by scientists, programmers, guides, and everyone else. Visitors have the opportunity to get acquainted with the developments, as well as leave feedback, order their own application or offer cooperation in the development of portals, sites and mobile systems, as well as audio guides for cities, museums and exhibitions.</span>
                    <span>We always welcome feedback, open to suggestions and new projects for you and your needs! If you have any ideas for improving the service or feedback on our work, please contact us at <a className='about__a'  href='!#'>info@krokam.com</a>. If you would like to discuss the development of an audio guide or navigator, please fill out the form. We look forward to collaborating!</span>
                </div>
                <button>Contact us</button>
            </div>
        </div>

    </section> );
}
 
export default About;