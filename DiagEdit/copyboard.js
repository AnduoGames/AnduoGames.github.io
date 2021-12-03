let copyboard = ["#playername#", "#playergender#"];
initCopyBoard();
function initCopyBoard()
{
    var board = document.getElementById("copyBoard");
    for (const copy of copyboard) {
        let copyDiv = document.createElement("div");
        copyDiv.innerHTML = copy;
        copyDiv.onclick = () => {
            window.getSelection().selectAllChildren(copyDiv);
            document.execCommand('copy')
        };
        board.appendChild(copyDiv);
    }
}