import React from "react";
import Button from "./ui/Button";

const TimerControls = ({ isActive, toggleTimer }) => (
    <div className="flex justify-center space-x-2">
        <Button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</Button>
    </div>
);

export default TimerControls;
