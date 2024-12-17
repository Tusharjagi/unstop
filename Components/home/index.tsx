"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./index.module.scss";
import textConst from "@/utils/textConst";
import SocialLoginButtons from "../socialButtons";
import InputFields from "../input-fields";

interface FormData {
  userName: string;
  email: string;
  password: string;
}

interface InputErrors {
  userNameError: boolean;
  emailError: boolean;
  passwordError: boolean;
}

interface ErrorsType {
  message: string;
}

const Home = (): JSX.Element => {
  const router = useRouter();

  const [error, setError] = useState<ErrorsType>({ message: "" });
  console.log("error:", error);
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState<InputErrors>({
    userNameError: false,
    emailError: false,
    passwordError: false,
  });

  const handleInputChange = (id: string, value: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    if (id === "password") setError({ message: "" });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isValidEmail = emailRegex.test(value);
    if (id === "email") {
      if (isValidEmail) {
        setInputErrors((prev) => ({
          ...prev,
          emailError: false,
        }));
      } else {
        setInputErrors((prev) => ({
          ...prev,
          emailError: true,
        }));
      }
    }
    if (id === "password") {
      if (formData.password.length < 8) {
        setInputErrors((prev) => ({
          ...prev,
          passwordError: true,
        }));
      } else {
        setInputErrors((prev) => ({
          ...prev,
          passwordError: false,
        }));
      }
    }
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.userName,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        console.error("Invalid credentials");
      }
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("userData", JSON.stringify(data));
        router.push("/auth/login");
      } else {
        const data = await res.json();
        setError(data);
        setInputErrors((prev) => ({
          ...prev,
          userNameError: true,
        }));
      }
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      setError({ message: (error as Error).message || "An unexpected error occurred" });
      console.error("Error:", error);
    }
  };

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
          <InputFields
            handleInputChange={handleInputChange}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
            error={error}
          />
          <div className={styles.checkbox_wrapper}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">{textConst.rememberMe}</label>
            </div>
            <div role="button" className={styles.forgot_password}>
              {textConst.forgotPassword}
            </div>
          </div>
          <button
            className={styles.login_btn}
            onClick={(e) => {
              handleLogin(e).catch((error) => {
                console.error("Error during login:", error);
              });
            }}
            disabled={Boolean(!formData.email && !formData.userName && !formData.password)}
          >
            {textConst.login}
          </button>
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
