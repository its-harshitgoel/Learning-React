import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar({ duration = 1000 }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress <= 100) {
                setProgress(currentProgress);
            }
        }, duration); 

        return () => clearInterval(interval);

    }, [duration]);

    return (
        <div className="progress-bar">
            <div className="progress-bar__progress" style={{ width: `${progress}%` }}>
                <div className="progress-bar__progress__fill">
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
