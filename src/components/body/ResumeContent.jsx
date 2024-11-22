import Progress from "./Progress";
import ProgressContent from "./ProgressContent";
import ResumeCard from "./ResumeCard";

const educationInfo = [

    {
        title: 'M.Sc. in Power Electronics and Electrical Machines Drive, Urmia University',
        year: '2016 - 2019',
        des: 'Thesis title: Introduction new structure for multilevel inverters based on switching capacitors with capability cascade extended'
    },
    {
        title: 'B.Sc. in Electrical Engineering-Power, Mehrastan Institute of Higher Education',
        year: '2011 - 2015',
        des: 'Bachelor’s project title: Protection against electric shocks'
    }
]
const experienceInfo = [
    {
        title: 'Front-End Developer, CodeSaz Company, Iran',
        year: '2022 - 2024',
        des:`• Developed and deployed dynamic, responsive web applications using
                                        React.js, leveraging Redux for state management and integrating
                                        TypeScript for seamless data interactions.
                                        • Applied modern front-end technologies, including styled-components for
                                        design, to deliver high-quality, maintainable code across diverse projects.`
    },
    {
        title: 'Front-End Developer, Hamyar Design Company, Iran',
        year: '2020 - 2022',
        des: `• Developed and maintained responsive web applications using HTML5,
                CSS3, JavaScript, and jQuery, ensuring a seamless and engaging user
                experience across all devices.
                • Leveraged Bootstrap and SASS to design and implement modular,
                maintainable, and visually compelling UI components, following industry
                best practices.
                • Applied advanced responsive design techniques to optimize websites for
                diverse screen sizes, significantly improving accessibility and user
                engagement.`
    }
]

export default function ResumeContent({isSelected}){
    return (
        <div className="resume_content">
            <div className="resume_container">
                {isSelected === 'education' ? <ResumeCard myData = {educationInfo} /> : ''}
                {isSelected === 'experience' ? <ResumeCard myData = {experienceInfo} /> : ''}
                {isSelected === 'skills' ? <ProgressContent /> : ''}
            </div>
        </div>
        
    )
}