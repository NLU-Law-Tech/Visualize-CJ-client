(this["webpackJsonpcj-react"]=this["webpackJsonpcj-react"]||[]).push([[0],{30:function(e,t,n){e.exports=n(74)},35:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){var a={"./1.txt":60,"./2.txt":61,"./3.txt":62,"./4.txt":63,"./5.txt":64};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=59},60:function(e,t,n){e.exports=n.p+"static/media/1.62849bcc.txt"},61:function(e,t,n){e.exports=n.p+"static/media/2.7d3cdedc.txt"},62:function(e,t,n){e.exports=n.p+"static/media/3.99be9fbd.txt"},63:function(e,t,n){e.exports=n.p+"static/media/4.44eb5346.txt"},64:function(e,t,n){e.exports=n.p+"static/media/5.fa1af6ff.txt"},65:function(e,t,n){e.exports=n.p+"static/media/position_list.aef61876.txt"},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(10),i=n.n(c),l=(n(35),n(2)),s=n(3),u=n(6),d=n(4),m=n(5),E=n(7),f=n(11),p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_HOST:"http://140.120.13.249:18001",REACT_APP_USER_AUTH_SERVER:"http://140.120.13.243:6500/api",REACT_APP_USER_AUTH:"FALSE"}),v=p.REACT_APP_API_HOST,h=p.REACT_APP_USER_AUTH_SERVER,b=void 0===h?"":h,g=p.REACT_APP_USER_AUTH;a="FALSE"===(void 0===g?"FALSE":g)?f.create({baseURL:v}):f.create({baseURL:b});function _(e){return{type:"SET_APP_LOADING",isLoading:e}}var S={CJDefendants:[],CJTokens:[],CJMarks:[],isLoading:!1,token:window.localStorage.getItem("appToken")};function k(e){return function(t){t(_(!0)),setTimeout((function(){t({type:"VISUALIZE_SET_VIEW",view:e}),t(_(!1))}),0)}}var R={current_view:void 0,results:{}};var T=n(11),C=n.n(T),A=(n(58),n(29)),O=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(u.a)(this,Object(d.a)(t).call(this,e))).loadExample=function(e){C.a.get(n(59)("./"+e)).then((function(e){console.log(e),o.setState({context:e.data})}))},o.submit=function(e){var t=o.props.dispatch,n=o.state,r=void 0,c=void 0,i=void 0;"PARSE_POSITION"===e?(r="\u4e8b\u5be6",c="[NAME]\u64d4\u4efb\u4ec0\u9ebc\u8077\u4f4d",i="\u8ab0\u64d4\u4efb[TARGET]"):"PARSE_UNIT"===e?(r="\u55ae\u4f4d",c="[NAME]\u5728\u4ec0\u9ebc\u55ae\u4f4d\u5de5\u4f5c",i="\u8ab0\u5728[TARGET]\u5de5\u4f5c"):"PARSE_BREAK_LAW"===e&&(r="\u8ad6\u7f6a\u79d1\u5211",c="[NAME]\u89f8\u72af\u4ec0\u9ebc\u6cd5\u689d",i="\u8ab0\u89f8\u72af[TARGET]"),t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;return function(i){i({type:"PARSE_CJ_RESULT",CJDefendants:[],CJTokens:[],CJMarks:[],taskType:t}),i(_(!0)),a.post("/parse-defendant",{CJText:e,FoucsPositions:n,SearchParagraph:o,Question_A:r,Question_B:c}).then((function(e){var n=e.data,a=void 0===n?{}:n,o=a.defendants,r=void 0===o?[]:o,c=a.tokens,l=void 0===c?[]:c,s=a.marks;i({type:"PARSE_CJ_RESULT",CJDefendants:r,CJTokens:l,CJMarks:void 0===s?[]:s,taskType:t})})).finally((function(){i(_(!1))}))}}(n.context,e,n.foucsPositions,r,c,i))},o.state={context:"",foucsPositions:[],tab:"PARSE_POSITION"},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get(n(65)).then((function(t){var n=t.data.split("\n");e.setState({foucsPositions:n})}))}},{key:"render",value:function(){var e=this,t=this.state.tab,n=this.props.dispatch;return r.a.createElement("div",{id:"InputModule"},r.a.createElement("form",{style:{marginTop:5,marginBottom:5}},r.a.createElement("div",{className:"form-group"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://law.judicial.gov.tw/default.aspx",className:"btn btn-danger"},r.a.createElement(A.a,{size:20}),"\xa0\u6cd5\u5b78\u5224\u6c7a\u66f8\u6aa2\u7d22\u7cfb\u7d71"),r.a.createElement("br",null),r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.loadExample("1.txt")}},"\u8f38\u5165\u7bc4\u4f8b1"),"\xa0",r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.loadExample("2.txt")}},"\u8f38\u5165\u7bc4\u4f8b2"),"\xa0",r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.loadExample("3.txt")}},"\u8f38\u5165\u7bc4\u4f8b3"),"\xa0",r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.loadExample("4.txt")}},"\u8f38\u5165\u7bc4\u4f8b4"),"\xa0",r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.loadExample("5.txt")}},"\u8f38\u5165\u7bc4\u4f8b5"),r.a.createElement("textarea",{onChange:function(t){e.setState({context:t.target.value})},value:this.state.context,placeholder:"\u8acb\u5c07\u5224\u6c7a\u66f8\u8cbc\u65bc\u6b64",className:"form-control",id:"exampleFormControlTextarea1",style:{height:"300px",marginTop:5}})),r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{onClick:function(){n(k("PARSE_UNIT")),e.setState({tab:"PARSE_UNIT"})},className:"nav-link ".concat("PARSE_UNIT"===t?"active":"")},"\u5206\u6790\u55ae\u4f4d")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{onClick:function(){n(k("PARSE_POSITION")),e.setState({tab:"PARSE_POSITION"})},className:"nav-link ".concat("PARSE_POSITION"===t?"active":"")},"\u5206\u6790\u8077\u7a31")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{onClick:function(){n(k("PARSE_BREAK_LAW")),e.setState({tab:"PARSE_BREAK_LAW"})},className:"nav-link ".concat("PARSE_BREAK_LAW"===t?"active":"")},"\u5206\u6790\u89f8\u72af\u6cd5\u689d"))),r.a.createElement("br",null),"PARSE_UNIT"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.submit("PARSE_UNIT")},className:"btn btn-primary"},"\u5206\u6790\u55ae\u4f4d")):r.a.createElement(r.a.Fragment,null),"PARSE_POSITION"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.submit("PARSE_POSITION")},className:"btn btn-primary"},"\u5206\u6790\u8077\u7a31")):r.a.createElement(r.a.Fragment,null),"PARSE_BREAK_LAW"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.submit("PARSE_BREAK_LAW")},className:"btn btn-primary"},"\u5206\u6790\u89f8\u72af\u6cd5\u689d")):r.a.createElement(r.a.Fragment,null)),r.a.createElement("br",null))}}]),t}(o.Component),N=Object(E.b)()(O),P=(n(66),n(8)),y=n(26),x=function(e){var t=e.self,n=e.defendantsWithColor;return r.a.createElement("div",{className:"row"},n.map((function(e,n){return r.a.createElement("div",{key:n,className:"col-md-4 col-12",style:{padding:5}},r.a.createElement("div",{className:"card",style:{borderColor:"rgb(".concat(e.color,")"),borderWidth:3}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name,"(\u88ab\u544a)"),r.a.createElement("h6",null,"\u5019\u9078\u8eab\u4efd"),r.a.createElement("ul",null,0===e.candicate_positions.length?r.a.createElement("p",null,"\u7121\u5206\u6790\u7d50\u679c"):null,e.candicate_positions.map((function(n,a){return r.a.createElement("li",{key:a,style:{listStyle:"decimal",fontSize:0===a?18:14,fontWeight:0===a?"bold":"normal"}},r.a.createElement("button",{style:{fontSize:0===a?18:14,fontWeight:0===a?"bold":"normal"},className:"btn btn-sm position-link",onClick:function(){t.scrollToRef("".concat(e.name,"-").concat(n[0].substring(0,1)))}},n[0].substring(0,15)))}))))))})))},w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleScroll=function(){try{var e=n.DefendantsCardRef.current.getBoundingClientRect(),t=n.state.fixedDefendantsCard;e.top<0?n.setState({fixedDefendantsCard:!0}):!0===t&&e.top>=0&&n.setState({fixedDefendantsCard:!1})}catch(a){console.log(a)}},n.stringEncode=function(e){return btoa(unescape(encodeURIComponent(e)))},n.scrollToRef=function(e){for(var t=0;t<n.markRefs.length;t++){var a=n.markRefs[t],o=a.name,r=a.ref;if(o===e){console.log(a),console.log(o,e,o===e),window.scrollTo(0,r.current.offsetTop-270);break}}},n.assignDefendantsColor=function(e){var t=["0, 155, 119","42, 75, 124","225, 93, 68","239, 192, 80","85, 180, 176","224, 129, 25","130, 46, 214","214, 156, 47"];return e.map((function(e,n){return n<t.length?{name:e.name,candicate_positions:e.candicate_positions,color:t[n]}:{name:e.name,candicate_positions:e.candicate_positions,color:t[t.length-1]}}))},n.highlight=function(e,t,a){n.markRefs=[];for(var o=[],c=100;c>0;c-=10)o.push(c/100);var i=function(e){return e=e<o.length?e:o.length,o[parseInt(e)-1]};e=n.assignDefendantsColor(e);var l=Object(P.a)(n);return{context:t=t.map((function(t,n){var o=a[n];if(""!==o){var c=(o=o.split(","))[0],s=e.filter((function(e){return c===e.name}))[0].color,u=o[1],d=r.a.createRef();return l.markRefs.push({name:"".concat(c,"-").concat(t),ref:d}),r.a.createElement("mark",{ref:d,style:{backgroundColor:"rgba(".concat(s,",").concat(i(u),")")},key:n,"data-tip":c},t)}var m=new RegExp("[\uff1a\u3002]$");return null!==t.match(m)?r.a.createElement(r.a.Fragment,{key:n},t,r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,{key:n},t)})),defendantsWithColor:e}},n.state={fixedDefendantsCard:!1},n.markRefs=[],n.DefendantsCardRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.defendants,n=e.tokens,a=e.marks,o=this.state.fixedDefendantsCard,c=this.highlight(t,n,a),i=c.context,l=void 0===i?[]:i,s=c.defendantsWithColor;return r.a.createElement("div",null,r.a.createElement("div",{ref:this.DefendantsCardRef,className:"container"},r.a.createElement(x,{key:o.toString(),self:this,defendantsWithColor:s})),o?r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",backgroundColor:"white",height:270..toString()+"px",overflowX:"hidden",overflowY:"visible"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-100",style:{backgroundColor:"#363F70",position:"absolute",left:0,color:"#FBFCFF",height:24,paddingLeft:15}},r.a.createElement("span",null,"Visualize CJ"),r.a.createElement("div",{className:"text-center",style:{marginTop:-24}},r.a.createElement("span",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{cursor:"pointer"}},"\u56de\u5230\u4e0a\u65b9")),r.a.createElement("span",{className:"float-right",style:{marginRight:15,marginTop:-24}})),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(x,{key:o.toString(),self:this,defendantsWithColor:s}))))):null,r.a.createElement("div",null,l),r.a.createElement(y.a,{key:JSON.stringify(this.props),html:!0}))}}]),t}(o.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={current_view:void 0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props.state);var e=this.props.VisualizeReducer,t=e.current_view,n=void 0===t?"":t,a=e.results[n]||{},o=a.CJDefendants,c=void 0===o?[]:o,i=a.CJTokens,l=void 0===i?[]:i,s=a.CJMarks,u=void 0===s?[]:s,d=a.isLoading;return r.a.createElement("div",{id:"VisualizeModule"},d?r.a.createElement(r.a.Fragment,null):r.a.createElement(w,{defendants:c,tokens:l,marks:u}))}}]),t}(o.Component),L=Object(E.b)((function(e){return{MainReducer:e.MainReducer,VisualizeReducer:e.VisualizeReducer}}))(j),I=n(27),U=n.n(I),D=(n(67),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.state.isLoading,t=void 0!==e&&e;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"loading-mask"},r.a.createElement("div",{className:"loading-component"},r.a.createElement(U.a,{type:"cylon",color:"black",height:100,width:100}),r.a.createElement("div",{className:"text-center"},"\u8b80\u53d6\u4e2d"))):null)}}]),t}(o.Component)),J=Object(E.b)((function(e){return{state:e.MainReducer}}))(D),W=(n(68),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={account:"",pwd:""},n.getToken=n.getToken.bind(Object(P.a)(n)),n.pressEnter=n.pressEnter.bind(Object(P.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"pressEnter",value:function(e){"Enter"===e.key&&this.getToken()}},{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.pressEnter)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keypress",this.pressEnter)}},{key:"getToken",value:function(){var e=this.props.dispatch,t=this.state;e(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},r=function(e){e||(e=window.localStorage.getItem("appToken")),a=f.create({headers:{AppName:"Visualize CJ",Authorization:e},baseURL:b+"/service/"+v})};return function(c){c({type:"SET_APP_LOADING",loging:!0}),a.post("/login",{account:e,password:t}).then((function(e){var t=e.data.Token,n=void 0===t?"":t;o(),window.localStorage.setItem("appToken",n),r(n),c({type:"USER_LOGIN",token:n}),c({type:"SET_APP_LOADING",loging:!1})})).catch((function(e){console.log(e),n(),c({type:"SET_APP_LOADING",loging:!1})}))}}(t.account,t.pwd))}},{key:"render",value:function(){var e=this,t=this.props.appState,n=t.isLoging,a=t.token;return r.a.createElement(r.a.Fragment,null,""===a?r.a.createElement("div",{id:"Login"},r.a.createElement("div",{className:"login-form container"},r.a.createElement("h3",{className:"text-center"},r.a.createElement("b",null,"Login")),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center",style:{paddingBottom:8}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{disabled:n,value:this.state.account,onChange:function(t){e.setState({account:t.target.value})},className:"form-control",placeholder:"E-mail or Username",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{disabled:n,value:this.state.pwd,onChange:function(t){e.setState({pwd:t.target.value})},className:"form-control",type:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{disabled:n,onClick:this.getToken,className:"btn btn-block btn-primary"},"Login"),r.a.createElement("br",null)))):r.a.createElement(r.a.Fragment,null))}}]),t}(o.Component)),F=(Object(E.b)((function(e){return{appState:e.MainReducer}}))(W),n(69),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"vj-title"},r.a.createElement("h1",null,"Visualize CJ"),r.a.createElement("span",{className:"float-right"},r.a.createElement("span",null,"\xa0"))),r.a.createElement("div",{className:"container"},r.a.createElement(r.a.Fragment,null),r.a.createElement(J,null),r.a.createElement(N,null),r.a.createElement(L,null)))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(70);var M=n(9),V=n(28);n(71).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_HOST:"http://140.120.13.249:18001",REACT_APP_USER_AUTH_SERVER:"http://140.120.13.243:6500/api",REACT_APP_USER_AUTH:"FALSE"}));var B=Object(M.c)({MainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(console.log("MR",t),t.type){case"USER_LOGIN":return Object.assign({},e,{token:t.token});case"SET_APP_LOADING":return Object.assign({},e,{isLoading:t.isLoading});case"PARSE_CJ_RESULT":return Object.assign({},e,{CJDefendants:t.CJDefendants,CJTokens:t.CJTokens,CJMarks:t.CJMarks});default:return e}},VisualizeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log("VR",t),t.type){case"VISUALIZE_SET_VIEW":return Object.assign({},e,{current_view:t.view});case"PARSE_CJ_RESULT":var n=t.taskType,a=e.results;return a[t.taskType]=t,Object.assign({},e,{current_view:n,results:a});default:return e}}}),H=Object(M.d)(B,Object(M.a)(V.a));i.a.render(r.a.createElement(E.a,{store:H},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ce32375f.chunk.js.map