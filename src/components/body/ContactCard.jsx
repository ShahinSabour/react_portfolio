import { useEffect, useState } from 'react';
import contactImg from '../../assets/img/contact1.png'
import Social from "../header/Social";
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';


export default function ContactCard(){

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
        <div className="contact_card lg:col-span-1 md:col-span-2">
            <div className="img"><img src={contactImg} alt="" /></div>
            <div className="title">{data[0]?.name || "Unnamed name"}</div>
            <p>I am available for freelance work. Connect with me via and call in to my account.</p>
            <div>Phone: +{data[0]?.phoneNumber || "Unnamed number"}</div>
            <div>Email: {data[0]?.email || "Unnamed email"}</div>
            <Social title="find me" state='on' data={data[0]?.social}/>
        </div>
    )
}