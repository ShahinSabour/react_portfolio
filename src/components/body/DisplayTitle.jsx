
export default function DisplayTitle({text, title, section}){

    return (
        <div className="porto_title" id={section}>
            <div className="text">{text}</div>
            <div className="subtitle">{title}</div>        
        </div>
    )
}