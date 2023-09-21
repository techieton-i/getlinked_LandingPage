/* eslint-disable react/prop-types */
const CustomInput = ({
  name,
  placeholder,
  required,
  type,
  value,
  onChange,
  classname,
  label,
}) => {
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input
        className={`${classname} custom-input`}
        required={required}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
