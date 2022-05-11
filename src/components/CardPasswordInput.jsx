import React from 'react';

import InputField from './common/InputField.jsx';
import Input from './common/Input.jsx';

import { ADD_CARD_FORM_CONDITION, ADD_CARD_FORM_ERROR_MESSAGE, CREATE_MASKED_CHARACTERS } from '../constants';

export default function CardPasswordInput({ password, onChange, isInvalid, isComplete }) {
  return (
    <InputField
      labelText="카드 비밀번호 앞 두 자리"
      wrapperWidth="15%"
      horizontalAlign="flex-start"
      isComplete={isComplete}
      isError={isInvalid}
      errorMessage={ADD_CARD_FORM_ERROR_MESSAGE.PASSWORD}
      separateEachInput={true}>
      {Array.from({ length: ADD_CARD_FORM_CONDITION.PASSWORD_LENGTH }).map((_, index) => (
        <Input
          key={index}
          type="password"
          value={password[index]}
          maxLength="1"
          onChange={e => onChange(e.target.value, index)}
          width="100%"
          placeholder={CREATE_MASKED_CHARACTERS(1)}
          data-testid={`card-password-input-${index}`}
        />
      ))}
    </InputField>
  );
}