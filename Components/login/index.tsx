import textConst from "@/utils/textConst";
import Image from "next/image";
import styles from "./index.module.scss";

const Login = () => {
  return (
    <div className={styles.login_wrapper}>
      <div className={styles.heading}>
        <p>{textConst.welcomeTo}</p>
        <strong>{textConst.unstop}</strong>
      </div>
      <div className={styles.card}>
        <span>
          <Image src="/assets/user-profile.svg" alt="user-profile" width={120} height={120} />
        </span>
        <p className={styles.user_name}>User Name</p>
        <p>Email @gmail.com</p>
        <p>Female</p>
        <button className={styles.logout_btn}>{textConst.logout}</button>
      </div>
    </div>
  );
};

export default Login;
