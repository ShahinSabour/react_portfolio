import contactImg from '../../assets/img/contact1.png'
import Social from "../header/Social";


export default function ContactCard(){
    return (
        <div className="contact_card lg:col-span-1 md:col-span-2">
            <div className="img"><img src={contactImg} alt="" /></div>
            <div className="title">Shahin Sabour</div>
            <p>I am available for freelance work. Connect with me via and call in to my account.</p>
            <div>Phone: +32470643476</div>
            <div>Email: shahinsabour90@gmail.com</div>
            <Social title="find me" state='on' />
        </div>
    )
}