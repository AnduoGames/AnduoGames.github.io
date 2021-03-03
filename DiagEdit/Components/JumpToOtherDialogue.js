class JumpToOtherDialogue extends Rete.Component {
    constructor() {
        super("Jump to Other Dialogue");
        this.task = {
            outputs: {}
        };
    }
    builder(node) {
        var inp1 = new Rete.Input("act", "In", actSocket, true);
        var ctrlDialogue = new DialogueTargetInput("textDialogue");
        var ctrlID = new IDInputControl("textID");
        return node.addControl(ctrlDialogue).addControl(ctrlID).addInput(inp1);
    }
    worker(node, inputs) {
        console.log("Jump to Other Dialogue");
    }
}
