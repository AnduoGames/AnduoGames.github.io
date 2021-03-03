class SetSavekeyComponent extends Rete.Component {
    constructor() {
        super("Set Savekey");
        this.task = {
            outputs: {}
        };
    }

    builder(node) {
        var out1 = new Rete.Output("t", "Out", actSocket);
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var keyCtrl = new NamedInputControl("key", "Key");
        var valueCtrl = new NamedInputControl("value", "Value");
        return node.addInput(inp1).addControl(keyCtrl).addControl(valueCtrl).addOutput(out1);
    }

    worker(node, inputs) {
        
    }
}