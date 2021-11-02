
function draw(num) { 
    for (let counti = 1; counti <= num; counti++) {
      for (let countj = 1; countj <= counti; countj++) {
        document.write("*");
      }
      document.write("<br/>");
    }
    return;
  }
function check(num) {
    while ( number < 3) {
        alert("Please retry again!");
        number = prompt("Please input a number larger than or equal 3");
        break
      }
      
}  
let number = prompt("Please input a number larger than or equal 3");

draw(number);check(number)
