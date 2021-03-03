class DialogueStartComponent extends Rete.Component {
    constructor() {
        super("Dialogue Start");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var out1 = new Rete.Output("t", "Out", actSocket);
        var ctrl = new IDInputControl("text");
        return node.addControl(ctrl).addOutput(out1);
    }
    worker(node, inputs) {
        console.log("Dialogue Start");
    }
}
