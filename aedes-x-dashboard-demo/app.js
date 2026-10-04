(() => {
"use strict";

const $ = id => document.getElementById(id);
const $$ = sel => [...document.querySelectorAll(sel)];

const T = {
  bm: {
    demoRibbon:"Demo portfolio interaktif — tindak balas perkakasan disimulasikan",
    portfolioDemo:"Demo Portfolio", online:"DEMO ONLINE",
    heroText:"Kawalan nyamuk pintar untuk persekitaran yang lebih bersih dan selamat.",
    safe:"SELAMAT", smart:"PINTAR", realPhoto:"Menggunakan foto prototaip AEDES-X sebenar.",
    current:"Status Semasa", uv:"Lampu UV", fan:"Kipas", mainSwitch:"Suis Utama", ldr:"Bacaan LDR",
    mode:"Mod Operasi", choose:"Pilih cara AEDES-X beroperasi", manual:"Manual", manualSub:"Hidup/Mati secara manual",
    auto:"Auto LDR", autoSub:"Automatik ketika gelap", timer:"Pemasa", timerSub:"Operasi berjadual",
    turnOn:"HIDUPKAN", turnOff:"MATIKAN", countdown:"Kiraan Masa Pemasa", hms:"jam · minit · saat",
    dawn:"Fajar", dusk:"Senja", maintenance:"Penyelenggaraan", viewMaintenance:"Lihat Penyelenggaraan",
    home:"Utama", control:"Kawalan", system:"Sistem", locked:"SUIS UTAMA MATI — KAWALAN DIKUNCI",
    lockedHelp:"Hidupkan suis utama maya untuk menguji dashboard.", liveTwin:"Demo AEDES-X Secara Langsung",
    liveTwinSub:"Kawalan di bawah mensimulasikan tindak balas prototaip.", simulation:"SIMULASI",
    virtualSwitch:"Suis Utama Maya", virtualSwitchHelp:"Tingkah laku kunci yang sama seperti suis fizikal.",
    ambientLight:"Simulator Cahaya Sekeliling", ambientHelp:"Gerakkan ke arah Gelap untuk menguji mod Auto LDR.",
    bright:"Terang", dark:"Gelap", pressModeButton:"Tekan Butang Mod Fizikal",
    sameLogic:"Logik yang sama seperti dashboard ESP32", portfolioClock:"Simulasi jam pelayar",
    currentTime:"Masa Semasa", timerExplain:"Dalam dashboard ESP32 sebenar, telefon menyelaraskan masa secara tempatan. Demo ini menggunakan jam pelayar anda.",
    timerDemo:"Ujian Pemasa", optionalOverride:"Pilihan masa demo", useDemoTime:"Gunakan masa demo",
    useDemoTimeHelp:"Cuba waktu berjadual tanpa menukar jam peranti anda.", demoHour:"Jam demo",
    demo:"DEMO", prototypeHotspot:"Hotspot Prototaip", prototypeIp:"IP Tempatan Prototaip",
    demoRuntime:"Masa Demo Berjalan", activeTime:"Masa Perangkap Aktif", threshold:"Threshold LDR",
    systemExplain:"Versi portfolio awam ini mensimulasikan tindak balas ESP32 dalam pelayar. Firmware prototaip sebenar masih berjalan secara tempatan pada ESP32.",
    maintSubtitle:"Pastikan AEDES-X sentiasa dalam keadaan baik.", co2Mixture:"Campuran CO₂", meshCleaning:"Pembersihan Jaring",
    good:"Baik", dueSoon:"Hampir Tiba", overdue:"Lewat", notSet:"Belum Ditetapkan",
    lastReplaced:"Kali terakhir diganti", nextReplacement:"Penggantian seterusnya", markReplaced:"Tandakan Sudah Diganti",
    replacementInterval:"Selang penggantian", lastCleaned:"Kali terakhir dibersihkan", nextCleaning:"Pembersihan seterusnya",
    markCleaned:"Tandakan Sudah Dibersihkan", cleaningInterval:"Selang pembersihan", daysUnit:"hari",
    aboutMaintenance:"Tentang Penyelenggaraan",
    maintNote:"Selang peringatan boleh dilaraskan. Demo portfolio ini menyimpan sejarah penyelenggaraan dalam pelayar ini sahaja.",
    daysRemaining:"hari lagi", daysOverdue:"hari lewat", dueToday:"Perlu hari ini", setupRequired:"Tetapan diperlukan",
    co2Task:"Ganti campuran CO₂", meshTask:"Bersihkan jaring", nextTask:"Seterusnya",
    on:"HIDUP", off:"MATI", starts:"AKTIF DALAM", ends:"TAMAT DALAM", nextDawn:"Seterusnya: Fajar", nextDusk:"Seterusnya: Senja",
    dawnActive:"Fajar sedang aktif", duskActive:"Senja sedang aktif", trapOn:"PERANGKAP HIDUP", trapOff:"PERANGKAP MATI",
    switchFirst:"Hidupkan suis utama dahulu.", maintenanceSaved:"Rekod penyelenggaraan disimpan.", intervalSaved:"Selang peringatan dikemas kini."
  },
  en: {
    demoRibbon:"Interactive portfolio demo — simulated hardware response",
    portfolioDemo:"Portfolio Demo", online:"DEMO ONLINE",
    heroText:"Smart mosquito control for a cleaner, safer environment.",
    safe:"SAFE", smart:"SMART", realPhoto:"Uses the real AEDES-X prototype photo.",
    current:"Current Status", uv:"UV Light", fan:"Fan", mainSwitch:"Main Switch", ldr:"LDR Reading",
    mode:"Operating Mode", choose:"Choose how AEDES-X operates", manual:"Manual", manualSub:"Turn ON/OFF manually",
    auto:"Auto LDR", autoSub:"Automatic in darkness", timer:"Timer", timerSub:"Scheduled operation",
    turnOn:"TURN ON", turnOff:"TURN OFF", countdown:"Timer Countdown", hms:"hours · minutes · seconds",
    dawn:"Dawn", dusk:"Dusk", maintenance:"Maintenance", viewMaintenance:"View Maintenance",
    home:"Home", control:"Control", system:"System", locked:"MAIN SWITCH OFF — CONTROLS LOCKED",
    lockedHelp:"Turn the virtual main switch on to test the dashboard.", liveTwin:"Live AEDES-X Demo",
    liveTwinSub:"Controls below simulate the prototype response.", simulation:"SIMULATION",
    virtualSwitch:"Virtual Main Switch", virtualSwitchHelp:"Same lock behaviour as the physical switch.",
    ambientLight:"Ambient Light Simulator", ambientHelp:"Move toward Dark to test Auto LDR mode.",
    bright:"Bright", dark:"Dark", pressModeButton:"Press Physical Mode Button",
    sameLogic:"Same logic as the ESP32 dashboard", portfolioClock:"Browser clock simulation",
    currentTime:"Current Time", timerExplain:"In the real ESP32 dashboard, the phone synchronizes time locally. This demo uses your browser clock.",
    timerDemo:"Timer Test", optionalOverride:"Optional demo override", useDemoTime:"Use demo time",
    useDemoTimeHelp:"Try a scheduled period without changing your device clock.", demoHour:"Demo hour",
    demo:"DEMO", prototypeHotspot:"Prototype Hotspot", prototypeIp:"Prototype Local IP",
    demoRuntime:"Demo Runtime", activeTime:"Trap Active Time", threshold:"LDR Threshold",
    systemExplain:"This public portfolio version simulates ESP32 responses in the browser. The prototype firmware still runs locally on the ESP32.",
    maintSubtitle:"Keep AEDES-X in good condition.", co2Mixture:"CO₂ Mixture", meshCleaning:"Mesh Cleaning",
    good:"Good", dueSoon:"Due Soon", overdue:"Overdue", notSet:"Not Set",
    lastReplaced:"Last replaced", nextReplacement:"Next replacement", markReplaced:"Mark as Replaced",
    replacementInterval:"Replacement interval", lastCleaned:"Last cleaned", nextCleaning:"Next cleaning",
    markCleaned:"Mark as Cleaned", cleaningInterval:"Cleaning interval", daysUnit:"days",
    aboutMaintenance:"About Maintenance",
    maintNote:"Reminder intervals are adjustable. This portfolio demo stores maintenance history only in this browser.",
    daysRemaining:"days remaining", daysOverdue:"days overdue", dueToday:"Due today", setupRequired:"Setup required",
    co2Task:"Replace CO₂ mixture", meshTask:"Clean mesh basket", nextTask:"Next",
    on:"ON", off:"OFF", starts:"STARTS IN", ends:"ENDS IN", nextDawn:"Next: Dawn", nextDusk:"Next: Dusk",
    dawnActive:"Dawn window active", duskActive:"Dusk window active", trapOn:"TRAP ON", trapOff:"TRAP OFF",
    switchFirst:"Turn the main switch on first.", maintenanceSaved:"Maintenance record saved.", intervalSaved:"Reminder interval updated."
  }
};

const state = {
  lang: localStorage.getItem("aedesxDemoLang") || "en",
  mainSwitch: true,
  mode: 0,
  manualOn: false,
  ldr: 1200,
  ldrDark: false,
  trapOn: false,
  demoTime: false,
  demoHour: 18,
  startedAt: Date.now(),
  activeSeconds: 0,
  lastTick: Date.now(),
  maintenance: loadMaintenance()
};

function tr(key){ return T[state.lang][key] || key; }
function pad(n){ return String(n).padStart(2,"0"); }
function fmtDuration(seconds){
  seconds = Math.max(0, Math.floor(seconds));
  return `${pad(Math.floor(seconds/3600))}:${pad(Math.floor((seconds%3600)/60))}:${pad(seconds%60)}`;
}
function toast(message){
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(()=>el.classList.remove("show"),1800);
}
function setLang(lang){
  state.lang = lang;
  localStorage.setItem("aedesxDemoLang",lang);
  $$("[data-t]").forEach(el => el.textContent = tr(el.dataset.t));
  $("bmBtn").classList.toggle("active",lang==="bm");
  $("enBtn").classList.toggle("active",lang==="en");
  renderAll();
}
function showPage(id){
  $$(".page").forEach(p=>p.classList.toggle("active",p.id===id || (id==="maintenance" && p.id==="maintenancePage")));
  ["home","control","timer","system"].forEach(n=>{
    const el=$("nav"+n[0].toUpperCase()+n.slice(1));
    if(el) el.classList.toggle("active",n===id);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}
function getClockDate(){
  if(!state.demoTime) return new Date();
  const d = new Date();
  d.setHours(Math.floor(state.demoHour), Math.round((state.demoHour%1)*60), 0, 0);
  return d;
}
function timerInfo(date){
  const now=date.getHours()*3600+date.getMinutes()*60+date.getSeconds();
  const ds=5*3600+30*60, de=7*3600+30*60, ss=18*3600, se=19*3600+30*60;
  if(now>=ds&&now<de)return{active:true,window:0,remaining:de-now};
  if(now>=ss&&now<se)return{active:true,window:1,remaining:se-now};
  if(now<ds)return{active:false,window:0,remaining:ds-now};
  if(now<ss)return{active:false,window:1,remaining:ss-now};
  return{active:false,window:0,remaining:(86400-now)+ds};
}
function applyLdrHysteresis(){
  if(!state.ldrDark && state.ldr >= 2100) state.ldrDark = true;
  else if(state.ldrDark && state.ldr <= 1800) state.ldrDark = false;
}
function evaluateOutputs(){
  applyLdrHysteresis();
  if(!state.mainSwitch){ state.trapOn=false; return; }
  if(state.mode===0) state.trapOn=state.manualOn;
  if(state.mode===1) state.trapOn=state.ldrDark;
  if(state.mode===2) state.trapOn=timerInfo(getClockDate()).active;
}
function selectMode(mode){
  if(!state.mainSwitch){ toast(tr("switchFirst")); return; }
  state.mode = Number(mode);
  renderAll();
}
function cyclePhysicalMode(){
  if(!state.mainSwitch){ toast(tr("switchFirst")); return; }
  state.mode = (state.mode + 1) % 3;
  renderAll();
}
function manualSet(on){
  if(!state.mainSwitch){ toast(tr("switchFirst")); return; }
  if(state.mode!==0){ state.mode=0; }
  state.manualOn=!!on;
  renderAll();
}
function renderStatus(){
  evaluateOutputs();
  document.body.classList.toggle("trap-on",state.trapOn);
  document.body.classList.toggle("trap-off",!state.trapOn);

  $("uvVal").textContent=state.trapOn?tr("on"):tr("off");
  $("fanVal").textContent=state.trapOn?tr("on"):tr("off");
  $("switchVal").textContent=state.mainSwitch?tr("on"):tr("off");
  $("sysTiny").textContent="● "+(state.mainSwitch?tr("on"):tr("off"));
  $("sysTiny").style.color=state.mainSwitch?"#2f7d5a":"#b43e3e";
  $("ldrVal").textContent=state.ldr;
  $("ldrSliderValue").textContent=state.ldr;
  $("ldrFill").style.width=Math.min(100,state.ldr/4095*100)+"%";
  $("ldrPill").textContent=state.ldrDark?tr("dark").toUpperCase():tr("bright").toUpperCase();
  $("fanGlyph").classList.toggle("spinning",state.trapOn);
  $("photoStateChip").textContent=state.trapOn?tr("trapOn"):tr("trapOff");
  $("lockBanner").classList.toggle("show",!state.mainSwitch);
  $("mainSwitchToggle").checked=state.mainSwitch;

  $$(".mode").forEach(btn=>{
    const m=Number(btn.dataset.mode);
    btn.classList.toggle("active",m===state.mode);
    btn.disabled=!state.mainSwitch;
  });
  $("manualBox").classList.toggle("show",state.mode===0);
  $("controlManualBox").classList.toggle("show",state.mode===0);

  const modeNames=[tr("manual").toUpperCase(),"AUTO LDR",tr("timer").toUpperCase()];
  $("oledText").textContent =
`MODE: ${modeNames[state.mode]}
UV:${state.trapOn?"ON ":"OFF"} FAN:${state.trapOn?"ON":"OFF"}
LDR:${state.ldr} ${state.ldrDark?"DARK":"BRIGHT"}`;
}
function renderTimer(){
  const d=getClockDate();
  $("headTime").textContent=`${pad(d.getHours())}:${pad(d.getMinutes())}`;
  $("timerClock").textContent=`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  const ti=timerInfo(d);
  $("countValue").textContent=fmtDuration(ti.remaining);
  $("dawnSlot").classList.toggle("active",ti.active&&ti.window===0);
  $("duskSlot").classList.toggle("active",ti.active&&ti.window===1);
  if(ti.active){
    $("countTag").textContent=tr("ends");
    $("countWindow").textContent=ti.window===0?tr("dawnActive"):tr("duskActive");
  }else{
    $("countTag").textContent=tr("starts");
    $("countWindow").textContent=ti.window===0?tr("nextDawn"):tr("nextDusk");
  }
  $("nextTiny").textContent=ti.window===0?tr("dawn").toUpperCase():tr("dusk").toUpperCase();
  $("demoTimeControls").classList.toggle("show",state.demoTime);
  $("demoTimeToggle").checked=state.demoTime;
  $("demoHour").value=state.demoHour;
  const mins=Math.round((state.demoHour%1)*60);
  $("demoHourVal").textContent=`${pad(Math.floor(state.demoHour))}:${pad(mins)}`;
}
function tick(){
  const now=Date.now();
  const elapsed=(now-state.lastTick)/1000;
  state.lastTick=now;
  evaluateOutputs();
  if(state.trapOn) state.activeSeconds += elapsed;
  $("uptime").textContent=fmtDuration((now-state.startedAt)/1000);
  $("activeTime").textContent=fmtDuration(state.activeSeconds);
  renderStatus();
  renderTimer();
}
function loadMaintenance(){
  try{
    return JSON.parse(localStorage.getItem("aedesxDemoMaintenance")) || {co2Last:0,meshLast:0,co2Days:14,meshDays:14};
  }catch(_){ return {co2Last:0,meshLast:0,co2Days:14,meshDays:14}; }
}
function saveMaintenance(){ localStorage.setItem("aedesxDemoMaintenance",JSON.stringify(state.maintenance)); }
const DAY=86400000;
function localDate(epoch){
  if(!epoch)return "—";
  return new Date(epoch).toLocaleDateString(state.lang==="bm"?"ms-MY":"en-GB",{day:"numeric",month:"short",year:"numeric"});
}
function maintState(last,days){
  if(!last)return{rank:3,key:"notSet",cls:"neutral",remaining:null,due:0};
  const due=last+days*DAY,diff=due-Date.now(),remaining=Math.ceil(diff/DAY),warn=Math.max(1,Math.min(3,Math.ceil(days*.25)));
  if(diff<0)return{rank:2,key:"overdue",cls:"overdue",remaining:-(Math.floor((-diff)/DAY)+1),due};
  if(remaining<=warn)return{rank:1,key:"dueSoon",cls:"soon",remaining,due};
  return{rank:0,key:"good",cls:"good",remaining,due};
}
function remainingText(s){
  if(s.remaining===null)return tr("setupRequired");
  if(s.remaining<0)return `${Math.abs(s.remaining)} ${tr("daysOverdue")}`;
  if(s.remaining===0)return tr("dueToday");
  return `${s.remaining} ${tr("daysRemaining")}`;
}
function setBadge(el,s){
  el.className="maintBadge "+s.cls;
  const icon=s.key==="good"?"✓":s.key==="notSet"?"○":"!";
  el.textContent=`${icon} ${tr(s.key)}`;
}
function renderMaintenance(){
  const m=state.maintenance;
  const c=maintState(m.co2Last,m.co2Days), mesh=maintState(m.meshLast,m.meshDays);
  $("co2Last").textContent=localDate(m.co2Last);
  $("co2Next").textContent=c.due?localDate(c.due):"—";
  $("co2Remaining").textContent=remainingText(c);
  $("co2Days").textContent=m.co2Days; setBadge($("co2Badge"),c);
  $("meshLast").textContent=localDate(m.meshLast);
  $("meshNext").textContent=mesh.due?localDate(mesh.due):"—";
  $("meshRemaining").textContent=remainingText(mesh);
  $("meshDays").textContent=m.meshDays; setBadge($("meshBadge"),mesh);

  let overall,nextTask,nextState;
  if(c.key==="notSet"||mesh.key==="notSet"){
    overall={key:"notSet",cls:"neutral"};
    nextTask=c.key==="notSet"?tr("co2Task"):tr("meshTask");
    nextState=c.key==="notSet"?c:mesh;
  }else{
    overall=c.rank>=mesh.rank?c:mesh;
    if(c.due<=mesh.due){nextTask=tr("co2Task");nextState=c}else{nextTask=tr("meshTask");nextState=mesh}
  }
  setBadge($("maintHomeBadge"),overall);
  $("maintHomeNext").textContent=`${tr("nextTask")}: ${nextTask}`;
  $("maintHomeRemain").textContent=remainingText(nextState);
}
function markMaintenance(item){
  state.maintenance[item==="co2"?"co2Last":"meshLast"]=Date.now();
  saveMaintenance(); renderMaintenance(); toast(tr("maintenanceSaved"));
}
function changeInterval(item,delta){
  const key=item==="co2"?"co2Days":"meshDays";
  state.maintenance[key]=Math.max(1,Math.min(90,state.maintenance[key]+delta));
  saveMaintenance(); renderMaintenance(); toast(tr("intervalSaved"));
}
function renderAll(){ renderStatus(); renderTimer(); renderMaintenance(); }

$("bmBtn").addEventListener("click",()=>setLang("bm"));
$("enBtn").addEventListener("click",()=>setLang("en"));
$$(".mode").forEach(b=>b.addEventListener("click",()=>selectMode(b.dataset.mode)));
$("manualOn").addEventListener("click",()=>manualSet(true));
$("manualOff").addEventListener("click",()=>manualSet(false));
$$(".manual-on").forEach(b=>b.addEventListener("click",()=>manualSet(true)));
$$(".manual-off").forEach(b=>b.addEventListener("click",()=>manualSet(false)));
$("mainSwitchToggle").addEventListener("change",e=>{state.mainSwitch=e.target.checked;renderAll()});
$("ldrSlider").addEventListener("input",e=>{state.ldr=Number(e.target.value);renderAll()});
$("physicalModeBtn").addEventListener("click",cyclePhysicalMode);
$("demoTimeToggle").addEventListener("change",e=>{state.demoTime=e.target.checked;renderAll()});
$("demoHour").addEventListener("input",e=>{state.demoHour=Number(e.target.value);renderAll()});
$$(".quick-times button").forEach(b=>b.addEventListener("click",()=>{
  state.demoTime=true; state.demoHour=Number(b.dataset.time); renderAll();
}));
$$(".nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
$("openMaintenanceBtn").addEventListener("click",()=>showPage("maintenance"));
$("systemMaintenanceBtn").addEventListener("click",()=>showPage("maintenance"));
$("maintenanceBackBtn").addEventListener("click",()=>showPage("home"));
$("markCo2").addEventListener("click",()=>markMaintenance("co2"));
$("markMesh").addEventListener("click",()=>markMaintenance("mesh"));
$$(".stepper button").forEach(b=>b.addEventListener("click",()=>changeInterval(b.dataset.item,Number(b.dataset.delta))));

setLang(state.lang);
renderAll();
setInterval(tick,1000);
})();