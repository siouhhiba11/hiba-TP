const storyElement = document.getElementById('story');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');

let currentScene = 1;

function startGame() {
    displayScene(currentScene);
}

function displayScene(sceneNumber) {
    switch (sceneNumber) {
        case 1:
            storyElement.textContent = "Vous vous réveillez dans une forêt sombre.";
            option1Button.textContent = "Aller à gauche";
            option2Button.textContent = "Aller à droite";
            option1Button.onclick = () => chooseOption(1);
            option2Button.onclick = () => chooseOption(2);
            break;
        case 2:
            storyElement.textContent = "Vous rencontrez un troll. Que faites-vous ?";
            option1Button.textContent = "Combattre le troll";
            option2Button.textContent = "Fuir";
            option1Button.onclick = () => chooseOption(3);
            option2Button.onclick = () => chooseOption(4);
            break;
        case 3:
            storyElement.textContent = "Vous avez vaincu le troll ! Vous trouvez un coffre rempli de trésors.";
            option1Button.textContent = "Prendre le trésor";
            option2Button.textContent = "Continuer l'aventure";
            option1Button.onclick = () => chooseOption(5);
            option2Button.onclick = () => chooseOption(6);
            break;
        case 4:
            storyElement.textContent = "Vous avez fui le troll. Vous trouvez un chemin mystérieux.";
            option1Button.textContent = "Explorer le chemin";
            option2Button.textContent = "Revenir en arrière";
            option1Button.onclick = () => chooseOption(7);
            option2Button.onclick = () => chooseOption(8);
            break;
        case 5:
            storyElement.textContent = "Vous avez pris le trésor mais il était piégé ! Game over.";
            option1Button.style.display = 'none';
            option2Button.style.display = 'none';
            break;
        case 6:
            storyElement.textContent = "Vous continuez votre aventure...";
            option1Button.style.display = 'none';
            option2Button.style.display = 'none';
            break;
        case 7:
            storyElement.textContent = "Vous trouvez une sortie ! Félicitations, vous avez gagné !";
            option1Button.style.display = 'none';
            option2Button.style.display = 'none';
            break;
        case 8:
            storyElement.textContent = "Vous revenez en arrière...";
            option1Button.style.display = 'none';
            option2Button.style.display = 'none';
            break;
        default:
            break;
    }
}

function chooseOption(optionNumber) {
    currentScene = optionNumber;
    displayScene(currentScene);
}

startGame();
