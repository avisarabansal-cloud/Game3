<html><head>
<meta charset="utf-8"></head><body>function EcrireCookiefreecounterstat(nom,valeur,nombre)
{
   var argv=EcrireCookiefreecounterstat.arguments;
   var argc=EcrireCookiefreecounterstat.arguments.length;
   var ladate=new Date(); 
   ladate.setTime(ladate.getTime()+Number(nombre));
   var path=("/") ;
   var domain=(argc &gt; 4) ? argv[4] : null;
   var secure=(argc &gt; 5) ? arg[5] : false;
//toLocaleString
   document.cookie=nom+"="+escape(valeur)+
      "; expires="+ladate.toGMTString()+
       ((path==null) ? "" : ("; path="+path))+
      ((domain==null) ? "" : ("; domain="+domain))+
      ((secure==true) ? "; secure" : "");
}

function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i &lt; clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc &gt; 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc &gt; 4) ? argv[4] : null;
   var secure=(argc &gt; 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
}

function deleteCookie(name,path,domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i &lt; clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieValfreecounterstat (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function getCookieValfreecounterstat (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var date_init=new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat=1;
var init_freecounterstat_nv=1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if(acceptcookiefreecounterstat == null){
date=new Date;
date.setTime(date.getTime()+1000);
EcrireCookiefreecounterstat('acceptcookiefreecounterstat','ok','31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat=='ok') {
test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
   if(test_cookie_value_freecounterstat == null){
   init_freecounterstat=0;
   test_cookie_value_freecounterstat ='1beedac307fdd79f436ae67ef0362096';
   EcrireCookiefreecounterstat('counter',test_cookie_value_freecounterstat,'103128000');
   }
   if(test_cookie_value_freecounterstat_nv==null){
   test_cookie_value_freecounterstat_nv ='1beedac307fdd79f436ae67ef0362096';
   EcrireCookiefreecounterstat('counter_nv',test_cookie_value_freecounterstat_nv,'31536000000');
   init_freecounterstat_nv=0;
   }
}
else {
var test_cookie_value_freecounterstat="no";
acceptcookiefreecounterstat='no';
}
var html_div='<a href="https://www.freecounterstat.com/geozoom.php?c=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;base=counter1&amp;type_clic=1" target="_blank"><img border="0" src="https://counter1.freecounterstat.com/private/counter.php?c=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;init='+date_init.getTime()+'&amp;init_freecounterstat='+init_freecounterstat+'&amp;library=library_counters&amp;coef=1&amp;type=1168&amp;lenght=8&amp;pv=0" alt="Click to see detail of visits and stats for this site" title="Click to see detail of visits and stats for this site"></a>';

var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}
var browser = parseInt(navigator.appVersion);
if (browser&gt;=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}
if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
langue=langue.substring(0,2);
var date_freecounterstat = new Date();

var ref=document.referrer;
var bro_nom="safari";
//if (ref.indexOf(".swf")!=-1 &amp;&amp; bro_nom.indexOf("chrome")!=-1){
//ref="https://sites.google.com/view/turtlezone/home?authuser=0";
//ref="NULL";

html_div+='<img style="border:none" src="https://counter1.optistats.ovh:4433/private/pointeur/pointeur.gif?|w3bry335rp5qdzs8pzyhs9aadyqxb38l|'+escape(resolution)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(date_freecounterstat.getTime()/1000)+'|'+test_cookie_value_freecounterstat+'|computer|mac|10.15.7|safari|605|The+Netherlands|NL|52.38240|4.89950||Perviy+TSOD+LLC|-28800|'+init_freecounterstat_nv+'|1791516072|'+acceptcookiefreecounterstat+'|'+escape(document.URL)+'|'+escape(ref)+'|js|62.133.61.131|||&amp;init='+date_init.getTime()+'" border="0" width="1" height="1">';

var xhrarray={};
var extension1=false;
var extension2=false;
var extension3=false;


function frameMe(u)
{
 iframe = document.createElement('iframe');
 iframe.style.display = "none";
 iframe.src = u;
 document.body.appendChild(iframe);
}



document.getElementById('sfcw3bry335rp5qdzs8pzyhs9aadyqxb38l').innerHTML=html_div;

freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == null &amp;&amp; freecounterstat_test_cookie_value != "okg"){
EcrireCookieGeo('acceptcookie','ok',86400);
}
var uri84='https://www.idealcook.ovh/promo.php?compte=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;path=017004&amp;lg=en&amp;pays=NL&amp;lg_nav='+langue+'&amp;platform=mac&amp;browser=safari&amp;version=605&amp;idealsite=FCS';
//var uri84='http://164.132.171.89/promo.php?compte=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;path=017004&amp;lg=en&amp;pays=NL&amp;lg_nav='+langue+'&amp;platform=mac&amp;browser=safari&amp;version=605&amp;idealsite=FCS';
//var uri84='http://37.187.248.215/promo.php?compte=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;path=017004&amp;lg=en&amp;pays=NL&amp;lg_nav='+langue+'&amp;platform=mac&amp;browser=safari&amp;version=605&amp;idealsite=FCS';
//var uri84='http://5.39.67.191/promo.php?compte=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;path=017004&amp;lg=en&amp;pays=NL&amp;lg_nav='+langue+'&amp;platform=mac&amp;browser=safari&amp;version=605&amp;idealsite=FCS';
//var uri84='http://94.23.210.144/promo/promo.php?compte=w3bry335rp5qdzs8pzyhs9aadyqxb38l&amp;path=017004&amp;lg=en&amp;pays=NL&amp;lg_nav='+langue+'&amp;platform=mac&amp;browser=safari&amp;version=605';


function geoclick(){
freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == "ok" &amp;&amp; freecounterstat_test_cookie_value != "ok." &amp;&amp; freecounterstat_test_cookie_value != "okg" &amp;&amp; freecounterstat_test_cookie_value != "okz"){
        freecounterstat_test_cookie="017004;w3bry335rp5qdzs8pzyhs9aadyqxb38l;en;";
        lawidth=screen.width;
        laheight=screen.height;
if(navigator.userAgent.indexOf('Firefox') == -1){
wini=window.open(uri84,'_blank', 'toolbar=1,location=0,directories=1,status=0,menubar=0,scrollbars=1,resizable=1,fullscreen=0,width='+lawidth+',height='+laheight+',top=0,left=100','_blank');
if(wini)wini.blur();
window.focus();
self.focus();



}
else{

bSimple=false;
 randn='pu_' + Math.floor(89999999*Math.random()+10000000);

 var _parent = self,sToolbar,sOptions,popunder84;
 sToolbar='no';
//sToolbar = (navigator.userAgent.indexOf('webkit')==-1 &amp;&amp; (navigator.userAgent.indexOf('mozilla')==-1 || parseInt(navigator.appversion, 10) &lt; 12)) ? 'yes' : 'no';
 if (top != self) {
  try {
   if (top.document.location.toString()) {
    _parent = top;
   }
  }
  catch(err) { }
 }
 sOptions = 'toolbar=' + sToolbar + ',scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + (screen.availWidth - 10).toString();
 sOptions += ',height=' + (screen.availHeight - 122).toString() + ',screenX=0,screenY=0,left=0,top=0';
 popunder84 = _parent.window.open(uri84, randn, sOptions);
 if (popunder84) {
    popunder84.blur();
    //setTimeout('popunder84.blur',0);
    if (bSimple) {
    window.focus();
    try { opener.window.focus(); }
    catch (err) { }
    }
    else {
    popunder84.init = function(e) {
    with (e) {
     (function() {
     if (typeof window.mozPaintCount != 'undefined') {
     var x = window.open('about:blank');
     x.close();
     }
     try { opener.window.focus(); }
     catch (err) { }
     })();
     }
     };
     popunder84.params = {
       url: uri84
     };
     popunder84.init(popunder84);
     }
  }
}
EcrireCookieGeo('acceptcookie','ok.',86400);
 }
}


function popup84()
{
 items=new Array();
 if(top.location != self.document.location){
 items = document.getElementsByTagName('a');
 parent.document.onclick=geoclick;
 }
 else{
 items = document.getElementsByTagName('a');
 if (window.addEventListener)document.body.addEventListener('click',geoclick,false)
 if (window.attachEvent)document.body.attachEvent("onclick", geoclick)
 }
 for(var i=0; i</body></html>