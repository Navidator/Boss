import React, { useEffect, useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import animationData from './assets/test.json';
import santa from './assets/santa.json';
import movesanta from './assets/movesanta.json';
import christmas from './assets/christmas.json';

const App = () => {
    const [isText, setIsText] = useState(false);
    const [showChristmasAnimation, setShowChristmasAnimation] = useState(false);

    useEffect(() => {
        const sequence = () => {
            setIsText(false); // Reset state
            setShowChristmasAnimation(false);

            // Show text after 3 seconds
            setTimeout(() => {
                setIsText(true);

                // Show Christmas animation 4 seconds after text
                setTimeout(() => {
                    setIsText(false);
                    setShowChristmasAnimation(true);

                    // Restart the sequence after another 4 seconds
                    setTimeout(sequence, 7000);
                }, 6000);
            }, 4000);
        };

        sequence(); // Start the sequence when the component mounts
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
                <div className="sorry-container">
                    ბოდიში... ხელფასები როდის იქნება?
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
