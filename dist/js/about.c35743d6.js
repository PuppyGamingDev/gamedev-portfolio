(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Resume")]),a("div",{staticClass:"paragraph"},[t._v(" I'm "),a("strong",[t._v("Mike")]),t._v(", the developer of Puppy Gaming. "),a("br"),t._v("I have always had an interest in how games worked so it made sense to learn how games were developed. "),a("br"),t._v("Currently learning C# development in Unity. "),a("br"),t._v("I like to make little games when I get fun ideas. "),a("br"),a("br"),t._v("Im currently only doing game development during my spare time along with my YouTube videos. If you are looking for support or for work on any of the assets I use please feel free to "),a("router-link",{attrs:{to:"/contact"}},[t._v("contact me")]),t._v(". "),a("br"),a("br"),t._m(0)],1),t._m(1),a("div",{staticStyle:{clear:"both"}}),t._m(2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("div",{staticStyle:{clear:"both"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/Puppy.png",alt:"Photo of Mike"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-content"},[a("h2",[t._v("Working History")]),a("h3",[t._v("Warehouse Operative - Next Day Courier")]),a("h4",[t._v("2006 - 2013")]),a("div",{staticClass:"tech-stack"},[t._v("Working in a small team to scan, separate and organise packages ready to be loaded onto delivery vehicles.")]),a("h3",[t._v("Warehouse Operative - Food Distribution")]),a("h4",[t._v("2013 - 2015")]),a("div",{staticClass:"tech-stack"},[t._v("Working alone or in a team to pick food orders in a cooled or freezer environment and load delivery vehicles to a schedule.")]),a("h3",[t._v("Shift Technician - Energy Recovery Facility")]),a("h4",[t._v("2015 - Present")]),a("div",{staticClass:"tech-stack"},[t._v("Monitoring and controlling the combustion process of waste that is then used to drive a steam turbine.")])])}],s=a("2b0e"),o=s["a"].extend({name:"Resume",components:{}}),r=o,l=(a("eb8d"),a("2877")),c=Object(l["a"])(r,n,i,!1,null,"1818fbaa",null);e["default"]=c.exports},"1e66":function(t,e,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"27bb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},i=[],s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},r=[],l=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,p=(a("1e66"),a("2877")),u=Object(p["a"])(c,o,r,!1,null,"e66acff8",null),d=u.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:d},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),h=m,v=(a("5935"),Object(p["a"])(h,n,i,!1,null,"190958aa",null));e["a"]=v.exports},"416f":function(t,e,a){},"4d97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("My Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" The following are projects that I have developed or created. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[t._v(" Contact me for opportunities at "),a("a",{attrs:{target:"_blank",href:"mailto:puppygamingdev@gmail.com"}},[t._v("puppygamingdev@gmail.com")])])}],s=a("2b0e"),o=a("27bb"),r=a("983d"),l=[new r["a"]("project-1","Mini Battles","img/projects/project-1.png",'\n    <div class="paragraph">\n     <strong>Mini Battles</strong> is my first game released on any store and serves as an end result for one of my YouTube playlists of combining Super Multipayer Shooter Template and CBS from the Unity Asset Store.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/sK4un0JAWbg" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <a href="https://play.google.com/store/apps/details?id=com.PuppyGaming.MiniBattles" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Multiplayer or with Bots</li>\n        <li>Cosmetics!</li>\n        <li>Different characters to choose from</li>\n        <li>Clans</li>\n        <li>Daily rewards</li>\n        <li>and Leaderboards</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="https://puppygaming.co.uk/wp-content/uploads/2021/10/Screenshot_20211010-035558.jpg" alt="Mini Battles Screenshot" />\n        <img class="phone-screenshot" src="https://puppygaming.co.uk/wp-content/uploads/2021/10/Screenshot_20211010-035729.jpg" alt="Mini Battles Screenshot" />\n    </div>\n    ',"#23bd69",!0),new r["a"]("project-2","YouTube Channel","img/projects/project-2.png",'\n    <div class="paragraph">\n        My <strong>YouTube Channel</strong> was created with the aim of helping others by creating guides for the additions or modifications I make with different assets from the Unity Asset Store.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/J9H--EYnykg" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        You can visit the channel <a href="https://www.youtube.com/channel/UCqUH4soOKdWsTBx6O81ERBg" target="_blank">HERE</a>.\n    </div>\n    </div>\n\n    ',"#5a78af")],c=s["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),p=c,u=a("2877"),d=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=d.exports},5348:function(t,e,a){"use strict";var n=a("8ba1"),i=a.n(n);i.a},5935:function(t,e,a){"use strict";var n=a("416f"),i=a.n(n);i.a},"67f3":function(t,e,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"7c58":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Other Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" Here are some of the projects I haev had the pleasure of working on. ")]),a("ProjectsList",{attrs:{projects:t.projects}})],1)},i=[],s=a("2b0e"),o=a("27bb"),r=a("983d"),l=[new r["a"]("project-6","BitFreakz Shootout","img/projects/shootout.png",'\n    <div class="paragraph">\n      <strong>BitFreakz</strong> are a pixelated, bizarro duplicate of our universe living on Solana blockchain. They are a digital pieces of art, carefully put together pixel by pixel – that you can collect, trade and enjoy.\n\n      90% of the auctions proceeds are deposited in the BitFreaks Treasury, where they are governed by BitFreaks holders, and are acting as a form of venture capital fund for the community.\n      <br/>Visit them <a href="https://bitfreakz.io" target="blank">HERE</a>.\n    </div>\n\n          <div class="paragraph">\n            Features implimented into BitFreakz Shootout:\n            <ul>\n            <li>Simple Spectator Mode</li>\n            <li>Team system with team spawns</li>\n            <li>Match restarter</li>\n            <li>Various bug fixes and support</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="img/projects/shootout.png" alt="BitFreakz Image" />\n        </div>\n    ',"#c10606",!1,!0),new r["a"]("project-7","Dynamic Battles","img/projects/dynamic.png",'\n    <div class="paragraph">\n                <strong>Dynamic Battles</strong> was a team based multiplayer FPS created for the \'Dynamic\' content creators community for the use of internal collaboration and fun. This was created on top of MFPS 2.0 from the Unity Asset Store.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Generic team based gun fights</li>\n              <li>Simple & fun maps</li>\n              <li>Clan and rankings systems</li>\n              <li>Class customization</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                This game is no longer in use and the community has been disbanded.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="img/projects/dynamic.png" alt="Dynamic Battles Screenshot" />\n            </div>',"#1ca1e2")],c=s["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),p=c,u=a("2877"),d=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=d.exports},"8ba1":function(t,e,a){},"8cdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},i=[],s=(a("67f3"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"c64612d2",null);e["default"]=r.exports},"983d":function(t,e,a){"use strict";var n=function(){function t(t,e,a,n,i,s,o){void 0===i&&(i="#000000"),void 0===s&&(s=!1),void 0===o&&(o=!1),this.id=t,this.name=e,this.htmlDescription=n,this.iconUrl=a,this.isHigh=s,this.isWide=o,this.accentColor=i}return t}();e["a"]=n},a9fe:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Looking to contact me?")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("Need help or wanting to talk?"),a("br"),t._v("Feel free to contact me about any opportunity, or just to ask questions.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-user-circle-o fa-lg fa-fw"}),a("a",{attrs:{href:"https://www.puppygaming.co.uk",target:"_blank"}},[t._v("https://www.puppygaming.co.uk")])]),a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:puppygamingdev@gmail.com",target:"_blank"}},[t._v("puppygamingdev@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-youtube-play fa-lg fa-fw"}),a("a",{attrs:{href:"https://www.youtube.com/channel/UCqUH4soOKdWsTBx6O81ERBg",target:"_blank"}},[t._v("YouTube")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://https://github.com/PuppyGamingDev",target:"_blank"}},[t._v("github.com/PuppyGamingDev")])]),a("li",[a("i",{staticClass:"fa fa-play fa-lg fa-fw"}),a("a",{attrs:{href:"https://play.google.com/store/apps/dev?id=8119669567775044777",target:"_blank"}},[t._v("Google Play Store")])]),a("li",[a("i",{staticClass:"fa fa-commenting fa-lg fa-fw"}),a("a",{attrs:{href:"https://discord.gg/pvP4C7dCC3",target:"_blank"}},[t._v("Discord")])])])])}],s=(a("c9ed"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"09b16060",null);e["default"]=r.exports},c9ed:function(t,e,a){"use strict";var n=a("f7d6"),i=a.n(n);i.a},dec8:function(t,e,a){},eb8d:function(t,e,a){"use strict";var n=a("a9fe"),i=a.n(n);i.a},ee3f:function(t,e,a){},f7d6:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hi!")]),a("div",{staticClass:"paragraph"},[t._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[t._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[t._v("some of my own games")]),t._v(" and assisted on "),a("router-link",{attrs:{to:"/other-projects"}},[t._v("other people's projects")])],1),a("div",{staticStyle:{"margin-top":"40px"}},[t._v("If you are looking for help with the assets i've using in my projects or videos, you can reach me at "),a("a",{attrs:{href:"mailto:puppygamingdev@gmail.com"}},[t._v("puppygamingdev@gmail.com")]),t._v(" or "),a("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(".")],1)]),t._m(1),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" I'm "),a("strong",[t._v("Mike")]),t._v(", also known as Shiffed online, a hobbyist game developer."),a("br"),t._v(" I spend my days working, spending time with my wife & daughter or prototyping games & creating YouTube guides. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/Puppy.png",alt:"Avatar of Mike"}})])}],s=(a("5348"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"6320fca6",null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.c35743d6.js.map