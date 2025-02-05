import { useState, useEffect } from "react";
import { debounce } from 'lodash';


export function CheckWebSize(delay: number) {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, delay);

        console.log("가로 사이즈 = " + window.innerWidth + "세로 사이즈 = " + window.innerHeight)
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            handleResize.cancel(); // 메모리 누수 방지
        };
    }, [delay]);

    return size;
}

