class VoiceComponent extends Rete.Component {
    constructor() {
        super("Voice Message");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var ctrl = new VoiceControl("audiofile");
        var out1 = new Rete.Output("t", "Out", actSocket);
        var altctrl = new InputControl("altText");
        return node.addControl(ctrl).addControl(altctrl).addInput(inp1).addOutput(out1);
    }
    worker(node, inputs) {
        
    }
}
