class ReplyComponent extends Rete.Component
{
    constructor()
    {
        super("Player Reply");
        this.task = {
            outputs: {}
        };
    }

    builder(node)
    {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var out1 = new Rete.Output("t", "Out", actSocket);
        var routeDropdown = new RouteSelector("route");
        var ctrl = new InputControl("text");

        return node.addControl(routeDropdown).addControl(ctrl).addInput(inp1).addOutput(out1);
    }

    worker(node, inputs)
    {
        console.log("Player Reply");
    }
}