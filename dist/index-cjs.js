"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),e=function(r){return"[object Function]"===Object.prototype.toString.call(r)};function n(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}function t(r){return function(r){if(Array.isArray(r))return a(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||o(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,e){if(r){if("string"==typeof r)return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,e):void 0}}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var i=["value","key"],u=function(r){var n=r.render,t=r.children;return e(t)?t():e(n)?n():t},l=function(r){var n=r.is,t=r.render,o=r.children;return(e(n)?n():n)?e(o)?o():e(t)?t():o:null},c=r.memo((function(r){var n=r.isReady,t=r.loading,o=r.render,a=r.children;return n?e(a)?a():e(o)?o():a:e(t)?t():t}),(function(r,n){var t=r.isReady,o=n.isReady;return(e(t)?t():t)===(e(o)?o():o)})),f=r.memo((function(r){var n=r.render,t=r.children;return e(t)?t():e(n)?n():t}),(function(r,n){var t=r.shouldUpdate,o=n.shouldUpdate;return(e(t)?t():t)===(e(o)?o():o)})),s=function(r){var n=r.render,t=r.children;return e(t)?t():e(n)?n():t};exports.Case=s,exports.Each=function(r){var e,a=r.data,u=r.render,l=[],c=function(r,e){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=o(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var t=0,a=function(){};return{s:a,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){l=!0,i=r},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}(a);try{for(c.s();!(e=c.n()).done;){var f=e.value,s=f.value,d=f.key,p=n(f,i),y=u.apply(void 0,[s,d].concat(t(p)));l.push(y)}}catch(r){c.e(r)}finally{c.f()}return l},exports.Else=u,exports.ElseIf=l,exports.For=function(r){var e,n=r.data,t=void 0===n?[]:n,o=r.render;return e=t,"[object Array]"!==Object.prototype.toString.call(e)?null:t.map((function(r,e){return o(r,e)}))},exports.If=function(n){var o=n.is,a=n.render,i=n.children,c=e(o)?o():o;if(e(i))return c?i():null;if(c&&e(a))return a();for(var f={isShow:c,render:a,elements:[]},s=function(){return e(f.render)?r.createElement.apply(void 0,[r.Fragment,{}].concat(t([].concat(f.render())))):f.elements.length?r.createElement.apply(void 0,[r.Fragment,{}].concat(t(f.elements))):null},d=r.Children.toArray(i),p=0,y=d.length;p<y;p++){var v=d[p],h=v.type;if(h===u||h===l){if(f.isShow)return s();var m=v.props,b=m.is,g=m.render;f={isShow:h===u||(e(b)?b():b),render:g,elements:[]}}else f.elements.push(v)}return f.isShow?s():null},exports.Prepare=c,exports.Show=function(r){var n=r.is,t=r.children,o=r.render;return(e(n)?n():n)?e(t)?t():e(o)?o():t:null},exports.Static=f,exports.Switch=function(n){for(var t=n.data,o=n.children,a=[],i=!1,u=r.Children.toArray(o),l=function(n,o){var l=u[n];if(!r.isValidElement(l))return"continue";var c=l.type,f=l.props;if(c!==s)return"continue";var d=f.is,p=f.default,y=f.break,v=f.render,h=f.children,m=function(){return e(h)?h():e(v)?v():h};if(d===t){var b=m();if(a.push(b),i=!0,y)return"break"}if(p&&!i){var g=m();return a.push(g),"break"}},c=0,f=u.length;c<f;c++){var d=l(c);if("continue"!==d&&"break"===d)break}return a.length?a:null};
