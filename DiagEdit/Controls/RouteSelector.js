class RouteSelector extends Rete.Control {
    constructor(key) {
        super(key);
        this.render = "js";
        this.key = key;
    }
    handler(el, editor) {
        var input = document.createElement("select");
        addOption(input, "Master");
        addOption(input, "Romance");
        addOption(input, "Friend");

        el.appendChild(input);
        var text = this.getData(this.key) || input.options[input.selectedIndex].innerHTML;
        if (InitDone)
            input.selectedIndex = 0;
        else
            input.selectedIndex = ["Master", "Romance", "Friend"].indexOf(text);
        this.putData(this.key, text);
        input.addEventListener('input', () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
        }, false);
        input.addEventListener("change", () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
        });
    }
}
