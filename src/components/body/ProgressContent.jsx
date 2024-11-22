import Progress from "./Progress";


export default function ProgressContent(){

    return (
        <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1">
                <Progress title='React.js' percentage="85%" />
                <Progress title='JavaScript' percentage="90%" />
                <Progress title='TypeScript' percentage="80%" />
                <Progress title='Redux/React Router' percentage="80%" />
                <Progress title='Context API' percentage="90%" />
                <Progress title='Tailwind CSS / Bootstrap' percentage="90%" />
                <Progress title='Git and GitHub' percentage="90%" />
                <Progress title='SOLID / Design Pattern / Clean Code' percentage="90%" />
                <Progress title='php' percentage="30%" />
        </div>
    )
}