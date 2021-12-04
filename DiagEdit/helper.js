function displayWordCount()
{
    var count = 0;
    editor.nodes.forEach(n => {
        if (n.name != "Image")
        {
            count += countWords(n.data.text);
        }
    });
    wordCounter.innerHTML = count;
}

function countWords(s)
{
    if (s == undefined)
    {
        return 0;
    }

    s = s.replace(/(^\s*)|(\s*$)/gi, ""); // exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); // 2 or more space to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function (str)
    {
        return str != "";
    }).length;
    // return s.split(' ').filter(String).length; - this can also be used
}

function OpenFile(filename)
{
    $.ajax(
        {
            url: filename,
            success: function (data)
            {
                load(JSON.parse(data));
            }
        }
    );
}

function getQueryParams(qs)
{
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs))
    {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var params = getQueryParams(document.location.search);
if (params.load !== undefined)
{
    OpenFile(params.load + ".txt");
}


function download(filename)
{
    var element = document.createElement('a');

    var toStore = {
        nodesData: editor.toJSON(),
        DialogueName: nameField.value
    }

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(toStore)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function load(input)
{
    InitDone = false;
    var nodesData = input;
    if (input.nodesData != undefined)
    {
        nameField.value = input.DialogueName;
        nodesData = input.nodesData;
    }
    editor.fromJSON(nodesData).then(() => {
        editor.on("error", err => {
            alertify.error(err.message);
        });

        editor.on("process connectioncreated connectionremoved nodecreated", async function ()
        {
            if (engine.silent)
            
                return;
            

            displayWordCount();
        });

        editor.trigger("process");
        editor.view.resize();
        AreaPlugin.zoomAt(editor);

        InitDone = true;
    });
}

function addOption(addTo, name)
{
    let option = document.createElement("option");
    option.innerHTML = name;
    addTo.appendChild(option);
}