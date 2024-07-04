import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2qm68yd', 'template_5pmdwcb', form.current, {
            publicKey: 'FsfzsqViF2KgrKBL0',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div id="contact" className="mb-10">
           <h2 className="relative text-center text-2xl font-bold my-5 ">Get In Touch</h2> 
           <div className="flex sm:items-center sm:flex-col md:flex-row lg:flex-row justify-between">
            <div>
                <h2 className="text-2xl my-3">Contact Info</h2>
                <div className="flex items-center gap-2 py-2 text-lg "><FaPhoneAlt /> <p>+880 1741632656</p> </div>
                <div className="flex items-center gap-2 pb-2 text-lg "><MdEmail /> <p>tinnydatta.prof@gmail.com</p> </div>
                <div className="text-xl">Address</div>
                <div className="flex items-center gap-2 pb-2 text-lg "><FaLocationDot /> <p>Sylhet, Bangladesh</p> </div>
            </div>
            <div>
                <h2 className="text-2xl my-3">Send Email</h2>
                <div>
                <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <br />
     <input className="btn bg-blue-400" type="submit" value="Send" />
    </form>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Contact;