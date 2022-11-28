"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[982],{2636:function(n,e,t){t.d(e,{Q:function(){return b}});var r,a,o,i,c=t(6731),u=t(7689),s=t(2007),p=t.n(s),f=t(8843),x=t(168),d=t(7691),l=d.ZP.ul(r||(r=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-content: center;\n  align-items: stretch;\n  grid-gap: 20px;\n"]))),g=d.ZP.img(a||(a=(0,x.Z)(["\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),\n      0px 8px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 15px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),h=d.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  link-decoration: none;\n  text-decoration: none;\n"]))),v=d.ZP.h2(i||(i=(0,x.Z)(["\n  padding: 10px;\n  font-size: 18px;\n  line-height: 1.56;\n  color: #182446f2;\n\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  vertical-align: middle;\n  width: 280px;\n  height: 50px;\n  background-color: rgb(170 161 140 / 24%);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    color: #ad3737;\n  }\n"]))),m=t(184),b=function(n){var e=n.trendingMovies,t=(0,u.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,a=n.title,o=n.name;return(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,m.jsxs)(h,{children:[r?(0,m.jsx)(g,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:a,width:"300",height:"400"}):(0,m.jsx)("img",{src:f,alt:a,width:"300",height:"400"}),(0,m.jsx)(v,{children:a||o})]})})},e)}))})})};l.propTypes={trendingMovies:p().arrayOf(p().shape({id:p().string.isRequired,title:p().string.isRequired,name:p().string}))}},1982:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,o,i,c,u=t(885),s=t(2791),p=t(6731),f=t(2007),x=t.n(f),d=t(7161),l=t(2636),g=t(168),h=t(7691),v=h.ZP.div(r||(r=(0,g.Z)(["\n   {\n    padding: 25px;\n  }\n"]))),m=h.ZP.form(a||(a=(0,g.Z)(["\n   {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 30px;\n  }\n"]))),b=h.ZP.input(o||(o=(0,g.Z)(["\n  width: 300px;\n  color: #fff;\n  font-size: 16px;\n  padding: 11px 17px;\n  border: none;\n  background-color: #8e6f6f;\n  transition: all 0.2s ease-in;\n\n  float: left; /* IE 9 Fix */\n  &:hover,\n  &:focus {\n    background-color: #7e5a5a;\n    outline: none;\n  }\n"]))),Z=h.ZP.button(i||(i=(0,g.Z)(["\n  cursor: pointer;\n  display: inline-block;\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  padding: 11px 20px;\n  border: none;\n  margin-left: -1px;\n  background-color: #c0392b;\n  float: left; /* IE 9 Fix */\n  transition: all 0.2s ease-in;\n  &:hover {\n    background-color: #6e0e0e;\n  }\n"]))),y=h.ZP.div(c||(c=(0,g.Z)(["\n   {\n  }\n"]))),w=t(184);v.propTypes={moviesByQuery:x().func.isRequired};var j=function(){var n=(0,s.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.lr)(),o=(0,u.Z)(a,2),i=o[0],c=o[1],f=(0,s.useState)([]),x=(0,u.Z)(f,2),g=x[0],h=x[1];return(0,s.useEffect)((function(){var n=i.get("query");n&&(0,d.Wf)(n).then(h)}),[i]),(0,w.jsxs)(v,{children:[(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault(),c({query:t}),""===t.trim()&&alert("Please, enter some picture name!")},children:[(0,w.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Input movie name",value:t,onChange:function(n){var e=n.currentTarget.value;r(e)}}),(0,w.jsx)(Z,{type:"submit",children:"Search"})]}),(0,w.jsx)(y,{children:(0,w.jsx)(l.Q,{trendingMovies:g})})]})}},7161:function(n,e,t){t.d(e,{JN:function(){return s},Jh:function(){return d},Wf:function(){return f},bp:function(){return x},mU:function(){return p}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1044),c="api_key=31142dc0aeacf38ab901f6c28fe4e845",u="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(u,"/trending/movie/day?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(u,"/movie/").concat(e,"?").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(u,"/search/movie?").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(u,"/movie/").concat(e,"/credits?").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(u,"/movie/").concat(e,"/reviews?").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8843:function(n,e,t){n.exports=t.p+"static/media/noPoster.d2cd6666efb673bfcbba.jpeg"}}]);
//# sourceMappingURL=982.0ac90bb8.chunk.js.map