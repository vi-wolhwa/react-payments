import{j as e}from"./jsx-runtime-BnIj46N_.js";import{T as r}from"./TextField-DUeZmIQx.js";import{E as s}from"./ExpirationDateInput-OX29aQK0.js";const x=({month:a,year:l,onAddExpirationDate:o,expirationDateError:t})=>e.jsxs("section",{children:[e.jsx(r.Title,{title:"카드 유효기간을 입력해 주세요"}),e.jsx(r.SubTitle,{subTitle:"월/년도(MMYY)를 순서대로 입력해 주세요."}),e.jsx(r.Label,{htmlFor:"expiration",labelText:"유효 기간"}),e.jsxs(r.Content,{children:[e.jsx(s,{id:"expiration",placeholder:"MM",isError:t.isError.month,value:a,onAddExpirationDate:i=>o("month",i.target.value)}),e.jsx(s,{placeholder:"YY",isError:t.isError.year,value:l,onAddExpirationDate:i=>o("year",i.target.value)})]}),e.jsx(r.ErrorText,{errorText:t.errorMessage})]});x.__docgenInfo={description:"",methods:[],displayName:"ExpirationDateTextField"};export{x as E};
