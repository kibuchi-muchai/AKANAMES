var CC, YY, MM, DD, d, dayvalue;
var dayNames= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","Saturday"];
var maleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
var femaleNames= ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

function validate(){
    var genders = document.getElementByName("gender");
    if(document.myForm.month.value == "" || document.myForm.month.value || document.myForm.month.value.length !=2 || document.myForm.month.value >12 || document.myForm.month.value <=0){
        alert("please provide a valid month bettween 1 and 12");
        document.myForm.month.focus() ;
        return false;
    }
    else if(document.myForm.year.value == "" || isNaN(document.myForm.year.value) || document.myForm.year.value.length !=4 ||document.myForm.year.value >2000 || document.myForm.year.value <=1900){
        alert("please provide a valid year eg 2000");
        document.myForm.year.focus() ;
        return false;
    }
    else if(document.myForm.date.value == "" || isNaN(document.myForm.date.value) || document.myForm.date.value.length !=2 ||document.myForm.date.value >31 || document.myForm.date.value <0){
        alert("please provide a valid date that you were born in");
        document.myForm.date.focus() ;
        return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false){
        alert("you must select male or female");
        document.myForm.date.focus() ;
        return false;
    }
    else{
        return true;
    }
}







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
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD) %7
    console.log(d);
    return (math.floor(d));
}
function getGender(){
    var genders = document.getElementByName ("gender");
    if (genders [0],checked == true){
        var gender = "male";
    }
    else if (genders[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }
}
switch (gender){
    case "male":
    if ( dayValue ==1){
        alert("you were born on" + dayNames[0] + "and your akan name is" + maleNames[0] +"!");
    }
    
}