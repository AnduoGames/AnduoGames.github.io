class CheckSavekeyComponent extends Rete.Component {
    constructor() {
        super("Check Savekey");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var out1 = new Rete.Output("t", "Out", actSocket);
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var keyCtrl = new NamedInputControl("key", "Key");
        var typeCtrl = new CheckChoiceControl("type", "Type");
        var valueCtrl = new NamedInputControl("value", "Value");
        return node.addInput(inp1).addControl(keyCtrl).addControl(typeCtrl).addControl(valueCtrl).addOutput(out1);
    }
    worker(node, inputs) {
    }
}
