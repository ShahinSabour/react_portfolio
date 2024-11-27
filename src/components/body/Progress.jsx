

export default function Progress({title, percentage}){

    return (
        <div className="progress_bar">
            <label>{title} <span>{percentage}</span></label>
            <div className="progress_container">
                <div className="progress"  style={{width: `${percentage}`}}></div>
            </div>
        </div>
    )
}