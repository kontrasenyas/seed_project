(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{471:function(e,t,a){"use strict";var n=a(3),l=a(4),i=a(6),r=a(5),o=a(7),c=a(0),s=a.n(c),d=a(1),m=a.n(d),h=(a(525),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.renderChart(this.props.data)}},{key:"componentDidUpdate",value:function(e){JSON.stringify(e.data)!==JSON.stringify(this.props.data)&&this.renderChart(this.props.data)}},{key:"renderChart",value:function(e){e&&this.container&&this.container.offsetParent&&m.a.plot(this.container,e,this.props.options)}},{key:"render",value:function(){var e=this,t=this.props.className||"chart";return s.a.createElement("div",{ref:function(t){return e.container=t},className:t})}}]),t}(s.a.Component));a.d(t,"a",function(){return h})},861:function(e,t,a){"use strict";var n=a(66);a.d(t,"c",function(){return n.b});var l=a(8);a.d(t,"a",function(){return l.a});var i=a(59);a.d(t,"e",function(){return i.b});var r=a(145);a.d(t,"b",function(){return r.a}),a.d(t,"d",function(){return r.b})},886:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(3),l=a(4),i=a(6),r=a(5),o=a(7),c=a(0),s=a.n(c),d=a(471),m=a(861),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={},a.componentDidMount=function(){Object(m.e)("assets/api/graphs/flot.json").then(function(e){a.setState(e)}),a.interval=setInterval(a.tick,1e3)},a.tick=function(){a.setState({updatingData:[C.getRandomData()]})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("div",{id:"content"},s.a.createElement("div",{className:"row"},s.a.createElement(m.a,{items:["Flot Charts"],icon:"fa fa-fw fa-bar-chart-o",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),s.a.createElement(m.c,null)),s.a.createElement(m.d,null,s.a.createElement("div",{className:"row"},s.a.createElement("article",{className:"col-sm-12 col-md-12 col-lg-12"},s.a.createElement(m.b,{id:"wid-id-0",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Bar Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement("flot-bar-chart",{data:"barChartData"}),s.a.createElement(d.a,{data:this.state.barChartData,options:f})))),s.a.createElement(m.b,{id:"wid-id-1",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Sin Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.sinChartData,options:E}))))),s.a.createElement("article",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(m.b,{id:"wid-id-2",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Auto Updating Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.updatingData,options:y}))))),s.a.createElement("article",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(m.b,{id:"wid-id-3",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Horizontal Bar Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.horizontalBarChartData,options:g}))))),s.a.createElement("article",{className:"col-xs-12 col-sm-8 col-md-7 col-lg-7"},s.a.createElement(m.b,{id:"wid-id-5",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Plot Percentiles")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.fillChartData,options:v}))))),s.a.createElement("article",{className:"col-xs-12 col-sm-4 col-md-5 col-lg-5"},s.a.createElement(m.b,{id:"wid-id-6",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Pie Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.pieChartData,options:w}))))),s.a.createElement("article",{className:"col-xs-12"},s.a.createElement(m.b,{id:"wid-id-7",editbutton:!1},s.a.createElement("header",null,s.a.createElement("span",{className:"widget-icon"},s.a.createElement("i",{className:"fa fa-bar-chart-o"})),s.a.createElement("h2",null,"Site Stats Chart")),s.a.createElement("div",null,s.a.createElement("div",{className:"widget-body no-padding"},s.a.createElement(d.a,{data:this.state.siteStatsData,options:N}))))))))}}]),t}(s.a.Component),u="#efefef",p="#6595b4",b="#7e9d3a",f={colors:[p,b,"#666","#BBB"],grid:{show:!0,hoverable:!0,clickable:!0,tickColor:u,borderWidth:0,borderColor:u},legend:!0,tooltip:!0,tooltipOpts:{content:"<b>%x</b> = <span>%y</span>",defaultTheme:!1}},E={series:{lines:{show:!0},points:{show:!0}},grid:{hoverable:!0,clickable:!0,tickColor:u,borderWidth:0,borderColor:u},tooltip:!0,tooltipOpts:{defaultTheme:!1},colors:[p,b],yaxis:{min:-1.1,max:1.1},xaxis:{min:0,max:15}},g={colors:[p,b,"#666","#BBB"],grid:{show:!0,hoverable:!0,clickable:!0,tickColor:u,borderWidth:0,borderColor:u},legend:!0,tooltip:!0,tooltipOpts:{content:"<b>%x</b> = <span>%y</span>",defaultTheme:!1}},v={xaxis:{tickDecimals:0},yaxis:{tickFormatter:function(e){return e+" cm"}}},w={series:{pie:{show:!0,innerRadius:.5,radius:1,label:{show:!1,radius:2/3,formatter:function(e,t){return'<div style="font-size:11px;text-align:center;padding:4px;color:white;">'+e+"<br/>"+Math.round(t.percent)+"%</div>"},threshold:.1}}},legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#000",container:null,position:"ne",margin:[5,10],backgroundColor:"#efefef",backgroundOpacity:1},grid:{hoverable:!0,clickable:!0}},N={series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.1},{opacity:.15}]}},points:{show:!0},shadowSize:0},yaxes:[{min:20,tickLength:5}],grid:{hoverable:!0,clickable:!0,tickColor:u,borderWidth:0,borderColor:u},tooltip:!0,tooltipOpts:{content:"%s for <b>%x:00 hrs</b> was %y",dateFormat:"%y-%0m-%0d",defaultTheme:!1},colors:["#E24913",p],xaxis:{mode:"time",tickLength:10,ticks:15,tickDecimals:2},yaxis:{ticks:15,tickDecimals:0}},y={yaxis:{min:0,max:100},xaxis:{min:0,max:100},colors:[b],series:{lines:{lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.4},{opacity:0}]},steps:!1}}},C={data:[],total:200,getRandomData:function(){for(this.data.length>0&&(this.data=this.data.slice(1));this.data.length<this.total;){var e=(this.data.length>0?this.data[this.data.length-1]:50)+10*Math.random()-5;e<0&&(e=0),e>100&&(e=100),this.data.push(e)}for(var t=[],a=0;a<this.data.length;++a)t.push([a,this.data[a]]);return t}}}}]);
//# sourceMappingURL=36.5c809f65.chunk.js.map