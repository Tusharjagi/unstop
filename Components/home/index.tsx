import Image from "next/image";
import styles from "./index.module.scss";
import textConst from "@/utils/textConst";
import SocialLoginButtons from "../socialButtons";
import InputFields from "../input-fields";

const Home = () => {
  return (
    <div id="login_page" className={styles.login_wrapper}>
      <div className={styles.image_container}>
        <Image src="/assets/login.svg" alt="login-image" width={400} height={600} />
      </div>
      <div className={styles.login_container}>
        <div className={styles.login}>
          <div className={styles.heading}>
            <p>{textConst.welcomeTo}</p>
            <strong>{textConst.unstop}</strong>
          </div>
          <SocialLoginButtons />
          <div className={styles.hr_with_text}>
            <span>{textConst.or}</span>
          </div>
          <InputFields />
          <div className={styles.checkbox_wrapper}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">{textConst.rememberMe}</label>
            </div>
            <div role="button" className={styles.forgot_password}>
              {textConst.forgotPassword}
            </div>
          </div>
          <button className={styles.login_btn}>{textConst.login}</button>
          <div className={styles.bottom}>
            <span>{textConst.doNotHavingAccount}</span>
            <span className={styles.register}>{textConst.register}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
