



document.getElementById("btn-6").addEventListener("click",function(){

    let completeTask = document.getElementById("complete-task");
    let convertedcompletetask = parseInt(completeTask .innerText);
    let taskAssinged = document.getElementById("assinged-task");
    let convertedtaskAssinged = parseInt(taskAssinged.innerText);
    const title2 = document.getElementById("card2-title").innerText;
    
    
    const now = new Date();
    const formattedTime = now.toLocaleString(); 


    alert("Sixth Done ");
    taskAssinged.innerText = convertedtaskAssinged - 1;


    completeTask.innerText = convertedcompletetask + 1;
    const title6 = document.getElementById('title6').innerText;
    document.getElementById('btn-6').disabled = true;
    const container = document.getElementById('activity-container');

    const p = document.createElement("div");
    // p.style.padding="12px";

    p.innerHTML=`
    You have Complete The <strong>${title6}</strong> at <strong>${formattedTime}</strong>.
    `;
    container.appendChild(p);

    if(convertedtaskAssinged === 1){
        alert("Congratulations")
        console.log('nah');
    }

})

