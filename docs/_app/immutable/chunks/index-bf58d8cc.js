function x(){}const I=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function et(t){return t()}function Y(){return Object.create(null)}function k(t){t.forEach(et)}function O(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Ft(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(pt(e,n))}function It(t,e,n,r){if(t){const i=nt(t,e,n,r);return t[0](i)}}function nt(t,e,n,r){return t[1]&&r?dt(n.ctx.slice(),t[1](r(e))):n.ctx}function Gt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|i[s];return u}return e.dirty|i}return e.dirty}function Jt(t,e,n,r,i,u){if(i){const c=nt(e,n,r,u);t.p(c,i)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const it=typeof window<"u";let G=it?()=>window.performance.now():()=>Date.now(),J=it?t=>requestAnimationFrame(t):x;const A=new Set;function rt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&J(rt)}function K(t){let e;return A.size===0&&J(rt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let B=!1;function yt(){B=!0}function gt(){B=!1}function bt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=o?i+1:bt(1,i,d=>e[n[d]].claim_order,o))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const u=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[l],f)}}function $t(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=lt("style");return wt(st(t),e),e.sheet}function wt(t,e){return $t(t.head||t,e),e.sheet}function kt(t,e){if(B){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){B&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function Wt(){return Q(" ")}function Vt(){return Q("")}function Xt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,r,i=!1){Nt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function At(t,e,n,r){return ut(t,i=>i.nodeName===e,i=>{const u=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Zt(t,e,n){return At(t,e,n,lt)}function Ct(t,e){return ut(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Q(e),!0)}function te(t){return Ct(t," ")}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ne(t,e){t.value=e??""}function ie(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function re(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function se(t,e){return new t(e)}const L=new Map;let R=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:vt(e),rules:{}};return L.set(t,n),n}function T(t,e,n,r,i,u,c,s=0){const l=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*u(p);o+=p*100+`%{${c(y,1-y)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${St(f)}_${s}`,d=st(t),{stylesheet:_,rules:h}=L.get(d)||Mt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,R+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),R-=i,R||Ot())}function Ot(){J(()=>{R||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),L.clear())})}let M;function b(t){M=t}function U(){if(!M)throw new Error("Function called outside component initialization");return M}function ce(t){U().$$.on_mount.push(t)}function le(t){U().$$.after_update.push(t)}const N=[],Z=[],q=[],tt=[],ot=Promise.resolve();let H=!1;function at(){H||(H=!0,ot.then(W))}function ue(){return at(),ot}function C(t){q.push(t)}const F=new Set;let E=0;function W(){if(E!==0)return;const t=M;do{try{for(;E<N.length;){const e=N[E];E++,b(e),Pt(e.$$)}}catch(e){throw N.length=0,E=0,e}for(b(null),N.length=0,E=0;Z.length;)Z.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(N.length);for(;tt.length;)tt.pop()();H=!1,F.clear(),b(t)}function Pt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}let S;function V(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function w(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const D=new Set;let g;function qt(){g={r:0,c:[],p:g}}function Dt(){g.r||k(g.c),g=g.p}function ft(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Lt(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),g.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const X={duration:0};function oe(t,e,n){const r={direction:"in"};let i=e(t,n,r),u=!1,c,s,l=0;function o(){c&&z(t,c)}function f(){const{delay:d=0,duration:_=300,easing:h=I,tick:m=x,css:p}=i||X;p&&(c=T(t,0,1,_,d,h,p,l++)),m(0,1);const y=G()+d,j=y+_;s&&s.abort(),u=!0,C(()=>w(t,!0,"start")),s=K($=>{if(u){if($>=j)return m(1,0),w(t,!0,"end"),o(),u=!1;if($>=y){const v=h(($-y)/_);m(v,1-v)}}return u})}let a=!1;return{start(){a||(a=!0,z(t),O(i)?(i=i(r),V().then(f)):f())},invalidate(){a=!1},end(){u&&(o(),u=!1)}}}function ae(t,e,n){const r={direction:"out"};let i=e(t,n,r),u=!0,c;const s=g;s.r+=1;function l(){const{delay:o=0,duration:f=300,easing:a=I,tick:d=x,css:_}=i||X;_&&(c=T(t,1,0,f,o,a,_));const h=G()+o,m=h+f;C(()=>w(t,!1,"start")),K(p=>{if(u){if(p>=m)return d(0,1),w(t,!1,"end"),--s.r||k(s.c),!1;if(p>=h){const y=a((p-h)/f);d(1-y,y)}}return u})}return O(i)?V().then(()=>{i=i(r),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),u&&(c&&z(t,c),u=!1)}}}function fe(t,e,n,r){const i={direction:"both"};let u=e(t,n,i),c=r?0:1,s=null,l=null,o=null;function f(){o&&z(t,o)}function a(_,h){const m=_.b-c;return h*=Math.abs(m),{a:c,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:p=I,tick:y=x,css:j}=u||X,$={start:G()+h,b:_};_||($.group=g,g.r+=1),s||l?l=$:(j&&(f(),o=T(t,c,_,m,h,p,j)),_&&y(0,1),s=a($,m),C(()=>w(t,_,"start")),K(v=>{if(l&&v>l.start&&(s=a(l,m),l=null,w(t,s.b,"start"),j&&(f(),o=T(t,c,s.b,s.duration,0,p,u.css))),s){if(v>=s.end)y(c=s.b,1-c),w(t,s.b,"end"),l||(s.b?f():--s.group.r||k(s.group.c)),s=null;else if(v>=s.start){const _t=v-s.start;c=s.a+s.d*p(_t/s.duration),y(c,1-c)}}return!!(s||l)}))}return{run(_){O(u)?V().then(()=>{u=u(i),d(_)}):d(_)},end(){f(),s=l=null}}}function _e(t,e){const n=e.token={};function r(i,u,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=s);const o=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==u&&a&&(qt(),Lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),Dt())}):e.block.d(1),o.c(),ft(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[u]=o),f&&W()}if(ht(t)){const i=U();if(t.then(u=>{b(i),r(e.then,1,e.value,u),b(null)},u=>{if(b(i),r(e.catch,2,e.error,u),b(null),!e.hasCatch)throw u}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function de(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Rt(t,e,n,r){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),r||C(()=>{const c=t.$$.on_mount.map(et).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):k(c),t.$$.on_mount=[]}),u.forEach(C)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(N.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,r,i,u,c,s=[-1]){const l=M;b(t);const o=t.$$={fragment:null,ctx:[],props:u,update:x,not_equal:i,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Y(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return o.ctx&&i(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&zt(t,a)),d}):[],o.update(),f=!0,k(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){yt();const a=Et(e.target);o.fragment&&o.fragment.l(a),a.forEach(ct)}else o.fragment&&o.fragment.c();e.intro&&ft(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),gt(),W()}b(l)}class ye{$destroy(){Tt(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as A,x as B,It as C,Jt as D,Kt as E,Gt as F,kt as G,Ht as H,re as I,C as J,oe as K,ae as L,Xt as M,_e as N,de as O,Ut as P,Ft as Q,ne as R,ye as S,k as T,fe as U,Wt as a,Qt as b,te as c,Dt as d,Vt as e,ft as f,qt as g,ct as h,pe as i,le as j,lt as k,Zt as l,Et as m,Yt as n,ce as o,ie as p,Q as q,Ct as r,Bt as s,Lt as t,ee as u,se as v,he as w,me as x,Rt as y,Tt as z};