class ImageControl extends Rete.Control {
    constructor(key) {
        super(key);
        this.render = "js";
        this.key = key;
    }
    handler(el, editor) {
        var input = document.createElement("select");
        addOption(input, "Not Implemented");
        addOption(input, "cg1");
        addOption(input, "cg2_1");
        addOption(input, "cg2_2");
        addOption(input, "cg2_3");
        addOption(input, "cg2_4");
        addOption(input, "cg2_5");
        addOption(input, "cg3");
        addOption(input, "cg4_1");
        addOption(input, "cg4_2");
        addOption(input, "cg4_3");
        addOption(input, "cg4_4");
        addOption(input, "cg5");
        addOption(input, "cg6");
        addOption(input, "cg7");
        addOption(input, "cg8");
        addOption(input, "cg9");
        addOption(input, "cg10");
        addOption(input, "cg11");
        addOption(input, "cg12");
        addOption(input, "cg12.2");
        addOption(input, "Final_Friend");
        addOption(input, "Final_Master");
        addOption(input, "Final_Romance");
        addOption(input, "Fingering");
        addOption(input, "rosa3");
        addOption(input, "selfie");
        el.appendChild(input);
        el.appendChild(document.createElement("br"));
        var image = document.createElement("img");
        el.appendChild(image);
        el.style.maxWidth = "300px";
        var text = this.getData(this.key) || "";
        input.value = text;
        this.putData(this.key, text);
        if (text != "") {
            image.src = document.getElementById(input.value).src;
            image.style.width = "100%";
        }
        input.addEventListener("change", () => {
            if(input.value == "Not Implemented"){
                image.src = "";
                return;
            }
            this.putData(this.key, input.value);
            console.log(input.value);
            image.src = document.getElementById(input.value).src;
            image.style.width = "100%";
        });
        input.addEventListener('input', () => {
            this.putData(this.key, input.value);
        }, false);
        input.click(function (e) {
            console.log("aaa");
            e.stopPropagation();
        });
    }
}
