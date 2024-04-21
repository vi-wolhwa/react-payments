import{O as C}from"./OwnerNameTextField-DIBo0VMV.js";import{g as s}from"./generateArgTypes-BCaYmxeQ.js";import{f as E}from"./index-2ywIqtt-.js";import{E as N}from"./errorMessage-DP14ozpx.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";import"./TextField-DUeZmIQx.js";import"./OwnerNameInput-BKi_TtOY.js";import"./Input-Dc2lgE4t.js";const M={title:"Payments/OwnerNameTextField",component:C,parameters:{layout:"centered",docs:{description:{component:"사용자로부터 소유자 이름 관련 설명 및 입력을 제공하는 컴포넌트"}}},argTypes:{ownerName:{...s({control:"text"}),description:"소유자 이름"},ownerNameError:{...s({control:"object"}),description:"에러 메시지 및 상태를 포함"},onAddOwnerName:{...s({control:"function"}),description:"소유자 이름을 추가하기 위한 이벤트 핸들러"}},args:{ownerName:"",ownerNameError:{isError:!1,errorMessage:""},onAddOwnerName:E()},tags:["autodocs"]},r={parameters:{docs:{description:{story:"컴포넌트의 기본 상태"}}}},e={parameters:{docs:{description:{story:"영문을 입력하지 않았을 때의 상태"}}},args:{ownerNameError:{isError:!0,errorMessage:N.invalidOwnerNameInput}}},o={parameters:{docs:{description:{story:"완전히 입력되었을 때의 상태"}}},args:{ownerName:"NAMSUMIN"}};var n,a,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태'
      }
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var m,u,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '영문을 입력하지 않았을 때의 상태'
      }
    }
  },
  args: {
    ownerNameError: {
      isError: true,
      errorMessage: ERROR_MESSAGE.invalidOwnerNameInput
    }
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,i,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '완전히 입력되었을 때의 상태'
      }
    }
  },
  args: {
    ownerName: 'NAMSUMIN'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["Default","OwnerNameError","Complete"];export{o as Complete,r as Default,e as OwnerNameError,S as __namedExportsOrder,M as default};
