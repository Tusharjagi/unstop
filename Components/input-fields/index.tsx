import textConst from "@/utils/textConst";
import CustomInputField from "../custom-input-fields";
import styles from "./index.module.scss";
import { useState } from "react";

interface InputErrors {
  userNameError: boolean;
  emailError: boolean;
  passwordError: boolean;
}

interface InputFieldsProps {
  handleInputChange: (fieldName: string, value: string) => void;
  inputErrors: InputErrors;
  setInputErrors: (newErrors: InputErrors) => void;
  error: {
    message: string;
  };
}

const InputFields: React.FC<InputFieldsProps> = ({ handleInputChange, inputErrors, setInputErrors, error }) => {
  const [passwordType, setPasswordType] = useState(false);

  const handleEndIconClick = (): void => {
    setPasswordType((prevState) => !prevState);
  };

  const handleOnBlur = (): void => {
    setInputErrors({ emailError: false, passwordError: false, userNameError: false });
  };

  return (
    <div className={styles.input_fields}>
      <CustomInputField
        startIcon="/assets/profile.svg"
        label={textConst.userName}
        id={textConst.userName}
        onChange={(e) => {
          handleInputChange("userName", e.target.value);
        }}
        onBlur={handleOnBlur}
        error={inputErrors.userNameError}
        helpText={error.message}
      />
      <CustomInputField
        startIcon="/assets/email.svg"
        label={textConst.email}
        id={textConst.email}
        onChange={(e) => {
          handleInputChange("email", e.target.value);
        }}
        error={inputErrors.emailError}
        helpText="* Please enter a valid email"
        onBlur={handleOnBlur}
      />
      <CustomInputField
        startIcon="/assets/lock.svg"
        label={textConst.password}
        id={textConst.password}
        endIcon="/assets/eye.svg"
        type={passwordType ? "text" : "password"}
        endIconClick={handleEndIconClick}
        onChange={(e) => {
          handleInputChange("password", e.target.value);
        }}
        error={inputErrors.passwordError}
        helpText="* Minimum length should 8 character"
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default InputFields;
