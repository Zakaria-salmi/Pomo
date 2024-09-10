import React from "react";

const Button = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            className={`px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-950 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
