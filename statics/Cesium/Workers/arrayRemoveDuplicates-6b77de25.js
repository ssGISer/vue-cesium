define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-c73e522c"],function(e,h,t,r){"use strict";var c=r.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,t,r){if(h.defined(e)){r=h.defaultValue(r,!1);var n,i,a,f=e.length;if(f<2)return e;for(n=1;n<f&&!t(i=e[n-1],a=e[n],c);++n);if(n===f)return r&&t(e[0],e[e.length-1],c)?e.slice(1):e;for(var u=e.slice(0,n);n<f;++n)t(i,a=e[n],c)||(u.push(a),i=a);return r&&1<u.length&&t(u[0],u[u.length-1],c)&&u.shift(),u}}});
