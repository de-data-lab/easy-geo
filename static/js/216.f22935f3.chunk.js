"use strict";(self.webpackChunkeasy_geo=self.webpackChunkeasy_geo||[]).push([[216],{216:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var s,a,i,o=t(605),c=t(9603),r=t(4720),l=t(1575),d=t(168),u=t(8789),h=(0,u.ZP)("section")(s||(s=(0,d.Z)(["\n  position: relative;\n  padding: 7.5rem 0 3rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 1024px) {\n    padding: 5.5rem 0 3rem;\n  }\n"]))),x=(0,u.ZP)("p")(a||(a=(0,d.Z)(["\n  padding: 0.75rem 0 0.75rem;\n"]))),m=(0,u.ZP)("div")(i||(i=(0,d.Z)(["\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n"]))),p=t(9439),f=t(1413),v=t(7762),g=t(3191),j=t(2791),b=t(3968),w=t(4565),y=t(6015),Z=t(184),k=function(e){var n=(0,j.useState)([]),t=(0,p.Z)(n,2),s=t[0],a=t[1],i=(0,j.useState)(0),o=(0,p.Z)(i,2),c=o[0],r=o[1];(0,j.useEffect)((function(){var n=g.ueB(e.text);console.time("do");!function(){var e,t=[],s=(0,v.Z)(n);try{for(s.s();!(e=s.n()).done;){var i=e.value;i[n.columns[0]]=i[n.columns[0]].replace(/^[^\d]*/,""),i[n.columns[0]]=i[n.columns[0]].replace(/\s\s+/g," ");var o=new URLSearchParams({address:i[n.columns[0]],benchmark:"Public_AR_Current",format:"json"});fetch("https://mighty-shelf-70474.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?"+o,{headers:{accepts:"application/json"}}).then((function(e){return e.json()})).then((function(e){t.push(e),console.log(t.length),r(t.length/n.length*100),t.length===n.length&&(a([].concat(t)),console.timeEnd("do"))}))}}catch(c){s.e(c)}finally{s.f()}}()}),[e.text,a]);function l(e){return(0,Z.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)(y.Z,{sx:{width:"100%",mr:1},children:(0,Z.jsx)(b.Z,(0,f.Z)({variant:"determinate"},e))}),(0,Z.jsx)(y.Z,{sx:{minWidth:35},children:(0,Z.jsx)(w.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("div",{className:"progressBar",children:(0,Z.jsx)(l,{value:c})}),s.length?(0,Z.jsxs)("div",{className:"actionBtns",children:[(0,Z.jsx)("button",{type:"button",onClick:function(){var e="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(s))),n=document.createElement("a");n.href=e,n.download="geo.json",n.click()},children:"Export to JSON"}),(0,Z.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var n=[];s.forEach((function(e){var t=e.result.input.address.address,s=e.result.addressMatches[0].coordinates.x,a=e.result.addressMatches[0].coordinates.y;n.push(t+","+s+","+a)})),function(e){var n=e.data,t=e.fileName,s=e.fileType,a=new Blob([n],{type:s}),i=document.createElement("a");i.download=t,i.href=window.URL.createObjectURL(a);var o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});i.dispatchEvent(o),i.remove()}({data:[].concat(["Address, Longitude, Latitude"],n).join("\n"),fileName:"geo.csv",fileType:"text/csv"})},children:"Export to CSV"})]}):null]})},C=t(4581),N=function(){var e=(0,j.useState)(),n=(0,p.Z)(e,2),t=n[0],s=n[1],a=(0,j.useState)(),i=(0,p.Z)(a,2),o=i[0],c=i[1],r=new FileReader;return(0,Z.jsxs)("aside",{className:"aside-open",children:[(0,Z.jsx)(C.l,{src:"carbon.svg",width:"100%",height:"100%"}),(0,Z.jsxs)("form",{action:"",children:[(0,Z.jsxs)("div",{className:"upload-btn",children:[(0,Z.jsx)("input",{id:"img_upload",name:"img_upload",type:"file",accept:".csv",onChange:function(e){s(e.target.files[0])}}),(0,Z.jsx)("button",{htmlFor:"img_upload",type:"button",tabIndex:"-1",title:"Upload",children:(0,Z.jsxs)("svg",{viewBox:"0 0 512 512",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:[(0,Z.jsx)("path",{d:"m182.461 155.48 49.539-49.539v262.059a24 24 0 0 0 48 0v-262.059l49.539 49.539a24 24 0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0 -33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z"}),(0,Z.jsx)("path",{d:"m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"})]})}),(0,Z.jsx)("input",{id:"img_name",name:"img_name",type:"text",placeholder:t?t.name:"No File Selected",disabled:!0})]}),(0,Z.jsx)("div",{className:"convert-btn",children:(0,Z.jsx)("button",{id:"reset-btn",type:"button",onClick:function(e){return function(e){console.log("sub"),e.preventDefault(),t&&(r.onload=function(e){return c(e.target.result)},r.readAsText(t))}(e)},children:"Convert"})}),o?(0,Z.jsx)(k,{text:o}):null]})]})},E=(0,r.Z)()((function(e){var n=e.title,t=e.content,s=(e.button,e.t),a=e.id;return(0,Z.jsx)(h,{children:(0,Z.jsx)(l.Mi,{direction:"up",children:(0,Z.jsx)(o.Z,{justify:"center",align:"middle",id:a,children:(0,Z.jsx)(m,{children:(0,Z.jsxs)(c.Z,{lg:24,md:24,sm:24,xs:24,children:[(0,Z.jsx)("h6",{children:s(n)}),(0,Z.jsx)(x,{children:s(t)}),(0,Z.jsx)(N,{})]})})})})})}))}}]);
//# sourceMappingURL=216.f22935f3.chunk.js.map