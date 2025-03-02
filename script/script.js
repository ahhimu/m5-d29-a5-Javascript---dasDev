// This Is First Script

// auto background color related code 

 const allColors = document.getElementById('bg-changer').addEventListener('click',function(){
 let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = hex;
 })

//  Assinged Task Related Code 1

let completeTask = document.getElementById("complete-task");
let convertedcompletetask = parseInt(completeTask .innerText);
let taskAssinged = document.getElementById("assinged-task");
let convertedtaskAssinged = parseInt(taskAssinged.innerText);


const now = new Date();
const formattedTime = now.toLocaleString(); 

document.getElementById('btn-1').addEventListener("click",function(){
    let completeTask = document.getElementById("complete-task");
let convertedcompletetask = parseInt(completeTask .innerText);
let taskAssinged = document.getElementById("assinged-task");
let convertedtaskAssinged = parseInt(taskAssinged.innerText);
    
    alert ("Board Updated Successfully");

    taskAssinged.innerText = convertedtaskAssinged - 1;


    completeTask.innerText = convertedcompletetask + 1;

    const title = document.getElementById('card1-title').innerText;
    const container = document.getElementById('activity-container');

    const p = document.createElement("div");
    p.style.padding = "12px";
    p.style.backgroundColor = "#F4F7FF";
    p.style.borderRadius = "8px";
    p.style.margin = "10px 10px";
    p.style.fontSize = "16px";
    p.innerHTML=`
    You have Complete The <strong>${title}</strong> at <strong>${formattedTime}</strong>.
    `;
    container.appendChild(p);
document.getElementById('btn-1').disabled = true

})




