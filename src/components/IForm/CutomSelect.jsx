/* eslint-disable react/prop-types */

const CutomSelect = ({
  options = [],
  placeholder,
  value,
  label,
  name,
  id,
  onChange,
}) => {
  return (
    <div className="custom-select">
      <label htmlFor={id}>{label}</label>
      <select
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CutomSelect;
