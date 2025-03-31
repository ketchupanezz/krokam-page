import iconInternet from './../../img/icons/Frame.svg';
import logoK from './../../img/logo/logo-6.svg';
import mainImgCity from './../../img/img.png';
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__figurs">
                <div className="header__figurs__top">
                    <div className="header__figur_1"></div>
                    <div className="header__figur_2"></div>
                </div>
                <div className="header__figurs__button">
                    <div className="header__figur_3"></div>
                    <div className="header__figur_4"></div>
                </div>
            </div>
           
            <img className='header__mainImg' src={mainImgCity} alt='City' />
           
            <div className="container header__container">
                <div className="header__row">
                    <nav className="header__nav">
                        <ul>
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">About project</a></li>
                            <li><a href="!#">Projects</a></li>
                            <li><a href="!#">Contacts</a></li>
                        </ul>
                    </nav>
                    <img src={iconInternet} alt="icon of internet" />
                </div>
                <div className="header__content">
                    <div className="header__logo">
                        <img src={logoK} alt='logo'/>
                    </div>
                    <div className="header__desc">
                        <span>Personal audio guides 
                        and navigators for localities and surroundings
                        </span>
                    </div>
                </div>
              
            </div>
        </header>
    )
 }

export default Header;