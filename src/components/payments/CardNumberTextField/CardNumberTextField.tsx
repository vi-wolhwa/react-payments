import TextField from '@components/common/TextField/TextField';
import CardNumberInput from '@components/payments/CardNumberInput/CardNumberInput';
import { createRef, useRef } from 'react';

interface CardNumberTextFieldProps {
  cardNumbers: string[];
  onAddCardNumber: (index: number, value: string) => void;
  cardNumberError: { isError: boolean; errorMessage: string };
}

const CardNumberTextField: React.FC<CardNumberTextFieldProps> = ({ cardNumbers, onAddCardNumber, cardNumberError }) => {
  const inputRefs = useRef(cardNumbers.map(() => createRef() as React.RefObject<HTMLInputElement>));

  return (
    <section>
      <TextField.Title title="결제할 카드 번호를 입력해 주세요" />
      <TextField.SubTitle subTitle="본인 명의의 카드만 결제 가능합니다." />
      <TextField.Label htmlFor="cardNumber" labelText="카드 번호" />
      <TextField.Content>
        {cardNumbers.map((cardNumber, index) => (
          <CardNumberInput
            id={index === 0 ? 'cardNumber' : ''}
            key={index}
            isError={cardNumberError.isError}
            value={cardNumber}
            onAddCardNumber={(event) => onAddCardNumber(index, String(event.target.value))}
            ref={inputRefs.current[index]}
            nextRef={inputRefs.current[index + 1]}
          />
        ))}
      </TextField.Content>
      <TextField.ErrorText errorText={cardNumberError.errorMessage} />
    </section>
  );
};

export default CardNumberTextField;
