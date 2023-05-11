import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';

const CardAliasInput = (props: InputStateProps) => {
  const inputs: InputType[] = [
    {
      textType: 'text',
      maxLength: 15,
      placeholder: '카드의 별칭을 입력해주세요.',
      inputValue: props.inputValue,
      setInputValues: props.setInputValue,
    },
  ];
  return (
    <InputSectionTemplate
      label="카드 별칭(선택)"
      isCountLength
      inputValue={props.inputValue}
      maxLength={inputs[0].maxLength}
    >
      <InputBox inputs={inputs} align="left" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default CardAliasInput;
