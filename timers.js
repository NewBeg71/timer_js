//need to set variables global - inside or outside

var timer = {
  seconds: 0,
  timerId: 0,
//};

//reference the buttons made in html:timer???? - not a button/reset/start/pause
theButtons: {
  timer: document.getElementById("timer"),
  reset: document.getElementById("reset"),
  start: document.getElementById("start"),
  pause: document.getElementById("pause"),
},
//create 'clickhandlers'
//onClick do something
//('timer').onClick = (//'updateTime()'// , )  ;
//('reset').onClick = (//'resetTime()'// , )  ;
//('start').onClick = (//'beginTime'// , )  ;
//('pause').onClick =  (//'stopTime()'// , ) ;

//Commented out about do one on one

//instatiate - work with object - set Timer setInterval()
//return text to Stop Watch
//make an update time method that inserts itself into <h1 id="timer">

////replace hmtl
//document.getElementById("timer").innerHtml = "seconds";
updateTime: function updateTime(){
  this.seconds++;
  this.theButtons.timer.textContent = 'Time elaspsed: ' + this.seconds;
//seconds++
},

 clickHandlers: function(){
   this.theButtons.start.addEventListener('click', function(){
      this.theButtons.timer.textContent = 'Time elaspsed: ' + this.seconds;
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
 }.bind(this));


 //function stopTime(){
    this.theButtons.pause.addEventListener('click', function(){
      clearInterval(this.timerId);
    }.bind(this));

//innerHTML = ("Time elapsed: " + 0);
//setTimeout()
//};

    this.theButtons.reset.addEventListener ('click',function (){
      this.seconds = 0;
      clearInterval(this.timerId);
      this.theButtons.timer.textContent = 'Stop Watch';
//document.getElementById("#timer").innerHTML = ("Stop Watch");
//clearInterval()
 }.bind(this));

  }
};

timer.clickHandlers();

/*Walk-through optional solution

let timeElapsed = 0;
let timeElapsedDisplay = document.createElement('span');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let pauseButton = document.getElementById('pause');
let timerText = document.getElementById('timer');
let isStarted = false;

let startTimer = () => {
  if ()!isStarted){
    isStarted = !isStarted;
    intervalID = window.setInterval (function(){
      timerText.innerHTML = "Time elapsed: " + timeElapsed;
      timeElapsed++;
}, 1000);
}
};

startButton.addEventListener('click', startTimer);


let resetTimer = () => {
  isStarted = !isStarted;
  window.clearInterval (intervalID);
  timerText.innerHTML = "Stop Watch";
  timeElapsed = 0;

};




resetButton.addEventListener('click', resetTimer);

let pauseTimer = () => {
  isStarted = !isStarted;
  window.clearInterval (intervalID);

};

pauseButton.addEventListener('click', stopTimer);




*/
