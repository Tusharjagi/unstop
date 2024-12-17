"use client";

import { JSX, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

interface CustomInputFieldProps {
  label: string;
  startIcon?: string;
  endIcon?: string;
  id: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  endIconClick?: () => void;
  error?: boolean;
  helpText?: string;
}

const CustomInputField = ({
  label,
  startIcon,
  endIcon,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  onClick,
  endIconClick,
  error,
  helpText,
}: CustomInputFieldProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (): void => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`${helpText && error ? styles.error_input_filed : styles.input_filed}`} onClick={handleFocus}>
      {typeof startIcon === "string" && startIcon.trim() !== "" && (
        <Image src={startIcon} alt="icon" width={28} height={28} />
      )}
      <div className={styles.label}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
        />
      </div>
      {typeof endIcon === "string" && endIcon.trim() !== "" && (
        <Image src={endIcon} alt="icon" width={28} height={28} onClick={endIconClick} style={{ cursor: "pointer" }} />
      )}
      {helpText && error && <p className={styles.help_text}>{helpText}</p>}
    </div>
  );
};

export default CustomInputField;
