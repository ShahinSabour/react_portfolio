import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from "react"

export default function UseFirebase(){

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async (collectionName) => {
        setIsLoading(true);
        setError(false);
        try {
          const ref = collection(db, collectionName);
          const snapshot = await getDocs(ref);
          if (snapshot.empty) {
            setError("No data to load...");
          } else {
            const result = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setData(result);
          }
        } catch (err) {
          setError("Failed to load data.");
        } finally {
          setIsLoading(false);
        }
      };
    
      // Call fetchData with different collection names inside useEffect
      useEffect(() => {
        // fetchData("personal_info");
      }, []); 

        // console.log(data[0])
    return (
        <>
        </>
    )
}