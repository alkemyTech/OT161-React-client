(self.webpackChunkong_client=self.webpackChunkong_client||[]).push([[531],{2974:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return N}});var s=r(5861),a=r(7757),t=r.n(a),i=r(5705),o=(r(2791),r(7467)),c=(r(7366),r(5144),r(9018)),l=r(4403),d=r(1209),u=r.p+"static/media/terminosycondiciones.0b170f04e14dd7e45397.pdf",m=r(8805),p=r(9271),h=r(2040),_=r(184),f=function(e){var n=e.stateLat,r=e.stateLng,s=function(e){var n=e.text;return(0,_.jsx)("div",{children:n})},a={center:{lat:n,lng:r},zoom:17};return(0,_.jsx)("div",{children:(0,_.jsx)("div",{style:{height:"50vh",width:"50vw"},children:(0,_.jsx)(h.ZP,{bootstrapURLKeys:{key:{NODE_ENV:"production",PUBLIC_URL:"/OT161-React-client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ACTIVITY_END_POINT:"activities",REACT_APP_BASE_URL:"https://ongapi.alkemy.org/api",REACT_APP_CONTACT_END_POINT:"contacts;",REACT_APP_LOGIN_ENDPOINT:"login",REACT_APP_NEWS_END_POINT:"news",REACT_APP_ORGANIZATION_ENDPOINT:"organization",REACT_APP_SLIDES_ENDPOINT:"slides",REACT_APP_TESTIMONIAL_END_POINT:"testimonials",REACT_APP_USERS_ENDPOINT:"users"}.GOOGLE_MAPS_API},defaultCenter:a.center,defaultZoom:a.zoom,children:(0,_.jsx)(s,{lat:n,lng:r,text:(0,_.jsxs)("div",{className:"pointer",children:[(0,_.jsx)("p",{children:"Aqui esta Usted"}),(0,_.jsx)("div",{className:"circle"})]})})})})})},N=function(){var e=(0,p.k6)(),n=m.Ry({name:m.Z_().required("El nombre es obligatorio"),email:m.Z_().required("El email es obligatorio").email("Escriba un correo v\xe1lido"),password:m.Z_().required("La contrase\xf1a es obligatoria").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,15}$/,"La contrase\xf1a debe terner m\xednimo 6 caracteres, contener una may\xfascula, un n\xfamero y un car\xe1cter especial"),confirmPassword:m.Z_().required("Escriba nuevamente la contrase\xf1a").oneOf([m.iH("password")],"Ambas contrase\xf1as deben coincidir"),termsErrorMsg:m.O7().test("accepted-terms","Los terminos y condiciones no estan aceptados",(function(e){return e})),lat:m.Ry().required("Generar la ubicaci\xf3n es obligatorio").test("latitude","Es necesario generar la ubicaci\xf3n",(function(e){return e.x||e.y}))});function r(){return(r=(0,s.Z)(t().mark((function n(r,s){var a,i,o,d,u;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.name,i=r.email,o=r.password,(0,s.resetForm)(),n.prev=3,n.next=6,(0,c.r4)({name:a,email:i,password:o});case 6:if(422!==(null===(u=n.sent)||void 0===u||null===(d=u.request)||void 0===d?void 0:d.status)){n.next=9;break}return n.abrupt("return",(0,l.Z)({type:"error",title:"El correo: ".concat(i),message:"Ya tiene una cuenta con el mismo email"}));case 9:return(0,l.Z)({type:"success",title:"Usuario creado correctamente",message:"Pronto seras redirigido"}),setTimeout((function(){e.push("/auth/login")}),3e3),n.abrupt("return");case 14:n.prev=14,n.t0=n.catch(3),console.error(n.t0),(0,l.Z)({type:"error",title:"Ups, hubo un error",message:"No has podido registrarte, intentelo mas tarde"});case 18:case"end":return n.stop()}}),n,null,[[3,14]])})))).apply(this,arguments)}return(0,_.jsx)("section",{className:"form__section",children:(0,_.jsx)(i.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:"",termsErrorMsg:!1,lat:{x:0,y:0}},onSubmit:function(e,n){return r.apply(this,arguments)},validationSchema:n,children:function(e){var n=e.errors,r=e.handleChange,s=e.handleBlur,a=e.values,t=e.setFieldValue,c=e.setFieldTouched,l=e.touched;return(0,_.jsxs)(i.l0,{className:"form-container",children:[(0,_.jsx)("header",{children:"Registro"}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)(i.gN,{className:"input-field",type:"text",name:"name",placeholder:"Nombre",value:a.name,onChange:r,onBlur:s}),(0,_.jsx)(i.Bc,{name:"name",component:function(){return(0,_.jsx)("div",{className:"error-message-form",children:n.name})}})]}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)(i.gN,{className:"input-field",type:"text",name:"email",placeholder:"Email",value:a.email,onChange:r,onBlur:s}),(0,_.jsx)(i.Bc,{name:"email",component:function(){return(0,_.jsx)("div",{className:"error-message-form",children:n.email})}})]}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)(i.gN,{className:"input-field",type:"password",name:"password",placeholder:"Contrase\xf1a",value:a.password,onChange:r,onBlur:s}),(0,_.jsx)(i.Bc,{name:"password",component:function(){return(0,_.jsx)("div",{className:"error-message-form",children:n.password})}})]}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)(i.gN,{className:"input-field",type:"password",name:"confirmPassword",placeholder:"Confirme su contrase\xf1a",value:a.confirmPassword,onChange:r,onBlur:s}),(0,_.jsx)(i.Bc,{name:"confirmPassword",component:function(){return(0,_.jsx)("div",{className:"error-message-form",children:n.confirmPassword})}})]}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)("button",{type:"button",className:"button__location",name:"lat",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,r=n.latitude,s=n.longitude;t("lat",{x:r,y:s})}))},children:"Get Location"}),(0,_.jsx)("div",{className:"register-map",children:0!==a.lat.x&&(0,_.jsx)(f,{stateLat:a.lat.x,stateLng:a.lat.y})}),(0,_.jsx)(i.Bc,{name:"lat",component:function(){return(0,_.jsx)("div",{className:"error-message-form",children:n.lat})}})]}),(0,_.jsxs)("div",{className:"input__container",children:[(0,_.jsx)(o.Z,{trigger:(0,_.jsx)("p",{className:"terms-condicion-button",children:"Leer terminos y condiciones"}),modal:!0,position:"right center",children:function(e){return(0,_.jsxs)("div",{className:"modal",children:[(0,_.jsx)("div",{className:"content",children:(0,_.jsx)(d.BB,{file:u,children:(0,_.jsx)(d.T3,{pageNumber:1})})}),(0,_.jsxs)("div",{className:"actions",children:[(0,_.jsx)("button",{onClick:function(){c("termsErrorMsg",!0),t("termsErrorMsg",!0),e()},children:"Aceptar"}),(0,_.jsx)("button",{className:"button",onClick:function(){t("termsErrorMsg",!1),e()},children:"Cancelar"})]})]})}}),(0,_.jsx)("div",{className:"error-message-form",children:n.termsErrorMsg&&l.termsErrorMsg&&n.termsErrorMsg})]}),(0,_.jsx)("button",{className:"submit-btn",type:"submit",children:"Registrarse"})]})}})})}},3414:function(){},172:function(){},2001:function(){},3779:function(){},6558:function(){},2258:function(){}}]);
//# sourceMappingURL=531.c5284dda.chunk.js.map