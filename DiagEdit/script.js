// https://rete.readthedocs.io/en/latest/Plugins/

var actSocket = new Rete.Socket("Action");
var wordCounter = document.getElementById("WordCounter");
var nameField = document.getElementById("NameInput");
var InitDone = false;

const JsRenderPlugin = {
    install(editor, params = {})
    {
        editor.on("rendercontrol", (
            {
                el,
                control
            }
        ) => {
            if (control.render && control.render !== "js")
                return;
            control.handler(el, editor);
        });
    }
};

var components = [
    new DialogueComponent(),
    new AnySpeakerDialogueComponent(),
    new ReplyComponent(),
    new ImageComponent(),
    new DialogueStartComponent(),
    new JumpToOtherDialogue(),
    new SetSavekeyComponent(),
    new CheckSavekeyComponent(),
    new AddRoutePointsComponent(),
    new RouteSwitchComponent(),
    new VoiceComponent(),
    new EmojiComponent()
];

var container = document.getElementById("editor");
var editor = new Rete.NodeEditor("demo@0.1.0", container);
editor.use(VueRenderPlugin.default);
editor.use(ConnectionPlugin.default);
editor.use(ContextMenuPlugin.default);
editor.use(JsRenderPlugin);
editor.use(TaskPlugin);

var engine = new Rete.Engine("demo@0.1.0");

components.map(c => {
    editor.register(c);
    engine.register(c);
});

editor.fromJSON(
    {
        id: "demo@0.1.0",
        nodes: {},
        groups: {}
    }
).then(() => {
    editor.on("error", err => {
        alertify.error(err.message);
    });

    editor.on("process connectioncreated connectionremoved nodecreated", async function ()
    {
        if (engine.silent)
            return;
    });

    editor.trigger("process");
    editor.view.resize();
    AreaPlugin.zoomAt(editor);
});

editor.on('keydown', e => {
    displayWordCount();

    if ($("input,textarea").is(":focus"))
    { // input and text area has focus
        return;
    }
    switch (e.code)
    {
        case 'Delete': editor.selected.each(n => editor.removeNode(n));
            break;
        case 'Space':
            let rect = editor.view.container.getBoundingClientRect();
            let event = new MouseEvent('contextmenu',
            {
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2
            });

            editor.trigger('contextmenu',
            {
                e: event,
                view: editor.view
            });
            break;
        default:
            break;
    }
});

editor.on('nodecreated', newNode => {
    if (editor.selected.list.length > 0 && document.getElementById("Autoconnect").checked)
    {
        editor.selected.each(n => {
            var output = n.outputs.get("t");
            var input = newNode.inputs.get("act");

            editor.connect(output, input);
            engine.abort();
            engine.process(editor.toJSON());
        });
    }
});
