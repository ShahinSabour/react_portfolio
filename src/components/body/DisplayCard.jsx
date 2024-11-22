import Card from "./Card"
import DisplayTitle from "./DisplayTitle"
import client from '../../assets/img/p1_client.png'
import hoisting from '../../assets/img/hoisting.png'

const cardInfo = [
    {
        img: client,
        title: 'Dashboard designing',
        description: 'Crafting +10-Page Dashboard: Solving Development Challenges',
        link: "https://p1-client.vercel.app/",
        labelStatus: { state: '', stacks: ['JavaScript','jQuery','Scss','Html5'] }
    },
]

const cardInfoBlog = [
    {
        img: hoisting,
        title: 'Hoisting',
        description: 'Understanding Hoisting in JavaScript',
        link:"https://medium.com/@shahinsabour90/understanding-hoising-in-javascript-b0d5a558339a",
        labelStatus: { state: '', stacks: [] }
    },
]
     
export default function DisplayCard({text, title, section}){

    return (
        <div className="portfolio container mx-auto">
            <DisplayTitle
                section={section}
                text={text}
                title={title}
            />
            <div className="grid lg:grid-cols-3 lg:gap-3 sm:grid-cols-2 sm:gap-4 grid-cols-1">
                {(section === 'portfolio') ? (
                    <>
                        {
                            cardInfo.map(item => <Card {...item} />)
                        }
                    </>
                ) : ''}

                {(section === 'blog') ? (
                    <>
                        {
                            cardInfoBlog.map(item => <Card {...item} />)
                        }
                    </>
                ) : ''}
            </div>  
        </div>  
    )
}