(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/noImage.19d65de1.png"},48:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),o=n.n(i),l=n(15),u=n(18),c=n(4),s=n.n(c),p=n(10),d=n(12),m=n(13),f=n(16),g=n(14),b=n(17),v=n(2),h=n(1);function x(){var e=Object(v.a)(["\n  margin-bottom: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 5px;\n  text-transform: capitalize;\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return y=function(){return e},e}var j=h.default.div(y()),O=h.default.span(E()),k=h.default.div(x()),_=function(e){var t=e.title,n=e.children;return r.a.createElement(j,null,r.a.createElement(O,null,t),r.a.createElement(k,null,n))};function w(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size : 32px;\n  margin-top : 20px;\n"]);return w=function(){return e},e}var F=h.default.div(w()),S=function(){return r.a.createElement(F,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function z(){var e=Object(v.a)(["\n  color: ",";\n  font-size: 32px;\n"]);return z=function(){return e},e}function C(){var e=Object(v.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return C=function(){return e},e}var T=h.default.div(C()),U=h.default.span(z(),function(e){return e.color}),M=function(e){var t=e.color,n=e.text;return r.a.createElement(T,null,r.a.createElement(U,{color:t},n))};function R(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return R=function(){return e},e}function I(){var e=Object(v.a)(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 3px;\n"]);return I=function(){return e},e}function B(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return B=function(){return e},e}function D(){var e=Object(v.a)(["\n  display: block;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n"]);return D=function(){return e},e}function P(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return P=function(){return e},e}function A(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return A=function(){return e},e}var L=h.default.div(A()),N=h.default.div(P(),function(e){return e.bgUrl}),Y=h.default.span(D()),q=h.default.div(B(),N,Y),J=h.default.span(I()),V=h.default.span(R()),G=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,u=e.year,c=e.isMovie,s=void 0!==c&&c;return r.a.createElement(l.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(q,null,r.a.createElement(N,{bgUrl:a?"https://image.tmdb.org/t/p/w500".concat(a):n(22)}),r.a.createElement(Y,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2728")," ",o,"/10")),r.a.createElement(J,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(V,null,u)))},H=n(7),K=n.n(H);function Q(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return Q=function(){return e},e}var W=h.default.div(Q()),X=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Movies | kyuflix")),i?r.a.createElement(S,null):r.a.createElement(W,null,t&&t.length>0&&r.a.createElement(_,{title:"now playing"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(_,{title:"upcoming"},a.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(_,{title:"popular"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),o&&r.a.createElement(M,{color:"red",text:o})))},Z=n(44),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"86d79d1c1414c6932f3d59c37a0085a5",language:"ko-KR"}}),ee={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},movieDetail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})},collections:function(e){return $.get("collection/".concat(e))}},te={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airingToday:function(){return $.get("tv/airing_today")},showDetail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ee.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ee.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies infromation."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(X,this.state)}}]),t}(r.a.Component);function ae(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=h.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Tv Shows | kyuflix")),i?r.a.createElement(S,null):r.a.createElement(re,null,t&&t.length>0&&r.a.createElement(_,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(_,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(_,{title:"Airing Today"},a.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(M,{color:"red",text:o})))},oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,te.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,te.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(ie,this.state)}}]),t}(r.a.Component);function le(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return le=function(){return e},e}function ue(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n"]);return ue=function(){return e},e}function ce(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return ce=function(){return e},e}var se=h.default.div(ce()),pe=h.default.form(ue()),de=h.default.input(le()),me=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(se,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Search | kyuflix")),r.a.createElement(pe,{onSubmit:l},r.a.createElement(de,{placeholder:"Search Movies or Shows",value:a,onChange:u})),i?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(_,{title:"Movie Results"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(_,{title:"Tv Results"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})}))),o&&r.a.createElement(M,{color:"red",text:o}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(M,{text:"Nothing Found for ".concat(a),color:"#f7f7f7"}))},fe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;console.log(t),n.setState({searchTerm:t})},n.searchByTerm=Object(p.a)(s.a.mark(function e(){var t,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ee.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,te.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results"});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(me,Object.assign({},this.state,{handleSubmit:this.handleSubmit,updateTerm:this.updateTerm}))}}]),t}(r.a.Component);function ge(){var e=Object(v.a)(["\n  height : 50px;\n  display : flex;\n  align-items : center;\n  justify-content : center;\n"]);return ge=function(){return e},e}function be(){var e=Object(v.a)(["\n  width: 50px;\n  height : 50px;\n  text-align: center;\n  border-bottom : 5px solid ",";\n  transition : border-bottom 0.3s ease-in-out;\n"]);return be=function(){return e},e}function ve(){var e=Object(v.a)(["\n  display: flex;\n"]);return ve=function(){return e},e}function he(){var e=Object(v.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0%;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index : 10;\n"]);return he=function(){return e},e}var xe=h.default.header(he()),Ee=h.default.ul(ve()),ye=h.default.li(be(),function(e){return e.current?"white":"transparent"}),je=Object(h.default)(l.b)(ge()),Oe=Object(u.g)(function(e){var t=e.location.pathname;return r.a.createElement(xe,null,r.a.createElement(Ee,null,r.a.createElement(ye,{current:"/"===t},r.a.createElement(je,{to:"/"},"Movies")),r.a.createElement(ye,{current:"/tv"===t},r.a.createElement(je,{to:"/tv"},"TV")),r.a.createElement(ye,{current:"/search"===t},r.a.createElement(je,{to:"/search"},"Search"))))}),ke=n(11),_e=n(23);function we(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return we=function(){return e},e}function Fe(){var e=Object(v.a)(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 3px;\n"]);return Fe=function(){return e},e}function Se(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return Se=function(){return e},e}function ze(){var e=Object(v.a)(["\n  display: block;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-size : 14px;\n  font-weight : 600;\n  color : #feca57;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return Te=function(){return e},e}var Ue=h.default.div(Te()),Me=h.default.div(Ce(),function(e){return e.bgUrl}),Re=h.default.span(ze()),Ie=h.default.div(Se(),Me,Re),Be=h.default.span(Fe()),De=h.default.span(we()),Pe=function(e){var t=e.imageUrl,a=e.title,i=e.year,o=e.count;return r.a.createElement(Ue,null,r.a.createElement(Ie,null,r.a.createElement(Me,{bgUrl:t?"https://image.tmdb.org/t/p/w500".concat(t):n(22)}),r.a.createElement(Re,null,o)),r.a.createElement(Be,null,a.length>18?"".concat(a.substring(0,18),"..."):a),r.a.createElement(De,null,i))};function Ae(){var e=Object(v.a)(["\n  all: unset;\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  transition: transform 0.3s ease-in-out;\n  font-size: 20px;\n  padding: 10px;\n  background-color: rgba(255, 107, 107);\n  border-radius: 5px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  &:hover {\n    transform: translateY(-3px);\n  }\n"]);return Ae=function(){return e},e}function Le(){var e=Object(v.a)(["\n  display: inline-block;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 3px;\n"]);return Le=function(){return e},e}function Ne(){var e=Object(v.a)(["\n  width: auto;\n  height: 100px;\n  margin-bottom: 10px;\n"]);return Ne=function(){return e},e}function Ye(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  padding: 0px 10px;\n  box-sizing: border-box;\n"]);return Ye=function(){return e},e}function qe(){var e=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]);return qe=function(){return e},e}function Je(){var e=Object(v.a)(["\n  display: block;\n  cursor: pointer;\n  margin: 10px;\n  color: rgba(255, 255, 255, 0.8);\n  transition: all 0.3s ease-in-out;\n  font-size: 16px;\n  &:hover {\n    transform: scale(1.01);\n  }\n"]);return Je=function(){return e},e}function Ve(){var e=Object(v.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  transition: all 0.3s ease-in-out;\n"]);return Ve=function(){return e},e}function Ge(){var e=Object(v.a)(["\n  background-color: rgba(255, 255, 255, 0.2);\n  border-bottom: ",";\n  box-sizing: border-box;\n  padding: 10px 10px;\n  font-size: 14px;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n  &:hover {\n    transform: translateY(-3px);\n  }\n"]);return Ge=function(){return e},e}function He(){var e=Object(v.a)(["\n  display: flex;\n  margin-top: 10px;\n"]);return He=function(){return e},e}function Ke(){var e=Object(v.a)(["\n  all: unset;\n  width: 20px;\n  height: 10px;\n  background-color: #f5c518;\n  color: #000000;\n  border-radius: 5px;\n  font-weight: 900;\n  text-transform: capitalize;\n  padding: 2px 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 2;\n  width: 50%;\n"]);return Qe=function(){return e},e}function We(){var e=Object(v.a)(["\n  margin: 0 10px;\n"]);return We=function(){return e},e}function Xe(){var e=Object(v.a)([""]);return Xe=function(){return e},e}function Ze(){var e=Object(v.a)(["\n  margin: 20px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return $e=function(){return e},e}function et(){var e=Object(v.a)(["\n  position: relative;\n  width: 70%;\n  margin-left: 10px;\n"]);return et=function(){return e},e}function tt(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return nt=function(){return e},e}function at(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return at=function(){return e},e}function rt(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return rt=function(){return e},e}var it=h.default.div(rt()),ot=h.default.div(at(),function(e){return e.bgImage}),lt=h.default.div(nt()),ut=h.default.div(tt(),function(e){return e.bgImage}),ct=h.default.div(et()),st=h.default.h3($e()),pt=h.default.div(Ze()),dt=h.default.span(Xe()),mt=h.default.span(We()),ft=h.default.p(Qe()),gt=h.default.a(Ke()),bt=h.default.ul(He()),vt=h.default.li(Ge(),function(e){return e.Flag?"2px solid white":"none"}),ht=h.default.div(Ve()),xt=h.default.a(Je()),Et=h.default.div(qe()),yt=h.default.div(Ye()),jt=h.default.img(Ne()),Ot=h.default.span(Le()),kt=h.default.button(Ae()),_t=function(e){var t=e.result,i=e.loading,o=(e.error,{youTubeFlag:!1,productionCompanyFlag:!1,productionCountriesFlag:!1,createdByFlag:!1,seasonsFlag:!1}),u=Object(a.useState)(Object(ke.a)({},o,{youTubeFlag:!0})),c=Object(_e.a)(u,2),s=c[0],p=c[1];return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Loading | kyuflix")),r.a.createElement(S,null)):r.a.createElement(it,null,r.a.createElement(K.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| kyuflix")),r.a.createElement(ot,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(lt,null,r.a.createElement(ut,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(22)}),r.a.createElement(ct,null,r.a.createElement(st,null,t.title?t.title:t.name),r.a.createElement(pt,null,r.a.createElement(dt,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(mt,null,"\xb7"),r.a.createElement(dt,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(mt,null,"\xb7"),r.a.createElement(dt,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})),t.imdb_id?r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,null,"\xb7"),r.a.createElement(dt,null,r.a.createElement(gt,{href:"https://www.imdb.com/title/".concat(t.imdb_id),target:"_blank"},"imdb"))):null),r.a.createElement(ft,null,t.overview),r.a.createElement(bt,null,t.videos.results&&0!==t.videos.results.length&&r.a.createElement(vt,{onClick:function(){return p(Object(ke.a)({},o,{youTubeFlag:!0}))},Flag:s.youTubeFlag},"Youtube"),t.production_companies&&0!==t.production_companies.length&&r.a.createElement(vt,{onClick:function(){return p(Object(ke.a)({},o,{productionCompanyFlag:!0}))},Flag:s.productionCompanyFlag},"Production Company"),t.production_countries&&0!==t.production_countries.length&&r.a.createElement(vt,{onClick:function(){return p(Object(ke.a)({},o,{productionCountriesFlag:!0}))},Flag:s.productionCountriesFlag},"Production Countries"),t.created_by&&0!==t.created_by.length&&r.a.createElement(vt,{onClick:function(){return p(Object(ke.a)({},o,{createdByFlag:!0}))},Flag:s.createdByFlag},"Created By"),t.seasons&&0!==t.seasons.length&&r.a.createElement(vt,{onClick:function(){return p(Object(ke.a)({},o,{seasonsFlag:!0}))},Flag:s.seasonsFlag},"Seasons")),r.a.createElement(ht,{id:"tabResult"},s.youTubeFlag&&t.videos.results.map(function(e){return r.a.createElement(xt,{href:"https://www.youtube.com/watch?v=".concat(e.key),target:"_blank",key:e.id},e.name)}),s.productionCompanyFlag&&r.a.createElement(Et,null,t.production_companies.map(function(e){return r.a.createElement(yt,{key:e.id},r.a.createElement(jt,{src:e.logo_path?"https://image.tmdb.org/t/p/original".concat(e.logo_path):n(22),alt:e.name}),r.a.createElement(Ot,null,e.name))})),s.productionCountriesFlag&&t.production_countries.map(function(e,t){return r.a.createElement(Ot,{key:t},e.name)}),s.createdByFlag&&t.created_by.map(function(e,t){return r.a.createElement(Ot,{key:e.id},e.name)}),s.seasonsFlag&&r.a.createElement(_,null,t.seasons.map(function(e){return r.a.createElement(Pe,{key:e.id,imageUrl:e.poster_path,title:e.name,year:e.air_date,count:e.episode_count})}))),t.belongs_to_collection&&r.a.createElement(l.b,{to:"/collections/".concat(t.belongs_to_collection.id)},r.a.createElement(kt,{type:"button"},"Collection")))))},wt=function(e){function t(e){var n;Object(d.a)(this,t),n=Object(f.a)(this,Object(g.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=13;break}return e.next=9,ee.movieDetail(i);case 9:l=e.sent,o=l.data,e.next=17;break;case 13:return e.next=15,te.showDetail(i);case 15:u=e.sent,o=u.data;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),this.setState({error:"Can't find anything"});case 22:return e.prev=22,this.setState({loading:!1,result:o}),e.finish(22);case 25:case"end":return e.stop()}},e,this,[[5,19,22,25]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(_t,this.state)}}]),t}(r.a.Component);function Ft(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return Ft=function(){return e},e}var St=h.default.div(Ft()),zt=function(e){var t=e.result,n=e.loading;e.error;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Loading | kyuflix")),r.a.createElement(S,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Collection | kyuflix")),r.a.createElement(St,null,r.a.createElement(_,{title:"Collections"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,title:e.title,imageUrl:e.backdrop_path,rating:e.vote_average,year:e.release_date,isMovie:!0})}))))},Ct=function(e){var t=Object(a.useState)({result:null,loading:!0,error:null}),n=Object(_e.a)(t,2),i=n[0],o=n[1],l=e.match.params.id;return Object(a.useEffect)(function(){!function(){var e=Object(p.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.collections(l);case 2:t=e.sent,o(function(e){return Object(ke.a)({},e,{result:t.data.parts,loading:!1})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[l]),r.a.createElement(zt,i)},Tt=function(){return r.a.createElement(l.a,null,r.a.createElement(Oe,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:ne}),r.a.createElement(u.b,{path:"/tv",component:oe}),r.a.createElement(u.b,{path:"/search",component:fe}),r.a.createElement(u.b,{path:"/movie/:id",component:wt}),r.a.createElement(u.b,{path:"/show/:id",component:wt}),r.a.createElement(u.b,{path:"/collections/:id",component:Ct}),r.a.createElement(u.a,{from:"*",to:"/"})))},Ut=n(45),Mt=n.n(Ut);function Rt(){var e=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color: inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size : 14px;\n        background-color : rgba(20,20,20,1);\n        color : white;\n        padding-top : 50px;\n    }\n"]);return Rt=function(){return e},e}var It=Object(h.createGlobalStyle)(Rt(),Mt.a);var Bt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(It,null),r.a.createElement(Tt,null))};o.a.render(r.a.createElement(Bt,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.836f7882.chunk.js.map