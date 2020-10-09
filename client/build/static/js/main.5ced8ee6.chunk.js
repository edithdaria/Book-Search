(this["webpackJsonpbooks-search"]=this["webpackJsonpbooks-search"]||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),c=(a(31),a(10)),i=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Google Book Search"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{to:"/search",className:"nav-link"},"Search ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/saved",className:"nav-link"},"Saved")))))},s=a(1),u=a(11),m=a(8),d=a.n(m);a(54);var v=function(e){var t=e.src;return l.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})};function b(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function E(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function f(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}function p(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)}function g(e){return console.log("props: ",e),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(b,null,l.a.createElement(E,null,l.a.createElement("button",{key:e.key_id,index:e.key_id,onClick:e.saveBook,type:"button",className:"btn btn-dark pull-right"},e.buttonText)),l.a.createElement("br",null),l.a.createElement(E,null,l.a.createElement(f,{size:"xs-4 sm-2"},l.a.createElement(v,{src:e.image})),l.a.createElement(f,{size:"xs-8 sm-9"},l.a.createElement("h4",null,e.title),l.a.createElement("p",null,l.a.createElement("strong",null,"Authors: "),e.authors),l.a.createElement("p",null,l.a.createElement("strong",null,"Description: ")," ",e.description),l.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:e.link},"More Info...")))))}var h=function(){return d.a.get("/api/books")},k=function(e){return d.a.delete("/api/books/"+e)},y=function(e){return d.a.post("/api/books",e)},N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(u.a)(o,2),i=c[0],s=c[1],m=function(e){e.preventDefault(),d.a.get("https://www.googleapis.com/books/v1/volumes?q="+a).then((function(e){console.log("res",e.data.items),s(e.data.items.map((function(e){return{key_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})))})).catch((function(e){return console.log(e)}))},v=function(e){e.preventDefault(),console.dir(e.target);var t=e.target.getAttribute("index");console.log("save book:"+t);var a=i.filter((function(e){return t===e.key_id}));console.log("books",a),y(a).then((function(e){alert("Book Saved Successfully!!")})).catch((function(e){return console.log(e)}))};return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:m,className:"jumbotron form-group"},l.a.createElement("center",null,l.a.createElement("h1",{className:"display-4"},"Google Books Search"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{onChange:function(e){var t=e.target.value;r(t.toLowerCase().replace(/\s/g,"%"))},type:"text",className:"form-control",placeholder:"Enter a book name","aria-label":"Enter a book name","aria-describedby":"basic-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{onClick:m,className:"btn btn-outline-secondary",type:"button"},"Submit"))),l.a.createElement("br",null))),l.a.createElement(b,null,l.a.createElement(E,null,l.a.createElement(f,{size:"xs-12"},l.a.createElement(p,null,i.map((function(e){return l.a.createElement(g,{key_id:e.key_id,key:e.key_id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link,saveBook:v,buttonText:"Save"})})))))))},x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];function o(){h().then((function(e){console.log("response: ",e.data),r(e.data)})).catch((function(e){return console.log(e)}))}function c(e){e.preventDefault(),console.log("test");var t=e.target.getAttribute("index");console.log("delete book:"+t);var n=a.filter((function(e){return t===e.key_id}));console.log("books",n),k(n).then((function(e){o(),alert("Book Deleted Successfully!!")})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){o()}),[]),l.a.createElement("div",{class:"jumbotron"},l.a.createElement("center",null,l.a.createElement("h1",{class:"display-4"},"Saved Search Results"),l.a.createElement("hr",{class:"my-4"})),l.a.createElement(b,null,l.a.createElement(E,null,l.a.createElement(f,{size:"xs-12"},l.a.createElement(p,null,a.map((function(e){return l.a.createElement(g,{key_id:e.key_id,key:e.key_id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link,saveBook:c,buttonText:"Delete"})})))))))};var S=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:["/","/search"],component:N}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55),a(57);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5ced8ee6.chunk.js.map