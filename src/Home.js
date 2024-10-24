document.getElementById("info-button").addEventListener("click", function() {
    var popupBar = document.getElementById("popup");
    popupBar.classList.toggle("scroll-bg-hidden");
    popupBar.classList.toggle("scroll-bg");
});

document.getElementById("close-info-button").addEventListener("click", function() {
    var popupBar = document.getElementById("popup");
    popupBar.classList.toggle("scroll-bg");
    popupBar.classList.toggle("scroll-bg-hidden");
});

document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    if (age >= 0) {
        // Hide the modal and show the buttons
        document.getElementById('userModal').style.display = 'none';
        document.getElementById('game-buttons').style.display = 'block';
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});