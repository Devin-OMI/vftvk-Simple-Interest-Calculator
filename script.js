function compute()
{
    //Declaring Variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Checking if principal is a positive number
    if (principal <= 0){
        //show alert and set focus when not a positive number
        alert("Enter a positive number");
        principal.focus();
    }
    else{
        //enter in result if principal is a positive number
    document.getElementById("result").innerHTML="If you deposit " + "<span class='highlight'>" + principal + "</span>" + ", </br>"
                                                +"at an interest rate of " + "<span class='highlight'>" + rate  + "%</span>. </br>"
                                                +"You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", </br>"
                                                +"in the year " + "<span class='highlight'>" + year + "</span>";
    }
}
     
function updateRate() 
{
    //get the value of rate
    var rateval = document.getElementById("rate").value;
    //update rate value
    document.getElementById("rate_val").innerText=rateval + "%";
}