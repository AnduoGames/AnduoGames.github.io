class ImageComponent extends Rete.Component {
    constructor() {
        super("Image");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var out1 = new Rete.Output("t", "Out", actSocket);
        var ctrl = new ImageControl("text");
        return node.addControl(ctrl).addInput(inp1).addOutput(out1);
    }
    worker(node, inputs) {
        console.log("Player Reply");
    }
}
