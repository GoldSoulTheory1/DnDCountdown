// Set the date we're counting down to
var countDownDate = new Date("April 14, 2023 12:00:00").getTime();

// Update the countdown and progress bar every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Check if minute has changed
  if (seconds === 59) {
    // Add effect to countdown element
    document.getElementById("countdown").classList.add("animate__animated", "animate__bounce");
  }

  // Check if hour has changed
  if (minutes === 59 && seconds === 59) {
    // Add effect to countdown element
    document.getElementById("countdown").classList.add("animate__animated", "animate__bounce");
  }

  // Check if day has changed
  if (hours === 23 && minutes === 59 && seconds === 59) {
    // Add effect to countdown element
    document.getElementById("countdown").classList.add("animate__animated", "animate__bounce");
  }

  // Output the result in the element with id="countdown"
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // Calculate the progress of the countdown
  var totalSeconds = distance / 1000;
  var progress = (totalSeconds / (365 * 24 * 60 * 60)) * 100;
  document.documentElement.style.setProperty('--progress', progress.toFixed(2));

  // If the countdown is finished, display "We're free!!!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We're free!!!";
  }
}, 1000);