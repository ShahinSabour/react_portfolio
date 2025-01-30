import Progress from "./Progress";
import ProgressContent from "./ProgressContent";
import ResumeCard from "./ResumeCard";


export default function ResumeContent({isSelected, data}){

    const education = data[0]?.education || [];
    const experience = data[0]?.experiences || [];
    const expertize = data[0]?.expertize || [];

    return (
        <div className="resume_content">
            <div className="resume_container">
                {isSelected === 'education' ? <ResumeCard myData = {education} /> : ''}
                {isSelected === 'experience' ? <ResumeCard myData = {experience} /> : ''}
                {isSelected === 'skills' ? <ProgressContent expertize={expertize} /> : ''}
            </div>
        </div>
        
    )
}