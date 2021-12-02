function clock(){
  var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes;
}
document.getElementById('clock').onclick = function() {
	var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
	
         }
document.getElementById('clock').oncontextmenu = function() {
	var date = new Date(),
         day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
         month = (date.getMonth() < 10) ? '0' + date.getMonth() + 1: date.getMonth() + 1,
         year = (date.getFullYear() < 10) ? '0' + date.getFullYear() : date.getFullYear();
	document.getElementById('clock').innerHTML = day + '/' + month + '/' + year;
         }
setInterval(clock, 2000);
clock();