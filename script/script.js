// auto background color related code 

 const allColors = document.getElementById('bg-changer').addEventListener('click',function(){
 let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = hex;
 })