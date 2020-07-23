(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{74:function(e,t,a){e.exports=a(88)},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=a(13),l=a(22),s=a(9),m=a(123),g=a(119),p=a(117),u=a(122),d=a(57),h=a(58),b=a(35),f=a(67),y=a(66),w=a(112),v=a(114),E=a(115),k=a(124),j=a(126),x=a(127),S=a(116),I=a(5),N=a(62),A=a.n(N),C=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={drawerActivate:!1,drawer:!1},n.createDrawer=n.createDrawer.bind(Object(b.a)(n)),n.destroyDrawer=n.destroyDrawer.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})})}},{key:"createDrawer",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(w.a,{position:"static",elevation:0,className:t.mobileBar},r.a.createElement(v.a,null,r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(A.a,{className:t.sideBarIcon,onClick:function(){e.setState({drawer:!0})}})))),r.a.createElement(k.a,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})}},r.a.createElement(j.a,{className:t.list},r.a.createElement(x.a,{component:l.b,exact:!0,to:"/",button:!0,divider:!0},"Home"),r.a.createElement(x.a,{component:l.b,to:"/about",button:!0,divider:!0},"About"),r.a.createElement(x.a,{component:l.b,to:"/portfolio",button:!0,divider:!0},"Portfolio"),r.a.createElement(x.a,{component:l.b,to:"/contact",button:!0,divider:!0},"Contact")))))}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return r.a.createElement(w.a,{position:"static",elevation:0,className:e.appbar},r.a.createElement(v.a,{className:e.toolbar},r.a.createElement("nav",null,r.a.createElement(S.a,{component:l.b,exact:!0,to:"/",variant:"button",color:"textPrimary",className:e.button},"Home"),r.a.createElement(S.a,{component:l.b,to:"/about",variant:"button",color:"textPrimary",className:e.button},"About"),r.a.createElement(S.a,{component:l.b,to:"/portfolio",variant:"button",color:"textPrimary",className:e.button},"Portfolio"),r.a.createElement(S.a,{component:l.b,to:"/contact",variant:"button",color:"textPrimary",className:e.button},"Contact"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.drawerActivate?this.createDrawer():this.destroyDrawer())}}]),a}(n.Component),O=Object(I.a)({appbar:{backgroundColor:"transparent"},mobileBar:{backgroundColor:"transparent"},list:{width:200},padding:{paddingRight:30,cursor:"pointer"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"},button:{margin:1,color:"white",fontFamily:"Raleway"},toolbar:{flexWrap:"wrap",justifyContent:"flex-end"}})(C),B=a(118),P=Object(p.a)(function(e){return{home:{alignItems:"center",flexGrow:"1"},title:{fontFamily:"Petit Formal Script",color:e.palette.primary.main,fontWeight:500}}}),M=function(){var e=P();return r.a.createElement(E.a,{container:!0,className:e.home},r.a.createElement(B.a,{variant:"h1",className:e.title},"Sarah Goon"))},W=a(125),D=a(120),R=a(121),F=[{img:"/images/html.png",name:"HTML",title:"HTML Icon"},{img:"/images/jsx.png",name:"JSX",title:"JSX Icon"},{img:"/images/css.png",name:"CSS",title:"CSS Icon"},{img:"/images/sass.png",name:"Sass",title:"Sass Icon"},{img:"/images/bootstrap.png",name:"Bootstrap",title:"Bootstrap Icon"},{img:"/images/material-ui.png",name:"Material-UI",title:"Material-UI Icon"},{img:"/images/javascript.png",name:"JavaScript",title:"JavaScript Icon"},{img:"/images/react.png",name:"React",title:"React Icon"},{img:"/images/jquery.png",name:"jQuery",title:"jQuery Icon"},{img:"/images/redux.png",name:"Redux",title:"Redux Icon"},{img:"/images/node.png",name:"Node.js",title:"Node Icon"},{img:"/images/express.png",name:"Express.js",title:"Express Icon"},{img:"/images/next.png",name:"Next.js",title:"Next Icon"},{img:"/images/graphql.png",name:"GraphQL",title:"GraphQL Icon"},{img:"/images/mongodb.png",name:"MongoDB",title:"MongoDB Icon"},{img:"/images/mysql.png",name:"MySQL",title:"MySQL Icon"},{img:"/images/firebase.png",name:"Firebase",title:"Firebase Icon"}],L=Object(p.a)(function(e){return{box:Object(c.a)({backgroundColor:"rgba(255, 255, 255, 0.9)"},e.breakpoints.up("sm"),{margin:"0 5em"}),container:{margin:"2em 0"},div:Object(c.a)({width:"100%",margin:"auto",paddingBottom:"1em"},e.breakpoints.up("sm"),{width:"50%"}),image:Object(c.a)({width:"45px",height:"auto"},e.breakpoints.up("sm"),{width:"75px"}),text:{fontFamily:"Raleway",color:e.palette.primary.dark},title:{fontFamily:"Arima Madurai",color:e.palette.primary.dark},tile:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}),T=function(){var e=L();return r.a.createElement(W.a,{className:e.box},r.a.createElement(g.a,{className:e.container},r.a.createElement(B.a,{variant:"h4",align:"center",className:e.title,gutterBottom:!0},"Hi! I am a Full Stack Web Developer based in NYC."),r.a.createElement(B.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},'The reason why I love developing is because of the gratifying results. Every little challenge I face while working on a project brings a great "woohoo!" when those challenges get solved.'),r.a.createElement(B.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"I completed the UC Berkeley Extension Full Stack Web Developer Bootcamp in 2018, and I've been continuously learning new things about code and working on passion projects."),r.a.createElement(B.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"Proficient in a wide array of scripting languages and frameworks which include:"),r.a.createElement("div",{className:e.div},r.a.createElement(D.a,{cellHeight:"auto",cols:6,className:e.grid,spacing:2},F.map(function(t){return r.a.createElement(R.a,{key:t.img,cols:1},r.a.createElement("div",{className:e.tile},r.a.createElement("img",{src:t.img,alt:t.title,className:e.image}),r.a.createElement("p",null,t.name)))}))),r.a.createElement(B.a,{variant:"body1",align:"center",paragraph:!0,className:e.text},"When I'm not coding, you can generally find me either at a pole studio dancing and learning new tricks, spending time with my boyfriend, or out on a stroll with my dog, Opie.")))},G=a(90),H=[{project:"Suite Meraki",description:"A website for a hair and beauty salon in San Jose, CA. Recorded myself for the homepage background video. Used SEO best practices to attract new customers.",languages:"[ React, Material-UI ]",link:"https://suitemeraki.com/",github:"https://github.com/sarahg813/suite-meraki-site",img:"/images/suite-meraki.png",title:"Suite Meraki's website screenshot"},{project:"Poledex",description:"A directory to find pole studios in the Mid-Atlantic. Users can search for a studio, view studios list, view a map of all studios, and view more info about a studio. Admin can decide to add, edit or delete a studio from the admin dashboard.",languages:"[ MongoDB, Express.js, React, Node.js, Redux, Bootstrap ]",link:"https://poledex.herokuapp.com/",github:"https://github.com/sarahg813/mern-poledex",img:"/images/poledex.png",title:"Poledex screenshot"},{project:"World Travel Tracker",description:"A CRUD (Create, Read, Update, and Delete) web app to track your travels.",languages:"[ React, Material-UI ]",link:"https://crud-travel-tracker.herokuapp.com/",github:"https://github.com/sarahg813/crud-travel-tracker",img:"/images/travel-tracker.png",title:"Suite Meraki's website screenshot"},{project:"Beautiful Shelter",description:"A website for a shelter that lists available and adopted pets.Admin can dynamically update pet listings and add to the newsboard in the CLI. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, MySQL, Node, Express, EJS, npm Inquirer ]",link:"https://beautiful-shelter-website.herokuapp.com/",github:"https://github.com/sarahg813/ProjectTwo",img:"/images/beautifulshelter.png",title:"Beautiful Shelter website screenshot"},{project:"What Do You Wanna Eat?",description:"A web app to help you decide when you're being indecisive. The site will give you options on what to eat with the help of the Yelp API, Google API, and Edamam API. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery, Firebase, Ajax, API ]",link:"https://sarahg813.github.io/whattoeat/",github:"https://github.com/sarahg813/whattoeat",img:"/images/wdywe.png",title:"What Do You Wanna Eat? website screenshot"},{project:"Giftastic",description:"A dynamic web page using the GIPHY API that populates the page with gifs of bands/artists by a click of a button and getting info on the artists from the Bands In Town API. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery, Ajax, API ]",link:"https://sarahg813.github.io/giftastic/",github:"https://github.com/sarahg813/giftastic",img:"/images/giftastic.png",title:"Giftastic website screenshot"},{project:"Crystal Collector Game",description:"Click on the crystals to match your score with the number goal. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript, jQuery ]",link:"https://sarahg813.github.io/crystal-collector-game/",github:"https://github.com/sarahg813/crystal-collector-game",img:"/images/crystalgame.png",title:"Crystal Game website screenshot"},{project:"Word Guess Game",description:"Hangman game: 90s Cartoons edition. (Bootcamp Project)",languages:"[ HTML, CSS, JavaScript ]",link:"https://sarahg813.github.io/word-guess-game/",github:"https://github.com/sarahg813/word-guess-game",img:"/images/wordguess.png",title:"Word Guess Game website screenshot"}],z=Object(p.a)(function(e){return{box:Object(c.a)({backgroundColor:"rgba(255, 255, 255, 0.9)"},e.breakpoints.up("sm"),{margin:"0 5em"}),button:Object(c.a)({margin:"0 1em 1em 0"},e.breakpoints.up("sm"),{marginRight:e.spacing(1)}),container:Object(c.a)({},e.breakpoints.up("sm"),{margin:"2em 0"}),image:{maxWidth:"100%",height:"auto"},paper:Object(c.a)({marginBottom:"1.5em",padding:".5em"},e.breakpoints.up("sm"),{margin:"1.5em 2.5em",padding:"2em"}),projectTitle:{fontWeight:600,fontStyle:"italic"},text:{fontFamily:"Raleway",color:e.palette.primary.dark},title:{fontFamily:"Arima Madurai",color:e.palette.primary.dark},subtitle1:{color:e.palette.primary.dark}}}),J=function(){var e=z();return r.a.createElement(W.a,{className:e.box},r.a.createElement(g.a,{className:e.container},r.a.createElement(B.a,{variant:"h4",align:"left",className:e.title,gutterBottom:!0},"Portfolio"),r.a.createElement("div",{className:e.div},H.map(function(t){return r.a.createElement(G.a,{className:e.paper,key:t.project},r.a.createElement(E.a,{container:!0,className:e.grid},r.a.createElement(E.a,{item:!0,container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,lg:6,container:!0,direction:"column",spacing:2},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(B.a,{gutterBottom:!0,variant:"h6",className:e.projectTitle},t.project),r.a.createElement(B.a,{variant:"body2",gutterBottom:!0},t.description)),r.a.createElement(E.a,{item:!0},r.a.createElement(B.a,{variant:"subtitle1",gutterBottom:!0},t.languages),r.a.createElement(S.a,{variant:"outlined",target:"_blank",rel:"noopener noreferrer",href:t.link,className:e.button,size:"small"},"Link"),r.a.createElement(S.a,{variant:"outlined",target:"_blank",rel:"noopener noreferrer",href:t.github,className:e.button,size:"small"},"Github"))),r.a.createElement(E.a,{item:!0,xs:12,lg:6},r.a.createElement("img",{className:e.image,alt:t.title,src:t.img})))))}))))},Q=a(39),U=Object(p.a)(function(e){return{contact:{flexGrow:"1"},icons:{fontSize:"1.75em",margin:"0 1em",color:e.palette.primary.main},text:{fontFamily:"Raleway",color:e.palette.primary.main,lineHeight:3},textLink:{textDecoration:"none",color:"white"},title:{fontFamily:"Petit Formal Script",color:e.palette.primary.main,fontWeight:500}}}),_=function(){var e=U();return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",direction:"column",className:e.contact},r.a.createElement(B.a,{variant:"h2",className:e.title},"Let's chat!"),r.a.createElement(B.a,{className:e.text},r.a.createElement("a",{href:"mailto:goon.sarah@gmail.com",target:"_top",className:e.textLink},r.a.createElement(Q.a,{icon:"envelope"})," goon.sarah@gmail.com"," ")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/sarahg813",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{className:e.icons,icon:["fab","github"]})),r.a.createElement("a",{href:"https://linkedin.com/in/sarahgoon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{className:e.icons,icon:["fab","linkedin"]})),r.a.createElement("a",{href:"https://angel.co/sarah-goon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{className:e.icons,icon:["fab","angellist"]}))))},Y=Object(p.a)(function(e){return{footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"transparent",color:"white",flexShrink:0},footerText:{fontFamily:"Raleway"}}}),q=function(){var e=Y();return r.a.createElement("footer",{className:e.footer},r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(B.a,{variant:"body1",align:"center",className:e.footerText},"\xa9 2020")))},X=a(38),K=a(63),$=a(64),V=a(65),Z=Object(V.a)({palette:{primary:{main:"#ffffff",dark:"#3f3f3f"}},typography:{fontFamily:'"Raleway", "Petit Formal Script", "Arima Madurai", sans-serif',fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}});Z.typography.h1=Object(c.a)({fontSize:"3rem"},Z.breakpoints.up("md"),{fontSize:"5rem"}),Z.typography.h2=Object(c.a)({fontSize:"2.75rem"},Z.breakpoints.up("md"),{fontSize:"3.5rem"}),Z.typography.h4=Object(c.a)({fontSize:"1.75rem",fontWeight:500},Z.breakpoints.up("md"),{fontSize:"2.15rem"}),Z.typography.body1={fontSize:"1.1rem"},Z.typography.subtitle1={fontSize:".8rem",fontWeight:500};var ee=Z;X.b.add(K.a,$.a);var te=Object(p.a)(function(e){var t;return{root:(t={display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},Object(c.a)(t,e.breakpoints.down("sm"),{backgroundImage:'url("/images/meandopie-sm.jpg")',backgroundAttachment:"inital"}),Object(c.a)(t,e.breakpoints.up("sm"),{backgroundImage:'url("/images/meandopie-md.jpg")'}),Object(c.a)(t,e.breakpoints.up("md"),{backgroundImage:'url("/images/meandopie-lg.jpg")'}),Object(c.a)(t,e.breakpoints.up("xl"),{backgroundImage:'url("/images/meandopie-xl.jpg")'}),t),main:{display:"flex",marginTop:e.spacing(2),marginBottom:e.spacing(2),flex:"1 0 auto"}}});var ae=function(){var e=te();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{theme:ee},r.a.createElement(l.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(O,null),r.a.createElement(g.a,{component:"main",className:e.main},r.a.createElement(s.a,{exact:!0,path:"/",component:M}),r.a.createElement(s.a,{path:"/about",component:T}),r.a.createElement(s.a,{path:"/portfolio",component:J}),r.a.createElement(s.a,{path:"/contact",component:_})),r.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[74,1,2]]]);
//# sourceMappingURL=main.f5674330.chunk.js.map