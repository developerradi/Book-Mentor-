document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;

            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email })
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                localStorage.setItem('username', username);
                // Redirect to preferences page
                window.location.href = 'preferences.html';
            })
            .catch(error => console.error('Error:', error));
        });
    }

    const preferencesForm = document.getElementById('preferencesForm');
    if (preferencesForm) {
        preferencesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(checkbox => checkbox.value);

            fetch('http://localhost:3000/preferences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ genres })
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                localStorage.setItem('genres', JSON.stringify(genres));
                // Redirect to confirmation page
                window.location.href = 'confirmation.html';
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
