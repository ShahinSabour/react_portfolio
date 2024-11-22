
export default function DisplayTitle({text, title, section}){

    return (
        <div className="porto_title" id={section}>
            <div class="text">{text}</div>
            <div class="subtitle">{title}</div>        
        </div>
    )
}