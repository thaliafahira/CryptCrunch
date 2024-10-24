document.addEventListener('DOMContentLoaded', function() {
    const correctAnswers = [15, 122, 121];

    if (!sessionStorage.getItem('currentLevel')) {
        sessionStorage.setItem('currentLevel', 1);
    }

    const submitBtn = document.getElementById('submitBtn');
    const returnButton = document.querySelector('.return-button');

    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const input = parseInt(document.getElementById('userInput').value);
            let currentLevel = parseInt(sessionStorage.getItem('currentLevel'));

            if (input === correctAnswers[currentLevel - 1]) {
                currentLevel++;

                if (currentLevel > correctAnswers.length) {
                    showCompletionPopup(); 
                } else {
                    showSuccessPopup(currentLevel);
                }

                sessionStorage.setItem('currentLevel', currentLevel);
            } else {
                showErrorPopup(); 
            }
        });
    }

    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    function showErrorPopup() {
        const modal = document.getElementById("errorModal");
        const tryAgainBtn = document.getElementById("tryAgainBtn");

        if (modal && tryAgainBtn) {
            modal.style.display = "flex";

            tryAgainBtn.onclick = function() {
                modal.style.display = "none";
            };
        }
    }

    function showSuccessPopup(nextLevel) {
        const modal = document.getElementById("successModal");
        const successMessage = document.getElementById("successMessage");
        const nextBtn = document.getElementById("nextBtn");

        if (modal && successMessage && nextBtn) {
            successMessage.textContent = `You've passed Level ${nextLevel - 1}`;
            
            modal.style.display = "flex";

            nextBtn.onclick = function() {
                modal.style.display = "none"; 
                window.location.href = `Level${nextLevel}.html`; 
            };
        }
    }

    function showCompletionPopup() {
        const modal = document.getElementById("completionModal");
        const homeBtn = document.getElementById("homeBtn");

        if (modal && homeBtn) {
            modal.style.display = "flex";

            homeBtn.onclick = function() {
                modal.style.display = "none"; 
                sessionStorage.setItem('currentLevel', 1);
                window.location.href = "index.html"; 
            };
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    const levelButton = document.getElementById("level-button");
    const closeLevelButton = document.getElementById("close-level-button");
    const popupBar = document.getElementById("popup");

    if (levelButton && closeLevelButton && popupBar) {
        levelButton.addEventListener("click", function() {
            popupBar.classList.toggle("level-bg-hidden");
            popupBar.classList.toggle("level-bg");
        });

        closeLevelButton.addEventListener("click", function() {
            popupBar.classList.toggle("level-bg");
            popupBar.classList.toggle("level-bg-hidden");
        });
    }

    
    let currentLevel = parseInt(sessionStorage.getItem('currentLevel')) || 1;

    for (let i = 1; i <= currentLevel; i++) {
        const levelButton = document.getElementById(`level${i}`);
        if (levelButton) {
            levelButton.disabled = false;
        }
    }

    
    const level1Button = document.getElementById('level1');
    const level2Button = document.getElementById('level2');
    const level3Button = document.getElementById('level3');

    if (level1Button) {
        level1Button.addEventListener('click', function() {
            window.location.href = 'Level1.html';
        });
    }

    if (level2Button) {
        level2Button.addEventListener('click', function() {
            if (currentLevel >= 3) {
                window.location.href = 'Level2.html';
            }
        });
    }

    if (level3Button) {
        level3Button.addEventListener('click', function() {
            if (currentLevel >= 4) {
                window.location.href = 'Level3.html';
            }
        });
    }

    
    const modal = document.getElementById('levelModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (modal && openModalBtn && closeBtn) {
        
        openModalBtn.onclick = function() {
            modal.style.display = 'flex';
        }

        
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }
});