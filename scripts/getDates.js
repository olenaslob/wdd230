// Dynamically set current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
