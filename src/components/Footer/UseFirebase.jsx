import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from "react"

export default function UseFirebase(){

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const ref = collection(db, 'personal_info')
        getDocs(ref).then((snapshot) => {
            if (snapshot.empty){

            }else{
                let result = [];
                snapshot.docs.forEach(doc => {
                    result.push({id:doc.id, ...doc.data()})
                })
                setData(result)
                setIsLoading(false)
            }
        })

    }, [])  
        // console.log(`this is our data:`)
        // console.log(data[0].email)
    return (
        <>
        </>
    )
}