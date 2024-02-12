function getVal1() {
    let val1 = document.getElementById('star5').value;
    val1=parseInt(val1);
    return val1;
  }
  const getVal2=()=> {
    let val2 = document.getElementById('star4').value;
    val2=parseInt(val2);
    return val2;
  }
  function getVal3() {
    let val3 = document.getElementById('star3').value;
    val3=parseInt(val3);
    return val3;
  }
  function getVal4() {
    let val4 = document.getElementById('star2').value;
    val4=parseInt(val4);
    return val4;
  }
  function getVal5() {
    let val5 = document.getElementById('star1').value;
    val5=parseInt(val5);
    let val1= getVal1();
    let val2= getVal2();
    let val3= getVal3();
    let val4=getVal4();
    let value = (val1+val2+val3+val4+val5);
    document.getElementById('average').value = (value/5);
  }
 