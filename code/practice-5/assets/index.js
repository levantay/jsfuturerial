
function calculateTBC(math, physical, chemistry) {
    let pntMath = parseFloat(math);
    let pntPhys = parseFloat(physical);
    let pntChem = parseFloat(chemistry);
    let tbc = (pntMath + pntPhys + pntChem) / 3;
    let aveMark = tbc.toFixed(1);
    return aveMark;
  }
  
  function rank(aveMark) {
    if (aveMark >= 8.0) {
      return alert(`Your average mark is ${aveMark}. Your rank is: A`);
    } else if (aveMark >= 6.5) {
      return alert(`Your average mark is ${aveMark}. Your rank is: B`);
    } else if (aveMark >= 5.0) {
      return alert(`Your average mark is ${aveMark}. Your rank is: C`);
    } else {
      return alert(`Your average mark is ${aveMark}. Your rank is: D`);
    }
  }
  let pointMath = prompt("Please input point for Math");
  let pointPhys = prompt("Please input point for Physical");
  let pointChem = prompt("Please input point for Chemistry");
  
  console.log(calculateTBC(pointMath, pointPhys, pointChem));
  rank(calculateTBC(pointMath, pointPhys, pointChem));