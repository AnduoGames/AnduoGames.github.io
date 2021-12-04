let copyboard = [
    { var: "#player.name#", desc: "player's name" },
    { var: "#player.master#", desc: "master or mistress" },
    { var: "#player.daddy#", desc: "daddy or mommy" },
    { var: "#player.sir#", desc: "sir or ma'am" },
    { var: "#player.their#", desc: "his, her, their" },
    { var: "#player.them#", desc: "him, her, them" },
    { var: "#player.theirs#", desc: "his, hers, theirs" },
    { var: "#player.they#", desc: "he, she, they" },
    { var: "#player.person#", desc: "man, woman, person" },
    { var: "#player.guy#", desc: "guy, gal, person" },
    { var: "#player.boy#", desc: "boy, girl, person" }];

initCopyBoard();
function initCopyBoard() {
    var board = document.getElementById("copyBoard");
    for (const copy of copyboard) {
        let copyDiv = document.createElement("div");
        copyDiv.className = "tooltip";
        copyDiv.innerHTML = copy.var;
        let span = document.createElement("span");
        span.className = "tooltiptext";
        span.innerText = copy.desc;
        copyDiv.appendChild(span);
        copyDiv.onclick = () => {
            copyDiv.removeChild(span);
            window.getSelection().selectAllChildren(copyDiv);
            document.execCommand('copy')
            copyDiv.appendChild(span);
        };
        board.appendChild(copyDiv);
        board.appendChild(document.createElement("br"));
    }
}