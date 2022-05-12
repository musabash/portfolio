(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(66),i=a.n(n),r=a(5),o=a(4),l=a(15);var b=a(1),j=Object(s.createContext)();function m(e){var t=e.children,a=e.tabs,c=Object(l.a)(e,["children","tabs"]),n=Object(s.useState)(0),i=Object(o.a)(n,2),m=i[0],d=i[1],u=Object(s.useState)(0),h=Object(o.a)(u,2),O=h[0],p=h[1],x=Object(s.useState)(document.getElementsByName("Projects")),f=Object(o.a)(x,2),v=f[0],g=f[1];return Object(b.jsx)(j.Provider,{value:{setTarget:g,tab:m,tabs:a,setTab:d,sliderPos:O,setSliderPos:p,target:v},children:Object(b.jsx)("div",Object(r.a)(Object(r.a)({className:"container"},c),{},{children:Object(b.jsx)("div",{className:"inner",children:t})}))})}m.Frame=function(e){var t=e.children,a=Object(l.a)(e,["children"]);return Object(b.jsx)("section",Object(r.a)(Object(r.a)({className:"tab__frame"},a),{},{children:t}))},m.Tabs=function(e){var t=e.children,a=Object(l.a)(e,["children"]),c=Object(s.useContext)(j),n=c.sliderPos,i=c.target,m=c.setSliderPos,d=function(){var e=Object(s.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useLayoutEffect)((function(){function e(){c([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}();return Object(s.useEffect)((function(){var e=i.offsetLeft||36;e!==n&&m(e-5)}),[d]),Object(b.jsxs)("div",{className:"tabs-container",children:[Object(b.jsx)("div",Object(r.a)(Object(r.a)({className:"tabs"},a),{},{children:t})),Object(b.jsx)("div",{className:"slider-container",children:Object(b.jsx)("div",{className:"slider",style:{transform:"translateX(".concat(n,"px)")}})})]})},m.Title=function(e){e.children;var t=Object(l.a)(e,["children"]),a=Object(s.useContext)(j),c=a.tab,n=a.tabs;return Object(b.jsx)("h1",Object(r.a)(Object(r.a)({className:"title"},t),{},{children:n[c].name.toUpperCase()}))},m.Tab=function(e){e.children;var t=e.id,a=Object(l.a)(e,["children","id"]),c=Object(s.useContext)(j),n=c.tab,i=c.setTab,o=c.tabs,m=c.setSliderPos,d=c.setTarget;return Object(b.jsx)("div",Object(r.a)(Object(r.a)({id:t,className:n===t?"tab active-tab":"tab",onClick:function(e){i(t),m(e.target.offsetLeft-5),d(e.target)}},a),{},{children:Object(b.jsx)("h3",{children:o[t].name})}))},m.Body=function(e){e.children;var t=Object(l.a)(e,["children"]),a=Object(s.useContext)(j),c=a.tab,n=a.tabs;return Object(b.jsx)("div",Object(r.a)(Object(r.a)({className:"tab-body"},t),{},{children:n[c].component}))};var d=a(6),u=a(17);function h(){return Object(b.jsxs)("div",{className:"animation",children:[Object(b.jsx)("div",{className:"floor"}),Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsx)(d.g,{name:"a",className:"fav-icons",style:{color:"#f1ce06"}}),Object(b.jsx)(d.i,{name:"b",className:"fav-icons",style:{color:"#18dbf5"}}),Object(b.jsx)(d.a,{name:"c",className:"fav-icons",style:{color:"#2277ff"}}),Object(b.jsx)(d.f,{name:"d",className:"fav-icons",style:{color:"#f68646"}}),Object(b.jsx)(d.c,{name:"e",className:"fav-icons",style:{color:"pink"}}),Object(b.jsx)(d.e,{name:"f",className:"fav-icons",style:{color:"gray"}}),Object(b.jsx)(u.b,{name:"g",className:"fav-icons",style:{color:"#f1aa37"}}),Object(b.jsx)(u.c,{name:"h",className:"fav-icons",style:{color:"blue"}}),Object(b.jsx)(u.e,{name:"i",className:"fav-icons",style:{color:"violet"}}),Object(b.jsx)(u.a,{name:"j",className:"fav-icons",style:{color:"orange"}}),Object(b.jsx)(u.d,{name:"k",className:"fav-icons",style:{color:"brown"}})]})]})}function O(){return Object(b.jsxs)("div",{className:"icons",children:[Object(b.jsx)("a",{href:"https://github.com/musabash",children:Object(b.jsx)(d.d,{})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/musa-bas-79605621a/",children:Object(b.jsx)(d.h,{})}),Object(b.jsx)("a",{href:"https://twitter.com/musabas_",children:Object(b.jsx)(d.j,{})}),Object(b.jsx)("a",{href:"mailto:musa.bas@musabas.com",children:Object(b.jsx)(d.b,{})})]})}function p(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"I'm a front-end developer."}),Object(b.jsxs)("p",{children:["I love building web apps and sites with ",Object(b.jsx)("span",{children:"React JS"}),"."]}),Object(b.jsx)("p",{children:"I have a passion for coding. I always try to look to learn and stay current with developments in relevant technologies."})]})}function x(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsxs)("div",{className:"about_header",children:[Object(b.jsxs)("h1",{className:"my_name",children:["Musa ",Object(b.jsx)("span",{children:"Bas"})]}),Object(b.jsx)(O,{})]}),Object(b.jsx)(p,{}),Object(b.jsx)(h,{})]})}function f(){return Object(b.jsx)("div",{className:"table",children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:[["Main Languages","Javascript, HTML, CSS"],["Frameworks and Libraries","React JS, React Router, Styled Components, Material UI"],["Cloud","Firebase, AWS"],["Methodologies and Patterns","BEM, React Compound Components"],["Version Control","Git, Github"],["OS","Mac, Windows"],["IDE","Visual Studio Code"],["Familiar with","Agile, Scrum, React Native, SASS"]].map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e[0]}),Object(b.jsx)("td",{children:e[1]})]},e[0])}))})})})}function v(){return Object(b.jsx)("div",{className:"skills",children:Object(b.jsx)(f,{})})}var g=a(67),N=a.p+"static/media/blogXL.030c7e8d.png",_=a.p+"static/media/currency-converter.ed1a5032.png",y=a.p+"static/media/movie-search.79fe6a6c.png",k=a.p+"static/media/my-list.b6ae9fc3.png",S=a.p+"static/media/my-notes.583e0f32.png",w=a.p+"static/media/taxi-fare.c572852f.png",C=[{id:0,name:"BLOG XL",alt:"",link:"https://main.d303vueblqnfbj.amplifyapp.com/",github:"https://github.com/musabash/blogXL",readme:["Blogging and publishing app","React functional components and hooks","React Router, Compound components","Firebase Authentication, Firestore, Firebase Storage"]},{id:1,name:"CURRENCY CONVERTER",alt:"currency conversion web page picture",link:"https://musabash.github.io/currency-converter/",github:"https://github.com/musabash/currency-converter",readme:["Currency converter web app","React functional components and hooks","free.currencyconverterapi"]},{id:2,name:"MY LIST",alt:"My list web page picture",link:"https://musabash.github.io/my-list/",github:"https://github.com/musabash/my-list",readme:["A bit more than a todo list app","React functional components and hooks","Local storage"]},{id:3,name:"MOVIE SEARCH",alt:"movie searh web page picture",link:"https://movie-search-musabas.netlify.app/",github:"https://github.com/musabash/movie-search",readme:["Movie searching web app","React Functional components and hooks, React Router","The Movie Database (TMDB) API","Responsive"]},{id:4,name:"MY NOTES",alt:"my notes app web page picture",link:"https://my-notess.netlify.app/",github:"https://github.com/musabash/MyNotes",readme:["A note taking web app","React Functional components and hooks, React Router","Material UI, react-masonry-css, LocalStorage"]},{id:5,name:"FARE CALCULATOR",alt:"taxi fare estimator app",link:"https://musabash.github.io/taxi-fare-estimator/",github:"https://github.com/musabash/taxi-fare-estimator",readme:["An imaginary taxi fare calculator","Responsive","Html, CSS and Javascript"]}],R=[N,_,k,y,S,w];function L(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1],j=function(e){return function(){l(e),c(!0)}};return Object(b.jsx)("div",{className:"tab-content",children:a?Object(b.jsxs)("section",{className:"my-work",children:[Object(b.jsx)("input",{type:"button",className:"goto",onClick:function(){return c(!1)},value:"Go back"}),Object(b.jsx)("div",{className:"portfolio__iframe",children:Object(b.jsx)(g.a,{url:r.link,display:"initial",className:"portfolio__item__iframe"})},r.id)]}):Object(b.jsx)("section",{className:"my-work",children:Object(b.jsx)("div",{className:"portfolio",children:C.map((function(e){return Object(b.jsx)(M,{project:e,handleClick:j,picture:R[e.id]},e.id)}))})})})}function T(e){var t=e.readme;return Object(b.jsx)("div",{className:"readme",children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[" ",e]},e.id)}))})})}function M(e){var t=e.project,a=e.picture,s=e.handleClick;return Object(b.jsxs)("div",{className:"portfolio__item-container",onClick:s(t),children:[Object(b.jsxs)("div",{className:"portfolio__item",children:[Object(b.jsx)("img",{src:a,alt:t.alt,className:"portfolio__img"}),Object(b.jsx)(T,{readme:t.readme})]}),Object(b.jsx)("a",{href:t.link,className:"goto",target:"_blank",rel:"noreferrer",children:"Go to page"}),Object(b.jsx)("a",{href:t.github,className:"goto",target:"_blank",rel:"noreferrer",children:"View code"}),Object(b.jsx)("input",{type:"button",className:"goto",onClick:s(t),value:"View here"})]})}var F="template_kz0rmet",E="user_pWL69OvCbORp9nXs2CTWZ",A="service_6obrdi2",I=a(68),P=a(14),B=a(23),V=B.a().shape({user_name:B.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),message:B.b().min(20,"Too Short!").required("Required"),user_email:B.b().email("Invalid email").required("Required")});function q(){return Object(b.jsx)(P.c,{initialValues:{user_name:"",user_email:"",message:""},validationSchema:V,onSubmit:function(e,t){!function(e,t,a){Object(I.send)(A,F,e,E).then((function(e){console.log(e.text),"OK"===e.text&&(t(!1),a())}),(function(e){return e.text}))}(e,t.setSubmitting,t.resetForm)},children:function(e){var t=e.dirty,a=e.isValid,s=e.isSubmitting,c=e.values,n=e.errors,i=e.touched;return Object(b.jsx)("div",{className:"form__container",children:Object(b.jsxs)(P.b,{className:"contact__form",children:[Object(b.jsx)(P.a,{type:"hidden",name:"contact_number"}),Object(b.jsxs)("label",{className:"formik__label",htmlFor:"user_name",children:["Name ",Object(b.jsx)("span",{children:n.user_name&&i.user_name?n.user_name:null})]}),Object(b.jsx)(P.a,{className:"formik__input",name:"user_name",placeholder:"John"}),Object(b.jsxs)("label",{className:"formik__label",htmlFor:"user_email",children:["Email",Object(b.jsxs)("span",{children:[" ",n.user_email&&i.user_email?n.user_email:null]})]}),Object(b.jsx)(P.a,{className:"formik__input",name:"user_email",placeholder:"john@example.com",type:"email"}),Object(b.jsxs)("label",{className:"formik__label",htmlFor:"message",children:["Message",Object(b.jsxs)("span",{children:[" (",240-c.message.length,"chars) ",n.message&&i.message?n.message:null]})]}),Object(b.jsx)(P.a,{maxLength:"240",style:{height:"15em"},className:c.message.length>220?"input-warn formik__input":"formik__input",name:"message",as:"textarea"}),Object(b.jsx)("button",{className:t&&a?"submit":"submit disabled",type:"submit",disabled:!t||!a||s,children:s?"sending...":"Send Message"})]})})}})}function J(){var e=[{id:0,name:"Skills",component:Object(b.jsx)(v,{})},{id:1,name:"Projects",component:Object(b.jsx)(L,{})},{id:2,name:"Contact",component:Object(b.jsx)(q,{})}];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m,{tabs:e,children:[Object(b.jsx)(m.Tabs,{children:e.map((function(e){return Object(b.jsx)(m.Tab,{id:e.id,name:e.name},e.id)}))}),Object(b.jsx)(m.Frame,{children:Object(b.jsx)(m.Body,{})})]})})}var G=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsx)(x,{}),Object(b.jsx)(J,{})]})})};a(181);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.61dce0bc.chunk.js.map