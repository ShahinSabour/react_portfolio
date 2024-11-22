

export default function MyTabs({isSelected, handleTab}){
    

    return (
        <div className="tab_header">
            
            <div className={isSelected === 'education' ? 'active' : ''} onClick={()=>handleTab('education')}>Education</div>
            <div className={isSelected === 'experience' ? 'active' : ''} onClick={()=>handleTab('experience')}>Experience</div>
            <div className={isSelected === 'skills' ? 'active' : ''}  onClick={()=>handleTab('skills')} >Professional Skills</div>
        </div>
    )
}