import{C}from"./CardNumberTextField-BWnDAD5C.js";import{g as s}from"./generateArgTypes-BCaYmxeQ.js";import{f as l}from"./index-2ywIqtt-.js";import{E}from"./errorMessage-DP14ozpx.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";import"./TextField-DUeZmIQx.js";import"./CardNumberInput-DC57cIFJ.js";import"./Input-Dc2lgE4t.js";const R={title:"Payments/CardNumberTextField",component:C,parameters:{layout:"centered",docs:{description:{component:"사용자로부터 카드 번호 관련 설명 및 입력을 제공하는 컴포넌트"}}},argTypes:{cardNumbers:{control:"array",defaultValue:["","","",""],description:"각 카드 번호들"},cardNumberError:{...s({control:"object"}),description:"에러 상태 및 에러 메시지를 포함한 객체"},onAddCardNumber:{...s({control:"function"}),description:"카드 번호를 추가하기 위한 이벤트 핸들러"}},args:{cardNumberError:{isError:!1,errorMessage:""},cardNumbers:["","","",""],onAddCardNumber:l()},tags:["autodocs"]},r={parameters:{docs:{description:{story:"컴포넌트의 기본 상태"}}}},e={parameters:{docs:{description:{story:"유효하지 않은 값을 입력하려고 시도할 떄의 상태"}}},args:{cardNumberError:{isError:!0,errorMessage:E.invalidCardNumberInput}}},o={parameters:{docs:{description:{story:"완전히 입력되었을 때의 상태"}}},args:{cardNumbers:["5500","0000","0000","0000"]}};var a,t,u;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태'
      }
    }
  }
}`,...(u=(t=r.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '유효하지 않은 값을 입력하려고 시도할 떄의 상태'
      }
    }
  },
  args: {
    cardNumberError: {
      isError: true,
      errorMessage: ERROR_MESSAGE.invalidCardNumberInput
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,i,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '완전히 입력되었을 때의 상태'
      }
    }
  },
  args: {
    cardNumbers: ['5500', '0000', '0000', '0000']
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const M=["Default","InvalidValueError","Complete"];export{o as Complete,r as Default,e as InvalidValueError,M as __namedExportsOrder,R as default};
