class EmojiComponent extends Rete.Component {
    constructor() {
        super("Emoji");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var out1 = new Rete.Output("t", "Out", actSocket);
        var ctrl = new EmojiControl("text", node);
        return node.addControl(ctrl).addInput(inp1).addOutput(out1);
    }
    worker(node, inputs) {
        
    }
}
