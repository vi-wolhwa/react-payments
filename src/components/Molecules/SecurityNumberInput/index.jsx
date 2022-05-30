import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockInput } from 'components/Atoms/Input';
import InputLabel from 'components/Atoms/InputLabel';
import Tooltip from 'components/Atoms/Tooltip';
import MESSAGE from 'constant/message';
import { CLASS } from 'constant/selector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  gap: 7px;
`;

const InputBody = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InvalidMessage = styled.span`
  position: absolute;
  word-break: normal;
  bottom: -14px;
  width: 300px;
  overflow: visible;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: red;
`;

function SecurityNumberInput({
  securityNumber,
  handleInputChange,
  isValid,
  invalidMessage,
  width,
}) {
  return (
    <Container width={width}>
      <InputLabel label="보안 코드(CVC/CVV)" />
      <InputBody>
        <BlockInput
          className={CLASS.INPUT_SECURITY_NUMBER}
          style={{
            width: '84px',
          }}
          value={securityNumber}
          onChange={handleInputChange}
          type="password"
          maxLength="3"
          isValid={isValid}
        />
        <Tooltip message={MESSAGE.TOOLTIP_SECURITY_NUMBER} margin="0 0 0 11px" />
      </InputBody>
      {isValid || !securityNumber ? (
        ''
      ) : (
        <InvalidMessage className={CLASS.INVALID_INPUT_MESSAGE}>{invalidMessage}</InvalidMessage>
      )}
    </Container>
  );
}

SecurityNumberInput.propTypes = {
  securityNumber: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default SecurityNumberInput;
