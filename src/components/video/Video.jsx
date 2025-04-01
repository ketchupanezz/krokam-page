import './video.css';
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
            
            <div className="video__embed-container">
                    <iframe 
                        width="100%" 
                        height="100%"
                        src="https://www.youtube.com/embed/Azb6KS38RCI?autoplay=0&controls=1" 
                        title="YouTube video player"
                        allow="accelerometer; encrypted-media; picture-in-picture"
                        allowFullScreen
                    ></iframe>
            </div>
        </div>
    </section>

   );
}

export default Video;