(window.webpackJsonpinversus=window.webpackJsonpinversus||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo_black_small.504f93d3.png"},26:function(e,t,a){e.exports=a.p+"static/media/pt.8ce156e0.svg"},27:function(e,t,a){e.exports=a.p+"static/media/gb.c4cd6642.svg"},28:function(e,t,a){e.exports=a.p+"static/media/de.69ccebc7.svg"},42:function(e,t,a){e.exports=a.p+"static/media/capa.f2e09160.png"},43:function(e,t,a){e.exports=a.p+"static/media/contracapa.dc08253b.png"},44:function(e,t,a){e.exports=a.p+"static/media/cd.859ce87a.png"},45:function(e,t,a){e.exports=a.p+"static/media/INTRO_480P.c011d0db.mp4"},46:function(e,t,a){e.exports=a.p+"static/media/inversus-logo-up.20793976.png"},47:function(e,t,a){e.exports=a.p+"static/media/inversus-logo-down.273a33b9.png"},48:function(e,t,a){e.exports=a.p+"static/media/guitar1.e6bdb5ba.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/guitar2.6398cab8.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/guitar3.a4a54994.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/guitar4.669613c9.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/guitar5.3e533d7b.jpg"},54:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),l=a(10),o=a(11),s=a(12),u=a(18),m=a(17),d=a(19),p=a(25),h=a.n(p),g=a(14),f=a(6),b=function(e){var t=e.links,a=e.signOut,n=t.filter(function(e){return"logo"===e.label})[0],c=t.filter(function(e){return"logo"!==e.label}).sort(function(e,t){return e.order>t.order?1:t.order>e.order?-1:0});return r.a.createElement("header",{className:"header"},r.a.createElement(g.b,{to:n.to,title:n.label,className:"header__logo"},r.a.createElement("img",{src:h.a,alt:"logo"})),r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",{className:"header-nav-list"},c.map(function(e){return r.a.createElement(g.c,{exact:!0,to:e.to,title:"Events",className:"m-2"},e.label)}),r.a.createElement("a",{className:"m-2",onClick:a},r.a.createElement(f.a,{icon:["fas","sign-out-alt"],style:{height:"1.5em",width:"1.5em"}})))),r.a.createElement("div",{className:"header__border-bottom"}))},E=function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"shade1"}),r.a.createElement("a",{href:"https://www.facebook.com/inversusfado/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:["fab","facebook"],style:{height:"4em",width:"4rem",margin:"5px"}})),r.a.createElement("a",{href:"https://www.instagram.com/inversusfado/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:["fab","instagram"],style:{height:"4em",width:"4rem",margin:"5px"}})),r.a.createElement("a",{href:"https://open.spotify.com/artist/68hqv7bUIw71HHJExldzLZ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:["fab","spotify"],style:{height:"4em",width:"4rem",margin:"5px"}})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCbYgNYLv-PDjDbsMqLdu5eA",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:["fab","youtube"],style:{height:"4em",width:"4rem",margin:"5px"}}))))},v=a(16),y=a.n(v);y.a.setAppElement("#root");var O={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"black",animation:"repertoire 1s"},overlay:{zIndex:99999,backgroundColor:"rgba(188,158,91,0)"}},_=function(e){var t=e.dynamicData,a=e.currentTrack,n=e.handleSelectTrack,c=e.handleModalOpen,i=e.handleMute,l=e.isModalOpen;return r.a.createElement("div",{className:"content-container"},r.a.createElement(y.a,{isOpen:l,onRequestClose:function(){return c(!1)},style:O,contentLabel:"Example Modal"},r.a.createElement("audio",{autoPlay:!0,loop:!0,id:"myAudio",muted:e.muted,onLoadStart:function(e){var t=e.target;t.volume=0,setTimeout(function(){return function e(t){t.volume>=0&&t.volume<1&&2*(t.volume+.01)<1&&(t.volume+=.01,setTimeout(function(){return e(t)},75))}(t)},1e3)}},r.a.createElement("source",{src:a.previewUrl})),r.a.createElement("div",{className:"repertoire-modal"},r.a.createElement("div",{className:"repertoire-header"},r.a.createElement("div",{className:"repertoire-header__icon-close"},r.a.createElement("button",{onClick:function(){return c(!1)}},r.a.createElement(f.a,{icon:["fas","window-close"],style:{height:"1rem",width:"1rem",color:"white"}}))),r.a.createElement("div",{className:"repertoire-header__icon-center"},r.a.createElement("button",{onClick:i,style:{color:"white"}},e.muted?r.a.createElement(f.a,{icon:["fas","volume-mute"],style:{height:"2rem",width:"2rem"}}):r.a.createElement(f.a,{icon:["fas","volume-up"],style:{height:"2rem",width:"2rem"}})),r.a.createElement("a",{href:a.spotifyUrl,style:{color:"white"},target:"blank"},r.a.createElement(f.a,{style:{height:"2rem",width:"2rem"},icon:["fab","spotify"]}))),r.a.createElement("h1",{style:{textAlign:"center"}},a.name)),r.a.createElement("div",{className:"repertoire-body"},r.a.createElement("div",{className:"shade1"}),r.a.createElement("div",{className:"repertoire-body__lyrics whitespace-pre-wrap"},r.a.createElement("p",null,a.lyrics)),r.a.createElement("div",{className:"shade2"})))),r.a.createElement("div",{className:"repertoire"},r.a.createElement("div",{className:"shade1"}),r.a.createElement("div",{className:"repertoire-container"},t.repertoire.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}).map(function(e,t){return r.a.createElement("div",{key:e.id,className:"repertoire-card",onClick:function(){return n(e.id)}},r.a.createElement("div",{className:"repertoire-card__background",style:{backgroundImage:"url(".concat(e.imgUrl,")"),filter:"grayscale(1)"}},r.a.createElement("h1",null,e.name)))})),r.a.createElement("div",{className:"shade2"})))},w=function(e){var t=e.dynamicData;return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"members"},r.a.createElement("div",{className:"shade1"}),r.a.createElement("div",{className:"members-container"},t.members.map(function(e,t){return"left"===(t%2===0?"left":"right")?r.a.createElement("div",null,r.a.createElement("img",{src:e.imgUrl,className:"members__img",alt:"paralax"}),r.a.createElement("p",{className:"members__text whitespace-pre-wrap"},e.text)):r.a.createElement("div",null,r.a.createElement("p",{className:"members__text whitespace-pre-wrap",style:{textAlign:"right"}},e.text),r.a.createElement("img",{src:e.imgUrl,className:"members__img",alt:"paralax"}))}),") }"),r.a.createElement("div",{className:"shade2"})))},k=a(42),N=a.n(k),x=a(43),S=a.n(x),j=a(44),C=a.n(j),D=function(e){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"albums"},r.a.createElement("div",{className:"shade1"}),r.a.createElement("div",{className:"albums-container"},r.a.createElement("img",{src:N.a}),r.a.createElement("img",{src:S.a}),r.a.createElement("img",{src:C.a})),r.a.createElement("div",{className:"shade2"})))},M=a(45),L=a.n(M),P=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("myVideo");e.volume=.1,e.play()}},{key:"render",value:function(){var e=this.props.handleVideoEnded;return r.a.createElement("div",null,r.a.createElement("video",{autoplay:!0,playsinline:!0,autobuffer:!0,id:"myVideo",onEnded:e},r.a.createElement("source",{src:L.a,type:"video/mp4"})))}}]),t}(n.Component),U=function(e){var t=e.languageList,a=e.currentLanguage,n=e.handleSetLanguage,c=e.isAdmin,i=c?"inline-block":"none";return r.a.createElement("div",{className:"language-selector".concat(c?"":"--animated")},t.map(function(e){return console.log("languages: ",a,e.language),e.language===a?r.a.createElement("img",{src:e.imgSrc,alt:"language",style:{width:"50px",border:"5px solid #ddd",margin:"2px 2px",display:i}}):r.a.createElement("button",{onClick:function(){return n(e.language)},className:"language-selector__button"},r.a.createElement("img",{src:e.imgSrc,alt:"language",style:{width:"50px",height:"30px",margin:"2px 2px"}}))}))},T=a(46),I=a.n(T),A=a(47),F=a.n(A),R=a(26),z=a.n(R),V=a(27),H=a.n(V),q=a(28),J=a.n(q),W=a(48),B=a.n(W),K=a(49),Y=a.n(K),Z=a(50),$=a.n(Z),G=a(51),Q=a.n(G),X=a(52),ee=a.n(X),te=[B.a,Y.a,$.a,Q.a,ee.a],ae=function(e){var t=e.text;return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__text"},r.a.createElement("div",{className:"shade1"}),t.replace(/[\r\n]{2,}/g,"\n").split("\n").map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e),r.a.createElement("img",{src:te[t],className:"home__image",alt:"home"}))}),r.a.createElement("div",{className:"shade2"}))))},ne=a(4),re=a.n(ne),ce=a(7),ie=a(29),le=a.n(ie);a(77),a(79);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ue={apiKey:"AIzaSyAcHlKFPl_VDbeOHWNZDsVr20AfedkUg1I",authDomain:"inversus-af0a6.firebaseapp.com",databaseURL:"https://inversus-af0a6.firebaseio.com",projectId:"inversus-af0a6",storageBucket:"inversus-af0a6.appspot.com",messagingSenderId:"247795252791",appId:"1:247795252791:web:28826135cbf003cf"},me=new(function(){function e(){var t=this;Object(o.a)(this,e),this.getDocument=function(){var e=Object(ce.a)(re.a.mark(function e(a){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.doc(t.language.concat("/".concat(a))).get().then(function(e){return e.data()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.addOrEditDocument=function(){var e=Object(ce.a)(re.a.mark(function e(a,n){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.doc(t.language.concat("/".concat(a))).set(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.updateDocument=function(){var e=Object(ce.a)(re.a.mark(function e(a,n){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.auth.currentUser){e.next=2;break}return e.abrupt("return",alert("Not authorized"));case 2:return e.next=4,t.db.doc(t.language.concat("/".concat(a,"/").concat(n.id))).update(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.deleteDocument=function(){var e=Object(ce.a)(re.a.mark(function e(a){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.auth.currentUser){e.next=2;break}return e.abrupt("return",alert("Not authorized"));case 2:return e.next=4,t.db.doc(t.language.concat("/".concat(a))).delete();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getCollection=function(){var e=Object(ce.a)(re.a.mark(function e(a){var n;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.collection(t.language.concat("/".concat(a))).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map(function(e){return se({id:e.id},e.data())}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.addToCollection=function(){var e=Object(ce.a)(re.a.mark(function e(a,n){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.auth.currentUser){e.next=2;break}return e.abrupt("return",alert("Not authorized"));case 2:return e.next=4,t.db.collection(t.language.concat("/".concat(a))).add(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.getStaticData=Object(ce.a)(re.a.mark(function e(){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDocument("static_values");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),le.a.initializeApp(ue),this.language="",this.auth=le.a.auth(),this.db=le.a.firestore()}return Object(s.a)(e,[{key:"getDynamicData",value:function(){var e=Object(ce.a)(re.a.mark(function e(){var t,a,n,r,c;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCollection("dynamic_values/repertoire");case 2:return t=e.sent,e.next=5,this.getDocument("dynamic_values");case 5:return a=e.sent,e.next=8,this.getCollection("dynamic_values/members");case 8:return n=e.sent,r=a?a.homeText:"",c={homeText:r,repertoire:t,members:n,currentLanguage:this.language},e.abrupt("return",c);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(e,t){return this.auth.signInWithEmailAndPassword(e,t)}},{key:"logout",value:function(){return this.auth.signOut()}},{key:"setLanguage",value:function(e){console.log("wtf",e),this.language=e}},{key:"register",value:function(){var e=Object(ce.a)(re.a.mark(function e(t,a,n){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:t}));case 3:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"isInitialized",value:function(){var e=this;return new Promise(function(t){e.auth.onAuthStateChanged(t)})}},{key:"getCurrentUsername",value:function(){return this.auth.currentUser}}]),e}()),de=a(20),pe=a(53),he=a(35),ge=r.a.memo(function(e){e.history;var t=e.location,a=e.children,n=Object(pe.a)(e,["history","location","children"]),c="/"===t.pathname;return r.a.createElement(he.a,{flipMove:!1,preEnterPose:c?"leftSide":"rightSide",exitPose:c?"rightSide":"leftSide"},r.a.createElement(be,{key:t.pathname,reverse:c},r.a.createElement(de.c,Object.assign({location:t},n),a)))}),fe=400,be=he.b.div({enter:{opacity:1,transition:{type:"tween",ease:"easeInOut",duration:fe}},leftSide:{opacity:0,transition:{type:"tween",ease:"easeInOut",duration:fe}},rightSide:{opacity:0,transition:{type:"tween",ease:"easeInOut",duration:fe}}});function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ye={animate:!0,muted:!1,dynamicData:{repertoire:[],members:[],homeText:""},currentLanguage:"",isModalOpen:!1,languageList:[{language:"pt",imgSrc:z.a},{language:"en",imgSrc:H.a},{language:"de",imgSrc:J.a}],currentTrack:{name:"",lyrics:"",imgUrl:"",spotifyUrl:""},headerLinks:[],videoEnded:!1},Oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleVideoEnded=function(){a.setState({videoEnded:!0})},a.refreshData=function(){var e={currentLanguage:a.fire.language};a.fire.getDynamicData().then(function(t){return e=ve({},e,{dynamicData:t})}).then(function(){return a.fire.getStaticData()}).then(function(t){return e=ve({},e,{headerLinks:t.header_links})}).then(function(){return a.setState(e)})},a.handleSetLanguage=function(e){a.fire.setLanguage(e),a.refreshData()},a.handleMute=function(){a.setState({muted:!a.state.muted})},a.handleSelectTrack=function(e){var t=a.state.dynamicData.repertoire.filter(function(t){return t.id===e})[0];a.setState(ve({},a.state,{isModalOpen:!0,currentTrack:t}))},a.handleModalOpen=function(e){return a.setState({isModalOpen:e})},a.state=sessionStorage.getItem("appState")?JSON.parse(sessionStorage.getItem("appState")):ye,a.fire=me,a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("state",this.state),sessionStorage.setItem("appState",JSON.stringify(this.state)),r.a.createElement(r.a.Fragment,null,this.state.currentLanguage?r.a.createElement(r.a.Fragment,null,this.state.videoEnded?r.a.createElement("div",{className:"main"},r.a.createElement(b,{links:this.state.headerLinks,signOut:function(){return e.setState({currentLanguage:""})}}),r.a.createElement(de.a,{render:function(t){var a=t.location;return r.a.createElement(ge,{location:a},r.a.createElement(de.a,{path:"/repertoire",render:function(){return r.a.createElement(_,Object.assign({},e.state,{handleSelectTrack:e.handleSelectTrack,handleModalOpen:e.handleModalOpen,handleMute:e.handleMute}))}}),r.a.createElement(de.a,{path:"/members",render:function(){return r.a.createElement(w,e.state)}}),r.a.createElement(de.a,{path:"/albums",component:D}),r.a.createElement(de.a,{path:"/social",component:E}),r.a.createElement(de.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ae,{text:e.state.dynamicData.homeText})}}))}})):r.a.createElement(P,{handleVideoEnded:this.handleVideoEnded})):r.a.createElement("div",{className:"initial"},r.a.createElement("img",{src:I.a,alt:"logo",className:"header__image--up"}),r.a.createElement("img",{src:F.a,alt:"logo",className:"header__image--down"}),r.a.createElement(U,Object.assign({isAdmin:!1,handleSetLanguage:this.handleSetLanguage},this.state))))}}]),t}(n.Component),_e=function(e){var t=e.handleSubmitHomeText,a=e.handleFormChange,n=e.formValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"admin-main"},r.a.createElement("textarea",{onChange:function(e){return a(e.target.value)},className:"admin-main__input",value:n}),r.a.createElement("button",{className:"shared-button shared-button--second",type:"submit",title:"submit",onClick:t},"enviar")))};y.a.setAppElement("#root");var we={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"black"},overlay:{zIndex:99999,backgroundColor:"rgba(188,158,91,0.2)"}},ke=function(e){var t=e.handleModalOpen,a=e.handleSubmit,n=e.handleChange,c=e.handleEditClick,i=e.isModalOpen,l=e.repertoire,o=e.currentTrack;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{isOpen:i,onRequestClose:function(){return t(!1)},style:we},r.a.createElement("div",{className:"admin-modal"},r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"Nome:"),r.a.createElement("input",{className:"admin-modal__input",name:"name",value:o.name,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"URL Imagem:"),r.a.createElement("input",{className:"admin-modal__input",name:"imgUrl",value:o.imgUrl,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"URL Spotify:"),r.a.createElement("input",{className:"admin-modal__input",name:"spotifyUrl",value:o.spotifyUrl,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"URL Preview:"),r.a.createElement("input",{className:"admin-modal__input",name:"previewUrl",value:o.previewUrl,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"Letra:"),r.a.createElement("textarea",{className:"admin-modal__textarea",name:"lyrics",value:o.lyrics,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__button"},r.a.createElement("button",{className:"shared-button shared-button--second",onClick:a,type:"submit",title:"submit"},r.a.createElement(f.a,{icon:["fas","plus"]}))))),r.a.createElement("div",{className:"admin-repertoire"},r.a.createElement("div",{className:"admin-repertoire__list"},l.map(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,onClick:function(){return c("currentTrack",t)},className:"admin-repertoire__row"},r.a.createElement("h1",null,t.name)),r.a.createElement("button",{style:{color:"red"},onClick:function(){return e.handleDelete(t.id)}},r.a.createElement("span",{role:"img","aria-label":"out"},"\u274c")))})),r.a.createElement("button",{style:{},className:"shared-button shared-button--second",onClick:function(){return t(!0)}},"Adicionar")))};y.a.setAppElement("#root");var Ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"black"},overlay:{zIndex:99999,backgroundColor:"rgba(188,158,91,0.2)"}},xe=function(e){var t=e.handleModalOpen,a=e.handleSubmit,n=e.handleChange,c=e.handleEditClick,i=e.isModalOpen,l=e.members,o=e.currentMember;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{isOpen:i,onRequestClose:function(){return t(!1)},style:Ne,contentLabel:"Example Modal"},r.a.createElement("div",{className:"admin-modal"},r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"Nome:"),r.a.createElement("input",{className:"admin-modal__input",name:"name",value:o.name,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"URL Imagem:"),r.a.createElement("input",{className:"admin-modal__input",name:"imgUrl",value:o.imgUrl,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__row"},r.a.createElement("label",{className:"admin-modal__label"},"Texto:"),r.a.createElement("textarea",{className:"admin-modal__textarea",name:"text",value:o.text,onChange:function(e){return n(e)}})),r.a.createElement("div",{className:"admin-modal__button"},r.a.createElement("button",{className:"shared-button shared-button--second",onClick:a,type:"submit",title:"submit"},r.a.createElement(f.a,{icon:["fas","plus"]}))))),r.a.createElement("div",{className:"admin-members"},r.a.createElement("div",{className:"admin-members__list"},l.map(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t.id,onClick:function(){return c("currentMember",t)},className:"admin-members__row"},r.a.createElement("h1",null,t.name)),r.a.createElement("button",{style:{color:"red"},onClick:function(){return e.handleDelete(t.id)}},r.a.createElement("span",{role:"img","aria-label":"out"},"\u274c")))}))),r.a.createElement("button",{className:"shared-button shared-button--second",onClick:function(){return t(!0)}},"Adicionar"))};function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ce=[{to:"/admin",label:"logo"},{to:"/admin",label:"Texto principal"},{to:"/admin/repertoire",label:"Repert\xf3rio"},{to:"/admin/members",label:"Membros"}],De=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={firebaseInitialized:!1,homeText:"",tracks:[],texts:{},isModalOpen:!1,repertoire:[],members:[],currentTrack:{name:"",lyrics:"",imgUrl:"",spotifyUrl:"",previewUrl:""},currentMember:{name:"",imgUrl:"",text:""},languageList:[{language:"pt",imgSrc:z.a},{language:"en",imgSrc:H.a},{language:"de",imgSrc:J.a}],currentLanguage:"pt"},e.login=Object(ce.a)(re.a.mark(function t(){return re.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fire.login(e.state.Email,e.state.Password);case 3:e.props.history.replace("/admin"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])})),e.handleSubmitHomeText=function(){e.fire.addOrEditDocument("dynamic_values",{homeText:e.state.homeText}).then(function(e){return alert("\u2705Success\u2705")}).catch(function(e){return alert(e)})},e.handleFormChange=function(t){e.setState({homeText:t})},e.handleEditClick=function(t,a){e.setState(je({},e.state,Object(l.a)({isModalOpen:!0},t,je({},a))))},e.handleDataChange=function(t,a){var n=t.target,r="checkbox"===n.type?n.checked:n.value,c=n.name;e.setState(function(e){return Object(l.a)({},a,je({},e[a],Object(l.a)({},c,r)))})},e.handleSetLanguage=function(t){e.fire.setLanguage(t),e.fire.getDynamicData().then(function(t){return e.setState(t)})},e.handleAddDocument=function(t,a){a.id?e.fire.updateDocument(t,a).then(function(){return alert("\u2714\ufe0fSuccess\u2714\ufe0f")}).then(function(){return e.fire.getDynamicData()}).then(function(t){return e.setState(t)}).catch(function(e){return alert("\u274cError\u274c")}).finally(function(){return e.handleModalOpen(!1)}):e.fire.addToCollection(t,a).then(function(){return alert("\u2714\ufe0fSuccess\u2714\ufe0f")}).then(function(){return e.fire.getDynamicData()}).then(function(t){return e.setState(t)}).catch(function(e){return alert("\u274cError\u274c")}).finally(function(){return e.handleModalOpen(!1)})},e.handleDeleteDocument=function(t,a){e.fire.deleteDocument("".concat(t,"/").concat(a)).then(function(e){return alert("\u2705Success\u2705")}).then(function(){return e.fire.getDynamicData()}).then(function(t){return e.setState(t)}).catch(function(e){return alert(e)})},e.cleanState=function(){return e.setState(function(e){return{currentTrack:{name:"",lyrics:"",imgUrl:"",spotifyUrl:"",previewUrl:""},currentMember:{name:"",imgUrl:"",text:""}}})},e.handleModalOpen=function(t){t||e.cleanState(),e.setState({isModalOpen:t})},e.logout=function(){e.fire.logout(),e.props.history.replace("/login")},e.onInputChange=function(t){e.setState({numberOfTracks:t})},e.fire=me,me.setLanguage("pt"),e.rootRepertoire="dynamic_values/repertoire",e.rootMembers="dynamic_values/members",e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fire.isInitialized().then(function(t){return e.setState({firebaseInitialized:t})}).then(function(){return e.fire.getDynamicData()}).then(function(t){return e.setState(t)})}},{key:"handleRepertoireChange",value:function(e,t){this.setState({mainText:e})}},{key:"render",value:function(){var e=this;if(!1===this.state.firebaseInitialized)return null;if(!this.fire.getCurrentUsername())return this.props.history.replace("/login"),null;var t=this.props.match.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{links:Ce}),r.a.createElement(de.a,{render:function(a){a.location;return r.a.createElement(de.c,null,r.a.createElement("div",{className:"content-container flex-col"},r.a.createElement(U,{languageList:e.state.languageList,currentLanguage:e.state.currentLanguage,handleSetLanguage:e.handleSetLanguage,isAdmin:!0}),r.a.createElement(de.a,{exact:!0,path:"".concat(t),render:function(t){return r.a.createElement(_e,{handleSubmitHomeText:e.handleSubmitHomeText,handleFormChange:e.handleFormChange,handleSetLanguage:e.handleSetLanguage,languageList:e.state.languageList,currentLanguage:e.state.currentLanguage,formValue:e.state.homeText})}}),r.a.createElement(de.a,{exact:!0,path:"".concat(t,"/repertoire"),render:function(t){return r.a.createElement(ke,{handleEditClick:e.handleEditClick,handleChange:function(t){return e.handleDataChange(t,"currentTrack")},handleModalOpen:e.handleModalOpen,handleSubmit:function(){return e.handleAddDocument(e.rootRepertoire,e.state.currentTrack)},handleDelete:function(t){return e.handleDeleteDocument(e.rootRepertoire,t)},isModalOpen:e.state.isModalOpen,repertoire:e.state.repertoire,currentTrack:e.state.currentTrack})}}),r.a.createElement(de.a,{exact:!0,path:"".concat(t,"/members"),render:function(t){return r.a.createElement(xe,{handleEditClick:e.handleEditClick,handleChange:function(t){return e.handleDataChange(t,"currentMember")},handleSubmit:function(){return e.handleAddDocument(e.rootMembers,e.state.currentMember)},handleDelete:function(t){return e.handleDeleteDocument(e.rootMembers,t)},handleModalOpen:e.handleModalOpen,currentMember:e.state.currentMember,members:e.state.members,isModalOpen:e.state.isModalOpen})}})))}}))}}]),t}(n.Component),Me=Object(de.f)(De),Le=function(e){var t=e.login,a=e.emailValue,n=e.passwordValue,c=e.handleInputChange;return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{class:"login__row"},r.a.createElement("label",{className:"login__label"},"Email"),r.a.createElement("input",{className:"login__input",style:{color:"black"},value:a,name:"Email",onChange:c})),r.a.createElement("div",{className:"login__row"},r.a.createElement("label",{className:"login__label"},"Password"),r.a.createElement("input",{className:"login__input",style:{color:"black"},value:n,name:"Password",onChange:c,type:"password"})),r.a.createElement("button",{type:"submit",className:"login__button",onClick:t},"submit")))},Pe=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleInputChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;e.setState(Object(l.a)({},r,n))},e.login=Object(ce.a)(re.a.mark(function t(){return re.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fire.login(e.state.Email,e.state.Password);case 3:e.props.history.replace("/admin"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("\u274cFailed to login\u274c");case 9:case"end":return t.stop()}},t,null,[[0,6]])})),e.fire=me,e.state={logged:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header-container"},r.a.createElement("img",{className:"login__logo",src:h.a,alt:"header"}))),r.a.createElement(Le,{login:this.login,emailValue:this.state.email,passwordValue:this.state.password,handleInputChange:this.handleInputChange}))}}]),t}(n.Component),Ue=(a(80),a(23)),Te=a(22),Ie=a(24);Ue.b.add(Te.a,Te.c,Te.d,Te.b,Ie.c,Te.e,Ie.a,Ie.b,Ie.d);var Ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"global-container"},r.a.createElement(g.a,null,r.a.createElement(de.c,null,r.a.createElement(de.a,{path:"/admin",component:Me}),r.a.createElement(de.a,{path:"/login",exact:!0,component:Pe}),r.a.createElement(de.a,{path:"/",component:Oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.2157f746.chunk.js.map