import Social from "./Social";


export default function LeftBanner(){
    return (
        <div>
            <div className="main_pretext">Welcome to my world</div>
            <div className="main_name">Hi, I'm <span>Shahin Sabour</span></div>
            <div className="main_position"><span>a</span> <span class="varied_text">Front-End Developer</span></div>
            <p>
                Front-end developer with over 2 years of experience building responsive, user-centered web applications. Skilled in modern JavaScript frameworks, TypeScript, and styling libraries, I focus on creating seamless, intuitive interfaces. Experienced in leveraging build tools and Git version control to streamline and collaborate effectively, I bring a strong foundation in web development best practices to every project
            </p> 
        
            <div className="social">
                <div className="grid grid-cols-2">
                    <Social title='Find me' state='on' />
                    <Social title='best skill on' state='off' />
                </div>
            </div>
        </div>
    )
}