import biarestscie from './../../img/projects/img (1).png';
import belbible from './../../img/projects/img (2).png';
import nasb from './../../img/projects/img (3).png';
import krokapp from './../../img/projects/img (4).png';
import audioGuide from './../../img/projects/img (5).png';
import storywhere from './../../img/projects/img (6).png';
import tobo from './../../img/projects/img (7).png';
import lida from './../../img/projects/img (8).png';
import fish from './../../img/projects/img (9).png';
import botanical from './../../img/projects/img (10).png';
import offer from './../../img/projects/img (11).png';

import "./projects.css";

const Projects = () => {
    return ( <section className="projects">
        <div className="container">
            <h2>Our projects</h2>
            <div className="projects__cards-table">
                <div className="projects__card">
                    <img src={biarestscie} alt="biarestscie" />
                    <span>Audio guide of the archaeological museum «Biarescie»</span>
                </div>
                <div className="projects__card">
                    <img src={belbible} alt="belbible" />
                    <span>Audio guide for the international exhibition "Belarus and the Bible",
                    20 September - 21 October 2018</span>
                </div>
                <div className="projects__card">
                    <img src={nasb} alt="nasb" />
                    <span>NASB Museum audio guide</span>
                </div>
                <div className="projects__card">
                    <img src={krokapp} alt="krokapp" />
                    <span>Audio guide «Krokapp» throughout Belarus</span>
                </div>
                <div className="projects__card">
                    <img src={audioGuide} alt="audioGuide" />
                    <span>Audio guide for printing houses of Grand Duchy of Lithuania on the territory of Belarus</span>
                </div>
                <div className="projects__card">
                    <img src={storywhere} alt="storywhere" />
                    <span>Storywhere</span>
                </div>
                <div className="projects__card">
                    <img src={tobo} alt="tobo" />
                    <span>The audio guide of the XXVI International ICT Forum TIBO-2019 (TIBO)</span>
                </div>
                <div className="projects__card">
                    <img src={lida} alt="lida" />
                    <span>Lida Castle Audio Guide</span>
                </div>
                <div className="projects__card">
                    <img src={fish} alt="fish" />
                    <span>Fish Pits Navigator</span>
                </div>
                <div className="projects__card">
                    <img src={botanical} alt="botanical" />
                    <span>Botanical Garden Audio guide</span>
                </div>
                <div className="projects__card">
                    <img src={offer} alt="offer" />
                    <span>Offer your audio guide</span>
                </div>
            </div>
        </div>
    </section>
)};

export default Projects;