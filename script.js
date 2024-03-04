// Füge dies hinzu, um das Verhalten des Anmeldeknopfes zu steuern
document.getElementById('loginButton').addEventListener('click', function() {
    var loginHint = document.getElementById('loginHint');
    loginHint.classList.toggle('hidden');
});

// Füge dies hinzu, um das Verhalten des "Über uns"-Buttons zu steuern
document.getElementById('aboutButton').addEventListener('click', function() {
    var aboutHint = document.getElementById('aboutHint');
    aboutHint.classList.toggle('hidden');
});

// Füge dies hinzu, um das Verhalten des "Kontakt"-Buttons zu steuern
document.getElementById('contactButton').addEventListener('click', function() {
    var contactHint = document.getElementById('contactHint');
    contactHint.classList.toggle('hidden');
});
