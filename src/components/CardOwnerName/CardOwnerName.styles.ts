import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 4px;

  & > * {
    width: 100%;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
