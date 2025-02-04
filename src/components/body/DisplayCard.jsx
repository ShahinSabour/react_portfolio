import Card from "./Card"
import DisplayTitle from "./DisplayTitle"
import samaChap from '../../assets/img/samaChap.png'
import client2 from '../../assets/img/p2.png'
import hoisting from '../../assets/img/hoisting.png'
import propDrilling from '../../assets/img/Prop-drilling.jpg'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"

const cardInfo = [
    {
        img: client2,
        title: 'SatDl Project',
        description: 'Streamlined 7-page website for effortless file upload and download',
        link: "https://satdl.com/",
        labelStatus: { state: '', stacks: ['JavaScript','jQuery','Scss','Html5'] }    
    },
    {
        img: samaChap,
        title: 'samaChap project',
        description: 'Solving development and designing challenges',
        link: "https://samanchap.com/",
        labelStatus: { state: '', stacks: ['JavaScript','jQuery','Scss','Html5'] }
    }
] 

const cardInfoBlog = [
    {
        img: hoisting,
        title: 'Hoisting',
        description: 'Understanding Hoisting in JavaScript',
        link:"https://medium.com/@shahinsabour90/understanding-hoising-in-javascript-b0d5a558339a",
        labelStatus: { state: '', stacks: [] }
    },
    {
        img: propDrilling,
        title: 'Prop Drilling',
        description: 'How to manage the states effectively in React',
        link:"https://medium.com/@shahinsabour90/solving-the-prop-drilling-p-d-nightmare-how-to-manage-the-states-effectively-in-react-741d56781262",
        labelStatus: { state: '', stacks: [] }
    }
]
     
export default function DisplayCard({text, title, section}){

    const [dataSample, setDataSample] = useState([])
    const [dataBlog, setDataBlog] = useState()
    const [isLoaing, setIsLoading] = useState()
    const [error, setError] = useState()

    const fetchData = async(collectionName) => {
        setIsLoading(true)
        setError(false)
        try{

            const ref = collection(db, collectionName)

            const snapshot = await getDocs(ref)
            if(snapshot.empty){
                setDataSample('No Data ...')
                setDataBlog('No Data ...')
            }else{
                const result = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }));
                if (collectionName === 'worksamples'){
                    setDataSample(result)
                }else{
                    setDataBlog(result)
                }
            }
        }catch (err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData('worksamples')
        setDataBlog('blog')
    }, [])

    return (
        <div className="portfolio container mx-auto">
            <DisplayTitle
                section={section}
                text={text}
                title={title}
            />
            <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-4 grid-cols-1">
                {(section === 'portfolio') ? (
                    <>
                        {
                            cardInfo.map((item, key) => <Card  key={key} {...item} />)
                            // dataSample.map((item, index) => <Card key={index} />)
                        }
                    </>
                ) : ''}

                {(section === 'blog') ? (
                    <>
                        {
                            cardInfoBlog.map((item, key) => <Card key={key} {...item} />)
                            // Object.entries(sampleContent).map(([item, key]) => <span key={key}><Card {...item} /> </span>)
                        }
                    </>
                ) : ''}
            </div>  
        </div>  
    )
}