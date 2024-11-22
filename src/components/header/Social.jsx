import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


export default function Social({title, state}){
    let content;

    if (state == 'on'){
        content = <div class="social_links">
                    <a href="https://www.instagram.com/shahin__sab/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/shahin-sabour/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://github.com/ShahinSabour" target="_blank"><FaGithub /></a>
                </div>;
    }else{
        content = <div class="social_links">
                        <span><FaJs /></span>
                        <span><FaReact /></span>
                    </div>;
    }

    return (
        <div>
            <div className="social_title">{title}</div>
            <div className="social_links">
                {content}
            </div>
        </div>
    )
}