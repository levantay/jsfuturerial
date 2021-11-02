// calculate how many days in that month
function calDay (month, year) {
    let month31 = ["January", "March", "May", "July", "August", "October", "December"]
    let month30 = ["April", "June", "September","November"]
  
    if (month31.indexOf(month) !== -1) {
      return "31 days.";
    } else if (month30.indexOf(month) !== -1) {
      return "30 days.";
    } else {
      return "28 days.";
    }
  }
  
  
  let dayNum = prompt("Please input a number form 1 to 7");
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  alert(day[dayNum - 1]);
  console.log(day[dayNum - 1]);

  let monthNum = prompt("Please input a number from 1 to 12");
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novmber", "December"]
  alert(month[monthNum - 1]);
  console.log(month[monthNum - 1]);

  let yearNum = prompt("Please input a year");
  
  alert(calDay(month[monthNum - 1],yearNum));
  console.log(calDay(month[monthNum - 1],yearNum));
  