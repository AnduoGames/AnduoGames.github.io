class InputControl extends Rete.Control {
    constructor(key) {
        super(key);
        this.render = "js";
        this.key = key;
    }
    handler(el, editor) {
        var input = document.createElement("textarea");
        el.appendChild(input);
        var text = this.getData(this.key) || "";
        input.value = text;
        this.putData(this.key, text);
        input.addEventListener("change", () => {
            this.putData(this.key, input.value);
        });
        input.addEventListener('input', () => {
            this.putData(this.key, input.value);
        }, false);
        input.click(function (e) {
            e.stopPropagation();
        });
    }
}
