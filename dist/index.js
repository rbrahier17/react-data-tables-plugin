/* eslint-disable no-unused-expressions */
import "./index.css"; "use strict";Object.defineProperty(exports, "__esModule", {value: true});var _react = require('react');function I(a,e,r){if(e=e||r,(t=>/^#([0-9A-Fa-f]{6})$/.test(t))(e)||(console.error(`Invalid format for property '${a}', please enter a valid hexadecimal format with 7 characters, for example, '#007bff'.`),e=r),a==="--main-color"){let t=e+"D9",n=e+"33";document.documentElement.style.setProperty(a,e),document.documentElement.style.setProperty(a+"-opacity-85",t),document.documentElement.style.setProperty(a+"-opacity-20",n)}else document.documentElement.style.setProperty(a,e)}function B(a,e){let{column:r,order:o}=e;return[...a].sort((t,n)=>{let s=t[r],d=n[r];return s<d?o==="asc"?-1:1:s>d?o==="asc"?1:-1:0})}var _jsxruntime = require('react/jsx-runtime');function P({columns:a,sorting:e,onSortingChange:r}){let o=t=>{r({column:t,order:e.column===t&&e.order==="asc"?"desc":"asc"})};return _jsxruntime.jsx.call(void 0, "thead",{id:"TableHeader","data-testid":"table-header",children:_jsxruntime.jsx.call(void 0, "tr",{children:a.map((t,n)=>_jsxruntime.jsx.call(void 0, "th",{children:_jsxruntime.jsx.call(void 0, "div",{children:_jsxruntime.jsxs.call(void 0, "button",{type:"button",className:`sort-button ${e.column===t.data?e.order:""}`,onClick:()=>o(t.data),children:[t.title,_jsxruntime.jsxs.call(void 0, "div",{className:"arrow-container",children:[_jsxruntime.jsx.call(void 0, "span",{className:`arrow-up ${e.column===t.data&&e.order==="asc"?"active":""}`}),_jsxruntime.jsx.call(void 0, "span",{className:`arrow-down ${e.column===t.data&&e.order==="desc"?"active":""}`})]})]})})},n))})})}function C({columns:a,displayedData:e}){return _jsxruntime.jsx.call(void 0, "tbody",{id:"TableBody","data-testid":"table-body",children:e.length===0?_jsxruntime.jsx.call(void 0, "tr",{children:_jsxruntime.jsx.call(void 0, "td",{colSpan:a.length,id:"TableBody_no-data","data-testid":"table-body-no-data",children:_jsxruntime.jsx.call(void 0, "div",{children:"No data available"})})}):e.map((r,o)=>_jsxruntime.jsx.call(void 0, "tr",{children:a.map((t,n)=>_jsxruntime.jsx.call(void 0, "td",{"data-testid":`data-cell-for-column-${t.data}`,children:_jsxruntime.jsx.call(void 0, "div",{children:r[t.data]})},"TD-col"+n+"-row"+o))},"TR-"+o))})}function S({numberOfEntries:a,onEntriesChange:e}){return _jsxruntime.jsxs.call(void 0, "div",{id:"TableEntriesSelector","data-testid":"table-entries-selector",children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"entries",children:"Show"}),_jsxruntime.jsx.call(void 0, "select",{id:"entries",value:a,onChange:o=>e(parseInt(o.target.value,10)),children:[5,10,15,20,25,50,100].map(o=>_jsxruntime.jsx.call(void 0, "option",{value:o,children:o},"option-key-"+o))}),_jsxruntime.jsx.call(void 0, "label",{htmlFor:"entries",children:"entries"})]})}function k({data:a,onSearchInput:e}){function r(o){let t=a.filter(n=>Object.values(n).join(" ").toLowerCase().includes(o.toLowerCase()));e([...t])}return _jsxruntime.jsxs.call(void 0, "div",{id:"TableFilter","data-testid":"table-filter",children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"search",children:"Search:"}),_jsxruntime.jsx.call(void 0, "input",{type:"text",id:"search",name:"search",onChange:o=>r(o.target.value),"data-testid":"table-filter-input"})]})}function E({dataLength:a,dataStateLength:e,displayedDataStart:r,displayedDataEnd:o}){let t=e===1?"entry":"entries",n=()=>e===0?"No entries":`Showing ${r===0?1:r+1} to ${o} of ${e} ${t}`,s=()=>a===e?"":` (filtered from ${a} total entries)`;return _jsxruntime.jsxs.call(void 0, "p",{"data-testid":"table-info",children:[n(),s()]})}function H({currentPage:a,numberOfEntries:e,dataStateLength:r,onPageChanges:o}){let t=Math.ceil(r/e),n=a>1,s=a<t,d=7,i=Math.floor(d/2);function m(l,g){return Array.from({length:g-l+1},(F,h)=>l+h)}function b(){return t<=d?m(1,t):a<=i+1?[...m(1,d-2),-1,t]:a>=t-i?[1,-1,...m(t-d+3,t)]:[1,-1,...m(a-i+2,a+i-2),-1,t]}let c=l=>{l>=1&&l<=t&&o(l)};return _jsxruntime.jsxs.call(void 0, "div",{id:"TablePagination","data-testid":"table-pagination",children:[_jsxruntime.jsx.call(void 0, "button",{className:"TablePagination_button",onClick:()=>c(a-1),disabled:!n,children:"Previous"}),b().map((l,g)=>_jsxruntime.jsx.call(void 0, "button",{className:`${a===l?"active":""}`,onClick:()=>l!==-1?c(l):null,children:l===-1?"...":l},g)),_jsxruntime.jsx.call(void 0, "button",{className:"TablePagination_button",onClick:()=>c(a+1),disabled:!s,children:"Next"})]})}var U="#081f37",V="#5fc9f3",Nt= exports.DataTable =({data:a=[],columns:e,mainColor:r,accentColor:o})=>{let[t,n]=_react.useState.call(void 0, a),[s,d]=_react.useState.call(void 0, {column:e[0].data,order:"asc"}),[i,m]=_react.useState.call(void 0, 10),[b,c]=_react.useState.call(void 0, 1);I("--main-color",r,U),I("--accent-color",o,V);let l=T=>{m(T),c(1)},g=T=>{d(T),c(1)},F=T=>{n(T),c(1)},h=_react.useMemo.call(void 0, ()=>B(t,s),[t,s]),D=_react.useMemo.call(void 0, ()=>(b-1)*i,[b,i]),_=_react.useMemo.call(void 0, ()=>b*i>t.length?t.length:b*i,[b,i,t.length]),$=_react.useMemo.call(void 0, ()=>h.slice(D,_),[h,D,_]);return _jsxruntime.jsxs.call(void 0, "div",{className:"DataTable_global_wrapper",children:[_jsxruntime.jsx.call(void 0, "div",{className:"DataTable_small_screen_unsupported",children:"Oops, this table is not small-screen friendly. Please switch to a larger device for the best experience."}),_jsxruntime.jsxs.call(void 0, "div",{className:"DataTable_top",children:[_jsxruntime.jsx.call(void 0, S,{numberOfEntries:i,onEntriesChange:l}),_jsxruntime.jsx.call(void 0, k,{data:a,onSearchInput:F})]}),_jsxruntime.jsx.call(void 0, "div",{className:"DataTable_content_wrapper",children:_jsxruntime.jsxs.call(void 0, "table",{className:"DataTable",children:[_jsxruntime.jsx.call(void 0, P,{columns:e,sorting:s,onSortingChange:g}),_jsxruntime.jsx.call(void 0, C,{columns:e,displayedData:$})]})}),_jsxruntime.jsxs.call(void 0, "div",{className:"DataTable_bottom",children:[_jsxruntime.jsx.call(void 0, E,{dataLength:a.length,dataStateLength:t.length,displayedDataStart:D,displayedDataEnd:_}),_jsxruntime.jsx.call(void 0, H,{currentPage:b,numberOfEntries:i,dataStateLength:t.length,onPageChanges:c})]})]})};exports.DataTable = Nt;
//# sourceMappingURL=index.js.map