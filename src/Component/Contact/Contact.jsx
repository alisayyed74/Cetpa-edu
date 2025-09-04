import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bcc4a976-c75d-48e9-a4f1-7ba2d8f6b1ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for contacting us.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>Want to start your career in IT? Fill out the form below and our experts will guide you through the best training programs, certifications, and career opportunities.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@cetpainfotech.com</li>
          <li> <img src={phone_icon} alt="" />+91 7451099802</li>
          <li> <img src={location_icon} alt="" />Noida Sector 02, Noida</li>
        </ul>
      </div>
       <div className="contact-co">
       <form onSubmit={onSubmit}>
  {/* redirect hata diya */}
  <input type="hidden" name="from_name" value="Cetpa Edu Website" />
  <input type="hidden" name="reply_to" value="7409658725sayyed@gmail.com" />

  <label>Your Name</label>
  <input type="text" name='name' placeholder='Enter your name' required/>

  <label>Your Phone Number</label>
  <input type="tel" name='phone' placeholder='Enter your phone number' required/>

  <label>Write Your Message</label>
  <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

  <button type='submit' className='btn dark-btn'>
    Submit Now <img src={white_arrow} alt="" />
  </button>
</form>
<span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
