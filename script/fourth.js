



document.getElementById("btn-4").addEventListener("click",function(){

    let completeTask = document.getElementById("complete-task");
    let convertedcompletetask = parseInt(completeTask .innerText);
    let taskAssinged = document.getElementById("assinged-task");
    let convertedtaskAssinged = parseInt(taskAssinged.innerText);
    const title2 = document.getElementById("card2-title").innerText;
    
    
    const now = new Date();
    const formattedTime = now.toLocaleString(); 


    alert("Fourth Done ");
    taskAssinged.innerText = convertedtaskAssinged - 1;


    completeTask.innerText = convertedcompletetask + 1;
    const title4 = document.getElementById('title4').innerText;
    document.getElementById('btn-4').disabled = true;
    const container = document.getElementById('activity-container');

    const p = document.createElement("div");
    // p.style.padding="12px";

    p.innerHTML=`
    You have Complete The <strong>${title4}</strong> at <strong>${formattedTime}</strong>.
    `;
    container.appendChild(p);

})