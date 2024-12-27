import React, { useEffect, useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import animationData from './assets/test.json';
import santa from './assets/santa.json';
import movesanta from './assets/movesanta.json';
import christmas from './assets/christmas.json';
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS JavaScript

const App = () => {
    const [isText, setIsText] = useState(false);
    const [showChristmasAnimation, setShowChristmasAnimation] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 200,
            easing: "ease-in-out", // Easing type
            once: true, // Whether the animation should happen only once
        });

        const sequence = () => {
            setIsText(false);
            setShowChristmasAnimation(false);

            setTimeout(() => {
                setIsText(true);

                setTimeout(() => {
                    setIsText(false);
                    setShowChristmasAnimation(true);

                    setTimeout(sequence, 7000);
                }, 6000);
            }, 3700);
        };

        sequence();
    }, []);

    return (
        <div className="main-container">
            <Lottie
                animationData={santa}
                loop={true}
                autoplay={true}
                className="santa-first"
                style={{ width: '150px', height: '150px' }}
            />

            <Lottie
                animationData={santa}
                loop={true}
                autoplay={true}
                className="santa-second"
                style={{ width: '150px', height: '150px' }}
            />


            {isText && (
                <div className="sorry-container" data-aos="zoom-in">
                    ბოდიში... რაც მოხტა მოხტა.
                </div>
            )}

            {showChristmasAnimation && (
                <Lottie
                    animationData={christmas}
                    loop={false}
                    autoplay={true}
                    style={{ width: '600px', height: '600px' }}
                />
            )}

            {!isText && !showChristmasAnimation && (
                <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay={true}
                    style={{ width: '600px', height: '600px' }}
                />
            )}

        </div>
    );
};

export default App;
