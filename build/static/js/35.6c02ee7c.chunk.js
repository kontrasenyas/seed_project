(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{861:function(e,a,s){"use strict";var t=s(66);s.d(a,"c",function(){return t.b});var r=s(8);s.d(a,"a",function(){return r.a});var l=s(59);s.d(a,"e",function(){return l.b});var o=s(145);s.d(a,"b",function(){return o.a}),s.d(a,"d",function(){return o.b})},883:function(e,a,s){"use strict";s.r(a),s.d(a,"default",function(){return v});var t=s(3),r=s(4),l=s(6),o=s(5),n=s(7),c=s(0),p=s.n(c),i=s(616),u=s.n(i),m=(s(618),s(884)),g=s(885),b=s(620),f=s(178),x=s(141),d=s(861),v=function(e){function a(e){var s;return Object(t.a)(this,a),(s=Object(l.a)(this,Object(o.a)(a).call(this,e))).selectImage=function(e){s.setState({selectedImage:e})},s.setOption=function(e,a){var t=s.state.options;t[e]=a,s.setState({options:t})},s.onCrop=function(e){s.setState({crop:s.refs.cropper.getData()})},s.state={aspectRatios:[{name:"16:9",val:16/9},{name:"4:3",val:4/3},{name:"1:1",val:1},{name:"2:3",val:2/3}],images:["/assets/img/superbox/superbox-full-7.jpg","/assets/img/superbox/superbox-full-9.jpg","/assets/img/superbox/superbox-full-10.jpg","/assets/img/superbox/superbox-full-11.jpg","/assets/img/superbox/superbox-full-13.jpg","/assets/img/superbox/superbox-full-16.jpg","/assets/img/superbox/superbox-full-18.jpg","/assets/img/superbox/superbox-full-19.jpg","/assets/img/superbox/superbox-full-23.jpg","/assets/img/superbox/superbox-full-1.jpg","/assets/img/superbox/superbox-full-2.jpg","/assets/img/superbox/superbox-full-3.jpg","/assets/img/superbox/superbox-full-4.jpg","/assets/img/superbox/superbox-full-12.jpg","/assets/img/superbox/superbox-full-14.jpg","/assets/img/superbox/superbox-full-15.jpg","/assets/img/superbox/superbox-full-17.jpg","/assets/img/superbox/superbox-full-20.jpg","/assets/img/superbox/superbox-full-6.jpg","/assets/img/superbox/superbox-full-8.jpg","/assets/img/superbox/superbox-full-22.jpg","/assets/img/superbox/superbox-full-24.jpg"],selectedImage:"/assets/img/superbox/superbox-full-7.jpg",crop:{x:null,y:null,width:null,height:null,rotate:null,scaleX:1,scaleY:1},options:{aspectRatio:16/9,viewMode:0,responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0}},s}return Object(n.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.images.map(function(a,s){var t=e.state.selectedImage===a;return p.a.createElement("div",{className:"col-xs-12 col-md-6",key:s,onClick:function(){return e.selectImage(a)}},p.a.createElement("div",{className:"thumbnail",style:{backgroundColor:t?"transparent":"#fff",borderColor:t?"transparent":"#ddd"}},p.a.createElement("img",{src:a,alt:a})))});return p.a.createElement("div",{id:"content"},p.a.createElement("div",{className:"row"},p.a.createElement(d.a,{items:["Forms","Image Cropping"],icon:"fa fa-image",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),p.a.createElement(d.c,null)),p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-sm-3"},p.a.createElement("div",{className:"row"},a)),p.a.createElement("div",{className:"col-sm-9"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-xs-12"},p.a.createElement(u.a,{ref:"cropper",src:this.state.selectedImage,style:{height:400,width:"100%"},preview:".cropper-preview",viewMode:this.state.options.viewMode,aspectRatio:this.state.options.aspectRatio,guides:!1,crop:this.onCrop}))),p.a.createElement("br",null),p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-xs-6"},p.a.createElement(m.a,null,p.a.createElement(g.a,{type:"radio",name:"aspectRatios",defaultValue:"16:9"},this.state.aspectRatios.map(function(a){return p.a.createElement(b.a,{key:a.name,value:a.name,onClick:function(){return e.setOption("aspectRatio",a.val)}},a.name)}))),p.a.createElement("br",null),p.a.createElement(f.a,null,p.a.createElement(x.a,{onClick:function(){return e.refs.cropper.reset()}},"Reset"),p.a.createElement(x.a,{onClick:function(){return e.refs.cropper.clear()}},"Clear"))),p.a.createElement("div",{className:"col-xs-6"},p.a.createElement("div",{className:"cropper-preview-container"},p.a.createElement("div",{className:"cropper-preview cropper-preview-lg"}),p.a.createElement("div",{className:"cropper-preview cropper-preview-md"}),p.a.createElement("div",{className:"cropper-preview cropper-preview-sm"}),p.a.createElement("div",{className:"cropper-preview cropper-preview-xs"})),p.a.createElement("textarea",{className:"col-sm-12",style:{marginTop:"1.75rem"},rows:9,readOnly:!0,value:JSON.stringify(this.state.crop,null,2),onChange:function(e){}}))),p.a.createElement("br",null))))}}]),a}(p.a.Component)}}]);
//# sourceMappingURL=35.6c02ee7c.chunk.js.map