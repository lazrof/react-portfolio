(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){e.exports=t.p+"static/media/python-logo.b32ab39f.png"},115:function(e,a,t){e.exports=t.p+"static/media/js-logo.e5e47a44.png"},116:function(e,a,t){e.exports=t.p+"static/media/wp-logo.bc7784a8.png"},117:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(62),t(63),t(31)),m=t.n(o),s=t(51),i=t(12),u=t(52),d=t.n(u),E=t(22),p=t.n(E),f=t(121),h=t(122),g=t(120),v=(t(108),function(e){var a=Object(n.useState)(e.modalStatus),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{show:r,onHide:function(){return c(!1),e.toggleModal(!1),!1}},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Get in Touch")),l.a.createElement(f.a.Body,null,l.a.createElement("p",null,"If you wanna get in touch, talk to me about a work offer, or just say hi. Please fill up this form."),l.a.createElement(h.a,null,l.a.createElement(h.a.Group,{controlId:"subject"},l.a.createElement(h.a.Control,{type:"text",placeholder:"Your Name"})),l.a.createElement(h.a.Group,{controlId:"email"},l.a.createElement(h.a.Control,{type:"email",placeholder:"Your email"})),l.a.createElement(h.a.Group,{controlId:"message"},l.a.createElement(h.a.Control,{as:"textarea",rows:"4",placeholder:"What do you want to talk about?"})))),l.a.createElement("div",{className:"submit-container"},l.a.createElement(g.a,{variant:"primary"},"Submit"))))}),b=(t(112),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("ul",{className:"social-icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/lazrof"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:nunzio.projects@gmail.com"},l.a.createElement("i",{className:"fas fa-envelope"})))),l.a.createElement("p",{className:"made-by"},"Handcrafted by Me using",l.a.createElement("a",{title:"React JS",href:"https://es.reactjs.org/",target:"blank"}," ",l.a.createElement("i",{className:"fab fa-react"})))))}),N=t(123),y=(t(113),function(){return l.a.createElement("div",{className:"carousel-container"},l.a.createElement(N.a,{interval:"1000"},l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block",width:"150px",src:t(114),alt:"First slide"})),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block",width:"150px",src:t(115),alt:"Third slide"})),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block",width:"150px",src:t(116),alt:"Third slide"}))))}),j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center fixed-nav"},l.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},"Nunzio Ruffo Portfolio"),l.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},l.a.createElement("a",{className:"pt-2 px-4 text-dark",href:"#"},"Projects"),l.a.createElement("a",{className:"pt-2 px-5 text-dark",href:"#"},"Blog"))))},w=t(33),x=function(e){var a=Object(n.useState)(e.data),t=Object(i.a)(a,2),r=t[0];t[1];if(r){var c;console.log("content"),console.log(r);var o=function(e){return l.a.createElement("li",{className:"card-layout php"},l.a.createElement("span",{className:"bagde-tag"},e.name))},m=function(){return r.tags.map((function(e){return l.a.createElement(o,{key:e.name,name:e.name})}))};return l.a.createElement("div",{className:"job-detail card-layout"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"image"},l.a.createElement("img",(c={src:"",width:"150px"},Object(w.a)(c,"src",r.media[0].url),Object(w.a)(c,"alt",""),c)))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"content"},p()(r.value)),l.a.createElement("div",{className:"badges-container"},l.a.createElement("ul",null,l.a.createElement(m,null))))))}return""},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bordered-title"},l.a.createElement("div",{className:"row projects-header"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h1",null,"See my Jobs")),l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("form",{action:"#",className:"d-none"},l.a.createElement("input",{id:"search-project",placeholder:"Python, Restful API, Postgres... ",type:"text"}),l.a.createElement("label",{className:"search-icon",htmlFor:"search-project"},l.a.createElement("i",{className:"fas fa-search"})))))))};t(117);var I=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({contents:null,isLoading:!0}),o=Object(i.a)(c,2),u=o[0],E=o[1];function f(){return(f=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://portfolio.nunzioproject.xyz/api/post/portfolio/");case 2:e.sent.json().then((function(e){E({contents:e.contents,isLoading:!1})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]);var h=function(){if(u.isLoading)return"";var e=u.contents.find((function(e){return"main-content"==e.key}));return l.a.createElement("section",{className:"header-section"},l.a.createElement("div",{className:"typed-card"},p()(e.value),l.a.createElement(d.a,{className:"strings",strings:I,typeSpeed:40,backSpeed:50,loop:!0})),l.a.createElement(y,null))},g=function(){if(u.isLoading)return"";var e=[];return u.contents.map((function(a){"job-detail"==a.key&&e.push(a)})),e.reverse(),e.map((function(e){return l.a.createElement(x,{key:e.key,data:e})}))},N=function(e){r(e)},w=function(){return l.a.createElement(v,{modalStatus:t,toggleModal:N})},I=["I'm Fullstack Developer","I'm Python Developer","I'm Javascript Developer","I'm self-taught Programmer","I'm person who never stops learning"];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(j,null),l.a.createElement(h,null),l.a.createElement("section",{className:"projects"},l.a.createElement(k,null),l.a.createElement(g,null))),l.a.createElement(b,null),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,a,t){e.exports=t(118)},62:function(e,a,t){},89:function(e,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.d121bad9.chunk.js.map