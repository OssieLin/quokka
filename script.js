let yesButton = document.getElementById('yes');

function makeYesBigger() {
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + 'px';
}

function surpriseMe() {
    window.location.href = 'surprise.html'; // Navigate to surprise.html when the button is clicked
}

function goBack() {
    window.location.href = 'index.html'; // Redirect to index.html (the main page)
}

