(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(14),o=n.n(s),l=(n(25),n(26),n(15)),r=n(16),u=n(19),j=n(18),m=n(7),h=[{title:"Home",url:"/",cName:"nav-links"},{title:"About",url:"/about",cName:"nav-links"},{title:"Work",url:"/work",cName:"nav-links"},{title:"Projects",url:"/projects",cName:"nav-links",className:"fas fa-caret-down",dropDown:[{title:"Data Structures",path:"/dataStructures",cName:"dropdown-link"},{title:"Algorithms",path:"/algo",cName:"dropdown-link"},{title:"Machine Learning",path:"/machineLearning",cName:"dropdown-link"},{title:"Miscellaneous",path:"/miscellaneous",cName:"dropdown-link"}]},{title:"Connect",url:"/connect",cName:"nav-links"}];n(27),n(28);var b=function(e){var t=e.list,n=e.closeSubmenu;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{onClick:n,className:"dropdown-menu",children:t.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{className:e.cName,to:e.path,onClick:n,children:e.title})},t)}))})})},d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1,subMenu:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e.closeMobileMenu=function(){return e.setState({clicked:!1})},e.onMouseLeave=function(){return e.setState({subMenu:!1})},e.onMouseEnter=function(){return e.setState({subMenu:!0})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("nav",{className:"NavbarItems",children:[Object(c.jsxs)(m.b,{style:{marginRight:"6px",marginLeft:"10px",marginTop:"5px"},to:"/",className:"navbar-logo",onClick:this.closeMobileMenu,children:[Object(c.jsx)("div",{style:{marginRight:"6px"},children:"aboutAmit"}),Object(c.jsx)("i",{className:"fas fa-user-secret"})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(c.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(c.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:h.map((function(t,n){return Object(c.jsxs)("li",{onMouseEnter:t.dropDown?e.onMouseEnter:void 0,onMouseLeave:t.dropDown?e.onMouseLeave:void 0,onClick:e.closeMobileMenu,children:[Object(c.jsxs)(m.b,{to:t.url,className:t.cName,href:t.url,children:[t.title," ",Object(c.jsx)("i",{className:t.className?t.className:""})]}),e.state.subMenu&&t.dropDown?Object(c.jsx)(b,{list:t.dropDown,closeSubmenu:e.onMouseLeave}):""]},n)}))})]})}}]),n}(a.Component),x=n(2);function p(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"home",children:"This is Home"})})}function O(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"about",children:"This is About Page"})})}function f(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"work",children:"This is Work Page"})})}function v(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"projects",children:"List of all projects"})})}n(37);function k(e){var t=e.text,n=e.cName,a=e.onClick;return Object(c.jsx)("button",{onClick:a,className:n,children:t})}var N=function(){console.log("mil");var e="";e+="Hi Amit,\nI/We wanted to connect you for \n<<<<<<<EDIT HERE>>>>>>>\n\nBest,\n[You Name]\n[Your Email Signature]\n[Your Organisation]",e=escape(e),window.open("mailto:cs.amit.v@alumni.iitm.ac.in?cc=cs.amit.v@gmail.com&subject=".concat("Connect with you for _________","&body=").concat(e),"blank")},g=function(){console.log("heree"),window.open("https://www.linkedin.com/in/amitvermacse/","blank")};function w(){return Object(c.jsxs)("div",{className:"connect",children:[Object(c.jsx)("h5",{children:"Lets connect"}),Object(c.jsx)("h5",{children:"Ph: 89*0*8*2*3"}),Object(c.jsx)(k,{onClick:N,text:"Click to connect via E-mail",cName:"btn"}),Object(c.jsx)("h6",{children:"or mail to: "})," ",Object(c.jsx)("h6",{children:"cs.amit.v@alumni.iitm.ac.in "}),"  ",Object(c.jsx)("h6",{children:"cs.amit.v@gmail.com "}),Object(c.jsx)(k,{onClick:g,cName:"linkedIn"})]})}var M=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(d,{}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/",exact:!0,component:p}),Object(c.jsx)(x.a,{path:"/about",exact:!0,component:O}),Object(c.jsx)(x.a,{path:"/work",exact:!0,component:f}),Object(c.jsx)(x.a,{path:"/projects",exact:!0,component:v}),Object(c.jsx)(x.a,{path:"/connect",exact:!0,component:w})]})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.574c69af.chunk.js.map