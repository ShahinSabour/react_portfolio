import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";

export default function Responsive(){
    const [activeButton, setActiveButton] = useState(false)

    function handleButton(){
        setActiveButton(preValue => !preValue)
    }

    function handleRemove(){
        setActiveButton(false)
    }

    return (
        <>
            <button className="menu_icon" onClick={handleButton}><CiMenuBurger /></button>
            <div className={`responsive_menu ${activeButton ? 'active_responsive' : ''}`}>
                <Logo title='' copyWrite='' />

                <ul className={`menu ${activeButton ? 'res_menu' : ''}`} >
                    <Menu handleRemove={handleRemove} />
                </ul>
            </div>

        </>
    )
}