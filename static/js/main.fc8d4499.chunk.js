(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(2),r=n.n(a),c=(n(14),n(3)),s=n(4),l=n(6),h=n(5),m=n(7),u=(n(15),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).toggleTimeString=function(){n.setState(function(t,e){return{showTimeString:!t.showTimeString}})},n.state={time:null,showTimeString:!1},n.intervalRef=null,n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){var t=this;this.setState({time:new Date}),this.intervalRef=setInterval(function(){t.setState({time:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){var t=this.state.time.getSeconds().toString(),e=this.state.time.getMinutes().toString(),n=this.state.time.getHours().toString();t.length<2&&(t="0"+t),e.length<2&&(e="0"+e),n.length<2&&(n="0"+n);var i="#".concat(n).concat(e).concat(t);return o.a.createElement("div",{className:"app-container",style:{background:i}},this.state.showTimeString&&o.a.createElement("h1",{className:"hex-clock",onClick:this.toggleTimeString},this.state.time.toLocaleTimeString()),!this.state.showTimeString&&o.a.createElement("h1",{className:"hex-clock",onClick:this.toggleTimeString},i))}}]),e}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc8d4499.chunk.js.map