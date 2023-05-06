import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../components";
import { Card } from "../components/@common/card/card";
import { PATH } from "../constants/path";
import { useGenericLocation } from "../hooks/useGenericLocation";
import { CardInfo } from "../type/card";
import { setData } from "../utils/localStorage";

export function AddCardNicknamePage() {
  const state: CardInfo = useGenericLocation(useLocation());
  const navigate = useNavigate();
  const nicknameInput = useRef<HTMLInputElement>(null);

  function completeInputNickname() {
    const userCardInfo = { ...state };
    if (nicknameInput.current !== null) {
      userCardInfo.nickname = nicknameInput.current.value;
    }
    setData(userCardInfo);
    navigate(PATH.CARD_LIST);
  }

  return (
    <Container>
      <Title>카드 등록이 완료되었습니다</Title>
      <Card {...state} />
      <Form>
        <Input>
          <Input.Group asChild>
            <NicknameInutGroup>
              <Input.Unit
                name="nickname"
                maxLength={15}
                placeholder="카드의 별명을 입력해주세요 (선택)"
                ref={nicknameInput}
                asChild>
                <NicknameInput />
              </Input.Unit>
            </NicknameInutGroup>
          </Input.Group>
        </Input>
        <CompleteButton onClick={completeInputNickname}>확인</CompleteButton>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 4rem;

  ${({ theme }) => theme.fonts.title}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompleteButton = styled.button`
  width: 5rem;

  margin-top: 2rem;
  padding: 0.5rem 0.1rem;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray200};
`;

const NicknameInput = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;

  width: 22rem;
  border-bottom: 0.2rem solid black;
  outline: none;
  background-color: transparent;
`;

const NicknameInutGroup = styled.div`
  margin-top: 4rem;
  background-color: transparent;
`;