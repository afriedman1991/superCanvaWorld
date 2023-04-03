/*! For license information please see world1-1.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,i){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(n)?n:String(n)),r)}var n}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position={x:100,y:100},this.speed=10,this.velocity={x:0,y:0},this.gravity=1,this.isGrounded=!1,this.width=30,this.height=30,this.sides={top:this.position.y,bottom:this.position.y+this.height,right:this.position.x+this.width,left:this.position.x},this.c=e}var i,o;return i=t,(o=[{key:"draw",value:function(){this.c.fillStyle="black",this.c.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.sides.top=this.position.y,this.sides.bottom=this.position.y+this.height,this.sides.right=this.position.x+this.width,this.sides.left=this.position.x,this.sides.bottom+this.velocity.y<canvas.height?(this.velocity.y+=this.gravity,this.isGrounded=!1):this.isGrounded=!0}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();const o=i;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,n=function(t,e){if("object"!==r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(n)?n:String(n)),o)}var n}var s=function(){function t(e,i){var o=i.position,r=i.velocity,n=i.distance,s=void 0===n?{limit:50,traveled:0}:n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position={x:o.x,y:o.y},this.distance=s,this.velocity={x:r.x,y:r.y},this.width=30,this.height=30,this.gravity=1,this.sides={top:this.position.y,bottom:this.position.y+this.height,right:this.position.x+this.width,left:this.position.x},this.c=e}var e,i;return e=t,(i=[{key:"draw",value:function(){this.c.fillStyle="red",this.c.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.sides.top=this.position.y,this.sides.bottom=this.position.y+this.height,this.sides.right=this.position.x+this.width,this.sides.left=this.position.x,this.position.y+this.height+this.velocity.y<=canvas.height&&(this.velocity.y+=this.gravity),this.distance.traveled+=Math.abs(this.velocity.x),this.distance.traveled>this.distance.limit&&(this.velocity.x*=-1,this.distance.traveled=0)}}])&&n(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();const a=s;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==c(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===c(r)?r:String(r)),o)}var r}var u=function(){function t(e,i){var o=i.x,r=i.y,n=i.image;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position={x:o,y:r},this.image=n,this.width=n.width,this.height=n.height,this.sides={top:this.position.y,right:this.position.x+this.width,left:this.position.x},this.c=e}var e,i;return e=t,(i=[{key:"draw",value:function(){this.c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.sides.top=this.position.y,this.sides.right=this.position.x+this.width,this.sides.left=this.position.x}}])&&h(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();const l=u;function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==f(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===f(r)?r:String(r)),o)}var r}var p=function(){function t(e,i){var o=i.x,r=i.y,n=i.image;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position={x:o,y:r},this.c=e,this.image=n,this.width=n.width,this.height=n.height}var e,i;return e=t,(i=[{key:"draw",value:function(){this.c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}])&&y(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();const d=p;function v(t,e){window.addEventListener("keydown",(function(i){switch(i.key){case"w":0===t.velocity.y&&t.isGrounded&&(t.velocity.y=-20),t.isGrounded=!1;break;case"a":e.left.pressed=!0;break;case"d":e.right.pressed=!0}}))}function g(t){window.addEventListener("keyup",(function(e){switch(e.key){case"a":t.left.pressed=!1;break;case"d":t.right.pressed=!1}}))}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function w(){w=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,o=Object.defineProperty||function(t,e,i){t[e]=i.value},r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,i){return t[e]=i}}function h(t,e,i,r){var n=e&&e.prototype instanceof f?e:f,s=Object.create(n.prototype),a=new P(r||[]);return o(s,"_invoke",{value:E(t,i,a)}),s}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l={};function f(){}function y(){}function p(){}var d={};c(d,n,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==e&&i.call(g,n)&&(d=g);var b=p.prototype=f.prototype=Object.create(d);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,n,s,a){var c=u(t[o],t,n);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==m(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,a)}))}a(c.arg)}var n;o(this,"_invoke",{value:function(t,i){function o(){return new e((function(e,o){r(t,i,e,o)}))}return n=n?n.then(o,o):o()}})}function E(t,e,i){var o="suspendedStart";return function(r,n){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw n;return{value:void 0,done:!0}}for(i.method=r,i.arg=n;;){var s=i.delegate;if(s){var a=j(s,i);if(a){if(a===l)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===o)throw o="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o="executing";var c=u(t,e,i);if("normal"===c.type){if(o=i.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(o="completed",i.method="throw",i.arg=c.arg)}}}function j(t,e){var i=e.method,o=t.iterator[i];if(void 0===o)return e.delegate=null,"throw"===i&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==i&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+i+"' method")),l;var r=u(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:G}}function G(){return{value:void 0,done:!0}}return y.prototype=p,o(b,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:y,configurable:!0}),y.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(S.prototype),c(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,i,o,r,n){void 0===n&&(n=Promise);var s=new S(h(e,i,o,r),n);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(b),c(b,a,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),i=[];for(var o in e)i.push(o);return i.reverse(),function t(){for(;i.length;){var o=i.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(i,o){return s.type="throw",s.arg=t,e.next=i,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r],s=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var a=i.call(n,"catchLoc"),c=i.call(n,"finallyLoc");if(a&&c){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(a){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,l):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),k(i),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var o=i.completion;if("throw"===o.type){var r=o.arg;k(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),l}},t}function b(t,e,i,o,r,n,s){try{var a=t[n](s),c=a.value}catch(t){return void i(t)}a.done?e(c):Promise.resolve(c).then(o,r)}var x=document.querySelector("canvas"),S=x.getContext("2d");x.width=1024,x.height=576;var E=function(t){var e=new Image;return e.src=t,e},j=new o(S),L=[],k=[],P=[],O=-1,G={up:{pressed:!1},left:{pressed:!1},right:{pressed:!1}},_=0,T=function(t){var e=t.object,i=t.platform;return e.velocity.y>0&&e.sides.bottom<=i.sides.top&&e.sides.bottom+e.velocity.y>=i.sides.top&&e.sides.right>=i.sides.left&&e.sides.left<=i.sides.right},N=function(){var t,e=(t=w().mark((function t(){var e,i,r,n;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(j=new o(S)).isGrounded=!1,L=[new a(S,{position:{x:800,y:100},velocity:{x:-.3,y:0},distance:{limit:200,traveled:0}}),new a(S,{position:{x:1400,y:100},velocity:{x:-.3,y:0},distance:{limit:50,traveled:0}})],O=-1,t.next=6,E("/assets/sprites/platformSmallTall.png");case 6:(e=t.sent).onload=function(){k.push(new l(S,{x:10*e.width-3,y:x.height-e.height-100,image:e}))},(i=E("/assets/sprites/platform.png")).onload=function(){k.push(new l(S,{x:O,y:x.height-i.height,image:i}),new l(S,{x:i.width-3,y:x.height-i.height,image:i}),new l(S,{x:2*i.width+100,y:x.height-i.height,image:i}),new l(S,{x:3*i.width+300,y:x.height-i.height,image:i}),new l(S,{x:4*i.width+298,y:x.height-i.height,image:i}),new l(S,{x:6*i.width+100,y:x.height-i.height,image:i}))},(r=E("/assets/sprites/background.png")).onload=function(){return P.push(new d(S,{x:-1,y:-1,image:r}))},(n=E("/assets/sprites/hills.png")).onload=function(){return P.push(new d(S,{x:-1,y:0,image:n}))},_=0,v(j,G),g(G);case 17:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(o,r){var n=t.apply(e,i);function s(t){b(n,o,r,s,a,"next",t)}function a(t){b(n,o,r,s,a,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();N(),function t(){window.requestAnimationFrame(t),S.clearRect(0,0,x.width,x.height),P.forEach((function(t){t.draw()})),k.forEach((function(t){t.draw(),t.update()})),L.forEach((function(t,e){var i,o,r;o=(i={object1:j,object2:t}).object1,r=i.object2,o.sides.bottom<=r.sides.top&&o.sides.bottom+o.velocity.y>=r.sides.top&&o.sides.right>=r.sides.left&&o.sides.left<=r.sides.right?(j.velocity.y-=25,L.splice(e,1)):j.sides.right>=t.sides.left&&j.left<=t.sides.right&&j.sides.bottom>=t.sides.top&&N(),t.update()})),j.update(),j.velocity.x=0,G.right.pressed&&j.position.x<400?j.velocity.x=j.speed:G.left.pressed&&j.position.x>100?j.velocity.x=-j.speed:(j.velocity.x=0,G.right.pressed?(_+=j.speed,k.forEach((function(t){t.position.x-=j.speed})),P.forEach((function(t){t.position.x-=.66*j.speed})),L.forEach((function(t){t.position.x-=j.speed}))):G.left.pressed&&(_-=j.speed,k.forEach((function(t){t.position.x+=j.speed})),P.forEach((function(t){t.position.x+=.66*j.speed})),L.forEach((function(t){t.position.x+=j.speed})))),k.forEach((function(t){T({object:j,platform:t})&&(j.velocity.y=0,j.isGrounded=!0),L.forEach((function(e){T({object:e,platform:t})&&(e.velocity.y=0)}))})),_>2e3&&console.log("you win!"),j.position.y>x.height&&N()}(),v(j,G),g(G)})();
//# sourceMappingURL=world1-1.bundle.js.map