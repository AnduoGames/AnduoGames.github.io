class AddRoutePointsComponent extends Rete.Component {
    constructor() {
        super("Add Route Points");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var out1 = new Rete.Output("t", "Out", actSocket);
        var ctrl = new RouteSelector("route");
        var altctrl = new NumberControl("amount");
        return node.addControl(ctrl).addControl(altctrl).addInput(inp1).addOutput(out1);
    }
    worker(node, inputs) {
        console.log("Add Route Points");
    }
}
