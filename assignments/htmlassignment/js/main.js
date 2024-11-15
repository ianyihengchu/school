const siteVisitors = {
    January: 50000,
    February: 55000,
    March: 60000,
    April: 65000,
    May: 70000,
    June: 75000
};

function updateSiteVisitorsTable() {
    const tableBody = document.querySelector('#site-statistics table tbody');
    tableBody.innerHTML = '';
    
    for (const [month, visitors] of Object.entries(siteVisitors)) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${month}</td><td>${visitors.toLocaleString()}</td>`;
        tableBody.appendChild(row);
    }
}



const cookieBanner = document.getElementById('cookie-banner');
let cookiesAccepted = false;

function toggleCookieAcceptance() {
    cookiesAccepted = !cookiesAccepted;
    updateCookieMessage();
}

function updateCookieMessage() {
    if (cookiesAccepted) {
        cookieBanner.innerHTML = '<p>Cookies were accepted. <a href="#" id="revokeCookies">Would you like to revoke?</a></p>';
        document.getElementById('revokeCookies').addEventListener('click', toggleCookieAcceptance);
    } else {
        cookieBanner.innerHTML = '<p>This site uses cookies to improve your experience. <a href="#" id="acceptCookies">Accept cookies</a></p>';
        document.getElementById('acceptCookies').addEventListener('click', toggleCookieAcceptance);
    }
}




let readingAssistanceEnabled = false;

function toggleReadingAssistance() {
    readingAssistanceEnabled = !readingAssistanceEnabled;
    document.body.classList.toggle('reading-assistance', readingAssistanceEnabled);
    document.getElementById('toggleReadingAssistance').textContent = readingAssistanceEnabled ? 'Disable Reading Assistance' : 'Enable Reading Assistance';
}



document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
        toggleReadingAssistance();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    updateSiteVisitorsTable();
    updateCookieMessage();
    
    const header = document.querySelector('header');
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggleReadingAssistance';
    toggleButton.textContent = 'Enable Reading Assistance';
    toggleButton.addEventListener('click', toggleReadingAssistance);
    header.appendChild(toggleButton);
});