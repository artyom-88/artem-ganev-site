"use strict";(globalThis.webpackChunkartem_ganev_site=globalThis.webpackChunkartem_ganev_site||[]).push([[772],{9622:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(8391),s=a(774);function i(e,r){const a=(0,s.I0)(),i=(0,s.v9)(r.selectList),n=(0,s.v9)(r.isListLoading);return(0,t.useEffect)((()=>(a(e.loadList()),()=>{a(e.clearList())})),[a]),{isLoading:n,items:i}}},3589:(e,r,a)=>{a.r(r),a.d(r,{default:()=>Z});var t=a(5208),s=a(5590),i=a(6242),n=a(2238),o=a(1558),c=a(9622);const l={isListLoading:e=>{let{career:r}=e;return r.meta.loading},selectList:e=>{let{career:r}=e;return r.data.list}};var d=a(7147),h=a(6105);const m=e=>{if(e.startDate.isValid()){const r=e.startDate.format(h.K);return e.endDate.isValid()?`${r} - ${e.endDate.format(h.K)}`:`Since ${r}`}return""};var u=a(7209);const v="#70719b",g=(0,u.Z)((e=>({careerItem:{marginBottom:e.spacing(2)},careerItemContent:{letterSpacing:"1px",lineHeight:"24px",padding:e.spacing(2),wordSpacing:"1px"},careerDetail:{"&:hover":{textDecoration:"none"}},careerTitle:{color:v},careerDates:{color:v,fontStyle:"italic"}})));var p=a(3712);const x=(e,r,a)=>{const t=(0,p.jsx)(s.Z,{variant:"h5",className:a,children:r});return e?(0,p.jsx)("a",{href:e,target:n.q,rel:n.X,title:"Click for details",children:t}):t},Z=()=>{const e=g(),{isLoading:r,items:a}=(0,c.Z)(d.N,l);return(0,p.jsx)(i.Z,{isLoading:r,title:o.Wx.name,Icon:o.Wx.Icon,children:a.map((r=>{const{_id:a,site:i,title:n,post:o,description:c,tools:l}=r;return(0,p.jsx)("div",{className:e.careerItem,children:(0,p.jsx)(t.Z,{raised:!0,children:(0,p.jsxs)("div",{className:e.careerItemContent,children:[x(i,n,e.careerTitle),(0,p.jsx)(s.Z,{variant:"h6",paragraph:!0,className:e.careerDates,children:m(r)}),(0,p.jsxs)(s.Z,{variant:"h6",children:["Post:\xa0",o]}),(0,p.jsx)(s.Z,{variant:"h6",paragraph:!0,children:c}),(0,p.jsx)("div",{className:"ag-flexbox ag-flexColumn",children:(0,p.jsxs)(s.Z,{variant:"h6",paragraph:!0,children:["Tools:\xa0",l]})})]})})},a)}))})}},5208:(e,r,a)=>{a.d(r,{Z:()=>p});var t=a(7462),s=a(3366),i=a(8391),n=a(9595),o=a(1141),c=a(6347),l=a(7812),d=a(6617),h=a(4922);function m(e){return(0,h.Z)("MuiCard",e)}(0,a(5639).Z)("MuiCard",["root"]);var u=a(3712);const v=["className","raised"],g=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"}))),p=i.forwardRef((function(e,r){const a=(0,l.Z)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=a,d=(0,s.Z)(a,v),h=(0,t.Z)({},a,{raised:c}),p=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"]},m,r)})(h);return(0,u.jsx)(g,(0,t.Z)({className:(0,n.Z)(p.root,i),elevation:c?8:void 0,ref:r,ownerState:h},d))}))}}]);