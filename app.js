(() => {
"use strict";
const $=id=>document.getElementById(id);
const $$=s=>[...document.querySelectorAll(s)];
const T={
bm:{
portfolioTitle:"Demo Produk Interaktif",portfolioSub:"Kawal dashboard dan lihat prototaip sebenar memberi tindak balas.",simulationLabel:"Simulasi Pelayar",
tryDashboard:"Cuba dashboard",tryDashboardSub:"Tekan kawalan di dalam telefon.",watchProduct:"Lihat prototaip bertindak balas",watchProductSub:"Imej bertukar antara keadaan produk sebenar ON dan OFF.",
online:"DEMO ONLINE",heroText:"Kawalan nyamuk pintar",current:"Status Semasa",uv:"Lampu UV",fan:"Kipas",mainSwitch:"Suis Utama",ldr:"Bacaan LDR",
mode:"Mod Operasi",choose:"Pilih mod",manual:"Manual",manualSub:"Kawalan terus",auto:"Auto LDR",autoSub:"Gelap sahaja",timer:"Pemasa",timerSub:"Berjadual",
turnOn:"HIDUPKAN",turnOff:"MATIKAN",countdown:"Kiraan Masa Pemasa",maintenance:"Penyelenggaraan",viewMaintenance:"Lihat Penyelenggaraan",
home:"Utama",control:"Kawalan",system:"Sistem",locked:"Suis utama MATI",lockedHelp:"Kawalan dikunci.",virtualSwitch:"Suis Utama Maya",virtualSwitchHelp:"Tingkah laku kunci sama seperti suis fizikal.",
ambientLight:"Simulator Cahaya Sekeliling",ambientHelp:"Gerakkan ke arah Gelap untuk menguji Auto LDR.",bright:"Terang",dark:"Gelap",pressModeButton:"Tekan Butang Mod Fizikal",
browserClock:"Jam pelayar",currentTime:"Masa Semasa",dawn:"Fajar",dusk:"Senja",useDemoTime:"Gunakan masa demo",useDemoTimeHelp:"Uji waktu berjadual dengan serta-merta.",demoHour:"Jam demo",
hotspot:"Hotspot Prototaip",localIp:"IP Tempatan",runtime:"Masa Demo Berjalan",activeTime:"Masa Perangkap Aktif",threshold:"Threshold LDR",noteTitle:"Demo portfolio",
noteText:"Laman awam ini mensimulasikan logik ESP32 di dalam pelayar. Ia tidak mengawal prototaip sebenar dari jauh.",
co2Mixture:"Campuran CO₂",meshCleaning:"Pembersihan Jaring",lastReplaced:"Kali terakhir diganti",nextReplacement:"Penggantian seterusnya",markReplaced:"Tandakan Sudah Diganti",
replacementInterval:"Selang penggantian",lastCleaned:"Kali terakhir dibersihkan",nextCleaning:"Pembersihan seterusnya",markCleaned:"Tandakan Sudah Dibersihkan",cleaningInterval:"Selang pembersihan",
experienceNote:"Cuba Manual ON/OFF, Auto LDR, Timer, suis utama maya atau butang mod fizikal. Visual produk berubah serta-merta.",
on:"HIDUP",off:"MATI",starts:"AKTIF DALAM",ends:"TAMAT DALAM",nextDawn:"Seterusnya: Fajar",nextDusk:"Seterusnya: Senja",dawnActive:"Fajar sedang aktif",duskActive:"Senja sedang aktif",
trapOn:"PERANGKAP HIDUP",trapOff:"PERANGKAP MATI",switchFirst:"Hidupkan suis utama dahulu.",good:"Baik",dueSoon:"Hampir Tiba",overdue:"Lewat",notSet:"Belum Ditetapkan",
daysRemaining:"hari lagi",daysOverdue:"hari lewat",dueToday:"Perlu hari ini",setupRequired:"Tetapan diperlukan",co2Task:"Ganti campuran CO₂",meshTask:"Bersihkan jaring",nextTask:"Seterusnya"
},
en:{
portfolioTitle:"Interactive Product Demo",portfolioSub:"Control the dashboard and watch the real prototype respond.",simulationLabel:"Browser Simulation",
tryDashboard:"Try the dashboard",tryDashboardSub:"Tap the controls inside the phone.",watchProduct:"Watch the prototype respond",watchProductSub:"The image switches between real ON and OFF product states.",
online:"DEMO ONLINE",heroText:"Smart mosquito control",current:"Current Status",uv:"UV Light",fan:"Fan",mainSwitch:"Main Switch",ldr:"LDR Reading",
mode:"Operating Mode",choose:"Choose mode",manual:"Manual",manualSub:"Direct control",auto:"Auto LDR",autoSub:"Dark only",timer:"Timer",timerSub:"Scheduled",
turnOn:"TURN ON",turnOff:"TURN OFF",countdown:"Timer Countdown",maintenance:"Maintenance",viewMaintenance:"View Maintenance",
home:"Home",control:"Control",system:"System",locked:"Main switch OFF",lockedHelp:"Controls are locked.",virtualSwitch:"Virtual Main Switch",virtualSwitchHelp:"Same lock behaviour as the physical switch.",
ambientLight:"Ambient Light Simulator",ambientHelp:"Move toward Dark to test Auto LDR.",bright:"Bright",dark:"Dark",pressModeButton:"Press Physical Mode Button",
browserClock:"Browser clock",currentTime:"Current Time",dawn:"Dawn",dusk:"Dusk",useDemoTime:"Use demo time",useDemoTimeHelp:"Test scheduled periods instantly.",demoHour:"Demo hour",
hotspot:"Prototype Hotspot",localIp:"Local IP",runtime:"Demo Runtime",activeTime:"Trap Active Time",threshold:"LDR Threshold",noteTitle:"Portfolio demo",
noteText:"This public website simulates the ESP32 logic in the browser. It does not remotely control the real prototype.",
co2Mixture:"CO₂ Mixture",meshCleaning:"Mesh Cleaning",lastReplaced:"Last replaced",nextReplacement:"Next replacement",markReplaced:"Mark as Replaced",
replacementInterval:"Replacement interval",lastCleaned:"Last cleaned",nextCleaning:"Next cleaning",markCleaned:"Mark as Cleaned",cleaningInterval:"Cleaning interval",
experienceNote:"Try Manual ON/OFF, Auto LDR, Timer, the virtual main switch, or the physical-mode button. The product visual updates immediately.",
on:"ON",off:"OFF",starts:"STARTS IN",ends:"ENDS IN",nextDawn:"Next: Dawn",nextDusk:"Next: Dusk",dawnActive:"Dawn window active",duskActive:"Dusk window active",
trapOn:"TRAP ON",trapOff:"TRAP OFF",switchFirst:"Turn the main switch on first.",good:"Good",dueSoon:"Due Soon",overdue:"Overdue",notSet:"Not Set",
daysRemaining:"days remaining",daysOverdue:"days overdue",dueToday:"Due today",setupRequired:"Setup required",co2Task:"Replace CO₂ mixture",meshTask:"Clean mesh basket",nextTask:"Next"
}};
const state={lang:localStorage.getItem("aedesLang")||"en",mainSwitch:true,mode:0,manualOn:false,ldr:1200,ldrDark:false,trapOn:false,demoTime:false,demoHour:18,started:Date.now(),lastTick:Date.now(),activeSeconds:0,maintenance:loadMaintenance()};
function tr(k){return T[state.lang][k]||k}
function pad(n){return String(n).padStart(2,"0")}
function fmt(s){s=Math.max(0,Math.floor(s));return `${pad(Math.floor(s/3600))}:${pad(Math.floor((s%3600)/60))}:${pad(s%60)}`}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(window.__t);window.__t=setTimeout(()=>e.classList.remove("show"),1600)}
function setLang(l){state.lang=l;localStorage.setItem("aedesLang",l);$$("[data-t]").forEach(e=>e.textContent=tr(e.dataset.t));$("bmBtn").classList.toggle("active",l==="bm");$("enBtn").classList.toggle("active",l==="en");render()}
function clock(){if(!state.demoTime)return new Date();const d=new Date();d.setHours(Math.floor(state.demoHour),Math.round(state.demoHour%1*60),0,0);return d}
function timerInfo(d){const n=d.getHours()*3600+d.getMinutes()*60+d.getSeconds(),ds=19800,de=27000,ss=64800,se=70200;if(n>=ds&&n<de)return{active:true,w:0,r:de-n};if(n>=ss&&n<se)return{active:true,w:1,r:se-n};if(n<ds)return{active:false,w:0,r:ds-n};if(n<ss)return{active:false,w:1,r:ss-n};return{active:false,w:0,r:86400-n+ds}}
function hysteresis(){if(!state.ldrDark&&state.ldr>=2100)state.ldrDark=true;else if(state.ldrDark&&state.ldr<=1800)state.ldrDark=false}
function evaluate(){hysteresis();if(!state.mainSwitch){state.trapOn=false;return}if(state.mode===0)state.trapOn=state.manualOn;else if(state.mode===1)state.trapOn=state.ldrDark;else state.trapOn=timerInfo(clock()).active}
function selectMode(m){if(!state.mainSwitch){toast(tr("switchFirst"));return}state.mode=Number(m);render()}
function manual(on){if(!state.mainSwitch){toast(tr("switchFirst"));return}state.mode=0;state.manualOn=!!on;render()}
function showPage(id){$$(".phone-page").forEach(p=>p.classList.toggle("active",p.id===id||(id==="maintenance"&&p.id==="maintenancePage")));$$(".phone-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));document.querySelector(".phone-pages").scrollTo({top:0,behavior:"smooth"})}
function render(){
evaluate();
$("uvVal").textContent=state.trapOn?tr("on"):tr("off");$("fanVal").textContent=state.trapOn?tr("on"):tr("off");$("switchVal").textContent=state.mainSwitch?tr("on"):tr("off");$("systemState").textContent="● "+(state.mainSwitch?tr("on"):tr("off"));$("systemState").style.color=state.mainSwitch?"#2f7d5a":"#c94444";
$("ldrVal").textContent=state.ldr;$("ldrSliderValue").textContent=state.ldr;$("ldrFill").style.width=Math.min(100,state.ldr/4095*100)+"%";$("ldrPill").textContent=(state.ldrDark?tr("dark"):tr("bright")).toUpperCase();$("fanGlyph").classList.toggle("spinning",state.trapOn);$("lockBanner").classList.toggle("show",!state.mainSwitch);$("mainSwitchToggle").checked=state.mainSwitch;
$$(".mode-btn").forEach(b=>{b.classList.toggle("active",Number(b.dataset.mode)===state.mode);b.disabled=!state.mainSwitch});$("manualBox").classList.toggle("show",state.mode===0);$("controlManualBox").classList.toggle("show",state.mode===0);
const on=state.trapOn;$("productOn").classList.toggle("active",on);$("productOff").classList.toggle("active",!on);$("stateDot").classList.toggle("on",on);$("productState").textContent=on?tr("trapOn"):tr("trapOff");$("productUv").textContent=on?tr("on"):tr("off");$("productFan").textContent=on?tr("on"):tr("off");$("productLdr").textContent=state.ldr;$("productMode").textContent=[tr("manual"),"AUTO LDR",tr("timer")][state.mode].toUpperCase();
const d=clock();$("headTime").textContent=`${pad(d.getHours())}:${pad(d.getMinutes())}`;$("timerClock").textContent=`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;const ti=timerInfo(d);$("countValue").textContent=fmt(ti.r);$("countTag").textContent=ti.active?tr("ends"):tr("starts");$("countWindow").textContent=ti.active?(ti.w===0?tr("dawnActive"):tr("duskActive")):(ti.w===0?tr("nextDawn"):tr("nextDusk"));$("nextTiny").textContent=(ti.w===0?tr("dawn"):tr("dusk")).toUpperCase();
$("demoTimeControls").classList.toggle("show",state.demoTime);$("demoTimeToggle").checked=state.demoTime;$("demoHour").value=state.demoHour;const mm=Math.round(state.demoHour%1*60);$("demoHourVal").textContent=`${pad(Math.floor(state.demoHour))}:${pad(mm)}`;
renderMaintenance();
}
function loadMaintenance(){try{return JSON.parse(localStorage.getItem("aedesMaint"))||{co2Last:0,meshLast:0,co2Days:14,meshDays:14}}catch(_){return{co2Last:0,meshLast:0,co2Days:14,meshDays:14}}}
function saveMaintenance(){localStorage.setItem("aedesMaint",JSON.stringify(state.maintenance))}
const DAY=86400000;
function mState(last,days){if(!last)return{key:"notSet",cls:"",rem:null,due:0,rank:3};const due=last+days*DAY,diff=due-Date.now(),rem=Math.ceil(diff/DAY),warn=Math.max(1,Math.min(3,Math.ceil(days*.25)));if(diff<0)return{key:"overdue",cls:"overdue",rem:-(Math.floor(-diff/DAY)+1),due,rank:2};if(rem<=warn)return{key:"dueSoon",cls:"soon",rem,due,rank:1};return{key:"good",cls:"good",rem,due,rank:0}}
function dateText(t){return t?new Date(t).toLocaleDateString(state.lang==="bm"?"ms-MY":"en-GB",{day:"numeric",month:"short",year:"numeric"}):"—"}
function remain(s){if(s.rem===null)return tr("setupRequired");if(s.rem<0)return `${Math.abs(s.rem)} ${tr("daysOverdue")}`;if(s.rem===0)return tr("dueToday");return `${s.rem} ${tr("daysRemaining")}`}
function badge(el,s){el.className="badge "+s.cls;el.textContent=(s.key==="good"?"✓ ":s.key==="notSet"?"○ ":"! ")+tr(s.key)}
function renderMaintenance(){const m=state.maintenance,c=mState(m.co2Last,m.co2Days),x=mState(m.meshLast,m.meshDays);$("co2Last").textContent=dateText(m.co2Last);$("co2Next").textContent=c.due?dateText(c.due):"—";$("co2Remaining").textContent=remain(c);$("co2Days").textContent=m.co2Days;badge($("co2Badge"),c);$("meshLast").textContent=dateText(m.meshLast);$("meshNext").textContent=x.due?dateText(x.due):"—";$("meshRemaining").textContent=remain(x);$("meshDays").textContent=m.meshDays;badge($("meshBadge"),x);let next=c.key==="notSet"?{s:c,t:tr("co2Task")}:x.key==="notSet"?{s:x,t:tr("meshTask")}:(c.due<=x.due?{s:c,t:tr("co2Task")}:{s:x,t:tr("meshTask")});$("maintNext").textContent=`${tr("nextTask")}: ${next.t}`;$("maintBadge").textContent=(next.s.key==="good"?"✓ ":next.s.key==="notSet"?"○ ":"! ")+tr(next.s.key)}
function mark(item){state.maintenance[item==="co2"?"co2Last":"meshLast"]=Date.now();saveMaintenance();renderMaintenance()}
function change(item,delta){const k=item==="co2"?"co2Days":"meshDays";state.maintenance[k]=Math.max(1,Math.min(90,state.maintenance[k]+delta));saveMaintenance();renderMaintenance()}
$("bmBtn").addEventListener("click",()=>setLang("bm"));$("enBtn").addEventListener("click",()=>setLang("en"));$$(".mode-btn").forEach(b=>b.addEventListener("click",()=>selectMode(b.dataset.mode)));$("manualOn").addEventListener("click",()=>manual(true));$("manualOff").addEventListener("click",()=>manual(false));$$(".manual-on").forEach(b=>b.addEventListener("click",()=>manual(true)));$$(".manual-off").forEach(b=>b.addEventListener("click",()=>manual(false)));
$("mainSwitchToggle").addEventListener("change",e=>{state.mainSwitch=e.target.checked;render()});$("ldrSlider").addEventListener("input",e=>{state.ldr=Number(e.target.value);render()});$("physicalModeBtn").addEventListener("click",()=>{if(!state.mainSwitch){toast(tr("switchFirst"));return}state.mode=(state.mode+1)%3;render()});$("demoTimeToggle").addEventListener("change",e=>{state.demoTime=e.target.checked;render()});$("demoHour").addEventListener("input",e=>{state.demoHour=Number(e.target.value);render()});$$(".quick-time button").forEach(b=>b.addEventListener("click",()=>{state.demoTime=true;state.demoHour=Number(b.dataset.time);render()}));$$(".phone-nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));$("openMaintenance").addEventListener("click",()=>showPage("maintenance"));$("maintenanceBack").addEventListener("click",()=>showPage("home"));$("markCo2").addEventListener("click",()=>mark("co2"));$("markMesh").addEventListener("click",()=>mark("mesh"));$$(".stepper-row button").forEach(b=>b.addEventListener("click",()=>change(b.dataset.item,Number(b.dataset.delta))));
setLang(state.lang);render();setInterval(()=>{const now=Date.now(),dt=(now-state.lastTick)/1000;state.lastTick=now;evaluate();if(state.trapOn)state.activeSeconds+=dt;$("uptime").textContent=fmt((now-state.started)/1000);$("activeTime").textContent=fmt(state.activeSeconds);render()},1000);
})();