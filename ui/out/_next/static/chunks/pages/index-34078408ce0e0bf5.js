(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9178)}])},2730:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(9854),i=n.n(a),o=n(7294);function c(e){let{children:t}=e,n=(0,o.useRef)(null),[a,c]=(0,o.useState)(null),[s,l]=(0,o.useState)([]);function u(e,t,n,r){this.h=e,this.s=t,this.l=n,this.a=r,this.dir=Math.random()>.5?-1:1,this.toString=function(){return"hsla("+this.h+", "+this.s+"%, "+this.l+"%, "+this.a+")"}}function h(e,t,r,a,i){this.x={c:e,min:0,max:n.current.width,dir:Math.random()>.5?-1:1},this.y={c:t,min:0,max:n.current.height,dir:Math.random()>.5?-1:1},this.w={c:r,min:2,max:n.current.width,dir:Math.random()>.5?-1:1},this.h={c:a,min:2,max:n.current.height,dir:Math.random()>.5?-1:1},this.color=i,this.direction=Math.random()>.1?-1:1,this.velocity=(100*Math.random()+100)*.01*this.direction}function d(){if(n.current){a.clearRect(0,0,n.current.width,n.current.height);for(let n=0;n<s.length;n++){var e,t;((e=s[n]).x.c<=e.x.min||e.x.c>=e.x.max)&&(e.x.dir*=-1),(e.y.c<=e.y.min||e.y.c>=e.y.max)&&(e.y.dir*=-1),(e.w.c<=e.w.min||e.w.c>=e.w.max)&&(e.w.dir*=-1),(e.h.c<=e.h.min||e.h.c>=e.h.max)&&(e.h.dir*=-1),(e.color.a<=0||e.color.a>=.75)&&(e.color.dir*=-1),e.x.c+=.005*e.x.dir,e.y.c+=.005*e.y.dir,e.w.c+=.005*e.w.dir,e.h.c+=.005*e.h.dir,t=s[n],a.restore(),a.fillStyle=t.color.toString(),a.fillRect(t.x.c,t.y.c,t.w.c,t.h.c)}}}return(0,o.useEffect)(()=>{if(n.current){let e=n.current,t=e.getContext("2d");c(t);let r=[new h(1,1,3,4,new u(252,70,67,.8)),new h(0,0,1,1,new u(0,0,98,1)),new h(0,3,2,2,new u(11,100,62,.8)),new h(4,0,4,3,new u(190,94,75,.8)),new h(3,1,1,2,new u(324,98,50,.1))];l(r)}},[]),(0,o.useEffect)(()=>{let e;if(a){let t=()=>{d(),e=window.requestAnimationFrame(t)};t()}return()=>{window.cancelAnimationFrame(e)}},[d,s,a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:i().background,children:(0,r.jsx)("canvas",{className:i().backgroundGradients,width:"6",height:"6",ref:n})}),(0,r.jsx)("div",{className:i().container,children:t})]})}},9178:function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.r(t),n.d(t,{default:function(){return d}});var a=n(5893),i=n(7294);n(3112);var o=n(871),c=n(6400),s=n(2730),l=n(9854),u=n.n(l),h=e([o,c]);function d(){let e,t,n;let[r,l]=(0,i.useState)({zkappWorkerClient:null,hasWallet:null,hasBeenSetup:!1,accountExists:!1,currentNum:null,publicKey:null,zkappPublicKey:null,creatingTransaction:!1}),[h,d]=(0,i.useState)(""),[p,f]=(0,i.useState)("");(0,i.useEffect)(()=>{async function e(e){return new Promise(t=>{setTimeout(()=>{t()},1e3*e)})}(async()=>{if(!r.hasBeenSetup){d("Loading web worker..."),console.log("Loading web worker...");let t=new o.Z;await e(5),d("Done loading web worker"),console.log("Done loading web worker"),await t.setActiveInstanceToBerkeley();let n=window.mina;if(null==n){l({...r,hasWallet:!1});return}let a=(await n.requestAccounts())[0],i=c.nh.fromBase58(a);console.log("Using key:".concat(i.toBase58())),d("Using key:".concat(i.toBase58())),d("Checking if fee payer account exists..."),console.log("Checking if fee payer account exists...");let s=await t.fetchAccount({publicKey:i}),u=null==s.error;await t.loadContract(),console.log("Compiling zkApp..."),d("Compiling zkApp..."),await t.compileContract(),console.log("zkApp compiled"),d("zkApp compiled...");let h=c.nh.fromBase58("B62qjshG3cddKthD6KjCzHZP4oJM2kGuC8qRHN3WZmKH5B74V9Uddwu");await t.initZkappInstance(h),console.log("Getting zkApp state..."),d("Getting zkApp state..."),await t.fetchAccount({publicKey:h});let p=await t.getNum();console.log("Current state in zkApp: ".concat(p.toString())),d(""),l({...r,zkappWorkerClient:t,hasWallet:!0,hasBeenSetup:!0,publicKey:i,zkappPublicKey:h,accountExists:u,currentNum:p})}})()},[]),(0,i.useEffect)(()=>{(async()=>{if(r.hasBeenSetup&&!r.accountExists){for(;;){d("Checking if fee payer account exists..."),console.log("Checking if fee payer account exists...");let e=await r.zkappWorkerClient.fetchAccount({publicKey:r.publicKey}),t=null==e.error;if(t)break;await new Promise(e=>setTimeout(e,5e3))}l({...r,accountExists:!0})}})()},[r.hasBeenSetup]);let m=async()=>{l({...r,creatingTransaction:!0}),d("Creating a transaction..."),console.log("Creating a transaction..."),await r.zkappWorkerClient.fetchAccount({publicKey:r.publicKey}),await r.zkappWorkerClient.createUpdateTransaction(),d("Creating proof..."),console.log("Creating proof..."),await r.zkappWorkerClient.proveUpdateTransaction(),console.log("Requesting send transaction..."),d("Requesting send transaction...");let e=await r.zkappWorkerClient.getTransactionJSON();d("Getting transaction JSON..."),console.log("Getting transaction JSON...");let{hash:t}=await window.mina.sendTransaction({transaction:e,feePayer:{fee:.1,memo:""}}),n="https://berkeley.minaexplorer.com/transaction/".concat(t);console.log("View transaction at ".concat(n)),f(n),d(n),l({...r,creatingTransaction:!1})};if(null!=r.hasWallet&&!r.hasWallet){let t=(0,a.jsx)("a",{href:"https://www.aurowallet.com/",target:"_blank",rel:"noreferrer",children:"Install Auro wallet here"});e=(0,a.jsxs)("div",{children:["Could not find a wallet. ",t]})}let g=p?(0,a.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:"View transaction"}):h,w=(0,a.jsxs)("div",{className:u().start,style:{fontWeight:"bold",fontSize:"1.5rem",paddingBottom:"5rem"},children:[g,e]});if(r.hasBeenSetup&&!r.accountExists){let e="https://faucet.minaprotocol.com/?address="+r.publicKey.toBase58();t=(0,a.jsxs)("div",{children:["Account does not exist.",(0,a.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:"Visit the faucet to fund this fee payer account"})]})}if(r.hasBeenSetup&&r.accountExists){let e=e=>{let{buttonName:t,onClick:n,inputFields:o=[]}=e,[c,s]=(0,i.useState)(Array(o.length).fill("")),l=(e,t)=>{let n=[...c];n[t]=e.target.value,s(n)};return(0,a.jsxs)("div",{className:u().row,children:[(0,a.jsx)("button",{className:u().card,onClick:()=>{n(c),s(Array(o.length).fill(""))},disabled:r.creatingTransaction,children:t}),o.map((e,t)=>(0,a.jsx)("input",{className:u().input,type:e.type,placeholder:e.placeholder,value:c[t],onChange:e=>l(e,t)},t))]})};n=(0,a.jsxs)("div",{style:{justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)("div",{className:u().center,style:{padding:0},children:"Read Contract"}),(0,a.jsx)(e,{buttonName:"getContract",onClick:m,inputFields:[{type:"number",placeholder:"contractId"}]}),(0,a.jsx)("div",{style:{height:"3rem"}}),(0,a.jsx)("div",{className:u().center,style:{padding:0},children:"Write Contract"}),(0,a.jsx)(e,{buttonName:"newContract",onClick:m,inputFields:[{type:"text",placeholder:"receiver"},{type:"number",placeholder:"hashlock"},{type:"number",placeholder:"timelock"},{type:"text",placeholder:"tokenContract"},{type:"number",placeholder:"tokenId"}]}),(0,a.jsx)(e,{buttonName:"withdraw",onClick:m,inputFields:[{type:"number",placeholder:"contractId"},{type:"number",placeholder:"preimage"}]}),(0,a.jsx)(e,{buttonName:"refund",onClick:m,inputFields:[{type:"number",placeholder:"contractId"}]}),(0,a.jsx)("div",{style:{height:"3rem"}})]})}return(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{className:u().main,style:{padding:0},children:(0,a.jsxs)("div",{className:u().center,style:{padding:0},children:[w,t,n]})})})}[o,c]=h.then?(await h)():h,r()}catch(e){r(e)}})},871:function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.d(t,{Z:function(){return o}});var a=n(6400),i=e([a]);a=(i.then?(await i)():i)[0];class o{setActiveInstanceToBerkeley(){return this._call("setActiveInstanceToBerkeley",{})}loadContract(){return this._call("loadContract",{})}compileContract(){return this._call("compileContract",{})}fetchAccount(e){let{publicKey:t}=e,n=this._call("fetchAccount",{publicKey58:t.toBase58()});return n}initZkappInstance(e){return this._call("initZkappInstance",{publicKey58:e.toBase58()})}async getNum(){let e=await this._call("getNum",{});return a.gN.fromJSON(JSON.parse(e))}createUpdateTransaction(){return this._call("createUpdateTransaction",{})}proveUpdateTransaction(){return this._call("proveUpdateTransaction",{})}async getTransactionJSON(){let e=await this._call("getTransactionJSON",{});return e}_call(e,t){return new Promise((n,r)=>{this.promises[this.nextId]={resolve:n,reject:r};let a={id:this.nextId,fn:e,args:t};this.worker.postMessage(a),this.nextId++})}constructor(){this.worker=new Worker(n.tu(new URL(n.p+n.u(542),n.b))),this.promises={},this.nextId=0,this.worker.onmessage=e=>{this.promises[e.data.id].resolve(e.data.data),delete this.promises[e.data.id]}}}r()}catch(e){r(e)}})},9854:function(e){e.exports={main:"Home_main__2uIek",background:"Home_background__CTycG",backgroundGradients:"Home_backgroundGradients__VUGb4",container:"Home_container__9OuOz",tagline:"Home_tagline__Jw01K",start:"Home_start__ELciH",code:"Home_code__BZK8z",grid:"Home_grid__vo_ES",card:"Home_card__HIlp_",center:"Home_center__Y_rV4",logo:"Home_logo__ZEOng",content:"Home_content__Qnbja"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s=[],l=!1,u=-1;function h(){l&&r&&(l=!1,r.length?s=r.concat(s):u=-1,s.length&&d())}function d(){if(!l){var e=c(h);l=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||l||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,r),o=!1}finally{o&&delete n[e]}return i.exports}r.ab="//";var a=r(229);e.exports=a}()}},function(e){e.O(0,[829,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);