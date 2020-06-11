(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(13),s=a(23),l=a(29),m=a(132),g=a(129),p=a(102),u=a(135),h=a(59),d=a(60),b=a(70),f=a(61),y=a(39),w=a(71),E=a(122),k=a(124),v=a(125),j=a(134),x=a(136),S=a(137),I=a(127),N=a(6),O=a(62),B=a.n(O),A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={drawerActivate:!1,drawer:!1},a.createDrawer=a.createDrawer.bind(Object(y.a)(a)),a.destroyDrawer=a.destroyDrawer.bind(Object(y.a)(a)),a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})})}},{key:"createDrawer",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(E.a,{position:"static",elevation:0,className:t.mobileBar},r.a.createElement(k.a,null,r.a.createElement(v.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(B.a,{className:t.sideBarIcon,onClick:function(){e.setState({drawer:!0})}})))),r.a.createElement(j.a,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})}},r.a.createElement(x.a,{className:t.list},r.a.createElement(S.a,{component:s.b,exact:!0,to:"/",button:!0,divider:!0},"Home"),r.a.createElement(S.a,{component:s.b,to:"/about",button:!0,divider:!0},"About"),r.a.createElement(S.a,{component:s.b,to:"/portfolio",button:!0,divider:!0},"Portfolio"),r.a.createElement(S.a,{component:s.b,to:"/contact",button:!0,divider:!0},"Contact")))))}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return r.a.createElement(E.a,{position:"static",elevation:0,className:e.appbar},r.a.createElement(k.a,{className:e.toolbar},r.a.createElement("nav",null,r.a.createElement(I.a,{component:s.b,exact:!0,to:"/",variant:"button",color:"textPrimary",className:e.button},"Home"),r.a.createElement(I.a,{component:s.b,to:"/about",variant:"button",color:"textPrimary",className:e.button},"About"),r.a.createElement(I.a,{component:s.b,to:"/portfolio",variant:"button",color:"textPrimary",className:e.button},"Portfolio"),r.a.createElement(I.a,{component:s.b,to:"/contact",variant:"button",color:"textPrimary",className:e.button},"Contact"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.drawerActivate?this.createDrawer():this.destroyDrawer())}}]),t}(n.Component),P=Object(N.a)({appbar:{backgroundColor:"transparent"},mobileBar:{backgroundColor:"transparent"},list:{width:200},padding:{paddingRight:30,cursor:"pointer"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"},button:{margin:1,color:"white",fontFamily:"Raleway"},toolbar:{flexWrap:"wrap",justifyContent:"flex-end"}})(A),C=a(128),M=Object(p.a)(function(e){return{home:{alignItems:"center",flexGrow:"1"},title:{fontFamily:"Petit Formal Script",color:e.palette.primary.main,fontWeight:500}}}),W=function(){var e=M();return r.a.createElement(v.a,{container:!0,className:e.home},r.a.createElement(C.a,{variant:"h1",className:e.title},"Sarah Goon"))},D=a(133),F=a(130),L=a(131),H=[{img:"/images/html.png",name:"HTML",title:"HTML Icon"},{img:"/images/jsx.png",name:"JSX",title:"JSX Icon"},{img:"/images/css.png",name:"CSS",title:"CSS Icon"},{img:"/images/sass.png",name:"Sass",title:"Sass Icon"},{img:"/images/bootstrap.png",name:"Bootstrap",title:"Bootstrap Icon"},{img:"/images/material-ui.png",name:"Material-UI",title:"Material-UI Icon"},{img:"/images/javascript.png",name:"JavaScript",title:"JavaScript Icon"},{img:"/images/react.png",name:"React",title:"React Icon"},{img:"/images/jquery.png",name:"jQuery",title:"jQuery Icon"},{img:"/images/redux.png",name:"Redux",title:"Redux Icon"},{img:"/images/node.png",name:"Node.js",title:"Node Icon"},{img:"/images/express.png",name:"Express.js",title:"Express Icon"},{img:"/images/next.png",name:"Next.js",title:"Next Icon"},{img:"/images/graphql.png",name:"GraphQL",title:"GraphQL Icon"},{img:"/images/mongodb.png",name:"MongoDB",title:"MongoDB Icon"},{img:"/images/mysql.png",name:"MySQL",title:"MySQL Icon"},{img:"/images/firebase.png",name:"Firebase",title:"Firebase Icon"}],R=Object(p.a)(function(e){return{box:Object(c.a)({backgroundColor:"rgba(255, 255, 255, 0.9)"},e.breakpoints.up("sm"),{margin:"0 5em"}),container:{margin:"2em 0"},div:Object(c.a)({width:"100%",margin:"auto",paddingBottom:"1em"},e.breakpoints.up("sm"),{width:"50%"}),image:Object(c.a)({width:"45px",height:"auto"},e.breakpoints.up("sm"),{width:"75px"}),text:{fontFamily:"Raleway",color:e.palette.primary.dark},title:{fontFamily:"Arima Madurai",color:e.palette.primary.dark},tile:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}),T=function(){var e=R();return r.a.createElement(D.a,{className:e.box},r.a.createElement(g.a,{className:e.container},r.a.createElement(C.a,{variant:"h4",align:"center",className:e.title,gutterBottom:!0},"Hi! I am a Full Stack Web Developer based in NYC."),r.a.createElement(C.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},'The reason why I love developing is because of the gratifying results. Every little challenge I face while working on a project brings a great "woohoo!" when those challenges get solved.'),r.a.createElement(C.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"I completed the UC Berkeley Extension Full Stack Web Developer Bootcamp in 2018, and I've been continuously learning new things about code and working on passion projects."),r.a.createElement(C.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"Proficient in a wide array of scripting languages and frameworks which include:"),r.a.createElement("div",{className:e.div},r.a.createElement(F.a,{cellHeight:"auto",cols:6,className:e.grid,spacing:2},H.map(function(t){return r.a.createElement(L.a,{key:t.img,cols:1},r.a.createElement("div",{className:e.tile},r.a.createElement("img",{src:t.img,alt:t.title,className:e.image}),r.a.createElement("p",null,t.name)))}))),r.a.createElement(C.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"When I'm not coding, you can generally find me either at a pole studio dancing and learning new tricks, spending time with my boyfriend, or out on a stroll with my dog, Opie.")))},G=a(101),z=[{project:"Poledex",description:"A directory to find pole studios in the Mid-Atlantic.",languages:"[ MongoDB, Express.js, React, Node.js, Redux, Bootstrap ]",link:"https://poledex.herokuapp.com/",github:"https://github.com/sarahg813/mern-poledex",img:"/images/poledex.png",title:"Poledex screenshot"},{project:"Suite Meraki (work in progress)",description:"A website for a hair and beauty salon.",languages:"[ React, Material-UI ]",link:"https://suite-meraki.herokuapp.com/",github:"https://github.com/sarahg813/suite-meraki-site",img:"/images/suite-meraki.jpg",title:"Suite Meraki's website screenshot"},{project:"Yumiko Harris's Portfolio (work in progress)",description:"A portfolio website for Yumiko Harris, a pole dance instructor. It showcases her talents and gives more information about what she teaches and how to contact her.",languages:"[ React, Material-UI ]",link:"https://yumiko-harris.herokuapp.com/",github:"https://github.com/sarahg813/yumi-site",img:"/images/yumikoharris.png",title:"Yumiko Harris' Portfolio website screenshot"},{project:"Beautiful Shelter",description:"A website for a shelter that lists available and adopted pets.Admin can dynamically update pet listings and add to the newsboard in the CLI. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, MySQL, Node, Express, EJS, npm Inquirer ]",link:"https://beautiful-shelter-website.herokuapp.com/",github:"https://github.com/sarahg813/ProjectTwo",img:"/images/beautifulshelter.png",title:"Beautiful Shelter website screenshot"},{project:"What Do You Wanna Eat?",description:"A web app to help you decide when you're being indecisive. The site will give you options on what to eat with the help of the Yelp API, Google API, and Edamam API. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery, Firebase, Ajax, API ]",link:"https://sarahg813.github.io/whattoeat/",github:"https://github.com/sarahg813/whattoeat",img:"/images/wdywe.png",title:"What Do You Wanna Eat? website screenshot"},{project:"Giftastic",description:"A dynamic web page using the GIPHY API that populates the page with gifs of bands/artists by a click of a button and getting info on the artists from the Bands In Town API. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery, Ajax, API ]",link:"https://sarahg813.github.io/giftastic/",github:"https://github.com/sarahg813/giftastic",img:"/images/giftastic.png",title:"Giftastic website screenshot"},{project:"Crystal Collector Game",description:"Click on the crystals to match your score with the number goal. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery ]",link:"https://sarahg813.github.io/crystal-collector-game/",github:"https://github.com/sarahg813/crystal-collector-game",img:"/images/crystalgame.png",title:"Crystal Game website screenshot"},{project:"Word Guess Game",description:"Hangman game: 90s Cartoons edition. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript ]",link:"https://sarahg813.github.io/word-guess-game/",github:"https://github.com/sarahg813/word-guess-game",img:"/images/wordguess.png",title:"Word Guess Game website screenshot"}],J=Object(p.a)(function(e){return{box:Object(c.a)({backgroundColor:"rgba(255, 255, 255, 0.9)"},e.breakpoints.up("sm"),{margin:"0 5em"}),button:Object(c.a)({margin:"0 1em 1em 0"},e.breakpoints.up("sm"),{marginRight:e.spacing(1)}),container:Object(c.a)({},e.breakpoints.up("sm"),{margin:"2em 0"}),image:{maxWidth:"100%",height:"auto"},paper:Object(c.a)({marginBottom:"1.5em",padding:".5em"},e.breakpoints.up("sm"),{margin:"1.5em 2.5em",padding:"2em"}),projectTitle:{fontWeight:600,fontStyle:"italic"},text:{fontFamily:"Raleway",color:e.palette.primary.dark},title:{fontFamily:"Arima Madurai",color:e.palette.primary.dark},subtitle1:{color:e.palette.primary.dark}}}),Q=function(){var e=J();return r.a.createElement(D.a,{className:e.box},r.a.createElement(g.a,{className:e.container},r.a.createElement(C.a,{variant:"h4",align:"left",className:e.title,gutterBottom:!0},"Portfolio"),r.a.createElement("div",{className:e.div},z.map(function(t){return r.a.createElement(G.a,{className:e.paper,key:t.project},r.a.createElement(v.a,{container:!0,className:e.grid},r.a.createElement(v.a,{item:!0,container:!0,spacing:2},r.a.createElement(v.a,{item:!0,xs:12,lg:6,container:!0,direction:"column",spacing:2},r.a.createElement(v.a,{item:!0,xs:!0},r.a.createElement(C.a,{gutterBottom:!0,variant:"h6",className:e.projectTitle},t.project),r.a.createElement(C.a,{variant:"body2",gutterBottom:!0},t.description)),r.a.createElement(v.a,{item:!0},r.a.createElement(C.a,{variant:"subtitle1",gutterBottom:!0},t.languages),r.a.createElement(I.a,{variant:"outlined",target:"_blank",rel:"noopener noreferrer",href:t.link,className:e.button,size:"small"},"Link"),r.a.createElement(I.a,{variant:"outlined",target:"_blank",rel:"noopener noreferrer",href:t.github,className:e.button,size:"small"},"Github"))),r.a.createElement(v.a,{item:!0,xs:12,lg:6},r.a.createElement("img",{className:e.image,alt:t.title,src:t.img})))))}))))},Y=a(41),_=Object(p.a)(function(e){return{contact:{flexGrow:"1"},icons:{fontSize:"1.75em",margin:"0 1em",color:e.palette.primary.main},text:{fontFamily:"Raleway",color:e.palette.primary.main,lineHeight:3},textLink:{textDecoration:"none",color:"white"},title:{fontFamily:"Petit Formal Script",color:e.palette.primary.main,fontWeight:500}}}),U=function(){var e=_();return r.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center",direction:"column",className:e.contact},r.a.createElement(C.a,{variant:"h2",className:e.title},"Let's chat!"),r.a.createElement(C.a,{className:e.text},r.a.createElement("a",{href:"mailto:goon.sarah@gmail.com",target:"_top",className:e.textLink},r.a.createElement(Y.a,{icon:"envelope"})," goon.sarah@gmail.com"," ")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/sarahg813",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Y.a,{className:e.icons,icon:["fab","github"]})),r.a.createElement("a",{href:"https://linkedin.com/in/sarahgoon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Y.a,{className:e.icons,icon:["fab","linkedin"]})),r.a.createElement("a",{href:"https://angel.co/sarah-goon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Y.a,{className:e.icons,icon:["fab","angellist"]}))))},q=Object(p.a)(function(e){return{footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"transparent",color:"white",flexShrink:0},footerText:{fontFamily:"Raleway"}}}),X=function(){var e=q();return r.a.createElement("footer",{className:e.footer},r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(C.a,{variant:"body1",align:"center",className:e.footerText},"\xa9 2020")))},K=a(40),$=a(67),V=a(68),Z=a(69),ee=Object(Z.a)({palette:{primary:{main:"#ffffff",dark:"#3f3f3f"}},typography:{fontFamily:'"Raleway", "Petit Formal Script", "Arima Madurai", sans-serif',fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}});ee.typography.h1=Object(c.a)({fontSize:"3rem"},ee.breakpoints.up("md"),{fontSize:"5rem"}),ee.typography.h2=Object(c.a)({fontSize:"2.75rem"},ee.breakpoints.up("md"),{fontSize:"3.5rem"}),ee.typography.h4=Object(c.a)({fontSize:"1.75rem",fontWeight:500},ee.breakpoints.up("md"),{fontSize:"2.15rem"}),ee.typography.body1={fontSize:"1.1rem"},ee.typography.subtitle1={fontSize:".8rem",fontWeight:500};var te=ee;K.b.add($.a,V.a);var ae=Object(p.a)(function(e){var t;return{root:(t={display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},Object(c.a)(t,e.breakpoints.down("sm"),{backgroundImage:'url("/images/meandopie-sm.jpg")',backgroundAttachment:"inital"}),Object(c.a)(t,e.breakpoints.up("sm"),{backgroundImage:'url("/images/meandopie-md.jpg")'}),Object(c.a)(t,e.breakpoints.up("md"),{backgroundImage:'url("/images/meandopie-lg.jpg")'}),Object(c.a)(t,e.breakpoints.up("xl"),{backgroundImage:'url("/images/meandopie-xl.jpg")'}),t),main:{display:"flex",marginTop:e.spacing(2),marginBottom:e.spacing(2),flex:"1 0 auto"}}});var ne=function(){var e=ae();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{theme:te},r.a.createElement(s.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(P,null),r.a.createElement(g.a,{component:"main",className:e.main},r.a.createElement(l.a,{exact:!0,path:"/",component:W}),r.a.createElement(l.a,{path:"/about",component:T}),r.a.createElement(l.a,{path:"/portfolio",component:Q}),r.a.createElement(l.a,{path:"/contact",component:U})),r.a.createElement(X,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[77,1,2]]]);
//# sourceMappingURL=main.d60c44f6.chunk.js.map