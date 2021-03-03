class DialogueComponent extends Rete.Component
{
    constructor()
    {
        super("Rosa Dialogue");
        this.task = {
            outputs: {
                t: "option"
            }
        };
    }

    builder(node)
    {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var out1 = new Rete.Output("t", "Out", actSocket);
        var ctrl = new InputControl("text");

        node.translatenode = null;

        return node.addInput(inp1).addControl(ctrl).addOutput(out1);
    }

    worker(node, inputs)
    {
        return {
            text: node.data.text
        };
    }
}