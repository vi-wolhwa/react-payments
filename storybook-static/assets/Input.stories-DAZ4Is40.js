import{I as i}from"./Input-Dc2lgE4t.js";import{g as r}from"./generateArgTypes-BCaYmxeQ.js";import{f as u}from"./index-2ywIqtt-.js";import"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const f={title:"Base/Input",component:i,parameters:{layout:"centered",docs:{description:{component:"사용자로부터 정보를 입력받기 위한 필드를 제공하는 컴포넌트"}}},argTypes:{placeholder:{...r({control:"text"}),description:"입력 전 보여지는 text"},value:{...r({control:"text"}),description:"입력한 값"},onChange:{...r({control:"function"}),description:"입력 시 동작하는 이벤트 핸들러"},isError:{...r({control:"boolean"}),description:"에러 state"},maxLength:{...r({control:"number",min:4,max:4,step:0}),description:"입력 가능한 최대 값"}},args:{placeholder:"1234",value:"",onChange:u(),isError:!1,maxLength:4},tags:["autodocs"]},e={parameters:{docs:{description:{story:"기본 상태일 때의 Input"}}}},o={parameters:{docs:{description:{story:"에러 상태일 때의 input"}}},args:{isError:!0}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '기본 상태일 때의 Input'
      }
    }
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,c,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '에러 상태일 때의 input'
      }
    }
  },
  args: {
    isError: true
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Default","Error"];export{e as Default,o as Error,E as __namedExportsOrder,f as default};
