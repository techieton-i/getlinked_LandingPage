import { useCallback, useEffect, useState } from "react";
import CustomInput from "../../components/IForm/CustomInput";
import axios from "axios";
import BtnPrimary from "../../components/Button/BtnPrimary";
import CutomSelect from "../../components/IForm/CutomSelect";
import grp_3 from "../../assets/images/Group 13.svg";
import grp_4 from "../../assets/images/Group 14.svg";
import CongratsModal from "../../components/Modals/CongratsModal";
import { createPortal } from "react-dom";

const groupSize = [
  { id: 3, name: "3" },
  { id: 5, name: "5" },
  { id: 10, name: "10" },
];

const Register = () => {
  const [fieldValues, setFieldValues] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    category: "",
    group_size: "",
    privacy_poclicy_accepted: false,
    project_topic: "",
  });
  const [categoryList, setCategoryList] = useState([]);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  const fetchCategoryList = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://backend.getlinked.ai/hackathon/categories-list"
      );
      console.log(res);
      setCategoryList(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);
  const handlechange = (e) => {
    setFieldValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(async () => {
    if (!fieldValues.privacy_poclicy_accepted) return;

    const register_url = "https://backend.getlinked.ai/hackathon/registration";
    try {
      let response = await axios.post(register_url, fieldValues);
      console.log(response);
      setShowCongratsModal(true);
    } catch (error) {
      console.log(error);
    }
  }, [fieldValues]);
  return (
    <div className=" register container">
      <div className="register-img">
        <img src={grp_4} />
      </div>
      <div className="contact-form">
        <div className="register-form_title">
          <h3>Register</h3>
          <p>
            Be part of this movement!{" "}
            <span>
              <img src={grp_3} />
            </span>
          </p>
          <h2>CREATE YOUR ACCOUNT</h2>
        </div>
        <div className="contact-form_control register-form_control">
          <CustomInput
            type="text"
            name="team_name"
            label="Team's Name"
            placeholder="Team's Name"
            required
            onChange={handlechange}
            value={fieldValues.team_name}
          />
          <CustomInput
            type="text"
            name={"phone_number"}
            placeholder="Phone Number"
            label="Phone"
            required
            onChange={handlechange}
            value={fieldValues.topic}
          />
          <CustomInput
            type={"text"}
            name="email"
            label="Email"
            placeholder="Email"
            required
            onChange={handlechange}
            value={fieldValues.email}
          />
          <CustomInput
            type={"text"}
            name="project_topic"
            label="Project Topic"
            placeholder="What is your group project topic"
            required
            onChange={handlechange}
            value={fieldValues.project_topic}
          />
          <div className="form-select">
            <CutomSelect
              options={categoryList}
              id={"sdffsd"}
              name={"category"}
              value={fieldValues.category}
              placeholder="Select your category"
              onChange={handlechange}
              label={"Category"}
              required
            />
            <CutomSelect
              options={groupSize}
              name={"group_size"}
              label={"Group Size"}
              value={fieldValues.group_size}
              placeholder="Select"
              onChange={handlechange}
              required
            />
          </div>
          <p>Please review your registration details before submitting</p>
          <div className="checkbox">
            <input
              type="checkbox"
              checked={fieldValues.privacy_poclicy_accepted}
              name="privacy_poclicy_accepted"
              onChange={(e) => {
                setFieldValues((prev) => ({
                  ...prev,
                  privacy_poclicy_accepted: e.target.checked,
                }));
              }}
            />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        <BtnPrimary text={"submit"} onClick={handleSubmit} />
      </div>
      {showCongratsModal &&
        createPortal(
          <CongratsModal cancel={() => setShowCongratsModal(false)} />,
          document.body
        )}
    </div>
  );
};

export default Register;
