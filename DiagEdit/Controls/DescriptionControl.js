class DescriptionControl extends Rete.Control {
    constructor(key) {
        super(key);
        this.render = "js";
        this.key = key;
    }
    handler(el, editor) {
        var input = document.createElement("div");
        input.innerHTML = "Will go down the route</br>of the highest points.";
        el.appendChild(input);
    }
}
