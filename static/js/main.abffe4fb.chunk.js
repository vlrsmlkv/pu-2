(this["webpackJsonppu-2"]=this["webpackJsonppu-2"]||[]).push([[0],{12:function(e,t){},28:function(e,t){},29:function(e,t){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(13),l=n.n(s),r=n(3),i=n(32),u=n(0),o=function(e){var t=e.onChange,n=Object(a.useState)(null),c=Object(r.a)(n,2),s=c[0],l=c[1],o=Object(a.useState)(null),j=Object(r.a)(o,2),b=j[0],d=j[1],h=s>1?"\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0444\u0430\u0439\u043b\u043e\u0432: ".concat(s):1===s?b:Object(u.jsxs)("span",{className:"button-content",children:["\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b ",Object(u.jsx)(i.a,{})]});return Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("p",{children:"\u0428\u0430\u0433 1"}),Object(u.jsx)("input",{type:"file",id:"inputFile",onChange:function(e){var n=e.target.files;if(l(n.length),d(n[0].name)," "!==n&&n.length){var a=[],c=0,s=new FileReader;s.onload=function(e){c++,a.push(e.target.result),c<n.length&&s.readAsText(n[c]),c===n.length&&t(a)},0===c&&s.readAsText(n[0])}},accept:" .txt",multiple:"multiple"}),Object(u.jsx)("label",{htmlFor:"inputFile",className:"input-field-label",children:h})]})},j=function(e){var t=e.value,n=e.onChange;return Object(u.jsxs)("div",{className:"checkbox-container",children:[Object(u.jsx)("input",{type:"checkbox",id:"checkbox",className:"checkbox",value:t,onChange:function(e){n(e.target.checked)}}),Object(u.jsx)("label",{htmlFor:"checkbox",className:"checkbox-label",children:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u043b\u0438\u0441\u0442\u0435"})]})},b=function(e){return e.data?Object(u.jsx)("div",{className:"processed-data-message",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b!"}):null},d=n(10),h=n(5),p=n.n(h),O=n(14),f=function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t},x=n(33),m=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),i=l[0],h=l[1],m=Object(a.useState)(!1),v=Object(r.a)(m,2),g=v[0],k=v[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"file-field-and-checkbox",children:[Object(u.jsx)(o,{onChange:c}),Object(u.jsx)(j,{value:g,onChange:k})]}),Object(u.jsxs)("div",{className:"process-button",children:[Object(u.jsx)("p",{children:"\u0428\u0430\u0433 2"}),Object(u.jsx)("button",{disabled:!n,onClick:function(){return h(n.map((function(e){return JSON.parse(e).data.map((function(e){var t=e.r1,n=e.r2;return{ils:{value:e.ils||"",name:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440"},fzl:{value:e.fzl||"",name:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},izl:{value:e.izl||"",name:"\u0418\u043c\u044f"},ozl:{value:e.ozl||"",name:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"},dto1:{value:t[0].dto1||"",name:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f"},dfr21:{value:n[0].dfr21||"",name:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 - \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"}}}))})))},children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b"}),Object(u.jsx)(b,{data:i})]}),Object(u.jsxs)("div",{className:"download-button",children:[Object(u.jsx)("p",{children:"\u0428\u0430\u0433 3"}),Object(u.jsx)("button",{disabled:!i,onClick:function(){return e=function(e,t){var n=p.a.utils.book_new();n.SheetNames.push("\u0421\u0432\u043e\u0434");var a=["\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440","\u0424\u0430\u043c\u0438\u043b\u0438\u044f","\u0418\u043c\u044f","\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e","\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f","\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 - \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"],c=e.flat().map((function(e){return Object.keys(e).map((function(t){return[[e[t].value]]}))}));return n.Sheets["\u0421\u0432\u043e\u0434"]=p.a.utils.aoa_to_sheet([a].concat(Object(d.a)(c))),t&&e.forEach((function(e,t){n.SheetNames.push("Sheet ".concat(t+1));var c=e.map((function(e){return Object.keys(e).map((function(t){return[[e[t].value]]}))}));n.Sheets["Sheet ".concat(t+1)]=p.a.utils.aoa_to_sheet([a].concat(Object(d.a)(c)))})),p.a.write(n,{bookType:"xlsx",type:"binary"})}(i,g),void Object(O.saveAs)(new Blob([f(e)],{type:"application/octet-stream"}),"test.xlsx");var e},children:Object(u.jsxs)("span",{children:["\u0421\u043a\u0430\u0447\u0430\u0442\u044c ",Object(u.jsx)(x.a,{})]})})]})]})};n(30);l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.abffe4fb.chunk.js.map