import Image from "next/image";
import textConst from "@/utils/textConst";
import styles from "./index.module.scss";

const socialLogins = [
  { src: "/assets/google.svg", alt: "google-image", text: textConst.google },
  { src: "/assets/facebook.svg", alt: "facebook-image", text: textConst.facebook },
];

const SocialLoginButtons: React.FC = () => {
  return (
    <div className={styles.social_logins}>
      {socialLogins.map((login, index) => (
        <button key={index} className={styles.social_btns}>
          <span>
            <Image src={login.src} alt={login.alt} width={28} height={28} />
          </span>
          <span>{login.text}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;
