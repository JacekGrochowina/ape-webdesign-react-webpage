import React from 'react';
import data from 'data';
import { Parallax } from 'react-parallax';
import Swiper from 'components/organisms/Swiper';
import AboutUs from 'components/organisms/AboutUs';
import TilesList from 'components/organisms/TilesList';
import VideoSrc from 'assets/videos/video.mp4';
import OverlayGradient from 'assets/overlay/overlay-gradient.svg';
import OverlayShapes from 'assets/overlay/overlay-shapes.svg';

const Video = () => {
    return (
        <div style={{
            position: "relative",
            height: "60vh",
            maxHeight: "600px",
            overflow: "hidden",
        }}>
            <video autoPlay loop muted style={{
                minHeight: "100%",
                minWidth: "100vw",
            }}>
                <source src={VideoSrc} type="video/mp4" />
            </video>
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${OverlayGradient})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${OverlayShapes})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            />
        </div>
    );
};

const Home = () => {
    return (
        <div className="home">
            <Swiper>{data.swiper}</Swiper>
            <AboutUs />
            <Parallax>
                <Video />
            </Parallax>
            <TilesList />
        </div>
    )
};

export default Home;