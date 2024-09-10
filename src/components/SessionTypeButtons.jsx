import React from "react";
import Button from "./ui/Button";

const SessionTypeButtons = ({ resetTimer }) => (
    <div className="flex justify-center space-x-2">
        <Button onClick={() => resetTimer("work")}>Work</Button>
        <Button onClick={() => resetTimer("shortBreak")}>Short Break</Button>
        <Button onClick={() => resetTimer("longBreak")}>Long Break</Button>
    </div>
);

export default SessionTypeButtons;
