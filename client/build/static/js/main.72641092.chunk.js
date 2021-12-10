(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(21),n=a.n(s),o=(a(26),a(10)),r=a(5),i=a(8),l=a(14),j=a(13),d=a.n(j),b=a(6),m=a(11),h=a(2);function O(e){var t=e.setToken,a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],j=s[1],O=Object(l.g)(),x=Object(c.useState)(!1),u=Object(i.a)(x,2),p=(u[0],u[1]),g=Object(c.useState)(""),f=Object(i.a)(g,2),v=f[0],N=f[1],w=Object(c.useState)({email:"",password:""}),k=Object(i.a)(w,2),C=k[0],_=k[1],y=function(e){var t=e.target,a=t.name,c=t.value;_(Object(r.a)(Object(r.a)({},C),{},Object(o.a)({},a,c)))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(h.jsx)("div",{className:"register-form",children:Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),j(function(e){var t={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password||(t.password="Password is required"),t}(C)),n==={}&&console.log("no error"),console.log("in"),d.a.post("".concat(m.config.SERVER_URI,"/api/login"),{email:C.email,password:C.password}).then((function(e){var a=e.data.token;console.log("Token:",a),e?console.log(e):console.log("no error"),p(!0),t(a),console.log("token set"),O.push("/feed")})).catch((function(e){console.log(e);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),N(t),_({email:"",password:""}),t=""):(N(""),O.push("/feed"),p(!0))}))},children:[Object(h.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Email"}),Object(h.jsx)(b.e,{type:"email",name:"email",id:"email",value:C.email,onChange:y}),n.email&&Object(h.jsx)("p",{className:"text-danger",children:n.email})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",name:"password",id:"password",value:C.password,onChange:y}),n.password&&Object(h.jsx)("p",{className:"text-danger",children:n.password})]}),Object(h.jsxs)("div",{className:"row justify-content-evenly",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(b.a,{children:"Login"})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(h.jsx)(b.a,{className:"ml-1",onClick:function(){O.push("/register")},children:"Register"})]}),v&&Object(h.jsx)("h3",{className:"text-white text-center",children:v})]})]})})})})}var x=function(){var e=Object(c.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),j=Object(i.a)(n,2),O=j[0],x=j[1],u=Object(c.useState)(""),p=Object(i.a)(u,2),g=p[0],f=p[1],v=Object(c.useState)(!1),N=Object(i.a)(v,2),w=N[0],k=N[1],C=Object(l.g)(),_=function(e){var t=e.target,c=t.name,n=t.value;s(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},c,n)))},y=function(){console.log("in"),d.a.post("".concat(m.config.SERVER_URI,"/api/register"),{name:a.name,email:a.email,phone:a.phone,address:a.address,password:a.password}).then((function(e){e||console.log("no error"),k(!0),C.push("/login")})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),f(t),s({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=""):(f(""),C.push("/login"),k(!0))}))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(h.jsx)("div",{className:"register-form",children:Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),x(function(e){var t={};return e.name.trim()||(t.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.phone.trim()||(t.phone="Phone required"),e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more."):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}(a)),O==={}&&console.log("no error"),y()},children:[w?Object(h.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(h.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(h.jsx)(b.e,{type:"name",name:"name",id:"name",value:a.name,onChange:_}),O.name&&Object(h.jsx)("p",{className:"text-danger",children:O.name})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Email"}),Object(h.jsx)(b.e,{type:"email",name:"email",id:"email",value:a.email,onChange:_}),O.email&&Object(h.jsx)("p",{className:"text-danger",children:O.email})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(h.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:a.phone,onChange:_}),O.phone&&Object(h.jsx)("p",{className:"text-danger",children:O.phone})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Address"}),Object(h.jsx)(b.e,{type:"address",name:"address",id:"address",value:a.address,onChange:_})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",name:"password",id:"password",value:a.password,onChange:_}),O.password&&Object(h.jsx)("p",{className:"text-danger",children:O.password})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:a.password2,onChange:_}),O.password2&&Object(h.jsx)("p",{className:"text-danger",children:O.password2}),"\\"]}),Object(h.jsxs)("div",{className:"row justify-content-evenly",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(b.a,{children:"Register"})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(h.jsx)(b.a,{className:"ml-1",onClick:function(){C.push("/login")},children:"Login"})]}),g&&Object(h.jsx)("h3",{className:"text-white text-center",children:g})]})]})})})})},u=a.p+"static/media/welcome_bg.2e5d8be7.jpg";var p=function(){return Object(h.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(u,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(h.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(h.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(h.jsx)("strong",{children:"PetLand"})}),Object(h.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(h.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(h.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},g=a(9),f=a(7),v=a(24),N=a.n(v),w=a(25),k=a(52),C=a(53),_=a(55),y=a(54),S=[{title:"Home",url:"/feed",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"},{title:"Create a post",url:"/createPost",cName:"nav-links"},{title:"Search",url:"/search",cName:"nav-links"}];a(86);var R=function(e){Object(_.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.state({clicked:!e.state.clicked})},e}return Object(C.a)(a,[{key:"logout",value:function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("out"),d.a.post("".concat(m.config.SERVER_URI,"/api/logout"),{logout:!0}).then((function(e){e?(console.log(e),sessionStorage.removeItem("token")):console.log("no error")})).catch((function(e){console.log(e);var t=e.response;t&&console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"NavbarItems",children:[Object(h.jsxs)("h1",{className:"navbar-logo",children:["PetLand",Object(h.jsx)("i",{className:"fas fa-cat"})]}),Object(h.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(h.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(h.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:S.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(h.jsx)(b.a,{onClick:this.logout,children:"Log Out"})]})}}]),a}(c.Component),I=Object(l.i)(R),E=a(12),T=function(e){var t,a=e.post_id,c=e.name,s=e.breed,n=e.age,r=e.location,i=e.extra_info,j=e.p_image,d=e.vaccinated,b=e.ts,m=Object(l.g)();return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,(t={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(t,"style",{width:"30rem",height:"800px"}),Object(o.a)(t,"children",[Object(h.jsx)(E.a.Img,{variant:"top",src:""}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsxs)(E.a.Title,{className:"makeCenter postTitle",style:{fontSize:28,textTransform:"uppercase"},children:["Meet with ",c]}),Object(h.jsx)("br",{}),Object(h.jsx)(E.a.Text,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Name:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"namee",children:c})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Breed:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"breed",children:s})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Age:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"age",children:n})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Location:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"location",children:r})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Vaccinated:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"location",children:d?"Yes":"No"})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Extra Info:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"extra_info",children:i})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{className:"makeCenter",children:Object(h.jsx)("img",{src:j,className:"makeCenter photo"})}),Object(h.jsx)(g.a,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{style:{fontSize:"10px",position:"absolute",right:0,marginRight:"10%"},className:"makeCenter",id:"extra_info",children:b.substring(0,10)})})}),Object(h.jsxs)(g.a,{className:"makeCenter",children:[Object(h.jsx)(f.a,{sm:2,className:"my-1",children:Object(h.jsxs)("a",{href:"/feed",className:"btn btn-outline-white wow fadeInDown",children:[Object(h.jsx)("i",{className:"far fa-bookmark",children:" "})," "]})}),Object(h.jsx)(f.a,{sm:2,className:"my-1",children:Object(h.jsxs)("a",{href:"/postcomment",onClick:function(e){e.preventDefault(),m.push({pathname:"/postcomment",state:a})},className:"btn btn-outline-white wow fadeInDown",children:[Object(h.jsx)("i",{className:"far fa-comments",children:" "})," "]})})]})]})})]})]),t))})},P=a.p+"static/media/green_bg.14f5c6c8.jpg",D=(a(87),function(){var e=Object(c.useState)({namee:{}}),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),j=Object(i.a)(n,2),b=(j[0],j[1],Object(c.useState)("")),O=Object(i.a)(b,2),x=(O[0],O[1],Object(c.useState)("")),u=Object(i.a)(x,2),p=(u[0],u[1]),v=Object(c.useState)(!1),N=Object(i.a)(v,2),w=(N[0],N[1]),k=Object(l.g)(),C=function(){d.a.post("".concat(m.config.SERVER_URI,"/api/get-posts"),{}).then((function(e){var t;t=e.data.posts,console.log("e is "+t),s(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},"namee",t))),a.namee=t})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||(p(""),k.push("/feed"),w(!0))}))};return Object(c.useEffect)((function(){return C()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(I,{}),Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(P,")"),padding:"10%"},className:"makeCenter",children:Object(h.jsx)(g.a,{children:a.namee.length>0&&a.namee.map((function(e,t){return Object(h.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(h.jsx)(T,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts,post_id:e.post_id})})}))})})]})});var L=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"DM Page"})})};var V=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Profile Page "})})},U=a(28),A=a(36),z=[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}],B=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var q=function(){var e,t=Object(c.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1],j=Object(c.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),O=Object(i.a)(j,2),x=O[0],u=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),k=(v[0],v[1]),C=Object(c.useState)(""),_=Object(i.a)(C,2),y=(_[0],_[1]),S=Object(c.useState)(!1),R=Object(i.a)(S,2),T=(R[0],R[1]),P=Object(l.g)(),D=function(e){var t=e.target,a=t.name,c=t.value;console.log(a),console.log(c),u(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},a,c)))},L=function(){var e=Object(w.a)(N.a.mark((function e(t){var a,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],e.next=3,V(a);case 3:c=e.sent,console.log("base image is"),console.log(c),n(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){return new Promise((function(t,a){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){t(c.result)},c.onerror=function(e){a(e)}}))},q=function(){d.a.post("".concat(m.config.SERVER_URI,"/api/createPost"),{name:x.name,breed:x.breed,location:x.location,age:x.age,p_image:s,extra_info:x.extra_info,vaccinated:x.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){T(!0),P.push("/feed")})).catch((function(e){var t=e.response.data.errors[0].msg;t?(console.log(t),y(t),u({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:"",baseImage:""}),t=""):(y(""),P.push("/feed"),T(!0))}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(I,{}),Object(h.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(h.jsx)(E.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){e.preventDefault(),k(function(e){var t={};return"Select"===!e.breed&&(t.name="Breed required"),""===e.name&&(t.email="Name required"),""===e.age&&(t.phone="Age required"),""===e.location&&(t.phone="Location required"),"Select"===e.vaccinated&&(t.phone="Vaccination Status required"),t}(x)),q()},children:[Object(h.jsx)(E.a.Img,{variant:"top",src:""}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsx)(E.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(h.jsx)("br",{}),Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(f.a,{children:[Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(h.jsx)(A.a,{options:z,value:z[x.breed],onChange:function(e){var t=e.value;u(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},"breed",t))),console.log(e),x.breed=e.value,console.log(x.breed)}})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(h.jsx)(b.e,{type:"name",name:"name",id:"name",value:x.name,onChange:D})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(h.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:x.age,onChange:D})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(h.jsx)(b.e,{type:"text",name:"location",id:"location",value:x.location,onChange:D})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(h.jsx)(A.a,{options:B,value:B[x.vaccinated],onChange:function(e){var t=e.value;u(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},"vaccinated",t))),console.log(e),x.vaccinated=e.value,console.log(x.vaccinated)}})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(h.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:x.extra_info,onChange:D})]})]}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"file",onChange:function(e){L(e)}}),Object(h.jsx)("img",{className:"photo",src:x.p_image}),Object(h.jsx)("img",{className:"photo",src:s})]})})]}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(f.a,{md:{offset:8},children:[Object(h.jsx)(U.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){P.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(h.jsx)(U.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(h.jsx)(E.a.Text,{})]})]})),e))})]})};function M(){var e=Object(c.useState)({posts:{},search_name:"",search_location:"",search_breed:""}),t=Object(i.a)(e,2),a=t[0],s=t[1];function n(){return(n=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.post("".concat(m.config.SERVER_URI,"/api/search"),{search_breed:"%"+a.search_breed+"%",search_name:"%"+a.search_name+"%",search_location:"%"+a.search_location+"%"}).then((function(e){console.log(e),l(e.data.posts)})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=function(e){s(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},"posts",e))),a.posts=e},j=function(e){var t=e.target,c=t.name,n=t.value;s(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},c,n)))};return Object(h.jsxs)("div",{style:{backgroundImage:"url(".concat(P,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100%"},children:[Object(h.jsx)(I,{}),Object(h.jsx)(b.c,{onSubmit:function(e){var t=e.target,c=t.name,i=t.value;s(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},c,i))),e.preventDefault(),function(){n.apply(this,arguments)}()},children:Object(h.jsx)("div",{className:"makeCenter",children:Object(h.jsxs)(g.a,{className:"makeCenter",children:[Object(h.jsx)(f.a,{sm:3,className:"my-1",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)("label",{children:"Breed"}),Object(h.jsx)(b.e,{name:"search_breed",id:"search_breed",value:a.search_breed,onChange:j})]})}),Object(h.jsx)(f.a,{sm:3,className:"my-1",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)(b.e,{name:"search_name",id:"search_name",value:a.search_name,onChange:j})]})}),Object(h.jsx)(f.a,{sm:3,className:"my-1",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)("label",{children:"Location"}),Object(h.jsx)(b.e,{name:"search_location",id:"search_location",value:a.search_location,onChange:j})]})}),Object(h.jsx)(f.a,{sm:2,className:"my-1",children:Object(h.jsx)(b.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"Search"})})]})})}),Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(P,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},className:"makeCenter",children:Object(h.jsx)(g.a,{children:a.posts.length>0&&a.posts.map((function(e,t){return Object(h.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(h.jsx)(T,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts})})}))})})]})}var Y=function(e){var t,a=e.post_id,c=e.name,s=e.breed,n=e.age,r=e.location,i=e.extra_info,j=e.p_image,d=e.vaccinated,b=e.ts,m=Object(l.g)();return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,(t={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(t,"style",{width:"30rem",height:"800px"}),Object(o.a)(t,"children",[Object(h.jsx)(E.a.Img,{variant:"top",src:""}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsxs)(E.a.Title,{className:"makeCenter postTitle",style:{fontSize:28,textTransform:"uppercase"},children:["Meet with ",c]}),Object(h.jsx)("br",{}),Object(h.jsx)(E.a.Text,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Name:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"namee",children:c})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Breed:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"breed",children:s})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Age:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"age",children:n})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Location:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"location",children:r})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Vaccinated:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"location",children:d?"Yes":"No"})})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{className:"postTitle",children:"Extra Info:"})}),Object(h.jsx)(f.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"extra_info",children:i})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{className:"makeCenter",children:Object(h.jsx)("img",{src:j,className:"makeCenter photo"})}),Object(h.jsx)(g.a,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)("label",{style:{fontSize:"10px",position:"absolute",right:0,marginRight:"10%"},className:"makeCenter",id:"extra_info",children:b.substring(0,10)})})}),Object(h.jsxs)(g.a,{className:"makeCenter",children:[Object(h.jsx)(f.a,{sm:2,className:"my-1",children:Object(h.jsxs)("a",{href:"/feed",className:"btn btn-outline-white wow fadeInDown",children:[Object(h.jsx)("i",{className:"far fa-bookmark",children:" "})," "]})}),Object(h.jsx)(f.a,{sm:2,className:"my-1",children:Object(h.jsxs)("a",{href:"/postcomment",onClick:function(e){e.preventDefault(),m.push({pathname:"/postcomment",state:a})},className:"btn btn-outline-white wow fadeInDown",children:[Object(h.jsx)("i",{className:"far fa-comments",children:" "})," "]})})]})]})})]})]),t))})},G=(a(34),function(e){var t=e.handleSubmit,a=e.submitLabel,s=e.hasCancelButton,n=void 0!==s&&s,o=e.initialText,r=void 0===o?"":o,l=e.handleCancel,j=Object(c.useState)(r),d=Object(i.a)(j,2),b=d[0],m=d[1],O=0===b.length;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(b),m("")},children:[Object(h.jsx)("textarea",{className:"comment-form-textarea",value:b,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("button",{className:"comment-form-button",disabled:O,children:a}),n&&Object(h.jsx)("button",{type:"button",className:"comment-form-button comment-form-cancel-button",onClick:l,children:"Cancel"})]})});var J=function(e){var t=e.comment_id,a=e.text,s=e.user_id,n=(e.post_id,e.ts),o=e.activeComment,r=e.setActiveComment,l=e.deleteComment,j=e.updateComment,b=parseInt(sessionStorage.getItem("token"),10),O=o&&o.id===t&&"editing"===o.type,x=b===s,u=b===s,p=new Date(n).toLocaleDateString(),g=Object(c.useState)(""),f=Object(i.a)(g,2),v=f[0],N=f[1];return Object(c.useEffect)((function(){!function(e){d.a.post("".concat(m.config.SERVER_URI,"/api/get_username"),{id:e}).then((function(e){e&&(console.log(e),N(e.data.name))})).catch((function(e){console.log("error in"),console.log(e.response)}))}(s)}),[]),Object(h.jsx)("div",{className:"comment",children:Object(h.jsxs)("div",{className:"comment-right-part",children:[Object(h.jsxs)("div",{className:"comment-content",children:[Object(h.jsx)("div",{className:"comment-author",children:v}),Object(h.jsx)("div",{children:p})]}),!O&&Object(h.jsx)("div",{className:"comment-text",children:a}),O&&Object(h.jsx)(G,{submitLabel:"Update",hasCancelButton:!0,initialText:a,handleSubmit:function(e){return j(e,t)},handleCancel:function(){r(null)}}),Object(h.jsxs)("div",{className:"comment-actions",children:[u&&Object(h.jsx)("div",{className:"comment-action",onClick:function(){return r({id:t,type:"editing"})},children:"Edit"}),x&&Object(h.jsx)("div",{className:"comment-action",onClick:function(){return l(t)},children:"Delete"})]})]})})},$=function(e){var t,a=e.post_id,s=Object(c.useState)({comments:{}}),n=Object(i.a)(s,2),l=n[0],j=n[1],b=Object(c.useState)(null),O=Object(i.a)(b,2),x=O[0],u=O[1],p=function(e){j(Object(r.a)(Object(r.a)({},l),{},Object(o.a)({},"comments",e.sort((function(e,t){return new Date(e.ts).getTime()})))))};Object(c.useEffect)((function(){!function(e){d.a.post("".concat(m.config.SERVER_URI,"/api/get_comments"),{id:e}).then((function(e){e&&(console.log(e),p(e.data.comments))})).catch((function(e){console.log("error in"),console.log(e.response)}))}(a)}),[]);var g=function(e,t){console.log("Update Comment"),d.a.post("".concat(m.config.SERVER_URI,"/api/edit_comment"),{comment:e,id:t,post_id:a}).then((function(e){e&&(console.log(e),p(e.data.comments),u(null))})).catch((function(e){console.log("error in"),console.log(e.response)}))},f=function(e){console.log("Delete Comment"),window.confirm("Are you sure you want to remove comment?")&&d.a.post("".concat(m.config.SERVER_URI,"/api/delete_comment"),{id:e,post_id:a}).then((function(e){e&&(console.log(e),p(e.data.comments),u(null))})).catch((function(e){console.log("error in"),console.log(e.response)}))};return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,(t={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(t,"style",{width:"30rem",height:"800px"}),Object(o.a)(t,"children",[Object(h.jsx)(E.a.Img,{variant:"top",src:""}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsx)(E.a.Title,{className:"makeCenter postTitle",style:{fontSize:28,textTransform:"uppercase"},children:"Comments"}),Object(h.jsx)("br",{}),Object(h.jsx)(E.a.Text,{children:Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"comments",children:[Object(h.jsx)("div",{className:"comment-form-title",children:"Leave a comment"}),Object(h.jsx)(G,{submitLabel:"Write",handleSubmit:function(e){console.log("add Comment"),d.a.post("".concat(m.config.SERVER_URI,"/api/add_comment"),{user_id:sessionStorage.getItem("token"),post_id:a,ts:(new Date).toLocaleString()+"",comment:e}).then((function(e){e&&(console.log(e),p(e.data.comments),u(null))})).catch((function(e){console.log("error in"),console.log(e.response)}))}}),Object(h.jsx)("div",{className:"comments-container",children:l.comments.length>0&&l.comments.map((function(e,t){return Object(h.jsx)(J,{comment_id:e.comment_id,text:e.comment,user_id:e.user_id,post_id:e.post_id,ts:e.ts,activeComment:x,setActiveComment:u,deleteComment:f,updateComment:g})}))})]})})})]})]),t))})};var F=function(e){var t=Object(l.h)(),a=Object(c.useState)({posts:{}}),s=Object(i.a)(a,2),n=s[0],j=s[1],b=function(e){j(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"posts",e))),n.posts=e};return Object(c.useEffect)((function(){var e=t.state;console.log(e),function(e){d.a.post("".concat(m.config.SERVER_URI,"/api/post"),{id:e}).then((function(e){e||console.log("yes error"),console.log(e),b(e.data.posts)})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||console.log("Yes error.")}))}(e)}),[]),Object(h.jsxs)("div",{style:{backgroundImage:"url(".concat(P,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},children:[Object(h.jsx)(I,{}),Object(h.jsx)(g.a,{children:Object(h.jsx)("div",{className:"makeCenter",style:{padding:"20px",backgroundImage:"url(".concat(P,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},children:Object(h.jsx)("div",{children:Object(h.jsx)(g.a,{children:n.posts.length>0&&n.posts.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)(f.a,{xs:12,className:"makeCenter",children:[Object(h.jsx)(Y,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts,post_id:e.post_id}),Object(h.jsx)($,{post_id:e.post_id})]})})}))})})})})]})},H=a(15);var W=function(){var e=function(){var e=Object(c.useState)(!!sessionStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],s=t[1];return{setToken:function(e){sessionStorage.setItem("token",e),s(!0)},token:a}}(),t=e.token,a=e.setToken;return t?Object(h.jsx)(H.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/feed",component:D}),Object(h.jsx)(l.b,{path:"/createPost",component:q}),Object(h.jsx)(l.b,{path:"/dm",component:L}),Object(h.jsx)(l.b,{path:"/profile",component:V}),Object(h.jsx)(l.b,{path:"/search",component:M}),Object(h.jsx)(l.b,{path:"/postcomment",component:F})]})}):Object(h.jsx)(H.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/",exact:!0,component:p}),Object(h.jsx)(l.b,{path:"/login",component:function(){return Object(h.jsx)(O,{setToken:a})}}),Object(h.jsx)(l.b,{path:"/register",component:x}),Object(h.jsx)(l.a,{to:"/login"})]})})};a(103);n.a.render(Object(h.jsx)(W,{}),document.getElementById("root"))},11:function(e,t){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},26:function(e,t,a){},34:function(e,t,a){},86:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.72641092.chunk.js.map