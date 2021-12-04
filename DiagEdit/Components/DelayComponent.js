class DelayComponent extends Rete.Component {
    constructor() {
        super("Delay");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var ctrl = new DescriptionControl("text", "The game will wait in seconds</br>before the next dialogue");
        var delay = new NumberControl("delayAmount");
        var out1 = new Rete.Output("master", "Master", actSocket);
        return node.addControl(ctrl).addControl(delay).addInput(inp1).addOutput(out1);
    }
    worker(node, inputs) {
        
    }
}
