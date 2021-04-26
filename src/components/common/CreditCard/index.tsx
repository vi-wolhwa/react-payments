import { formatNumber2Digits } from '../../../utils/format';
import Container from '../Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../../types';

interface Props extends Omit<Card, 'id' | 'CVC' | 'password'> {
  className?: string;
  size?: 'lg' | 'md';
}

const CreditCard = ({ className, size, cardBrand, ownerName, cardNumber, expDate }: Props) => {
  const splitedCardNumber = cardNumber.split('-');
  const { name, color } = cardBrand;

  return (
    <CreditCardContainer className={className} size={size} cardColor={color}>
      <p className="card-name">{name}</p>
      <div className="ic-chip" />
      <p className="card-number">
        <span>{splitedCardNumber[0]}</span>
        <span>{splitedCardNumber[1]}</span>
        <span>{'·'.repeat(splitedCardNumber[2].length)}</span>
        <span>{'·'.repeat(splitedCardNumber[3].length)}</span>
      </p>
      <Container flex justifyContent="space-between" className="info-wrapper">
        <p className="owner-name">{ownerName || 'NAME'}</p>
        <p>
          {expDate.month ? formatNumber2Digits(Number(expDate.month)) : 'MM'} /{' '}
          {expDate.year ? formatNumber2Digits(Number(expDate.year)) : 'YY'}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
