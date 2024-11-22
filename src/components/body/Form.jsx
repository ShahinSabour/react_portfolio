import Input from "./Input";
import { FaArrowRight } from "react-icons/fa";


export default function From(){

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="form col-span-2">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <span className="grid lg:grid-cols-2 lg:gap-10 ">
                    <Input title='Your name' />
                    <Input title='Phone Number' />
                </span>
                
                <Input title='Email' />
                <Input title='Subject' />
                
                <div class="full">
                    <label for="message">your message</label>
                    <textarea name="" id="message"></textarea>
                </div> 

                <button type="submit" >
                    <span>Send Message</span>
                    <span className="icon"><FaArrowRight /></span>
                </button>
            </form>
        </div>
    )
}