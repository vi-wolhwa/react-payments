import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardPassword } from "../../types";

type CardPasswordInputProps = {
  password: CardPassword;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardPasswordInput = ({ password, onChange }: CardPasswordInputProps) => {
  const { first, second } = password;

  return (
    <Label>
      카드 비밀번호
      <Div>
        <InputContainer width="43px">
          <Input
            name="first"
            value={first}
            textAlign="center"
            inputMode="numeric"
            width="100%"
            type="password"
            maxLength={1}
            required
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer width="43px">
          <Input
            name="second"
            value={second}
            textAlign="center"
            inputMode="numeric"
            width="100%"
            type="password"
            maxLength={1}
            required
            onChange={onChange}
          />
        </InputContainer>
        <PasswordIcon>•</PasswordIcon>
        <PasswordIcon>•</PasswordIcon>
      </Div>
    </Label>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const PasswordIcon = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: transparent;

  height: 45px;
  width: 43px;

  border: 0;
  border-radius: 7px;
  padding: 0 12px;
  margin-top: 3px;

  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0em;
`;

export default CardPasswordInput;
