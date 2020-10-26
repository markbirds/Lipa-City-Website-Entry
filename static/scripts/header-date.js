function startTime() {
  let today = new Date();
  let months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
  let days = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, "];
  let year = today.getFullYear();
  let month_name = months[today.getMonth()];
  let day = today.getDate();
  let day_name = days[today.getDay()];
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  if(hour>=12){
    var _ = ' PM';
    if(hour!=12){
      hour = hour-12;
    }
  }else{
    var _ = ' AM';
    if(hour==0){
      hour = 12
    }
  }

  minute = checkTime(minute);
  second = checkTime(second);
  let date = day_name + month_name + day + ", " + year + ", " + hour + ":" + minute + ":" + second + _;
  document.getElementById('date').innerHTML = date;
  let t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}