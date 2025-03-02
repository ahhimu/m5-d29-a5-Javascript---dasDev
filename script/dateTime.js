function DynamicDate() {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'short' });
    const month = now.toLocaleString('en-US', { month: 'short' }); 
    const date = now.getDate(); 
    const year = now.getFullYear();
    const formattedTime = `${day}, ${month} ${date}, ${year} `;

    const headingDateContainer = document.getElementById('heading-date-container');
    headingDateContainer.innerHTML = `
        <p class="text-black font-semibold"> <strong> ${day} ,</strong></p>
        <p class="text-black font-semibold"><strong> ${month} ${date}, ${year}</strong> </p>  
    `;
}

DynamicDate();

setInterval(DynamicDate, 86400000);

