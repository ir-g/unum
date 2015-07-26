// Below code via http://jaketrent.com/post/addremove-classes-raw-javascript/

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Below code via http://www.xfront.com/microformats/AHAH.html

function ahah(url,target) {
  //document.getElementById(target).innerHTML = ' Fetching data...';
  addClass(document.getElementById(target),"loading");
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {ahahDone(url, target);};
    req.open("GET", url, true);
    req.send("");
  }
}  

function ahahDone(url, target) {
  if (req.readyState == 4) { // only if req is "loaded"
    removeClass(document.getElementById(target), "loading")
    if (req.status == 200) { // only if "OK"
      document.getElementById(target).innerHTML = req.responseText;
    } else {
      document.getElementById(target).innerHTML=" AHAH Error:\n"+ req.status + "\n" +req.statusText + "\n" + "~~~~Note: If you are getting error 0 then maybe installing this site to your hard drive was a bad idea. Use apache and/or any HTTP enabled server. This should load the content of page/index.html on load!";
    }
  }
}

// domready (c) Dustin Diaz 2012 - License MIT - github.com/ded/domready

!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(e){function p(e){h=1;while(e=t.shift())e()}var t=[],n,r=!1,i=document,s=i.documentElement,o=s.doScroll,u="DOMContentLoaded",a="addEventListener",f="onreadystatechange",l="readyState",c=o?/^loaded|^c/:/^loaded|c/,h=c.test(i[l]);return i[a]&&i[a](u,n=function(){i.removeEventListener(u,n,r),p()},r),o&&i.attachEvent(f,n=function(){/^c/.test(i[l])&&(i.detachEvent(f,n),p())}),e=o?function(n){self!=top?h?n():t.push(n):function(){try{s.doScroll("left")}catch(t){return setTimeout(function(){e(n)},50)}n()}()}:function(e){h?e():t.push(e)}})

// Load page function. Does not change the url of the page.

function load(name) {
    ahah("pages/"+name+".html","content");
}

// Core code
domready(function() {
    var current_hash = '';
    setTimeout(function(){
      load("index");
    }, 50);
    setInterval(function() {
        if(window.location.hash != current_hash) {
            current_hash = window.location.hash;
            if((current_hash.substring(3) == '')||(current_hash == undefined)){
            	load('index');
            }else{
            	load(current_hash.substring(3));
            }
        }        
    }, 100); 
});

/*
setTimeout('redir()', 50);
//50Milliseconds!  
//1000millisconds=1second
function redir() {
load("index")
}
*/
