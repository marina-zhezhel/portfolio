(function() {
	'use strict';
	function Timer() {
		this.start=document.querySelector("button[class='btn btn-primary start']");
		this.stop=document.querySelector("button[class='btn btn-primary stop']");
		this.lap=document.querySelector("button[class='btn btn-info']");
		this.reset=document.querySelector("button[class='btn btn-danger btn-sm']");
		this.stopwatch=document.querySelector("h2[class='stopwatch-current']");
		this.lapDiv=document.querySelector(".stopwatch-laps");
		this.body=document.querySelector("body");
		this.flag=false;
		this.clock1;
		this.startTime;
		this.presentTime;
		this.showOtputTime;
		this.closeOtputTime;
	}
	Timer.prototype.startTimer=function () {
		var d=new Date();
		this.startTime=d.getTime();
		this.clock1=setInterval(this.showTimer.bind(this),100);
		this.start.style.display="none";
		this.stop.style.display="block";
		this.flag=true;
	};
	Timer.prototype.showTimer=function () {
		var outputHours;
		var outputMinutes;
		var outputSeconds;
		var outputMilliseconds;
		var presentTime;
		var differenceTime;
		var differenceHours;
		var differenceMinutes;
		var differenceSeconds;
		var differenceMilliseconds;
		var d=new Date();
		presentTime=d.getTime();
		differenceTime=presentTime-this.startTime;
		differenceHours=Math.floor(differenceTime/3600000);
		differenceMinutes=Math.floor((differenceTime-differenceHours*3600000)/60000);
		differenceSeconds=Math.floor((differenceTime-differenceHours*3600000-differenceMinutes*60000)/1000);
		differenceMilliseconds=differenceTime-differenceHours*3600000-differenceMinutes*60000-differenceSeconds*1000;
		if ((differenceHours>=0)&&(differenceHours<10)) {
			outputHours="0"+differenceHours.toString()+":";
		} 
		if (differenceHours>=10){
			outputHours=differenceHours.toString()+":";
		}
		if (differenceHours===0) {
			outputHours="";
		} 
		if ((differenceMinutes>=0)&&(differenceMinutes<10)) {
			outputMinutes="0"+differenceMinutes.toString()+":";
		}
		if (differenceMinutes>=10) {
			outputMinutes=differenceMinutes.toString()+":";
		}
		if ((differenceMinutes===0)&&(differenceHours===0)) {
			outputMinutes="";
		}
		if ((differenceSeconds>=0)&&(differenceSeconds<10)) {
			outputSeconds="0"+differenceSeconds.toString()+":";
		}
		if (differenceSeconds>=10){
			outputSeconds=differenceSeconds.toString()+":";
		}
		if ((differenceSeconds===0)&&(differenceMinutes===0)&&(differenceHours===0)) {
			outputSeconds="";
		}
		if (differenceMilliseconds>=100) {
			outputMilliseconds=differenceMilliseconds.toString();
		}
		if ((differenceMilliseconds>=10)&&(differenceMilliseconds<100)) {
			outputMilliseconds="0"+differenceMilliseconds.toString();
		}
		if ((differenceMilliseconds>=0)&&(differenceMilliseconds<10)) {
			outputMilliseconds="00"+differenceMilliseconds.toString();
		}
		this.stopwatch.innerHTML=outputHours+outputMinutes+outputSeconds+outputMilliseconds;
	};
	Timer.prototype.stopTimer=function () {
		clearInterval(this.clock1);
		this.start.style.display="block";
		this.stop.style.display="none";
		this.flag=false;
	};
	Timer.prototype.showTime=function () {
		this.showOtputTime = document.createElement("div");
		this.showOtputTime.setAttribute("class", "alert alert-info");
		this.lapDiv.appendChild(this.showOtputTime);
		this.showOtputTime.innerHTML = this.stopwatch.innerHTML;
		this.closeOtputTime = document.createElement("span");
		this.closeOtputTime.setAttribute("class", "label label-danger");
		this.showOtputTime.appendChild(this.closeOtputTime);
		this.closeOtputTime.innerHTML="×";
		addEvent(this.closeOtputTime, "click", this.removeNode.bind(this.closeOtputTime));
	};
	Timer.prototype.clearTimer=function () {
		clearInterval(this.clock1);
		this.start.style.display="block";
		this.stop.style.display="none";
		this.stopwatch.innerHTML="00:00:00:000";
		if (this.showOtputTime) {
			var childDiv=document.querySelectorAll("div[class='alert alert-info']");
			for (var i=0; i<childDiv.length; i++) {
				this.lapDiv.removeChild(childDiv[i]);
			}
		}
		this.flag=false;
	};
	Timer.prototype.removeNode=function () {
		var paretnElement=this.parentNode;
		paretnElement.parentNode.removeChild(paretnElement);
	};
	Timer.prototype.runKeyboard = function(event) {
		if (event.keyCode === 83) {
			if (this.flag) {
				this.stopTimer();
			}
			else {
				this.startTimer();
			}
		}
		if ((event.keyCode === 82)&&(this.flag)) {
			this.clearTimer();
		} 
		if (event.keyCode === 76) {
			this.showTime();
		}
	};
	Timer.prototype.eventHandler = function() {
		addEvent(this.start, "click", this.startTimer.bind(this));
		addEvent(this.stop, "click", this.stopTimer.bind(this)); 
		addEvent(this.lap, "click", this.showTime.bind(this)); 
		addEvent(this.reset, "click", this.clearTimer.bind(this)); 
		addEvent(this.body, "keyup", this.runKeyboard.bind(this));
	};
	window.Timer = Timer;
})();

var timer = new Timer();
timer.eventHandler();

