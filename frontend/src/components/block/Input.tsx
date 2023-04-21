import React, { FC } from "react";
import { useForm } from "react-hook-form";

interface InputProps {
  type?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  type = "text",
  label,
  name,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="input-field">
      {label && (
        <p className="input-field__label">
          <label>{label}</label>
        </p>
      )}
      <div className="input-field__input">
        <input type={type} placeholder={placeholder} {...register(name)} />
      </div>
      {errors[name] && (
        <p className="input-field__error" role="alert">
          Error
        </p>
      )}
    </div>
  );
};
