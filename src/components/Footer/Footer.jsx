import Logo from "../header/Logo";
import ToUp from "./ToUp";
// import UseFirebase from "./UseFirebase.jsx";

export default function Footer(){
    return (
        <footer >
            <Logo title='mybio' copyWrite='© 2024' />
            <ToUp />
            {/* <UseFirebase /> */}
        </footer>
    )
}