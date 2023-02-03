//Declare clockDisplay variable to get current time
  const clockDisplay = new Date();
  //Declares variables for hour, minute, second, 
  let displayHour = addZero(clockDisplay.getHours());
  let displayMinute = addZero(clockDisplay.getMinutes());
  let displaySecond = addZero(clockDisplay.getSeconds())
  let ampm = addZero(clockDisplay.getHours()) < 12 ? 'AM' : 'PM';
  //Declares "time" variable and concatenates date objects
  let time = displayHour + ":" + displayMinute + ":" + displaySecond + " " + ampm;
  //Points time object to document, gets html id element and renders it to doc
  document.getElementById("clockContainer").innerHTML = time;

  //If statement inserting zero into numbers less than 10
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  //Declares function containing date variable to refresh the clockContainer in doc
  function refreshClock() {
    const date = new Date();
    document.getElementById("clockContainer").innerHTML = date.toLocaleTimeString();
  }

    //Every 1 second (1000ms) refreshClock function runs
    setInterval(refreshClock, 1000);