"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[920],{7241:function(t,e,o){o.d(e,{DT4:function(){return d}});var n=o(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(r),l=function(){return l=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},l.apply(this,arguments)},i=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]])}return o};function a(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),a(t.child))}))}function s(t){return function(e){return n.createElement(u,l({attr:l({},t.attr)},e),a(t.child))}}function u(t){var e=function(e){var o,r=t.attr,c=t.size,a=t.title,s=i(t,["attr","size","title"]),u=c||e.size||"1em";return e.className&&(o=e.className),t.className&&(o=(o?o+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,s,{className:o,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),t.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(t){return e(t)})):e(r)}function d(t){return s({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M8.5 6.073l6.854 6.854-0.707 0.707-6.147-6.147-6.146 6.146-0.707-0.707 6.853-6.853zM8.5 2.644l6.146 6.146 0.707-0.707-6.853-6.854-6.854 6.854 0.708 0.707 6.146-6.146z"}}]})(t)}},7821:function(t,e,o){var n,r=o(2791),c=(n=r)&&"object"===typeof n&&"default"in n?n.default:n,l=function(){return l=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},l.apply(this,arguments)};!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var e=t.top,o=void 0===e?20:e,n=t.className,i=void 0===n?"":n,a=t.color,s=void 0===a?"black":a,u=t.smooth,d=void 0!==u&&u,p=t.component,f=void 0===p?"":p,h=t.viewBox,m=void 0===h?"0 0 256 256":h,v=t.svgPath,y=void 0===v?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":v,g=t.width,b=void 0===g?"28":g,w=t.height,x=void 0===w?"28":w,O=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]])}return o}(t,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),E=r.useState(!1),j=E[0],C=E[1];return r.useEffect((function(){var t=function(){C(document.documentElement.scrollTop>=o)};return t(),document.addEventListener("scroll",t),function(){return document.removeEventListener("scroll",t)}}),[o]),c.createElement(c.Fragment,null,j&&c.createElement("button",l({className:"scroll-to-top "+i,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(d)},"aria-label":"Scroll to top"},O),f||c.createElement("svg",{width:b,height:x,fill:s,viewBox:m},c.createElement("path",{d:y}))))}}}]);
//# sourceMappingURL=920.ccae97c3.chunk.js.map