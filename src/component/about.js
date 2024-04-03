import React from "react";
import { ReactTyped } from "react-typed";


const TypingEffect = () => {
    return (
        <ReactTyped
            strings={["Hello, world!", "This is a typing effect."]}
            typeSpeed={40}
            backSpeed={20}
            loop
        />
    );
};

export default TypingEffect;