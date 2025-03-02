



document.getElementById("btn-2").addEventListener("click",function(){

    let completeTask = document.getElementById("complete-task");
    let convertedcompletetask = parseInt(completeTask .innerText);
    let taskAssinged = document.getElementById("assinged-task");
    let convertedtaskAssinged = parseInt(taskAssinged.innerText);
    const title2 = document.getElementById("card2-title").innerText;
    
    
    const now = new Date();
    const formattedTime = now.toLocaleString(); 


    alert("Board Updated Successfully ");
    taskAssinged.innerText = convertedtaskAssinged - 1;


    completeTask.innerText = convertedcompletetask + 1;
    const title = document.getElementById('card1-title').innerText;
    document.getElementById('btn-2').disabled = true;
    const container = document.getElementById('activity-container');

    const p = document.createElement("div");
    p.style.padding = "12px";
    p.style.backgroundColor = "#F4F7FF";
    p.style.borderRadius = "8px";
    p.style.margin = "10px 10px";
    p.style.fontSize = "16px";

    p.innerHTML=`
    You have Complete The <strong>${title2}</strong> at <strong>${formattedTime}</strong>.
    `;
    container.appendChild(p);

})