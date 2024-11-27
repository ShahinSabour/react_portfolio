import { useEffect, useState } from "react";
import DisplayTitle from "./DisplayTitle";
import MyTabs from "./MyTabs";
import ResumeContent from "./ResumeContent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export default function MyResume({section}){
    const [tabVariable, setTabVariable] = useState('education')

    const [data, setData] = useState({name:'',email:'',phoneNumber:0})
    const [isLoaing, setIsLoading] = useState()
    const [error, setError] = useState()

    const fetchData = async(collectionName) => {
        setIsLoading(true)
        setError(false)
        try{
            const ref = collection(db, collectionName)
            const snapshot = await getDocs(ref)
            if(snapshot.empty){
                setData('No Data ...')
            }else{
                const result = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(result)
            }

        }catch (err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData('resume')
    }, [])

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

            <ResumeContent data={data} isSelected={tabVariable} />

        </div>
    )
}