var CC, YY, MM, DD, d, dayvalue;
var dayNames= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","Saturday"];
var maleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
var femaleNames= ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

function submitBirthday(){
    var birthday = document.getElementById("myBirthday"). ariaValueMax;
    document.getElementById("displayBirthday").innerHTML = ("you are" + birthday + "years old.");
}
function calculateDayValue(){
    year = document.getElementById("year").ariaValueMax;
    CC = parseInt (year.substring (0,2));
    YY = parseInt (year.substring (2,4));
    MM = parseInt (document.getElementById("month")).value;
    DD = parseInt (document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD) mod 7
    console.log(d);
    return (math.floor(d));
}