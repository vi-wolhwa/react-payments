import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import FormCardAdd from '../components/FormCardAdd';
import Header from '../components/Header';
import useInput from '../hooks/useInput';
import usePasswordInput from '../hooks/usePasswordInput';
import type { CardNumber, InputHook } from '../type';
import { formatExpireDate, handleNumberInput } from '../utils/processData';
import { isNumberInput, stringToUpperCase } from '../utils/util';
import {
  cardExpireCondition,
  cardOwnerCondition,
  cardPasswordCondition,
  securityCodeCondition,
} from '../utils/validate';
import './AddCardPage.css';

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType] = useState('');

  const [cardNumber, onChangeCardNumber] = usePasswordInput<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const cardExpire = useInput('', cardExpireCondition, formatExpireDate);
  const securityCode = useInput('', securityCodeCondition, handleNumberInput);
  const cardOwner = useInput('', cardOwnerCondition, stringToUpperCase);
  const cardPassword1 = useInput('', cardPasswordCondition, handleNumberInput);
  const cardPassword2 = useInput('', cardPasswordCondition, handleNumberInput);

  const onBackButtonClick = () => {
    navigate('/');
  };

  const cardNumberProps: InputHook<CardNumber> = {
    value: cardNumber,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
  };

  return (
    <div className="add-card-page">
      <Header headerTitle="뒤로가기" clickHandler={onBackButtonClick} />
      <section className="add-card-page-body">
        <Card
          cardType={cardType}
          cardNumber={cardNumber}
          cardOwner={cardOwner.value}
          expired={cardExpire.value}
        />
        <FormCardAdd
          cardNumber={cardNumberProps}
          cardExpire={cardExpire}
          cardOwner={cardOwner}
          securityCode={securityCode}
          cardPassword1={cardPassword1}
          cardPassword2={cardPassword2}
        />
      </section>
    </div>
  );
};

export default AddCardPage;