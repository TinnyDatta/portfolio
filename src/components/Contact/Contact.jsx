import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
                <div className="flex items-center gap-2 py-2 text-lg "><FaPhoneAlt />+880 1741632656</div>
                <div className="flex items-center gap-2 pb-2 text-lg "><MdEmail />tinnydatta.prof@gmail.com </div>
                <div className="flex items-center gap-2 pb-2 text-lg "> <FaGithub /><a className="btn-link" href="https://github.com/TinnyDatta">Github</a></div>
                <div className="flex items-center gap-2 pb-2 text-lg "> <FaLinkedin /><a className="btn-link" href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BBaUtBC%2B2S%2FacCbGEItJ7dg%3D%3D">Linkedin</a></div>
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