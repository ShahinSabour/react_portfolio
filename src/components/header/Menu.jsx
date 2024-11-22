const menuItem1 = {
    'Home': 'home',
    'Portfolio': 'portfolio',
    'My Resume': 'resume',
    'Blog': 'blog',
    'Contact': 'contact',
}

export default function Menu({handleRemove}){

    function handleMove(param){
        const position = document.getElementById(param).offsetTop
        window.scroll({top: position -100 , behavior: 'smooth'})
    }

    function handleManage(param){
        handleMove(param);
        handleRemove();
    }

    return (
        <>
            {
                Object.entries(menuItem1).map(([key, index]) => {
                    return <li key={index}><button onClick={() => handleManage(menuItem1[key])}>{key}</button></li>
                })

            }
        </>
    )
}