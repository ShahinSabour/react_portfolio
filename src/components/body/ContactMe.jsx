import ContactCard from "./ContactCard";
import DisplayTitle from "./DisplayTitle";
import Form from './Form'


export default function ContactMe({section}){

    return (
        <div className="container mx-auto contact_me">
            <DisplayTitle section={section} text='Contact' title='Contact Me' />

            <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-4 md:gap-4 grid-cols-1">
                <ContactCard />
                <Form />
            </div> 
        </div>
    )
}
