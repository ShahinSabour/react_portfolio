import { useEffect, useState } from "react";
import Social from "./Social";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export default function LeftBanner(){


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
        fetchData('personal_info')
    }, [])


    return (
        <div>
            <div className="main_pretext">Welcome to my world</div>
            <div className="main_name">Hi, I'm <span>Shahin Sabour</span></div>
            <div className="main_position"><span>a</span> <span className="varied_text">Front-End Developer</span></div>
            <p>
                Front-end developer with over four years of experience building responsive, user-centered web applications. Skilled in modern JavaScript frameworks, TypeScript, and styling libraries, I focus on creating seamless, intuitive interfaces. Experienced in leveraging build tools and Git version control to streamline and collaborate effectively, I bring a strong foundation in web development best practices to every project
            </p> 
        
            <div className="social">
                <div className="group">
                    <Social title='Find me' state='on' data={data[0]?.social} />
                    <Social title='best skill on' state='off' data={data[0]?.social} />
                </div>
            </div>
        </div>
    )
}
