import Card from "../common/Card";
import styled from "styled-components";

import { CardType } from "../../types/card";
import { DEFAULT_NAME, DEFAULT_BRAND, FONT_COLORMAP, BACKGROUND_COLORMAP } from "../../constants";

import { getShownNumbers, gethiddenNumbers, normalizeExpiryDate } from "../../utils/card";

interface CardProps {
  card: CardType;
  handleClick?: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;
}

const CardItem = ({ card, handleClick }: CardProps) => {
  const { numbers, expiryDate, owner = DEFAULT_NAME, brand = DEFAULT_BRAND } = card;

  return (
    <Card $backgroundColor={BACKGROUND_COLORMAP[brand]}>
      <Container $color={FONT_COLORMAP[brand]} onClick={handleClick}>
        <Brand>{brand}</Brand>
        <IcChip />
        <Numbers>
          <ShownNumbers>{getShownNumbers(numbers)}</ShownNumbers>
          <HiddenNumbers>{gethiddenNumbers(numbers)}</HiddenNumbers>
        </Numbers>
        <InfoWrapper>
          <Name>{owner}</Name>
          <ExpiryDate>{normalizeExpiryDate(expiryDate)}</ExpiryDate>
        </InfoWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 183px;
  height: 100px;

  font-size: 10px;
  font-weight: 500;
  color: ${(props) => props.$color};

  white-space: pre;
`;

const IcChip = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;

  margin-top: 17px;
`;

const Brand = styled.div`
  font-size: 11px;
  font-weight: 400;
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;

  margin-top: 7px;
`;

const ShownNumbers = styled.div`
  text-align: center;
  height: 15px;

  margin-left: 2px;

  font-size: 11px;
  letter-spacing: 3px;
`;

const HiddenNumbers = styled.div`
  height: 15px;
  padding-top: 2px;

  font-size: 10px;
  letter-spacing: 3.5px;

  margin-left: 11px;
  zoom: 0.8;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 110px;
  height: 11px;

  margin-left: 2px;

  font-size: 11px;
`;

const ExpiryDate = styled.div`
  margin-right: 2px;
  font-size: 11px;
`;

export default CardItem;