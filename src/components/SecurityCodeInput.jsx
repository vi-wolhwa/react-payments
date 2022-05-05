import React from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN } from '../validator';
import { MAX_LENGTH } from '../constants';
import Input from './Input';

function SecurityCodeInput({ value, name, updateCard }) {
  return (
    <Input
      size="w-25"
      type="password"
      length={MAX_LENGTH.SECURITY_CODE}
      value={value}
      name={name}
      updateCard={updateCard}
      validators={[
        validator(checkMaxLength, value, MAX_LENGTH.SECURITY_CODE),
        validator(checkIsNaN, value),
      ]}
    />
  );
}

SecurityCodeInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

export default SecurityCodeInput;