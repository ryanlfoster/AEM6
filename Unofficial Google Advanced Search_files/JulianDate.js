// Julian Day Converter
//
// Author: Mauro Orlandini  <orlandini@tesre.bo.cnr.it>
// Revision: 0.4  1997/01/27  16:28:33  mauro
//
function computeJD(formJD) {
    if (formJD.nmonth.value == "") {
      MM = 0
    } else {
      MM=eval(formJD.nmonth.value)
    }
    if (formJD.nday.value == "") {
      DD = 0
    } else {
      DD=eval(formJD.nday.value)
    }
    if (formJD.nyear.value == "") {
      YY = 0
    } else {
      YY=eval(formJD.nyear.value)
    }
    MM=eval(formJD.nmonth.value)
    DD=eval(formJD.nday.value)
    YY=eval(formJD.nyear.value)
    with (Math) {  
      GGG = 1;
      if (YY <= 1585) GGG = 0;
      JD = -1 * floor(7 * (floor((MM + 9) / 12) + YY) / 4);
      S = 1;
      if ((MM - 9)<0) S=-1;
      A = abs(MM - 9);
      J1 = floor(YY + S * floor(A / 7));
      J1 = -1 * floor((floor(J1 / 100) + 1) * 3 / 4);
      JD = JD + floor(275 * MM / 9) + DD + (GGG * J1);
      JD = JD + 1721027 + 2 * GGG + 367 * YY;
    }
    if (DD == 0 && MM == 0 && YY == 0) {
      alert("Please enter a meaningful date!")
    } else {
      formJD.JD.value = JD;
    }
}

function check_day(v) {
  if (v < 1 || v > 31 || v == "") {
    alert("Please enter a value for DAY in the 1-31 range or the result will be meaningless!")
    return ""
  } else {
    return true
  }
}

function check_month(v) {
  if (v < 1 || v > 12 || v == "") {
    alert("Please enter a value for MONTH in the 1-12 range or the result will be meaningless!")
    return ""
  } else {
    return true
  }
}
 
function check_year(v) {
  if (v <= 0 || v == "") {
    alert("Please enter a positive value for YEAR!")
    return ""
  } else {
    return true
  }
}