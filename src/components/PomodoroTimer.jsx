import React from "react";
import TimerDisplay from "./PomodoroTimer/TimerDisplay";
import TimerControls from "./TimerControls";
import SessionTypeButtons from "./SessionTypeButtons";
import { useTimer } from "../hooks/useTimer";

const PomodoroTimer = () => {
    const { time, isActive, sessionType, progress, toggleTimer, resetTimer } =
        useTimer();

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold text-center mb-5">
                Pomodoro 🍅⏰
            </h1>
            <h2 className="text-xl font-bold mb-5">
                {sessionType.toUpperCase()}
            </h2>
            <SessionTypeButtons resetTimer={resetTimer} />
            <TimerDisplay time={time} progress={progress} />
            <TimerControls isActive={isActive} toggleTimer={toggleTimer} />
        </div>
    );
};

export default PomodoroTimer;
