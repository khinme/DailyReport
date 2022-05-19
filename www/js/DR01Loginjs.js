// This is a JavaScript file

function on() {
      document.getElementById("overlay").style.display = "block";     
}
function on1() {
      document.getElementById("overlay1").style.display = "block";     
}

function on2() {
      document.getElementById("overlay2").style.display = "block";     
}

function changetext()
{
     document.getElementById("BT_Login").innerText = "ログイン中";
}
function changetourokutext()
{
     document.getElementById("BT_Touroku").innerText = "登録中";
}
function changesoushintext()
{
     document.getElementById("BT_Soushin").innerText = "送信中";
}
function changerpasssoushintext()
{
     document.getElementById("BT_Rpassoushin").innerText = "送信中";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function off1() {
  document.getElementById("overlay1").style.display = "none";
}
  function createTimedLink(element, callback, timeout){
  setTimeout( function(){callback(element);}, timeout);
  return false;
}

function myFunction(element) { 
/* Block of code, with no 'return false'. */
  window.location = element.href;
 
 }

 function toggleLoader() {    
    var x = document.getElementById("loader");   
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleLoader1() {    
    var x = document.getElementById("loader1");   
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}