(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/noImage.19d65de1.png"},48:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),o=n.n(i),l=n(14),u=n(17),c=n(4),s=n.n(c),p=n(10),d=n(11),m=n(12),f=n(15),g=n(13),b=n(16),v=n(2),h=n(1);function x(){var e=Object(v.a)(["\n  margin-bottom: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 5px;\n  text-transform: capitalize;\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return y=function(){return e},e}var j=h.default.div(y()),O=h.default.span(E()),k=h.default.div(x()),w=function(e){var t=e.title,n=e.children;return r.a.createElement(j,null,r.a.createElement(O,null,t),r.a.createElement(k,null,n))};function _(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size : 32px;\n  margin-top : 20px;\n"]);return _=function(){return e},e}var S=h.default.div(_()),C=function(){return r.a.createElement(S,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function F(){var e=Object(v.a)(["\n  color: ",";\n  font-size: 32px;\n"]);return F=function(){return e},e}function T(){var e=Object(v.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return T=function(){return e},e}var z=h.default.div(T()),M=h.default.span(F(),function(e){return e.color}),R=function(e){var t=e.color,n=e.text;return r.a.createElement(z,null,r.a.createElement(M,{color:t},n))};function U(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return U=function(){return e},e}function I(){var e=Object(v.a)(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 3px;\n"]);return I=function(){return e},e}function D(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return D=function(){return e},e}function P(){var e=Object(v.a)(["\n  display: block;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n"]);return P=function(){return e},e}function A(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var L=h.default.div(B()),N=h.default.div(A(),function(e){return e.bgUrl}),Y=h.default.span(P()),q=h.default.div(D(),N,Y),J=h.default.span(I()),V=h.default.span(U()),G=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,u=e.year,c=e.isMovie,s=void 0!==c&&c;return r.a.createElement(l.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(q,null,r.a.createElement(N,{bgUrl:a?"https://image.tmdb.org/t/p/w500".concat(a):n(26)}),r.a.createElement(Y,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2728")," ",o,"/10")),r.a.createElement(J,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(V,null,u)))},H=n(7),K=n.n(H);function Q(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return Q=function(){return e},e}var W=h.default.div(Q()),X=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Movies | kyuflix")),i?r.a.createElement(C,null):r.a.createElement(W,null,t&&t.length>0&&r.a.createElement(w,{title:"now playing"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(w,{title:"upcoming"},a.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(w,{title:"popular"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),o&&r.a.createElement(R,{color:"red",text:o})))},Z=n(44),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"86d79d1c1414c6932f3d59c37a0085a5",language:"ko-KR"}}),ee={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},movieDetail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})},collections:function(e){return $.get("collection/".concat(e))}},te={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airingToday:function(){return $.get("tv/airing_today")},showDetail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ee.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ee.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies infromation."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(X,this.state)}}]),t}(r.a.Component);function ae(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=h.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Tv Shows | kyuflix")),i?r.a.createElement(C,null):r.a.createElement(re,null,t&&t.length>0&&r.a.createElement(w,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(w,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(w,{title:"Airing Today"},a.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(R,{color:"red",text:o})))},oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,te.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,te.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(ie,this.state)}}]),t}(r.a.Component);function le(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return le=function(){return e},e}function ue(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n"]);return ue=function(){return e},e}function ce(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return ce=function(){return e},e}var se=h.default.div(ce()),pe=h.default.form(ue()),de=h.default.input(le()),me=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(se,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Search | kyuflix")),r.a.createElement(pe,{onSubmit:l},r.a.createElement(de,{placeholder:"Search Movies or Shows",value:a,onChange:u})),i?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(w,{title:"Movie Results"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(w,{title:"Tv Results"},n.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date.substring(0,4)})}))),o&&r.a.createElement(R,{color:"red",text:o}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(R,{text:"Nothing Found for ".concat(a),color:"#f7f7f7"}))},fe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;console.log(t),n.setState({searchTerm:t})},n.searchByTerm=Object(p.a)(s.a.mark(function e(){var t,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ee.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,te.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results"});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(me,Object.assign({},this.state,{handleSubmit:this.handleSubmit,updateTerm:this.updateTerm}))}}]),t}(r.a.Component);function ge(){var e=Object(v.a)(["\n  height : 50px;\n  display : flex;\n  align-items : center;\n  justify-content : center;\n"]);return ge=function(){return e},e}function be(){var e=Object(v.a)(["\n  width: 50px;\n  height : 50px;\n  text-align: center;\n  border-bottom : 5px solid ",";\n  transition : border-bottom 0.3s ease-in-out;\n"]);return be=function(){return e},e}function ve(){var e=Object(v.a)(["\n  display: flex;\n"]);return ve=function(){return e},e}function he(){var e=Object(v.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0%;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index : 10;\n"]);return he=function(){return e},e}var xe=h.default.header(he()),Ee=h.default.ul(ve()),ye=h.default.li(be(),function(e){return e.current?"white":"transparent"}),je=Object(h.default)(l.b)(ge()),Oe=Object(u.g)(function(e){var t=e.location.pathname;return r.a.createElement(xe,null,r.a.createElement(Ee,null,r.a.createElement(ye,{current:"/"===t},r.a.createElement(je,{to:"/"},"Movies")),r.a.createElement(ye,{current:"/tv"===t},r.a.createElement(je,{to:"/tv"},"TV")),r.a.createElement(ye,{current:"/search"===t},r.a.createElement(je,{to:"/search"},"Search"))))}),ke=n(19),we=n(22);function _e(){var e=Object(v.a)(["\n  all: unset;\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  transition: transform 0.3s ease-in-out;\n  font-size: 20px;\n  padding: 10px;\n  background-color: rgba(255, 107, 107);\n  border-radius: 5px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  &:hover {\n    transform: translateY(-3px);\n  }\n"]);return _e=function(){return e},e}function Se(){var e=Object(v.a)(["\n  display: inline-block;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 3px;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  width: auto;\n  height: 100px;\n  margin-bottom: 10px;\n"]);return Ce=function(){return e},e}function Fe(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  padding: 0px 10px;\n  box-sizing: border-box;\n"]);return Fe=function(){return e},e}function Te(){var e=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]);return Te=function(){return e},e}function ze(){var e=Object(v.a)(["\n  display: block;\n  cursor: pointer;\n  margin: 10px;\n  color: rgba(255, 255, 255, 0.8);\n  transition: all 0.3s ease-in-out;\n  font-size: 16px;\n  &:hover {\n    transform: scale(1.01);\n  }\n"]);return ze=function(){return e},e}function Me(){var e=Object(v.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  transition: all 0.3s ease-in-out;\n"]);return Me=function(){return e},e}function Re(){var e=Object(v.a)(["\n  background-color: rgba(255, 255, 255, 0.2);\n  border-bottom: ",";\n  box-sizing: border-box;\n  padding: 10px 10px;\n  font-size: 14px;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n  &:hover {\n    transform: translateY(-3px);\n  }\n"]);return Re=function(){return e},e}function Ue(){var e=Object(v.a)(["\n  display: flex;\n  margin-top: 10px;\n"]);return Ue=function(){return e},e}function Ie(){var e=Object(v.a)(["\n  all: unset;\n  width: 20px;\n  height: 10px;\n  background-color: #f5c518;\n  color: #000000;\n  border-radius: 5px;\n  font-weight: 900;\n  text-transform: capitalize;\n  padding: 2px 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n"]);return Ie=function(){return e},e}function De(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 2;\n  width: 50%;\n"]);return De=function(){return e},e}function Pe(){var e=Object(v.a)(["\n  margin: 0 10px;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(v.a)([""]);return Ae=function(){return e},e}function Be(){var e=Object(v.a)(["\n  margin: 20px;\n"]);return Be=function(){return e},e}function Le(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return Le=function(){return e},e}function Ne(){var e=Object(v.a)(["\n  position: relative;\n  width: 70%;\n  margin-left: 10px;\n"]);return Ne=function(){return e},e}function Ye(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Ye=function(){return e},e}function qe(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return qe=function(){return e},e}function Je(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return Je=function(){return e},e}function Ve(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Ve=function(){return e},e}var Ge=h.default.div(Ve()),He=h.default.div(Je(),function(e){return e.bgImage}),Ke=h.default.div(qe()),Qe=h.default.div(Ye(),function(e){return e.bgImage}),We=h.default.div(Ne()),Xe=h.default.h3(Le()),Ze=h.default.div(Be()),$e=h.default.span(Ae()),et=h.default.span(Pe()),tt=h.default.p(De()),nt=h.default.a(Ie()),at=h.default.ul(Ue()),rt=h.default.li(Re(),function(e){return e.Flag?"2px solid white":"none"}),it=h.default.div(Me()),ot=h.default.a(ze()),lt=h.default.div(Te()),ut=h.default.div(Fe()),ct=h.default.img(Ce()),st=h.default.span(Se()),pt=h.default.button(_e()),dt=function(e){var t=e.result,i=e.loading,o=(e.error,{youTubeFlag:!1,productionCompanyFlag:!1,productionCountriesFlag:!1}),u=Object(a.useState)(Object(ke.a)({},o,{youTubeFlag:!0})),c=Object(we.a)(u,2),s=c[0],p=c[1];return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Loading | kyuflix")),r.a.createElement(C,null)):r.a.createElement(Ge,null,r.a.createElement(K.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| kyuflix")),r.a.createElement(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ke,null,r.a.createElement(Qe,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(26)}),r.a.createElement(We,null,r.a.createElement(Xe,null,t.title?t.title:t.name),r.a.createElement(Ze,null,r.a.createElement($e,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(et,null,"\xb7"),r.a.createElement($e,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(et,null,"\xb7"),r.a.createElement($e,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})),t.imdb_id?r.a.createElement(r.a.Fragment,null,r.a.createElement(et,null,"\xb7"),r.a.createElement($e,null,r.a.createElement(nt,{href:"https://www.imdb.com/title/".concat(t.imdb_id),target:"_blank"},"imdb"))):null),r.a.createElement(tt,null,t.overview),r.a.createElement(at,null,t.videos.results&&0!==t.videos.results.length&&r.a.createElement(rt,{onClick:function(){return p(Object(ke.a)({},o,{youTubeFlag:!0}))},Flag:s.youTubeFlag},"Youtube"),t.production_companies&&0!==t.production_companies.length&&r.a.createElement(rt,{onClick:function(){return p(Object(ke.a)({},o,{productionCompanyFlag:!0}))},Flag:s.productionCompanyFlag},"Production Company"),t.production_countries&&0!==t.production_countries.length&&r.a.createElement(rt,{onClick:function(){return p(Object(ke.a)({},o,{productionCountriesFlag:!0}))},Flag:s.productionCountriesFlag},"Production Countries")),r.a.createElement(it,{id:"tabResult"},s.youTubeFlag&&t.videos.results.map(function(e){return r.a.createElement(ot,{href:"https://www.youtube.com/watch?v=".concat(e.key),target:"_blank",key:e.id},e.name)}),s.productionCompanyFlag&&r.a.createElement(lt,null,t.production_companies.map(function(e){return r.a.createElement(ut,{key:e.id},r.a.createElement(ct,{src:e.logo_path?"https://image.tmdb.org/t/p/original".concat(e.logo_path):n(26),alt:e.name}),r.a.createElement(st,null,e.name))})),s.productionCountriesFlag&&t.production_countries.map(function(e,t){return r.a.createElement(st,{key:t},e.name)})),t.belongs_to_collection&&r.a.createElement(l.b,{to:"/collections/".concat(t.belongs_to_collection.id)},r.a.createElement(pt,{type:"button"},"Collection")))))},mt=function(e){function t(e){var n;Object(d.a)(this,t),n=Object(f.a)(this,Object(g.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,i,o,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=13;break}return e.next=9,ee.movieDetail(i);case 9:l=e.sent,o=l.data,e.next=17;break;case 13:return e.next=15,te.showDetail(i);case 15:u=e.sent,o=u.data;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),this.setState({error:"Can't find anything"});case 22:return e.prev=22,this.setState({loading:!1,result:o}),e.finish(22);case 25:case"end":return e.stop()}},e,this,[[5,19,22,25]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(dt,this.state)}}]),t}(r.a.Component);function ft(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return ft=function(){return e},e}var gt=h.default.div(ft()),bt=function(e){var t=e.result,n=e.loading;e.error;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Loading | kyuflix")),r.a.createElement(C,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,"Collection | kyuflix")),r.a.createElement(gt,null,r.a.createElement(w,{title:"Collections"},t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,title:e.title,imageUrl:e.backdrop_path,rating:e.vote_average,year:e.release_date,isMovie:!0})}))))},vt=function(e){var t=Object(a.useState)({result:null,loading:!0,error:null}),n=Object(we.a)(t,2),i=n[0],o=n[1],l=e.match.params.id;return Object(a.useEffect)(function(){!function(){var e=Object(p.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.collections(l);case 2:t=e.sent,o(function(e){return Object(ke.a)({},e,{result:t.data.parts,loading:!1})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[l]),r.a.createElement(bt,i)},ht=function(){return r.a.createElement(l.a,null,r.a.createElement(Oe,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:ne}),r.a.createElement(u.b,{path:"/tv",component:oe}),r.a.createElement(u.b,{path:"/search",component:fe}),r.a.createElement(u.b,{path:"/movie/:id",component:mt}),r.a.createElement(u.b,{path:"/show/:id",component:mt}),r.a.createElement(u.b,{path:"/collections/:id",component:vt}),r.a.createElement(u.a,{from:"*",to:"/"})))},xt=n(45),Et=n.n(xt);function yt(){var e=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color: inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size : 14px;\n        background-color : rgba(20,20,20,1);\n        color : white;\n        padding-top : 50px;\n    }\n"]);return yt=function(){return e},e}var jt=Object(h.createGlobalStyle)(yt(),Et.a);var Ot=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(jt,null),r.a.createElement(ht,null))};o.a.render(r.a.createElement(Ot,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7fca3533.chunk.js.map