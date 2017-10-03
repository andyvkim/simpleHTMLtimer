window.onload = function() {
var heartbeat= document.getElementById('heartbeat');

document.getElementById('timer').innerHTML =
01 + ":" + 05;
document.getElementById('lateTimer').innerHTML =
"";
heartbeat.play();
startTimer();
}

function startTimer() {
  document.getElementById('lateTimer').innerHTML= "";
var t = Date.parse("2017-10-3  15:52") - Date.parse(new Date());
if(t<0){
 document.getElementById('timer').innerHTML="";
      document.getElementById('lateTimer').innerHTML="";
      document.getElementById('paragraphs').innerHTML="";
       heartbeat.setAttribute('src','assets/end_horn.wav');
    heartbeat.play();
      return;
}
else{
        var seconds = Math.floor((t / 1000) % 60);
        var lateSeconds =( seconds+1);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24) % 30);
        var months = Math.floor(t / (1000 * 60 * 60 * 24 * 30));
        var hundredths = (t -(seconds *1000)- (minutes*60000));
        if (months < 10) {
          months = "0" + months;
      }
      if (days < 10) {
          days = "0" + days;
      }
      if (hours < 10) {
          hours = "0" + hours;
      }
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      if (seconds < 10) {

          seconds = "0" + seconds;
      }
      if (lateSeconds < 10) {

           lateSeconds = "0" + lateSeconds;
       }

      if (hundredths < 10) {
        hundredths = "0" + hundredths;
      }

     if(minutes==0){

         if(seconds == 29 || seconds<10){

        document.getElementById('timer').innerHTML =
        months+ " : " +days+ " : " +hours+" : "+minutes+" : "
        +seconds;
        document.getElementById('lateTimer').innerHTML =
        months+ " : " +days+ " : " +hours+" : "+minutes+" : "
        +lateSeconds;
         heartbeat.setAttribute('src','assets/bass_drum_hit1s.wav');
        heartbeat.play();
      }
      else{
        document.getElementById('timer').innerHTML =
        months+ " : " +days+ " : " +hours+" : "+minutes+" : "
        +seconds;
        document.getElementById('lateTimer').innerHTML =
            "";
      }
    }
    else{
      document.getElementById('timer').innerHTML =
      months+ " : " +days+ " : " +hours+" : "+minutes+" : "
      +seconds;
      document.getElementById('lateTimer').innerHTML =
          "";
    }
  }

setTimeout(startTimer, 1000);
}
