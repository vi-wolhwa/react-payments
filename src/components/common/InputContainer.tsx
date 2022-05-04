import React from "react";
import { Validation } from "types/cardInfo";

import Message from "./Message";

interface InputContainerProps {
  children: React.ReactNode;
  title: string;
  validation?: Validation;
  rightContent?: JSX.Element;
}

export default function InputContainer({
  children,
  title,
  validation,
  rightContent,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span>
          <label className="input-title">{title}</label>
          {validation &&
            (validation.isValid ? (
              <Message type="success">{validation.successMsg}</Message>
            ) : (
              validation.errorMsg && <Message type="fail">{validation.errorMsg}</Message>
            ))}
        </span>
        {rightContent}
      </div>
      {children}
    </div>
  );
}