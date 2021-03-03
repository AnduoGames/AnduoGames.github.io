class CheckChoiceControl extends Rete.Control {
    constructor(key, nameLabel) {
        super(key);
        this.render = "js";
        this.key = key;
        this.nameLabel = nameLabel;
    }
    handler(el, editor) {
        var description = document.createElement("div");
        description.innerHTML = this.nameLabel;
        var input = document.createElement("select");
        addOption(input, "<");
        addOption(input, "<=");
        addOption(input, "=");
        addOption(input, ">");
        addOption(input, ">=");
        el.appendChild(description);
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

    addOption(select, value)
    {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(value));
        select.appendChild(opt); 
    }
}
