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
        document.getElementById('userModal').style.display = 'none';
        document.getElementById('game-buttons').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

const volumeButton = document.getElementById('volume-button');
const volumePopup = document.getElementById('volumePopup');
const closeVolumePopup = document.getElementById('close-volume-popup');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const audioElement = document.querySelector('audio');

window.onload = function() {
    volumePopup.style.display = 'none';  
};

volumeButton.addEventListener('click', () => {
    volumePopup.style.display = 'block';
});

closeVolumePopup.addEventListener('click', () => {
    volumePopup.style.display = 'none';
});

volumeSlider.addEventListener('input', (event) => {
    const volume = event.target.value;
    audioElement.volume = volume; 
    volumeValue.textContent = `${Math.round(volume * 100)}%`;  
});
