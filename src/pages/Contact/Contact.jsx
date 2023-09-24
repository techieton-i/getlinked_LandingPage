import { useCallback, useState } from "react";
import BtnPrimary from "../../components/Button/BtnPrimary";
import CustomInput from "../../components/IForm/CustomInput";
import social_img from "../../assets/images/Social media.png";
import axios from "axios";

const Contact = () => {
  const [fieldValues, setFieldValues] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    setFieldValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(async () => {
    console.log(fieldValues);
    const contact_url = "https://backend.getlinked.ai/hackathon/contact-form";
    try {
      let response = await axios.post(contact_url, fieldValues);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [fieldValues]);

  return (
    <div className="contact">
      <div className="contact-details">
        <h2>Get in touch</h2>
        <p>
          Contact <br />
          Information
        </p>
        <p>
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
        <div className="social">
          <p>Share on</p>
          <div>
            <img src={social_img} />
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form_title">
          <h2>Questions or need assistance? Let us know about it</h2>
          <p>Email us below to any question related to our event</p>
        </div>
        <div className="contact-form_control">
          <CustomInput
            type="text"
            name="first_name"
            placeholder="Team's Name"
            required
            onChange={handlechange}
            value={fieldValues.name}
          />
          <CustomInput
            type="text"
            name={"phone_number"}
            placeholder="Phone Number"
            required
            onChange={handlechange}
            value={fieldValues.topic}
          />
          <CustomInput
            type={"text"}
            name="email"
            placeholder="Email"
            required
            onChange={handlechange}
            value={fieldValues.email}
          />
          <textarea
            name="message"
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
            onChange={handlechange}
            value={fieldValues.message}
          />
        </div>
        <BtnPrimary text={"submit"} onClick={handleSubmit} />
      </div>
      <div className="social">
        <p>Share on</p>
        <div>
          <img src={social_img} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
