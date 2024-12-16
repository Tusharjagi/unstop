"use client";

import { useRef } from "react";
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
}: CustomInputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.input_filed} onClick={handleFocus}>
      {startIcon ? <Image src={startIcon} alt="icon" width={28} height={28} /> : null}
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
      {endIcon ? <Image src={endIcon} alt="icon" width={28} height={28} /> : null}
    </div>
  );
};

export default CustomInputField;
