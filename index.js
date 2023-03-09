var date = new Date();
var hours = date.getHours();
var mins= date.getMinutes();
var secs = date.getSeconds();
var text = document.getElementById("time")
text.innerHTML = hours % 12+ ":" + mins + ":" + secs

setInterval(function(){
	date = new Date()
  hours = date.getHours();
  mins = date.getMinutes();
  secs = date.getSeconds();
  text.innerHTML = hours % 12+ ":" + mins + ":" + secs;
}, 1000);
