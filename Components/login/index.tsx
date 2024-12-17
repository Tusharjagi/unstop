"use client";

import textConst from "@/utils/textConst";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const userData = typeof window !== "undefined" && JSON.parse((window.localStorage.getItem("userData") ?? "") || "{}");

  const handleLogout = (): void => {
    router.push("/");
    window.localStorage.removeItem("userData");
  };

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
        <p className={styles.user_name}>{`${userData.firstName} ${userData.lastName}`}</p>
        <p>{userData.email}</p>
        <p style={{ textTransform: "capitalize" }}>{userData.gender}</p>
        <button className={styles.logout_btn} onClick={handleLogout}>
          {textConst.logout}
        </button>
      </div>
    </div>
  );
};

export default Login;
