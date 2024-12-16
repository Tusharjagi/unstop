import textConst from "@/utils/textConst";
import CustomInputField from "../custom-input-fields";
import styles from "./index.module.scss";

const InputFields = () => {
  return (
    <div className={styles.input_fields}>
      <CustomInputField startIcon="/assets/profile.svg" label={textConst.userName} id={textConst.userName} />
      <CustomInputField startIcon="/assets/email.svg" label={textConst.email} id={textConst.email} />
      <CustomInputField
        startIcon="/assets/lock.svg"
        label={textConst.password}
        id={textConst.password}
        endIcon="/assets/eye.svg"
      />
    </div>
  );
};

export default InputFields;
