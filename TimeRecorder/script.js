function record(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var time = h + ":" + m + ":" + s;
  localStorage(time, "Recorded");
}
