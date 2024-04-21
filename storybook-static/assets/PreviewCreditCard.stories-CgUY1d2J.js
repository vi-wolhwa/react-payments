import{P as C}from"./PreviewCreditCard-Cx7NOx6Q.js";import{g as o}from"./generateArgTypes-BCaYmxeQ.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const B={title:"Payments/PreviewCreditCard",component:C,parameters:{layout:"centered",docs:{description:{component:"사용자의 카드 정보를 신용카드 형태로 보여주는 컴포넌트"}}},argTypes:{cardNumbers:{control:"array",description:"카드 번호 16자리"},expirationDate:{...o({control:"object"}),description:"유효기간(YY/MM)"},ownerName:{...o({control:"text"}),description:"소유자 이름"}},args:{cardNumbers:["","","",""],expirationDate:{month:"",year:""},ownerName:""},tags:["autodocs"]},r={parameters:{docs:{description:{story:"컴포넌트의 기본 상태"}}}},e={parameters:{docs:{description:{story:"비자 카드를 입력했을 때의 상태"}}},args:{cardNumbers:["4123","1231","2342","4535"],expirationDate:{month:"05",year:"28"},ownerName:"NAMSUMIN"}},a={parameters:{docs:{description:{story:"마스터 카드를 입력했을 때의 상태"}}},args:{cardNumbers:["5012","3456","7890","0000"],expirationDate:{month:"05",year:"28"},ownerName:"NAMSUMIN"}};var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태'
      }
    }
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var u,c,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '비자 카드를 입력했을 때의 상태'
      }
    }
  },
  args: {
    cardNumbers: ['4123', '1231', '2342', '4535'],
    expirationDate: {
      month: '05',
      year: '28'
    },
    ownerName: 'NAMSUMIN'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '마스터 카드를 입력했을 때의 상태'
      }
    }
  },
  args: {
    cardNumbers: ['5012', '3456', '7890', '0000'],
    expirationDate: {
      month: '05',
      year: '28'
    },
    ownerName: 'NAMSUMIN'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const M=["Default","VisaCard","MasterCard"];export{r as Default,a as MasterCard,e as VisaCard,M as __namedExportsOrder,B as default};
