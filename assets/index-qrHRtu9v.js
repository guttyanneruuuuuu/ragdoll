(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const pa="169",Wl=0,Fa=1,Xl=2,$o=1,Qo=2,ii=3,Si=0,Rt=1,ri=2,yi=0,cr=1,Ss=2,Ba=3,ka=4,jl=5,Ni=100,ql=101,Yl=102,Kl=103,Zl=104,Jl=200,$l=201,Ql=202,ec=203,Es=204,Ts=205,tc=206,ic=207,rc=208,nc=209,sc=210,ac=211,oc=212,lc=213,cc=214,ws=0,bs=1,As=2,dr=3,Rs=4,Cs=5,Ls=6,Ps=7,el=0,hc=1,uc=2,Mi=0,dc=1,pc=2,fc=3,mc=4,gc=5,_c=6,vc=7,tl=300,pr=301,fr=302,Us=303,Ds=304,Dn=306,Is=1e3,zi=1001,Ns=1002,zt=1003,xc=1004,Vr=1005,Gt=1006,Gn=1007,Fi=1008,ai=1009,il=1010,rl=1011,Dr=1012,fa=1013,ki=1014,ni=1015,zr=1016,ma=1017,ga=1018,mr=1020,nl=35902,sl=1021,al=1022,Wt=1023,ol=1024,ll=1025,hr=1026,gr=1027,cl=1028,_a=1029,hl=1030,va=1031,xa=1033,gn=33776,_n=33777,vn=33778,xn=33779,Os=35840,zs=35841,Fs=35842,Bs=35843,ks=36196,Hs=37492,Gs=37496,Vs=37808,Ws=37809,Xs=37810,js=37811,qs=37812,Ys=37813,Ks=37814,Zs=37815,Js=37816,$s=37817,Qs=37818,ea=37819,ta=37820,ia=37821,yn=36492,ra=36494,na=36495,ul=36283,sa=36284,aa=36285,oa=36286,yc=3200,Mc=3201,dl=0,Sc=1,vi="",qt="srgb",Ti="srgb-linear",ya="display-p3",In="display-p3-linear",wn="linear",Ze="srgb",bn="rec709",An="p3",Xi=7680,Ha=519,Ec=512,Tc=513,wc=514,pl=515,bc=516,Ac=517,Rc=518,Cc=519,Ga=35044,Va="300 es",si=2e3,Rn=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wa=1234567;const Pr=Math.PI/180,Ir=180/Math.PI;function xr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function Ma(r,e){return(r%e+e)%e}function Lc(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Pc(r,e,t){return r!==e?(t-r)/(e-r):0}function Ur(r,e,t){return(1-t)*r+t*e}function Uc(r,e,t,i){return Ur(r,e,1-Math.exp(-t*i))}function Dc(r,e=1){return e-Math.abs(Ma(r,e*2)-e)}function Ic(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Oc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zc(r,e){return r+Math.random()*(e-r)}function Fc(r){return r*(.5-Math.random())}function Bc(r){r!==void 0&&(Wa=r);let e=Wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kc(r){return r*Pr}function Hc(r){return r*Ir}function Gc(r){return(r&r-1)===0&&r!==0}function Vc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xc(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*f,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*f,o*c);break;case"ZXZ":r.set(l*f,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jc={DEG2RAD:Pr,RAD2DEG:Ir,generateUUID:xr,clamp:Tt,euclideanModulo:Ma,mapLinear:Lc,inverseLerp:Pc,lerp:Ur,damp:Uc,pingpong:Dc,smoothstep:Ic,smootherstep:Nc,randInt:Oc,randFloat:zc,randFloatSpread:Fc,seededRandom:Bc,degToRad:kc,radToDeg:Hc,isPowerOfTwo:Gc,ceilPowerOfTwo:Vc,floorPowerOfTwo:Wc,setQuaternionFromProperEuler:Xc,normalize:yt,denormalize:sr};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,n,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],m=i[5],_=i[8],x=n[0],d=n[3],p=n[6],E=n[1],S=n[4],T=n[7],I=n[2],A=n[5],b=n[8];return s[0]=a*x+o*E+l*I,s[3]=a*d+o*S+l*A,s[6]=a*p+o*T+l*b,s[1]=c*x+h*E+f*I,s[4]=c*d+h*S+f*A,s[7]=c*p+h*T+f*b,s[2]=u*x+m*E+_*I,s[5]=u*d+m*S+_*A,s[8]=u*p+m*T+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,m=c*s-a*l,_=t*f+i*u+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vn.makeScale(e,t)),this}rotate(e){return this.premultiply(Vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vn=new Le;function fl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Cn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qc(){const r=Cn("canvas");return r.style.display="block",r}const Xa={};function Mn(r){r in Xa||(Xa[r]=!0,console.warn(r))}function Yc(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Kc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zc(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ja=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qa=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Ti]:{transfer:wn,primaries:bn,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[qt]:{transfer:Ze,primaries:bn,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[In]:{transfer:wn,primaries:An,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(qa),fromReference:r=>r.applyMatrix3(ja)},[ya]:{transfer:Ze,primaries:An,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(qa),fromReference:r=>r.applyMatrix3(ja).convertLinearToSRGB()}},Jc=new Set([Ti,In]),Ge={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Jc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Mr[e].toReference,n=Mr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Mr[r].primaries},getTransfer:function(r){return r===vi?wn:Mr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Mr[e].luminanceCoefficients)}};function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ji;class $c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Cn("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ur(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xn(n[a].image)):s.push(Xn(n[a]))}else s=Xn(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class Ct extends vr{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=zi,n=zi,s=Gt,a=Fi,o=Wt,l=ai,c=Ct.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=xr(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=tl;Ct.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],f=a[5],u=a[9],m=a[2],_=a[6],x=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+_)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,E=(f+1)/2,S=(x+1)/2,T=(l+h)/4,I=(c+m)/4,A=(u+_)/4;return p>E&&p>S?p<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(p),n=T/i,s=I/i):E>S?E<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(E),i=T/n,s=A/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=I/s,n=A/s),this.set(i,n,s,t),this}let d=Math.sqrt((_-u)*(_-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(d)<.001&&(d=1),this.x=(_-u)/d,this.y=(c-m)/d,this.z=(h-l)/d,this.w=Math.acos((o+f+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ct(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gl extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3];const u=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==u||c!==m||h!==_){let d=1-o;const p=l*u+c*m+h*_+f*x,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),A=Math.atan2(I,p*E);d=Math.sin(d*A)/I,o=Math.sin(o*A)/I}const T=o*E;if(l=l*d+u*T,c=c*d+m*T,h=h*d+_*T,f=f*d+x*T,d===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=I,c*=I,h*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*f+l*m-c*u,e[t+1]=l*_+h*u+c*f-o*m,e[t+2]=c*_+h*m+o*u-l*f,e[t+3]=h*_-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),f=o(s/2),u=l(i/2),m=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-n)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=n*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=n+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jn.copy(this).projectOnVector(e),this.sub(jn)}reflect(e){return this.sub(jn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jn=new D,Ya=new Fr;class Br{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(s,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Xr.subVectors(this.max,Sr),qi.subVectors(e.a,Sr),Yi.subVectors(e.b,Sr),Ki.subVectors(e.c,Sr),hi.subVectors(Yi,qi),ui.subVectors(Ki,Yi),Ai.subVectors(qi,Ki);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ai.z,Ai.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ai.z,0,-Ai.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ai.y,Ai.x,0];return!qn(t,qi,Yi,Ki,Xr)||(t=[1,0,0,0,1,0,0,0,1],!qn(t,qi,Yi,Ki,Xr))?!1:(jr.crossVectors(hi,ui),t=[jr.x,jr.y,jr.z],qn(t,qi,Yi,Ki,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new D,new D,new D,new D,new D,new D,new D,new D],Bt=new D,Wr=new Br,qi=new D,Yi=new D,Ki=new D,hi=new D,ui=new D,Ai=new D,Sr=new D,Xr=new D,jr=new D,Ri=new D;function qn(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=n.x*Math.abs(Ri.x)+n.y*Math.abs(Ri.y)+n.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rh=new Br,Er=new D,Yn=new D;class kr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Er,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Yn)),this.expandByPoint(Er.copy(e.center).sub(Yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new D,Kn=new D,qr=new D,di=new D,Zn=new D,Yr=new D,Jn=new D;class Sa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Kn.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Kn);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=di.dot(this.direction),l=-di.dot(qr),c=di.lengthSq(),h=Math.abs(1-a*a);let f,u,m,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){const x=1/h;f*=x,u*=x,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Kn).addScaledVector(qr,u),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const i=$t.dot(this.direction),n=$t.dot($t)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,i,n,s){Zn.subVectors(t,e),Yr.subVectors(i,e),Jn.crossVectors(Zn,Yr);let a=this.direction.dot(Jn),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(di,Yr));if(l<0)return null;const c=o*this.direction.dot(Zn.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(Jn);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,n,s,a,o,l,c,h,f,u,m,_,x,d){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,f,u,m,_,x,d)}set(e,t,i,n,s,a,o,l,c,h,f,u,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*f,_=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*f,_=c*h,x=c*f;t[0]=u+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*f,_=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*f,_=o*h,x=o*f;t[0]=l*h,t[4]=_*c-m,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=_*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+_,t[10]=u-x*f}else if(e.order==="XZY"){const u=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nh,e,sh)}lookAt(e,t,i){const n=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),pi.crossVectors(i,Ut),pi.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),pi.crossVectors(i,Ut)),pi.normalize(),Kr.crossVectors(Ut,pi),n[0]=pi.x,n[4]=Kr.x,n[8]=Ut.x,n[1]=pi.y,n[5]=Kr.y,n[9]=Ut.y,n[2]=pi.z,n[6]=Kr.z,n[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],E=i[3],S=i[7],T=i[11],I=i[15],A=n[0],b=n[4],U=n[8],W=n[12],g=n[1],M=n[5],O=n[9],B=n[13],G=n[2],K=n[6],H=n[10],$=n[14],V=n[3],ie=n[7],fe=n[11],xe=n[15];return s[0]=a*A+o*g+l*G+c*V,s[4]=a*b+o*M+l*K+c*ie,s[8]=a*U+o*O+l*H+c*fe,s[12]=a*W+o*B+l*$+c*xe,s[1]=h*A+f*g+u*G+m*V,s[5]=h*b+f*M+u*K+m*ie,s[9]=h*U+f*O+u*H+m*fe,s[13]=h*W+f*B+u*$+m*xe,s[2]=_*A+x*g+d*G+p*V,s[6]=_*b+x*M+d*K+p*ie,s[10]=_*U+x*O+d*H+p*fe,s[14]=_*W+x*B+d*$+p*xe,s[3]=E*A+S*g+T*G+I*V,s[7]=E*b+S*M+T*K+I*ie,s[11]=E*U+S*O+T*H+I*fe,s[15]=E*W+S*B+T*$+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15];return _*(+s*l*f-n*c*f-s*o*u+i*c*u+n*o*m-i*l*m)+x*(+t*l*m-t*c*u+s*a*u-n*a*m+n*c*h-s*l*h)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*h-i*c*h)+p*(-n*o*h-t*l*f+t*o*u+n*a*f-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],E=f*d*c-x*u*c+x*l*m-o*d*m-f*l*p+o*u*p,S=_*u*c-h*d*c-_*l*m+a*d*m+h*l*p-a*u*p,T=h*x*c-_*f*c+_*o*m-a*x*m-h*o*p+a*f*p,I=_*f*l-h*x*l-_*o*u+a*x*u+h*o*d-a*f*d,A=t*E+i*S+n*T+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=E*b,e[1]=(x*u*s-f*d*s-x*n*m+i*d*m+f*n*p-i*u*p)*b,e[2]=(o*d*s-x*l*s+x*n*c-i*d*c-o*n*p+i*l*p)*b,e[3]=(f*l*s-o*u*s-f*n*c+i*u*c+o*n*m-i*l*m)*b,e[4]=S*b,e[5]=(h*d*s-_*u*s+_*n*m-t*d*m-h*n*p+t*u*p)*b,e[6]=(_*l*s-a*d*s-_*n*c+t*d*c+a*n*p-t*l*p)*b,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*m+t*l*m)*b,e[8]=T*b,e[9]=(_*f*s-h*x*s-_*i*m+t*x*m+h*i*p-t*f*p)*b,e[10]=(a*x*s-_*o*s+_*i*c-t*x*c-a*i*p+t*o*p)*b,e[11]=(h*o*s-a*f*s-h*i*c+t*f*c+a*i*m-t*o*m)*b,e[12]=I*b,e[13]=(h*x*n-_*f*n+_*i*u-t*x*u-h*i*d+t*f*d)*b,e[14]=(_*o*n-a*x*n-_*i*l+t*x*l+a*i*d-t*o*d)*b,e[15]=(a*f*n-h*o*n+h*i*l-t*f*l-a*i*u+t*o*u)*b,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,m=s*h,_=s*f,x=a*h,d=a*f,p=o*f,E=l*c,S=l*h,T=l*f,I=i.x,A=i.y,b=i.z;return n[0]=(1-(x+p))*I,n[1]=(m+T)*I,n[2]=(_-S)*I,n[3]=0,n[4]=(m-T)*A,n[5]=(1-(u+p))*A,n[6]=(d+E)*A,n[7]=0,n[8]=(_+S)*b,n[9]=(d-E)*b,n[10]=(1-(u+x))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Zi.set(n[0],n[1],n[2]).length();const a=Zi.set(n[4],n[5],n[6]).length(),o=Zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],kt.copy(this);const l=1/s,c=1/a,h=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=si){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),f=(t+e)/(t-e),u=(i+n)/(i-n);let m,_;if(o===si)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Rn)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=si){const l=this.elements,c=1/(t-e),h=1/(i-n),f=1/(a-s),u=(t+e)*c,m=(i+n)*h;let _,x;if(o===si)_=(a+s)*f,x=-2*f;else if(o===Rn)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new D,kt=new Qe,nh=new D(0,0,0),sh=new D(1,1,1),pi=new D,Kr=new D,Ut=new D,Ka=new Qe,Za=new Fr;class Kt{constructor(e=0,t=0,i=0,n=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],u=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ka,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Za.setFromEuler(this),this.setFromQuaternion(Za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ah=0;const Ja=new D,Ji=new Fr,Qt=new Qe,Zr=new D,Tr=new D,oh=new D,lh=new Fr,$a=new D(1,0,0),Qa=new D(0,1,0),eo=new D(0,0,1),to={type:"added"},ch={type:"removed"},$i={type:"childadded",child:null},$n={type:"childremoved",child:null};class ft extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new Kt,i=new Fr,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Le}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis($a,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(eo,e)}translateOnAxis(e,t){return Ja.copy(e).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($a,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Tr,Zr,this.up):Qt.lookAt(Zr,Tr,this.up),this.quaternion.setFromRotationMatrix(Qt),n&&(Qt.extractRotation(n.matrixWorld),Ji.setFromRotationMatrix(Qt),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(to),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),$n.child=e,this.dispatchEvent($n),$n.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(to),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new D,ei=new D,Qn=new D,ti=new D,Qi=new D,er=new D,io=new D,es=new D,ts=new D,is=new D,rs=new it,ns=new it,ss=new it;class Vt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ht.subVectors(e,t),n.cross(Ht);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ht.subVectors(n,t),ei.subVectors(i,t),Qn.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(ei),l=Ht.dot(Qn),c=ei.dot(ei),h=ei.dot(Qn),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return rs.setScalar(0),ns.setScalar(0),ss.setScalar(0),rs.fromBufferAttribute(e,t),ns.fromBufferAttribute(e,i),ss.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(rs,s.x),a.addScaledVector(ns,s.y),a.addScaledVector(ss,s.z),a}static isFrontFacing(e,t,i,n){return Ht.subVectors(i,t),ei.subVectors(e,t),Ht.cross(ei).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ht.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Qi.subVectors(n,i),er.subVectors(s,i),es.subVectors(e,i);const l=Qi.dot(es),c=er.dot(es);if(l<=0&&c<=0)return t.copy(i);ts.subVectors(e,n);const h=Qi.dot(ts),f=er.dot(ts);if(h>=0&&f<=h)return t.copy(n);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Qi,a);is.subVectors(e,s);const m=Qi.dot(is),_=er.dot(is);if(_>=0&&m<=_)return t.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(er,o);const d=h*_-m*f;if(d<=0&&f-h>=0&&m-_>=0)return io.subVectors(s,n),o=(f-h)/(f-h+(m-_)),t.copy(n).addScaledVector(io,o);const p=1/(d+x+u);return a=x*p,o=u*p,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function as(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=Ma(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,n),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=vl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ge.fromWorkingColorSpace(_t.copy(this),e),Math.round(Tt(_t.r*255,0,255))*65536+Math.round(Tt(_t.g*255,0,255))*256+Math.round(Tt(_t.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(_t.copy(this),t);const i=_t.r,n=_t.g,s=_t.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(n-s)/f+(n<s?6:0);break;case n:l=(s-i)/f+2;break;case s:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=qt){Ge.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,n=_t.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Jr);const i=Ur(fi.h,Jr.h,t),n=Ur(fi.s,Jr.s,t),s=Ur(fi.l,Jr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Pe;Pe.NAMES=vl;let hh=0;class Vi extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=cr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=Ts,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Es&&(i.blendSrc=this.blendSrc),this.blendDst!==Ts&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new D,$r=new Ne;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ga,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class xl extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yl extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uh=0;const Nt=new Qe,os=new ft,tr=new D,Dt=new Br,wr=new Br,dt=new D;class wt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?yl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Dt.min,wr.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,wr.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(wr.min),Dt.expandByPoint(wr.max))}Dt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dt.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),dt.add(tr)),n=Math.max(n,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new D,l[U]=new D;const c=new D,h=new D,f=new D,u=new Ne,m=new Ne,_=new Ne,x=new D,d=new D;function p(U,W,g){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,W),f.fromBufferAttribute(i,g),u.fromBufferAttribute(s,U),m.fromBufferAttribute(s,W),_.fromBufferAttribute(s,g),h.sub(c),f.sub(c),m.sub(u),_.sub(u);const M=1/(m.x*_.y-_.x*m.y);isFinite(M)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(M),o[U].add(x),o[W].add(x),o[g].add(x),l[U].add(d),l[W].add(d),l[g].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,W=E.length;U<W;++U){const g=E[U],M=g.start,O=g.count;for(let B=M,G=M+O;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new D,T=new D,I=new D,A=new D;function b(U){I.fromBufferAttribute(n,U),A.copy(I);const W=o[U];S.copy(W),S.sub(I.multiplyScalar(I.dot(W))).normalize(),T.crossVectors(A,W);const g=T.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,g)}for(let U=0,W=E.length;U<W;++U){const g=E[U],M=g.start,O=g.count;for(let B=M,G=M+O;B<G;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),x=e.getX(u+1),d=e.getX(u+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),h.subVectors(a,s),f.subVectors(n,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(n,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)u[_++]=c[m++]}return new Xt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new Qe,Ci=new Sa,Qr=new kr,no=new D,en=new D,tn=new D,rn=new D,ls=new D,nn=new D,so=new D,sn=new D;class He extends ft{constructor(e=new wt,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){nn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ls.fromBufferAttribute(f,e),a?nn.addScaledVector(ls,h):nn.addScaledVector(ls.sub(t),h))}t.add(nn)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Qr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Qr,no)===null||Ci.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(ro.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(ro),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const d=u[_],p=a[d.materialIndex],E=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,I=S;T<I;T+=3){const A=o.getX(T),b=o.getX(T+1),U=o.getX(T+2);n=an(this,p,e,i,c,h,f,A,b,U),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const E=o.getX(d),S=o.getX(d+1),T=o.getX(d+2);n=an(this,a,e,i,c,h,f,E,S,T),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const d=u[_],p=a[d.materialIndex],E=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,I=S;T<I;T+=3){const A=T,b=T+1,U=T+2;n=an(this,p,e,i,c,h,f,A,b,U),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const E=d,S=d+1,T=d+2;n=an(this,a,e,i,c,h,f,E,S,T),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function dh(r,e,t,i,n,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Si,o),l===null)return null;sn.copy(o),sn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sn);return c<t.near||c>t.far?null:{distance:c,point:sn.clone(),object:r}}function an(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,en),r.getVertexPosition(l,tn),r.getVertexPosition(c,rn);const h=dh(r,e,t,i,en,tn,rn,so);if(h){const f=new D;Vt.getBarycoord(so,en,tn,rn,f),n&&(h.uv=Vt.getInterpolatedAttribute(n,o,l,c,f,new Ne)),s&&(h.uv1=Vt.getInterpolatedAttribute(s,o,l,c,f,new Ne)),a&&(h.normal=Vt.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};Vt.getNormal(en,tn,rn,u.normal),h.face=u,h.barycoord=f}return h}class oi extends wt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function _(x,d,p,E,S,T,I,A,b,U,W){const g=T/b,M=I/U,O=T/2,B=I/2,G=A/2,K=b+1,H=U+1;let $=0,V=0;const ie=new D;for(let fe=0;fe<H;fe++){const xe=fe*M-B;for(let Be=0;Be<K;Be++){const We=Be*g-O;ie[x]=We*E,ie[d]=xe*S,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[d]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Be/b),f.push(1-fe/U),$+=1}}for(let fe=0;fe<U;fe++)for(let xe=0;xe<b;xe++){const Be=u+xe+K*fe,We=u+xe+K*(fe+1),X=u+(xe+1)+K*(fe+1),Q=u+(xe+1)+K*fe;l.push(Be,We,Q),l.push(We,X,Q),V+=6}o.addGroup(m,V,W),m+=V,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const i=_r(r[t]);for(const n in i)e[n]=i[n]}return e}function ph(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ml(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const fh={clone:_r,merge:Mt};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sl extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new D,ao=new Ne,oo=new Ne;class Ot extends Sl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class _h extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ot(ir,rr,e,t);n.layers=this.layers,this.add(n);const s=new Ot(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new Ot(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new Ot(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Ot(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Ot(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class El extends Ct{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vh extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new El(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new oi(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:yi});s.uniforms.tEquirect.value=t;const a=new He(n,s),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Gt),new _h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const cs=new D,xh=new D,yh=new Le;class Di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=cs.subVectors(i,t).cross(xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yh.getNormalMatrix(e),n=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new kr,on=new D;class Ea{constructor(e=new Di,t=new Di,i=new Di,n=new Di,s=new Di,a=new Di){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],f=n[6],u=n[7],m=n[8],_=n[9],x=n[10],d=n[11],p=n[12],E=n[13],S=n[14],T=n[15];if(i[0].setComponents(l-s,u-c,d-m,T-p).normalize(),i[1].setComponents(l+s,u+c,d+m,T+p).normalize(),i[2].setComponents(l+a,u+h,d+_,T+E).normalize(),i[3].setComponents(l-a,u-h,d-_,T-E).normalize(),i[4].setComponents(l-o,u-f,d-x,T-S).normalize(),t===si)i[5].setComponents(l+o,u+f,d+x,T+S).normalize();else if(t===Rn)i[5].setComponents(o,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(on.x=n.normal.x>0?e.max.x:e.min.x,on.y=n.normal.y>0?e.max.y:e.min.y,on.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(on)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tl(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Mh(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){const _=f[u],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,f[u]=x)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}class Nn extends wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,f=e/o,u=t/l,m=[],_=[],x=[],d=[];for(let p=0;p<h;p++){const E=p*u-a;for(let S=0;S<c;S++){const T=S*f-s;_.push(T,-E,0),x.push(0,0,1),d.push(S/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const S=E+c*p,T=E+c*(p+1),I=E+1+c*(p+1),A=E+1+c*p;m.push(S,T,A),m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ce={alphahash_fragment:Sh,alphahash_pars_fragment:Eh,alphamap_fragment:Th,alphamap_pars_fragment:wh,alphatest_fragment:bh,alphatest_pars_fragment:Ah,aomap_fragment:Rh,aomap_pars_fragment:Ch,batching_pars_vertex:Lh,batching_vertex:Ph,begin_vertex:Uh,beginnormal_vertex:Dh,bsdfs:Ih,iridescence_fragment:Nh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Fh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:kh,color_fragment:Hh,color_pars_fragment:Gh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:Jh,colorspace_fragment:$h,colorspace_pars_fragment:Qh,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:fu,envmap_vertex:nu,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:pu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:Su,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:bu,logdepthbuf_vertex:Au,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Lu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Iu,morphcolor_vertex:Nu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:Fu,normal_fragment_begin:Bu,normal_fragment_maps:ku,normal_pars_fragment:Hu,normal_pars_vertex:Gu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Yu,opaque_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:Ju,project_vertex:$u,dithering_fragment:Qu,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:nd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:fd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:yd,background_vert:Md,background_frag:Sd,backgroundCube_vert:Ed,backgroundCube_frag:Td,cube_vert:wd,cube_frag:bd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Ld,equirect_vert:Pd,equirect_frag:Ud,linedashed_vert:Dd,linedashed_frag:Id,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:Fd,meshmatcap_vert:Bd,meshmatcap_frag:kd,meshnormal_vert:Hd,meshnormal_frag:Gd,meshphong_vert:Vd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:jd,meshtoon_vert:qd,meshtoon_frag:Yd,points_vert:Kd,points_frag:Zd,shadow_vert:Jd,shadow_frag:$d,sprite_vert:Qd,sprite_frag:ep},te={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Yt={basic:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Mt([te.points,te.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Mt([te.common,te.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Mt([te.sprite,te.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Mt([te.common,te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Mt([te.lights,te.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Yt.physical={uniforms:Mt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const ln={r:0,b:0,g:0},Pi=new Kt,tp=new Qe;function ip(r,e,t,i,n,s,a){const o=new Pe(0);let l=s===!0?0:1,c,h,f=null,u=0,m=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1;const T=_(E);T===null?p(o,l):T&&T.isColor&&(p(T,1),S=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(E,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===Dn)?(h===void 0&&(h=new He(new oi(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:_r(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Pi.copy(S.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(Pi)),h.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ze,(f!==T||u!==T.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=T,u=T.version,m=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new He(new Nn(2,2),new Ei({name:"BackgroundMaterial",uniforms:_r(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ze,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||u!==T.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=T,u=T.version,m=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(ln,Ml(r)),i.buffers.color.setClear(ln.r,ln.g,ln.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:x,addToRenderList:d}}function rp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(g,M,O,B,G){let K=!1;const H=f(B,O,M);s!==H&&(s=H,c(s.object)),K=m(g,B,O,G),K&&_(g,B,O,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(g,M,O,B),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(g){return r.bindVertexArray(g)}function h(g){return r.deleteVertexArray(g)}function f(g,M,O){const B=O.wireframe===!0;let G=i[g.id];G===void 0&&(G={},i[g.id]=G);let K=G[M.id];K===void 0&&(K={},G[M.id]=K);let H=K[B];return H===void 0&&(H=u(l()),K[B]=H),H}function u(g){const M=[],O=[],B=[];for(let G=0;G<t;G++)M[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:O,attributeDivisors:B,object:g,attributes:{},index:null}}function m(g,M,O,B){const G=s.attributes,K=M.attributes;let H=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){const ie=G[V];let fe=K[V];if(fe===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(fe=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(fe=g.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function _(g,M,O,B){const G={},K=M.attributes;let H=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){let ie=K[V];ie===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ie=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ie=g.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),G[V]=fe,H++}s.attributes=G,s.attributesNum=H,s.index=B}function x(){const g=s.newAttributes;for(let M=0,O=g.length;M<O;M++)g[M]=0}function d(g){p(g,0)}function p(g,M){const O=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;O[g]=1,B[g]===0&&(r.enableVertexAttribArray(g),B[g]=1),G[g]!==M&&(r.vertexAttribDivisor(g,M),G[g]=M)}function E(){const g=s.newAttributes,M=s.enabledAttributes;for(let O=0,B=M.length;O<B;O++)M[O]!==g[O]&&(r.disableVertexAttribArray(O),M[O]=0)}function S(g,M,O,B,G,K,H){H===!0?r.vertexAttribIPointer(g,M,O,G,K):r.vertexAttribPointer(g,M,O,B,G,K)}function T(g,M,O,B){x();const G=B.attributes,K=O.getAttributes(),H=M.defaultAttributeValues;for(const $ in K){const V=K[$];if(V.location>=0){let ie=G[$];if(ie===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(ie=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(ie=g.instanceColor)),ie!==void 0){const fe=ie.normalized,xe=ie.itemSize,Be=e.get(ie);if(Be===void 0)continue;const We=Be.buffer,X=Be.type,Q=Be.bytesPerElement,de=X===r.INT||X===r.UNSIGNED_INT||ie.gpuType===fa;if(ie.isInterleavedBufferAttribute){const le=ie.data,Ae=le.stride,Me=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,le.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Oe=0;Oe<V.locationSize;Oe++)S(V.location+Oe,xe/V.locationSize,X,fe,Ae*Q,(Me+xe/V.locationSize*Oe)*Q,de)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,ie.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<V.locationSize;le++)d(V.location+le);r.bindBuffer(r.ARRAY_BUFFER,We);for(let le=0;le<V.locationSize;le++)S(V.location+le,xe/V.locationSize,X,fe,xe*Q,xe/V.locationSize*le*Q,de)}}else if(H!==void 0){const fe=H[$];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(V.location,fe);break;case 3:r.vertexAttrib3fv(V.location,fe);break;case 4:r.vertexAttrib4fv(V.location,fe);break;default:r.vertexAttrib1fv(V.location,fe)}}}}E()}function I(){U();for(const g in i){const M=i[g];for(const O in M){const B=M[O];for(const G in B)h(B[G].object),delete B[G];delete M[O]}delete i[g]}}function A(g){if(i[g.id]===void 0)return;const M=i[g.id];for(const O in M){const B=M[O];for(const G in B)h(B[G].object),delete B[G];delete M[O]}delete i[g.id]}function b(g){for(const M in i){const O=i[M];if(O[g.id]===void 0)continue;const B=O[g.id];for(const G in B)h(B[G].object),delete B[G];delete O[g.id]}}function U(){W(),a=!0,s!==n&&(s=n,c(s.object))}function W(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:U,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:E}}function np(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(r.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let u=0;for(let m=0;m<f;m++)u+=h[m];t.update(u,i,1)}function l(c,h,f,u){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x];for(let x=0;x<u.length;x++)t.update(_,i,u[x])}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sp(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){return!(b!==Wt&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const U=b===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ai&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ni&&!U)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:I,maxSamples:A}}function ap(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new Di,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||n;return n=u,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){const _=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,p=r.get(f);if(!n||_===null||_.length===0||s&&!d)s?h(null):c();else{const E=s?0:i,S=E*4;let T=p.clippingState||null;l.value=T,T=h(_,u,S,m);for(let I=0;I!==S;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,m,_){const x=f!==null?f.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const p=m+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let S=0,T=m;S!==x;++S,T+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function op(r){let e=new WeakMap;function t(a,o){return o===Us?a.mapping=pr:o===Ds&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Us||o===Ds)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vh(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wl extends Sl{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,lo=[.125,.215,.35,.446,.526,.582],Oi=20,hs=new wl,co=new Pe;let us=null,ds=0,ps=0,fs=!1;const Ii=(1+Math.sqrt(5))/2,nr=1/Ii,ho=[new D(-Ii,nr,0),new D(Ii,nr,0),new D(-nr,0,Ii),new D(nr,0,Ii),new D(0,Ii,-nr),new D(0,Ii,nr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us,ds,ps),this._renderer.xr.enabled=fs,e.scissorTest=!1,cn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:zr,format:Wt,colorSpace:Ti,depthBuffer:!1},n=po(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return n}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,i,n){const s=new Ot(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(co),l.toneMapping=Mi,l.autoClear=!1;const f=new Nr({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),u=new He(new oi,f);let m=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,m=!0):(f.color.copy(co),m=!0);for(let x=0;x<6;x++){const d=x%3;d===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):d===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));const p=this._cubeSize;cn(n,d*p,x>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===pr||e.mapping===fr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;cn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ho[(n-s-1)%ho.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new He(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Oi-1),x=s/_,d=isFinite(s)?1+Math.floor(h*x):Oi;d>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Oi}`);const p=[];let E=0;for(let b=0;b<Oi;++b){const U=b/x,W=Math.exp(-U*U/2);p.push(W),b===0?E+=W:b<d&&(E+=2*W)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;const T=this._sizeLods[n],I=3*T*(n>S-ar?n-S+ar:0),A=4*(this._cubeSize-T);cn(t,I,A,3*T,2*T),l.setRenderTarget(t),l.render(f,hs)}}function lp(r){const e=[],t=[],i=[];let n=r;const s=r-ar+1+lo.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-ar?l=lo[a-r+ar-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,d=2,p=1,E=new Float32Array(x*_*m),S=new Float32Array(d*_*m),T=new Float32Array(p*_*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,U=A>2?0:-1,W=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];E.set(W,x*_*A),S.set(u,d*_*A);const g=[A,A,A,A,A,A];T.set(g,p*_*A)}const I=new wt;I.setAttribute("position",new Xt(E,x)),I.setAttribute("uv",new Xt(S,d)),I.setAttribute("faceIndex",new Xt(T,p)),e.push(I),n>ar&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function po(r,e,t){const i=new Hi(r,e,t);return i.texture.mapping=Dn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function cp(r,e,t){const i=new Float32Array(Oi),n=new D(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fo(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function mo(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Us||l===Ds,h=l===pr||l===fr;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new uo(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&n(m)?(t===null&&(t=new uo(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function up(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Mn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function dp(r,e,t,i){const n={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const x=u.morphAttributes[_];for(let d=0,p=x.length;d<p;d++)e.remove(x[d])}u.removeEventListener("dispose",a),delete n[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const _ in u)e.update(u[_],r.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,p=x.length;d<p;d++)e.update(x[d],r.ARRAY_BUFFER)}}function c(f){const u=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let S=0,T=E.length;S<T;S+=3){const I=E[S+0],A=E[S+1],b=E[S+2];u.push(I,A,A,b,b,I)}}else if(_!==void 0){const E=_.array;x=_.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const I=S+0,A=S+1,b=S+2;u.push(I,A,A,b,b,I)}}else return;const d=new(fl(u)?yl:xl)(u,1);d.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function h(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function pp(r,e,t){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,m){r.drawElements(i,m,s,u*a),t.update(m,i,1)}function c(u,m,_){_!==0&&(r.drawElementsInstanced(i,m,s,u*a,_),t.update(m,i,_))}function h(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,_);let x=0;for(let d=0;d<_;d++)x+=m[d];t.update(x,i,1)}function f(u,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)c(u[p]/a,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,x,0,_);let p=0;for(let E=0;E<_;E++)p+=m[E];for(let E=0;E<x.length;E++)t.update(p,i,x[E])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function fp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function mp(r,e,t){const i=new WeakMap,n=new it;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let m=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",m)};u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),d===!0&&(T=3);let I=o.attributes.position.count*T,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const b=new Float32Array(I*A*4*f),U=new gl(b,I,A,f);U.type=ni,U.needsUpdate=!0;const W=T*4;for(let g=0;g<f;g++){const M=p[g],O=E[g],B=S[g],G=I*A*4*g;for(let K=0;K<M.count;K++){const H=K*W;_===!0&&(n.fromBufferAttribute(M,K),b[G+H+0]=n.x,b[G+H+1]=n.y,b[G+H+2]=n.z,b[G+H+3]=0),x===!0&&(n.fromBufferAttribute(O,K),b[G+H+4]=n.x,b[G+H+5]=n.y,b[G+H+6]=n.z,b[G+H+7]=0),d===!0&&(n.fromBufferAttribute(B,K),b[G+H+8]=n.x,b[G+H+9]=n.y,b[G+H+10]=n.z,b[G+H+11]=B.itemSize===4?n.w:1)}}u={count:f,texture:U,size:new Ne(I,A)},i.set(o,u),o.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function gp(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return f}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class bl extends Ct{constructor(e,t,i,n,s,a,o,l,c,h=hr){if(h!==hr&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hr&&(i=ki),i===void 0&&h===gr&&(i=mr),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Al=new Ct,go=new bl(1,1),Rl=new gl,Cl=new ih,Ll=new El,_o=[],vo=[],xo=new Float32Array(16),yo=new Float32Array(9),Mo=new Float32Array(4);function yr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=_o[n];if(s===void 0&&(s=new Float32Array(n),_o[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function On(r,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function _p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Mp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Mo.set(i),r.uniformMatrix2fv(this.addr,!1,Mo),ht(t,i)}}function Sp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;yo.set(i),r.uniformMatrix3fv(this.addr,!1,yo),ht(t,i)}}function Ep(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;xo.set(i),r.uniformMatrix4fv(this.addr,!1,xo),ht(t,i)}}function Tp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Up(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(go.compareFunction=pl,s=go):s=Al,t.setTexture2D(e||s,n)}function Dp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Cl,n)}function Ip(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ll,n)}function Np(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Rl,n)}function Op(r){switch(r){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Lp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Np}}function zp(r,e){r.uniform1fv(this.addr,e)}function Fp(r,e){const t=yr(e,this.size,2);r.uniform2fv(this.addr,t)}function Bp(r,e){const t=yr(e,this.size,3);r.uniform3fv(this.addr,t)}function kp(r,e){const t=yr(e,this.size,4);r.uniform4fv(this.addr,t)}function Hp(r,e){const t=yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Gp(r,e){const t=yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vp(r,e){const t=yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wp(r,e){r.uniform1iv(this.addr,e)}function Xp(r,e){r.uniform2iv(this.addr,e)}function jp(r,e){r.uniform3iv(this.addr,e)}function qp(r,e){r.uniform4iv(this.addr,e)}function Yp(r,e){r.uniform1uiv(this.addr,e)}function Kp(r,e){r.uniform2uiv(this.addr,e)}function Zp(r,e){r.uniform3uiv(this.addr,e)}function Jp(r,e){r.uniform4uiv(this.addr,e)}function $p(r,e,t){const i=this.cache,n=e.length,s=On(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Al,s[a])}function Qp(r,e,t){const i=this.cache,n=e.length,s=On(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Cl,s[a])}function ef(r,e,t){const i=this.cache,n=e.length,s=On(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ll,s[a])}function tf(r,e,t){const i=this.cache,n=e.length,s=On(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Rl,s[a])}function rf(r){switch(r){case 5126:return zp;case 35664:return Fp;case 35665:return Bp;case 35666:return kp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return jp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return tf}}class nf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Op(t.type)}}class sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rf(t.type)}}class af{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const ms=/(\w+)(\])?(\[|\.)?/g;function So(r,e){r.seq.push(e),r.map[e.id]=e}function of(r,e,t){const i=r.name,n=i.length;for(ms.lastIndex=0;;){const s=ms.exec(i),a=ms.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){So(t,c===void 0?new nf(o,r,e):new sf(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new af(o),So(t,h)),t=h}}}class Sn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);of(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Eo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const lf=37297;let cf=0;function hf(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function uf(r){const e=Ge.getPrimaries(Ge.workingColorSpace),t=Ge.getPrimaries(r);let i;switch(e===t?i="":e===An&&t===bn?i="LinearDisplayP3ToLinearSRGB":e===bn&&t===An&&(i="LinearSRGBToLinearDisplayP3"),r){case Ti:case In:return[i,"LinearTransferOETF"];case qt:case ya:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function To(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+hf(r.getShaderSource(e),a)}else return n}function df(r,e){const t=uf(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pf(r,e){let t;switch(e){case dc:t="Linear";break;case pc:t="Reinhard";break;case fc:t="Cineon";break;case mc:t="ACESFilmic";break;case _c:t="AgX";break;case vc:t="Neutral";break;case gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hn=new D;function ff(){Ge.getLuminanceCoefficients(hn);const r=hn.x.toFixed(4),e=hn.y.toFixed(4),t=hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function gf(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _f(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Rr(r){return r!==""}function wo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(r){return r.replace(vf,yf)}const xf=new Map;function yf(r,e){let t=Ce[e];if(t===void 0){const i=xf.get(e);if(i!==void 0)t=Ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(r){return r.replace(Mf,Sf)}function Sf(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ro(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ef(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pr:case fr:e="ENVMAP_TYPE_CUBE";break;case Dn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function bf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case hc:e="ENVMAP_BLENDING_MIX";break;case uc:e="ENVMAP_BLENDING_ADD";break}return e}function Af(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rf(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ef(t),c=Tf(t),h=wf(t),f=bf(t),u=Af(t),m=mf(t),_=gf(s),x=n.createProgram();let d,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(d=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Mi?pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,df("linearToOutputTexel",t.outputColorSpace),ff(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=la(a),a=wo(a,t),a=bo(a,t),o=la(o),o=wo(o,t),o=bo(o,t),a=Ao(a),o=Ao(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+d+a,T=E+p+o,I=Eo(n,n.VERTEX_SHADER,S),A=Eo(n,n.FRAGMENT_SHADER,T);n.attachShader(x,I),n.attachShader(x,A),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function b(M){if(r.debug.checkShaderErrors){const O=n.getProgramInfoLog(x).trim(),B=n.getShaderInfoLog(I).trim(),G=n.getShaderInfoLog(A).trim();let K=!0,H=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,I,A);else{const $=To(n,I,"vertex"),V=To(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+O+`
`+$+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||G==="")&&(H=!1);H&&(M.diagnostics={runnable:K,programLog:O,vertexShader:{log:B,prefix:d},fragmentShader:{log:G,prefix:p}})}n.deleteShader(I),n.deleteShader(A),U=new Sn(n,x),W=_f(n,x)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let W;this.getAttributes=function(){return W===void 0&&b(this),W};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=n.getProgramParameter(x,lf)),g},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let Cf=0;class Lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pf(e),t.set(e,i)),i}}class Pf{constructor(e){this.id=Cf++,this.code=e,this.usedTimes=0}}function Uf(r,e,t,i,n,s,a){const o=new _l,l=new Lf,c=new Set,h=[],f=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,m=n.vertexTextures;let _=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,M,O,B,G){const K=B.fog,H=G.geometry,$=g.isMeshStandardMaterial?B.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||$),ie=V&&V.mapping===Dn?V.image.height:null,fe=x[g.type];g.precision!==null&&(_=n.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Be=xe!==void 0?xe.length:0;let We=0;H.morphAttributes.position!==void 0&&(We=1),H.morphAttributes.normal!==void 0&&(We=2),H.morphAttributes.color!==void 0&&(We=3);let X,Q,de,le;if(fe){const At=Yt[fe];X=At.vertexShader,Q=At.fragmentShader}else X=g.vertexShader,Q=g.fragmentShader,l.update(g),de=l.getVertexShaderID(g),le=l.getFragmentShaderID(g);const Ae=r.getRenderTarget(),Me=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,Xe=!!g.map,ze=!!g.matcap,R=!!V,Lt=!!g.aoMap,Ue=!!g.lightMap,Fe=!!g.bumpMap,Ee=!!g.normalMap,Ke=!!g.displacementMap,be=!!g.emissiveMap,w=!!g.metalnessMap,v=!!g.roughnessMap,N=g.anisotropy>0,q=g.clearcoat>0,Z=g.dispersion>0,j=g.iridescence>0,ge=g.sheen>0,ne=g.transmission>0,he=N&&!!g.anisotropyMap,De=q&&!!g.clearcoatMap,ee=q&&!!g.clearcoatNormalMap,pe=q&&!!g.clearcoatRoughnessMap,Te=j&&!!g.iridescenceMap,we=j&&!!g.iridescenceThicknessMap,ce=ge&&!!g.sheenColorMap,Ie=ge&&!!g.sheenRoughnessMap,Re=!!g.specularMap,qe=!!g.specularColorMap,C=!!g.specularIntensityMap,ae=ne&&!!g.transmissionMap,k=ne&&!!g.thicknessMap,Y=!!g.gradientMap,se=!!g.alphaMap,re=g.alphaTest>0,Ye=!!g.alphaHash,at=!!g.extensions;let bt=Mi;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(bt=r.toneMapping);const ke={shaderID:fe,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:Q,defines:g.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Me,instancingColor:Me&&G.instanceColor!==null,instancingMorph:Me&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ti,alphaToCoverage:!!g.alphaToCoverage,map:Xe,matcap:ze,envMap:R,envMapMode:R&&V.mapping,envMapCubeUVHeight:ie,aoMap:Lt,lightMap:Ue,bumpMap:Fe,normalMap:Ee,displacementMap:m&&Ke,emissiveMap:be,normalMapObjectSpace:Ee&&g.normalMapType===Sc,normalMapTangentSpace:Ee&&g.normalMapType===dl,metalnessMap:w,roughnessMap:v,anisotropy:N,anisotropyMap:he,clearcoat:q,clearcoatMap:De,clearcoatNormalMap:ee,clearcoatRoughnessMap:pe,dispersion:Z,iridescence:j,iridescenceMap:Te,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:ce,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:qe,specularIntensityMap:C,transmission:ne,transmissionMap:ae,thicknessMap:k,gradientMap:Y,opaque:g.transparent===!1&&g.blending===cr&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:re,alphaHash:Ye,combine:g.combine,mapUv:Xe&&d(g.map.channel),aoMapUv:Lt&&d(g.aoMap.channel),lightMapUv:Ue&&d(g.lightMap.channel),bumpMapUv:Fe&&d(g.bumpMap.channel),normalMapUv:Ee&&d(g.normalMap.channel),displacementMapUv:Ke&&d(g.displacementMap.channel),emissiveMapUv:be&&d(g.emissiveMap.channel),metalnessMapUv:w&&d(g.metalnessMap.channel),roughnessMapUv:v&&d(g.roughnessMap.channel),anisotropyMapUv:he&&d(g.anisotropyMap.channel),clearcoatMapUv:De&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:ee&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:we&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&d(g.sheenRoughnessMap.channel),specularMapUv:Re&&d(g.specularMap.channel),specularColorMapUv:qe&&d(g.specularColorMap.channel),specularIntensityMapUv:C&&d(g.specularIntensityMap.channel),transmissionMapUv:ae&&d(g.transmissionMap.channel),thicknessMapUv:k&&d(g.thicknessMap.channel),alphaMapUv:se&&d(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ee||N),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Xe||se),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:bt,decodeVideoTexture:Xe&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===Ze,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ri,flipSided:g.side===Rt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function E(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)M.push(O),M.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(S(M,g),T(M,g),M.push(r.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function S(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function T(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function I(g){const M=x[g.type];let O;if(M){const B=Yt[M];O=fh.clone(B.uniforms)}else O=g.uniforms;return O}function A(g,M){let O;for(let B=0,G=h.length;B<G;B++){const K=h[B];if(K.cacheKey===M){O=K,++O.usedTimes;break}}return O===void 0&&(O=new Rf(r,M,g,s),h.push(O)),O}function b(g){if(--g.usedTimes===0){const M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function U(g){l.remove(g)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:I,acquireProgram:A,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:W}}function Df(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function If(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Co(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lo(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(f,u,m,_,x,d){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:d},r[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=d),e++,p}function o(f,u,m,_,x,d){const p=a(f,u,m,_,x,d);m.transmission>0?i.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(f,u,m,_,x,d){const p=a(f,u,m,_,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||If),i.length>1&&i.sort(u||Co),n.length>1&&n.sort(u||Co)}function h(){for(let f=e,u=r.length;f<u;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Nf(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new Lo,r.set(i,[a])):n>=s.length?(a=new Lo,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Of(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ff=0;function Bf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kf(r){const e=new Of,t=zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new Qe,a=new Qe;function o(c){let h=0,f=0,u=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,E=0,S=0,T=0,I=0,A=0,b=0;c.sort(Bf);for(let W=0,g=c.length;W<g;W++){const M=c[W],O=M.color,B=M.intensity,G=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=O.r*B,f+=O.g*B,u+=O.b*B;else if(M.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(M.sh.coefficients[H],B);b++}else if(M.isDirectionalLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const $=M.shadow,V=t.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=M.shadow.matrix,E++}i.directional[m]=H,m++}else if(M.isSpotLight){const H=e.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=G,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,i.spot[x]=H;const $=M.shadow;if(M.map&&(i.spotLightMap[I]=M.map,I++,$.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,M.castShadow){const V=t.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,T++}x++}else if(M.isRectAreaLight){const H=e.get(M);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),i.rectArea[d]=H,d++}else if(M.isPointLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const $=M.shadow,V=t.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=M.shadow.matrix,S++}i.point[_]=H,_++}else if(M.isHemisphereLight){const H=e.get(M);H.skyColor.copy(M.color).multiplyScalar(B),H.groundColor.copy(M.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}d>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==d||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==T||U.numSpotMaps!==I||U.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,U.directionalLength=m,U.pointLength=_,U.spotLength=x,U.rectAreaLength=d,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=T,U.numSpotMaps=I,U.numLightProbes=b,i.version=Ff++)}function l(c,h){let f=0,u=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),f++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),u++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function Po(r){const e=new kf(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Hf(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new Po(r),e.set(n,[o])):s>=a.length?(o=new Po(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Gf extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vf extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jf(r,e,t){let i=new Ea;const n=new Ne,s=new Ne,a=new it,o=new Gf({depthPacking:Mc}),l=new Vf,c={},h=t.maxTextureSize,f={[Si]:Rt,[Rt]:Si,[ri]:ri},u=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Wf,fragmentShader:Xf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new wt;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let p=this.type;this.render=function(A,b,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const W=r.getRenderTarget(),g=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),O=r.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==ii&&this.type===ii,G=p===ii&&this.type!==ii;for(let K=0,H=A.length;K<H;K++){const $=A[K],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const ie=V.getFrameExtents();if(n.multiply(ie),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ie.x),n.x=s.x*ie.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ie.y),n.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||B===!0||G===!0){const xe=this.type!==ii?{minFilter:zt,magFilter:zt}:{};V.map!==null&&V.map.dispose(),V.map=new Hi(n.x,n.y,xe),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const fe=V.getViewportCount();for(let xe=0;xe<fe;xe++){const Be=V.getViewport(xe);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),O.viewport(a),V.updateMatrices($,xe),i=V.getFrustum(),T(b,U,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&E(V,U),V.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(W,g,M)};function E(A,b){const U=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hi(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,U,u,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,U,m,x,null)}function S(A,b,U,W){let g=null;const M=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)g=M;else if(g=U.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=g.uuid,B=b.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let K=G[B];K===void 0&&(K=g.clone(),G[B]=K,b.addEventListener("dispose",I)),g=K}if(g.visible=b.visible,g.wireframe=b.wireframe,W===ii?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:f[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,U.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const O=r.properties.get(g);O.light=U}return g}function T(A,b,U,W,g){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const O=e.update(A),B=A.material;if(Array.isArray(B)){const G=O.groups;for(let K=0,H=G.length;K<H;K++){const $=G[K],V=B[$.materialIndex];if(V&&V.visible){const ie=S(A,V,W,g);A.onBeforeShadow(r,A,b,U,O,ie,$),r.renderBufferDirect(U,null,O,ie,A,$),A.onAfterShadow(r,A,b,U,O,ie,$)}}}else if(B.visible){const G=S(A,B,W,g);A.onBeforeShadow(r,A,b,U,O,G,null),r.renderBufferDirect(U,null,O,G,A,null),A.onAfterShadow(r,A,b,U,O,G,null)}}const M=A.children;for(let O=0,B=M.length;O<B;O++)T(M[O],b,U,W,g)}function I(A){A.target.removeEventListener("dispose",I);for(const b in c){const U=c[b],W=A.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}const qf={[ws]:bs,[As]:Ls,[Rs]:Ps,[dr]:Cs,[bs]:ws,[Ls]:As,[Ps]:Rs,[Cs]:dr};function Yf(r){function e(){let C=!1;const ae=new it;let k=null;const Y=new it(0,0,0,0);return{setMask:function(se){k!==se&&!C&&(r.colorMask(se,se,se,se),k=se)},setLocked:function(se){C=se},setClear:function(se,re,Ye,at,bt){bt===!0&&(se*=at,re*=at,Ye*=at),ae.set(se,re,Ye,at),Y.equals(ae)===!1&&(r.clearColor(se,re,Ye,at),Y.copy(ae))},reset:function(){C=!1,k=null,Y.set(-1,0,0,0)}}}function t(){let C=!1,ae=!1,k=null,Y=null,se=null;return{setReversed:function(re){ae=re},setTest:function(re){re?de(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(re){k!==re&&!C&&(r.depthMask(re),k=re)},setFunc:function(re){if(ae&&(re=qf[re]),Y!==re){switch(re){case ws:r.depthFunc(r.NEVER);break;case bs:r.depthFunc(r.ALWAYS);break;case As:r.depthFunc(r.LESS);break;case dr:r.depthFunc(r.LEQUAL);break;case Rs:r.depthFunc(r.EQUAL);break;case Cs:r.depthFunc(r.GEQUAL);break;case Ls:r.depthFunc(r.GREATER);break;case Ps:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=re}},setLocked:function(re){C=re},setClear:function(re){se!==re&&(r.clearDepth(re),se=re)},reset:function(){C=!1,k=null,Y=null,se=null}}}function i(){let C=!1,ae=null,k=null,Y=null,se=null,re=null,Ye=null,at=null,bt=null;return{setTest:function(ke){C||(ke?de(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(ke){ae!==ke&&!C&&(r.stencilMask(ke),ae=ke)},setFunc:function(ke,At,Zt){(k!==ke||Y!==At||se!==Zt)&&(r.stencilFunc(ke,At,Zt),k=ke,Y=At,se=Zt)},setOp:function(ke,At,Zt){(re!==ke||Ye!==At||at!==Zt)&&(r.stencilOp(ke,At,Zt),re=ke,Ye=At,at=Zt)},setLocked:function(ke){C=ke},setClear:function(ke){bt!==ke&&(r.clearStencil(ke),bt=ke)},reset:function(){C=!1,ae=null,k=null,Y=null,se=null,re=null,Ye=null,at=null,bt=null}}}const n=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],m=null,_=!1,x=null,d=null,p=null,E=null,S=null,T=null,I=null,A=new Pe(0,0,0),b=0,U=!1,W=null,g=null,M=null,O=null,B=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),K=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=H>=2);let V=null,ie={};const fe=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Be=new it().fromArray(fe),We=new it().fromArray(xe);function X(C,ae,k,Y){const se=new Uint8Array(4),re=r.createTexture();r.bindTexture(C,re),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<k;Ye++)C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ae+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return re}const Q={};Q[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(r.DEPTH_TEST),s.setFunc(dr),Ue(!1),Fe(Fa),de(r.CULL_FACE),R(yi);function de(C){c[C]!==!0&&(r.enable(C),c[C]=!0)}function le(C){c[C]!==!1&&(r.disable(C),c[C]=!1)}function Ae(C,ae){return h[C]!==ae?(r.bindFramebuffer(C,ae),h[C]=ae,C===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),C===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Me(C,ae){let k=u,Y=!1;if(C){k=f.get(ae),k===void 0&&(k=[],f.set(ae,k));const se=C.textures;if(k.length!==se.length||k[0]!==r.COLOR_ATTACHMENT0){for(let re=0,Ye=se.length;re<Ye;re++)k[re]=r.COLOR_ATTACHMENT0+re;k.length=se.length,Y=!0}}else k[0]!==r.BACK&&(k[0]=r.BACK,Y=!0);Y&&r.drawBuffers(k)}function Oe(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const Xe={[Ni]:r.FUNC_ADD,[ql]:r.FUNC_SUBTRACT,[Yl]:r.FUNC_REVERSE_SUBTRACT};Xe[Kl]=r.MIN,Xe[Zl]=r.MAX;const ze={[Jl]:r.ZERO,[$l]:r.ONE,[Ql]:r.SRC_COLOR,[Es]:r.SRC_ALPHA,[sc]:r.SRC_ALPHA_SATURATE,[rc]:r.DST_COLOR,[tc]:r.DST_ALPHA,[ec]:r.ONE_MINUS_SRC_COLOR,[Ts]:r.ONE_MINUS_SRC_ALPHA,[nc]:r.ONE_MINUS_DST_COLOR,[ic]:r.ONE_MINUS_DST_ALPHA,[ac]:r.CONSTANT_COLOR,[oc]:r.ONE_MINUS_CONSTANT_COLOR,[lc]:r.CONSTANT_ALPHA,[cc]:r.ONE_MINUS_CONSTANT_ALPHA};function R(C,ae,k,Y,se,re,Ye,at,bt,ke){if(C===yi){_===!0&&(le(r.BLEND),_=!1);return}if(_===!1&&(de(r.BLEND),_=!0),C!==jl){if(C!==x||ke!==U){if((d!==Ni||S!==Ni)&&(r.blendEquation(r.FUNC_ADD),d=Ni,S=Ni),ke)switch(C){case cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.ONE,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ka:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ka:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,E=null,T=null,I=null,A.set(0,0,0),b=0,x=C,U=ke}return}se=se||ae,re=re||k,Ye=Ye||Y,(ae!==d||se!==S)&&(r.blendEquationSeparate(Xe[ae],Xe[se]),d=ae,S=se),(k!==p||Y!==E||re!==T||Ye!==I)&&(r.blendFuncSeparate(ze[k],ze[Y],ze[re],ze[Ye]),p=k,E=Y,T=re,I=Ye),(at.equals(A)===!1||bt!==b)&&(r.blendColor(at.r,at.g,at.b,bt),A.copy(at),b=bt),x=C,U=!1}function Lt(C,ae){C.side===ri?le(r.CULL_FACE):de(r.CULL_FACE);let k=C.side===Rt;ae&&(k=!k),Ue(k),C.blending===cr&&C.transparent===!1?R(yi):R(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),n.setMask(C.colorWrite);const Y=C.stencilWrite;a.setTest(Y),Y&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(C){W!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),W=C)}function Fe(C){C!==Wl?(de(r.CULL_FACE),C!==g&&(C===Fa?r.cullFace(r.BACK):C===Xl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),g=C}function Ee(C){C!==M&&(K&&r.lineWidth(C),M=C)}function Ke(C,ae,k){C?(de(r.POLYGON_OFFSET_FILL),(O!==ae||B!==k)&&(r.polygonOffset(ae,k),O=ae,B=k)):le(r.POLYGON_OFFSET_FILL)}function be(C){C?de(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function w(C){C===void 0&&(C=r.TEXTURE0+G-1),V!==C&&(r.activeTexture(C),V=C)}function v(C,ae,k){k===void 0&&(V===null?k=r.TEXTURE0+G-1:k=V);let Y=ie[k];Y===void 0&&(Y={type:void 0,texture:void 0},ie[k]=Y),(Y.type!==C||Y.texture!==ae)&&(V!==k&&(r.activeTexture(k),V=k),r.bindTexture(C,ae||Q[C]),Y.type=C,Y.texture=ae)}function N(){const C=ie[V];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(C){Be.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Be.copy(C))}function ce(C){We.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),We.copy(C))}function Ie(C,ae){let k=l.get(ae);k===void 0&&(k=new WeakMap,l.set(ae,k));let Y=k.get(C);Y===void 0&&(Y=r.getUniformBlockIndex(ae,C.name),k.set(C,Y))}function Re(C,ae){const k=l.get(ae).get(C);o.get(ae)!==k&&(r.uniformBlockBinding(ae,k,C.__bindingPointIndex),o.set(ae,k))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,ie={},h={},f=new WeakMap,u=[],m=null,_=!1,x=null,d=null,p=null,E=null,S=null,T=null,I=null,A=new Pe(0,0,0),b=0,U=!1,W=null,g=null,M=null,O=null,B=null,Be.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:de,disable:le,bindFramebuffer:Ae,drawBuffers:Me,useProgram:Oe,setBlending:R,setMaterial:Lt,setFlipSided:Ue,setCullFace:Fe,setLineWidth:Ee,setPolygonOffset:Ke,setScissorTest:be,activeTexture:w,bindTexture:v,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:pe,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Re,texStorage2D:De,texStorage3D:ee,texSubImage2D:j,texSubImage3D:ge,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:we,viewport:ce,reset:qe}}function Uo(r,e,t,i){const n=Kf(i);switch(t){case sl:return r*e;case ol:return r*e;case ll:return r*e*2;case cl:return r*e/n.components*n.byteLength;case _a:return r*e/n.components*n.byteLength;case hl:return r*e*2/n.components*n.byteLength;case va:return r*e*2/n.components*n.byteLength;case al:return r*e*3/n.components*n.byteLength;case Wt:return r*e*4/n.components*n.byteLength;case xa:return r*e*4/n.components*n.byteLength;case gn:case _n:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vn:case xn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zs:case Bs:return Math.max(r,16)*Math.max(e,8)/4;case Os:case Fs:return Math.max(r,8)*Math.max(e,8)/2;case ks:case Hs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case js:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qs:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ys:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zs:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Js:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $s:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yn:case ra:case na:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ul:case sa:return Math.ceil(r/4)*Math.ceil(e/4)*8;case aa:case oa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kf(r){switch(r){case ai:case il:return{byteLength:1,components:1};case Dr:case rl:case zr:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case ki:case fa:case ni:return{byteLength:4,components:1};case nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Zf(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return m?new OffscreenCanvas(w,v):Cn("canvas")}function x(w,v,N){let q=1;const Z=be(w);if((Z.width>N||Z.height>N)&&(q=N/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(q*Z.width),ge=Math.floor(q*Z.height);f===void 0&&(f=_(j,ge));const ne=v?_(j,ge):f;return ne.width=j,ne.height=ge,ne.getContext("2d").drawImage(w,0,0,j,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+ge+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==zt&&w.minFilter!==Gt}function p(w){r.generateMipmap(w)}function E(w,v,N,q,Z=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=v;if(v===r.RED&&(N===r.FLOAT&&(j=r.R32F),N===r.HALF_FLOAT&&(j=r.R16F),N===r.UNSIGNED_BYTE&&(j=r.R8)),v===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(j=r.R8UI),N===r.UNSIGNED_SHORT&&(j=r.R16UI),N===r.UNSIGNED_INT&&(j=r.R32UI),N===r.BYTE&&(j=r.R8I),N===r.SHORT&&(j=r.R16I),N===r.INT&&(j=r.R32I)),v===r.RG&&(N===r.FLOAT&&(j=r.RG32F),N===r.HALF_FLOAT&&(j=r.RG16F),N===r.UNSIGNED_BYTE&&(j=r.RG8)),v===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(j=r.RG8UI),N===r.UNSIGNED_SHORT&&(j=r.RG16UI),N===r.UNSIGNED_INT&&(j=r.RG32UI),N===r.BYTE&&(j=r.RG8I),N===r.SHORT&&(j=r.RG16I),N===r.INT&&(j=r.RG32I)),v===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(j=r.RGB8UI),N===r.UNSIGNED_SHORT&&(j=r.RGB16UI),N===r.UNSIGNED_INT&&(j=r.RGB32UI),N===r.BYTE&&(j=r.RGB8I),N===r.SHORT&&(j=r.RGB16I),N===r.INT&&(j=r.RGB32I)),v===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),N===r.UNSIGNED_INT&&(j=r.RGBA32UI),N===r.BYTE&&(j=r.RGBA8I),N===r.SHORT&&(j=r.RGBA16I),N===r.INT&&(j=r.RGBA32I)),v===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),v===r.RGBA){const ge=Z?wn:Ge.getTransfer(q);N===r.FLOAT&&(j=r.RGBA32F),N===r.HALF_FLOAT&&(j=r.RGBA16F),N===r.UNSIGNED_BYTE&&(j=ge===Ze?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(w,v){let N;return w?v===null||v===ki||v===mr?N=r.DEPTH24_STENCIL8:v===ni?N=r.DEPTH32F_STENCIL8:v===Dr&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===mr?N=r.DEPTH_COMPONENT24:v===ni?N=r.DEPTH_COMPONENT32F:v===Dr&&(N=r.DEPTH_COMPONENT16),N}function T(w,v){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function I(w){const v=w.target;v.removeEventListener("dispose",I),b(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),W(v)}function b(w){const v=i.get(w);if(v.__webglInit===void 0)return;const N=w.source,q=u.get(N);if(q){const Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(w),Object.keys(q).length===0&&u.delete(N)}i.remove(w)}function U(w){const v=i.get(w);r.deleteTexture(v.__webglTexture);const N=w.source,q=u.get(N);delete q[v.__cacheKey],a.memory.textures--}function W(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let q=0,Z=N.length;q<Z;q++){const j=i.get(N[q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(w)}let g=0;function M(){g=0}function O(){const w=g;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),g+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function G(w,v){const N=i.get(w);if(w.isVideoTexture&&Ee(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(N,w,v);return}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+v)}function K(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){We(N,w,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+v)}function H(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){We(N,w,v);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+v)}function $(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){X(N,w,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+v)}const V={[Is]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[Ns]:r.MIRRORED_REPEAT},ie={[zt]:r.NEAREST,[xc]:r.NEAREST_MIPMAP_NEAREST,[Vr]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[Gn]:r.LINEAR_MIPMAP_NEAREST,[Fi]:r.LINEAR_MIPMAP_LINEAR},fe={[Ec]:r.NEVER,[Cc]:r.ALWAYS,[Tc]:r.LESS,[pl]:r.LEQUAL,[wc]:r.EQUAL,[Rc]:r.GEQUAL,[bc]:r.GREATER,[Ac]:r.NOTEQUAL};function xe(w,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===Gn||v.magFilter===Vr||v.magFilter===Fi||v.minFilter===Gt||v.minFilter===Gn||v.minFilter===Vr||v.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,V[v.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,V[v.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,V[v.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ie[v.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==Vr&&v.minFilter!==Fi||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Be(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));const q=v.source;let Z=u.get(q);Z===void 0&&(Z={},u.set(q,Z));const j=B(v);if(j!==w.__cacheKey){Z[j]===void 0&&(Z[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[j].usedTimes++;const ge=Z[w.__cacheKey];ge!==void 0&&(Z[w.__cacheKey].usedTimes--,ge.usedTimes===0&&U(v)),w.__cacheKey=j,w.__webglTexture=Z[j].texture}return N}function We(w,v,N){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);const Z=Be(w,v),j=v.source;t.bindTexture(q,w.__webglTexture,r.TEXTURE0+N);const ge=i.get(j);if(j.version!==ge.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const ne=Ge.getPrimaries(Ge.workingColorSpace),he=v.colorSpace===vi?null:Ge.getPrimaries(v.colorSpace),De=v.colorSpace===vi||ne===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ee=x(v.image,!1,n.maxTextureSize);ee=Ke(v,ee);const pe=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let we=E(v.internalFormat,pe,Te,v.colorSpace,v.isVideoTexture);xe(q,v);let ce;const Ie=v.mipmaps,Re=v.isVideoTexture!==!0,qe=ge.__version===void 0||Z===!0,C=j.dataReady,ae=T(v,ee);if(v.isDepthTexture)we=S(v.format===gr,v.type),qe&&(Re?t.texStorage2D(r.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,pe,Te,null));else if(v.isDataTexture)if(Ie.length>0){Re&&qe&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ie[0].width,Ie[0].height);for(let k=0,Y=Ie.length;k<Y;k++)ce=Ie[k],Re?C&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ce.width,ce.height,pe,Te,ce.data):t.texImage2D(r.TEXTURE_2D,k,we,ce.width,ce.height,0,pe,Te,ce.data);v.generateMipmaps=!1}else Re?(qe&&t.texStorage2D(r.TEXTURE_2D,ae,we,ee.width,ee.height),C&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Te,ee.data)):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,pe,Te,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Re&&qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,Ie[0].width,Ie[0].height,ee.depth);for(let k=0,Y=Ie.length;k<Y;k++)if(ce=Ie[k],v.format!==Wt)if(pe!==null)if(Re){if(C)if(v.layerUpdates.size>0){const se=Uo(ce.width,ce.height,v.format,v.type);for(const re of v.layerUpdates){const Ye=ce.data.subarray(re*se/ce.data.BYTES_PER_ELEMENT,(re+1)*se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,re,ce.width,ce.height,1,pe,Ye,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ce.width,ce.height,ee.depth,pe,ce.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,we,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?C&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ce.width,ce.height,ee.depth,pe,Te,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,we,ce.width,ce.height,ee.depth,0,pe,Te,ce.data)}else{Re&&qe&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ie[0].width,Ie[0].height);for(let k=0,Y=Ie.length;k<Y;k++)ce=Ie[k],v.format!==Wt?pe!==null?Re?C&&t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,ce.width,ce.height,pe,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,k,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?C&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ce.width,ce.height,pe,Te,ce.data):t.texImage2D(r.TEXTURE_2D,k,we,ce.width,ce.height,0,pe,Te,ce.data)}else if(v.isDataArrayTexture)if(Re){if(qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,ee.width,ee.height,ee.depth),C)if(v.layerUpdates.size>0){const k=Uo(ee.width,ee.height,v.format,v.type);for(const Y of v.layerUpdates){const se=ee.data.subarray(Y*k/ee.data.BYTES_PER_ELEMENT,(Y+1)*k/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,pe,Te,se)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Te,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,pe,Te,ee.data);else if(v.isData3DTexture)Re?(qe&&t.texStorage3D(r.TEXTURE_3D,ae,we,ee.width,ee.height,ee.depth),C&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Te,ee.data)):t.texImage3D(r.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,pe,Te,ee.data);else if(v.isFramebufferTexture){if(qe)if(Re)t.texStorage2D(r.TEXTURE_2D,ae,we,ee.width,ee.height);else{let k=ee.width,Y=ee.height;for(let se=0;se<ae;se++)t.texImage2D(r.TEXTURE_2D,se,we,k,Y,0,pe,Te,null),k>>=1,Y>>=1}}else if(Ie.length>0){if(Re&&qe){const k=be(Ie[0]);t.texStorage2D(r.TEXTURE_2D,ae,we,k.width,k.height)}for(let k=0,Y=Ie.length;k<Y;k++)ce=Ie[k],Re?C&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,pe,Te,ce):t.texImage2D(r.TEXTURE_2D,k,we,pe,Te,ce);v.generateMipmaps=!1}else if(Re){if(qe){const k=be(ee);t.texStorage2D(r.TEXTURE_2D,ae,we,k.width,k.height)}C&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Te,ee)}else t.texImage2D(r.TEXTURE_2D,0,we,pe,Te,ee);d(v)&&p(q),ge.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function X(w,v,N){if(v.image.length!==6)return;const q=Be(w,v),Z=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+N);const j=i.get(Z);if(Z.version!==j.__version||q===!0){t.activeTexture(r.TEXTURE0+N);const ge=Ge.getPrimaries(Ge.workingColorSpace),ne=v.colorSpace===vi?null:Ge.getPrimaries(v.colorSpace),he=v.colorSpace===vi||ge===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!De&&!ee?pe[Y]=x(v.image[Y],!0,n.maxCubemapSize):pe[Y]=ee?v.image[Y].image:v.image[Y],pe[Y]=Ke(v,pe[Y]);const Te=pe[0],we=s.convert(v.format,v.colorSpace),ce=s.convert(v.type),Ie=E(v.internalFormat,we,ce,v.colorSpace),Re=v.isVideoTexture!==!0,qe=j.__version===void 0||q===!0,C=Z.dataReady;let ae=T(v,Te);xe(r.TEXTURE_CUBE_MAP,v);let k;if(De){Re&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ie,Te.width,Te.height);for(let Y=0;Y<6;Y++){k=pe[Y].mipmaps;for(let se=0;se<k.length;se++){const re=k[se];v.format!==Wt?we!==null?Re?C&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,re.width,re.height,we,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Ie,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,re.width,re.height,we,ce,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Ie,re.width,re.height,0,we,ce,re.data)}}}else{if(k=v.mipmaps,Re&&qe){k.length>0&&ae++;const Y=be(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ie,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Re?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,we,ce,pe[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,pe[Y].width,pe[Y].height,0,we,ce,pe[Y].data);for(let se=0;se<k.length;se++){const re=k[se].image[Y].image;Re?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,re.width,re.height,we,ce,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Ie,re.width,re.height,0,we,ce,re.data)}}else{Re?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,ce,pe[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,we,ce,pe[Y]);for(let se=0;se<k.length;se++){const re=k[se];Re?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,we,ce,re.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Ie,we,ce,re.image[Y])}}}d(v)&&p(r.TEXTURE_CUBE_MAP),j.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Q(w,v,N,q,Z,j){const ge=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),he=E(N.internalFormat,ge,ne,N.colorSpace);if(!i.get(v).__hasExternalTextures){const De=Math.max(1,v.width>>j),ee=Math.max(1,v.height>>j);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,he,De,ee,v.depth,0,ge,ne,null):t.texImage2D(Z,j,he,De,ee,0,ge,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Z,i.get(N).__webglTexture,0,Ue(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Z,i.get(N).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(w,v,N){if(r.bindRenderbuffer(r.RENDERBUFFER,w),v.depthBuffer){const q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,j=S(v.stencilBuffer,Z),ge=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=Ue(v);Fe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,j,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,j,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,w)}else{const q=v.textures;for(let Z=0;Z<q.length;Z++){const j=q[Z],ge=s.convert(j.format,j.colorSpace),ne=s.convert(j.type),he=E(j.internalFormat,ge,ne,j.colorSpace),De=Ue(v);N&&Fe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,he,v.width,v.height):Fe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,he,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,he,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const N=i.get(v.depthTexture).__webglTexture,q=Ue(v);if(v.depthTexture.format===hr)Fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0);else if(v.depthTexture.format===gr)Fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const v=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");le(v.__webglFramebuffer,w)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),de(v.__webglDepthbuffer[q],w,!1);else{const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),de(v.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(w,v,N){const q=i.get(w);v!==void 0&&Q(q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ae(w)}function Oe(w){const v=w.texture,N=i.get(w),q=i.get(v);w.addEventListener("dispose",A);const Z=w.textures,j=w.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),j){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let he=0;he<v.mipmaps.length;he++)N.__webglFramebuffer[ne][he]=r.createFramebuffer()}else N.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)N.__webglFramebuffer[ne]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ne=0,he=Z.length;ne<he;ne++){const De=i.get(Z[ne]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&Fe(w)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const he=Z[ne];N.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const De=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),pe=E(he.internalFormat,De,ee,he.colorSpace,w.isXRRenderTarget===!0),Te=Ue(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,pe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),de(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),xe(r.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Q(N.__webglFramebuffer[ne][he],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else Q(N.__webglFramebuffer[ne],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,he=Z.length;ne<he;ne++){const De=Z[ne],ee=i.get(De);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),xe(r.TEXTURE_2D,De),Q(N.__webglFramebuffer,w,De,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),d(De)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),xe(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Q(N.__webglFramebuffer[he],w,v,r.COLOR_ATTACHMENT0,ne,he);else Q(N.__webglFramebuffer,w,v,r.COLOR_ATTACHMENT0,ne,0);d(v)&&p(ne),t.unbindTexture()}w.depthBuffer&&Ae(w)}function Xe(w){const v=w.textures;for(let N=0,q=v.length;N<q;N++){const Z=v[N];if(d(Z)){const j=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=i.get(Z).__webglTexture;t.bindTexture(j,ge),p(j),t.unbindTexture()}}}const ze=[],R=[];function Lt(w){if(w.samples>0){if(Fe(w)===!1){const v=w.textures,N=w.width,q=w.height;let Z=r.COLOR_BUFFER_BIT;const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=i.get(w),ne=v.length>1;if(ne)for(let he=0;he<v.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<v.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const De=i.get(v[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,De,0)}r.blitFramebuffer(0,0,N,q,0,0,N,q,Z,r.NEAREST),l===!0&&(ze.length=0,R.length=0,ze.push(r.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push(j),R.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,R)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<v.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const De=i.get(v[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,De,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Ue(w){return Math.min(n.maxSamples,w.samples)}function Fe(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ke(w,v){const N=w.colorSpace,q=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Ti&&N!==vi&&(Ge.getTransfer(N)===Ze?(q!==Wt||Z!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Me,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Fe}function Jf(r,e){function t(i,n=vi){let s;const a=Ge.getTransfer(n);if(i===ai)return r.UNSIGNED_BYTE;if(i===ma)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return r.UNSIGNED_SHORT_5_5_5_1;if(i===nl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===il)return r.BYTE;if(i===rl)return r.SHORT;if(i===Dr)return r.UNSIGNED_SHORT;if(i===fa)return r.INT;if(i===ki)return r.UNSIGNED_INT;if(i===ni)return r.FLOAT;if(i===zr)return r.HALF_FLOAT;if(i===sl)return r.ALPHA;if(i===al)return r.RGB;if(i===Wt)return r.RGBA;if(i===ol)return r.LUMINANCE;if(i===ll)return r.LUMINANCE_ALPHA;if(i===hr)return r.DEPTH_COMPONENT;if(i===gr)return r.DEPTH_STENCIL;if(i===cl)return r.RED;if(i===_a)return r.RED_INTEGER;if(i===hl)return r.RG;if(i===va)return r.RG_INTEGER;if(i===xa)return r.RGBA_INTEGER;if(i===gn||i===_n||i===vn||i===xn)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_n)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Os||i===zs||i===Fs||i===Bs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ks||i===Hs||i===Gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ks||i===Hs)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vs||i===Ws||i===Xs||i===js||i===qs||i===Ys||i===Ks||i===Zs||i===Js||i===$s||i===Qs||i===ea||i===ta||i===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ws)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===js)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ys)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ks)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Js)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$s)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ea)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ta)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yn||i===ra||i===na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yn)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===sa||i===aa||i===oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yn)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class $f extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ct,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:em,fragmentShader:tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rm extends vr{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null;const x=new im,d=t.getContextAttributes();let p=null,E=null;const S=[],T=[],I=new Ne;let A=null;const b=new Ot;b.layers.enable(1),b.viewport=new it;const U=new Ot;U.layers.enable(2),U.viewport=new it;const W=[b,U],g=new $f;g.layers.enable(1),g.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new gs,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new gs,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new gs,S[X]=Q),Q.getHandSpace()};function B(X){const Q=T.indexOf(X.inputSource);if(Q===-1)return;const de=S[Q];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",K);for(let X=0;X<S.length;X++){const Q=T[X];Q!==null&&(T[X]=null,S[X].disconnect(Q))}M=null,O=null,x.reset(),e.setRenderTarget(p),m=null,u=null,f=null,n=null,E=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",G),n.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,Q),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Hi(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,de=null,le=null;d.depth&&(le=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=d.stencil?gr:hr,de=d.stencil?mr:ki);const Ae={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(n,t),u=f.createProjectionLayer(Ae),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Hi(u.textureWidth,u.textureHeight,{format:Wt,type:ai,depthTexture:new bl(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),We.setContext(n),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let Q=0;Q<X.removed.length;Q++){const de=X.removed[Q],le=T.indexOf(de);le>=0&&(T[le]=null,S[le].disconnect(de))}for(let Q=0;Q<X.added.length;Q++){const de=X.added[Q];let le=T.indexOf(de);if(le===-1){for(let Me=0;Me<S.length;Me++)if(Me>=T.length){T.push(de),le=Me;break}else if(T[Me]===null){T[Me]=de,le=Me;break}if(le===-1)break}const Ae=S[le];Ae&&Ae.connect(de)}}const H=new D,$=new D;function V(X,Q,de){H.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const le=H.distanceTo($),Ae=Q.projectionMatrix.elements,Me=de.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),ze=(Ae[9]+1)/Ae[5],R=(Ae[9]-1)/Ae[5],Lt=(Ae[8]-1)/Ae[0],Ue=(Me[8]+1)/Me[0],Fe=Oe*Lt,Ee=Oe*Ue,Ke=le/(-Lt+Ue),be=Ke*-Lt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(Ke),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=Oe+Ke,v=Xe+Ke,N=Fe-be,q=Ee+(le-be),Z=ze*Xe/v*w,j=R*Xe/v*w;X.projectionMatrix.makePerspective(N,q,Z,j,w,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Q=X.near,de=X.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(de=x.depthFar)),g.near=U.near=b.near=Q,g.far=U.far=b.far=de,(M!==g.near||O!==g.far)&&(n.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,O=g.far);const le=X.parent,Ae=g.cameras;ie(g,le);for(let Me=0;Me<Ae.length;Me++)ie(Ae[Me],le);Ae.length===2?V(g,b,U):g.projectionMatrix.copy(b.projectionMatrix),fe(X,g,le)};function fe(X,Q,de){de===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ir*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let xe=null;function Be(X,Q){if(h=Q.getViewerPose(c||a),_=Q,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let le=!1;de.length!==g.cameras.length&&(g.cameras.length=0,le=!0);for(let Me=0;Me<de.length;Me++){const Oe=de[Me];let Xe=null;if(m!==null)Xe=m.getViewport(Oe);else{const R=f.getViewSubImage(u,Oe);Xe=R.viewport,Me===0&&(e.setRenderTargetTextures(E,R.colorTexture,u.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(E))}let ze=W[Me];ze===void 0&&(ze=new Ot,ze.layers.enable(Me),ze.viewport=new it,W[Me]=ze),ze.matrix.fromArray(Oe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Oe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Me===0&&(g.matrix.copy(ze.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),le===!0&&g.cameras.push(ze)}const Ae=n.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Me=f.getDepthInformation(de[0]);Me&&Me.isValid&&Me.texture&&x.init(e,Me,n.renderState)}}for(let de=0;de<S.length;de++){const le=T[de],Ae=S[de];le!==null&&Ae!==void 0&&Ae.update(le,Q,c||a)}xe&&xe(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const We=new Tl;We.setAnimationLoop(Be),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const Ui=new Kt,nm=new Qe;function sm(r,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Ml(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,E,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,T)):p.isMeshMatcapMaterial?(s(d,p),_(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),x(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,E,S):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Rt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Rt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,T=E.envMapRotation;S&&(d.envMap.value=S,Ui.copy(T),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),d.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Ui)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,E,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=S*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const E=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function am(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const T=S.program;i.uniformBlockBinding(E,T)}function c(E,S){let T=n[E.id];T===void 0&&(_(E),T=h(E),n[E.id]=T,E.addEventListener("dispose",d));const I=S.program;i.updateUBOMapping(E,I);const A=e.render.frame;s[E.id]!==A&&(u(E),s[E.id]=A)}function h(E){const S=f();E.__bindingPointIndex=S;const T=r.createBuffer(),I=E.__size,A=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,I,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=n[E.id],T=E.uniforms,I=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,b=T.length;A<b;A++){const U=Array.isArray(T[A])?T[A]:[T[A]];for(let W=0,g=U.length;W<g;W++){const M=U[W];if(m(M,A,W,I)===!0){const O=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let G=0;for(let K=0;K<B.length;K++){const H=B[K],$=x(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,O+G,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,S,T,I){const A=E.value,b=S+"_"+T;if(I[b]===void 0)return typeof A=="number"||typeof A=="boolean"?I[b]=A:I[b]=A.clone(),!0;{const U=I[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return I[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function _(E){const S=E.uniforms;let T=0;const I=16;for(let b=0,U=S.length;b<U;b++){const W=Array.isArray(S[b])?S[b]:[S[b]];for(let g=0,M=W.length;g<M;g++){const O=W[g],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,K=B.length;G<K;G++){const H=B[G],$=x(H),V=T%I,ie=V%$.boundary,fe=V+ie;T+=ie,fe!==0&&I-fe<$.storage&&(T+=I-fe),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=$.storage}}}const A=T%I;return A>0&&(T+=I-A),E.__size=T,E.__cache={},this}function x(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function p(){for(const E in n)r.deleteBuffer(n[E]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class om{constructor(e={}){const{canvas:t=qc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Mi,this.toneMappingExposure=1;const S=this;let T=!1,I=0,A=0,b=null,U=-1,W=null;const g=new it,M=new it;let O=null;const B=new Pe(0);let G=0,K=t.width,H=t.height,$=1,V=null,ie=null;const fe=new it(0,0,K,H),xe=new it(0,0,K,H);let Be=!1;const We=new Ea;let X=!1,Q=!1;const de=new Qe,le=new Qe,Ae=new D,Me=new it,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ze(){return b===null?$:1}let R=i;function Lt(y,P){return t.getContext(y,P)}try{const y={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){const P="webgl2";if(R=Lt(P,y),R===null)throw Lt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ue,Fe,Ee,Ke,be,w,v,N,q,Z,j,ge,ne,he,De,ee,pe,Te,we,ce,Ie,Re,qe,C;function ae(){Ue=new up(R),Ue.init(),Re=new Jf(R,Ue),Fe=new sp(R,Ue,e,Re),Ee=new Yf(R),Fe.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),Ke=new fp(R),be=new Df,w=new Zf(R,Ue,Ee,be,Fe,Re,Ke),v=new op(S),N=new hp(S),q=new Mh(R),qe=new rp(R,q),Z=new dp(R,q,Ke,qe),j=new gp(R,Z,q,Ke),we=new mp(R,Fe,w),ee=new ap(be),ge=new Uf(S,v,N,Ue,Fe,qe,ee),ne=new sm(S,be),he=new Nf,De=new Hf(Ue),Te=new ip(S,v,N,Ee,j,u,l),pe=new jf(S,j,Fe),C=new am(R,Ke,Fe,Ee),ce=new np(R,Ue,Ke),Ie=new pp(R,Ue,Ke),Ke.programs=ge.programs,S.capabilities=Fe,S.extensions=Ue,S.properties=be,S.renderLists=he,S.shadowMap=pe,S.state=Ee,S.info=Ke}ae();const k=new rm(S,R);this.xr=k,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Ue.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ue.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(K,H,!1))},this.getSize=function(y){return y.set(K,H)},this.setSize=function(y,P,z=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,H=P,t.width=Math.floor(y*$),t.height=Math.floor(P*$),z===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(K*$,H*$).floor()},this.setDrawingBufferSize=function(y,P,z){K=y,H=P,$=z,t.width=Math.floor(y*z),t.height=Math.floor(P*z),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(g)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,P,z,F){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,P,z,F),Ee.viewport(g.copy(fe).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(xe)},this.setScissor=function(y,P,z,F){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,P,z,F),Ee.scissor(M.copy(xe).multiplyScalar($).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(y){Ee.setScissorTest(Be=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(y=!0,P=!0,z=!0){let F=0;if(y){let L=!1;if(b!==null){const J=b.texture.format;L=J===xa||J===va||J===_a}if(L){const J=b.texture.type,oe=J===ai||J===ki||J===Dr||J===mr||J===ma||J===ga,ue=Te.getClearColor(),me=Te.getClearAlpha(),Se=ue.r,ye=ue.g,ve=ue.b;oe?(m[0]=Se,m[1]=ye,m[2]=ve,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=Se,_[1]=ye,_[2]=ve,_[3]=me,R.clearBufferiv(R.COLOR,0,_))}else F|=R.COLOR_BUFFER_BIT}P&&(F|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),he.dispose(),De.dispose(),be.dispose(),v.dispose(),N.dispose(),j.dispose(),qe.dispose(),C.dispose(),ge.dispose(),k.dispose(),k.removeEventListener("sessionstart",La),k.removeEventListener("sessionend",Pa),wi.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=Ke.autoReset,P=pe.enabled,z=pe.autoUpdate,F=pe.needsUpdate,L=pe.type;ae(),Ke.autoReset=y,pe.enabled=P,pe.autoUpdate=z,pe.needsUpdate=F,pe.type=L}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ye(y){const P=y.target;P.removeEventListener("dispose",Ye),at(P)}function at(y){bt(y),be.remove(y)}function bt(y){const P=be.get(y).programs;P!==void 0&&(P.forEach(function(z){ge.releaseProgram(z)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,z,F,L,J){P===null&&(P=Oe);const oe=L.isMesh&&L.matrixWorld.determinant()<0,ue=kl(y,P,z,F,L);Ee.setMaterial(F,oe);let me=z.index,Se=1;if(F.wireframe===!0){if(me=Z.getWireframeAttribute(z),me===void 0)return;Se=2}const ye=z.drawRange,ve=z.attributes.position;let je=ye.start*Se,et=(ye.start+ye.count)*Se;J!==null&&(je=Math.max(je,J.start*Se),et=Math.min(et,(J.start+J.count)*Se)),me!==null?(je=Math.max(je,0),et=Math.min(et,me.count)):ve!=null&&(je=Math.max(je,0),et=Math.min(et,ve.count));const rt=et-je;if(rt<0||rt===1/0)return;qe.setup(L,F,ue,z,me);let lt,$e=ce;if(me!==null&&(lt=q.get(me),$e=Ie,$e.setIndex(lt)),L.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*ze()),$e.setMode(R.LINES)):$e.setMode(R.TRIANGLES);else if(L.isLine){let _e=F.linewidth;_e===void 0&&(_e=1),Ee.setLineWidth(_e*ze()),L.isLineSegments?$e.setMode(R.LINES):L.isLineLoop?$e.setMode(R.LINE_LOOP):$e.setMode(R.LINE_STRIP)}else L.isPoints?$e.setMode(R.POINTS):L.isSprite&&$e.setMode(R.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)$e.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))$e.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const _e=L._multiDrawStarts,vt=L._multiDrawCounts,bi=L._multiDrawCount,Ft=me?q.get(me).bytesPerElement:1,Wi=be.get(F).currentProgram.getUniforms();for(let Pt=0;Pt<bi;Pt++)Wi.setValue(R,"_gl_DrawID",Pt),$e.render(_e[Pt]/Ft,vt[Pt])}else if(L.isInstancedMesh)$e.renderInstances(je,rt,L.count);else if(z.isInstancedBufferGeometry){const _e=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,vt=Math.min(z.instanceCount,_e);$e.renderInstances(je,rt,vt)}else $e.render(je,rt)};function ke(y,P,z){y.transparent===!0&&y.side===ri&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,Gr(y,P,z),y.side=Si,y.needsUpdate=!0,Gr(y,P,z),y.side=ri):Gr(y,P,z)}this.compile=function(y,P,z=null){z===null&&(z=y),d=De.get(z),d.init(P),E.push(d),z.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),y!==z&&y.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const F=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const J=L.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const ue=J[oe];ke(ue,z,L),F.add(ue)}else ke(J,z,L),F.add(J)}),E.pop(),d=null,F},this.compileAsync=function(y,P,z=null){const F=this.compile(y,P,z);return new Promise(L=>{function J(){if(F.forEach(function(oe){be.get(oe).currentProgram.isReady()&&F.delete(oe)}),F.size===0){L(y);return}setTimeout(J,10)}Ue.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let At=null;function Zt(y){At&&At(y)}function La(){wi.stop()}function Pa(){wi.start()}const wi=new Tl;wi.setAnimationLoop(Zt),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(y){At=y,k.setAnimationLoop(y),y===null?wi.stop():wi.start()},k.addEventListener("sessionstart",La),k.addEventListener("sessionend",Pa),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,P,b),d=De.get(y,E.length),d.init(P),E.push(d),le.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(le),Q=this.localClippingEnabled,X=ee.init(this.clippingPlanes,Q),x=he.get(y,p.length),x.init(),p.push(x),k.enabled===!0&&k.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&Fn(J,P,-1/0,S.sortObjects)}Fn(y,P,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(V,ie),Xe=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Xe&&Te.addToRenderList(x,y),this.info.render.frame++,X===!0&&ee.beginShadows();const z=d.state.shadowsArray;pe.render(z,y,P),X===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=x.opaque,L=x.transmissive;if(d.setupLights(),P.isArrayCamera){const J=P.cameras;if(L.length>0)for(let oe=0,ue=J.length;oe<ue;oe++){const me=J[oe];Da(F,L,y,me)}Xe&&Te.render(y);for(let oe=0,ue=J.length;oe<ue;oe++){const me=J[oe];Ua(x,y,me,me.viewport)}}else L.length>0&&Da(F,L,y,P),Xe&&Te.render(y),Ua(x,y,P);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(S,y,P),qe.resetDefaultState(),U=-1,W=null,E.pop(),E.length>0?(d=E[E.length-1],X===!0&&ee.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Fn(y,P,z,F){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||We.intersectsSprite(y)){F&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const J=j.update(y),oe=y.material;oe.visible&&x.push(y,J,oe,z,Me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||We.intersectsObject(y))){const J=j.update(y),oe=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Me.copy(J.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(oe)){const ue=J.groups;for(let me=0,Se=ue.length;me<Se;me++){const ye=ue[me],ve=oe[ye.materialIndex];ve&&ve.visible&&x.push(y,J,ve,z,Me.z,ye)}}else oe.visible&&x.push(y,J,oe,z,Me.z,null)}}const L=y.children;for(let J=0,oe=L.length;J<oe;J++)Fn(L[J],P,z,F)}function Ua(y,P,z,F){const L=y.opaque,J=y.transmissive,oe=y.transparent;d.setupLightsView(z),X===!0&&ee.setGlobalState(S.clippingPlanes,z),F&&Ee.viewport(g.copy(F)),L.length>0&&Hr(L,P,z),J.length>0&&Hr(J,P,z),oe.length>0&&Hr(oe,P,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Da(y,P,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Hi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?zr:ai,minFilter:Fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const L=d.state.transmissionRenderTarget[F.id],J=F.viewport||g;L.setSize(J.z,J.w);const oe=S.getRenderTarget();S.setRenderTarget(L),S.getClearColor(B),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Te.render(z);const ue=S.toneMapping;S.toneMapping=Mi;const me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),X===!0&&ee.setGlobalState(S.clippingPlanes,F),Hr(y,z,F),w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ye=0,ve=P.length;ye<ve;ye++){const je=P[ye],et=je.object,rt=je.geometry,lt=je.material,$e=je.group;if(lt.side===ri&&et.layers.test(F.layers)){const _e=lt.side;lt.side=Rt,lt.needsUpdate=!0,Ia(et,z,F,rt,lt,$e),lt.side=_e,lt.needsUpdate=!0,Se=!0}}Se===!0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L))}S.setRenderTarget(oe),S.setClearColor(B,G),me!==void 0&&(F.viewport=me),S.toneMapping=ue}function Hr(y,P,z){const F=P.isScene===!0?P.overrideMaterial:null;for(let L=0,J=y.length;L<J;L++){const oe=y[L],ue=oe.object,me=oe.geometry,Se=F===null?oe.material:F,ye=oe.group;ue.layers.test(z.layers)&&Ia(ue,P,z,me,Se,ye)}}function Ia(y,P,z,F,L,J){y.onBeforeRender(S,P,z,F,L,J),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(S,P,z,F,y,J),L.transparent===!0&&L.side===ri&&L.forceSinglePass===!1?(L.side=Rt,L.needsUpdate=!0,S.renderBufferDirect(z,P,F,L,y,J),L.side=Si,L.needsUpdate=!0,S.renderBufferDirect(z,P,F,L,y,J),L.side=ri):S.renderBufferDirect(z,P,F,L,y,J),y.onAfterRender(S,P,z,F,L,J)}function Gr(y,P,z){P.isScene!==!0&&(P=Oe);const F=be.get(y),L=d.state.lights,J=d.state.shadowsArray,oe=L.state.version,ue=ge.getParameters(y,L.state,J,P,z),me=ge.getProgramCacheKey(ue);let Se=F.programs;F.environment=y.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(y.isMeshStandardMaterial?N:v).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Se===void 0&&(y.addEventListener("dispose",Ye),Se=new Map,F.programs=Se);let ye=Se.get(me);if(ye!==void 0){if(F.currentProgram===ye&&F.lightsStateVersion===oe)return Oa(y,ue),ye}else ue.uniforms=ge.getUniforms(y),y.onBeforeCompile(ue,S),ye=ge.acquireProgram(ue,me),Se.set(me,ye),F.uniforms=ue.uniforms;const ve=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=ee.uniform),Oa(y,ue),F.needsLights=Gl(y),F.lightsStateVersion=oe,F.needsLights&&(ve.ambientLightColor.value=L.state.ambient,ve.lightProbe.value=L.state.probe,ve.directionalLights.value=L.state.directional,ve.directionalLightShadows.value=L.state.directionalShadow,ve.spotLights.value=L.state.spot,ve.spotLightShadows.value=L.state.spotShadow,ve.rectAreaLights.value=L.state.rectArea,ve.ltc_1.value=L.state.rectAreaLTC1,ve.ltc_2.value=L.state.rectAreaLTC2,ve.pointLights.value=L.state.point,ve.pointLightShadows.value=L.state.pointShadow,ve.hemisphereLights.value=L.state.hemi,ve.directionalShadowMap.value=L.state.directionalShadowMap,ve.directionalShadowMatrix.value=L.state.directionalShadowMatrix,ve.spotShadowMap.value=L.state.spotShadowMap,ve.spotLightMatrix.value=L.state.spotLightMatrix,ve.spotLightMap.value=L.state.spotLightMap,ve.pointShadowMap.value=L.state.pointShadowMap,ve.pointShadowMatrix.value=L.state.pointShadowMatrix),F.currentProgram=ye,F.uniformsList=null,ye}function Na(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=Sn.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Oa(y,P){const z=be.get(y);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function kl(y,P,z,F,L){P.isScene!==!0&&(P=Oe),w.resetTextureUnits();const J=P.fog,oe=F.isMeshStandardMaterial?P.environment:null,ue=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ti,me=(F.isMeshStandardMaterial?N:v).get(F.envMap||oe),Se=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ye=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ve=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let rt=Mi;F.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(rt=S.toneMapping);const lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$e=lt!==void 0?lt.length:0,_e=be.get(F),vt=d.state.lights;if(X===!0&&(Q===!0||y!==W)){const It=y===W&&F.id===U;ee.setState(F,y,It)}let bi=!1;F.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==vt.state.version||_e.outputColorSpace!==ue||L.isBatchedMesh&&_e.batching===!1||!L.isBatchedMesh&&_e.batching===!0||L.isBatchedMesh&&_e.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&_e.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&_e.instancing===!1||!L.isInstancedMesh&&_e.instancing===!0||L.isSkinnedMesh&&_e.skinning===!1||!L.isSkinnedMesh&&_e.skinning===!0||L.isInstancedMesh&&_e.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&_e.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&_e.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&_e.instancingMorph===!1&&L.morphTexture!==null||_e.envMap!==me||F.fog===!0&&_e.fog!==J||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ee.numPlanes||_e.numIntersection!==ee.numIntersection)||_e.vertexAlphas!==Se||_e.vertexTangents!==ye||_e.morphTargets!==ve||_e.morphNormals!==je||_e.morphColors!==et||_e.toneMapping!==rt||_e.morphTargetsCount!==$e)&&(bi=!0):(bi=!0,_e.__version=F.version);let Ft=_e.currentProgram;bi===!0&&(Ft=Gr(F,P,L));let Wi=!1,Pt=!1,Bn=!1;const nt=Ft.getUniforms(),ci=_e.uniforms;if(Ee.useProgram(Ft.program)&&(Wi=!0,Pt=!0,Bn=!0),F.id!==U&&(U=F.id,Pt=!0),Wi||W!==y){Fe.reverseDepthBuffer?(de.copy(y.projectionMatrix),Kc(de),Zc(de),nt.setValue(R,"projectionMatrix",de)):nt.setValue(R,"projectionMatrix",y.projectionMatrix),nt.setValue(R,"viewMatrix",y.matrixWorldInverse);const It=nt.map.cameraPosition;It!==void 0&&It.setValue(R,Ae.setFromMatrixPosition(y.matrixWorld)),Fe.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&nt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,Pt=!0,Bn=!0)}if(L.isSkinnedMesh){nt.setOptional(R,L,"bindMatrix"),nt.setOptional(R,L,"bindMatrixInverse");const It=L.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),nt.setValue(R,"boneTexture",It.boneTexture,w))}L.isBatchedMesh&&(nt.setOptional(R,L,"batchingTexture"),nt.setValue(R,"batchingTexture",L._matricesTexture,w),nt.setOptional(R,L,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",L._indirectTexture,w),nt.setOptional(R,L,"batchingColorTexture"),L._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",L._colorsTexture,w));const kn=z.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&we.update(L,z,Ft),(Pt||_e.receiveShadow!==L.receiveShadow)&&(_e.receiveShadow=L.receiveShadow,nt.setValue(R,"receiveShadow",L.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ci.envMap.value=me,ci.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(ci.envMapIntensity.value=P.environmentIntensity),Pt&&(nt.setValue(R,"toneMappingExposure",S.toneMappingExposure),_e.needsLights&&Hl(ci,Bn),J&&F.fog===!0&&ne.refreshFogUniforms(ci,J),ne.refreshMaterialUniforms(ci,F,$,H,d.state.transmissionRenderTarget[y.id]),Sn.upload(R,Na(_e),ci,w)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Sn.upload(R,Na(_e),ci,w),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&nt.setValue(R,"center",L.center),nt.setValue(R,"modelViewMatrix",L.modelViewMatrix),nt.setValue(R,"normalMatrix",L.normalMatrix),nt.setValue(R,"modelMatrix",L.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let Hn=0,Vl=It.length;Hn<Vl;Hn++){const za=It[Hn];C.update(za,Ft),C.bind(za,Ft)}}return Ft}function Hl(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Gl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,P,z){be.get(y.texture).__webglTexture=P,be.get(y.depthTexture).__webglTexture=z;const F=be.get(y);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){const z=be.get(y);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,z=0){b=y,I=P,A=z;let F=!0,L=null,J=!1,oe=!1;if(y){const ue=be.get(y);if(ue.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(ue.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(ue.__hasExternalTextures)w.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ye=y.depthTexture;if(ue.__boundDepthTexture!==ye){if(ye!==null&&be.has(ye)&&(y.width!==ye.image.width||y.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const me=y.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(oe=!0);const Se=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Se[P])?L=Se[P][z]:L=Se[P],J=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?L=be.get(y).__webglMultisampledFramebuffer:Array.isArray(Se)?L=Se[z]:L=Se,g.copy(y.viewport),M.copy(y.scissor),O=y.scissorTest}else g.copy(fe).multiplyScalar($).floor(),M.copy(xe).multiplyScalar($).floor(),O=Be;if(Ee.bindFramebuffer(R.FRAMEBUFFER,L)&&F&&Ee.drawBuffers(y,L),Ee.viewport(g),Ee.scissor(M),Ee.setScissorTest(O),J){const ue=be.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,z)}else if(oe){const ue=be.get(y.texture),me=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.__webglTexture,z||0,me)}U=-1},this.readRenderTargetPixels=function(y,P,z,F,L,J,oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){Ee.bindFramebuffer(R.FRAMEBUFFER,ue);try{const me=y.texture,Se=me.format,ye=me.type;if(!Fe.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-F&&z>=0&&z<=y.height-L&&R.readPixels(P,z,F,L,Re.convert(Se),Re.convert(ye),J)}finally{const me=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,P,z,F,L,J,oe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){const me=y.texture,Se=me.format,ye=me.type;if(!Fe.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-F&&z>=0&&z<=y.height-L){Ee.bindFramebuffer(R.FRAMEBUFFER,ue);const ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.bufferData(R.PIXEL_PACK_BUFFER,J.byteLength,R.STREAM_READ),R.readPixels(P,z,F,L,Re.convert(Se),Re.convert(ye),0);const je=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,je);const et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Yc(R,et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,J),R.deleteBuffer(ve),R.deleteSync(et),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,z=0){y.isTexture!==!0&&(Mn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);const F=Math.pow(2,-z),L=Math.floor(y.image.width*F),J=Math.floor(y.image.height*F),oe=P!==null?P.x:0,ue=P!==null?P.y:0;w.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,oe,ue,L,J),Ee.unbindTexture()},this.copyTextureToTexture=function(y,P,z=null,F=null,L=0){y.isTexture!==!0&&(Mn("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1],P=arguments[2],L=arguments[3]||0,z=null);let J,oe,ue,me,Se,ye;z!==null?(J=z.max.x-z.min.x,oe=z.max.y-z.min.y,ue=z.min.x,me=z.min.y):(J=y.image.width,oe=y.image.height,ue=0,me=0),F!==null?(Se=F.x,ye=F.y):(Se=0,ye=0);const ve=Re.convert(P.format),je=Re.convert(P.type);w.setTexture2D(P,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const et=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),lt=R.getParameter(R.UNPACK_SKIP_PIXELS),$e=R.getParameter(R.UNPACK_SKIP_ROWS),_e=R.getParameter(R.UNPACK_SKIP_IMAGES),vt=y.isCompressedTexture?y.mipmaps[L]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,vt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,L,Se,ye,J,oe,ve,je,vt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,L,Se,ye,vt.width,vt.height,ve,vt.data):R.texSubImage2D(R.TEXTURE_2D,L,Se,ye,J,oe,ve,je,vt),R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,$e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,_e),L===0&&P.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,P,z=null,F=null,L=0){y.isTexture!==!0&&(Mn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,F=arguments[1]||null,y=arguments[2],P=arguments[3],L=arguments[4]||0);let J,oe,ue,me,Se,ye,ve,je,et;const rt=y.isCompressedTexture?y.mipmaps[L]:y.image;z!==null?(J=z.max.x-z.min.x,oe=z.max.y-z.min.y,ue=z.max.z-z.min.z,me=z.min.x,Se=z.min.y,ye=z.min.z):(J=rt.width,oe=rt.height,ue=rt.depth,me=0,Se=0,ye=0),F!==null?(ve=F.x,je=F.y,et=F.z):(ve=0,je=0,et=0);const lt=Re.convert(P.format),$e=Re.convert(P.type);let _e;if(P.isData3DTexture)w.setTexture3D(P,0),_e=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)w.setTexture2DArray(P,0),_e=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const vt=R.getParameter(R.UNPACK_ROW_LENGTH),bi=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ft=R.getParameter(R.UNPACK_SKIP_PIXELS),Wi=R.getParameter(R.UNPACK_SKIP_ROWS),Pt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Se),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(_e,L,ve,je,et,J,oe,ue,lt,$e,rt.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,L,ve,je,et,J,oe,ue,lt,rt.data):R.texSubImage3D(_e,L,ve,je,et,J,oe,ue,lt,$e,rt),R.pixelStorei(R.UNPACK_ROW_LENGTH,vt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bi),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pt),L===0&&P.generateMipmaps&&R.generateMipmap(_e),Ee.unbindTexture()},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){I=0,A=0,b=null,Ee.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ya?"display-p3":"srgb",t.unpackColorSpace=Ge.workingColorSpace===In?"display-p3":"srgb"}}class wa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lm extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pl extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ln=new D,Pn=new D,Do=new Qe,br=new Sa,un=new kr,_s=new D,Io=new D;class cm extends ft{constructor(e=new wt,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Ln.fromBufferAttribute(t,n-1),Pn.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ln.distanceTo(Pn);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(n),un.radius+=s,e.ray.intersectsSphere(un)===!1)return;Do.copy(n).invert(),br.copy(e.ray).applyMatrix4(Do);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=u,x=m-1;_<x;_+=c){const d=h.getX(_),p=h.getX(_+1),E=dn(this,e,br,l,d,p);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(m-1),x=h.getX(u),d=dn(this,e,br,l,_,x);d&&t.push(d)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,x=m-1;_<x;_+=c){const d=dn(this,e,br,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=dn(this,e,br,l,m-1,u);_&&t.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function dn(r,e,t,i,n,s){const a=r.geometry.attributes.position;if(Ln.fromBufferAttribute(a,n),Pn.fromBufferAttribute(a,s),t.distanceSqToSegment(Ln,Pn,_s,Io)>i)return;_s.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(_s);if(!(o<e.near||o>e.far))return{distance:o,point:Io.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const No=new D,Oo=new D;class hm extends cm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)No.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+No.distanceTo(Oo);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ul extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new Qe,ca=new Sa,pn=new kr,fn=new D;class um extends ft{constructor(e=new wt,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pn.copy(i.boundingSphere),pn.applyMatrix4(n),pn.radius+=s,e.ray.intersectsSphere(pn)===!1)return;zo.copy(n).invert(),ca.copy(e.ray).applyMatrix4(zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=f,_=u;m<_;m++){const x=c.getX(m);fn.fromBufferAttribute(h,x),Fo(fn,x,l,n,e,t,this)}}else{const f=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let m=f,_=u;m<_;m++)fn.fromBufferAttribute(h,m),Fo(fn,m,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Fo(r,e,t,i,n,s,a){const o=ca.distanceSqToPoint(r);if(o<t){const l=new D;ca.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gi extends wt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],f=[],u=[],m=[];let _=0;const x=[],d=i/2;let p=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(m,2));function E(){const T=new D,I=new D;let A=0;const b=(t-e)/i;for(let U=0;U<=s;U++){const W=[],g=U/s,M=g*(t-e)+e;for(let O=0;O<=n;O++){const B=O/n,G=B*l+o,K=Math.sin(G),H=Math.cos(G);I.x=M*K,I.y=-g*i+d,I.z=M*H,f.push(I.x,I.y,I.z),T.set(K,b,H).normalize(),u.push(T.x,T.y,T.z),m.push(B,1-g),W.push(_++)}x.push(W)}for(let U=0;U<n;U++)for(let W=0;W<s;W++){const g=x[W][U],M=x[W+1][U],O=x[W+1][U+1],B=x[W][U+1];e>0&&(h.push(g,M,B),A+=3),t>0&&(h.push(M,O,B),A+=3)}c.addGroup(p,A,0),p+=A}function S(T){const I=_,A=new Ne,b=new D;let U=0;const W=T===!0?e:t,g=T===!0?1:-1;for(let O=1;O<=n;O++)f.push(0,d*g,0),u.push(0,g,0),m.push(.5,.5),_++;const M=_;for(let O=0;O<=n;O++){const B=O/n*l+o,G=Math.cos(B),K=Math.sin(B);b.x=W*K,b.y=d*g,b.z=W*G,f.push(b.x,b.y,b.z),u.push(0,g,0),A.x=G*.5+.5,A.y=K*.5*g+.5,m.push(A.x,A.y),_++}for(let O=0;O<n;O++){const B=I+O,G=M+O;T===!0?h.push(G,G+1,B):h.push(G+1,G,B),U+=3}c.addGroup(p,U,T===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends Gi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new or(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zn extends wt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new D,T=new D,I=new D;for(let A=0;A<t.length;A+=3)m(t[A+0],S),m(t[A+1],T),m(t[A+2],I),l(S,T,I,E)}function l(E,S,T,I){const A=I+1,b=[];for(let U=0;U<=A;U++){b[U]=[];const W=E.clone().lerp(T,U/A),g=S.clone().lerp(T,U/A),M=A-U;for(let O=0;O<=M;O++)O===0&&U===A?b[U][O]=W:b[U][O]=W.clone().lerp(g,O/M)}for(let U=0;U<A;U++)for(let W=0;W<2*(A-U)-1;W++){const g=Math.floor(W/2);W%2===0?(u(b[U][g+1]),u(b[U+1][g]),u(b[U][g])):(u(b[U][g+1]),u(b[U+1][g+1]),u(b[U+1][g]))}}function c(E){const S=new D;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(E),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const E=new D;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const T=d(E)/2/Math.PI+.5,I=p(E)/Math.PI+.5;a.push(T,1-I)}_(),f()}function f(){for(let E=0;E<a.length;E+=6){const S=a[E+0],T=a[E+2],I=a[E+4],A=Math.max(S,T,I),b=Math.min(S,T,I);A>.9&&b<.1&&(S<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),I<.2&&(a[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function m(E,S){const T=E*3;S.x=e[T+0],S.y=e[T+1],S.z=e[T+2]}function _(){const E=new D,S=new D,T=new D,I=new D,A=new Ne,b=new Ne,U=new Ne;for(let W=0,g=0;W<s.length;W+=9,g+=6){E.set(s[W+0],s[W+1],s[W+2]),S.set(s[W+3],s[W+4],s[W+5]),T.set(s[W+6],s[W+7],s[W+8]),A.set(a[g+0],a[g+1]),b.set(a[g+2],a[g+3]),U.set(a[g+4],a[g+5]),I.copy(E).add(S).add(T).divideScalar(3);const M=d(I);x(A,g+0,E,M),x(b,g+2,S,M),x(U,g+4,T,M)}}function x(E,S,T,I){I<0&&E.x===1&&(a[S]=E.x-1),T.x===0&&T.z===0&&(a[S]=I/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.vertices,e.indices,e.radius,e.details)}}class ba extends zn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ba(e.radius,e.detail)}}class Aa extends zn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class Bi extends wt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new D,u=new D,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const E=[],S=p/i;let T=0;p===0&&a===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const A=I/t;f.x=-e*Math.cos(n+A*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(n+A*s)*Math.sin(a+S*o),_.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),d.push(A+T,1-S),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const S=h[p][E+1],T=h[p][E],I=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&m.push(S,T,A),(p!==i-1||l<Math.PI)&&m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ra extends wt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new D,f=new D,u=new D;for(let m=0;m<=i;m++)for(let _=0;_<=n;_++){const x=_/n*s,d=m/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(x),f.y=(e+t*Math.cos(d))*Math.sin(x),f.z=t*Math.sin(d),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=n;_++){const x=(n+1)*m+_-1,d=(n+1)*(m-1)+_-1,p=(n+1)*(m-1)+_,E=(n+1)*m+_;a.push(x,d,E),a.push(d,p,E)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Et extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dl extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vs=new Qe,Bo=new D,ko=new D;class dm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bo),ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ko),t.updateMatrixWorld(),vs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pm extends dm{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ho extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fm extends Dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Go();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Go(){return performance.now()}class gm extends hm{constructor(e=10,t=10,i=4473924,n=8947848){i=new Pe(i),n=new Pe(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,m=0,_=-o;u<=t;u++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const x=u===s?i:n;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const h=new wt;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const f=new Pl({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const gi={gravity:-38,ground:0,arenaRadius:11,damping:.86,groundFriction:.78,substeps:3,constraintIters:12},jt={katana:{name:"刀",reach:2.2,mass:1,dmg:1,color:14673646,width:.1,swing:1.25},greatsword:{name:"大剣",reach:2.9,mass:1.7,dmg:1.5,color:13094358,width:.18,swing:.85},rapier:{name:"レイピア",reach:2.5,mass:.7,dmg:.8,color:15331061,width:.06,swing:1.55},axe:{name:"斧",reach:1.9,mass:1.9,dmg:1.7,color:12169895,width:.22,swing:.8},spear:{name:"槍",reach:3.2,mass:1.1,dmg:1.1,color:14207920,width:.07,swing:1},hammer:{name:"ハンマー",reach:1.8,mass:2.3,dmg:2,color:10133672,width:.3,swing:.7}},_i={arena:{name:"ネオン闘技場",ground:1448494,accent:58879,sky:658458,ringOut:!0,fog:658458,hazard:null},meadow:{name:"草原",ground:5025616,accent:16774064,sky:10475263,ringOut:!1,fog:12576511,hazard:null},cliff:{name:"断崖",ground:7166532,accent:16747069,sky:16761994,ringOut:!0,fog:16767400,hazard:"cliff"},saw:{name:"回転刃",ground:2106414,accent:16726876,sky:1184796,ringOut:!0,fog:1184796,hazard:"saw"}},xt={head:.42,chest:.4,hip:.36,hand:.16,foot:.18},Cr={hitThreshold:9,lockEnergy:22,severEnergy:46,koLockedJoints:4,staggerTime:.55},Lr={p1:16766515,p2:16734797},ha={easy:{react:.55,aggression:.4,swingPower:.7,dodge:.15,label:"EASY"},normal:{react:.32,aggression:.65,swingPower:1,dodge:.35,label:"NORMAL"},hard:{react:.16,aggression:.85,swingPower:1.25,dodge:.6,label:"HARD"},insane:{react:.08,aggression:1,swingPower:1.5,dodge:.8,label:"INSANE"}},_m=()=>({x:0,y:0,z:0});class vm{constructor(e,t,i,n=.3,s=1){this.p={x:e,y:t,z:i},this.pp={x:e,y:t,z:i},this.acc=_m(),this.radius=n,this.invMass=s>0?1/s:0,this.pinned=!1,this.onGround=!1}addForce(e,t,i){this.acc.x+=e*this.invMass,this.acc.y+=t*this.invMass,this.acc.z+=i*this.invMass}setPos(e,t,i){this.p.x=e,this.p.y=t,this.p.z=i,this.pp.x=e,this.pp.y=t,this.pp.z=i}vel(){return{x:this.p.x-this.pp.x,y:this.p.y-this.pp.y,z:this.p.z-this.pp.z}}}class xm{constructor(e,t,i=null,n=1){this.a=e,this.b=t,this.len=i??Il(e.p,t.p),this.stiffness=n}solve(){const e=this.a,t=this.b;let i=t.p.x-e.p.x,n=t.p.y-e.p.y,s=t.p.z-e.p.z,a=Math.sqrt(i*i+n*n+s*s)||1e-6;const o=(a-this.len)/a*this.stiffness,l=e.invMass+t.invMass;if(l===0)return;const c=e.invMass/l,h=t.invMass/l;i*=o,n*=o,s*=o,e.p.x+=i*c,e.p.y+=n*c,e.p.z+=s*c,t.p.x-=i*h,t.p.y-=n*h,t.p.z-=s*h}}class ym{constructor(e,t,i,n=.5){this.node=e,this.anchor=t,this.offset=i,this.strength=n,this.enabled=!0}solve(){if(!this.enabled)return;const e=this.anchor.p.x+this.offset.x,t=this.anchor.p.y+this.offset.y,i=this.anchor.p.z+this.offset.z;this.node.p.x+=(e-this.node.p.x)*this.strength,this.node.p.y+=(t-this.node.p.y)*this.strength,this.node.p.z+=(i-this.node.p.z)*this.strength}}function Il(r,e){const t=r.x-e.x,i=r.y-e.y,n=r.z-e.z;return Math.sqrt(t*t+i*i+n*n)}class Vo{constructor(){this.particles=[],this.sticks=[],this.muscles=[],this.ground=gi.ground,this.arenaRadius=1/0,this.cliffEdge=!1}add(e){return this.particles.push(e),e}addStick(e){return this.sticks.push(e),e}addMuscle(e){return this.muscles.push(e),e}remove(e){this.particles=this.particles.filter(t=>t!==e),this.sticks=this.sticks.filter(t=>t.a!==e&&t.b!==e),this.muscles=this.muscles.filter(t=>t.node!==e&&t.anchor!==e)}removeStick(e){this.sticks=this.sticks.filter(t=>t!==e)}step(e){const t=gi.substeps,i=e/t;for(let n=0;n<t;n++)this.substep(i)}substep(e){const t=gi.gravity,i=gi.damping;for(const n of this.particles){if(n.pinned){n.acc.x=n.acc.y=n.acc.z=0;continue}n.addForce(0,t,0);const s=(n.p.x-n.pp.x)*i,a=(n.p.y-n.pp.y)*i,o=(n.p.z-n.pp.z)*i;n.pp.x=n.p.x,n.pp.y=n.p.y,n.pp.z=n.p.z,n.p.x+=s+n.acc.x*e*e,n.p.y+=a+n.acc.y*e*e,n.p.z+=o+n.acc.z*e*e,n.acc.x=n.acc.y=n.acc.z=0}for(const n of this.muscles)n.solve();for(let n=0;n<gi.constraintIters;n++){for(const s of this.sticks)s.solve();this.collisions()}}collisions(){const e=this.arenaRadius;for(const t of this.particles)if(t.onGround=!1,t.p.y-t.radius<this.ground){const i=Math.sqrt(t.p.x*t.p.x+t.p.z*t.p.z),n=!isFinite(e)||i<e,s=this.cliffEdge&&Math.abs(t.p.z)>6.5;if(n&&!s){t.p.y=this.ground+t.radius;const a=gi.groundFriction;t.pp.x=t.p.x-(t.p.x-t.pp.x)*a,t.pp.z=t.p.z-(t.p.z-t.pp.z)*a,t.pp.y<t.p.y&&(t.pp.y=t.p.y),t.onGround=!0}}}}class mn{constructor(e,t,i={}){this.world=e,this.scene=t,this.color=i.color??Lr.p1,this.facing=i.facing??1,this.weaponKey=i.weapon??"katana",this.weapon=jt[this.weaponKey],this.id=i.id??"p",this.name=i.name??"PLAYER";const n=i.x??0,s=i.z??0;this.alive=!0,this.locked={},this.severed={},this.energy={},this.stagger=0,this.swingT=0,this.swinging=!1,this.blocking=!1,this.moveDir={x:0,z:0},this.swingDir={x:0,y:0},this.koTimer=0,this.nodes={},this.bones={},this.muscles={},this.buildBody(n,s),this.buildVisuals()}buildBody(e,t){const i=this.world,n=(o,l,c,h,f,u)=>{const m=new vm(e+l,c,t+h,f,u);return this.nodes[o]=m,i.add(m),this.energy[o]=0,m};n("head",0,3.4,0,xt.head,1),n("chest",0,2.7,0,xt.chest,2.2),n("hip",0,1.9,0,xt.hip,2.5),n("handL",-.7,2.4,0,xt.hand,.8),n("handR",.7*this.facing,2.4,0,xt.hand,.8),n("footL",-.4,.2,0,xt.foot,1.2),n("footR",.4,.2,0,xt.foot,1.2);const s=(o,l,c,h,f=1)=>{const u=new xm(this.nodes[l],this.nodes[c],h,f);return this.bones[o]=u,i.addStick(u),u};s("neck","head","chest",.7,.9),s("spine","chest","hip",.85,1),s("armL","chest","handL",1.15,.55),s("armR","chest","handR",1.15,.55),s("legL","hip","footL",1.7,.85),s("legR","hip","footR",1.7,.85),s("braceL","hip","handL",1.7,.18),s("braceR","hip","handR",1.7,.18);const a=(o,l,c,h,f)=>{const u=new ym(this.nodes[l],this.nodes[c],h,f);return this.muscles[o]=u,i.addMuscle(u),u};a("standChest","chest","hip",{x:0,y:.85,z:0},.22),a("standHead","head","chest",{x:0,y:.7,z:0},.18)}buildVisuals(){this.group=new xi,this.scene.add(this.group);const e=new Et({color:this.color,roughness:.25,metalness:.1,emissive:new Pe(this.color).multiplyScalar(.06)});this.mat=e,this.meshes={};const t=(l,c)=>{const h=new He(new Bi(c,18,14),e);h.castShadow=!0,this.group.add(h),this.meshes[l]=h};t("head",xt.head),t("chest",xt.chest),t("hip",xt.hip),t("handL",xt.hand),t("handR",xt.hand),t("footL",xt.foot),t("footR",xt.foot);const i=new Nr({color:1118481}),n=new Bi(.09,8,8);this.eyeL=new He(n,i),this.eyeR=new He(n,i);const s=new Nr({color:16777215});this.eyeWL=new He(new Bi(.15,10,10),s),this.eyeWR=new He(new Bi(.15,10,10),s),this.meshes.head.add(this.eyeWL,this.eyeWR),this.eyeWL.add(this.eyeL),this.eyeWR.add(this.eyeR),this.tubes={};const a=new Et({color:this.color,roughness:.3,metalness:.1});this.tubeMat=a;const o=(l,c)=>{const h=new He(new Gi(c,c,1,12),a);h.castShadow=!0,this.group.add(h),this.tubes[l]=h};o("neck",.22),o("spine",.34),o("armL",.16),o("armR",.16),o("legL",.2),o("legR",.2),this.buildSword()}buildSword(){this.sword&&this.group.remove(this.sword);const e=this.weapon,t=new xi,i=new He(new Gi(.07,.07,.5,8),new Et({color:2763306,roughness:.6,metalness:.3})),n=new He(new oi(.5,.08,.12),new Et({color:9071931,metalness:.5,roughness:.4}));n.position.y=.25;const s=new He(new oi(e.width,e.reach,.05),new Et({color:e.color,metalness:.85,roughness:.18,emissive:2236962}));s.position.y=.3+e.reach/2,s.castShadow=!0,t.add(i,n,s),this.sword=t,this.bladeMesh=s,this.group.add(t)}setWeapon(e){this.weaponKey=e,this.weapon=jt[e],this.buildSword()}swordTip(e={}){const t=this.nodes.handR.p,i=this.swordWorldDir,n=this.weapon.reach+.3;return e.x=t.x+i.x*n,e.y=t.y+i.y*n,e.z=t.z+i.z*n,e}setMove(e,t){this.moveDir.x=e,this.moveDir.z=t}setSwing(e,t){const i=Math.hypot(e,t);i<.15||(this.swingDir.x=e/i,this.swingDir.y=t/i,this.swinging=!0,this.swingT=0)}setBlock(e){this.blocking=e}jointLockCount(){return Object.keys(this.locked).length}applyImpact(e,t,i){if(this.severed[e])return;this.energy[e]+=t;const n=this.nodes[e];n&&(n.pp.x=n.p.x-i.x*.04,n.pp.y=n.p.y-i.y*.04,n.pp.z=n.p.z-i.z*.04),this.stagger=Math.max(this.stagger,Cr.staggerTime);const s={head:"neck",handR:"armR",handL:"armL",footR:"legR",footL:"legL",chest:"spine",hip:"spine"}[e];this.energy[e]>=Cr.lockEnergy&&s&&!this.locked[s]&&(this.locked[s]=!0,this.bones[s]&&(this.bones[s].stiffness*=.25),s==="spine"&&this.muscles.standChest&&(this.muscles.standChest.strength*=.4)),this.energy[e]>=Cr.severEnergy&&!this.severed[e]&&(this.severed[e]=!0,s&&this.bones[s]&&(this.world.removeStick(this.bones[s]),this.bones[s]=null),this.onSever?.(e)),this.checkKO()}checkKO(){if(!this.alive)return;const e=this.jointLockCount(),t=this.severed.head||this.severed.hip||this.severed.chest;if(e>=Cr.koLockedJoints||t){this.alive=!1;for(const i of Object.values(this.muscles))i.enabled=!1;this.onKO?.()}}update(e,t){if(this.stagger>0&&(this.stagger-=e),this.alive&&this.stagger<=0){const i=this.moveDir.x*6,n=this.moveDir.z*6;for(const s of["footL","footR","hip"]){const a=this.nodes[s];(a.onGround||s==="hip")&&(a.pp.x-=i*e*(s==="hip"?.6:1),a.pp.z-=n*e*(s==="hip"?.6:1))}if(t){const s=t.nodes.hip.p.x-this.nodes.hip.p.x;this.facing=s>=0?1:-1}else Math.abs(this.moveDir.x)>.05&&(this.facing=this.moveDir.x>0?1:-1)}this.updateSword(e,t),this.syncVisuals()}updateSword(e,t){const i=this.nodes.handR,n=this.nodes.chest.p;let s={x:this.facing*.4,y:.9,z:0};if(this.alive&&!this.locked.armR){if(this.swinging){this.swingT+=e*(3.2*this.weapon.swing);const o=this.swingT,l=Math.sin(Math.min(o,Math.PI));s={x:this.swingDir.x*1.2*l+this.facing*.3,y:.4+this.swingDir.y*1.1*l,z:.25*Math.cos(o)};const c=1,h=n.x+s.x*c,f=n.y+s.y*c,u=n.z+s.z*c;i.p.x+=(h-i.p.x)*.5,i.p.y+=(f-i.p.y)*.5,i.p.z+=(u-i.p.z)*.5,o>=Math.PI&&(this.swinging=!1,this.swingT=0)}else if(this.blocking){s={x:this.facing*.2,y:1,z:0};const o=n.x+s.x,l=n.y+s.y;n.z,i.p.x+=(o-i.p.x)*.3,i.p.y+=(l-i.p.y)*.3}}else s={x:this.facing*.1,y:-.3,z:0};const a=Math.hypot(s.x,s.y,s.z)||1;this.swordWorldDir={x:s.x/a,y:s.y/a,z:s.z/a}}syncVisuals(){const e=this.meshes,t=this.nodes;for(const c of Object.keys(e))t[c]&&(e[c].position.set(t[c].p.x,t[c].p.y,t[c].p.z),e[c].visible=!this.severed[c]);const i=.18,n=xt.head*.85*this.facing;this.eyeWL.position.set(-i,.08,Math.abs(n)),this.eyeWR.position.set(i,.08,Math.abs(n)),this.eyeWL.position.x*=this.facing,this.eyeWR.position.x*=this.facing,this.eyeL.position.set(0,0,.08*this.facing),this.eyeR.position.set(0,0,.08*this.facing),this.setTube("neck",t.head,t.chest),this.setTube("spine",t.chest,t.hip),this.setTube("armL",t.chest,t.handL),this.setTube("armR",t.chest,t.handR),this.setTube("legL",t.hip,t.footL),this.setTube("legR",t.hip,t.footR);const s=t.handR.p,a=this.swordWorldDir;this.sword.position.set(s.x,s.y,s.z),this.sword.visible=!this.severed.handR;const o=new D(0,1,0),l=new D(a.x,a.y,a.z).normalize();this.sword.quaternion.setFromUnitVectors(o,l)}setTube(e,t,i){const n=this.tubes[e];if(!n)return;const s=t.p.x,a=t.p.y,o=t.p.z,l=i.p.x,c=i.p.y,h=i.p.z,f=(s+l)/2,u=(a+c)/2,m=(o+h)/2;n.position.set(f,u,m);const _=Math.hypot(l-s,c-a,h-o);n.scale.y=_;const x=new D(0,1,0),d=new D(l-s,c-a,h-o).normalize();n.quaternion.setFromUnitVectors(x,d);const p=e==="neck"&&this.severed.head||e==="armR"&&this.severed.handR||e==="armL"&&this.severed.handL;n.visible=!p}serialize(){const e={};for(const[t,i]of Object.entries(this.nodes))e[t]=[xs(i.p.x),xs(i.p.y),xs(i.p.z)];return{nodes:e,facing:this.facing,swinging:this.swinging,alive:this.alive,locked:Object.keys(this.locked),severed:Object.keys(this.severed)}}applyState(e){if(!(!e||!e.nodes)){for(const[t,i]of Object.entries(e.nodes)){const n=this.nodes[t];n&&(n.p.x+=(i[0]-n.p.x)*.5,n.p.y+=(i[1]-n.p.y)*.5,n.p.z+=(i[2]-n.p.z)*.5,n.pp.x=n.p.x,n.pp.y=n.p.y,n.pp.z=n.p.z)}this.facing=e.facing,this.alive=e.alive;for(const t of e.locked||[])this.locked[t]=!0;for(const t of e.severed||[])this.severed[t]=!0}}destroy(){this.scene.remove(this.group);for(const e of Object.values(this.nodes))this.world.remove(e)}}function xs(r){return Math.round(r*100)/100}class Mm{constructor(e,t,i="arena"){this.scene=e,this.world=t,this.stageKey=i,this.stage=_i[i]??_i.arena,this.props=new xi,this.hazards=[],e.add(this.props),this.build()}clear(){this.scene.remove(this.props),this.props=new xi,this.scene.add(this.props),this.hazards=[]}build(){const e=this.stage;this.scene.background=new Pe(e.sky),this.scene.fog=new wa(e.fog,22,60);const t=e.ringOut?gi.arenaRadius:40;this.world.arenaRadius=e.ringOut?gi.arenaRadius:1/0,this.world.cliffEdge=e.hazard==="cliff";const i=new Gi(t,t,1,48),n=new Et({color:e.ground,roughness:.9,metalness:.05}),s=new He(i,n);s.position.y=-.5,s.receiveShadow=!0,this.props.add(s);const a=new Ra(t,.18,12,64),o=new Et({color:e.accent,emissive:e.accent,emissiveIntensity:1.2,roughness:.4}),l=new He(a,o);l.rotation.x=Math.PI/2,l.position.y=.02,this.props.add(l),this.ring=l,this.stageKey==="arena"?this.buildArenaDecor(t,e):this.stageKey==="meadow"?this.buildMeadow(t,e):this.stageKey==="cliff"?this.buildCliff(t,e):this.stageKey==="saw"&&this.buildSaw(t,e)}buildArenaDecor(e,t){for(let n=0;n<10;n++){const s=n/10*Math.PI*2,a=new He(new oi(.4,6,.4),new Et({color:1711930,emissive:t.accent,emissiveIntensity:.3}));a.position.set(Math.cos(s)*(e+2.5),3,Math.sin(s)*(e+2.5)),this.props.add(a);const o=new He(new Bi(.3,10,10),new Nr({color:t.accent}));o.position.set(Math.cos(s)*(e+2.5),6,Math.sin(s)*(e+2.5)),this.props.add(o)}const i=new gm(e*2,24,t.accent,2240594);i.position.y=.03,i.material.opacity=.25,i.material.transparent=!0,this.props.add(i)}buildMeadow(e,t){const i=new Et({color:15263976,roughness:1,flatShading:!0}),n=new Et({color:3046706,roughness:1,flatShading:!0}),s=new Et({color:10243532,roughness:1});for(let a=0;a<40;a++){const o=Math.random()*Math.PI*2,l=e*(.4+Math.random()*.7),c=Math.cos(o)*l,h=Math.sin(o)*l,f=Math.random();let u;f<.4?u=new He(new ba(.3+Math.random()*.4),i):f<.8?u=new He(new or(.35,.8,5),n):u=new He(new Aa(.25),s),u.position.set(c,.2,h),u.castShadow=!0,u.rotation.y=Math.random()*Math.PI,this.props.add(u)}for(let a=0;a<8;a++){const o=a/8*Math.PI*2,l=new He(new or(8+Math.random()*4,14+Math.random()*6,5),new Et({color:6983503,flatShading:!0,roughness:1}));l.position.set(Math.cos(o)*48,4,Math.sin(o)*48),this.props.add(l)}}buildCliff(e,t){const i=new He(new oi(e*2,1,12),new Et({color:t.ground,roughness:1,flatShading:!0}));i.position.y=-.5,i.receiveShadow=!0,this.props.add(i);for(let n=0;n<6;n++){const s=new He(new or(2,20,5),new Et({color:9071951,flatShading:!0}));s.position.set((n-3)*9,-14,n%2?14:-14),this.props.add(s)}}buildSaw(e,t){const i=new Et({color:11579576,metalness:.9,roughness:.2,emissive:t.accent,emissiveIntensity:.2}),n=[[0,0],[e*.55,0],[-e*.55,0]];for(const[s,a]of n){const o=new He(new Gi(1.6,1.6,.2,16),i);o.rotation.z=Math.PI/2,o.position.set(s,1.6,a);for(let l=0;l<12;l++){const c=l/12*Math.PI*2,h=new He(new or(.25,.5,4),i);h.position.set(Math.cos(c)*1.7,0,Math.sin(c)*1.7),h.rotation.z=-c+Math.PI/2,o.add(h)}this.props.add(o),this.hazards.push({mesh:o,type:"saw",x:s,z:a,r:1.9})}}update(e,t){this.ring&&(this.ring.material.emissiveIntensity=1+Math.sin(performance.now()*.004)*.3);for(const i of this.hazards)if(i.type==="saw"){i.mesh.rotation.x+=e*8;for(const n of t)if(n.alive)for(const s of["chest","hip","head"]){const a=n.nodes[s].p;Math.hypot(a.x-i.x,a.z-i.z)<i.r&&Math.abs(a.y-1.6)<1.2&&n.applyImpact(s,30,{x:(a.x-i.x)*20,y:8,z:(a.z-i.z)*20})}}}}class Sm{constructor(e,t){this.scene=e,this.camera=t,this.sparks=[],this.shakeAmt=0,this.shakeT=0,this.hitstop=0,this.baseCamPos=new D,this.sparkGeo=new wt;const i=400;this.maxSparks=i;const n=new Float32Array(i*3);this.sparkGeo.setAttribute("position",new Xt(n,3)),this.sparkMat=new Ul({color:16765514,size:.22,transparent:!0,opacity:.95,blending:Ss,depthWrite:!1}),this.sparkPoints=new um(this.sparkGeo,this.sparkMat),this.scene.add(this.sparkPoints),this.live=[]}burst(e,t,i,n=20,s=16765514){this.sparkMat.color.setHex(s);for(let a=0;a<n;a++){const o=Math.random()*Math.PI*2,l=Math.random()*Math.PI,c=6+Math.random()*12;this.live.push({x:e,y:t,z:i,vx:Math.sin(l)*Math.cos(o)*c,vy:Math.cos(l)*c+4,vz:Math.sin(l)*Math.sin(o)*c,life:.4+Math.random()*.4})}this.live.length>this.maxSparks&&this.live.splice(0,this.live.length-this.maxSparks)}shake(e=.4,t=.25){this.shakeAmt=Math.max(this.shakeAmt,e),this.shakeT=Math.max(this.shakeT,t)}stop(e=.05){this.hitstop=Math.max(this.hitstop,e)}update(e){const t=this.sparkGeo.attributes.position.array;let i=0;for(let n=this.live.length-1;n>=0;n--){const s=this.live[n];if(s.life-=e,s.life<=0){this.live.splice(n,1);continue}s.vy-=28*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,i<this.maxSparks&&(t[i*3]=s.x,t[i*3+1]=s.y,t[i*3+2]=s.z,i++)}if(this.sparkGeo.setDrawRange(0,i),this.sparkGeo.attributes.position.needsUpdate=!0,this.sparkMat.opacity=.95,this.shakeT>0){this.shakeT-=e;const n=this.shakeAmt*(this.shakeT>0?1:0);this.shakeOffset=new D((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}else this.shakeOffset=new D}}class Em{constructor(){this.ctx=null,this.master=null,this.enabled=!0,this._music=null}init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.4,this.master.connect(this.ctx.destination)}catch{this.enabled=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}tone(e,t,i="sine",n=.3,s=null){if(!this.ctx||!this.enabled)return;const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=i,a.frequency.value=e,s&&a.frequency.exponentialRampToValueAtTime(s,this.ctx.currentTime+t),o.gain.setValueAtTime(n,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t),a.connect(o),o.connect(this.master),a.start(),a.stop(this.ctx.currentTime+t)}noise(e,t=.3,i=2e3){if(!this.ctx||!this.enabled)return;const n=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),a=s.getChannelData(0);for(let h=0;h<n;h++)a[h]=(Math.random()*2-1)*(1-h/n);const o=this.ctx.createBufferSource();o.buffer=s;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=i;const c=this.ctx.createGain();c.gain.value=t,o.connect(l),l.connect(c),c.connect(this.master),o.start()}slash(){this.noise(.18,.25,3500),this.tone(900,.12,"sawtooth",.08,400)}clang(){this.tone(1400,.25,"square",.18,600),this.tone(2100,.2,"triangle",.1),this.noise(.1,.15,5e3)}hit(){this.noise(.2,.35,800),this.tone(120,.25,"sine",.3,60)}sever(){this.noise(.35,.4,500),this.tone(80,.4,"sawtooth",.3,40)}ko(){this.tone(440,.6,"square",.25,110),this.tone(220,.6,"sine",.2,80)}win(){[523,659,784,1047].forEach((e,t)=>setTimeout(()=>this.tone(e,.3,"triangle",.2),t*120))}lose(){[392,330,262,196].forEach((e,t)=>setTimeout(()=>this.tone(e,.35,"sine",.2),t*140))}blip(){this.tone(660,.08,"square",.12)}startMusic(){if(!this.ctx||this._music)return;const e=this.ctx.createGain();e.gain.value=.06,e.connect(this.master);const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=55;const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.value=82.4;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=400,t.connect(n),i.connect(n),n.connect(e),t.start(),i.start(),this._music={g:e,o1:t,o2:i,f:n},this._arp=setInterval(()=>{if(!this.ctx)return;const s=[110,138.6,164.8,138.6],a=s[Math.floor(Math.random()*s.length)];this.tone(a,.2,"square",.04)},480)}stopMusic(){if(this._music){try{this._music.o1.stop(),this._music.o2.stop()}catch{}this._music=null}this._arp&&(clearInterval(this._arp),this._arp=null)}}const St=new Em;class Wo{constructor(e,t="normal"){this.f=e,this.prof=ha[t]??ha.normal,this.timer=0,this.state="approach",this.decisionT=0}update(e,t){const i=this.f;if(!i.alive||!t){i.setMove(0,0);return}this.decisionT-=e;const n=i.nodes.hip.p,s=t.nodes.hip.p,a=s.x-n.x,o=s.z-n.z,l=Math.hypot(a,o),c=a/(l||1),h=o/(l||1),f=i.weapon.reach+1.4;if(t.swinging&&l<f+1&&Math.random()<this.prof.dodge*e*12){i.setMove(-h,c),Math.random()<this.prof.dodge&&i.setBlock(!0);return}if(i.setBlock(!1),this.decisionT<=0&&(this.decisionT=this.prof.react+Math.random()*.2,l>f?this.state="approach":Math.random()<this.prof.aggression?this.state="attack":this.state="circle"),this.state==="approach")i.setMove(c,h);else if(this.state==="circle")i.setMove(-h*.8,c*.8);else if(this.state==="attack"&&(i.setMove(c*.4,h*.4),l<f&&!i.swinging&&Math.random()<this.prof.aggression*e*14)){const u=c*this.prof.swingPower,m=-.4+Math.random()*.4;i.setSwing(u,m<0?m:-.6)}}}class Tm{constructor(e,t,i){this.canvas=e,this.ui=t,this.input=i,this.net=null,this.renderer=new om({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qo,this.scene=new lm,this.camera=new Ot(55,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,9,16),this.camera.lookAt(0,2,0),this.setupLights(),this.effects=new Sm(this.scene,this.camera),this.world=new Vo,this.fighters=[],this.arena=null,this.running=!1,this.matchOver=!1,this.localIndex=0,this.aiCtrl=null,this.clock=new mm,this.lastNetSend=0,window.addEventListener("resize",()=>this.onResize()),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){const e=new fm(16777215,.55);this.scene.add(e);const t=new Ho(16777215,1.1);t.position.set(8,18,10),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-20,t.shadow.camera.right=20,t.shadow.camera.top=20,t.shadow.camera.bottom=-20,this.scene.add(t);const i=new Ho(8956671,.4);i.position.set(-10,8,-8),this.scene.add(i),this.dirLight=t}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}startMatch(e){this.cleanup(),this.mode=e.mode,this.localIndex=e.localIndex??0,this.matchOver=!1,this.round=1,this.scores=[0,0];const t=e.stage||"arena";this.arena=new Mm(this.scene,this.world,t);const i=e.weapons||["katana","katana"],n=e.names||["P1","P2"],s=new mn(this.world,this.scene,{id:"p0",color:Lr.p1,x:-5,facing:1,weapon:i[0],name:n[0]}),a=new mn(this.world,this.scene,{id:"p1",color:Lr.p2,x:5,facing:-1,weapon:i[1],name:n[1]});this.fighters=[s,a],this.bindFighterEvents(),this.mode==="ai"?this.aiCtrl=new Wo(a,e.difficulty||"normal"):this.aiCtrl=null,this.ui.setupHUD(n,this.scores),this.running=!0,St.startMusic(),this.ui.show("game")}bindFighterEvents(){for(const e of this.fighters)e.onSever=t=>{St.sever(),this.effects.burst(e.nodes[t]?.p.x||0,e.nodes[t]?.p.y||2,e.nodes[t]?.p.z||0,30,16724804),this.effects.shake(.6,.3),this.effects.stop(.08)},e.onKO=()=>this.onKO(e)}onKO(e){if(this.matchOver)return;const t=1-this.fighters.indexOf(e);if(this.scores[t]++,St.ko(),this.effects.shake(.8,.5),this.effects.stop(.12),this.ui.updateScore(this.scores),this.scores[t]>=2){this.matchOver=!0,this.running=!1,St.stopMusic();const i=t===this.localIndex||this.mode==="local";setTimeout(()=>{this.mode==="local"?this.ui.showResult(`PLAYER ${t+1} WINS!`,!0):this.ui.showResult(i?"YOU WIN!":"YOU LOSE...",i),i?St.win():St.lose()},1200)}else setTimeout(()=>this.nextRound(),1600)}nextRound(){this.round++;const e=this.fighters.map(s=>s.weaponKey),t=this.fighters.map(s=>s.name);this.arena.stageKey;for(const s of this.fighters)s.destroy();const i=new mn(this.world,this.scene,{id:"p0",color:Lr.p1,x:-5,facing:1,weapon:e[0],name:t[0]}),n=new mn(this.world,this.scene,{id:"p1",color:Lr.p2,x:5,facing:-1,weapon:e[1],name:t[1]});this.fighters=[i,n],this.bindFighterEvents(),this.mode==="ai"&&(this.aiCtrl=new Wo(n,this.aiDifficulty||"normal")),this.ui.announce(`ROUND ${this.round}`),this.running=!0}resolveCombat(e){const[t,i]=this.fighters;!t||!i||(this.checkSwordHits(t,i),this.checkSwordHits(i,t),this.checkSwordClash(t,i))}checkSwordHits(e,t){if(!e.alive||!e.swinging||e.locked.armR)return;const i=e.swordTip(),n=e.nodes.handR.p;for(const[s,a]of Object.entries(t.nodes))if(!t.severed[s]&&wm(a.p,n,i)<a.radius+.25){const o=e.nodes.handR.vel(),l=Math.hypot(o.x,o.y,o.z)*60;if(l<Cr.hitThreshold)continue;if(t.blocking&&this.blockChance(e,t)){St.clang(),this.effects.burst(i.x,i.y,i.z,18,8969727),this.effects.shake(.2,.12),e.nodes.handR.pp.x=e.nodes.handR.p.x;continue}const c=l*e.weapon.dmg*.6,h={x:o.x*60,y:Math.abs(o.y*60)+3,z:o.z*60};t.applyImpact(s,c,h),St.hit(),this.effects.burst(a.p.x,a.p.y,a.p.z,22,16729122),this.effects.shake(.35,.18),this.effects.stop(.05),e.swinging=!1;break}}blockChance(e,t){const i=e.nodes.hip.p.x-t.nodes.hip.p.x,n=t.facing>0;return i>0===n?Math.random()<.85:Math.random()<.2}checkSwordClash(e,t){if(!e.swinging||!t.swinging)return;const i=e.swordTip(),n=t.swordTip();if(Il(i,n)<.9){St.clang();const s=(i.x+n.x)/2,a=(i.y+n.y)/2,o=(i.z+n.z)/2;this.effects.burst(s,a,o,24,16772744),this.effects.shake(.3,.15),e.swinging=!1,t.swinging=!1}}applyLocalInput(){const e=this.fighters[this.localIndex];if(!e||!e.alive)return;this.input.pollDesktop(),e.setMove(this.input.move.x,this.input.move.z),e.setBlock(this.input.blocking);const t=this.input.consumeSwing();t&&(e.setSwing(t.dx,t.dy),St.slash())}updateCamera(e){if(this.fighters.length<2)return;const t=this.fighters[0].nodes.hip.p,i=this.fighters[1].nodes.hip.p,n=(t.x+i.x)/2,s=(t.z+i.z)/2,a=Math.hypot(t.x-i.x,t.z-i.z),o=jc.clamp(13+a*.6,13,24),l=new D(n,8,s+o);this.camera.position.lerp(l,1-Math.pow(.001,e));const c=new D(n,2.5,s);this._look=this._look||c.clone(),this._look.lerp(c,1-Math.pow(.001,e));const h=this.effects.shakeOffset||new D;this.camera.position.add(h),this.camera.lookAt(this._look)}loop(){requestAnimationFrame(this.loop);let e=Math.min(this.clock.getDelta(),.05);if(this.effects.update(e),this.running&&this.fighters.length===2){this.effects.hitstop>0&&(this.effects.hitstop-=e,e*=.15),this.mode==="online"&&this.net?(this.applyLocalInput(),this.networkSync(e)):(this.applyLocalInput(),this.aiCtrl&&this.aiCtrl.update(e,this.fighters[this.localIndex])),this.world.step(e);const t=[this.fighters[1],this.fighters[0]];this.fighters.forEach((i,n)=>i.update(e,t[n])),this.resolveCombat(e),this.arena.update(e,this.fighters),this.updateCamera(e),this.checkRingOut(),this.ui.updateBars(this.fighters)}else this.updateMenuCamera(e);this.renderer.render(this.scene,this.camera)}checkRingOut(){if(!this.matchOver){for(const e of this.fighters)if(e.alive&&e.nodes.hip.p.y<-8){e.alive=!1;for(const t of Object.values(e.muscles))t.enabled=!1;this.onKO(e)}}}updateMenuCamera(e){const t=performance.now()*3e-4;this.camera.position.set(Math.cos(t)*16,9,Math.sin(t)*16),this.camera.lookAt(0,2,0)}networkSync(e){if(this.lastNetSend+=e,this.lastNetSend>.05){this.lastNetSend=0;const t=this.fighters[this.localIndex];this.net.sendState(t.serialize())}}applyRemoteState(e){const t=1-this.localIndex,i=this.fighters[t];i&&i.applyState(e)}cleanup(){for(const e of this.fighters)e.destroy();this.fighters=[],this.arena&&this.arena.clear(),this.world=new Vo,this.aiCtrl=null}quitToMenu(){this.running=!1,this.matchOver=!0,St.stopMusic(),this.cleanup(),this.ui.show("menu")}}function wm(r,e,t){const i=t.x-e.x,n=t.y-e.y,s=t.z-e.z,a=r.x-e.x,o=r.y-e.y,l=r.z-e.z,c=i*i+n*n+s*s||1e-6;let h=(a*i+o*n+l*s)/c;h=Math.max(0,Math.min(1,h));const f=e.x+i*h,u=e.y+n*h,m=e.z+s*h;return Math.hypot(r.x-f,r.y-u,r.z-m)}class bm{constructor(){this.handlers={},this.screens={},this.input=null,document.querySelectorAll("[data-screen]").forEach(e=>{this.screens[e.dataset.screen]=e}),this.bind()}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,t){(this.handlers[e]||[]).forEach(i=>i(t))}show(e){document.getElementById("loading")?.classList.remove("show");for(const[t,i]of Object.entries(this.screens))i.classList.toggle("active",t===e);document.getElementById("touch-controls").style.display=e==="game"?"block":"none",document.getElementById("hud").style.display=e==="game"?"flex":"none",document.getElementById("btn-pause").style.display=e==="game"?"block":"none"}hide(e){this.screens[e]?.classList.remove("active")}setLoading(e,t){const i=document.getElementById("load-bar"),n=document.getElementById("load-text");i&&(i.style.width=e+"%"),n&&t&&(n.textContent=t)}bind(){const e=i=>document.getElementById(i),t=(i,n)=>{const s=e(i);s&&s.addEventListener("click",()=>{this.emit("userInteract"),n()})};t("btn-ai",()=>this.show("ai-setup")),t("btn-local",()=>this.show("local-setup")),t("btn-online",()=>this.show("online-setup")),t("btn-howto",()=>this.show("howto")),document.querySelectorAll("[data-back]").forEach(i=>i.addEventListener("click",()=>this.show(i.dataset.back))),this.fillSelect("ai-weapon",jt,i=>jt[i].name),this.fillSelect("ai-stage",_i,i=>_i[i].name),this.fillSelect("local-weapon1",jt,i=>jt[i].name),this.fillSelect("local-weapon2",jt,i=>jt[i].name),this.fillSelect("local-stage",_i,i=>_i[i].name),this.fillSelect("online-weapon",jt,i=>jt[i].name),this.fillSelect("online-stage",_i,i=>_i[i].name),document.querySelectorAll("#ai-diff .diff-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll("#ai-diff .diff-btn").forEach(n=>n.classList.remove("sel")),i.classList.add("sel")})}),t("ai-start",()=>{const i=document.querySelector("#ai-diff .diff-btn.sel")?.dataset.diff||"normal";this.emit("startAI",{difficulty:i,weapon:e("ai-weapon").value,stage:e("ai-stage").value})}),t("local-start",()=>{this.emit("startLocal",{weapons:[e("local-weapon1").value,e("local-weapon2").value],stage:e("local-stage").value})}),document.querySelectorAll(".online-tabs .tab").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".online-tabs .tab").forEach(n=>n.classList.remove("active")),i.classList.add("active"),e("host-panel").style.display=i.dataset.tab==="host"?"block":"none",e("join-panel").style.display=i.dataset.tab==="join"?"block":"none"})}),t("host-create",()=>this.emit("hostRoom",{name:e("host-name").value||"Host",weapon:e("online-weapon").value,stage:e("online-stage").value})),t("join-go",()=>this.emit("joinRoom",{code:e("join-code").value,name:e("join-name").value||"Guest"})),t("online-start-match",()=>this.emit("onlineStart")),t("copy-link",()=>{const i=e("room-code-display").textContent,n=`${location.origin}${location.pathname}?room=${i}`;navigator.clipboard?.writeText(n);const s=e("copy-link"),a=s.textContent;s.textContent="コピーしました！",setTimeout(()=>s.textContent=a,1500)}),t("btn-pause",()=>{e("pause-overlay").classList.add("show")}),t("resume",()=>{e("pause-overlay").classList.remove("show")}),t("quit",()=>{e("pause-overlay").classList.remove("show"),this.emit("quit")}),t("result-menu",()=>{e("result-overlay").classList.remove("show"),this.emit("quit")}),t("result-rematch",()=>{e("result-overlay").classList.remove("show"),this.emit("rematch")})}fillSelect(e,t,i){const n=document.getElementById(e);if(n){n.innerHTML="";for(const s of Object.keys(t)){const a=document.createElement("option");a.value=s,a.textContent=i(s),n.appendChild(a)}}}showRoomCode(e,t=[]){this.show("online-lobby"),document.getElementById("room-code-display").textContent=e,this.updatePeers(t);const i=`${location.origin}${location.pathname}?room=${e}`;document.getElementById("room-link").textContent=i}updatePeers(e){const t=document.getElementById("peer-list");t&&(t.innerHTML="",e.forEach(i=>{const n=document.createElement("li");n.textContent="⚔ "+(i.name||i.id),t.appendChild(n)}))}setHostControls(e){const t=document.getElementById("online-start-match");t&&(t.style.display=e?"inline-block":"none");const i=document.getElementById("waiting-host");i&&(i.style.display=e?"none":"block")}setupHUD(e,t){document.getElementById("hud-name1").textContent=e[0],document.getElementById("hud-name2").textContent=e[1],this.updateScore(t),document.getElementById("hud").style.display="flex"}updateScore(e){document.getElementById("hud-score1").textContent=e[0],document.getElementById("hud-score2").textContent=e[1]}updateBars(e){e.forEach((t,i)=>{const n=t.jointLockCount(),s=Object.keys(t.severed).length,a=Math.max(0,100-n*22-s*30),o=document.getElementById("hud-hp"+(i+1));o&&(o.style.width=(t.alive?a:0)+"%")})}announce(e){const t=document.getElementById("announce");t&&(t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}showResult(e,t){const i=document.getElementById("result-overlay");document.getElementById("result-text").textContent=e,document.getElementById("result-text").className=t?"win":"lose",i.classList.add("show")}toast(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2500))}}const En=(r,e)=>{const t=e.x-r.x,i=e.y-r.y;return Math.sqrt(t*t+i*i)},Am=(r,e)=>{const t=e.x-r.x,i=e.y-r.y;return Cm(Math.atan2(i,t))},Rm=(r,e,t)=>{const i={x:0,y:0};return t=ua(t),i.x=r.x-e*Math.cos(t),i.y=r.y-e*Math.sin(t),i},ua=r=>r*(Math.PI/180),Cm=r=>r*(180/Math.PI),Lm=r=>isNaN(r.buttons)?r.pressure!==0:r.buttons!==0,ys=new Map,Xo=r=>{ys.has(r)&&clearTimeout(ys.get(r)),ys.set(r,setTimeout(r,100))},Un=(r,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],r.addEventListener?r.addEventListener(n,t,!1):r.attachEvent&&r.attachEvent(n,t)},jo=(r,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],r.removeEventListener?r.removeEventListener(n,t):r.detachEvent&&r.detachEvent(n,t)},Nl=r=>(r.preventDefault(),r.type.match(/^touch/)?r.changedTouches:r),qo=()=>{const r=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:r,y:e}},Yo=(r,e)=>{e.top||e.right||e.bottom||e.left?(r.style.top=e.top,r.style.right=e.right,r.style.bottom=e.bottom,r.style.left=e.left):(r.style.left=e.x+"px",r.style.top=e.y+"px")},Ca=(r,e,t)=>{const i=Ol(r);for(let n in i)if(i.hasOwnProperty(n))if(typeof e=="string")i[n]=e+" "+t;else{let s="";for(let a=0,o=e.length;a<o;a+=1)s+=e[a]+" "+t+", ";i[n]=s.slice(0,-2)}return i},Pm=(r,e)=>{const t=Ol(r);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},Ol=r=>{const e={};return e[r]="",["webkit","Moz","o"].forEach(function(t){e[t+r.charAt(0).toUpperCase()+r.slice(1)]=""}),e},Ms=(r,e)=>{for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},Um=(r,e)=>{const t={};for(let i in r)r.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:r.hasOwnProperty(i)&&(t[i]=r[i]);return t},da=(r,e)=>{if(r.length)for(let t=0,i=r.length;t<i;t+=1)e(r[t]);else e(r)},Dm=(r,e,t)=>({x:Math.min(Math.max(r.x,e.x-t),e.x+t),y:Math.min(Math.max(r.y,e.y-t),e.y+t)});var Im="ontouchstart"in window,Nm=!!window.PointerEvent,Om=!!window.MSPointerEvent,Ar={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},lr,Or={};Nm?lr=Ar.pointer:Om?lr=Ar.MSPointer:Im?(lr=Ar.touch,Or=Ar.mouse):lr=Ar.mouse;function li(){}li.prototype.on=function(r,e){var t=this,i=r.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]=t._handlers_[n]||[],t._handlers_[n].push(e);return t};li.prototype.off=function(r,e){var t=this;return t._handlers_=t._handlers_||{},r===void 0?t._handlers_={}:e===void 0?t._handlers_[r]=null:t._handlers_[r]&&t._handlers_[r].indexOf(e)>=0&&t._handlers_[r].splice(t._handlers_[r].indexOf(e),1),t};li.prototype.trigger=function(r,e){var t=this,i=r.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]&&t._handlers_[n].length&&t._handlers_[n].forEach(function(a){a.call(t,{type:n,target:t},e)})};li.prototype.config=function(r){var e=this;e.options=e.defaults||{},r&&(e.options=Um(e.options,r))};li.prototype.bindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},Un(r,lr[e],t._domHandlers_[e]),Or[e]&&Un(r,Or[e],t._domHandlers_[e]),t};li.prototype.unbindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},jo(r,lr[e],t._domHandlers_[e]),Or[e]&&jo(r,Or[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function ut(r,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=r,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=ut.id,ut.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}ut.prototype=new li;ut.constructor=ut;ut.id=0;ut.prototype.buildEl=function(r){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};ut.prototype.stylize=function(){if(this.options.dataOnly)return this;var r=this.options.fadeTime+"ms",e=Pm("borderRadius","50%"),t=Ca("transition","opacity",r),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Ms(i.el,t),this.options.shape==="circle"&&Ms(i.back,e),Ms(i.front,e),this.applyStyles(i),this};ut.prototype.applyStyles=function(r){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in r[e])this.ui[e].style[t]=r[e][t];return this};ut.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};ut.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};ut.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};ut.prototype.show=function(r){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof r=="function"&&r.call(this)},e.options.fadeTime)),e};ut.prototype.hide=function(r){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof r=="function"&&r.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(r,i)}return e};ut.prototype.setPosition=function(r,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",n={};n.front=Ca("transition",["transform"],i);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(n),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof r=="function"&&r.call(t),t.restCallback()},t.options.fadeTime)};ut.prototype.restCallback=function(){var r=this,e={};e.front=Ca("transition","none",""),r.applyStyles(e),r.trigger("rested",r.instance)};ut.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};ut.prototype.computeDirection=function(r){var e=r.angle.radian,t=Math.PI/4,i=Math.PI/2,n,s,a;if(e>t&&e<t*3&&!r.lockX?n="up":e>-t&&e<=t&&!r.lockY?n="left":e>-t*3&&e<=-t&&!r.lockX?n="down":r.lockY||(n="right"),r.lockY||(e>-i&&e<i?s="left":s="right"),r.lockX||(e>0?a="up":a="down"),r.force>this.options.threshold){var o={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(o[l]=this.direction[l]);var c={};this.direction={x:s,y:a,angle:n},r.direction=this.direction;for(l in o)o[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return r;(!c.x||!c.y)&&this.trigger("plain",r),c.x||this.trigger("plain:"+s,r),c.y||this.trigger("plain:"+a,r),c.angle||this.trigger("dir dir:"+n,r)}else this.resetDirection();return r};function st(r,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=r,t.id=st.id,st.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}st.prototype=new li;st.constructor=st;st.id=0;st.prototype.prepareNipples=function(){var r=this,e=r.nipples;e.on=r.on.bind(r),e.off=r.off.bind(r),e.options=r.options,e.destroy=r.destroy.bind(r),e.ids=r.ids,e.id=r.id,e.processOnMove=r.processOnMove.bind(r),e.processOnEnd=r.processOnEnd.bind(r),e.get=function(t){if(t===void 0)return e[0];for(var i=0,n=e.length;i<n;i+=1)if(e[i].identifier===t)return e[i];return!1}};st.prototype.bindings=function(){var r=this;r.bindEvt(r.options.zone,"start"),r.options.zone.style.touchAction="none",r.options.zone.style.msTouchAction="none"};st.prototype.begin=function(){var r=this,e=r.options;if(e.mode==="static"){var t=r.createNipple(e.position,r.manager.getIdentifier());t.add(),r.idles.push(t)}};st.prototype.createNipple=function(r,e){var t=this,i=t.manager.scroll,n={},s=t.options,a={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(r.x&&r.y)n={x:r.x-a.x,y:r.y-a.y};else if(r.top||r.right||r.bottom||r.left){var o=document.createElement("DIV");o.style.display="hidden",o.style.top=r.top,o.style.right=r.right,o.style.bottom=r.bottom,o.style.left=r.left,o.style.position="absolute",s.zone.appendChild(o);var l=o.getBoundingClientRect();s.zone.removeChild(o),n=r,r={x:l.left+i.x,y:l.top+i.y}}var c=new ut(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:r,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Yo(c.ui.el,n),Yo(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};st.prototype.updateBox=function(){var r=this;r.box=r.options.zone.getBoundingClientRect()};st.prototype.bindNipple=function(r){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",i),r.on("dir:up dir:right dir:down dir:left",i),r.on("plain:up plain:right plain:down plain:left",i)};st.prototype.pressureFn=function(r,e,t){var i=this,n=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval(function(){var s=r.force||r.pressure||r.webkitForce||0;s!==n&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),n=s)}.bind(i),100)};st.prototype.onstart=function(r){var e=this,t=e.options,i=r;r=Nl(r),e.updateBox();var n=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(i.touches).findIndex(function(l){return l.identifier===a})<0){var o=[r[0]];o.identifier=a,e.processOnEnd(o)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return da(r,n),e.manager.bindDocument(),!1};st.prototype.processOnStart=function(r){var e=this,t=e.options,i,n=e.manager.getIdentifier(r),s=r.force||r.pressure||r.webkitForce||0,a={x:r.pageX,y:r.pageY},o=e.getOrCreate(n,a);o.identifier!==n&&e.manager.removeIdentifier(o.identifier),o.identifier=n;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),s>0&&e.pressureFn(r,h,h.identifier),e.processOnMove(r)};if((i=e.idles.indexOf(o))>=0&&e.idles.splice(i,1),e.actives.push(o),e.ids.push(o.identifier),t.mode!=="semi")l(o);else{var c=En(a,o.position);if(c<=t.catchDistance)l(o);else{o.destroy(),e.processOnStart(r);return}}return o};st.prototype.getOrCreate=function(r,e){var t=this,i=t.options,n;return/(semi|static)/.test(i.mode)?(n=t.idles[0],n?(t.idles.splice(0,1),n):i.mode==="semi"?t.createNipple(e,r):(console.warn("Coudln't find the needed nipple."),!1)):(n=t.createNipple(e,r),n)};st.prototype.processOnMove=function(r){var e=this,t=e.options,i=e.manager.getIdentifier(r),n=e.nipples.get(i),s=e.manager.scroll;if(!Lm(r)){this.processOnEnd(r);return}if(!n){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var a=n.el.getBoundingClientRect();n.position={x:s.x+a.left,y:s.y+a.top}}n.identifier=i;var o=n.options.size/2,l={x:r.pageX,y:r.pageY};t.lockX&&(l.y=n.position.y),t.lockY&&(l.x=n.position.x);var c=En(l,n.position),h=Am(l,n.position),f=ua(h),u=c/o,m={distance:c,position:l},_,x;if(n.options.shape==="circle"?(_=Math.min(c,o),x=Rm(n.position,_,h)):(x=Dm(l,n.position,o),_=En(x,n.position)),t.follow){if(c>o){let S=l.x-x.x,T=l.y-x.y;n.position.x+=S,n.position.y+=T,n.el.style.top=n.position.y-(e.box.top+s.y)+"px",n.el.style.left=n.position.x-(e.box.left+s.x)+"px",c=En(l,n.position)}}else l=x,c=_;var d=l.x-n.position.x,p=l.y-n.position.y;n.frontPosition={x:d,y:p},t.dataOnly||(n.ui.front.style.transform="translate("+d+"px,"+p+"px)");var E={identifier:n.identifier,position:l,force:u,pressure:r.force||r.pressure||r.webkitForce||0,distance:c,angle:{radian:f,degree:h},vector:{x:d/o,y:-p/o},raw:m,instance:n,lockX:t.lockX,lockY:t.lockY};E=n.computeDirection(E),E.angle={radian:ua(180-h),degree:180-h},n.trigger("move",E),e.trigger("move "+n.id+":move",E)};st.prototype.processOnEnd=function(r){var e=this,t=e.options,i=e.manager.getIdentifier(r),n=e.nipples.get(i),s=e.manager.removeIdentifier(n.identifier);n&&(t.dataOnly||n.hide(function(){t.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(t.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};st.prototype.onDestroyed=function(r,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};st.prototype.destroy=function(){var r=this;r.unbindEvt(r.options.zone,"start"),r.nipples.forEach(function(t){t.destroy()});for(var e in r.pressureIntervals)r.pressureIntervals.hasOwnProperty(e)&&clearInterval(r.pressureIntervals[e]);r.trigger("destroyed",r.nipples),r.manager.unbindDocument(),r.off()};function mt(r){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=qo(),e.config(r),e.prepareCollections();var t=function(){var n;e.collections.forEach(function(s){s.forEach(function(a){n=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};Un(window,"resize",function(){Xo(t)});var i=function(){e.scroll=qo()};return Un(window,"scroll",function(){Xo(i)}),e.collections}mt.prototype=new li;mt.constructor=mt;mt.prototype.prepareCollections=function(){var r=this;r.collections.create=r.create.bind(r),r.collections.on=r.on.bind(r),r.collections.off=r.off.bind(r),r.collections.destroy=r.destroy.bind(r),r.collections.get=function(e){var t;return r.collections.every(function(i){return t=i.get(e),!t}),t}};mt.prototype.create=function(r){return this.createCollection(r)};mt.prototype.createCollection=function(r){var e=this,t=new st(e,r);return e.bindCollection(t),e.collections.push(t),t};mt.prototype.bindCollection=function(r){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",i),r.on("dir:up dir:right dir:down dir:left",i),r.on("plain:up plain:right plain:down plain:left",i)};mt.prototype.bindDocument=function(){var r=this;r.binded||(r.bindEvt(document,"move").bindEvt(document,"end"),r.binded=!0)};mt.prototype.unbindDocument=function(r){var e=this;(!Object.keys(e.ids).length||r===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};mt.prototype.getIdentifier=function(r){var e;return r?(e=r.identifier===void 0?r.pointerId:r.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};mt.prototype.removeIdentifier=function(r){var e={};for(var t in this.ids)if(this.ids[t]===r){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};mt.prototype.onmove=function(r){var e=this;return e.onAny("move",r),!1};mt.prototype.onend=function(r){var e=this;return e.onAny("end",r),!1};mt.prototype.oncancel=function(r){var e=this;return e.onAny("end",r),!1};mt.prototype.onAny=function(r,e){var t=this,i,n="processOn"+r.charAt(0).toUpperCase()+r.slice(1);e=Nl(e);var s=function(o,l,c){c.ids.indexOf(l)>=0&&(c[n](o),o._found_=!0)},a=function(o){i=t.getIdentifier(o),da(t.collections,s.bind(null,o,i)),o._found_||t.removeIdentifier(i)};return da(e,a),!1};mt.prototype.destroy=function(){var r=this;r.unbindDocument(!0),r.ids={},r.index=0,r.collections.forEach(function(e){e.destroy()}),r.off()};mt.prototype.onDestroyed=function(r,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Ko=new mt,Zo={create:function(r){return Ko.create(r)},factory:Ko};class zm{constructor(){this.move={x:0,z:0},this.swingQueued=null,this.blocking=!1,this._rightVec={x:0,y:0},this._joysticks=[],this.keys={}}initTouch(e,t){this.destroy();const i=Zo.create({zone:e,mode:"static",position:{left:"50%",top:"50%"},color:"#00e5ff",size:110});i.on("move",(s,a)=>{const o=a.angle.radian,l=Math.min(a.force,1.2);this.move.x=Math.cos(o)*l,this.move.z=-Math.sin(o)*l}),i.on("end",()=>{this.move.x=0,this.move.z=0});const n=Zo.create({zone:t,mode:"static",position:{left:"50%",top:"50%"},color:"#ffd24a",size:120});n.on("move",(s,a)=>{const o=a.angle.radian,l=Math.min(a.force,1.5);this._rightVec={x:Math.cos(o)*l,y:Math.sin(o)*l}}),n.on("end",()=>{const s=this._rightVec;Math.hypot(s.x,s.y)>.3&&(this.swingQueued={dx:s.x,dy:s.y}),this._rightVec={x:0,y:0}}),this._joysticks=[i,n]}initDesktop(e){window.addEventListener("keydown",s=>{this.keys[s.code]=!0}),window.addEventListener("keyup",s=>{this.keys[s.code]=!1});let t=!1,i=0,n=0;e.addEventListener("mousedown",s=>{if(s.button===2){this.blocking=!0;return}t=!0,i=s.clientX,n=s.clientY}),window.addEventListener("mouseup",s=>{if(s.button===2){this.blocking=!1;return}if(t){const a=s.clientX-i,o=n-s.clientY;Math.hypot(a,o)>12?this.swingQueued={dx:a,dy:o}:this.swingQueued={dx:0,dy:1}}t=!1}),e.addEventListener("contextmenu",s=>s.preventDefault()),this._desktop=!0}pollDesktop(){if(!this._desktop)return;let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1);const i=Math.hypot(e,t);i>0&&(e/=i,t/=i),(i>0||this._lastKeyMove)&&(this.move.x=e,this.move.z=t),this._lastKeyMove=i>0,this.blocking=this.blocking||!!this.keys.Space}consumeSwing(){const e=this.swingQueued;return this.swingQueued=null,e}destroy(){for(const e of this._joysticks)try{e.destroy()}catch{}this._joysticks=[]}}class Fm{constructor(){this.ws=null,this.connected=!1,this.room=null,this.id=null,this.isHost=!1,this.handlers={},this.peers={}}on(e,t){(this.handlers[e]||=[]).push(t)}emit(e,t){(this.handlers[e]||[]).forEach(i=>i(t))}url(){return`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`}connect(){return new Promise((e,t)=>{try{this.ws=new WebSocket(this.url())}catch(n){t(n);return}const i=setTimeout(()=>{t(new Error("timeout"))},6e3);this.ws.onopen=()=>{clearTimeout(i),this.connected=!0,e()},this.ws.onerror=n=>{clearTimeout(i),t(n)},this.ws.onclose=()=>{this.connected=!1,this.emit("close")},this.ws.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}this.handle(s)}})}send(e,t={}){this.ws&&this.connected&&this.ws.send(JSON.stringify({type:e,...t}))}handle(e){switch(e.type){case"welcome":this.id=e.id;break;case"created":this.room=e.room,this.isHost=!0,this.emit("created",e);break;case"joined":this.room=e.room,this.isHost=!1,this.emit("joined",e);break;case"peer-join":this.emit("peer-join",e);break;case"peer-leave":this.emit("peer-leave",e);break;case"start":this.emit("start",e);break;case"state":this.emit("state",e);break;case"input":this.emit("input",e);break;case"event":this.emit("event",e);break;case"error":this.emit("neterror",e);break;case"rooms":this.emit("rooms",e);break}}createRoom(e,t){this.send("create",{name:e,opts:t})}joinRoom(e,t){this.send("join",{room:e.toUpperCase(),name:t})}leave(){this.send("leave"),this.room=null}startMatch(e){this.send("start",{opts:e})}sendState(e){this.send("state",{s:e})}sendInput(e){this.send("input",{i:e})}sendEvent(e){this.send("event",{e})}}const Jo=document.getElementById("game-canvas"),Ve=new bm,Tn=new zm;Ve.input=Tn;let pt=null,Je=null;function Bm(){Ve.setLoading(30,"シーンを構築中..."),pt=new Tm(Jo,Ve,Tn),Ve.setLoading(70,"コントロールを準備中..."),Tn.initTouch(document.getElementById("joy-left"),document.getElementById("joy-right")),Tn.initDesktop(Jo),Ve.setLoading(100,"準備完了！"),setTimeout(()=>{Ve.show("menu");const r=new URLSearchParams(location.search).get("room");r&&(Ve.show("online-setup"),document.querySelector('.online-tabs .tab[data-tab="join"]')?.click(),document.getElementById("join-code").value=r.toUpperCase())},250)}const zl=()=>{St.init(),St.resume()};Ve.on("userInteract",zl);window.addEventListener("pointerdown",zl,{once:!0});Ve.on("startAI",({difficulty:r,weapon:e,stage:t})=>{St.init(),pt.aiDifficulty=r,pt.net=null,pt.startMatch({mode:"ai",difficulty:r,weapons:[e,e],stage:t,names:["YOU","CPU ("+(ha[r]?.label||"NORMAL")+")"],localIndex:0}),Ve.announce("FIGHT!")});Ve.on("startLocal",({weapons:r,stage:e})=>{St.init(),pt.net=null,pt.startMatch({mode:"local",weapons:r,stage:e,names:["PLAYER 1","PLAYER 2"],localIndex:0}),Ve.announce("FIGHT!")});function Fl(){return Je&&Je.connected?Promise.resolve(Je):(Je=new Fm,km(),Je.connect().then(()=>Je))}function km(){Je.on("created",r=>{pt.pendingOpts=Je._opts,Ve.showRoomCode(r.room,[{id:r.id,name:Je._opts.name}]),Ve.setHostControls(!0)}),Je.on("joined",r=>{Ve.showRoomCode(r.room,r.peers),Ve.setHostControls(!1),pt.pendingOpts=r.opts}),Je.on("peer-join",r=>{Ve.toast((r.name||"プレイヤー")+" が参加しました");const e=document.getElementById("peer-list"),t=document.createElement("li");t.textContent="⚔ "+(r.name||r.id),e?.appendChild(t)}),Je.on("peer-leave",()=>Ve.toast("プレイヤーが退出しました")),Je.on("start",r=>Bl(r.opts)),Je.on("state",r=>pt.applyRemoteState(r.s)),Je.on("neterror",r=>Ve.toast(r.msg||"ネットワークエラー")),Je.on("close",()=>Ve.toast("接続が切れました"))}Ve.on("hostRoom",r=>{Fl().then(()=>{Je._opts=r,Je.createRoom(r.name,r)}).catch(()=>Ve.toast("サーバーに接続できません（ローカルではnpm start が必要）"))});Ve.on("joinRoom",({code:r,name:e})=>{if(!r){Ve.toast("ルームコードを入力してください");return}Fl().then(()=>{Je._opts={name:e},Je.joinRoom(r,e)}).catch(()=>Ve.toast("サーバーに接続できません"))});Ve.on("onlineStart",()=>{const r=pt.pendingOpts||{},e={weapons:[r.weapon||"katana",r.weapon||"katana"],stage:r.stage||"arena"};Je.startMatch(e),Bl(e,!0)});function Bl(r,e){const t=e??Je.isHost;pt.net=Je,pt.startMatch({mode:"online",weapons:r.weapons||["katana","katana"],stage:r.stage||"arena",names:t?["YOU (HOST)","OPPONENT"]:["OPPONENT","YOU"],localIndex:t?0:1}),Ve.announce("FIGHT!")}Ve.on("quit",()=>{Je&&Je.leave(),pt.quitToMenu()});Ve.on("rematch",()=>{pt.mode==="ai"?Ve.emit("startAI",{difficulty:pt.aiDifficulty,weapon:pt.fighters[0]?.weaponKey||"katana",stage:pt.arena.stageKey}):pt.quitToMenu()});Bm();
