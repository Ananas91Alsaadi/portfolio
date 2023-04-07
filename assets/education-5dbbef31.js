import{_ as c,o as s,c as o,a as n,F as d,r as p,t as a}from"./index-1f6d0aaa.js";const g="/portfolio/pic1.jpg",u="/portfolio/Picture2.png",m="/portfolio/Picture3.png",_={data(){return{edu:[{title:`2020-2023 Jönköping, Sweden
          Bachelor in Graphic design and web development
`,content:`      * Management of dynamic webpages (using Vue.Js, PHP, etc…)    
          * Object-oriented programming
* Client APIs and libraries
* Creation of WordPress templates
* Search engine optimization
* User Experience Design
* Project Management
* Building database-driven web applications
          `},{title:`2019-2020
Master in International Financial Analysis
`,content:"Master in International Financial Analysis with topics in Finance, Economics, Statistics and information technology."}]}},methods:{handleOver(){this.$emit("ScrollingTrue",!0),console.log("handleOver")},stopListening(){this.$emit("ScrollingFalse",!1),console.log("stopListening")}}},h={class:"container"},f=n("img",{src:g,alt:""},null,-1),v=n("img",{src:u,alt:""},null,-1),b=n("h2",null,"Jönköping University",-1),y=n("img",{src:m,alt:""},null,-1);function P(F,t,M,S,r,i){return s(),o("main",null,[n("div",h,[f,v,b,y,n("div",{onMouseover:t[0]||(t[0]=(...e)=>i.handleOver&&i.handleOver(...e)),onMouseout:t[1]||(t[1]=(...e)=>i.stopListening&&i.stopListening(...e)),class:"blogs scroller"},[(s(!0),o(d,null,p(r.edu,(e,l)=>(s(),o("div",{class:"blog",key:l},[n("h2",null,a(e.title),1),n("p",null,a(e.content),1)]))),128))],32)])])}const w=c(_,[["render",P]]);export{w as default};
