function record(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var time = h + ":" + m + ":" + s;
  alert(time);
  localStorage.setItem(time, "Recorded");
  alert();
}

/*
for(var i in localStorage){
  var e = document.createElement("div");
  e.value = i;
  document.getElementById("recordbtn").append(e);
  alert();
}*/
