(this["webpackJsonpts-react-tz"]=this["webpackJsonpts-react-tz"]||[]).push([[0],{17:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(0),i=r.n(a),c=r(6),s=r.n(c),o=(r(17),r(2)),u=o.c,d=i.a.createContext({dragField:!1,setDragField:function(){}}),l=i.a.createContext({error:"",showHideError:function(){}}),j=d,f=r(1);var O=function(e){var t=e.dragOverHandler,r=e.dragDropHandler,n=e.effect,a=void 0===n?"":n;return Object(f.jsx)("div",{onDragOver:function(e){return t(e)},onDrop:function(e){return r(e)},className:"dragField ".concat(a),children:Object(f.jsx)("p",{children:"DROP HERE"})})};var b=function(){var e=Object(a.useContext)(l).showHideError,t=Object(a.useState)(!1),r=Object(n.a)(t,2),i=r[0],c=r[1],s=Object(a.useContext)(j),u=new Set,d=Object(o.b)(),b=function e(t){if(t)for(var r in Array.isArray(t)||("user"in t&&u.add(t.user),e(t.replies)),t){var n;(null===(n=t[r])||void 0===n?void 0:n.user)&&u.add(t[r].user),t[r].replies&&e(t[r].replies)}},v=function(t){t.preventDefault(),c(!0);var r=t.dataTransfer.files[0];if("application/json"!==r.type)return e("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043e\u0434\u0438\u043d JSON \u0444\u0430\u0439\u043b"),void c(!1);if(1===t.dataTransfer.files.length){var n=new FileReader;n.readAsText(r),n.onload=function(){var t=n.result,a=JSON.parse(t);if(void 0!==a&&b(a),0===u.size)return e("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"),void c(!1);d({type:"LOAD",payload:{list:u,file:r.name}}),c(!1),s.setDragField(!1)},n.onerror=function(){e(n.result)}}else e("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043e\u0434\u0438\u043d JSON \u0444\u0430\u0439\u043b"),c(!1)};return Object(f.jsx)("div",{className:"json-drag-app",children:i?Object(f.jsx)("p",{children:"...loading"}):Object(f.jsx)(O,{dragDropHandler:function(e){return v(e)},dragOverHandler:function(e){return function(e){e.preventDefault()}(e)}})})};var v=function(e){var t=e.item,r=e.deleteItem;return Object(f.jsxs)("div",{className:"listItem",children:[Object(f.jsx)("p",{children:t}),Object(f.jsx)("a",{href:"/",onClick:function(e){return function(e,t){e.preventDefault(),r(t)}(e,t)},children:"\u2718"})]})};var p=function(e){var t=e.items,r=e.deleteItem,n=e.caption,a=[];return t.forEach((function(e,t){a.push(Object(f.jsx)(v,{deleteItem:function(e){return r(e)},item:e},t))})),Object(f.jsxs)(f.Fragment,{children:[n?Object(f.jsx)("h2",{children:n}):"",Object(f.jsx)("div",{className:"uniqueList",children:a})]})};var h=function(){var e=Object(o.b)(),t=u((function(e){return e})).file,r=t.nameList,i=t.fileName,c=Object(a.useState)(""),s=Object(n.a)(c,2),d=s[0],O=s[1],v=Object(a.useContext)(j),h=Object(a.useContext)(l).error,x=function(e){e.preventDefault(),O("shadow"),v.setDragField(!0)};return Object(f.jsxs)("div",{className:"app",onDragOver:function(e){return x(e)},onDragStart:function(e){return x(e)},onDrop:function(e){return function(e){e.preventDefault(),O(""),v.setDragField(!1)}(e)},children:[h?Object(f.jsx)("div",{className:"error",children:h}):"",r.size>0?Object(f.jsx)(p,{caption:i,deleteItem:function(t){return e(function(e){return{type:"DELETE_ITEM",payload:e}}(t))},items:r}):"",Object(f.jsx)("div",{className:d}),v.dragField||0===r.size?Object(f.jsx)(b,{}):""]})},x=r(8),m=r(12),g=r(5),D={nameList:new Set,fileName:""},E=Object(x.a)({file:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD":return Object(g.a)(Object(g.a)({},D),{},{nameList:new Set(Object(m.a)(t.payload.list).sort()),fileName:t.payload.file});case"DELETE_ITEM":var r=new Set(e.nameList);return r.delete(t.payload),Object(g.a)(Object(g.a)({},e),{},{nameList:new Set(r)});default:return e}}}),S=Object(x.b)(E),w=function(){var e=Object(a.useState)(!0),t=Object(n.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(""),u=Object(n.a)(s,2),d=u[0],O=u[1];return Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(j.Provider,{value:{dragField:r,setDragField:c},children:Object(f.jsx)(l.Provider,{value:{error:d,showHideError:function(e){O(e),setTimeout((function(){return O("")}),2e3)}},children:Object(f.jsx)(o.a,{store:S,children:Object(f.jsx)(h,{})})})})})};s.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fc0fc45a.chunk.js.map