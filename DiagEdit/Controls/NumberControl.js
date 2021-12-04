class NumberControl extends Rete.Control {
    constructor(key, defaultValue = 1) {
        super(key);
        this.render = "js";
        this.key = key;
        this.defaultValue = defaultValue;
    }
    handler(el, editor) {
        var input = document.createElement("input");
        input.type = "number";
        el.appendChild(input);
        var text = this.getData(this.key) || this.defaultValue;
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
