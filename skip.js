var video = 1;
function next() {
   document.getElementsByClassName("pull-right")[3].click();
   setTimeout(timeout, 3000);
}
function timeout() {
   var time = document.getElementsByClassName("jw-text jw-reset jw-text-duration")[0].innerHTML;
   console.log('Time for this video: ' + time);
   console.log('Video: ' + video);
   var minutes = time.split(":")[0] * 60000;
   var seconds = time.split(":")[1] * 1000;
   var milliseconds = 61000;
   video++;
   console.log('Milliseconds: ' + milliseconds);
   setTimeout(next, milliseconds);
}
timeout();
