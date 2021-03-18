function calculate() {
    var p = parseInt(document.getElementById("p").value);
    var n = parseInt(document.getElementById("n").value);
  
    var calculation= p*n;
  
    var cal=Number(calculation)
    var cal_fee=Number(cal)*0.014
    if (cal > 5000){
    cal_fee = ((cal - 5000)*0.001)+2
    
    } else if (cal_fee < 0.35) {
        cal_fee = 0.35
        
    } else if (cal_fee > 2){
        cal_fee = 2
        
    } else if (cal_fee < 2 & cal_fee > 0.35){
       cal = cal_fee
    
    }
    var cal_fee1y=Number(cal_fee)*12
    document.getElementById("result").innerHTML=`${cal_fee.toFixed(2)}€`;
    document.getElementById("result1y").innerHTML=`${cal_fee1y.toFixed(2)}€`;
  }