const lift = document.getElementById("lift");
let btnValue = null;
let btnName = null;
let currentLevel = 0;

moveLift(2); // Set the initial position of the lift to zero floor

// Helper function to move the lift
function moveLift(level) {
    lift.style.transform = `translateY(${level * 200}px)`;
    currentLevel = level;
}

// Helper function to play sound effect
function playSoundEffect(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function move() {
    if (currentLevel === 2) {
        if (Math.abs(btnValue - currentLevel) === 1) {
            if (btnName === "upBtn") {
                moveLift(1);
                playSoundEffect("./LiftSound.mp3");
                setTimeout(function() {
                    moveLift(0);
                    playSoundEffect("./LiftSound.mp3");
                }, 5000);
            } else if (btnName === "downBtn") {
                moveLift(0);
                playSoundEffect("./LiftSound.mp3");
                setTimeout(function() {
                    moveLift(1);
                    playSoundEffect("./LiftSound.mp3");
                }, 5000);
            }
        } else if (Math.abs(btnValue - currentLevel) === 0) {
            moveLift(0);
            playSoundEffect("./LiftSound.mp3");
        }
    } else if (currentLevel === 1) {
        if (Math.abs(btnValue - currentLevel) === 1) {
            if (btnName === "upBtn") {
                moveLift(2);
                playSoundEffect("./LiftSound.mp3");
            } else if (btnName === "downBtn") {
                moveLift(0);
                playSoundEffect("./LiftSound.mp3");
            }
        }
    } else if (currentLevel === 0) {
        if (Math.abs(btnValue - currentLevel) === 1) {
            if (btnName === "upBtn") {
                moveLift(2);
                playSoundEffect("./LiftSound.mp3");
                setTimeout(function() {
                    moveLift(1);
                    playSoundEffect("./LiftSound.mp3");
                }, 5000);
            } else if (btnName === "downBtn") {
                moveLift(1);
                playSoundEffect("./LiftSound.mp3");
                setTimeout(function() {
                    moveLift(2);
                    playSoundEffect("./LiftSound.mp3");
                }, 5000);
            }
        } else if (Math.abs(btnValue - currentLevel) === 0) {
            moveLift(2);
            playSoundEffect("./LiftSound.mp3");
        }
    }
}

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        btnName = this.getAttribute("class");
        btnValue = this.getAttribute("value");
        move();
    });
}
