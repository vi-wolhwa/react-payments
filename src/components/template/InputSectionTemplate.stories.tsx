import InputSectionTemplate from './InputSectionTemplate';
import InputBox from '../common/InputBox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputSectionTemplate',
  component: InputSectionTemplate,
};

export const InputNumberType = () => {
  return (
    <InputSectionTemplate label="숫자">
      <InputBox
        inputs={[{ textType: 'number', maxLength: 10, inputValue: '1234', setInputValues: () => {} }]}
        align="center"
      />
    </InputSectionTemplate>
  );
};

export const InputNameType = () => {
  const inputValue = '강상원';
  return (
    <InputSectionTemplate label="이름" isCountLength maxLength={10} inputValue={inputValue}>
      <InputBox
        inputs={[{ textType: 'text', maxLength: 10, inputValue: inputValue, setInputValues: () => {} }]}
        align="left"
        isFullWidth
      />
    </InputSectionTemplate>
  );
};

export const InputPasswordType = () => {
  return (
    <InputSectionTemplate label="비밀번호">
      <InputBox
        inputs={[
          {
            textType: 'number',
            maxLength: 1,
            textSecurity: true,
            inputValue: '1',
            setInputValues: () => {},
          },
        ]}
        align="center"
      />
      <InputBox
        inputs={[
          {
            textType: 'number',
            maxLength: 1,
            textSecurity: true,
            inputValue: '1',
            setInputValues: () => {},
          },
        ]}
        align="center"
      />
      <InputBox
        inputs={[
          {
            textType: 'number',
            maxLength: 1,
            textSecurity: true,
            inputValue: '1',
            setInputValues: () => {},
          },
        ]}
        align="center"
      />
      <InputBox
        inputs={[
          {
            textType: 'number',
            maxLength: 1,
            textSecurity: true,
            inputValue: '1',
            setInputValues: () => {},
          },
        ]}
        align="center"
      />
    </InputSectionTemplate>
  );
};

export const InputPhoneNumberType = () => {
  return (
    <InputSectionTemplate label="전화번호">
      <InputBox
        inputs={[
          { textType: 'number', maxLength: 3, inputValue: '010', setInputValues: () => {} },
          { textType: 'number', maxLength: 4, inputValue: '1234', setInputValues: () => {} },
          { textType: 'number', maxLength: 4, inputValue: '5678', setInputValues: () => {} },
        ]}
        align="center"
        separator="-"
      />
    </InputSectionTemplate>
  );
};
