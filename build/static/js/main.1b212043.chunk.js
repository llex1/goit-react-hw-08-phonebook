/*! For license information please see main.1b212043.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n(19),c=n.n(s),o=n(20),i=n(11),u=n(9),l=n(17),p={server:"https://llex.one/api/"},j=function(e){return function(t){return function(n){"AVE"===n.type||("ADD"===n.type&&n.payload.contacts.length?(console.log(e.getState().userId),fetch("".concat(p.server),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({marker:"add",userId:e.getState().userId,sessionControl:localStorage.getItem("sessionControl"),contacts:Object(u.a)(n.payload.contacts)})}).then((function(e){console.log(e)})).then(t(n))):t(n))}}},m=n(12),b=Object(l.c)({contacts:[],filter:[],userId:"",loader:!1,userName:"Guest"},{ADD:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{contacts:[].concat(Object(u.a)(e.contacts),Object(u.a)(n.contacts))})},DEL:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{contacts:Object(u.a)(n.contacts),filter:Object(u.a)(n.filter)})},FILTER:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{filter:Object(u.a)(n.filter)})},ALERT:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{isAlert:n.isAlert,alertMessage:n.alertMessage})},LOADER:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{loader:n.loader})},LOGIN:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{userName:n.userName,userId:n.userId,contacts:Object(u.a)(n.contacts)})},LOGOUT:function(e,t){t.payload;return Object(m.a)(Object(m.a)({},e),{},{contacts:[],filter:[],userId:"",loader:!1,userName:"Guest"})}}),d=Object(l.a)({reducer:b,middleware:[].concat(Object(u.a)(Object(l.d)()),[j])}),h=n(4),O=n(5),f=n(7),v=n(6),N=n(3),x={ave:Object(l.b)("AVE")},y=n(58),g=(n(43),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"alert",children:Object(a.jsx)("p",{className:"alert-text",children:this.props.text})})}}]),n}(r.Component)),w=(n(44),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("p",{className:"AppName",children:"Phonebook"})}}]),n}(r.Component)),C={add:function(e,t){var n=t.id,a=t.name,r=t.number;return a&&!e.contacts.map((function(e){return e.name.toLowerCase()})).includes(a.toLowerCase())?{type:"ADD",payload:{contacts:[{id:n,name:a,number:r}]}}:{type:"ADD",payload:{contacts:[]}}},alert:Object(l.b)("ALERT",(function(e){return{payload:{isAlert:e.isAlert,alertMessage:e.alertMessage}}}))},A=n(59),L=(n(45),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={valueName:"",valueNumder:""},e.delayToCloseAlert=null,e.handleChange=function(t){switch(t.target.name){case"name":e.setState((function(e){return{valueName:t.target.value}}));break;case"number":e.setState((function(e){return{valueNumder:t.target.value}}));break;default:console.log("error form-name")}},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(A.a)(),name:e.state.valueName,number:e.state.valueNumder};e.props.action_ADD(e.props.state,n),n.name&&e.props.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(n.name.toLowerCase())&&(e.props.action_ALERT({isAlert:!0,alertMessage:"Sorry, but You already have this contact in your base."}),clearTimeout(e.delayToCloseAlert),e.delayToCloseAlert=setTimeout((function(){e.props.action_ALERT({isAlert:!1,alertMessage:""})}),3e3)),e.setState((function(e){return{valueName:"",valueNumder:""}}))},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"form contactAdd",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{className:"label",htmlFor:"name",children:"Contact Name"}),Object(a.jsx)("input",{required:!0,className:"input",type:"text",name:"name",id:"name",placeholder:"name",autoComplete:"off",value:this.state.valueName,onChange:this.handleChange}),Object(a.jsx)("label",{className:"label",htmlFor:"number",children:"Contact Number"}),Object(a.jsx)("input",{className:"input",type:"tel",name:"number",id:"number",placeholder:"063-333-4444",autoComplete:"off",pattern:"[0-9\\W]*",value:this.state.valueNumder,onChange:this.handleChange}),Object(a.jsx)("button",{className:"btn",type:"submit",children:"new contact"})]})}}]),n}(r.Component)),U=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_ADD:function(t,n){e(C.add(t,n))},action_ALERT:function(t){e(C.alert(t))}}}))(L),E=function(e,t){var n=t.id,a={type:"DEL",payload:{contacts:[],filter:[],id:n}};if(e.filter.length){var r=0;e.filter.forEach((function(e,t){e.id===n&&(r=t)}));var s=Object(u.a)(e.filter);s.splice(r,1),a.payload.filter=Object(u.a)(s)}var c=0;e.contacts.forEach((function(e,t){e.id===n&&(c=t)}));var o=Object(u.a)(e.contacts);return o.splice(c,1),a.payload.contacts=Object(u.a)(o),a},k=n(60),I=(n(46),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.deleteContact=function(t){var n=t.target.dataset.id;e.props.action_DEL(e.props.state,{id:n})},e.contactList=function(){return(e.props.state.filter.length?e.props.state.filter:e.props.state.contacts).map((function(t,n){return Object(a.jsx)(y.a,{timeout:250,classNames:"contact-show-list-item",children:Object(a.jsxs)("li",{className:"contact-show-list-item",children:[Object(a.jsxs)("p",{className:"contact-show-list-text",children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("span",{children:t.number})]}),Object(a.jsx)("button",{"data-id":t.id,onClick:e.deleteContact,children:"delete"})]},t.id)},n)}))},e}return Object(O.a)(n,[{key:"componentDidUpdate",value:function(){this.contactList()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"contact-show",children:[this.props.children,Object(a.jsx)(k.a,{component:"ul",className:".contact-show-list",children:this.contactList()})]})}}]),n}(r.Component)),S=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_DEL:function(t,n){e(E(t,n))}}}))(I),D=n(18),T=n.n(D),_=n(21),P=function(e,t){var n=t.name,a=[];return n?e.contacts.forEach((function(e){e.name.toLowerCase().includes(n.toLowerCase())&&a.push(e)})):a=[],{type:"FILTER",payload:{filter:a}}},R=(n(48),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(){var t=Object(_.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState((function(e){return{value:n.target.value}}));case 2:e.props.action_FILTER(e.props.state,{name:e.state.value});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsx)("label",{htmlFor:"filter",children:"Filter"}),Object(a.jsx)("input",{id:"filter",type:"text",name:"filter",value:this.state.value,onChange:this.handleChange})]})}}]),n}(r.Component)),F=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_FILTER:function(t,n){e(P(t,n))}}}))(R),G=(n(49),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).delayToCloseAlert=null,e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.action_AVE()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(y.a,{in:this.props.state.isAlert,classNames:"alert",timeout:250,unmountOnExit:!0,children:Object(a.jsx)(g,{text:this.props.state.alertMessage})}),Object(a.jsx)(y.a,{in:!0,appear:!0,classNames:"AppName",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(w,{})}),Object(a.jsx)(y.a,{in:!!this.props.state.userId,classNames:"contactAdd",timeout:400,unmountOnExit:!0,children:Object(a.jsx)(U,{})}),Object(a.jsx)(S,{children:Object(a.jsx)(y.a,{in:this.props.state.contacts.length>1,classNames:"filter",timeout:250,unmountOnExit:!0,children:Object(a.jsx)(F,{})})})]})}}]),n}(r.Component)),M=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_AVE:function(t){e(x.ave(t))}}}))(G),J=function(e){return{type:"LOADER",payload:{loader:e}}},Y=function(e){var t=e.userName,n=e.userId,a=e.contacts,r=void 0===a?[]:a;return{type:"LOGIN",payload:{userName:t,userId:n,contacts:Object(u.a)(r)}}},V=(n(50),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={newUserName:"",newUserPass:""},e.handleChange=function(t){"newUserName"===t.target.name&&e.setState((function(e){return{newUserName:t.target.value}})),"newUserPass"===t.target.name&&e.setState((function(e){return{newUserPass:t.target.value}}))},e.handleSubmit=function(){var t=Object(_.a)(T.a.mark((function t(n){var a,r,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.props.action_LOADER(!0),a={name:e.state.newUserName,pass:e.state.newUserPass,marker:"newuser"},t.next=5,fetch("".concat(p.server),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=t.sent,t.next=8,r.json();case 8:s=t.sent,localStorage.setItem("sessionControl",s.sessionControl),e.props.action_LOGIN({userName:s.userName,userId:s.userId}),console.log(s),e.props.action_LOADER(!1),e.setState((function(e){return{newUserName:"",newUserPass:""}})),e.props.history.push({pathname:"/"});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(y.a,{in:!0,appear:!0,classNames:"AppName",timeout:500,unmountOnExit:!0,children:Object(a.jsx)("p",{className:"registrationTitle",children:"Hi, let's add your info in our base:"})}),Object(a.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"newUserName",className:"label",children:"Your nickname:"}),Object(a.jsx)("input",{type:"text",name:"newUserName",id:"newUserName",autoComplete:"off",className:"input",onChange:this.handleChange,value:this.state.newUserName}),Object(a.jsx)("label",{htmlFor:"newUserName",className:"label",children:"Your password:"}),Object(a.jsx)("input",{type:"password",name:"newUserPass",id:"newUserPass",autoComplete:"off",className:"input",onChange:this.handleChange,value:this.state.newUserPass}),Object(a.jsx)("button",{className:"btn",type:"submit",children:"\u043e\u043a"})]})]})}}]),n}(r.Component)),B=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_LOADER:function(t){e(J(t))},action_LOGIN:function(t){e(Y(t))}}}))(V),q=function(e){return{type:"LOADER",payload:{loader:e}}},H=function(e){var t=e.userName,n=e.userId,a=e.contacts,r=void 0===a?[]:a;return{type:"LOGIN",payload:{userName:t,userId:n,contacts:Object(u.a)(r)}}},W=(n(51),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={newUserName:"",newUserPass:""},e.handleChange=function(t){"newUserName"===t.target.name&&e.setState((function(e){return{newUserName:t.target.value}})),"newUserPass"===t.target.name&&e.setState((function(e){return{newUserPass:t.target.value}}))},e.handleSubmit=function(){var t=Object(_.a)(T.a.mark((function t(n){var a,r,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.props.action_LOADER(!0),a={name:e.state.newUserName,pass:e.state.newUserPass,marker:"login"},t.next=5,fetch("".concat(p.server),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=t.sent,t.next=8,r.json();case 8:(s=t.sent).userId?(localStorage.setItem("sessionControl",s.sessionControl),e.props.action_LOGIN({userName:s.userName,userId:s.userId,contacts:s.contacts})):console.log("\u041d\u0415 \u0412\u0406\u0420\u041d\u0418\u0419 \u041b\u041e\u0413\u0406\u041d/\u041f\u0410\u0420\u041e\u041b\u042c"),e.props.action_LOADER(!1),e.setState((function(e){return{newUserName:"",newUserPass:""}})),e.props.history.push({pathname:"/"});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(y.a,{in:!0,appear:!0,classNames:"AppName",timeout:500,unmountOnExit:!0,children:Object(a.jsx)("p",{className:"loginTitle",children:"Login:"})}),Object(a.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"newUserName",className:"label",children:"Your nickname:"}),Object(a.jsx)("input",{type:"text",name:"newUserName",id:"newUserName",autoComplete:"off",className:"input",onChange:this.handleChange,value:this.state.newUserName}),Object(a.jsx)("label",{htmlFor:"newUserName",className:"label",children:"Your password:"}),Object(a.jsx)("input",{type:"password",name:"newUserPass",id:"newUserPass",autoComplete:"off",className:"input",onChange:this.handleChange,value:this.state.newUserPass}),Object(a.jsx)("button",{className:"btn",type:"submit",children:"\u043e\u043a"})]})]})}}]),n}(r.Component)),z=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_LOADER:function(t){e(q(t))},action_LOGIN:function(t){e(H(t))}}}))(W),K=function(e){return{type:"LOGOUT",payload:{value:e}}},Q={main:"/",registration:"/registration",login:"/login"};n(52);var X=function(){return Object(a.jsx)("div",{className:"loaderBlock",children:Object(a.jsx)("div",{className:"loader"})})},Z=(n(53),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.logOut=function(t){"Logout"===t.target.textContent&&(localStorage.clear(),e.props.action_LOGOUT())},e}return Object(O.a)(n,[{key:"render",value:function(){var e="Login",t="Registration";return this.props.state.userId&&(e="Logout",t=""),Object(a.jsxs)("header",{className:"header",children:[Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)(o.b,{to:Q.main,children:Object(a.jsx)("span",{children:this.props.state.userName})}),Object(a.jsxs)("div",{className:"login-block",children:[Object(a.jsx)(o.b,{to:Q.registration,className:"registration-link",children:t}),Object(a.jsx)(o.b,{to:Q.login,onClick:this.logOut,children:e})]})]}),Object(a.jsx)(y.a,{in:this.props.state.loader,timeout:250,classNames:"loader",unmountOnExit:!0,children:Object(a.jsx)(X,{})})]})}}]),n}(r.Component)),$=Object(i.b)((function(e){return{state:e}}),(function(e){return{action_LOGOUT:function(t){e(K(t))}}}))(Z),ee=(n(55),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)($,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(N.c,{children:Object(a.jsxs)(r.Suspense,{fallback:Object(a.jsx)("h2",{children:"Loading..."}),children:[Object(a.jsx)(N.a,{path:Q.main,exact:!0,component:M}),Object(a.jsx)(N.a,{path:Q.registration,exact:!0,component:B}),Object(a.jsx)(N.a,{path:Q.login,exact:!0,component:z})]})})})]})}}]),n}(r.Component)),te=Object(i.b)((function(e){return{state:e}}),(function(e){return{}}))(ee);c.a.render(Object(a.jsx)(i.a,{store:d,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(te,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.1b212043.chunk.js.map