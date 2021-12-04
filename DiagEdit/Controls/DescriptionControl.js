class DescriptionControl extends Rete.Control {
    constructor(key, description) {
        super(key);
        this.render = "js";
        this.key = key;
        this.description = description;
    }
    handler(el, editor) {
        var input = document.createElement("div");
        input.innerHTML = this.description;
        el.appendChild(input);
    }
}
