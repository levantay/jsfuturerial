// Draw a triangle
function draw(num) {
    let counti = 0;
    let countj = 0;
  
    for (counti = 1; counti <= num; counti++) {
      for (countj = counti; countj < num; countj++){
        document.write("&nbsp&nbsp");
      }
      for (countj = 1; countj <= counti ; countj++){
      document.write("*");
      }
      document.write("<br/>");
    }
    return;
  }

  
let number = prompt("Please input a number larger than or equal 3");
  
while ( number < 3) {
      alert("Please retry again!");
      number = prompt("Please input a number larger than or equal 3");
}
draw(number)
  
  