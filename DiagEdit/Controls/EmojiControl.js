let emojis = [
    ":ahegao_rosa:",
    ":angry_rosa:",
    ":excited_rosa:",
    ":gasp_rosa:",
    ":hearts_rosa:",
    ":laugh_rosa:",
    ":nom_purrate:",
    ":purrate_cat:",
    ":pout_rosa:",
    ":pwease_rosa:",
    ":uneasy_rosa:",
    ":wondering_rosa:",
];

class EmojiControl extends Rete.Control {

    constructor(key, node) {
        super(key);
        this.render = "js";
        this.key = key;
        this.node = node;
    }
    handler(el, editor) {
        var input = document.createElement("select");
        emojis.forEach(emoji => {
            addOption(input, emoji);
        });
        el.appendChild(input);
        var text = this.getData(this.key) || input.options[input.selectedIndex].innerHTML;
        if (InitDone)
            input.selectedIndex = 0;
        else
            input.selectedIndex = emojis.indexOf(text);
        this.putData(this.key, text);
        input.addEventListener('input', () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
        }, false);
        input.addEventListener("change", () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
            
            image.src = document.getElementById(input.value).src;
            image.style.width = "100%";
        });

        el.appendChild(document.createElement("br"));

        let image = document.createElement("img");
        image.src = document.getElementById(input.value).src;
        el.appendChild(image);

        editor.on('nodeselected', node => {
            if(node == this.node){
                image.src = image.src.replace(".png", ".gif");
            }
            else{
                image.src = image.src.replace(".gif", ".png");
            }
         });
    }
}
