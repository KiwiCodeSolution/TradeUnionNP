import InputMask from "react-input-mask";

const PhoneInput = ({ ...props }) => {
  return (
    <InputMask mask="+38 (999) 999-99-99" maskChar="_" {...props}>
      {inputProps => <input {...inputProps} type="text" />}
    </InputMask>
  );
};

export default PhoneInput;
