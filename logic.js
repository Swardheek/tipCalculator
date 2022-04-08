console.log("Welcome to Our Restaurant")

function fun()
{
var bill = document.getElementById("place").value;
var tip;
if(bill <1000)
{
    tip=(bill*5)/100;
}
else
{
    tip=(bill*10)/100;
}
var Total=parseInt(tip)+parseInt(bill);
console.log(Total);
let n1=document.getElementById("tip");
n1.value = tip;
document.getElementById("tatl").value = Total;
}
