function MakeArray(n) {
    for (var i = 0; i <= n; i++) {}
  }
  days = new MakeArray(7);
  days[0] = "Saturday"
  days[1] = "Sunday"
  days[2] = "Monday"
  days[3] = "Tuesday"
  days[4] = "Wednesday"
  days[5] = "Thursday"
  days[6] = "Friday"
  
  akanFemale = new MakeArray(7);
  akanFemale[0] = "Ama"
  akanFemale[1] = "Akosua"
  akanFemale[2] = "Adwoa"
  akanFemale[3] = "Abenaa"
  akanFemale[4] = "Akua"
  akanFemale[5] = "Yaa"
  akanFemale[6] = "Afua"
  
  akanMale = new MakeArray(7);
  akanMale[0] = "Kwame"
  akanMale[1] = "Kwasi"
  akanMale[2] = "Kwadwo"
  akanMale[3] = "Kwabena"
  akanMale[4] = "Kwaku"
  akanMale[5] = "Yaw"
  akanMale[6] = "Kofi"
  
  function compute(form) {
    var val1 = parseInt(form.day.value, 10)
    if ((val1 < 0) || (val1 > 31)) {
      alert("Day is Invalid")
    }
    var val2 = parseInt(form.month.value, 10)
    if ((val2 < 0) || (val2 > 12)) {
      alert("Month is invalid")
    }
    var val2x = parseInt(form.month.value, 10)
    var val3 = parseInt(form.year.value, 10)
    if (val3 < 1900) {
      alert("You're not that old!")
    }
    var val4 = parseInt(((val2x + 1) * 3) / 5, 10)
    var val5 = parseInt(val3 / 4, 10)
    var val6 = parseInt(val3 / 100, 10)
    var val7 = parseInt(val3 / 400, 10)
    var val8 = val1 + (val2x * 2) + val4 + val3 + val5 - val6 + val7 + 2
    var val9 = parseInt(val8 / 7, 10)
    var val0 = val8 - (val9 * 7)
    form.result2.value = days[val0]
    if (document.getElementById('r1').checked) {
     form.result3.value = akanMale[val0]
   } else if (document.getElementById('r2').checked) {
     form.result3.value = akanFemale[val0]
   }
  }
    