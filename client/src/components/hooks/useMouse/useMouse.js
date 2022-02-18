import {useState, useEffect} from "react";

const useMouse = (selector) => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    useEffect(() => {
        const elem = document.querySelector(selector);
        elem.addEventListener("mousemove", (e) => {
            // if (e.pageX > 1000) {
            //     return setMouseX(e.pageX)
            // }
            // if (e.pageY > 500) {
            //     return setMouseY(e.pageY)
            // }
            setMouseX(e.pageX)
            setMouseY(e.pageY)
        });
    }, [selector]);


    return {mouseX, mouseY};
};

export default useMouse;