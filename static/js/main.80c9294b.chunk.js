(this["webpackJsonpreact-bookstore"]=this["webpackJsonpreact-bookstore"]||[]).push([[0],{17:function(e,c,t){},24:function(e,c,t){"use strict";t.r(c);var l=t(1),o=t(5),a=t.n(o),s=(t(17),t(2)),n=t(7),r=t(3),i=t(11),d=(t(22),t(0)),j=function(e){var c=e.book,t=e.handleRemoveBook;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"row card-inside",children:[Object(d.jsxs)("div",{className:"col-12 col-sm-3 col-md-4",children:[Object(d.jsx)("p",{className:"gender-book",children:c.category}),Object(d.jsx)("p",{className:"title-book",children:c.title}),Object(d.jsx)("p",{className:"author-book mb-2",children:"Suzanne Collins"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-lg-4 co-first",children:Object(d.jsx)("a",{className:"book-option",href:"/",children:"Comments"})}),Object(d.jsx)("div",{className:"col-12 col-lg-3 co-middle",children:Object(d.jsx)("a",{className:"book-option",href:"/",children:"Remove"})}),Object(d.jsx)("div",{className:"col-12 col-lg-3 co-last",children:Object(d.jsx)("a",{className:"book-option",href:"/",children:"Edit"})})]})]}),Object(d.jsx)("div",{className:"col-4 col-sm-3 col-md-2 col-lg-1 mt-2",children:Object(d.jsx)(i.a,{value:66})}),Object(d.jsxs)("div",{className:"col-12 col-sm-3 col-md-2",children:[Object(d.jsx)("h2",{children:"28%"}),Object(d.jsx)("p",{className:"perc-completed",children:"Completed"})]}),Object(d.jsxs)("div",{className:"col-12 col-sm-3 col-md-4 card-last-div",children:[Object(d.jsx)("p",{className:"current-chapter",children:"Current chapter"}),Object(d.jsx)("p",{children:"Chapter 13"}),Object(d.jsx)("button",{type:"button",onClick:function(){t(c)},className:"btn btn-update",children:"Update progress"})]})]})})},b="CREATE_BOOK",m="REMOVE_BOOK",u="CHANGE_FILTER",h=function(e){return{type:b,payload:e}},O=["Action","Biography","Comedy","Drama","Fantasy","Google","Horror"],x=function(e){var c=e.handleFilterChange;return Object(d.jsx)("nav",{className:"mb-4",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-md-9",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-md-7 col-lg-6",children:Object(d.jsx)("h1",{className:"title-logo",children:Object(d.jsx)("a",{className:"a-logo",href:"/",children:"Bookstore CMS"})})}),Object(d.jsx)("div",{className:"col-12 col-md-2 col-lg-1 pt-2",children:Object(d.jsx)("a",{className:"a-navbar",href:"/",children:"Books"})}),Object(d.jsx)("div",{className:"col-12 col-md-3 col-lg-2",children:Object(d.jsxs)("select",{className:"form-control",onChange:function(e){c(e.target.value)},children:[Object(d.jsx)("option",{value:"All",selected:!0,children:"All books"},"default"),O.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]})})]})}),Object(d.jsx)("div",{className:"col-12 col-md-3 mt-1",children:Object(d.jsx)("i",{className:"fas fa-user fa-lg fa-icon float-right"})})]})})},f={deleteBook:function(e){return{type:m,payload:e}},changeFilter:function(e){return{type:u,payload:e}}},p=Object(s.b)((function(e){return{books:e.books,filter:e.filter}}),f)((function(e){var c=e.books,t=e.deleteBook,o=e.changeFilter,a=e.filter,s=Object(l.useState)(a),n=Object(r.a)(s,2),i=n[0],b=n[1],m=function(e){t(e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{handleFilterChange:function(e){o(e),b(e)}}),function(){if("All"===i)return c;var e=[];return c.map((function(c){c.category===i&&e.push(c)})),e}().map((function(e){return Object(d.jsx)(j,{book:e,handleRemoveBook:m},e.id)})),Object(d.jsx)("hr",{})]})})),v=function(){var e=995*Math.random()+5;return Math.ceil(e)},g={createBook:h},N=Object(s.b)(null,g)((function(e){var c=e.createBook,t=Object(l.useState)(v),o=Object(r.a)(t,2),a=o[0],s=o[1],n=Object(l.useState)(""),i=Object(r.a)(n,2),j=i[0],b=i[1],m=Object(l.useState)(""),u=Object(r.a)(m,2),h=u[0],x=u[1];return Object(d.jsxs)("div",{className:"book-form",children:[Object(d.jsx)("h2",{className:"title-form",children:"Add new book"}),Object(d.jsxs)("form",{onSubmit:function(e){c({id:a,title:j,category:h}),s(v),b(""),x(""),e.preventDefault()},className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-sm-4 col-md-5 col-lg-5",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"hidden",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("input",{placeholder:"Add a title...",className:"form-control",id:"title",type:"text",onChange:function(e){return b(e.target.value)},value:j,required:!0})]})}),Object(d.jsx)("div",{className:"col-12 col-sm-4 col-md-4 col-lg-5",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("select",{className:"form-control",onChange:function(e){return x(e.target.value)},required:!0,value:h,children:[Object(d.jsx)("option",{value:"",children:"Select one..."},"default"),O.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]})})}),Object(d.jsx)("div",{className:"col-12 col-sm-4 col-md-3 col-lg-2",children:Object(d.jsx)("input",{type:"submit",value:"Create new book",className:"btn btn-primary btn-form"})})]})]})})),k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(N,{})]})},y=t(12),C=[{id:1,title:"The Hunger games",category:"Action"},{id:2,title:"title 2",category:"Biography"}],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case b:return[].concat(Object(y.a)(e),[c.payload]);case m:return e.filter((function(e){return e.id!==c.payload.id}));default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",c=arguments.length>1?arguments[1]:void 0;switch(c.type){case u:return c.payload;default:return e}},_=Object(n.a)({books:E,filter:w}),B=Object(n.b)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());[{id:3,title:"title 3",category:"Comedy"},{id:4,title:"title 4",category:"Drama"}].map((function(e){return B.dispatch(h(e))}));var S=document.getElementById("root");a.a.render(Object(d.jsx)(s.a,{store:B,children:Object(d.jsx)(k,{})}),S)}},[[24,1,2]]]);
//# sourceMappingURL=main.80c9294b.chunk.js.map