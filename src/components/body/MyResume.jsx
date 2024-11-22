import { useState } from "react";
import DisplayTitle from "./DisplayTitle";
import MyTabs from "./MyTabs";
import ResumeContent from "./ResumeContent";


export default function MyResume({section}){
    const [tabVariable, setTabVariable] = useState('education')

    function handleTab(param){
        setTabVariable(param)
    }

    return (
        <div className="container mx-auto my_resume">
            <DisplayTitle
                section={section}
                text='+4 years of experience'
                title='My Resume'
            />
            <MyTabs
                handleTab={handleTab}
                isSelected={tabVariable}
            />

            <ResumeContent isSelected={tabVariable} />

        </div>
    )
}