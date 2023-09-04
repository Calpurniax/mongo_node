//import "../../styles/components/form.scss";
import { useForm } from "react-hook-form";
import Captcha from '../Captcha.jsx'; 
import Button from "./Button";
import { useState } from "react";

const Form =()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [captchaOk, setCaptchaOk]= useState(false)
    
    const onSubmit =(data)=>{
        if(captchaOk){
           console.log(data);
        }else alert ("please complete the captcha")
    } 
    return(
        <section className="contact">
            <h2 className="contact__title">Contact us</h2>
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>               
                <label htmlFor="name">Name</label>
                <input className="contact__form__input"type="text" id="name" placeholder="Your name" {...register("name")}/>               
                <label htmlFor="email">E-mail</label>
                <input className="contact__form__input" type="email" id="email" placeholder="Your e-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" {...register("email")}/>
                <label htmlFor="subject">Subject</label>
                <input className="contact__form__input" type="text" id= "subject" placeholder="Subject" {...register("subject")}/>
                <label htmlFor="message">Message</label>
                <input className="contact__form__input" type="text" id= "message" placeholder="Your message" {...register("message")}/>
               <Button/> 
                
            </form>
            <Captcha setCaptchaOk={setCaptchaOk}/>
        </section>
    )
}
export default Form