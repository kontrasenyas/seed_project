(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{462:function(e,t,n){var a,o,r;r=function(){var e,t,n=document,a=n.getElementsByTagName("head")[0],o=!1,r="push",i="readyState",l="onreadystatechange",c={},d={},s={},u={};function h(e,t){for(var n=0,a=e.length;n<a;++n)if(!t(e[n]))return o;return 1}function p(e,t){h(e,function(e){return t(e),1})}function f(t,n,a){t=t[r]?t:[t];var o=n&&n.call,i=o?n:a,l=o?t.join(""):n,g=t.length;function b(e){return e.call?e():c[e]}function w(){if(!--g)for(var e in c[l]=1,i&&i(),s)h(e.split("|"),b)&&!p(s[e],b)&&(s[e]=[])}return setTimeout(function(){p(t,function t(n,a){return null===n?w():(a||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),u[n]?(l&&(d[l]=1),2==u[n]?w():setTimeout(function(){t(n,!0)},0)):(u[n]=1,l&&(d[l]=1),void m(n,w)))})},0),f}function m(e,o){var r,c=n.createElement("script");c.onload=c.onerror=c[l]=function(){c[i]&&!/^c|loade/.test(c[i])||r||(c.onload=c[l]=null,r=1,u[e]=2,o())},c.async=1,c.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,a.insertBefore(c,a.lastChild)}return f.get=m,f.order=function(e,t,n){!function a(o){o=e.shift(),e.length?f(o,a):f(o,t,n)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,n){e=e[r]?e:[e];var a,o=[];return!p(e,function(e){c[e]||o[r](e)})&&h(e,function(e){return c[e]})?t():(a=e.join("|"),s[a]=s[a]||[],s[a][r](t),n&&n(o)),f},f.done=function(e){f([null],e)},f},"undefined"!=typeof e&&e.exports?e.exports=r():void 0===(o="function"===typeof(a=r)?a.call(t,n,t,e):a)||(e.exports=o)},861:function(e,t,n){"use strict";var a=n(66);n.d(t,"c",function(){return a.b});var o=n(8);n.d(t,"a",function(){return o.a});var r=n(59);n.d(t,"e",function(){return r.b});var i=n(145);n.d(t,"b",function(){return i.a}),n.d(t,"d",function(){return i.b})},932:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),r=n(6),i=n(5),l=n(7),c=n(0),d=n.n(c),s=n(861),u=n(13),h=n(77),p=n(462),f=n.n(p),m=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js",function(){var t=window.CKEDITOR;e.editor=t.replace(e.props.container,e.props.options)})}},{key:"componentWillUnmount",value:function(){this.editor&&this.editor.destroy()}},{key:"render",value:function(){var e=Object(u.a)({},this.props),t=e.container,n=(e.options,Object(h.a)(e,["container","options"]));return d.a.createElement("textarea",Object.assign({style:{opacity:0},id:t},n,{ref:"editor"}))}}]),t}(d.a.Component);n.d(t,"default",function(){return g});var g=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{id:"content"},d.a.createElement("div",{className:"row"},d.a.createElement(s.a,{items:["Misc","CK Editor"],icon:"home",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),d.a.createElement(s.c,null)),d.a.createElement(s.d,null,d.a.createElement("div",{className:"row"},d.a.createElement("article",{className:"col-sm-12 col-md-12 col-lg-12"},d.a.createElement(s.b,{id:"wid-id-0"},d.a.createElement("header",null,d.a.createElement("h2",null," Widget Title")),d.a.createElement("div",null,d.a.createElement("div",{className:"widget-body no-padding"},d.a.createElement(m,{container:"editable",options:{height:"380px",startupFocus:!0},defaultValue:b}))))))))}}]),t}(d.a.Component),b='<h1><img alt="Saturn V carrying Apollo 11" class="right" src="http://c.cksource.com/a/1/img/sample.jpg" /> Apollo 11</h1>\n\n<p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>\n\n<p>Armstrong spent about <s>three and a half</s> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.</p>\n\n<h2>Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a></h2>\n\n<p>Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:</p>\n\n<blockquote>\n    <p>One small step for [a] man, one giant leap for mankind.</p>\n</blockquote>\n\n<p>Apollo 11 effectively ended the <a href="http://en.wikipedia.org/wiki/Space_Race">Space Race</a> and fulfilled a national goal proposed in 1961 by the late U.S. President <a href="http://en.wikipedia.org/wiki/John_F._Kennedy">John F. Kennedy</a> in a speech before the United States Congress:</p>\n\n<blockquote>\n    <p>[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.</p>\n</blockquote>\n\n<h2>Technical details <a id="tech-details" name="tech-details"></a></h2>\n\n<table align="right" border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse">\n    <caption><strong>Mission crew</strong></caption>\n    <thead>\n    <tr>\n        <th scope="col">Position</th>\n        <th scope="col">Astronaut</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>Commander</td>\n        <td>Neil A. Armstrong</td>\n    </tr>\n    <tr>\n        <td>Command Module Pilot</td>\n        <td>Michael Collins</td>\n    </tr>\n    <tr>\n        <td>Lunar Module Pilot</td>\n        <td>Edwin &quot;Buzz&quot; E. Aldrin, Jr.</td>\n    </tr>\n    </tbody>\n</table>\n\n<p>Launched by a <strong>Saturn V</strong> rocket from <a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center">Kennedy Space Center</a> in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of <a href="http://en.wikipedia.org/wiki/NASA">NASA</a>&#39;s Apollo program. The Apollo spacecraft had three parts:</p>\n\n<ol>\n    <li><strong>Command Module</strong> with a cabin for the three astronauts which was the only part which landed back on Earth</li>\n    <li><strong>Service Module</strong> which supported the Command Module with propulsion, electrical power, oxygen and water</li>\n    <li><strong>Lunar Module</strong> for landing on the Moon.</li>\n</ol>\n\n<p>After being sent to the Moon by the Saturn V&#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the <a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis">Sea of Tranquility</a>. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the <a href="http://en.wikipedia.org/wiki/Pacific_Ocean">Pacific Ocean</a> on July 24.</p>\n\n<hr />\n<p><small>Source: <a href="http://en.wikipedia.org/wiki/Apollo_11">Wikipedia.org</a></small></p>'}}]);
//# sourceMappingURL=47.d5ae50b0.chunk.js.map