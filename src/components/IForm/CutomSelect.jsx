/* eslint-disable react/prop-types */

const CutomSelect = ({
  options = [],
  placeholder,
  value,
  label,
  name,
  id,
  onChange,
  required,
}) => {
  return (
    <div className="custom-select">
      <label htmlFor={id}>{label}</label>
      <select
        placeholder={"fghgfd"}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        required={required}
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CutomSelect;
