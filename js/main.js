(function(){
var h=document.getElementById("h"),pg=document.getElementById("pg");
function pr(){var m=document.documentElement.scrollHeight-innerHeight;pg.style.transform="scaleX("+(m>0?Math.min(scrollY/m,1):0)+")"}pr();addEventListener("scroll",pr,{passive:true});
document.getElementById("enq").addEventListener("submit",function(e){e.preventDefault();var f=e.target,t="Hello Truecons, I’d like to enquire about "+f.s.value+".\nName: "+f.n.value+"\nPhone: "+f.p.value+(f.m.value?"\nProject: "+f.m.value:"");window.open("https://wa.me/918122603565?text="+encodeURIComponent(t),"_blank")});
function sc(){h.classList.toggle("s",window.scrollY>30)}sc();addEventListener("scroll",sc,{passive:true});
var els=document.querySelectorAll(".r:not(.hero .r)");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add("in")})}
var REVIEWS=[{q:"The team at Truecons delivered our dream home on time and within budget. Highly recommend!",n:"Ravi Kumar",p:"Vellore"},{q:"Professional architects who truly understand modern design. Our interiors look stunning.",n:"Priya Sharma",p:"Chennai"},{q:"Excellent construction quality and great communication throughout the project.",n:"Suresh Reddy",p:"Tambaram"}];
(function(){var b=document.getElementById("rvs");
if(!REVIEWS.length){b.innerHTML='<div class="rq"><p>Client reviews will appear here soon.</p><a class="btn" href="https://wa.me/918122603565?text='+encodeURIComponent("Hello Truecons, I would like to share my experience.")+'">Share your experience</a></div>';return}
var i=0;function sh(){var r=REVIEWS[i];b.textContent="";var d=document.createElement("div");d.className="rq";var p=document.createElement("p");p.textContent="\u201c"+r.q+"\u201d";var c=document.createElement("cite");c.textContent=r.n+(r.p?", "+r.p:"");d.append(p,c);if(REVIEWS.length>1){var n=document.createElement("div");n.className="rn";["\u2190","\u2192"].forEach(function(t,k){var x=document.createElement("button");x.textContent=t;x.setAttribute("aria-label",k?"Next":"Previous");x.onclick=function(){i=(i+(k?1:REVIEWS.length-1))%REVIEWS.length;sh()};n.append(x)});d.append(n)}b.append(d)}sh()})();
var bg=document.getElementById("bg"),mm=document.getElementById("mm");
function tm(o){mm.classList.toggle("o",o);bg.setAttribute("aria-expanded",o)}
bg.onclick=function(){tm(!mm.classList.contains("o"))};mm.querySelectorAll("a").forEach(function(a){a.onclick=function(){tm(false)}});
var lb=document.getElementById("lb");
function cl(){lb.classList.remove("o")}lb.onclick=cl;addEventListener("keydown",function(e){if(e.key==="Escape"){cl();tm(false)}});
document.querySelectorAll(".pc").forEach(function(c){function op(){lb.querySelector("img").src=c.querySelector("img").src;lb.querySelector("p").textContent=c.querySelector("h3").textContent;lb.classList.add("o")}c.onclick=op;c.onkeydown=function(e){if(e.key==="Enter")op()}});
var tb=document.querySelectorAll(".tab"),pcs=document.querySelectorAll(".pc");
tb.forEach(function(b){b.addEventListener("click",function(){tb.forEach(function(x){x.classList.toggle("on",x===b)});pcs.forEach(function(c){c.classList.toggle("hid",b.dataset.f!=="all"&&c.dataset.s!==b.dataset.f)})})});
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll("[data-n]").forEach(function(el){var t=+el.dataset.n;if(rm){el.textContent=t;return}
var o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();var s=null;(function f(ts){s=s||ts;var p=Math.min((ts-s)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(performance.now())});o.observe(el)});
document.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--x",(e.clientX-r.left)+"px");c.style.setProperty("--y",(e.clientY-r.top)+"px")})});
})();
