import Progress from "./Progress";


export default function ProgressContent({expertize}){

    console.log(expertize)
    return (
        <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1">
            {Object.entries(expertize[0]).map(([key, val], i) => <Progress title={key} percentage={val} /> )}
        </div>
    )
}