import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ToUp(){
    const [scrollPosition, setScrollPosition] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', handleUpTo)
        function handleUpTo(){
            const currentPos = window.pageYOffset;
            return currentPos < 300 ? setScrollPosition(false) : setScrollPosition(true)
        }

        return () => window.removeEventListener('scroll', handleUpTo)
    
    })

    function handleUp(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <>
            { scrollPosition && <div className="top_arrow" id="top_arrow" onClick={handleUp}><FaArrowUp /></div>}
        </>
    )
}