import React from "react";

const TimerDisplay = ({ time, progress }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div
            className="relative flex justify-center items-center w-[200px] h-[200px] bg-gray-900 rounded-full shadow-2xl shadow-gray-950 mt-10 mb-10 
                        lg:w-[400px] lg:h-[400px]"
        >
            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="lg:w-[400px] lg:h-[400px]"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#a5b3eb"
                    strokeWidth="5"
                    className="lg:strokeWidth-[20]"
                />
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#3b3796"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 90}`}
                    strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress)}`}
                    transform="rotate(-90 100 100)"
                    className="lg:strokeWidth-[20]"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl lg:text-8xl font-bold">
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                </div>
            </div>
        </div>
    );
};

export default TimerDisplay;
