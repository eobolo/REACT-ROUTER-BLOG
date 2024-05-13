import { useState, useEffect } from "react";
/*
now defining our own custom hook
which is just a javascript function
and it has the ability to use built in
hooks and other hooks on definition
*/
const useWindowSize = () => {
    // now using the useState hook
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    // now using the useEffect hook
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;