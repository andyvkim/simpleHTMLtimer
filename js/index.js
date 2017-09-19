document.getElementById('timer').innerHTML =
  01 + ":" + 00;
  var heartbeat = document.getElementById("heartbeat");

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
    if(s<=16 && s>0){
      var s = checkSecondLastMinute((timeArray[1] - 1));
     heartbeat.play();
     console.log(heartbeat.src);
     
    }
    if (s<=0){
      heartbeat.pause();
      var s = checkSecondLastMinute((timeArray[1] - 1));
    }
  }
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
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
    heartbeat.setAttribute('src','assets/buzzer.mp3');
    console.log(heartbeat.src);
    heartbeat.play();
  }
  if(sec<0){
    sec="00";
  }
   // add zero in front of numbers < 10
  
  
  return sec;
}
function resetTimer(){
  document.getElementById('timer').innerHTML =
  01 + ":" + 00;
}
