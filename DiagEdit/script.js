var actSocket = new Rete.Socket("Action");
var wordCounter = document.getElementById("WordCounter");
var nameField = document.getElementById("NameInput");
var InitDone = false;

const JsRenderPlugin = {
    install(editor, params = {}) {
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
    new EmojiComponent(),
    new DelayComponent()
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

    editor.on("process connectioncreated connectionremoved nodecreated", async function () {        
        if (engine.silent)
            return;
    });

    editor.on("selectnode", () => {
        let latest = JSON.stringify({timestamp: Date.now(), data: editor.toJSON()});
        localStorage.setItem("dialogue cache latest", latest);
    });

    editor.trigger("process");
    editor.view.resize();
    AreaPlugin.zoomAt(editor);
});

editor.on('translate', e => {
    return isControlDown;
});

var isControlDown = false;
editor.on('keydown', e => {
    if (e.key == "Control") isControlDown = true;
})
editor.on('keyup', e => {
    if (e.key == "Control") isControlDown = false;
})

editor.on('nodetranslate', e => {
    let textField = GetTextfieldActive();
    if(!textField) return true;

    return false;
})

function GetTextfieldActive() {
    var activeElement = document.activeElement;
    var inputs = ['input', 'textarea'];

    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
        return activeElement;
    }
    return undefined;
}

editor.on('keydown', e => {
    displayWordCount();

    if ($("input,textarea").is(":focus")) { // input and text area has focus
        return;
    }
    switch (e.code) {
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
    if (editor.selected.list.length > 0 && document.getElementById("Autoconnect").checked) {
        editor.selected.each(n => {
            var output = n.outputs.get("t");
            var input = newNode.inputs.get("act");

            editor.connect(output, input);
            engine.abort();
            engine.process(editor.toJSON());
        });
    }
});
