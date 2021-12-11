/* ****************************** */
/* SETTING UP THE EVENT LISTENERS */
/* ****************************** */
window.onload = function(){
    document.getElementById("rate").addEventListener("change",updateRate);
}

/* **************** */
/* Compute function */
/* **************** */
function compute()
{
    //removed the var "p" because it wasn't useful

    var principal = document.getElementById("principal").value;
    
    if(principal!="" && principal > 0){
        console.log(principal);
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
    
        var res = document.getElementById("result");
        res.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br>at an interest rate of <span class='highlight'>" + rate + "&#37;</span>.<br> You will receive an amount of <span class='highlight'>" + interest + "</span>,<br> in the year <span class='highlight'>" + year + "</span>";
    }else{
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}

/* ******************** */
/* update rate function */
/* ******************** */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
