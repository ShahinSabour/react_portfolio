

export default function ResumeCard({myData}){
    let content;
    content  = myData.map((item, key) => {
        return  <div className="resume_card" key={key}>
                        <span className="circle_intro"></span>
                        <span className="path_intro"></span>
                        <div className="card_title">{item.title}</div>
                        <div className="card_year">{item.year}</div>
                        <div className="card_seperator"></div>
                        <p className="card_description">
                            {item.des}
                            
                        </p> 
                    </div>
    })
    return (
        < >
            {content} 
        </>
    )
}