import './video.css';
import videoImg from './../../img/video.png';
import flowerHeadImg from './../../img/figurs/flowerHead.svg';

const Video = () => {
    return( <section className='video'>
        <div className="container">
            <div className="video__figurs">
                <div className="video__left__figurs">
                    <div className="video__figure_1"></div>
                    <div className="video__figure_2"></div>
                </div>
                <div className="video__right__figurs">
                    <img className="video__figure_3" src={flowerHeadImg} alt="flower head" />
                    <div className="video__figure_4"></div>
                </div>
            </div>
            
            <img className="video__main-img" src={videoImg} alt='video' />
        </div>
    </section>

   );
}

export default Video;