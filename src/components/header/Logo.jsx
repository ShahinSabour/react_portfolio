import profileImage from '../../assets/img/profile.jpg'

export default function Logo({title, copyWrite}){
    return (
        <div className="logo lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
            <a href=''>
                <img src={profileImage} alt="Shahin Sabour" />
            </a>
            {title && <div className="title_img">{title}</div>}
            {copyWrite && <div className="copy_write">{copyWrite}</div>}
        </div>
    )
}