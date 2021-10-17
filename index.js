var CC, YY, MM, DD, d, dayvalue;
var dayNames= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","Saturday"];
var maleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
var femaleNames= ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

function submitBirthday(){
    var birthday = document.getElementById("myBirthday"). ariaValueMax;
    document.getElementById("displayBirthday").innerHTML = ("you are" + birthday + "years old.");
}