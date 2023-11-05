import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && progress < 100) {
                setProgress(progress + 10);
            }
        }, 450);

        return () => clearInterval(interval);
    }, [isPaused, progress]);


    const progressBarStyle = {
        width: `${progress}%`,
        backgroundColor: '#4B4E51',
        transition: '1s ease-in-out'
    };

    const handleMouseMove = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    return (
        <div className="progress-bar-container" onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}>
            <div className="progress-bar">
                <div className="progress" style={progressBarStyle}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

