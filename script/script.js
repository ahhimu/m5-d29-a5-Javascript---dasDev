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
    alert ("Hello Mango peopple");

    taskAssinged.innerText = convertedtaskAssinged - 1;


    completeTask.innerText = convertedcompletetask + 1;

    const title = document.getElementById('card1-title').innerText;
    const container = document.getElementById('activity-container');

    const p = document.createElement("p");
    p.style.marginTop = "5px";
    p.style.marginBottom = "5px";
    p.innerText=`
    You have Complete The ${title} at ${formattedTime}.
    `;
    container.appendChild(p);
document.getElementById('btn-1').disabled = true

})


// Button 2 Related code 

// document.getElementById("btn-2").addEventListener("click",function(){

//     alert("Second Done ");
//     taskAssinged.innerText = convertedtaskAssinged - 1;


//     completeTask.innerText = convertedcompletetask + 1;
// })