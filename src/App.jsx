import React from 'react';
import './App.css'
import gift from'./assets/gift.png';

const App = () => {
    return (
        <div className={'main-container'}>
            <div className={'sorry-container'}>
                ბოდიში... ხელფასები როდის იქნება?
            </div>

            <img src={gift}  alt="gift" className={'gift'}/>

        </div>
    );
};

export default App;