
knownCharacters = ["Rosa", "Mia", "GroupRosa", "GroupMia"];

var defaultSelect = document.getElementById("Character Default Selection");

knownCharacters.forEach(element => {
    addOption(defaultSelect, element);
});