(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{498:function(e,a,t){"use strict";var n=t(29);a.__esModule=!0,a.default=void 0;var l=n(t(499));a.end=l.default;var i=n(t(254));a.properties=i.default;var s={end:l.default,properties:i.default};a.default=s},499:function(e,a,t){"use strict";var n=t(29);a.__esModule=!0,a.default=void 0;var l=n(t(254)),i=n(t(87));function s(e,a,t){var n,i={target:e,currentTarget:e};function s(e){e.target===e.currentTarget&&(clearTimeout(n),e.target.removeEventListener(l.default.end,s),a.call(this))}l.default.end?null==t&&(t=c(e)||0):t=0,l.default.end?(e.addEventListener(l.default.end,s,!1),n=setTimeout(function(){return s(i)},1.5*(t||100))):setTimeout(s.bind(null,i),0)}s._parseDuration=c;var r=s;function c(e){var a=(0,i.default)(e,l.default.duration),t=-1===a.indexOf("ms")?1e3:1;return parseFloat(a)*t}a.default=r,e.exports=a.default},857:function(e,a,t){"use strict";var n=t(12),l=t(16),i=t(15),s=t(17),r=t(10),c=t.n(r),m=t(0),o=t.n(m),d=t(2),u=t.n(d),p=t(32),f=t.n(p),E=t(11),h={componentClass:f.a},v=function(e){function a(){return e.apply(this,arguments)||this}return Object(i.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.componentClass,t=e.className,i=Object(l.a)(e,["componentClass","className"]),s=Object(E.f)(i),r=s[0],m=s[1],d=Object(E.d)(r);return o.a.createElement(a,Object(n.a)({},m,{className:c()(t,d)}))},a}(o.a.Component);v.propTypes=h,v.defaultProps={componentClass:"div"};var b=Object(E.a)("carousel-caption",v),N=t(24),g=t.n(N),x=t(498),k=t.n(x),C={direction:u.a.oneOf(["prev","next"]),onAnimateOutEnd:u.a.func,active:u.a.bool,animateIn:u.a.bool,animateOut:u.a.bool,index:u.a.number},O=function(e){function a(a,t){var n;return(n=e.call(this,a,t)||this).handleAnimateOutEnd=n.handleAnimateOutEnd.bind(Object(s.a)(Object(s.a)(n))),n.state={direction:null},n.isUnmounted=!1,n}Object(i.a)(a,e);var t=a.prototype;return t.componentWillReceiveProps=function(e){this.props.active!==e.active&&this.setState({direction:null})},t.componentDidUpdate=function(e){var a=this,t=this.props.active,n=e.active;!t&&n&&k.a.end(g.a.findDOMNode(this),this.handleAnimateOutEnd),t!==n&&setTimeout(function(){return a.startAnimation()},20)},t.componentWillUnmount=function(){this.isUnmounted=!0},t.handleAnimateOutEnd=function(){this.isUnmounted||this.props.onAnimateOutEnd&&this.props.onAnimateOutEnd(this.props.index)},t.startAnimation=function(){this.isUnmounted||this.setState({direction:"prev"===this.props.direction?"right":"left"})},t.render=function(){var e=this.props,a=e.direction,t=e.active,i=e.animateIn,s=e.animateOut,r=e.className,m=Object(l.a)(e,["direction","active","animateIn","animateOut","className"]);delete m.onAnimateOutEnd,delete m.index;var d={item:!0,active:t&&!i||s};return a&&t&&i&&(d[a]=!0),this.state.direction&&(i||s)&&(d[this.state.direction]=!0),o.a.createElement("div",Object(n.a)({},m,{className:c()(r,d)}))},a}(o.a.Component);O.propTypes=C,O.defaultProps={active:!1,animateIn:!1,animateOut:!1};var y=O,w={glyph:u.a.string.isRequired},I=function(e){function a(){return e.apply(this,arguments)||this}return Object(i.a)(a,e),a.prototype.render=function(){var e,a=this.props,t=a.glyph,i=a.className,s=Object(l.a)(a,["glyph","className"]),r=Object(E.f)(s),m=r[0],d=r[1],u=Object(n.a)({},Object(E.d)(m),((e={})[Object(E.e)(m,t)]=!0,e));return o.a.createElement("span",Object(n.a)({},d,{className:c()(i,u)}))},a}(o.a.Component);I.propTypes=w;var A=Object(E.a)("glyphicon",I),j=t(85),P=t(68),S={slide:u.a.bool,indicators:u.a.bool,interval:u.a.number,controls:u.a.bool,pauseOnHover:u.a.bool,wrap:u.a.bool,onSelect:u.a.func,onSlideEnd:u.a.func,activeIndex:u.a.number,defaultActiveIndex:u.a.number,direction:u.a.oneOf(["prev","next"]),prevIcon:u.a.node,prevLabel:u.a.string,nextIcon:u.a.node,nextLabel:u.a.string},T={slide:!0,interval:5e3,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,prevIcon:o.a.createElement(A,{glyph:"chevron-left"}),prevLabel:"Previous",nextIcon:o.a.createElement(A,{glyph:"chevron-right"}),nextLabel:"Next"},D=function(e){function a(a,t){var n;(n=e.call(this,a,t)||this).handleMouseOver=n.handleMouseOver.bind(Object(s.a)(Object(s.a)(n))),n.handleMouseOut=n.handleMouseOut.bind(Object(s.a)(Object(s.a)(n))),n.handlePrev=n.handlePrev.bind(Object(s.a)(Object(s.a)(n))),n.handleNext=n.handleNext.bind(Object(s.a)(Object(s.a)(n))),n.handleItemAnimateOutEnd=n.handleItemAnimateOutEnd.bind(Object(s.a)(Object(s.a)(n)));var l=a.defaultActiveIndex;return n.state={activeIndex:null!=l?l:0,previousActiveIndex:null,direction:null},n.isUnmounted=!1,n}Object(i.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){this.waitForNext()},t.componentWillReceiveProps=function(e){var a=this.getActiveIndex();null!=e.activeIndex&&e.activeIndex!==a&&(clearTimeout(this.timeout),this.setState({previousActiveIndex:a,direction:null!=e.direction?e.direction:this.getDirection(a,e.activeIndex)})),null==e.activeIndex&&this.state.activeIndex>=e.children.length&&this.setState({activeIndex:0,previousActiveIndex:null,direction:null})},t.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},t.getActiveIndex=function(){var e=this.props.activeIndex;return null!=e?e:this.state.activeIndex},t.getDirection=function(e,a){return e===a?null:e>a?"prev":"next"},t.handleItemAnimateOutEnd=function(){var e=this;this.setState({previousActiveIndex:null,direction:null},function(){e.waitForNext(),e.props.onSlideEnd&&e.props.onSlideEnd()})},t.handleMouseOut=function(){this.isPaused&&this.play()},t.handleMouseOver=function(){this.props.pauseOnHover&&this.pause()},t.handleNext=function(e){var a=this.getActiveIndex()+1;if(a>P.a.count(this.props.children)-1){if(!this.props.wrap)return;a=0}this.select(a,e,"next")},t.handlePrev=function(e){var a=this.getActiveIndex()-1;if(a<0){if(!this.props.wrap)return;a=P.a.count(this.props.children)-1}this.select(a,e,"prev")},t.pause=function(){this.isPaused=!0,clearTimeout(this.timeout)},t.play=function(){this.isPaused=!1,this.waitForNext()},t.select=function(e,a,t){if(clearTimeout(this.timeout),!this.isUnmounted){var n=this.props.slide?this.getActiveIndex():null;t=t||this.getDirection(n,e);var l=this.props.onSelect;if(l&&(l.length>1?(a?(a.persist(),a.direction=t):a={direction:t},l(e,a)):l(e)),null==this.props.activeIndex&&e!==n){if(null!=this.state.previousActiveIndex)return;this.setState({activeIndex:e,previousActiveIndex:n,direction:t})}}},t.waitForNext=function(){var e=this.props,a=e.slide,t=e.interval,n=e.activeIndex;!this.isPaused&&a&&t&&null==n&&(this.timeout=setTimeout(this.handleNext,t))},t.renderControls=function(e){var a=e.wrap,t=e.children,n=e.activeIndex,l=e.prevIcon,i=e.nextIcon,s=e.bsProps,r=e.prevLabel,m=e.nextLabel,d=Object(E.e)(s,"control"),u=P.a.count(t);return[(a||0!==n)&&o.a.createElement(j.a,{key:"prev",className:c()(d,"left"),onClick:this.handlePrev},l,r&&o.a.createElement("span",{className:"sr-only"},r)),(a||n!==u-1)&&o.a.createElement(j.a,{key:"next",className:c()(d,"right"),onClick:this.handleNext},i,m&&o.a.createElement("span",{className:"sr-only"},m))]},t.renderIndicators=function(e,a,t){var n=this,l=[];return P.a.forEach(e,function(e,t){l.push(o.a.createElement("li",{key:t,className:t===a?"active":null,onClick:function(e){return n.select(t,e)}})," ")}),o.a.createElement("ol",{className:Object(E.e)(t,"indicators")},l)},t.render=function(){var e=this,a=this.props,t=a.slide,i=a.indicators,s=a.controls,r=a.wrap,d=a.prevIcon,u=a.prevLabel,p=a.nextIcon,f=a.nextLabel,h=a.className,v=a.children,b=Object(l.a)(a,["slide","indicators","controls","wrap","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),N=this.state,g=N.previousActiveIndex,x=N.direction,k=Object(E.g)(b,["interval","pauseOnHover","onSelect","onSlideEnd","activeIndex","defaultActiveIndex","direction"]),C=k[0],O=k[1],y=this.getActiveIndex(),w=Object(n.a)({},Object(E.d)(C),{slide:t});return o.a.createElement("div",Object(n.a)({},O,{className:c()(h,w),onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),i&&this.renderIndicators(v,y,C),o.a.createElement("div",{className:Object(E.e)(C,"inner")},P.a.map(v,function(a,n){var l=n===y,i=t&&n===g;return Object(m.cloneElement)(a,{active:l,index:n,animateOut:i,animateIn:l&&null!=g&&t,direction:x,onAnimateOutEnd:i?e.handleItemAnimateOutEnd:null})})),s&&this.renderControls({wrap:r,children:v,activeIndex:y,prevIcon:d,prevLabel:u,nextIcon:p,nextLabel:f,bsProps:C}))},a}(o.a.Component);D.propTypes=S,D.defaultProps=T,D.Caption=b,D.Item=y;a.a=Object(E.a)("carousel",D)},861:function(e,a,t){"use strict";var n=t(66);t.d(a,"c",function(){return n.b});var l=t(8);t.d(a,"a",function(){return l.a});var i=t(59);t.d(a,"e",function(){return i.b});var s=t(145);t.d(a,"b",function(){return s.a}),t.d(a,"d",function(){return s.b})},879:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u});var n=t(3),l=t(4),i=t(6),s=t(5),r=t(7),c=t(0),m=t.n(c),o=t(857),d=t(861),u=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).onClick=function(e){e.preventDefault()},t.onSubmit=function(e){e.preventDefault()},t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{id:"content"},m.a.createElement("div",{className:"row"},m.a.createElement(d.a,{items:["E-Commerce","Product Detail"],icon:"fa fa-fw fa-shopping-cart",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),m.a.createElement(d.c,null)),m.a.createElement(d.d,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},m.a.createElement("div",{className:"product-content product-wrap clearfix product-deatil"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12 "},m.a.createElement("div",{className:"product-image"},m.a.createElement(o.a,null,m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-1.png"})),m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-2.png"})),m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-3.png"}))))),m.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},m.a.createElement("h2",{className:"name"},"Product Name Title Here",m.a.createElement("small",null,"Product by",m.a.createElement("a",{href:"#/",onClick:this.onClick},"Adeline")),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-muted"}),m.a.createElement("span",{className:"fa fa-2x"},m.a.createElement("h5",null,"(109) Votes")),m.a.createElement("a",{href:"#/",onClick:this.onClick},"109 customer reviews")),m.a.createElement("hr",null),m.a.createElement("h3",{className:"price-container"},"$129.54",m.a.createElement("small",null,"*includes tax")),m.a.createElement("div",{className:"certified"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick},"Delivery time",m.a.createElement("span",null,"7 Working Days"))),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick},"Certified",m.a.createElement("span",null,"Quality Assured"))))),m.a.createElement("hr",null),m.a.createElement("div",{className:"description description-tabs"},m.a.createElement("ul",{id:"myTab",className:"nav nav-pills"},m.a.createElement("li",{className:"active"},m.a.createElement("a",{href:"#more-information","data-toggle":"tab",className:"no-margin"},"Product Description")),m.a.createElement("li",null,m.a.createElement("a",{href:"#specifications","data-toggle":"tab"},"Specifications")),m.a.createElement("li",null,m.a.createElement("a",{href:"#reviews","data-toggle":"tab"},"Reviews"))),m.a.createElement("div",{id:"myTabContent",className:"tab-content"},m.a.createElement("div",{className:"tab-pane fade active in",id:"more-information"},m.a.createElement("br",null),m.a.createElement("strong",null,"Description Title"),m.a.createElement("p",null,"Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.")),m.a.createElement("div",{className:"tab-pane fade",id:"specifications"},m.a.createElement("br",null),m.a.createElement("dl",null,m.a.createElement("dt",null,"Gravina"),m.a.createElement("dd",null,"Etiam porta sem malesuada magna mollis euismod."),m.a.createElement("dd",null,"Donec id elit non mi porta gravida at eget metus."),m.a.createElement("dd",null,"Eget lacinia odio sem nec elit."),m.a.createElement("br",null),m.a.createElement("dt",null,"Test lists"),m.a.createElement("dd",null,"A description list is perfect for defining terms."),m.a.createElement("br",null),m.a.createElement("dt",null,"Altra porta"),m.a.createElement("dd",null,"Vestibulum id ligula porta felis euismod semper"))),m.a.createElement("div",{className:"tab-pane fade",id:"reviews"},m.a.createElement("br",null),m.a.createElement("form",{method:"post",className:"well padding-bottom-10",onSubmit:this.onSubmit},m.a.createElement("textarea",{rows:2,className:"form-control",placeholder:"Write a review",defaultValue:""}),m.a.createElement("div",{className:"margin-top-10"},m.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary pull-right"},"Submit Review"),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Location"},m.a.createElement("i",{className:"fa fa-location-arrow"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Voice"},m.a.createElement("i",{className:"fa fa-microphone"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Photo"},m.a.createElement("i",{className:"fa fa-camera"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add File"},m.a.createElement("i",{className:"fa fa-file"})))),m.a.createElement("div",{className:"chat-body no-padding profile-message"},m.a.createElement("ul",null,m.a.createElement("li",{className:"message"},m.a.createElement("img",{alt:"",src:"assets/img/avatars/1.png",className:"online"}),m.a.createElement("span",{className:"message-text"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"username"},"Alisha Molly",m.a.createElement("span",{className:"badge"},"Purchase Verified"),m.a.createElement("span",{className:"pull-right"},m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-muted"}))),"Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved"),m.a.createElement("ul",{className:"list-inline font-xs"},m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-info"},m.a.createElement("i",{className:"fa fa-thumbs-up"})," This was helpful (22)")),m.a.createElement("li",{className:"pull-right"},m.a.createElement("small",{className:"text-muted pull-right ultra-light"},"Posted 1 year ago")))),m.a.createElement("li",{className:"message"},m.a.createElement("img",{alt:"",src:"assets/img/avatars/2.png",className:"online"}),m.a.createElement("span",{className:"message-text"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"username"},"Aragon Zarko",m.a.createElement("span",{className:"badge"},"Purchase Verified"),m.a.createElement("span",{className:"pull-right"},m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}))),"Excellent product, love it!"),m.a.createElement("ul",{className:"list-inline font-xs"},m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-info"},m.a.createElement("i",{className:"fa fa-thumbs-up"})," This was helpful (22)")),m.a.createElement("li",{className:"pull-right"},m.a.createElement("small",{className:"text-muted pull-right ultra-light"},"Posted 1 year ago"))))))))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-success btn-lg"},"Add to cart ($129.54)")),m.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},m.a.createElement("div",{className:"btn-group pull-right"},m.a.createElement("button",{className:"btn btn-white btn-default"},m.a.createElement("i",{className:"fa fa-star"})," Add to wishlist"),m.a.createElement("button",{className:"btn btn-white btn-default"},m.a.createElement("i",{className:"fa fa-envelope"})," Contact Seller")))))))),m.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},m.a.createElement("div",{className:"product-content product-wrap clearfix product-deatil"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12 "},m.a.createElement("div",{className:"product-image"},m.a.createElement(o.a,null,m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-1.png"})),m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-2.png"})),m.a.createElement(o.a.Item,null,m.a.createElement("img",{width:900,height:500,alt:"",src:"/assets/img/demo/e-comm/detail-3.png"}))))),m.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},m.a.createElement("h2",{className:"name"},"Product Name Title Here",m.a.createElement("small",null,"Product by",m.a.createElement("a",{href:"#/",onClick:this.onClick},"Adeline")),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-primary"}),m.a.createElement("i",{className:"fa fa-star fa-2x text-muted"}),m.a.createElement("span",{className:"fa fa-2x"},m.a.createElement("h5",null,"(109) Votes")),m.a.createElement("a",{href:"#/",onClick:this.onClick},"109 customer reviews")),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("h3",{className:"price-container"},"$129.54",m.a.createElement("small",null,"*includes tax"))),m.a.createElement("div",{className:"col-sm-6 text-right"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-primary"},"Add to cart ($129.54)"))),m.a.createElement("hr",null),m.a.createElement("div",{className:"description description-tabs"},m.a.createElement("ul",{id:"myTab2",className:"nav nav-tabs"},m.a.createElement("li",{className:"active"},m.a.createElement("a",{href:"#more-information2","data-toggle":"tab",className:"no-margin"},"Product Description")),m.a.createElement("li",null,m.a.createElement("a",{href:"#specifications2","data-toggle":"tab"},"Specifications")),m.a.createElement("li",null,m.a.createElement("a",{href:"#reviews2","data-toggle":"tab"},"Reviews"))),m.a.createElement("div",{id:"myTabContent2",className:"tab-content"},m.a.createElement("div",{className:"tab-pane fade active in",id:"more-information2"},m.a.createElement("br",null),m.a.createElement("strong",null,"Description Title"),m.a.createElement("p",null,"Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.")),m.a.createElement("div",{className:"tab-pane fade",id:"specifications2"},m.a.createElement("br",null),m.a.createElement("dl",null,m.a.createElement("dt",null,"Gravina"),m.a.createElement("dd",null,"Etiam porta sem malesuada magna mollis euismod."),m.a.createElement("dd",null,"Donec id elit non mi porta gravida at eget metus."),m.a.createElement("dd",null,"Eget lacinia odio sem nec elit."),m.a.createElement("br",null),m.a.createElement("dt",null,"Test lists"),m.a.createElement("dd",null,"A description list is perfect for defining terms."),m.a.createElement("br",null),m.a.createElement("dt",null,"Altra porta"),m.a.createElement("dd",null,"Vestibulum id ligula porta felis euismod semper"))),m.a.createElement("div",{className:"tab-pane fade",id:"reviews2"},m.a.createElement("br",null),m.a.createElement("form",{method:"post",className:"well padding-bottom-10",onSubmit:this.onSubmit},m.a.createElement("textarea",{rows:2,className:"form-control",placeholder:"Write a review",defaultValue:""}),m.a.createElement("div",{className:"margin-top-10"},m.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary pull-right"},"Submit Review"),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Location"},m.a.createElement("i",{className:"fa fa-location-arrow"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Voice"},m.a.createElement("i",{className:"fa fa-microphone"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add Photo"},m.a.createElement("i",{className:"fa fa-camera"})),m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"btn btn-link profile-link-btn",rel:"tooltip","data-placement":"bottom","data-original-title":"Add File"},m.a.createElement("i",{className:"fa fa-file"})))),m.a.createElement("div",{className:"chat-body no-padding profile-message"},m.a.createElement("ul",null,m.a.createElement("li",{className:"message"},m.a.createElement("img",{alt:"",src:"assets/img/avatars/1.png",className:"online"}),m.a.createElement("span",{className:"message-text"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"username"},"John Doe",m.a.createElement("small",{className:"text-muted pull-right ultra-light"},"2 Minutes ago")),"Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved"),m.a.createElement("ul",{className:"list-inline font-xs"},m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-info"},m.a.createElement("i",{className:"fa fa-reply"})," Reply")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-danger"},m.a.createElement("i",{className:"fa fa-thumbs-up"})," Like")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-muted"},"Show All Comments (14)")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-primary"},"Hide")))),m.a.createElement("li",{className:"message message-reply"},m.a.createElement("img",{alt:"",src:"assets/img/avatars/3.png",className:"online"}),m.a.createElement("span",{className:"message-text"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"username"},"Serman Syla"),"eget lacinia odio sem nec eliteget lacinia odio sem nec elit.",m.a.createElement("i",{className:"fa fa-smile-o txt-color-orange"})),m.a.createElement("ul",{className:"list-inline font-xs"},m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-muted"},"1 minute ago")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-danger"},m.a.createElement("i",{className:"fa fa-thumbs-up"})," Like")))),m.a.createElement("li",{className:"message message-reply"},m.a.createElement("img",{alt:"",src:"assets/img/avatars/4.png",className:"online"}),m.a.createElement("span",{className:"message-text"},m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"username"},"Sadi Orlaf"),"Eet lacinia odio sem nec elit.",m.a.createElement("i",{className:"fa fa-smile-o txt-color-orange"})),m.a.createElement("ul",{className:"list-inline font-xs"},m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-muted"},"a moment ago")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/",onClick:this.onClick,className:"text-danger"},m.a.createElement("i",{className:"fa fa-thumbs-up"})," Like"))))))))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},m.a.createElement("div",{className:"btn-group"},m.a.createElement("button",{className:"btn btn-white btn-default"},m.a.createElement("i",{className:"fa fa-star"})," Add to wishlist"),m.a.createElement("button",{className:"btn btn-white btn-default"},m.a.createElement("i",{className:"fa fa-envelope"})," Contact Seller")))))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=25.944a101a.chunk.js.map