import{E as y}from"./ExpirationDateTextField-fyrLFzzj.js";import{g as r}from"./generateArgTypes-BCaYmxeQ.js";import{f}from"./index-2ywIqtt-.js";import{E as g}from"./errorMessage-DP14ozpx.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";import"./TextField-DUeZmIQx.js";import"./ExpirationDateInput-OX29aQK0.js";import"./Input-Dc2lgE4t.js";const I={title:"Payments/ExpirationDateTextField",component:y,parameters:{layout:"centered",docs:{description:{component:"사용자로부터 유효 기간 관련 설명 및 입력을 제공하는 컴포넌트"}}},argTypes:{month:{...r({control:"text"}),description:"유효기간에 포함된 월"},year:{...r({control:"text"}),description:"유효기간에 포함된 년도"},expirationDateError:{...r({control:"object"}),description:"에러 메시지 및 상태를 포함"},onAddExpirationDate:{...r({control:"function"}),description:"유효기간을 추가하기 위한 이벤트 핸들러"}},args:{month:"",year:"",expirationDateError:{isError:{month:!1,year:!1},errorMessage:""},onAddExpirationDate:f()},tags:["autodocs"]},e={},o={parameters:{docs:{description:{story:"유효하지 않은 `월`를 입력하려고 시도할 때의 상태"}}},args:{expirationDateError:{isError:{month:!0,year:!1},errorMessage:g.invalidMonthInput}}},t={parameters:{docs:{description:{story:"유효하지 않은 `연도`를 입력하려고 시도할 때의 상태"}}},args:{expirationDateError:{isError:{month:!1,year:!0},errorMessage:g.invalidYearInput}}},a={parameters:{docs:{description:{story:"올바른 유효기간을 입력한 상태"}}},args:{month:"5",year:"24"}};var n,s,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,p,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '유효하지 않은 \`월\`를 입력하려고 시도할 때의 상태'
      }
    }
  },
  args: {
    expirationDateError: {
      isError: {
        month: true,
        year: false
      },
      errorMessage: ERROR_MESSAGE.invalidMonthInput
    }
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,C,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '유효하지 않은 \`연도\`를 입력하려고 시도할 때의 상태'
      }
    }
  },
  args: {
    expirationDateError: {
      isError: {
        month: false,
        year: true
      },
      errorMessage: ERROR_MESSAGE.invalidYearInput
    }
  }
}`,...(d=(C=t.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var E,D,l;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '올바른 유효기간을 입력한 상태'
      }
    }
  },
  args: {
    month: '5',
    year: '24'
  }
}`,...(l=(D=a.parameters)==null?void 0:D.docs)==null?void 0:l.source}}};const O=["Default","MonthError","YearError","Complete"];export{a as Complete,e as Default,o as MonthError,t as YearError,O as __namedExportsOrder,I as default};
