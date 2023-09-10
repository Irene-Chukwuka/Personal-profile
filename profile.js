
 function displayDayandTime() {
     const daysOfTheWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     const currentDate = new Date();
     const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
     const currentTimeInMilliseconds = currentDate.getTime();

     const dayElement = document.querySelector('.today');
     const timeElement = document.querySelector('.currentTime');

     dayElement.textContent = `Today is: ${currentDayOfTheWeek}`;
     timeElement.textContent = `Time in milliseconds: ${currentTimeInMilliseconds}`; 
 }

 displayDayandTime();
setInterval (displayDayandTime, 1000);

