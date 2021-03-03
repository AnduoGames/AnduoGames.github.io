
knownCharacters = ["Rosa", "Mia"];

var defaultSelect = document.getElementById("Character Default Selection");

knownCharacters.forEach(element => {
    addOption(defaultSelect, element);
});