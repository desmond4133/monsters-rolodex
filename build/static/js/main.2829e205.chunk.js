(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var o=e(1),s=e.n(o),r=e(3),c=e.n(r),i=(e(12),e(4)),u=e(5),a=e(7),d=e(6),j=(e(13),e(14),e(0)),f=function(t){t.monster.name},h=function(t){return Object(j.jsx)("div",{className:"card-list",children:t.monsters.map((function(t){return Object(j.jsx)(f,{monster:t},t.id)}))})},m=function(t){Object(a.a)(e,t);var n=Object(d.a)(e);function e(){var t;return Object(i.a)(this,e),(t=n.call(this)).state={monsters:[]},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(n){return t.setState({monsters:n})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(h,{monsters:this.state.monsters})})}}]),e}(s.a.Component),l=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,o=n.getFID,s=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),o(t),s(t),r(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),l()}},[[16,1,2]]]);
//# sourceMappingURL=main.2829e205.chunk.js.map