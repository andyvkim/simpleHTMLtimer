window.onload = function() {
var heartbeat= document.getElementById('heartbeat');

document.getElementById('timer').innerHTML =
00 + ":" + 35;
heartbeat.play();
startTimer();

function startTimer() {
var presentTime = document.getElementById('timer').innerHTML;
var timeArray = presentTime.split(/[:]+/);
var m = timeArray[0];
if(m>0){
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  }
  else{
    var s = checkSecondLastMinute((timeArray[1] - 1));
    if(s<=10 && s>0){
      var s = checkSecondLastMinute((timeArray[1] - 1));
      
    }
    if(s==0){
      s="00";
      document.getElementById('timer').innerHTML =
      m + ":" + s;
    }
    if (s<=0){
      s="00";
      return;
    }
  }
//if(m<0){alert('timer completed')}


document.getElementById('timer').innerHTML =
  m + ":" + s;
  if(m==0&&s<=10){ 
    document.getElementById('timer').style.color="red";
  }
setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}
function checkSecondLastMinute(sec){
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if(sec == 0){
   sec="00";
  }
  if(sec<0){
    return;
    
  }
   // add zero in front of numbers < 10
  
  return sec;
}
}