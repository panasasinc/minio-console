"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5702],{25702:function(e,t,n){n.r(t);var i=n(29439),s=n(1413),o=n(72791),r=n(78687),c=n(57689),a=n(75952),l=n(11135),u=n(25787),d=n(26181),f=n.n(d),h=n(61889),m=n(23814),x=n(92983),b=n(81207),S=n(60680),j=n(38442),v=n(56087),p=n(75578),Z=n(87995),T=n(9859),E=n(81551),_=n(27454),k=n(80184),F=(0,p.Z)(o.lazy((function(){return n.e(455).then(n.bind(n,80455))}))),I=(0,p.Z)(o.lazy((function(){return Promise.all([n.e(1918),n.e(3801),n.e(9414),n.e(2921)]).then(n.bind(n,2921))})));t.default=(0,u.Z)((function(e){return(0,l.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},m.qg),m.OR),{},{twHeight:{minHeight:400}}))}))((function(e){var t=e.classes,n=(0,E.TL)(),s=(0,c.UO)(),l=(0,r.v9)(T.HQ),u=(0,o.useState)(!1),d=(0,i.Z)(u,2),m=d[0],p=d[1],N=(0,o.useState)(!0),C=(0,i.Z)(N,2),O=C[0],g=C[1],A=(0,o.useState)([]),P=(0,i.Z)(A,2),y=P[0],K=P[1],G=(0,o.useState)(!1),U=(0,i.Z)(G,2),w=U[0],z=U[1],B=(0,o.useState)(null),H=(0,i.Z)(B,2),M=H[0],R=H[1],D=s.bucketName||"",L=(0,j.F)(D,[v.Ft.S3_GET_BUCKET_NOTIFICATIONS,v.Ft.S3_GET_ACTIONS]);(0,o.useEffect)((function(){l&&g(!0)}),[l,g]),(0,o.useEffect)((function(){O&&(L?b.Z.invoke("GET","/api/v1/buckets/".concat(D,"/events")).then((function(e){var t=f()(e,"events",[]);g(!1),K(t||[])})).catch((function(e){g(!1),n((0,Z.Ih)(e))})):g(!1))}),[O,n,D,L]);var Q=[{type:"delete",onClick:function(e){z(!0),R(e)}}];return(0,k.jsxs)(o.Fragment,{children:[w&&(0,k.jsx)(F,{deleteOpen:w,selectedBucket:D,bucketEvent:M,closeDeleteModalAndRefresh:function(e){z(!1),e&&g(!0)}}),m&&(0,k.jsx)(I,{open:m,selectedBucket:D,closeModalAndRefresh:function(){p(!1),g(!0)}}),(0,k.jsxs)(h.ZP,{container:!0,children:[(0,k.jsxs)(h.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,k.jsx)(S.Z,{children:"Events"}),(0,k.jsx)(j.s,{scopes:[v.Ft.S3_PUT_BUCKET_NOTIFICATIONS,v.Ft.S3_PUT_ACTIONS,v.Ft.ADMIN_SERVER_INFO],resource:D,matchAll:!0,errorProps:{disabled:!0},children:(0,k.jsx)(_.Z,{tooltip:"Subscribe to Event",children:(0,k.jsx)(a.zxk,{id:"Subscribe-bucket-event",onClick:function(){p(!0)},label:"Subscribe to Event",icon:(0,k.jsx)(a.dtP,{}),variant:"callAction"})})})]}),(0,k.jsx)(h.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.s,{scopes:[v.Ft.S3_GET_BUCKET_NOTIFICATIONS,v.Ft.S3_GET_ACTIONS],resource:D,errorProps:{disabled:!0},children:(0,k.jsx)(x.Z,{itemActions:Q,columns:[{label:"SQS",elementKey:"arn"},{label:"Events",elementKey:"events",renderFunction:function(e){return(0,k.jsx)(o.Fragment,{children:e.join(", ")})}},{label:"Prefix",elementKey:"prefix"},{label:"Suffix",elementKey:"suffix"}],isLoading:O,records:y,entityName:"Events",idField:"id",customPaperHeight:t.twHeight})})}),!O&&(0,k.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,k.jsx)("br",{}),(0,k.jsx)(a.KfX,{title:"Event Notifications",iconComponent:(0,k.jsx)(a.cCG,{}),help:(0,k.jsxs)(o.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"You can learn more at our"," ",(0,k.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/monitoring/bucket-notifications.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})]})]})]})}))},60680:function(e,t,n){n(72791);var i=n(11135),s=n(25787),o=n(80184);t.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,o.jsx)("h1",{className:t.root,children:n})}))}}]);
//# sourceMappingURL=5702.fa73d842.chunk.js.map