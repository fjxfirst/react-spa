!function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,s=[];d<i.length;d++)o=i[d],a[o]&&s.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a={1:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{3:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=e+"."+{3:"65f9f4cfa4a9c5b39e44",4:"31d6cfe0d16ae931b73c",5:"31d6cfe0d16ae931b73c",6:"31d6cfe0d16ae931b73c"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var c=(f=u[l]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){var f;if((c=(f=d[l]).getAttribute("data-href"))===r||c===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+"."+{3:"8e36b4a1f498d3840dc9",4:"ea56a1d3b7fa0cb4d7fc",5:"e660768082631afc14b0",6:"9816903977fb56c1a213"}[e]+".js"}(e),u=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;u.push([24,0]),n()}({12:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n(4),c=[],d=[];function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function s(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(r){var o=f(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function p(e,t){return i.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function h(e,t){var f,s;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),m=null;function y(){return m||(m=e(h.loader)),m.promise}return c.push(y),"function"==typeof h.webpack&&d.push(function(){if(e=h.webpack,"object"===r(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]}))return y();var e}),s=f=function(t){function n(r){o(this,n);var u=a(this,t.call(this,r));return u.retry=function(){u.setState({error:null,loading:!0,timedOut:!1}),m=e(h.loader),u._loadModule()},y(),u.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},u}return u(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach(function(t){e.context.loadable.report(t)}),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},h.timeout));var t=function(){e._mounted&&(e.setState({error:m.error,loaded:m.loaded,loading:m.loading}),e._clearTimeouts())};m.promise.then(function(){t()}).catch(function(e){t()})}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?i.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},n}(i.Component),f.contextTypes={loadable:l.shape({report:l.func.isRequired})},s}function m(e){return h(f,e)}m.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(s,e)};var y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return i.Children.only(this.props.children)},t}(i.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return b(e)})}y.propTypes={report:l.func.isRequired},y.childContextTypes={loadable:l.shape({report:l.func.isRequired}).isRequired},m.Capture=y,m.preloadAll=function(){return new Promise(function(e,t){b(c).then(e,t)})},m.preloadReady=function(){return new Promise(function(e,t){b(d).then(e,e)})},e.exports=m},14:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"f",function(){return l});var r="counter/INCREMENT",o="counter/DECREMENT",a="counter/RESET";function u(){return{type:r}}function i(){return{type:o}}function l(){return{type:a}}},24:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(17),u=n.n(a),i=n(16),l=n(10),c=n(14),d={count:0};var f=Object(l.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case c.b:return{count:e.count+1};case c.a:return{count:e.count-1};case c.c:return{count:0};default:return e}}),s=n(7),p=n(8),h=n(12),m=n.n(h),y=function(){return o.a.createElement("div",null,"Loading...")},b=m()({loader:function(){return n.e(3).then(n.bind(null,42))},loading:y,timeout:1e4}),g=m()({loader:function(){return n.e(6).then(n.bind(null,43))},loading:y,timeout:1e4}),v=m()({loader:function(){return n.e(4).then(n.bind(null,44))},loading:y,timeout:1e4}),E=m()({loader:function(){return n.e(5).then(n.bind(null,45))},loading:y,timeout:1e4}),w=function(){return o.a.createElement(p.g,null,o.a.createElement(p.d,{exact:!0,path:"/",component:b}),o.a.createElement(p.d,{path:"/page",component:g}),o.a.createElement(p.d,{path:"/counter",component:v}),o.a.createElement(p.d,{component:E}))};u.a.render(o.a.createElement(i.Provider,{store:f},o.a.createElement(s.BrowserRouter,null,o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/"},"首页")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/page"},"Page")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/counter"},"Counter"))))},null),w())),document.getElementById("app"))}});