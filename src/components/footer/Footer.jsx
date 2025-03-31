import './footer.css';

import logoK from './../../img/logo/logo-6.svg';
import youtubeImg from './../../img/icons/youtube.svg';

const Footer = () => {
    return( <footer>
        <div className="container">
          <div className="footer__logo">
            <img className="footer__logo-img" src={logoK} alt='Krokam logo' />
          </div>
          <div className="footer__inf">
            <div className="footer__inf__contacts">
                <span className="footer__email">info@krokam.com</span>

                <img src={youtubeImg} alt='youtube icon' />
            </div>
            <div className="footer__menu-part1">
                <span>Home</span>
                <span>About project</span>
            </div>
            <div className="footer__menu-part2">
                <span>Our projects</span>
                <span>Contacts</span>
            </div>
          </div>
        </div>
    </footer>
   );
}

export default Footer;