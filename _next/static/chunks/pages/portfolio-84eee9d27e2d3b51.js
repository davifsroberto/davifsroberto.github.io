(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{271:function(e,o,s){"use strict";s.d(o,{h:function(){return f}});var t=s(1664),a=s(2125),i=a.ZP.header.withConfig({displayName:"styles__Container",componentId:"sc-1tgznul-0"})(["position:absolute;width:100%;z-index:2;.navbar{padding:1.03em 2em;border-bottom:1px solid rgba(243,242,242,0.41);}"]),n=a.ZP.h1.withConfig({displayName:"styles__Logo",componentId:"sc-1tgznul-1"})(["background:url('/assets/images/general/davifsroberto-logo.png') no-repeat center;background-size:contain;cursor:pointer;height:2em;width:2.8em;margin-bottom:0;font-size:2em;"]),r=a.ZP.li.withConfig({displayName:"styles__Container",componentId:"sc-1slsn8a-0"})(["a{display:block;padding:9px;color:#000;text-align:center;text-transform:uppercase;color:#3b5fa1;letter-spacing:1px;font-size:16px;font-weight:500;&:hover,.active{color:#2a5298;}}"]),m=s(5893);function g(e){var o=e.itemMenu;return(0,m.jsx)(r,{children:(0,m.jsx)("a",{href:o.link,className:o.className,download:o.download,children:o.name})})}var l=a.ZP.ul.withConfig({displayName:"styles__Container",componentId:"sc-1enmji4-0"})(["margin:0;color:#fff;z-index:2;font-size:29px;> li{float:left;position:relative;width:100%;}label{position:relative;display:block;cursor:pointer;text-align:center;margin:0;span{line-height:1em;}}input{display:none;&:checked ~ .submenu{max-height:360px;padding:0.4em 0;transition:max-height 0.5s ease-in;}}"]),p=a.ZP.ul.withConfig({displayName:"styles__SubMenu",componentId:"sc-1enmji4-1"})(["max-height:0;padding:0;overflow:hidden;background:#f7f7f7;transition:max-height 0.5s ease-out;position:absolute;min-width:8em;right:0;border-radius:4px;-webkit-border-radius:4px;-o-border-radius:4px;-ms-border-radius:4px;-moz-border-radius:4px;box-shadow:0 1px 8px rgba(20,21,21,0.37);-webkit-box-shadow:0 1px 8px rgba(20,21,21,0.37);-moz-box-shadow:0 1px 8px rgba(20,21,21,0.37);"]);function d(e){var o=e.menu;return(0,m.jsx)(l,{children:(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{id:"show-submenu",type:"checkbox"}),(0,m.jsx)("label",{htmlFor:"show-submenu",children:(0,m.jsx)("span",{className:"fa fa-bars"})}),(0,m.jsx)(p,{className:"submenu",children:null===o||void 0===o?void 0:o.map((function(e){return(0,m.jsx)(g,{itemMenu:e},e.name)}))})]})})}function f(e){var o=e.menuCustom;return(0,m.jsx)(i,{id:"home",children:(0,m.jsx)("nav",{className:"navbar",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(t.default,{href:"/",passHref:!0,children:(0,m.jsx)(n,{})}),(0,m.jsx)(d,{menu:o||[{name:"Sobre Mim",link:"#about"},{name:"Experi\xeancia",link:"#experience"},{name:"Portf\xf3lio",link:"#portfolio"},{name:"Artigos",link:"#articles"},{name:"Recomenda\xe7\xf5es",link:"#recommendations"},{name:"Contato",link:"#contact",className:" fw-bold text-decoration-underline "},{name:"CV",link:"/cv"}]})]})})})}},9725:function(e,o,s){"use strict";s.d(o,{_:function(){return l}});var t=s(2125),a=(s(3955),t.ZP.article.withConfig({displayName:"styles__Container",componentId:"sc-1868f4x-0"})([""])),i=s(7294),n=s(2879),r=t.ZP.section.withConfig({displayName:"styles__Container",componentId:"sc-1uejdmp-0"})([".box{position:relative;cursor:pointer;background:#fff;text-align:center;text-align:center;height:12.5em;figure{background:url(",") no-repeat center center;background-size:cover;width:100%;height:12.5em;}.box-content{background:rgba(0,0,0,0.85);position:absolute;inset:0;opacity:0;transition:0.5s;&:hover{opacity:1;transition:0.5s;}.title{color:#fff;position:absolute;margin:-2em 0;bottom:55%;font-size:1.6rem;width:100%;}}}@media (max-width:768px){.box .box-content .title{top:3em;}}@media (max-width:545px){.box .box-content .title{font-size:1rem;}}@media (max-width:325px){.box .box-content .title{font-size:0.9rem;}}"],(function(e){return e.bgBoxShadow})),m=s(5893);function g(e){var o=e.gallery,s=(0,i.useState)(!1),t=s[0],a=s[1],g=(0,i.useState)(!1),l=g[0],p=g[1],d=(0,i.useState)(0),f=d[0],c=d[1];return(0,m.jsxs)(r,{onClick:function(){return p(!0),void(t||(a(!0),Promise.resolve().then((function(){document.querySelectorAll('[title="Next image"]')[0].click()}))))},bgBoxShadow:o.bgBox,className:"col-lg-4 col-md-4 col-6 g-1",children:[l&&(0,m.jsx)(n.Z,{mainSrc:o.images[f],nextSrc:o.images[(f+1)%o.images.length],prevSrc:o.images[(f+o.images.length-1)%o.images.length],onCloseRequest:function(){p(!1),a(!1)},onMovePrevRequest:function(){return c((f+o.images.length-1)%o.images.length)},onMoveNextRequest:function(){return c((f+1)%o.images.length)},keyRepeatLimit:1}),(0,m.jsxs)("section",{className:"box",children:[(0,m.jsx)("figure",{}),(0,m.jsx)("section",{className:"box-content",children:(0,m.jsx)("h3",{className:"title",children:o.titleBox})})]})]})}function l(e){var o=e.gallery;return(0,m.jsx)(a,{className:"row",children:o.map((function(e){return(0,m.jsx)(g,{gallery:e},e.id)}))})}},5966:function(e,o,s){"use strict";s.r(o),s.d(o,{default:function(){return m}});var t=s(2125).ZP.main.withConfig({displayName:"styles__Container",componentId:"sc-gu4mil-0"})(["color:var(--bs-gray);h3{color:var(--bs-gray-dark);}"]),a=s(271),i=s(9725);var n=s(7944),r=s(5893),m=function(){return(0,r.jsxs)(t,{children:[(0,r.jsx)("section",{className:"bg-header-default",children:(0,r.jsx)(a.h,{menuCustom:(0,n.F)()})}),(0,r.jsxs)("article",{className:"container py-5",children:[(0,r.jsx)("p",{className:"paragraph",children:"Portif\xf3lio"}),(0,r.jsx)("h3",{className:"mb-sm-5 mb-4",children:"Alguns projeto que j\xe1 realizei"}),(0,r.jsx)("div",{className:"row mb-5",children:(0,r.jsxs)("section",{className:"col-sm-12",children:[(0,r.jsx)("h4",{children:"Referente a esse Portif\xf3lio"}),(0,r.jsx)("p",{children:"Segue abaixo alguns projetos que j\xe1 realizei durante a minha jornada como desenvolvedor web, apesar de tamb\xe9m ter atuado com backend, busquei trazer em meu portif\xf3lio apenas projetos que desenvolvi o frontend, pois \xe9 o meu foco."}),(0,r.jsx)("p",{children:"Alguns projetos eu realizei com uma equipe de desenvolvedores de frontend e destaquei apenas as features que fiz, al\xe9m disso, trouxe projetos onde atuei sozinho e desenvolvi por completo todo o frontend do sistema."}),(0,r.jsxs)("p",{children:["Aqui n\xe3o tem ",(0,r.jsx)("i",{children:"todos os sistemas"})," que desenvolvi, alguns s\xe3o projeto privados, onde n\xe3o posso compartilh\xe1-los por quest\xe3o de seguran\xe7a e exig\xeancia da empresa contratante, outros eu simplesmente me esqueci de pegar evid\xeancias, e o sistema existe mais. Por\xe9m, apresento a maioria dos projetos onde atuei com minhas habilidades de frontend engineer."]})]})}),(0,r.jsx)(i._,{gallery:[{id:1,bgBox:"/assets/images/portfolio/mottu/totem/00_bg.png",titleBox:"Mottu - Totem de Autoatendimento",images:["/assets/images/portfolio/mottu/totem/01.png","/assets/images/portfolio/mottu/totem/02.png","/assets/images/portfolio/mottu/totem/03.png","/assets/images/portfolio/mottu/totem/04.png","/assets/images/portfolio/mottu/totem/05.png","/assets/images/portfolio/mottu/totem/06.png","/assets/images/portfolio/mottu/totem/07.png"]},{id:2,bgBox:"/assets/images/portfolio/fast/oi/00_bg.png",titleBox:"Oi - Gerenciamento de Fatura",images:["/assets/images/portfolio/fast/oi/01.png","/assets/images/portfolio/fast/oi/02.png","/assets/images/portfolio/fast/oi/03.png","/assets/images/portfolio/fast/oi/04.png","/assets/images/portfolio/fast/oi/05.png","/assets/images/portfolio/fast/oi/06.png","/assets/images/portfolio/fast/oi/07.png"]},{id:3,bgBox:"/assets/images/portfolio/mottu/mottu-entregas/integracao-meli/00_bg.png",titleBox:"Mottu Delivery - Integra\xe7\xe3o Meli",images:["/assets/images/portfolio/mottu/mottu-entregas/integracao-meli/01.png","/assets/images/portfolio/mottu/mottu-entregas/integracao-meli/02.png","/assets/images/portfolio/mottu/mottu-entregas/integracao-meli/03.png","/assets/images/portfolio/mottu/mottu-entregas/integracao-meli/04.png"]},{id:4,bgBox:"/assets/images/portfolio/rommanel/mmr/00_bg.png",titleBox:"Rommanel - Meu Mundo Rommanel",images:["/assets/images/portfolio/rommanel/mmr/01.png","/assets/images/portfolio/rommanel/mmr/02.png","/assets/images/portfolio/rommanel/mmr/03.png","/assets/images/portfolio/rommanel/mmr/04.png","/assets/images/portfolio/rommanel/mmr/05.png","/assets/images/portfolio/rommanel/mmr/06.png","/assets/images/portfolio/rommanel/mmr/07.png","/assets/images/portfolio/rommanel/mmr/08.png","/assets/images/portfolio/rommanel/mmr/09.png","/assets/images/portfolio/rommanel/mmr/10.png"]},{id:5,bgBox:"/assets/images/portfolio/mottu/mottu-entregas/general-features/00_bg.png",titleBox:"Mottu - Features Gerais",images:["/assets/images/portfolio/mottu/mottu-entregas/general-features/01.png","/assets/images/portfolio/mottu/mottu-entregas/general-features/02.png","/assets/images/portfolio/mottu/mottu-entregas/general-features/03.png","/assets/images/portfolio/mottu/mottu-entregas/general-features/04.png","/assets/images/portfolio/mottu/mottu-entregas/general-features/05.png","/assets/images/portfolio/mottu/mottu-entregas/general-features/06.png"]},{id:6,bgBox:"/assets/images/portfolio/rommanel/cadastro_mmr/00_bg.png",titleBox:"Rommanel - Cadastro Consultora Rommanel",images:["/assets/images/portfolio/rommanel/cadastro_mmr/01.png","/assets/images/portfolio/rommanel/cadastro_mmr/02.png","/assets/images/portfolio/rommanel/cadastro_mmr/03.png","/assets/images/portfolio/rommanel/cadastro_mmr/04.png","/assets/images/portfolio/rommanel/cadastro_mmr/05.png","/assets/images/portfolio/rommanel/cadastro_mmr/06.png"]},{id:7,bgBox:"/assets/images/portfolio/rommanel/mensageria_mmr/00_bg.png",titleBox:"Rommanel - Menssageria Rommanel",images:["/assets/images/portfolio/rommanel/mensageria_mmr/01.png","/assets/images/portfolio/rommanel/mensageria_mmr/02.png","/assets/images/portfolio/rommanel/mensageria_mmr/03.png","/assets/images/portfolio/rommanel/mensageria_mmr/04.png","/assets/images/portfolio/rommanel/mensageria_mmr/05.png","/assets/images/portfolio/rommanel/mensageria_mmr/06.png","/assets/images/portfolio/rommanel/mensageria_mmr/07.png","/assets/images/portfolio/rommanel/mensageria_mmr/08.png","/assets/images/portfolio/rommanel/mensageria_mmr/09.png","/assets/images/portfolio/rommanel/mensageria_mmr/10.png","/assets/images/portfolio/rommanel/mensageria_mmr/11.png"]},{id:8,bgBox:"/assets/images/portfolio/cielo/dashboard/00_bg.jpg",titleBox:"Cielo - Dashboard Monitor de Servi\xe7os",images:["/assets/images/portfolio/cielo/dashboard/01.jpg","/assets/images/portfolio/cielo/dashboard/02.png","/assets/images/portfolio/cielo/dashboard/03.png","/assets/images/portfolio/cielo/dashboard/04.png","/assets/images/portfolio/cielo/dashboard/05.png","/assets/images/portfolio/cielo/dashboard/06.png","/assets/images/portfolio/cielo/dashboard/07.png"]},{id:9,bgBox:"/assets/images/portfolio/fast/vivo/00_bg.png",titleBox:"Vivo - Recupera\xe7\xe3o de Fatura Eletr\xf4nica",images:["/assets/images/portfolio/fast/vivo/01.png","/assets/images/portfolio/fast/vivo/02.png","/assets/images/portfolio/fast/vivo/03.png","/assets/images/portfolio/fast/vivo/04.png","/assets/images/portfolio/fast/vivo/05.png"]},{id:10,bgBox:"/assets/images/portfolio/deevo/fam/00_bg.jpg",titleBox:"FAM - Faculdade das Am\xe9ricas",images:["/assets/images/portfolio/deevo/fam/01.png","/assets/images/portfolio/deevo/fam/02.jpg","/assets/images/portfolio/deevo/fam/03.jpg","/assets/images/portfolio/deevo/fam/04.jpg","/assets/images/portfolio/deevo/fam/05.png","/assets/images/portfolio/deevo/fam/06.png"]},{id:11,bgBox:"/assets/images/portfolio/deevo/wborn/00_bg.png",titleBox:"Wborn Productions - Cat\xe1logo Online",images:["/assets/images/portfolio/deevo/wborn/01.png","/assets/images/portfolio/deevo/wborn/02.png","/assets/images/portfolio/deevo/wborn/03.png","/assets/images/portfolio/deevo/wborn/04.png"]},{id:12,bgBox:"/assets/images/portfolio/fast/besni/00_bg.png",titleBox:"Besni - Recupera\xe7\xe3o de Fatura",images:["/assets/images/portfolio/fast/besni/01.png","/assets/images/portfolio/fast/besni/02.png","/assets/images/portfolio/fast/besni/03.png","/assets/images/portfolio/fast/besni/04.png"]},{id:13,bgBox:"/assets/images/portfolio/fast/ceagesp/00_bg.png",titleBox:"CEAGESP - Gerenciamento de Nota Fiscal",images:["/assets/images/portfolio/fast/ceagesp/01.png","/assets/images/portfolio/fast/ceagesp/02.png"]},{id:14,bgBox:"/assets/images/portfolio/fast/sky/00_bg.png",titleBox:"Volkswagen e SKY - Email Marketing Fatura",images:["/assets/images/portfolio/fast/volkswagen/01.png","/assets/images/portfolio/fast/sky/01.png","/assets/images/portfolio/fast/volkswagen/00_bg.png","/assets/images/portfolio/fast/sky/00_bg.png"]}]})]})]})}},7944:function(e,o,s){"use strict";function t(){return[{name:"Home",link:"/"},{name:"Contato",link:"#contact",className:" fw-bold text-decoration-underline "},{name:"CV",link:"/cv"}]}s.d(o,{F:function(){return t}})},3295:function(e,o,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return s(5966)}])}},function(e){e.O(0,[25,774,888,179],(function(){return o=3295,e(e.s=o);var o}));var o=e.O();_N_E=o}]);