(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(1),i=n.n(u),o=n(2),l=n(3);function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(12);var v={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"};var b=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card__img"},r.a.createElement("img",{src:t.sprites.front_default,alt:""})),r.a.createElement("div",{className:"Card__name"},t.name),r.a.createElement("div",{className:"Card__types"},t.types.map((function(e){return r.a.createElement("div",{className:"Card__type",style:{backgroundColor:v[e.type.name]}},e.type.name)}))),r.a.createElement("div",{className:"Card__info"},r.a.createElement("div",{className:"Card__data Card__data--weight"},r.a.createElement("p",{className:"title"},"Weight"),r.a.createElement("p",null,t.weight)),r.a.createElement("div",{className:"Card__data Card__data--height"},r.a.createElement("p",{className:"title"},"Height"),r.a.createElement("p",null,t.height)),r.a.createElement("div",{className:"Card__data Card__data--ability"},r.a.createElement("p",{className:"title"},"Ability"),r.a.createElement("p",null,t.abilities[0].ability.name))))};n(13);var h=function(){return r.a.createElement("div",{className:"Navbar"},"Pokemon API")};n(14);var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),f=u[0],d=u[1],v=Object(a.useState)(""),E=Object(l.a)(v,2),k=E[0],x=E[1],y=Object(a.useState)(!0),_=Object(l.a)(y,2),g=_[0],w=_[1],N="https://pokeapi.co/api/v2/pokemon";Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(N);case 2:return t=e.sent,console.log(t),d(t.next),x(t.previous),e.next=8,O(t.results);case 8:w(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,p(f);case 3:return t=e.sent,e.next=6,O(t.results);case 6:d(t.next),x(t.Provious),w(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.next=5,p(k);case 5:return t=e.sent,e.next=8,O(t.results);case 8:d(t.next),x(t.previous),w(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,g?r.a.createElement("h1",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:C},"Prev"),r.a.createElement("button",{onClick:j},"Next")),r.a.createElement("div",{className:"grid-container"},n.map((function(e,t){return r.a.createElement(b,{key:t,pokemon:e})}))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:C},"Prev"),r.a.createElement("button",{onClick:j},"Next"))))};n(15);s.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.72fcfaa3.chunk.js.map