import styled from 'styled-components';

const Header = styled.header`
  display: flex;

  padding: 2px 0;
  margin: 0 0 20px;
`;

const Title = styled.h1`
  font-size: 16px;
  color: #383838;
`;

const GuideMessage = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 24px;
  color: #383838;
`;

export { Header, Title, GuideMessage };