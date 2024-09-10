import { useState, useEffect } from "react";
import { SESSION_TIMES } from "../constants/timerConstant";

export const useTimer = () => {
    const [time, setTime] = useState(SESSION_TIMES.work);
    const [isActive, setIsActive] = useState(false);
    const [sessionType, setSessionType] = useState("work");

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const progress = time / SESSION_TIMES[sessionType];

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = (type) => {
        setIsActive(false);
        setSessionType(type);
        setTime(SESSION_TIMES[type]);
    };

    return { time, isActive, sessionType, progress, toggleTimer, resetTimer };
};
