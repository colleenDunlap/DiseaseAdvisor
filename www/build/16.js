webpackJsonp([16],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(565),__webpack_require__(566)):"function"==typeof define&&define.amd?define(["rgbcolor","stackblur-canvas"],e):t.canvg=e(t.RGBColor,t.StackBlur)}(this,function(y,v){"use strict";var t;return y=y&&y.hasOwnProperty("default")?y.default:y,v=v&&v.hasOwnProperty("default")?v.default:v,function(t){var l;t.exports;(l=window).DOMParser=window.DOMParser;var c=l.document;function d(t,e){var i;return(i=c.createElement("canvas")).width=t,i.height=e,i}var f,p=function(t,e,i){if(null!=t||null!=e||null!=i){var n=m(i||{});"string"==typeof t&&(t=c.getElementById(t)),null!=t.svg&&t.svg.stop(),t.childNodes&&1==t.childNodes.length&&"OBJECT"==t.childNodes[0].nodeName||(t.svg=n);var s=t.getContext("2d");void 0!==e.documentElement?n.loadXmlDoc(s,e):"<"==e.substr(0,1)?n.loadXml(s,e):n.load(s,e)}else for(var a=c.querySelectorAll("svg"),r=0;r<a.length;r++){var o=a[r],h=c.createElement("canvas");if(void 0!==o.clientWidth&&void 0!==o.clientHeight)h.width=o.clientWidth,h.height=o.clientHeight;else{var l=o.getBoundingClientRect();h.width=l.width,h.height=l.height}o.parentNode.insertBefore(h,o),o.parentNode.removeChild(o);var u=c.createElement("div");u.appendChild(o),p(h,u.innerHTML)}};"undefined"==typeof Element||(void 0!==Element.prototype.matches?f=function(t,e){return t.matches(e)}:void 0!==Element.prototype.webkitMatchesSelector?f=function(t,e){return t.webkitMatchesSelector(e)}:void 0!==Element.prototype.mozMatchesSelector?f=function(t,e){return t.mozMatchesSelector(e)}:void 0!==Element.prototype.msMatchesSelector?f=function(t,e){return t.msMatchesSelector(e)}:void 0!==Element.prototype.oMatchesSelector?f=function(t,e){return t.oMatchesSelector(e)}:("function"!=typeof jQuery&&"function"!=typeof Zepto||(f=function(t,e){return $(t).is(e)}),void 0===f&&"undefined"!=typeof Sizzle&&(f=Sizzle.matchesSelector)));var e=/(\[[^\]]+\])/g,i=/(#[^\s\+>~\.\[:]+)/g,a=/(\.[^\s\+>~\.\[:]+)/g,r=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,o=/(:[\w-]+\([^\)]*\))/gi,h=/(:[^\s\+>~\.\[:]+)/g,u=/([^\s\+>~\.\[:]+)/g;function P(n){var s=[0,0,0],t=function(t,e){var i=n.match(t);null!=i&&(s[e]+=i.length,n=n.replace(t," "))};return n=(n=n.replace(/:not\(([^\)]*)\)/g,"     $1 ")).replace(/{[\s\S]*/gm," "),t(e,1),t(i,0),t(a,1),t(r,2),t(o,1),t(h,1),n=(n=n.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," "),t(u,2),s.join("")}function m(s){var D={opts:s,FRAMERATE:30,MAX_VIRTUAL_PIXELS:3e4,rootEmSize:12,emSize:12,log:function(){}};1==D.opts.log&&"undefined"!=typeof console&&(D.log=function(t){console.log(t)}),D.init=function(t){var e=0;D.UniqueId=function(){return"canvg"+ ++e},D.Definitions={},D.Styles={},D.StylesSpecificity={},D.Animations=[],D.Images=[],D.ctx=t,D.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(t,e){this.viewPorts.push({width:t,height:e})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(t){return null!=t&&"number"==typeof t?t:"x"==t?this.width():"y"==t?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},D.init(),D.ImagesLoaded=function(){for(var t=0;t<D.Images.length;t++)if(!D.Images[t].loaded)return!1;return!0},D.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},D.compressSpaces=function(t){return t.replace(/(?!\u3000)\s+/gm," ")},D.ajax=function(t){var e;return(e=l.XMLHttpRequest?new l.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",t,!1),e.send(null),e.responseText):null},D.parseXml=function(e){if("undefined"!=typeof Windows&&void 0!==Windows.Data&&void 0!==Windows.Data.Xml){var t=new Windows.Data.Xml.Dom.XmlDocument,i=new Windows.Data.Xml.Dom.XmlLoadSettings;return i.prohibitDtd=!1,t.loadXml(e,i),t}if(!l.DOMParser)return e=e.replace(/<!DOCTYPE svg[^>]*>/,""),(t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e),t;try{var n=s.xmldom?new l.DOMParser(s.xmldom):new l.DOMParser;return n.parseFromString(e,"image/svg+xml")}catch(t){return(n=s.xmldom?new l.DOMParser(s.xmldom):new l.DOMParser).parseFromString(e,"text/xml")}},D.Property=function(t,e){this.name=t,this.value=e},D.Property.prototype.getValue=function(){return this.value},D.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},D.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var t=parseFloat(this.value);return(this.value+"").match(/%$/)&&(t/=100),t},D.Property.prototype.valueOrDefault=function(t){return this.hasValue()?this.value:t},D.Property.prototype.numValueOrDefault=function(t){return this.hasValue()?this.numValue():parseFloat(t)},D.Property.prototype.addOpacity=function(t){var e=this.value;if(null!=t.value&&""!=t.value&&"string"==typeof this.value){var i=new y(this.value);i.ok&&(e="rgba("+i.r+", "+i.g+", "+i.b+", "+t.numValue()+")")}return new D.Property(this.name,e)},D.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),D.Definitions[t]},D.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},D.Property.prototype.getFillStyleDefinition=function(t,e){var i=this.getDefinition();if(null!=i&&i.createGradient)return i.createGradient(D.ctx,t,e);if(null!=i&&i.createPattern){if(i.getHrefAttribute().hasValue()){var n=i.attribute("patternTransform");i=i.getHrefAttribute().getDefinition(),n.hasValue()&&(i.attribute("patternTransform",!0).value=n.value)}return i.createPattern(D.ctx,t,e)}return null},D.Property.prototype.getDPI=function(){return 96},D.Property.prototype.getREM=function(){return D.rootEmSize},D.Property.prototype.getEM=function(){return D.emSize},D.Property.prototype.getUnits=function(){return(this.value+"").replace(/[0-9\.\-]/g,"")},D.Property.prototype.isPixels=function(){if(!this.hasValue())return!1;var t=this.value+"";return!!t.match(/px$/)||!!t.match(/^[0-9]+$/)},D.Property.prototype.toPixels=function(t,e){if(!this.hasValue())return 0;var i=this.value+"";if(i.match(/rem$/))return this.numValue()*this.getREM(t);if(i.match(/em$/))return this.numValue()*this.getEM(t);if(i.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(i.match(/px$/))return this.numValue();if(i.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(i.match(/pc$/))return 15*this.numValue();if(i.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(i.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(i.match(/in$/))return this.numValue()*this.getDPI(t);if(i.match(/%$/))return this.numValue()*D.ViewPort.ComputeSize(t);var n=this.numValue();return e&&n<1?n*D.ViewPort.ComputeSize(t):n},D.Property.prototype.toMilliseconds=function(){return this.hasValue()?(this.value+"").match(/ms$/)?this.numValue():1e3*this.numValue():0},D.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/deg$/)?this.numValue()*(Math.PI/180):t.match(/grad$/)?this.numValue()*(Math.PI/200):t.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)};var t={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};return D.Property.prototype.toTextBaseline=function(){return this.hasValue()?t[this.value]:null},D.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,e,i,n,s,a){var r=null!=a?this.Parse(a):this.CreateFont("","","","","",D.ctx.font);return{fontFamily:s=s||r.fontFamily,fontSize:n||r.fontSize,fontStyle:t||r.fontStyle,fontWeight:i||r.fontWeight,fontVariant:e||r.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var r=this;this.Parse=function(t){for(var e={},i=D.trim(D.compressSpaces(t||"")).split(" "),n={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},s="",a=0;a<i.length;a++)n.fontStyle||-1==r.Styles.indexOf(i[a])?n.fontVariant||-1==r.Variants.indexOf(i[a])?n.fontWeight||-1==r.Weights.indexOf(i[a])?n.fontSize?"inherit"!=i[a]&&(s+=i[a]):("inherit"!=i[a]&&(e.fontSize=i[a].split("/")[0]),n.fontStyle=n.fontVariant=n.fontWeight=n.fontSize=!0):("inherit"!=i[a]&&(e.fontWeight=i[a]),n.fontStyle=n.fontVariant=n.fontWeight=!0):("inherit"!=i[a]&&(e.fontVariant=i[a]),n.fontStyle=n.fontVariant=!0):("inherit"!=i[a]&&(e.fontStyle=i[a]),n.fontStyle=!0);return""!=s&&(e.fontFamily=s),e}},D.ToNumberArray=function(t){for(var e=(t||"").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm)||[],i=0;i<e.length;i++)e[i]=parseFloat(e[i]);return e},D.Point=function(t,e){this.x=t,this.y=e},D.Point.prototype.angleTo=function(t){return Math.atan2(t.y-this.y,t.x-this.x)},D.Point.prototype.applyTransform=function(t){var e=this.x*t[0]+this.y*t[2]+t[4],i=this.x*t[1]+this.y*t[3]+t[5];this.x=e,this.y=i},D.CreatePoint=function(t){var e=D.ToNumberArray(t);return new D.Point(e[0],e[1])},D.CreatePath=function(t){for(var e=D.ToNumberArray(t),i=[],n=0;n<e.length;n+=2)i.push(new D.Point(e[n],e[n+1]));return i},D.BoundingBox=function(t,e,i,n){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(t,e){null!=t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),null!=e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},this.addX=function(t){this.addPoint(t,null)},this.addY=function(t){this.addPoint(null,t)},this.addBoundingBox=function(t){this.addPoint(t.x1,t.y1),this.addPoint(t.x2,t.y2)},this.addQuadraticCurve=function(t,e,i,n,s,a){var r=t+2/3*(i-t),o=e+2/3*(n-e),h=r+1/3*(s-t),l=o+1/3*(a-e);this.addBezierCurve(t,e,r,h,o,l,s,a)},this.addBezierCurve=function(t,e,i,n,s,a,r,o){var h=[t,e],l=[i,n],u=[s,a],c=[r,o];this.addPoint(h[0],h[1]),this.addPoint(c[0],c[1]);for(var f=0;f<=1;f++){var p=function(t){return Math.pow(1-t,3)*h[f]+3*Math.pow(1-t,2)*t*l[f]+3*(1-t)*Math.pow(t,2)*u[f]+Math.pow(t,3)*c[f]},d=6*h[f]-12*l[f]+6*u[f],m=-3*h[f]+9*l[f]-9*u[f]+3*c[f],y=3*l[f]-3*h[f];if(0!=m){var v=Math.pow(d,2)-4*y*m;if(!(v<0)){var g=(-d+Math.sqrt(v))/(2*m);0<g&&g<1&&(0==f&&this.addX(p(g)),1==f&&this.addY(p(g)));var x=(-d-Math.sqrt(v))/(2*m);0<x&&x<1&&(0==f&&this.addX(p(x)),1==f&&this.addY(p(x)))}}else{if(0==d)continue;var b=-y/d;0<b&&b<1&&(0==f&&this.addX(p(b)),1==f&&this.addY(p(b)))}}},this.isPointInBox=function(t,e){return this.x1<=t&&t<=this.x2&&this.y1<=e&&e<=this.y2},this.addPoint(t,e),this.addPoint(i,n)},D.Transform=function(t){var e=this;this.Type={},this.Type.translate=function(t){this.p=D.CreatePoint(t),this.apply=function(t){t.translate(this.p.x||0,this.p.y||0)},this.unapply=function(t){t.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(t){t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var e=D.ToNumberArray(t);this.angle=new D.Property("angle",e[0]),this.cx=e[1]||0,this.cy=e[2]||0,this.apply=function(t){t.translate(this.cx,this.cy),t.rotate(this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.unapply=function(t){t.translate(this.cx,this.cy),t.rotate(-1*this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.applyToPoint=function(t){var e=this.angle.toRadians();t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),t.applyTransform([Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e),0,0]),t.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=D.CreatePoint(t),this.apply=function(t){t.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(t){t.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(t){t.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=D.ToNumberArray(t),this.apply=function(t){t.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.unapply=function(t){var e=this.m[0],i=this.m[2],n=this.m[4],s=this.m[1],a=this.m[3],r=this.m[5],o=1/(e*(1*a-0*r)-i*(1*s-0*r)+n*(0*s-0*a));t.transform(o*(1*a-0*r),o*(0*r-1*s),o*(0*n-1*i),o*(1*e-0*n),o*(i*r-n*a),o*(n*s-e*r))},this.applyToPoint=function(t){t.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=e.Type.matrix,this.base(t),this.angle=new D.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].apply(t)},this.unapply=function(t){for(var e=this.transforms.length-1;0<=e;e--)this.transforms[e].unapply(t)},this.applyToPoint=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].applyToPoint(t)};for(var i=D.trim(D.compressSpaces(t)).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),n=0;n<i.length;n++)if("none"!==i[n]){var s=D.trim(i[n].split("(")[0]),a=i[n].split("(")[1].replace(")",""),r=this.Type[s];if(void 0!==r){var o=new r(a);o.type=s,this.transforms.push(o)}}},D.AspectRatio=function(t,e,i,n,s,a,r,o,h,l){var u=(e=(e=D.compressSpaces(e)).replace(/^defer\s/,"")).split(" ")[0]||"xMidYMid",c=e.split(" ")[1]||"meet",f=i/n,p=s/a,d=Math.min(f,p),m=Math.max(f,p);"meet"==c&&(n*=d,a*=d),"slice"==c&&(n*=m,a*=m),h=new D.Property("refX",h),l=new D.Property("refY",l),h.hasValue()&&l.hasValue()?t.translate(-d*h.toPixels("x"),-d*l.toPixels("y")):(u.match(/^xMid/)&&("meet"==c&&d==p||"slice"==c&&m==p)&&t.translate(i/2-n/2,0),u.match(/YMid$/)&&("meet"==c&&d==f||"slice"==c&&m==f)&&t.translate(0,s/2-a/2),u.match(/^xMax/)&&("meet"==c&&d==p||"slice"==c&&m==p)&&t.translate(i-n,0),u.match(/YMax$/)&&("meet"==c&&d==f||"slice"==c&&m==f)&&t.translate(0,s-a)),"none"==u?t.scale(f,p):"meet"==c?t.scale(d,d):"slice"==c&&t.scale(m,m),t.translate(null==r?0:-r,null==o?0:-o)},D.Element={},D.EmptyProperty=new D.Property("EMPTY",""),D.Element.ElementBase=function(a){this.attributes={},this.styles={},this.stylesSpecificity={},this.children=[],this.attribute=function(t,e){var i=this.attributes[t];return null!=i?i:(1==e&&(i=new D.Property(t,""),this.attributes[t]=i),i||D.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if("href"==t||t.match(/:href$/))return this.attributes[t];return D.EmptyProperty},this.style=function(t,e,i){var n=this.styles[t];if(null!=n)return n;var s=this.attribute(t);if(null!=s&&s.hasValue())return this.styles[t]=s;if(1!=i){var a=this.parent;if(null!=a){var r=a.style(t);if(null!=r&&r.hasValue())return r}}return 1==e&&(n=new D.Property(t,""),this.styles[t]=n),n||D.EmptyProperty},this.render=function(t){if("none"!=this.style("display").value&&"hidden"!=this.style("visibility").value){if(t.save(),this.style("mask").hasValue()){var e=this.style("mask").getDefinition();null!=e&&e.apply(t,this)}else if(this.style("filter").hasValue()){var i=this.style("filter").getDefinition();null!=i&&i.apply(t,this)}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}},this.setContext=function(){},this.clearContext=function(){},this.renderChildren=function(t){for(var e=0;e<this.children.length;e++)this.children[e].render(t)},this.addChild=function(t,e){var i=t;e&&(i=D.CreateElement(t)),i.parent=this,"title"!=i.type&&this.children.push(i)},this.addStylesFromStyleDefinition=function(){for(var t in D.Styles)if("@"!=t[0]&&f(a,t)){var e=D.Styles[t],i=D.StylesSpecificity[t];if(null!=e)for(var n in e){var s=this.stylesSpecificity[n];void 0===s&&(s="000"),s<=i&&(this.styles[n]=e[n],this.stylesSpecificity[n]=i)}}};var t,e=new RegExp("^[A-Z-]+$");if(null!=a&&1==a.nodeType){for(var i=0;i<a.attributes.length;i++){var n=a.attributes[i],s=(t=n.nodeName,e.test(t)?t.toLowerCase():t);this.attributes[s]=new D.Property(s,n.value)}if(this.addStylesFromStyleDefinition(),this.attribute("style").hasValue()){var r=this.attribute("style").value.split(";");for(i=0;i<r.length;i++)if(""!=D.trim(r[i])){var o=r[i].split(":"),h=D.trim(o[0]),l=D.trim(o[1]);this.styles[h]=new D.Property(h,l)}}this.attribute("id").hasValue()&&null==D.Definitions[this.attribute("id").value]&&(D.Definitions[this.attribute("id").value]=this);for(i=0;i<a.childNodes.length;i++){var u=a.childNodes[i];if(1==u.nodeType&&this.addChild(u,!0),this.captureTextNodes&&(3==u.nodeType||4==u.nodeType)){var c=u.value||u.text||u.textContent||"";""!=D.compressSpaces(c)&&this.addChild(new D.Element.tspan(u),!1)}}}},D.Element.RenderedElementBase=function(t){this.base=D.Element.ElementBase,this.base(t),this.calculateOpacity=function(){for(var t=1,e=this;null!=e;){var i=e.style("opacity",!1,!0);i.hasValue()&&(t*=i.numValue()),e=e.parent}return t},this.setContext=function(t,e){if(!e){var i;if(this.style("fill").isUrlDefinition())null!=(i=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity")))&&(t.fillStyle=i);else if(this.style("fill").hasValue()){var n;"currentColor"==(n=this.style("fill")).value&&(n.value=this.style("color").value),"inherit"!=n.value&&(t.fillStyle="none"==n.value?"rgba(0,0,0,0)":n.value)}if(this.style("fill-opacity").hasValue())n=(n=new D.Property("fill",t.fillStyle)).addOpacity(this.style("fill-opacity")),t.fillStyle=n.value;if(this.style("stroke").isUrlDefinition())null!=(i=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity")))&&(t.strokeStyle=i);else if(this.style("stroke").hasValue()){var s;"currentColor"==(s=this.style("stroke")).value&&(s.value=this.style("color").value),"inherit"!=s.value&&(t.strokeStyle="none"==s.value?"rgba(0,0,0,0)":s.value)}if(this.style("stroke-opacity").hasValue())s=(s=new D.Property("stroke",t.strokeStyle)).addOpacity(this.style("stroke-opacity")),t.strokeStyle=s.value;if(this.style("stroke-width").hasValue()){var a=this.style("stroke-width").toPixels();t.lineWidth=0==a?.001:a}if(this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value),this.style("paint-order").hasValue()&&(t.paintOrder=this.style("paint-order").value),this.style("stroke-dasharray").hasValue()&&"none"!=this.style("stroke-dasharray").value){var r=D.ToNumberArray(this.style("stroke-dasharray").value);void 0!==t.setLineDash?t.setLineDash(r):void 0!==t.webkitLineDash?t.webkitLineDash=r:void 0===t.mozDash||1==r.length&&0==r[0]||(t.mozDash=r);var o=this.style("stroke-dashoffset").toPixels();void 0!==t.lineDashOffset?t.lineDashOffset=o:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=o:void 0!==t.mozDashOffset&&(t.mozDashOffset=o)}}if(void 0!==t.font)if(this.style("font").hasValue())t.font=this.style("font").value;else{t.font=D.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString();var h=this.style("font-size",!1,!1);h.isPixels()&&(D.emSize=h.toPixels())}this.style("transform",!1,!0).hasValue()&&new D.Transform(this.style("transform",!1,!0).value).apply(t);if(this.style("clip-path",!1,!0).hasValue()){var l=this.style("clip-path",!1,!0).getDefinition();null!=l&&l.apply(t)}t.globalAlpha=this.calculateOpacity()}},D.Element.RenderedElementBase.prototype=new D.Element.ElementBase,D.Element.PathElementBase=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.path=function(t){return null!=t&&t.beginPath(),new D.BoundingBox},this.renderChildren=function(t){this.path(t),D.Mouse.checkPath(this,t),""!=t.fillStyle&&("inherit"!=this.style("fill-rule").valueOrDefault("inherit")?t.fill(this.style("fill-rule").value):t.fill()),""!=t.strokeStyle&&t.stroke();var e=this.getMarkers();if(null!=e){if(this.style("marker-start").isUrlDefinition())(i=this.style("marker-start").getDefinition()).render(t,e[0][0],e[0][1]);if(this.style("marker-mid").isUrlDefinition())for(var i=this.style("marker-mid").getDefinition(),n=1;n<e.length-1;n++)i.render(t,e[n][0],e[n][1]);if(this.style("marker-end").isUrlDefinition())(i=this.style("marker-end").getDefinition()).render(t,e[e.length-1][0],e[e.length-1][1])}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},D.Element.PathElementBase.prototype=new D.Element.RenderedElementBase,D.SetDefaults=function(t){t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4},D.Element.svg=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),D.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){if(D.SetDefaults(t),t.canvas.style&&void 0!==t.font&&void 0!==l.getComputedStyle){t.font=l.getComputedStyle(t.canvas).getPropertyValue("font");var e=new D.Property("fontSize",D.Font.Parse(t.font).fontSize);e.hasValue()&&(D.rootEmSize=D.emSize=e.toPixels("y"))}this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var i=D.ViewPort.width(),n=D.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),void 0===this.root){i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");var s=0,a=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(s=-this.attribute("refX").toPixels("x"),a=-this.attribute("refY").toPixels("y")),"visible"!=this.attribute("overflow").valueOrDefault("hidden")&&(t.beginPath(),t.moveTo(s,a),t.lineTo(i,a),t.lineTo(i,n),t.lineTo(s,n),t.closePath(),t.clip())}if(D.ViewPort.SetCurrent(i,n),this.attribute("viewBox").hasValue()){var r=D.ToNumberArray(this.attribute("viewBox").value),o=r[0],h=r[1];i=r[2],n=r[3],D.AspectRatio(t,this.attribute("preserveAspectRatio").value,D.ViewPort.width(),i,D.ViewPort.height(),n,o,h,this.attribute("refX").value,this.attribute("refY").value),D.ViewPort.RemoveCurrent(),D.ViewPort.SetCurrent(r[2],r[3])}}},D.Element.svg.prototype=new D.Element.RenderedElementBase,D.Element.rect=function(t){this.base=D.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),a=this.attribute("rx").toPixels("x"),r=this.attribute("ry").toPixels("y");if(this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(r=a),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(a=r),a=Math.min(a,n/2),r=Math.min(r,s/2),null!=t){var o=(Math.sqrt(2)-1)/3*4;t.beginPath(),0<s&&0<n&&(t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.bezierCurveTo(e+n-a+o*a,i,e+n,i+r-o*r,e+n,i+r),t.lineTo(e+n,i+s-r),t.bezierCurveTo(e+n,i+s-r+o*r,e+n-a+o*a,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.bezierCurveTo(e+a-o*a,i+s,e,i+s-r+o*r,e,i+s-r),t.lineTo(e,i+r),t.bezierCurveTo(e,i+r-o*r,e+a-o*a,i,e+a,i),t.closePath())}return new D.BoundingBox(e,i,e+n,i+s)}},D.Element.rect.prototype=new D.Element.PathElementBase,D.Element.circle=function(t){this.base=D.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("cx").toPixels("x"),i=this.attribute("cy").toPixels("y"),n=this.attribute("r").toPixels();return null!=t&&0<n&&(t.beginPath(),t.arc(e,i,n,0,2*Math.PI,!1),t.closePath()),new D.BoundingBox(e-n,i-n,e+n,i+n)}},D.Element.circle.prototype=new D.Element.PathElementBase,D.Element.ellipse=function(t){this.base=D.Element.PathElementBase,this.base(t),this.path=function(t){var e=(Math.sqrt(2)-1)/3*4,i=this.attribute("rx").toPixels("x"),n=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),a=this.attribute("cy").toPixels("y");return null!=t&&(t.beginPath(),t.moveTo(s+i,a),t.bezierCurveTo(s+i,a+e*n,s+e*i,a+n,s,a+n),t.bezierCurveTo(s-e*i,a+n,s-i,a+e*n,s-i,a),t.bezierCurveTo(s-i,a-e*n,s-e*i,a-n,s,a-n),t.bezierCurveTo(s+e*i,a-n,s+i,a-e*n,s+i,a),t.closePath()),new D.BoundingBox(s-i,a-n,s+i,a+n)}},D.Element.ellipse.prototype=new D.Element.PathElementBase,D.Element.line=function(t){this.base=D.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new D.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new D.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var e=this.getPoints();return null!=t&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y)),new D.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)},this.getMarkers=function(){var t=this.getPoints(),e=t[0].angleTo(t[1]);return[[t[0],e],[t[1],e]]}},D.Element.line.prototype=new D.Element.PathElementBase,D.Element.polyline=function(t){this.base=D.Element.PathElementBase,this.base(t),this.points=D.CreatePath(this.attribute("points").value),this.path=function(t){var e=new D.BoundingBox(this.points[0].x,this.points[0].y);null!=t&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)e.addPoint(this.points[i].x,this.points[i].y),null!=t&&t.lineTo(this.points[i].x,this.points[i].y);return e},this.getMarkers=function(){for(var t=[],e=0;e<this.points.length-1;e++)t.push([this.points[e],this.points[e].angleTo(this.points[e+1])]);return 0<t.length&&t.push([this.points[this.points.length-1],t[t.length-1][1]]),t}},D.Element.polyline.prototype=new D.Element.PathElementBase,D.Element.polygon=function(t){this.base=D.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(t){var e=this.basePath(t);return null!=t&&(t.lineTo(this.points[0].x,this.points[0].y),t.closePath()),e}},D.Element.polygon.prototype=new D.Element.polyline,D.Element.path=function(t){this.base=D.Element.PathElementBase,this.base(t);var e=this.attribute("d").value;e=e.replace(/,/gm," ");for(var i=0;i<2;i++)e=e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");e=(e=e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2")).replace(/([0-9])([+\-])/gm,"$1 $2");for(i=0;i<2;i++)e=e.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");e=e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),e=D.compressSpaces(e),e=D.trim(e),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new D.Point(0,0),this.control=new D.Point(0,0),this.current=new D.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return!!this.isEnd()||null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new D.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var t=this.getPoint();return this.control=t},this.getAsCurrentPoint=function(){var t=this.getPoint();return this.current=t},this.getReflectedControlPoint=function(){return"c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase()?this.current:new D.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y)},this.makeAbsolute=function(t){return this.isRelativeCommand()&&(t.x+=this.current.x,t.y+=this.current.y),t},this.addMarker=function(t,e,i){null!=i&&0<this.angles.length&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(i)),this.addMarkerAngle(t,null==e?null:e.angleTo(t))},this.addMarkerAngle=function(t,e){this.points.push(t),this.angles.push(e)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var t=0;t<this.angles.length;t++)if(null==this.angles[t])for(var e=t+1;e<this.angles.length;e++)if(null!=this.angles[e]){this.angles[t]=this.angles[e];break}return this.angles}}(e),this.path=function(t){var e=this.PathParser;e.reset();var i=new D.BoundingBox;for(null!=t&&t.beginPath();!e.isEnd();)switch(e.nextCommand(),e.command){case"M":case"m":var n=e.getAsCurrentPoint();for(e.addMarker(n),i.addPoint(n.x,n.y),null!=t&&t.moveTo(n.x,n.y),e.start=e.current;!e.isCommandOrEnd();){n=e.getAsCurrentPoint();e.addMarker(n,e.start),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"L":case"l":for(;!e.isCommandOrEnd();){var s=e.current;n=e.getAsCurrentPoint();e.addMarker(n,s),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"H":case"h":for(;!e.isCommandOrEnd();){var a=new D.Point((e.isRelativeCommand()?e.current.x:0)+e.getScalar(),e.current.y);e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"V":case"v":for(;!e.isCommandOrEnd();){a=new D.Point(e.current.x,(e.isRelativeCommand()?e.current.y:0)+e.getScalar());e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"C":case"c":for(;!e.isCommandOrEnd();){var r=e.current,o=e.getPoint(),h=e.getAsControlPoint(),l=e.getAsCurrentPoint();e.addMarker(l,h,o),i.addBezierCurve(r.x,r.y,o.x,o.y,h.x,h.y,l.x,l.y),null!=t&&t.bezierCurveTo(o.x,o.y,h.x,h.y,l.x,l.y)}break;case"S":case"s":for(;!e.isCommandOrEnd();){r=e.current,o=e.getReflectedControlPoint(),h=e.getAsControlPoint(),l=e.getAsCurrentPoint();e.addMarker(l,h,o),i.addBezierCurve(r.x,r.y,o.x,o.y,h.x,h.y,l.x,l.y),null!=t&&t.bezierCurveTo(o.x,o.y,h.x,h.y,l.x,l.y)}break;case"Q":case"q":for(;!e.isCommandOrEnd();){r=e.current,h=e.getAsControlPoint(),l=e.getAsCurrentPoint();e.addMarker(l,h,h),i.addQuadraticCurve(r.x,r.y,h.x,h.y,l.x,l.y),null!=t&&t.quadraticCurveTo(h.x,h.y,l.x,l.y)}break;case"T":case"t":for(;!e.isCommandOrEnd();){r=e.current,h=e.getReflectedControlPoint();e.control=h;l=e.getAsCurrentPoint();e.addMarker(l,h,h),i.addQuadraticCurve(r.x,r.y,h.x,h.y,l.x,l.y),null!=t&&t.quadraticCurveTo(h.x,h.y,l.x,l.y)}break;case"A":case"a":for(;!e.isCommandOrEnd();){r=e.current;var u=e.getScalar(),c=e.getScalar(),f=e.getScalar()*(Math.PI/180),p=e.getScalar(),d=e.getScalar(),m=(l=e.getAsCurrentPoint(),new D.Point(Math.cos(f)*(r.x-l.x)/2+Math.sin(f)*(r.y-l.y)/2,-Math.sin(f)*(r.x-l.x)/2+Math.cos(f)*(r.y-l.y)/2)),y=Math.pow(m.x,2)/Math.pow(u,2)+Math.pow(m.y,2)/Math.pow(c,2);1<y&&(u*=Math.sqrt(y),c*=Math.sqrt(y));var v=(p==d?-1:1)*Math.sqrt((Math.pow(u,2)*Math.pow(c,2)-Math.pow(u,2)*Math.pow(m.y,2)-Math.pow(c,2)*Math.pow(m.x,2))/(Math.pow(u,2)*Math.pow(m.y,2)+Math.pow(c,2)*Math.pow(m.x,2)));isNaN(v)&&(v=0);var g=new D.Point(v*u*m.y/c,v*-c*m.x/u),x=new D.Point((r.x+l.x)/2+Math.cos(f)*g.x-Math.sin(f)*g.y,(r.y+l.y)/2+Math.sin(f)*g.x+Math.cos(f)*g.y),b=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},P=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(b(t)*b(e))},E=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(P(t,e))},w=E([1,0],[(m.x-g.x)/u,(m.y-g.y)/c]),C=[(m.x-g.x)/u,(m.y-g.y)/c],B=[(-m.x-g.x)/u,(-m.y-g.y)/c],M=E(C,B);P(C,B)<=-1&&(M=Math.PI),1<=P(C,B)&&(M=0);var T=1-d?1:-1,S=w+T*(M/2),V=new D.Point(x.x+u*Math.cos(S),x.y+c*Math.sin(S));if(e.addMarkerAngle(V,S-T*Math.PI/2),e.addMarkerAngle(l,S-T*Math.PI),i.addPoint(l.x,l.y),null!=t&&!isNaN(w)&&!isNaN(M)){P=c<u?u:c;var k=c<u?1:u/c,A=c<u?c/u:1;t.translate(x.x,x.y),t.rotate(f),t.scale(k,A),t.arc(0,0,P,w,w+M,1-d),t.scale(1/k,1/A),t.rotate(-f),t.translate(-x.x,-x.y)}}break;case"Z":case"z":null!=t&&i.x1!==i.x2&&i.y1!==i.y2&&t.closePath(),e.current=e.start}return i},this.getMarkers=function(){for(var t=this.PathParser.getMarkerPoints(),e=this.PathParser.getMarkerAngles(),i=[],n=0;n<t.length;n++)i.push([t[n],e[n]]);return i}},D.Element.path.prototype=new D.Element.PathElementBase,D.Element.pattern=function(t){this.base=D.Element.ElementBase,this.base(t),this.createPattern=function(t,e,i){var n=this.attribute("width").toPixels("x",!0),s=this.attribute("height").toPixels("y",!0),a=new D.Element.svg;a.attributes.viewBox=new D.Property("viewBox",this.attribute("viewBox").value),a.attributes.width=new D.Property("width",n+"px"),a.attributes.height=new D.Property("height",s+"px"),a.attributes.transform=new D.Property("transform",this.attribute("patternTransform").value),a.children=this.children;var r=d(n,s),o=r.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&o.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0)),i.hasValue()?this.styles["fill-opacity"]=i:delete this.styles["fill-opacity"];for(var h=-1;h<=1;h++)for(var l=-1;l<=1;l++)o.save(),a.attributes.x=new D.Property("x",h*r.width),a.attributes.y=new D.Property("y",l*r.height),a.render(o),o.restore();return t.createPattern(r,"repeat")}},D.Element.pattern.prototype=new D.Element.ElementBase,D.Element.marker=function(t){this.base=D.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,e,i){if(e){t.translate(e.x,e.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(i),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(t.lineWidth,t.lineWidth),t.save();var n=new D.Element.svg;n.attributes.viewBox=new D.Property("viewBox",this.attribute("viewBox").value),n.attributes.refX=new D.Property("refX",this.attribute("refX").value),n.attributes.refY=new D.Property("refY",this.attribute("refY").value),n.attributes.width=new D.Property("width",this.attribute("markerWidth").value),n.attributes.height=new D.Property("height",this.attribute("markerHeight").value),n.attributes.fill=new D.Property("fill",this.attribute("fill").valueOrDefault("black")),n.attributes.stroke=new D.Property("stroke",this.attribute("stroke").valueOrDefault("none")),n.children=this.children,n.render(t),t.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(-i),t.translate(-e.x,-e.y)}}},D.Element.marker.prototype=new D.Element.ElementBase,D.Element.defs=function(t){this.base=D.Element.ElementBase,this.base(t),this.render=function(){}},D.Element.defs.prototype=new D.Element.ElementBase,D.Element.GradientBase=function(t){this.base=D.Element.ElementBase,this.base(t),this.stops=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"stop"==i.type&&this.stops.push(i)}this.getGradient=function(){},this.gradientUnits=function(){return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")},this.attributesToInherit=["gradientUnits"],this.inheritStopContainer=function(t){for(var e=0;e<this.attributesToInherit.length;e++){var i=this.attributesToInherit[e];!this.attribute(i).hasValue()&&t.attribute(i).hasValue()&&(this.attribute(i,!0).value=t.attribute(i).value)}},this.createGradient=function(t,e,i){var n=this;this.getHrefAttribute().hasValue()&&(n=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(n));var s=function(t){return i.hasValue()?new D.Property("color",t).addOpacity(i).value:t},a=this.getGradient(t,e);if(null==a)return s(n.stops[n.stops.length-1].color);for(var r=0;r<n.stops.length;r++)a.addColorStop(n.stops[r].offset,s(n.stops[r].color));if(this.attribute("gradientTransform").hasValue()){var o=D.ViewPort.viewPorts[0],h=new D.Element.rect;h.attributes.x=new D.Property("x",-D.MAX_VIRTUAL_PIXELS/3),h.attributes.y=new D.Property("y",-D.MAX_VIRTUAL_PIXELS/3),h.attributes.width=new D.Property("width",D.MAX_VIRTUAL_PIXELS),h.attributes.height=new D.Property("height",D.MAX_VIRTUAL_PIXELS);var l=new D.Element.g;l.attributes.transform=new D.Property("transform",this.attribute("gradientTransform").value),l.children=[h];var u=new D.Element.svg;u.attributes.x=new D.Property("x",0),u.attributes.y=new D.Property("y",0),u.attributes.width=new D.Property("width",o.width),u.attributes.height=new D.Property("height",o.height),u.children=[l];var c=d(o.width,o.height),f=c.getContext("2d");return f.fillStyle=a,u.render(f),f.createPattern(c,"no-repeat")}return a}},D.Element.GradientBase.prototype=new D.Element.ElementBase,D.Element.linearGradient=function(t){this.base=D.Element.GradientBase,this.base(t),this.attributesToInherit.push("x1"),this.attributesToInherit.push("y1"),this.attributesToInherit.push("x2"),this.attributesToInherit.push("y2"),this.getGradient=function(t,e){var i="objectBoundingBox"==this.gradientUnits()?e.getBoundingBox(t):null;this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return n==a&&s==r?null:t.createLinearGradient(n,s,a,r)}},D.Element.linearGradient.prototype=new D.Element.GradientBase,D.Element.radialGradient=function(t){this.base=D.Element.GradientBase,this.base(t),this.attributesToInherit.push("cx"),this.attributesToInherit.push("cy"),this.attributesToInherit.push("r"),this.attributesToInherit.push("fx"),this.attributesToInherit.push("fy"),this.attributesToInherit.push("fr"),this.getGradient=function(t,e){var i=e.getBoundingBox(t);this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),a=n,r=s;this.attribute("fx").hasValue()&&(a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var o="objectBoundingBox"==this.gradientUnits()?(i.width()+i.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels(),h=this.attribute("fr").toPixels();return t.createRadialGradient(a,r,h,n,s,o)}},D.Element.radialGradient.prototype=new D.Element.GradientBase,D.Element.stop=function(t){this.base=D.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),1<this.offset&&(this.offset=1);var e=this.style("stop-color",!0);""===e.value&&(e.value="#000"),this.style("stop-opacity").hasValue()&&(e=e.addOpacity(this.style("stop-opacity"))),this.color=e.value},D.Element.stop.prototype=new D.Element.ElementBase,D.Element.AnimateBase=function(t){this.base=D.Element.ElementBase,this.base(t),D.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var t=this.attribute("attributeType").value,e=this.attribute("attributeName").value;return"CSS"==t?this.parent.style(e,!0):this.parent.attribute(e,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(t){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"==this.attribute("repeatCount").value||"indefinite"==this.attribute("repeatDur").value)this.duration=0;else if("freeze"!=this.attribute("fill").valueOrDefault("remove")||this.frozen){if("remove"==this.attribute("fill").valueOrDefault("remove")&&!this.removed)return this.removed=!0,this.getProperty().value=this.parent.animationFrozen?this.parent.animationFrozenValue:this.initialValue,!0}else this.frozen=!0,this.parent.animationFrozen=!0,this.parent.animationFrozenValue=this.getProperty().value;return!1}this.duration=this.duration+t;var e=!1;if(this.begin<this.duration){var i=this.calcValue();if(this.attribute("type").hasValue())i=this.attribute("type").value+"("+i+")";this.getProperty().value=i,e=!0}return e},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var e=t.progress*(this.values.value.length-1),i=Math.floor(e),n=Math.ceil(e);t.from=new D.Property("from",parseFloat(this.values.value[i])),t.to=new D.Property("to",parseFloat(this.values.value[n])),t.progress=(e-i)/(n-i)}else t.from=this.from,t.to=this.to;return t}},D.Element.AnimateBase.prototype=new D.Element.ElementBase,D.Element.animate=function(t){this.base=D.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=t.from.numValue()+(t.to.numValue()-t.from.numValue())*t.progress;return"%"===this.initialUnits&&(e*=100),e+this.initialUnits}},D.Element.animate.prototype=new D.Element.AnimateBase,D.Element.animateColor=function(t){this.base=D.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=new y(t.from.value),i=new y(t.to.value);if(e.ok&&i.ok){var n=e.r+(i.r-e.r)*t.progress,s=e.g+(i.g-e.g)*t.progress,a=e.b+(i.b-e.b)*t.progress;return"rgb("+parseInt(n,10)+","+parseInt(s,10)+","+parseInt(a,10)+")"}return this.attribute("from").value}},D.Element.animateColor.prototype=new D.Element.AnimateBase,D.Element.animateTransform=function(t){this.base=D.Element.AnimateBase,this.base(t),this.calcValue=function(){for(var t=this.progress(),e=D.ToNumberArray(t.from.value),i=D.ToNumberArray(t.to.value),n="",s=0;s<e.length;s++)n+=e[s]+(i[s]-e[s])*t.progress+" ";return n}},D.Element.animateTransform.prototype=new D.Element.animate,D.Element.font=function(t){this.base=D.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"font-face"==i.type?(this.fontFace=i).style("font-family").hasValue()&&(D.Definitions[i.style("font-family").value]=this):"missing-glyph"==i.type?this.missingGlyph=i:"glyph"==i.type&&(""!=i.arabicForm?(this.isRTL=!0,this.isArabic=!0,void 0===this.glyphs[i.unicode]&&(this.glyphs[i.unicode]=[]),this.glyphs[i.unicode][i.arabicForm]=i):this.glyphs[i.unicode]=i)}this.render=function(){}},D.Element.font.prototype=new D.Element.ElementBase,D.Element.fontface=function(t){this.base=D.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},D.Element.fontface.prototype=new D.Element.ElementBase,D.Element.missingglyph=function(t){this.base=D.Element.path,this.base(t),this.horizAdvX=0},D.Element.missingglyph.prototype=new D.Element.path,D.Element.glyph=function(t){this.base=D.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},D.Element.glyph.prototype=new D.Element.path,D.Element.text=function(t){this.captureTextNodes=!0,this.base=D.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);var e=this.style("dominant-baseline").toTextBaseline();null==e&&(e=this.style("alignment-baseline").toTextBaseline()),null!=e&&(t.textBaseline=e)},this.initializeCoordinates=function(t){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),this.x+=this.getAnchorDelta(t,this,0)},this.getBoundingBox=function(t){this.initializeCoordinates(t);for(var e=null,i=0;i<this.children.length;i++){var n=this.getChildBoundingBox(t,this,this,i);null==e?e=n:e.addBoundingBox(n)}return e},this.renderChildren=function(t){this.initializeCoordinates(t);for(var e=0;e<this.children.length;e++)this.renderChild(t,this,this,e);D.Mouse.checkBoundingBox(this,this.getBoundingBox(t))},this.getAnchorDelta=function(t,e,i){var n=this.style("text-anchor").valueOrDefault("start");if("start"==n)return 0;for(var s=0,a=i;a<e.children.length;a++){var r=e.children[a];if(i<a&&r.attribute("x").hasValue())break;s+=r.measureTextRecursive(t)}return-1*("end"==n?s:s/2)},this.adjustChildCoordinates=function(t,e,i,n){var s=i.children[n];if("function"!=typeof s.measureText)return s;if(s.attribute("x").hasValue()){s.x=s.attribute("x").toPixels("x")+e.getAnchorDelta(t,i,n);var a=s.attribute("text-anchor").valueOrDefault("start");if("start"!==a){var r=s.measureTextRecursive(t);s.x+=-1*("end"==a?r:r/2)}s.attribute("dx").hasValue()&&(s.x+=s.attribute("dx").toPixels("x"))}else s.attribute("dx").hasValue()&&(e.x+=s.attribute("dx").toPixels("x")),s.x=e.x;return e.x=s.x+s.measureText(t),s.attribute("y").hasValue()?(s.y=s.attribute("y").toPixels("y"),s.attribute("dy").hasValue()&&(s.y+=s.attribute("dy").toPixels("y"))):(s.attribute("dy").hasValue()&&(e.y+=s.attribute("dy").toPixels("y")),s.y=e.y),e.y=s.y,s},this.getChildBoundingBox=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n),a=s.getBoundingBox(t);for(n=0;n<s.children.length;n++){var r=e.getChildBoundingBox(t,e,s,n);a.addBoundingBox(r)}return a},this.renderChild=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n);s.render(t);for(n=0;n<s.children.length;n++)e.renderChild(t,e,s,n)}},D.Element.text.prototype=new D.Element.RenderedElementBase,D.Element.TextElementBase=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.getGlyph=function(t,e,i){var n=e[i],s=null;if(t.isArabic){var a="isolated";(0==i||" "==e[i-1])&&i<e.length-2&&" "!=e[i+1]&&(a="terminal"),0<i&&" "!=e[i-1]&&i<e.length-2&&" "!=e[i+1]&&(a="medial"),0<i&&" "!=e[i-1]&&(i==e.length-1||" "==e[i+1])&&(a="initial"),void 0!==t.glyphs[n]&&null==(s=t.glyphs[n][a])&&"glyph"==t.glyphs[n].type&&(s=t.glyphs[n])}else s=t.glyphs[n];return null==s&&(s=t.missingGlyph),s},this.renderChildren=function(t){var e=this.parent.style("font-family").getDefinition();if(null==e)"stroke"==t.paintOrder?(""!=t.strokeStyle&&t.strokeText(D.compressSpaces(this.getText()),this.x,this.y),""!=t.fillStyle&&t.fillText(D.compressSpaces(this.getText()),this.x,this.y)):(""!=t.fillStyle&&t.fillText(D.compressSpaces(this.getText()),this.x,this.y),""!=t.strokeStyle&&t.strokeText(D.compressSpaces(this.getText()),this.x,this.y));else{var i=this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(D.Font.Parse(D.ctx.font).fontStyle),s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=D.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++){var o=this.getGlyph(e,s,r),h=i/e.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(h,-h);var l=t.lineWidth;t.lineWidth=t.lineWidth*e.fontFace.unitsPerEm/i,"italic"==n&&t.transform(1,0,.4,1,0,0),o.render(t),"italic"==n&&t.transform(1,0,-.4,1,0,0),t.lineWidth=l,t.scale(1/h,-1/h),t.translate(-this.x,-this.y),this.x+=i*(o.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(this.x+=a[r])}}},this.getText=function(){},this.measureTextRecursive=function(t){for(var e=this.measureText(t),i=0;i<this.children.length;i++)e+=this.children[i].measureTextRecursive(t);return e},this.measureText=function(t){var e=this.parent.style("font-family").getDefinition();if(null!=e){var i=this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),n=0,s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=D.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++){n+=(this.getGlyph(e,s,r).horizAdvX||e.horizAdvX)*i/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(n+=a[r])}return n}var o=D.compressSpaces(this.getText());if(!t.measureText)return 10*o.length;t.save(),this.setContext(t,!0);var h=t.measureText(o).width;return t.restore(),h},this.getBoundingBox=function(t){var e=this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize);return new D.BoundingBox(this.x,this.y-e,this.x+this.measureText(t),this.y)}},D.Element.TextElementBase.prototype=new D.Element.RenderedElementBase,D.Element.tspan=function(t){this.captureTextNodes=!0,this.base=D.Element.TextElementBase,this.base(t),this.text=D.compressSpaces(t.value||t.text||t.textContent||""),this.getText=function(){return 0<this.children.length?"":this.text}},D.Element.tspan.prototype=new D.Element.TextElementBase,D.Element.tref=function(t){this.base=D.Element.TextElementBase,this.base(t),this.getText=function(){var t=this.getHrefAttribute().getDefinition();if(null!=t)return t.children[0].getText()}},D.Element.tref.prototype=new D.Element.TextElementBase,D.Element.a=function(t){this.base=D.Element.TextElementBase,this.base(t),this.hasText=0<t.childNodes.length;for(var e=0;e<t.childNodes.length;e++)3!=t.childNodes[e].nodeType&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].value||t.childNodes[0].data:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var e=new D.Property("fontSize",D.Font.Parse(D.ctx.font).fontSize);D.Mouse.checkBoundingBox(this,new D.BoundingBox(this.x,this.y-e.toPixels("y"),this.x+this.measureText(t),this.y))}else if(0<this.children.length){var i=new D.Element.g;i.children=this.children,i.parent=this,i.render(t)}},this.onclick=function(){l.open(this.getHrefAttribute().value)},this.onmousemove=function(){D.ctx.canvas.style.cursor="pointer"}},D.Element.a.prototype=new D.Element.TextElementBase,D.Element.textPath=function(t){this.base=D.Element.TextElementBase,this.base(t);var e=this.getHrefAttribute().getDefinition();this.text=D.compressSpaces(t.value||t.text||t.textContent||""),this.renderChildren=function(t){this.setTextData(t),t.save();var e=this.parent.style("text-decoration").value,i=this.fontSize(),n=this.glyphInfo,s=t.fillStyle;"underline"===e&&t.beginPath();for(var a=0;a<n.length;a++){var r=n[a].p0,o=n[a].p1,h=n[a].text;t.save(),t.translate(r.x,r.y),t.rotate(n[a].rotation),""!=t.fillStyle&&t.fillText(D.compressSpaces(h),0,0),""!=t.strokeStyle&&t.strokeText(D.compressSpaces(h),0,0),t.restore(),"underline"===e&&(0===a&&t.moveTo(r.x,r.y+i/8),t.lineTo(o.x,o.y+i/5))}"underline"===e&&(t.lineWidth=i/20,t.strokeStyle=s,t.stroke(),t.closePath()),t.restore()},this.path=function(t){var e=this.dataArray;null!=t&&t.beginPath();for(var i=0;i<e.length;i++){var n=e[i].command,s=e[i].points;switch(n){case"L":null!=t&&t.lineTo(s[0],s[1]);break;case"M":null!=t&&t.moveTo(s[0],s[1]);break;case"C":null!=t&&t.bezierCurveTo(s[0],s[1],s[2],s[3],s[4],s[5]);break;case"Q":null!=t&&t.quadraticCurveTo(s[0],s[1],s[2],s[3]);break;case"A":var a=s[0],r=s[1],o=s[2],h=s[3],l=s[4],u=s[5],c=s[6],f=s[7],p=h<o?o:h,d=h<o?1:o/h,m=h<o?h/o:1;null!=t&&(t.translate(a,r),t.rotate(c),t.scale(d,m),t.arc(0,0,p,l,l+u,1-f),t.scale(1/d,1/m),t.rotate(-c),t.translate(-a,-r));break;case"z":null!=t&&t.closePath()}}},this.getText=function(){return this.text},this.fontSize=function(){return this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize)},this.measureText=function(t,e){var i=this.parent.style("font-family").getDefinition();if(e=e||this.getText(),null!=i){var n=this.fontSize(),s=0;i.isRTL&&(e=e.split("").reverse().join(""));for(var a=D.ToNumberArray(this.parent.attribute("dx").value),r=0;r<e.length;r++){s+=(this.getGlyph(i,e,r).horizAdvX||i.horizAdvX)*n/i.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(s+=a[r])}return s}var o=D.compressSpaces(e);if(!t.measureText)return 10*o.length;t.save(),this.setContext(t);var h=t.measureText(o).width;return t.restore(),h},this.setTextData=function(r){if(!this.hasOwnProperty("glyphInfo")){var o=this,t=this.getText().split(""),h=this.getText().split(" ").length-1,e=D.ToNumberArray(this.parent.attribute("dx").valueOrDefault("0")),i=0,l=this.parent.style("text-anchor").valueOrDefault("start"),n=this.style("letter-spacing"),s=this.parent.style("letter-spacing");n.hasValue()&&"inherit"!==n.getValue()?n.hasValue()&&"initial"!==n.getValue()&&"unset"!==n.getValue()&&(i=n.toPixels()):i=s.toPixels(),this.letterSpacingCache=[];for(var a=0;a<this.getText().length;a++)this.letterSpacingCache.push(void 0!==e[a]?e[a]:i);var u=this.letterSpacingCache.reduce(function(t,e){return t+e||0},0);this.textWidth=this.measureText(r),this.textHeight=this.fontSize();var c=Math.max(this.textWidth+u,0);this.glyphInfo=[];var f=this.getPathLength(),p=this.style("startOffset").numValueOrDefault(0)*f,d=0;"middle"!==l&&"center"!==l||(d=-c/2),"end"!==l&&"right"!==l||(d=-c),d+=p;var m=function(t,e){var i,n=o.measureText(r,t);" "===t&&"justify"===l&&c<f&&(n+=(f-c)/h),-1<e&&(d+=(i=(i=e)||0,o.letterSpacingCache[i]||0));var s=o.textHeight/20,a={p0:o.getEquidistantPointOnPath(d,s),p1:o.getEquidistantPointOnPath(d+n,s)};return d+=n,a};for(a=0;a<t.length;a++){var y=m(t[a],a);if(void 0!==y.p0&&void 0!==y.p1){var v=o.getLineLength(y.p0.x,y.p0.y,y.p1.x,y.p1.y),g=o.getPointOnLine(0+v/2,y.p0.x,y.p0.y,y.p1.x,y.p1.y),x=Math.atan2(y.p1.y-y.p0.y,y.p1.x-y.p0.x);this.glyphInfo.push({transposeX:g.x,transposeY:g.y,text:t[a],rotation:x,p0:y.p0,p1:y.p1})}}}},this.parsePathData=function(t){if(this.pathLength=void 0,!t)return[];var e=[],i=t.PathParser;for(i.reset();!i.isEnd();){var n=[],s=null,a=i.current?i.current.x:0,r=i.current?i.current.y:0;i.nextCommand();var o=i.command.toUpperCase();switch(i.command){case"M":case"m":var h=i.getAsCurrentPoint();for(n.push(h.x,h.y),i.start=i.current;!i.isCommandOrEnd();){h=i.getAsCurrentPoint();n.push(h.x,h.y),s="L"}break;case"L":case"l":for(;!i.isCommandOrEnd();){h=i.getAsCurrentPoint();n.push(h.x,h.y)}s="L";break;case"H":case"h":for(;!i.isCommandOrEnd();){var l=new D.Point((i.isRelativeCommand()?i.current.x:0)+i.getScalar(),i.current.y);n.push(l.x,l.y),i.current=l}s="L";break;case"V":case"v":for(;!i.isCommandOrEnd();){l=new D.Point(i.current.x,(i.isRelativeCommand()?i.current.y:0)+i.getScalar());n.push(l.x,l.y),i.current=l}s="L";break;case"C":case"c":for(;!i.isCommandOrEnd();){var u=i.getPoint(),c=i.getAsControlPoint(),f=i.getAsCurrentPoint();n.push(u.x,u.y,c.x,c.y,f.x,f.y)}break;case"S":case"s":for(;!i.isCommandOrEnd();){u=i.getReflectedControlPoint(),c=i.getAsControlPoint(),f=i.getAsCurrentPoint();n.push(u.x,u.y,c.x,c.y,f.x,f.y)}s="C";break;case"Q":case"q":for(;!i.isCommandOrEnd();){c=i.getAsControlPoint(),f=i.getAsCurrentPoint();n.push(c.x,c.y,f.x,f.y)}break;case"T":case"t":for(;!i.isCommandOrEnd();){c=i.getReflectedControlPoint();i.control=c;f=i.getAsCurrentPoint();n.push(c.x,c.y,f.x,f.y)}s="Q";break;case"A":case"a":for(;!i.isCommandOrEnd();){var p=i.current,d=i.getScalar(),m=i.getScalar(),y=i.getScalar()*(Math.PI/180),v=i.getScalar(),g=i.getScalar(),x=(f=i.getAsCurrentPoint(),new D.Point(Math.cos(y)*(p.x-f.x)/2+Math.sin(y)*(p.y-f.y)/2,-Math.sin(y)*(p.x-f.x)/2+Math.cos(y)*(p.y-f.y)/2)),b=Math.pow(x.x,2)/Math.pow(d,2)+Math.pow(x.y,2)/Math.pow(m,2);1<b&&(d*=Math.sqrt(b),m*=Math.sqrt(b));var P=(v==g?-1:1)*Math.sqrt((Math.pow(d,2)*Math.pow(m,2)-Math.pow(d,2)*Math.pow(x.y,2)-Math.pow(m,2)*Math.pow(x.x,2))/(Math.pow(d,2)*Math.pow(x.y,2)+Math.pow(m,2)*Math.pow(x.x,2)));isNaN(P)&&(P=0);var E=new D.Point(P*d*x.y/m,P*-m*x.x/d),w=new D.Point((p.x+f.x)/2+Math.cos(y)*E.x-Math.sin(y)*E.y,(p.y+f.y)/2+Math.sin(y)*E.x+Math.cos(y)*E.y),C=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},B=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(C(t)*C(e))},M=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(B(t,e))},T=M([1,0],[(x.x-E.x)/d,(x.y-E.y)/m]),S=[(x.x-E.x)/d,(x.y-E.y)/m],V=[(-x.x-E.x)/d,(-x.y-E.y)/m],k=M(S,V);B(S,V)<=-1&&(k=Math.PI),1<=B(S,V)&&(k=0),0===g&&0<k&&(k-=2*Math.PI),1===g&&k<0&&(k+=2*Math.PI),n=[w.x,w.y,d,m,T,k,y,g]}break;case"Z":case"z":i.current=i.start}"Z"!==o?e.push({command:s||o,points:n,start:{x:a,y:r},pathLength:this.calcLength(a,r,s||o,n)}):e.push({command:"z",points:[],start:void 0,pathLength:0})}return e},this.getPathLength=function(){if(void 0===this.pathLength||null===this.pathLength||isNaN(this.pathLength))for(var t=this.pathLength=0;t<this.dataArray.length;t++)0<this.dataArray[t].pathLength&&(this.pathLength+=this.dataArray[t].pathLength);return this.pathLength},this.getPointOnPath=function(t){var e=0,i=this.getPathLength(),n=void 0;if(!(t<-5e-5||i<t-5e-5))for(var s=0;s<this.dataArray.length;s++){var a=this.dataArray[s];if(!a||!(a.pathLength<5e-5||e+a.pathLength+5e-5<t)){var r=t-e,o=void 0;switch(a.command){case"L":n=this.getPointOnLine(r,a.start.x,a.start.y,a.points[0],a.points[1],a.start.x,a.start.y);break;case"A":var h=a.points[4],l=a.points[5],u=a.points[4]+l;if(o=h+r/a.pathLength*l,l<0&&o<u||0<=l&&u<o)break;n=this.getPointOnEllipticalArc(a.points[0],a.points[1],a.points[2],a.points[3],o,a.points[6]);break;case"C":1<(o=r/a.pathLength)&&(o=1),n=this.getPointOnCubicBezier(o,a.start.x,a.start.y,a.points[0],a.points[1],a.points[2],a.points[3],a.points[4],a.points[5]);break;case"Q":1<(o=r/a.pathLength)&&(o=1),n=this.getPointOnQuadraticBezier(o,a.start.x,a.start.y,a.points[0],a.points[1],a.points[2],a.points[3])}if(void 0!==n&&n!=={})return n;break}e+=a.pathLength}},this.buildEquidistantCache=function(t,e){var i=this.getPathLength();if(e=e||.25,t=t||i/100,this.equidistantCache=this.equidistantCache||{},!this.equidistantCache.hasOwnProperty("points")||this.equidistantCache.step!=t||this.equidistantCache.precision!=e){this.equidistantCache={step:t,precision:e,points:[]};for(var n=0,s=0;s<=i;s+=e){var a=this.getPointOnPath(s),r=this.getPointOnPath(s+e);void 0!==a&&void 0!==r&&(t<=(n+=this.getLineLength(a.x,a.y,r.x,r.y))&&(this.equidistantCache.points.push({x:a.x,y:a.y,distance:s}),n-=t))}}},this.getEquidistantPointOnPath=function(t,e,i){if(this.buildEquidistantCache(e,i),!(t<0||5e-5<t-this.getPathLength())){var n=Math.round(t/this.getPathLength()*(this.equidistantCache.points.length-1));return this.equidistantCache.points[n]||void 0}},this.getLineLength=function(t,e,i,n){return Math.sqrt((i-t)*(i-t)+(n-e)*(n-e))},this.getPointOnLine=function(t,e,i,n,s,a,r){void 0===a&&(a=e),void 0===r&&(r=i);var o=(s-i)/(n-e+1e-8),h=Math.sqrt(t*t/(1+o*o));n<e&&(h*=-1);var l,u=o*h;if(n===e)l={x:a,y:r+u};else if((r-i)/(a-e+1e-8)===o)l={x:a+h,y:r+u};else{var c,f,p=this.getLineLength(e,i,n,s);if(p<1e-8)return;var d=(a-e)*(n-e)+(r-i)*(s-i);c=e+(d/=p*p)*(n-e),f=i+d*(s-i);var m=this.getLineLength(a,r,c,f),y=Math.sqrt(t*t-m*m);h=Math.sqrt(y*y/(1+o*o)),n<e&&(h*=-1),l={x:c+h,y:f+(u=o*h)}}return l},this.getPointOnCubicBezier=function(t,e,i,n,s,a,r,o,h){function l(t){return t*t*t}function u(t){return 3*t*t*(1-t)}function c(t){return 3*t*(1-t)*(1-t)}function f(t){return(1-t)*(1-t)*(1-t)}return{x:o*l(t)+a*u(t)+n*c(t)+e*f(t),y:h*l(t)+r*u(t)+s*c(t)+i*f(t)}},this.getPointOnQuadraticBezier=function(t,e,i,n,s,a,r){function o(t){return t*t}function h(t){return 2*t*(1-t)}function l(t){return(1-t)*(1-t)}return{x:a*o(t)+n*h(t)+e*l(t),y:r*o(t)+s*h(t)+i*l(t)}},this.getPointOnEllipticalArc=function(t,e,i,n,s,a){var r=Math.cos(a),o=Math.sin(a),h=i*Math.cos(s),l=n*Math.sin(s);return{x:t+(h*r-l*o),y:e+(h*o+l*r)}},this.calcLength=function(t,e,i,n){var s,a,r,o;switch(i){case"L":return this.getLineLength(t,e,n[0],n[1]);case"C":for(s=0,a=this.getPointOnCubicBezier(0,t,e,n[0],n[1],n[2],n[3],n[4],n[5]),o=.01;o<=1;o+=.01)r=this.getPointOnCubicBezier(o,t,e,n[0],n[1],n[2],n[3],n[4],n[5]),s+=this.getLineLength(a.x,a.y,r.x,r.y),a=r;return s;case"Q":for(s=0,a=this.getPointOnQuadraticBezier(0,t,e,n[0],n[1],n[2],n[3]),o=.01;o<=1;o+=.01)r=this.getPointOnQuadraticBezier(o,t,e,n[0],n[1],n[2],n[3]),s+=this.getLineLength(a.x,a.y,r.x,r.y),a=r;return s;case"A":s=0;var h=n[4],l=n[5],u=n[4]+l,c=Math.PI/180;if(Math.abs(h-u)<c&&(c=Math.abs(h-u)),a=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],h,0),l<0)for(o=h-c;u<o;o-=c)r=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],o,0),s+=this.getLineLength(a.x,a.y,r.x,r.y),a=r;else for(o=h+c;o<u;o+=c)r=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],o,0),s+=this.getLineLength(a.x,a.y,r.x,r.y),a=r;return r=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],u,0),s+=this.getLineLength(a.x,a.y,r.x,r.y)}return 0},this.dataArray=this.parsePathData(e)},D.Element.textPath.prototype=new D.Element.TextElementBase,D.Element.image=function(t){this.base=D.Element.RenderedElementBase,this.base(t);var e=this.getHrefAttribute().value;if(""!=e){var a=e.match(/\.svg$/);if(D.Images.push(this),this.loaded=!1,a)this.img=D.ajax(e),this.loaded=!0;else{this.img=c.createElement("img"),1==D.opts.useCORS&&(this.img.crossOrigin="Anonymous");var r=this;this.img.onload=function(){r.loaded=!0},this.img.onerror=function(){D.log('ERROR: image "'+e+'" not found'),r.loaded=!0},this.img.src=e}this.renderChildren=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y");0!=n&&0!=s&&(t.save(),a?t.drawSvg(this.img,e,i,n,s):(t.translate(e,i),D.AspectRatio(t,this.attribute("preserveAspectRatio").value,n,this.img.width,s,this.img.height,0,0),r.loaded&&(void 0===this.img.complete||this.img.complete)&&t.drawImage(this.img,0,0)),t.restore())},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");return new D.BoundingBox(t,e,t+i,e+n)}}},D.Element.image.prototype=new D.Element.RenderedElementBase,D.Element.g=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(t){for(var e=new D.BoundingBox,i=0;i<this.children.length;i++)e.addBoundingBox(this.children[i].getBoundingBox(t));return e}},D.Element.g.prototype=new D.Element.RenderedElementBase,D.Element.symbol=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.render=function(){}},D.Element.symbol.prototype=new D.Element.RenderedElementBase,D.ParseExternalUrl=function(t){var e=t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/)||[];return e[2]||e[3]||e[4]},D.Element.style=function(t){this.base=D.Element.ElementBase,this.base(t);for(var e="",i=0;i<t.childNodes.length;i++)e+=t.childNodes[i].data;e=e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"");var n=(e=D.compressSpaces(e)).split("}");for(i=0;i<n.length;i++)if(""!=D.trim(n[i]))for(var s=n[i].split("{"),a=s[0].split(","),r=s[1].split(";"),o=0;o<a.length;o++){var h=D.trim(a[o]);if(""!=h){for(var l=D.Styles[h]||{},u=0;u<r.length;u++){var c=r[u].indexOf(":"),f=r[u].substr(0,c),p=r[u].substr(c+1,r[u].length-c);null!=f&&null!=p&&(l[D.trim(f)]=new D.Property(D.trim(f),D.trim(p)))}if(D.Styles[h]=l,D.StylesSpecificity[h]=P(h),"@font-face"==h)for(var d=l["font-family"].value.replace(/"/g,""),m=l.src.value.split(","),y=0;y<m.length;y++)if(0<m[y].indexOf('format("svg")')){var v=D.ParseExternalUrl(m[y]);if(v)for(var g=D.parseXml(D.ajax(v)).getElementsByTagName("font"),x=0;x<g.length;x++){var b=D.CreateElement(g[x]);D.Definitions[d]=b}}}}},D.Element.style.prototype=new D.Element.ElementBase,D.Element.use=function(t){this.base=D.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t),this.attribute("x").hasValue()&&t.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&t.translate(0,this.attribute("y").toPixels("y"))};var n=this.getHrefAttribute().getDefinition();this.path=function(t){null!=n&&n.path(t)},this.elementTransform=function(){if(null!=n&&n.style("transform",!1,!0).hasValue())return new D.Transform(n.style("transform",!1,!0).value)},this.getBoundingBox=function(t){if(null!=n)return n.getBoundingBox(t)},this.renderChildren=function(t){if(null!=n){var e=n;"symbol"==n.type&&((e=new D.Element.svg).type="svg",e.attributes.viewBox=new D.Property("viewBox",n.attribute("viewBox").value),e.attributes.preserveAspectRatio=new D.Property("preserveAspectRatio",n.attribute("preserveAspectRatio").value),e.attributes.overflow=new D.Property("overflow",n.attribute("overflow").value),e.children=n.children),"svg"==e.type&&(this.attribute("width").hasValue()&&(e.attributes.width=new D.Property("width",this.attribute("width").value)),this.attribute("height").hasValue()&&(e.attributes.height=new D.Property("height",this.attribute("height").value)));var i=e.parent;e.parent=null,e.render(t),e.parent=i}}},D.Element.use.prototype=new D.Element.RenderedElementBase,D.Element.mask=function(t){this.base=D.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");if(0==s&&0==a){for(var r=new D.BoundingBox,o=0;o<this.children.length;o++)r.addBoundingBox(this.children[o].getBoundingBox(t));i=Math.floor(r.x1),n=Math.floor(r.y1),s=Math.floor(r.width()),a=Math.floor(r.height())}var h=e.style("mask").value;e.style("mask").value="";var l=d(i+s,n+a),u=l.getContext("2d");D.SetDefaults(u),this.renderChildren(u),new D.Element.feColorMatrix({nodeType:1,childNodes:[],attributes:[{nodeName:"type",value:"luminanceToAlpha"},{nodeName:"includeOpacity",value:"true"}]}).apply(u,0,0,i+s,n+a);var c=d(i+s,n+a),f=c.getContext("2d");D.SetDefaults(f),e.render(f),f.globalCompositeOperation="destination-in",f.fillStyle=u.createPattern(l,"no-repeat"),f.fillRect(0,0,i+s,n+a),t.fillStyle=f.createPattern(c,"no-repeat"),t.fillRect(0,0,i+s,n+a),e.style("mask").value=h},this.render=function(){}},D.Element.mask.prototype=new D.Element.ElementBase,D.Element.clipPath=function(t){this.base=D.Element.ElementBase,this.base(t),this.apply=function(t){var e="undefined"!=typeof CanvasRenderingContext2D,i=t.beginPath,n=t.closePath;e&&(CanvasRenderingContext2D.prototype.beginPath=function(){},CanvasRenderingContext2D.prototype.closePath=function(){}),i.call(t);for(var s=0;s<this.children.length;s++){var a=this.children[s];if(void 0!==a.path){var r=void 0!==a.elementTransform&&a.elementTransform();!r&&a.style("transform",!1,!0).hasValue()&&(r=new D.Transform(a.style("transform",!1,!0).value)),r&&r.apply(t),a.path(t),e&&(CanvasRenderingContext2D.prototype.closePath=n),r&&r.unapply(t)}}n.call(t),t.clip(),e&&(CanvasRenderingContext2D.prototype.beginPath=i,CanvasRenderingContext2D.prototype.closePath=n)},this.render=function(){}},D.Element.clipPath.prototype=new D.Element.ElementBase,D.Element.filter=function(t){this.base=D.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=e.getBoundingBox(t),n=Math.floor(i.x1),s=Math.floor(i.y1),a=Math.floor(i.width()),r=Math.floor(i.height()),o=e.style("filter").value;e.style("filter").value="";for(var h=0,l=0,u=0;u<this.children.length;u++){var c=this.children[u].extraFilterDistance||0;h=Math.max(h,c),l=Math.max(l,c)}var f=d(a+2*h,r+2*l),p=f.getContext("2d");D.SetDefaults(p),p.translate(-n+h,-s+l),e.render(p);for(u=0;u<this.children.length;u++)"function"==typeof this.children[u].apply&&this.children[u].apply(p,0,0,a+2*h,r+2*l);t.drawImage(f,0,0,a+2*h,r+2*l,n-h,s-l,a+2*h,r+2*l),e.style("filter",!0).value=o},this.render=function(){}},D.Element.filter.prototype=new D.Element.ElementBase,D.Element.feDropShadow=function(t){this.base=D.Element.ElementBase,this.base(t),this.addStylesFromStyleDefinition(),this.apply=function(){}},D.Element.feDropShadow.prototype=new D.Element.ElementBase,D.Element.feMorphology=function(t){this.base=D.Element.ElementBase,this.base(t),this.apply=function(){}},D.Element.feMorphology.prototype=new D.Element.ElementBase,D.Element.feComposite=function(t){this.base=D.Element.ElementBase,this.base(t),this.apply=function(){}},D.Element.feComposite.prototype=new D.Element.ElementBase,D.Element.feColorMatrix=function(t){this.base=D.Element.ElementBase,this.base(t);var n=D.ToNumberArray(this.attribute("values").value);switch(this.attribute("type").valueOrDefault("matrix")){case"saturate":var e=n[0];n=[.213+.787*e,.715-.715*e,.072-.072*e,0,0,.213-.213*e,.715+.285*e,.072-.072*e,0,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var s=n[0]*Math.PI/180,i=function(t,e,i){return t+Math.cos(s)*e+Math.sin(s)*i};n=[i(.213,.787,-.213),i(.715,-.715,-.715),i(.072,-.072,.928),0,0,i(.213,-.213,.143),i(.715,.285,.14),i(.072,-.072,-.283),0,0,i(.213,-.213,-.787),i(.715,-.715,.715),i(.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}function d(t,e,i,n,s,a){return t[i*n*4+4*e+a]}function m(t,e,i,n,s,a,r){t[i*n*4+4*e+a]=r}function y(t,e){var i=n[t];return i*(i<0?e-255:e)}var v=this.attribute("includeOpacity").hasValue();this.apply=function(t,e,i,n,s){var a=t.getImageData(0,0,n,s);for(i=0;i<s;i++)for(e=0;e<n;e++){var r=d(a.data,e,i,n,0,0),o=d(a.data,e,i,n,0,1),h=d(a.data,e,i,n,0,2),l=d(a.data,e,i,n,0,3),u=y(0,r)+y(1,o)+y(2,h)+y(3,l)+y(4,1),c=y(5,r)+y(6,o)+y(7,h)+y(8,l)+y(9,1),f=y(10,r)+y(11,o)+y(12,h)+y(13,l)+y(14,1),p=y(15,r)+y(16,o)+y(17,h)+y(18,l)+y(19,1);v&&(u=c=f=0,p*=l/255),m(a.data,e,i,n,0,0,u),m(a.data,e,i,n,0,1,c),m(a.data,e,i,n,0,2,f),m(a.data,e,i,n,0,3,p)}t.clearRect(0,0,n,s),t.putImageData(a,0,0)}},D.Element.feColorMatrix.prototype=new D.Element.ElementBase,D.Element.feGaussianBlur=function(t){this.base=D.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,e,i,n,s){v&&void 0!==v.canvasRGBA?(t.canvas.id=D.UniqueId(),t.canvas.style.display="none",c.body.appendChild(t.canvas),v.canvasRGBA(t.canvas,e,i,n,s,this.blurRadius),c.body.removeChild(t.canvas)):D.log("ERROR: StackBlur.js must be included for blur to work")}},D.Element.feGaussianBlur.prototype=new D.Element.ElementBase,D.Element.title=function(){},D.Element.title.prototype=new D.Element.ElementBase,D.Element.desc=function(){},D.Element.desc.prototype=new D.Element.ElementBase,D.Element.MISSING=function(t){D.log("ERROR: Element '"+t.nodeName+"' not yet implemented.")},D.Element.MISSING.prototype=new D.Element.ElementBase,D.CreateElement=function(t){var e=t.nodeName.replace(/^[^:]+:/,"");e=e.replace(/\-/g,"");var i=null;return(i=void 0!==D.Element[e]?new D.Element[e](t):new D.Element.MISSING(t)).type=t.nodeName,i},D.load=function(t,e){D.loadXml(t,D.ajax(e))},D.loadXml=function(t,e){D.loadXmlDoc(t,D.parseXml(e))},D.loadXmlDoc=function(a,r){D.init(a);var i=function(t){for(var e=a.canvas;e;)t.x-=e.offsetLeft,t.y-=e.offsetTop,e=e.offsetParent;return l.scrollX&&(t.x+=l.scrollX),l.scrollY&&(t.y+=l.scrollY),t};1!=D.opts.ignoreMouse&&(a.canvas.onclick=function(t){var e=i(new D.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));D.Mouse.onclick(e.x,e.y)},a.canvas.onmousemove=function(t){var e=i(new D.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));D.Mouse.onmousemove(e.x,e.y)});var o=D.CreateElement(r.documentElement);o.root=!0,o.addStylesFromStyleDefinition();var h=!0,n=function(){D.ViewPort.Clear(),a.canvas.parentNode?D.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth,a.canvas.parentNode.clientHeight):D.ViewPort.SetCurrent(800,600),1!=D.opts.ignoreDimensions&&(h||null==D.opts.scaleWidth&&null==D.opts.scaleHeight)&&(o.style("width").hasValue()&&(a.canvas.width=o.style("width").toPixels("x"),a.canvas.style&&(a.canvas.style.width=a.canvas.width+"px")),o.style("height").hasValue()&&(a.canvas.height=o.style("height").toPixels("y"),a.canvas.style&&(a.canvas.style.height=a.canvas.height+"px")));var t=a.canvas.clientWidth||a.canvas.width,e=a.canvas.clientHeight||a.canvas.height;if(1==D.opts.ignoreDimensions&&o.style("width").hasValue()&&o.style("height").hasValue()&&(t=o.style("width").toPixels("x"),e=o.style("height").toPixels("y")),D.ViewPort.SetCurrent(t,e),null!=D.opts.offsetX&&(o.attribute("x",!0).value=D.opts.offsetX),null!=D.opts.offsetY&&(o.attribute("y",!0).value=D.opts.offsetY),null!=D.opts.scaleWidth||null!=D.opts.scaleHeight){var i=null,n=null,s=D.ToNumberArray(o.attribute("viewBox").value);null!=D.opts.scaleWidth&&(o.attribute("width").hasValue()?i=o.attribute("width").toPixels("x")/D.opts.scaleWidth:isNaN(s[2])||(i=s[2]/D.opts.scaleWidth)),null!=D.opts.scaleHeight&&(o.attribute("height").hasValue()?n=o.attribute("height").toPixels("y")/D.opts.scaleHeight:isNaN(s[3])||(n=s[3]/D.opts.scaleHeight)),null==i&&(i=n),null==n&&(n=i),o.attribute("width",!0).value=D.opts.scaleWidth,o.attribute("height",!0).value=D.opts.scaleHeight,o.style("transform",!0,!0).value+=" scale("+1/i+","+1/n+")"}1!=D.opts.ignoreClear&&a.clearRect(0,0,t,e),o.render(a),h&&(h=!1,"function"==typeof D.opts.renderCallback&&D.opts.renderCallback(r))},s=!0;D.ImagesLoaded()&&(s=!1,n()),D.intervalID=setInterval(function(){var t=!1;if(s&&D.ImagesLoaded()&&(t=!(s=!1)),1!=D.opts.ignoreMouse&&(t=t||D.Mouse.hasEvents()),1!=D.opts.ignoreAnimation)for(var e=0;e<D.Animations.length;e++){var i=D.Animations[e].update(1e3/D.FRAMERATE);t=t||i}"function"==typeof D.opts.forceRedraw&&1==D.opts.forceRedraw()&&(t=!0),t&&(n(),D.Mouse.runEvents())},1e3/D.FRAMERATE)},D.stop=function(){D.intervalID&&clearInterval(D.intervalID)},D.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(t,e){this.events.push({type:"onclick",x:t,y:e,run:function(t){t.onclick&&t.onclick()}})},this.onmousemove=function(t,e){this.events.push({type:"onmousemove",x:t,y:e,run:function(t){t.onmousemove&&t.onmousemove()}})},this.eventElements=[],this.checkPath=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInPath&&e.isPointInPath(n.x,n.y)&&(this.eventElements[i]=t)}},this.checkBoundingBox=function(t,e){if(e)for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInBox(n.x,n.y)&&(this.eventElements[i]=t)}},this.runEvents=function(){D.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++)for(var e=this.events[t],i=this.eventElements[t];i;)e.run(i),i=i.parent;this.events=[],this.eventElements=[]}},D}"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(t,e,i,n,s,a){var r={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:i,scaleWidth:n,scaleHeight:s};for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);p(this.canvas,t,r)}),p._build=m,t.exports=p}(t={exports:{}},t.exports),t.exports});

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/

module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) {
                this.alpha = channels[3];
            }
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.alpha = (this.alpha < 0) ? 0 : ((this.alpha > 1.0 || isNaN(this.alpha)) ? 1.0 : this.alpha);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toRGBA = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurStack", function() { return BlurStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return processImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGBA", function() { return processCanvasRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGB", function() { return processCanvasRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGBA", function() { return processImageDataRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGB", function() { return processImageDataRGB; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}
* @module StackBlur
* @version 0.5
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }

  if (!img || !('naturalWidth' in img)) {
    return;
  }

  var w = img.naturalWidth;
  var h = img.naturalHeight;

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || !('getContext' in canvas)) {
    return;
  }

  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */


function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method in processCanvasRGB(A) calls!');
  }

  var context = canvas.getContext('2d');

  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, aSum, rOutSum, gOutSum, bOutSum, aOutSum, rInSum, gInSum, bInSum, aInSum, pr, pg, pb, pa, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = aInSum = rSum = gSum = bSum = aSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      aSum += (stack.a = pa = pixels[p + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = aSum * mulSum >> shgSum;

      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (rSum * mulSum >> shgSum) * pa;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      aInSum += stackIn.a = pixels[p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = aInSum = rInSum = gSum = bSum = aSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      aSum += (stack.a = pa = pixels[yi + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = aSum * mulSum >> shgSum;

      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (rSum * mulSum >> shgSum) * pa;
        pixels[p + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[p + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      aSum += aInSum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, rOutSum, gOutSum, bOutSum, rInSum, gInSum, bInSum, pr, pg, pb, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = rSum = gSum = bSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >> shgSum;
      pixels[yi + 1] = gSum * mulSum >> shgSum;
      pixels[yi + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = rInSum = gSum = bSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = rSum * mulSum >> shgSum;
      pixels[p + 1] = gSum * mulSum >> shgSum;
      pixels[p + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 *
 */


var BlurStack = function BlurStack() {
  _classCallCheck(this, BlurStack);

  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};




/***/ })

});
//# sourceMappingURL=16.js.map