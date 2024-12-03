import { useEffect, useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import Responsive from "./Responsive"

export default function Header({section}){
    const [scrollPos, setScrollPos] = useState(0)
    const [activeHeader, setActiveHeader] = useState()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    function handleScroll(){
        const position = window.pageYOffset;
        setScrollPos(position)
        if(scrollPos > 50){
            setActiveHeader('fix_header')
        }else{
            setActiveHeader(' ')
        }
    }

    const handleRemove = () => {}

    return (
        <div className="container mx-auto">
            <div className={activeHeader + ` px-30 mx-auto`} id={section}  >
                <header className="header grid md:grid-cols-12 md:gap-0 grid-cols-2">
                    <Logo title='' copyWrite='' state="header" />
                    <ul  className="menu col-span-10 lg:pr-10">
                        <Menu handleRemove={handleRemove} />
                    </ul>
                    <Responsive />
                </header>
            </div>
        </div>
    )
}