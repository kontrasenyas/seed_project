(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{861:function(e,t,a){"use strict";var n=a(66);a.d(t,"c",function(){return n.b});var l=a(8);a.d(t,"a",function(){return l.a});var r=a(59);a.d(t,"e",function(){return r.b});var o=a(145);a.d(t,"b",function(){return o.a}),a.d(t,"d",function(){return o.b})},920:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(4),r=a(6),o=a(5),s=a(7),c=a(0),i=a.n(c),m=a(861),u=a(13),d=a(665),p=a.n(d),h={},g=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.renderChart(this.props.data)}},{key:"componentDidUpdate",value:function(e){JSON.stringify(e.data)!==JSON.stringify(this.props.data)&&this.renderChart(this.props.data)}},{key:"renderChart",value:function(e){e&&new p.a(this.refs.dygraph,e,this.props.options?Object(u.a)({},h,this.props.options):h)}},{key:"render",value:function(){return i.a.createElement("div",{style:this.props.style,ref:"dygraph"})}}]),t}(i.a.Component);a.d(t,"default",function(){return E});var E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.e)("assets/api/graphs/dygraphs.json").then(function(t){e.setState(t)})}},{key:"render",value:function(){return i.a.createElement("div",{id:"content"},i.a.createElement("div",{className:"row"},i.a.createElement(m.a,{items:["Dygraphs"],icon:"fa fa-fw fa-bar-chart-o",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),i.a.createElement(m.c,null)),i.a.createElement(m.d,null,i.a.createElement("div",{className:"row"},i.a.createElement("article",{className:"col-sm-12 col-md-12 col-lg-12"},i.a.createElement("div",{className:"alert alert-info"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},i.a.createElement("h3",{className:"no-margin"},"Dygraphs is a fast, flexible open source JavaScript charting library."),i.a.createElement("h5",null,"Features"),i.a.createElement("ul",null,i.a.createElement("li",null,"Handles ",i.a.createElement("strong",null,"huge data sets"),": dygraphs plots millions of points without getting bogged down."),i.a.createElement("li",null,i.a.createElement("strong",null,"Interactive out of the box"),": zoom, pan and mouseover are on by default."),i.a.createElement("li",null,"Strong support for ",i.a.createElement("strong",null,"error bars")," / confidence intervals."),i.a.createElement("li",null,i.a.createElement("strong",null,"Highly customizable"),": using options and custom callbacks, you can make dygraphs do almost anything."),i.a.createElement("li",null,"dygraphs is ",i.a.createElement("strong",null,"highly compatible"),": it works in all major browsers (including IE8). You can even"," ",i.a.createElement("strong",null,"pinch to zoom")," on mobile/tablet devices!"),i.a.createElement("li",null,"There's an ",i.a.createElement("strong",null,"active community")," developing and supporting dygraphs."))),i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},i.a.createElement("h4",null,"JSX Example"),i.a.createElement("pre",{className:"prettyprint margin-top-10"},"<DygraphsChart data={this.state.data} options={{\n    customBars: true,\n    title: 'Daily Temperatures in New York vs. San Francisco',\n    ylabel: 'Temperature (F)',\n    legend: 'always',\n    showRangeSelector: true\n}} style={{width: '100%', height: '300px'}}/>")))),i.a.createElement(m.b,{id:"wid-id-0",editbutton:!1},i.a.createElement("header",null,i.a.createElement("span",{className:"widget-icon"}," ",i.a.createElement("i",{className:"fa fa-bar-chart-o"})," "),i.a.createElement("h2",null,"No roll period")),i.a.createElement("div",null,i.a.createElement("div",{className:"widget-body"},i.a.createElement(g,{data:this.state.data,options:{customBars:!0,title:"Daily Temperatures in New York vs. San Francisco",ylabel:"Temperature (F)",legend:"always",showRangeSelector:!0},style:{width:"100%",height:"300px"}})))),i.a.createElement(m.b,{id:"wid-id-1",editbutton:!1},i.a.createElement("header",null,i.a.createElement("span",{className:"widget-icon"}," ",i.a.createElement("i",{className:"fa fa-bar-chart-o"})," "),i.a.createElement("h2",null,"No roll (timestamp)")),i.a.createElement("div",null,i.a.createElement("div",{className:"widget-body"},i.a.createElement("p",{className:"alert alert-success"},"Roll period of 14 timesteps, custom range selector height and plot color."),i.a.createElement(g,{data:this.state.data,options:{rollPeriod:14,showRoller:!0,customBars:!0,ylabel:"Temperature (F)",legend:"always",showRangeSelector:!0,rangeSelectorHeight:30,rangeSelectorPlotStrokeColor:"yellow",rangeSelectorPlotFillColor:"lightyellow"},style:{width:"100%",height:"300px"}}))))))))}}]),t}(i.a.Component)}}]);
//# sourceMappingURL=41.fc2a4626.chunk.js.map