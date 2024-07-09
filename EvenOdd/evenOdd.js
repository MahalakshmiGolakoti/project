function EvenorOdd() {
    let num=Number(document.getElementById("number1").value);
    if(num==undefined || num==""  || num==null)
    alert("please enter a number");
    else 
   if(num%2==0){
   document.getElementById("body").style.backgroundColor="yellow";
   document.getElementById("button").style.backgroundColor="blue";
   document.getElementById("button").style.color="white"
   document.getElementById("result").innerHTML="Even number";
   }
   else
   {
   document.getElementById("body").style.backgroundColor="pink";
   document.getElementById("button").style.backgroundColor="purple";
   document.getElementById("result").style.color = "red";
   document.getElementById("result").innerHTML="Odd number";
   }
   }