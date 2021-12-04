class RouteSwitchComponent extends Rete.Component {
    constructor() {
        super("Route Switch");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var ctrl = new DescriptionControl("text", "Will go down the route</br>of the highest points.");
        var out1 = new Rete.Output("master", "Master", actSocket);
        var out2 = new Rete.Output("romance", "Romance", actSocket);
        var out3 = new Rete.Output("friend", "Friend", actSocket);
        return node.addControl(ctrl).addInput(inp1).addOutput(out1).addOutput(out2).addOutput(out3);
    }
    worker(node, inputs) {
        
    }
}
