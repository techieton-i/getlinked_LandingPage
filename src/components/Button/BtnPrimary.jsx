/* eslint-disable react/prop-types */

const BtnPrimary = ({ text, className, onClick }) => {
  return (
    <button className={`${className} btn-primary`} onClick={onClick}>
      {text}
    </button>
  );
};

export default BtnPrimary;
