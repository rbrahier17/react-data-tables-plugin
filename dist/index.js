require("./index.css");Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);function S(t,e,r){if(e=e||r,(a=>/^#([0-9A-Fa-f]{6})$/.test(a))(e)||(console.error(`Invalid format for property '${t}', please enter a valid hexadecimal format with 7 characters, for example, '#007bff'.`),e=r),t==="--main-color"){let a=e+"D9",n=e+"33";document.documentElement.style.setProperty(t,e),document.documentElement.style.setProperty(t+"-opacity-85",a),document.documentElement.style.setProperty(t+"-opacity-20",n)}else document.documentElement.style.setProperty(t,e)}function H(t,e){let{column:r,order:o}=e;return[...t].sort((a,n)=>{let s=a[r],d=n[r];return s<d?o==="asc"?-1:1:s>d?o==="asc"?1:-1:0})}var _jsxruntime = require('react/jsx-runtime');var G=_react2.default.memo(({columns:t,sorting:e,onSortingChange:r})=>{let o=a=>{r({column:a,order:e.column===a&&e.order==="asc"?"desc":"asc"})};return _jsxruntime.jsx.call(void 0, "thead",{id:"TableHeader","data-testid":"table-header",children:_jsxruntime.jsx.call(void 0, "tr",{children:t.map((a,n)=>_jsxruntime.jsx.call(void 0, "th",{children:_jsxruntime.jsx.call(void 0, "div",{children:_jsxruntime.jsxs.call(void 0, "button",{type:"button",className:`sort-button ${e.column===a.data?e.order:""}`,onClick:()=>o(a.data),children:[a.title,_jsxruntime.jsxs.call(void 0, "div",{className:"arrow-container",children:[_jsxruntime.jsx.call(void 0, "span",{className:`arrow-up ${e.column===a.data&&e.order==="asc"?"active":""}`}),_jsxruntime.jsx.call(void 0, "span",{className:`arrow-down ${e.column===a.data&&e.order==="desc"?"active":""}`})]})]})})},n))})})}),R=G;var J=_react2.default.memo(({row:t,columns:e})=>_jsxruntime.jsx.call(void 0, "tr",{children:e.map((r,o)=>_jsxruntime.jsx.call(void 0, "td",{"data-testid":`data-cell-for-column-${r.data}`,children:_jsxruntime.jsx.call(void 0, "div",{children:t[r.data]})},`${t.id}-${o}`))})),K=_react2.default.memo(({columns:t,displayedData:e})=>(e.some(r=>!r.id)&&console.warn("All object items to be displayed in the data table should have a property 'id' with a unique identifier."),_jsxruntime.jsx.call(void 0, "tbody",{id:"TableBody","data-testid":"table-body",children:e.length===0?_jsxruntime.jsx.call(void 0, "tr",{children:_jsxruntime.jsx.call(void 0, "td",{colSpan:t.length,id:"TableBody_no-data","data-testid":"table-body-no-data",children:_jsxruntime.jsx.call(void 0, "div",{children:"No data available"})})}):e.map((r,o)=>_jsxruntime.jsx.call(void 0, J,{row:r,columns:t},(r.id||o).toString()))},e.length))),B=K;var W=_react2.default.memo(({numberOfEntries:t,onEntriesChange:e})=>_jsxruntime.jsxs.call(void 0, "div",{id:"TableEntriesSelector","data-testid":"table-entries-selector",children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"entries",children:"Show"}),_jsxruntime.jsx.call(void 0, "select",{id:"entries",value:t,onChange:o=>e(parseInt(o.target.value,10)),children:[5,10,15,20,25,50,100].map(o=>_jsxruntime.jsx.call(void 0, "option",{value:o,children:o},"option-key-"+o))}),_jsxruntime.jsx.call(void 0, "label",{htmlFor:"entries",children:"entries"})]})),$=W;function P({data:t,onSearchInput:e}){function r(o){let a=t.filter(n=>Object.values(n).join(" ").toLowerCase().includes(o.toLowerCase()));e([...a])}return _jsxruntime.jsxs.call(void 0, "div",{id:"TableFilter","data-testid":"table-filter",children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"search",children:"Search:"}),_jsxruntime.jsx.call(void 0, "input",{type:"text",id:"search",name:"search",onChange:o=>r(o.target.value),"data-testid":"table-filter-input"})]})}function C({dataLength:t,dataStateLength:e,displayedDataStart:r,displayedDataEnd:o}){let a=e===1?"entry":"entries",n=()=>e===0?"No entries":`Showing ${r===0?1:r+1} to ${o} of ${e} ${a}`,s=()=>t===e?"":` (filtered from ${t} total entries)`;return _jsxruntime.jsxs.call(void 0, "p",{"data-testid":"table-info",children:[n(),s()]})}function E({currentPage:t,numberOfEntries:e,dataStateLength:r,onPageChanges:o}){let a=Math.ceil(r/e),n=t>1,s=t<a,d=7,m=Math.floor(d/2);function c(l,b){return Array.from({length:b-l+1},(g,D)=>l+D)}function v(){return a<=d?c(1,a):t<=m+1?[...c(1,d-2),-1,a]:t>=a-m?[1,-1,...c(a-d+3,a)]:[1,-1,...c(t-m+2,t+m-2),-1,a]}let i=l=>{l>=1&&l<=a&&o(l)};return _jsxruntime.jsxs.call(void 0, "div",{id:"TablePagination","data-testid":"table-pagination",children:[a>1&&_jsxruntime.jsx.call(void 0, "button",{className:"TablePagination_button",onClick:()=>i(t-1),disabled:!n,children:"Previous"}),v().map((l,b)=>_jsxruntime.jsx.call(void 0, "button",{className:`${t===l?"active":""}`,onClick:()=>l!==-1?i(l):null,children:l===-1?"...":l},b)),a>1&&_jsxruntime.jsx.call(void 0, "button",{className:"TablePagination_button",onClick:()=>i(t+1),disabled:!s,children:"Next"})]})}var ee="#081f37",te="#5fc9f3",ae= exports.DataTable =({data:t=[],columns:e,className:r,mainColor:o,accentColor:a})=>{let[n,s]=_react.useState.call(void 0, t),[d,m]=_react.useState.call(void 0, t.length);_react.useEffect.call(void 0, ()=>{s(t),m(t.length)},[t]);let[c,v]=_react.useState.call(void 0, {column:e[0].data,order:"asc"}),[i,l]=_react.useState.call(void 0, 10),[b,g]=_react.useState.call(void 0, 1);_react.useEffect.call(void 0, ()=>{typeof document!="undefined"&&(S("--main-color",o,ee),S("--accent-color",a,te))},[o,a]);let D=_react.useCallback.call(void 0, h=>{l(h),g(1)},[]),M=_react.useCallback.call(void 0, h=>{v(h),g(1)},[]),U=h=>{s(h),g(1)},N=_react.useMemo.call(void 0, ()=>H(n,c),[n,c]),I=_react.useMemo.call(void 0, ()=>(b-1)*i,[b,i]),_=_react.useMemo.call(void 0, ()=>b*i>n.length?n.length:b*i,[b,i,n.length]),V=_react.useMemo.call(void 0, ()=>N.slice(I,_),[N,I,_]);return _jsxruntime.jsxs.call(void 0, "div",{className:`DataTable_global_wrapper ${r}`,children:[_jsxruntime.jsx.call(void 0, "div",{className:"DataTable_small_screen_unsupported",children:"Oops, this table is not small-screen friendly. Please switch to a larger device for the best experience."}),_jsxruntime.jsxs.call(void 0, "div",{className:"DataTable_top",children:[_jsxruntime.jsx.call(void 0, $,{numberOfEntries:i,onEntriesChange:D}),_jsxruntime.jsx.call(void 0, P,{data:t,onSearchInput:U})]}),_jsxruntime.jsx.call(void 0, "div",{className:"DataTable_content_wrapper",children:_jsxruntime.jsxs.call(void 0, "table",{className:"DataTable",children:[_jsxruntime.jsx.call(void 0, R,{columns:e,sorting:c,onSortingChange:M}),_jsxruntime.jsx.call(void 0, B,{columns:e,displayedData:V})]})}),_jsxruntime.jsxs.call(void 0, "div",{className:"DataTable_bottom",children:[_jsxruntime.jsx.call(void 0, C,{dataLength:d,dataStateLength:n.length,displayedDataStart:I,displayedDataEnd:_}),_jsxruntime.jsx.call(void 0, E,{currentPage:b,numberOfEntries:i,dataStateLength:n.length,onPageChanges:g})]})]})};exports.DataTable = ae;
//# sourceMappingURL=index.js.map