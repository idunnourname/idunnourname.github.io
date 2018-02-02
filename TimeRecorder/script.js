function record(){
  var date = new Date();
  var h = date.getHours().toString();
  var m = date.getMinutes().toString();
  var s = date.getSeconds().toString();
  var time = h + ":" + m + ":" + s;
  alert(time);
  localStorage.setItem("test", "Recorded");
  alert();
}

for(var i in localStorage){
  var e = document.createElement("div");
  e.value = i;
  document.getElementById("recordbtn").append(e);
  alert(e.value);
}
