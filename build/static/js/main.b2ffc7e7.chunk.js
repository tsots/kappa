(this.webpackJsonpkappa=this.webpackJsonpkappa||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),a=c(43),l=c.n(a),i=(c(51),c(8)),o=c(3),j=c.p+"static/media/boys.1c41166b.jpg",d=function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)("img",{src:j,alt:"my beautiful boys",className:"absolute object-cover w-full"}),Object(s.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(s.jsx)("h1",{className:"text-6xl text-green-100 font-bold leading-none lg:leading-snug",children:"How are you handsome!!!"})})]})},x=c(10),b=c(44),m=c.n(b)()({projectId:"7z71366d",dataset:"production"}),h=c(14),u=c.n(h),g=c(18),p=c.n(g),f=u()(m);var O=function(){var e,t=Object(n.useState)(null),c=Object(x.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){m.fetch('*[_type == "author"]{\n      name,\n      bio,\n      "authorImage": image.asset->url\n    }').then((function(e){return a(e[0])})).catch(console.error)}),[]),r?Object(s.jsx)("main",{className:"relative",children:Object(s.jsx)("div",{className:"p-10 lg:pt-48 mx-auto relative",children:Object(s.jsxs)("section",{className:"bg-green-800 rounded-lg shadow-2xl lg:flex p-20",children:[Object(s.jsx)("img",{src:(e=r.authorImage,f.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:r.name}),Object(s.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(s.jsxs)("h1",{className:"text-6xl text-green-300 mb-4",children:["Hi. My name is "," ",Object(s.jsx)("span",{className:"text-green-100",children:r.name})]}),Object(s.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(s.jsx)(p.a,{blocks:r.bio,projectId:"7z71366d",dataset:"production"})})]})]})})}):Object(s.jsx)("div",{children:"Loading ...."})},N=u()(m);var y=function(){var e,t=Object(n.useState)(null),c=Object(x.a)(t,2),r=c[0],a=c[1],l=Object(o.f)().slug;return Object(n.useEffect)((function(){m.fetch('*[slug.current == "'.concat(l,'"]{\n      title,\n      _id,\n      slud,\n      mainImage{\n        asset->{\n          _id,\n          url\n        }\n      },\n      body,\n      "name": author->name,\n      "authorImage": author->image\n    }')).then((function(e){return a(e[0])})).catch(console.error)}),[l]),r?Object(s.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(s.jsxs)("article",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(s.jsxs)("header",{className:"relative",children:[Object(s.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(s.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(s.jsx)("h1",{className:"text-3xl lg:text-6xl mb-4",children:r.title}),Object(s.jsx)("div",{className:"flex justify-center text-gray-800",children:Object(s.jsx)("img",{src:(e=r.authorImage,N.image(e)).url(),alt:r.name,className:"w-10 h-10 rounded-full"})}),Object(s.jsx)("p",{className:"flex items-center pl-2 text-2xl",children:r.name})]})}),Object(s.jsx)("img",{src:r.mainImage.asset.url,alt:r.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(s.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(s.jsx)(p.a,{blocks:r.body,projectId:"7z71366d",dataset:"production"})})]})}):Object(s.jsx)("div",{children:"Loading...."})},v=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){m.fetch('*[_type == "post"]{\n    title,\n    slug,\n    mainImage{\n      asset->{\n        _id,\n        url\n      },\n      alt\n    }\n  }').then((function(e){return r(e)})).catch(console.error)}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center",children:"Posts"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12"}),Object(s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(s.jsx)("article",{children:Object(s.jsx)(i.b,{to:"/post/"+e.slug.current,children:Object(s.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400",children:[Object(s.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(s.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(s.jsx)("h3",{className:"text-gray-800 text-lg px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})},w=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){m.fetch('*[_type == "project"]{\n    title,\n    date,\n    place,\n    description,\n    projectType,\n    link,\n    tags\n   \n  }').then((function(e){return r(e)})).catch(console.error)}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center",children:"The Projects"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:" Welcome to my projects"}),Object(s.jsx)("section",{className:"grid grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(s.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(s.jsx)("h3",{className:"text-gray-600 text-3xl font-bold mb-2 hover:text-red-700",children:Object(s.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreffer",children:e.title})}),Object(s.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(s.jsx)("span",{role:"img","aria-label":"right pointer flex justify-center items-center",children:Object(s.jsxs)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreffer",className:"text-red-500 font-bold hover:underline hover:text-red-400 text-xl",children:["View Th Project "," ","\ud83d\udc49"]})})]})]})}))})]})})},k=c(19),I=function(){return Object(s.jsx)("header",{className:"bg-red-600",children:Object(s.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(s.jsxs)("nav",{className:"flex justify-around",children:[Object(s.jsx)(i.c,{to:"/",exact:!0,activeClassName:"text-white",className:"\r inline-flex\r items-center\r py-6\r px-3\r mr-4\r text-red-100\r hover:text-green-800\r text-4xl\r font-bold\r tracking-widest",children:"Tsotetsi"}),Object(s.jsx)(i.c,{to:"/about",activeClassName:"text-red-100 bg-red-700",className:"\r inline-flex\r items-center\r py-3\r px-3\r my-6\r rounded\r text-red-200\r hover:text-green-800\r ",children:"About"}),Object(s.jsx)(i.c,{to:"/post",activeClassName:"text-red-100 bg-red-700",className:"\r inline-flex\r items-center\r py-3\r px-3\r my-6\r rounded\r text-red-200\r hover:text-green-800\r ",children:"Blog"}),Object(s.jsx)(i.c,{to:"/project",activeClassName:"text-red-100 bg-red-700",className:"\r inline-flex\r items-center\r py-3\r px-3\r my-6\r rounded\r text-red-200\r hover:text-green-800\r ",children:"Projects"})]}),Object(s.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(s.jsx)(k.SocialIcon,{url:"https://twitter.com/tsotetsi",className:"mr-4",target:"_black",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(k.SocialIcon,{url:"https://facebook.com/tsotetsi",className:"mr-4",target:"_black",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(k.SocialIcon,{url:"https://linkedin.com/tsotetsi",className:"mr-4",target:"_black",fgColor:"#fff",style:{height:35,width:35}})]})]})})};var _=function(){return Object(s.jsxs)(i.a,{children:[Object(s.jsx)(I,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{component:d,exact:!0,path:"/"}),Object(s.jsx)(o.a,{component:O,path:"/about"}),Object(s.jsx)(o.a,{component:y,path:"/post/:slug"}),Object(s.jsx)(o.a,{component:v,path:"/post"}),Object(s.jsx)(o.a,{component:w,path:"/project"})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),C()},51:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.b2ffc7e7.chunk.js.map