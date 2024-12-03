import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Card({img, title, description, labelStatus, link}){
    let techs;
    techs = labelStatus?.stacks.map(item => <span key={item}>{item}</span>) 
    return (
        <div className="porto_card">            
             <a href={link} target="_blank"><img src={img} alt="" /></a>
            
            <div className="card_body">
                <div className="card_title">{title}</div>
                <div className="card_description">
                    <a href={link} target="_blank" className="card_image">
                        {description}
                        <span><HiArrowTopRightOnSquare /></span>
                    </a>

                    {
                        labelStatus.state && <div className="tech">{techs}</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}