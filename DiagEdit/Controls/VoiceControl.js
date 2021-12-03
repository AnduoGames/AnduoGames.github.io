var voiceClips = [];
var currentVoiceSource = null;

class VoiceControl extends Rete.Control {

    constructor(key) {
        for (let i = 0; i < 12; i++) {
            let num = i + 1;
            if(i < 9)
                num = "0" + num;
            else
                num = "" + num;
            voiceClips.push("Rosa" + num + ".mp3");
        }
        super(key);
        this.render = "js";
        this.key = key;
    }
    handler(el, editor) {
        var input = document.createElement("select");
        voiceClips.forEach(voiceClip => {
            addOption(input, voiceClip);
        });
        el.appendChild(input);
        var text = this.getData(this.key) || input.options[input.selectedIndex].innerHTML;
        if (InitDone)
            input.selectedIndex = 0;
        else
            input.selectedIndex = voiceClips.indexOf(text);
        this.putData(this.key, text);
        input.addEventListener('input', () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
        }, false);
        input.addEventListener("change", () => {
            this.putData(this.key, input.options[input.selectedIndex].innerHTML);
            document.getElementById("voiceHolderDiv").appendChild(currentVoiceSource);
            currentVoiceSource = document.getElementById(voiceClips[input.selectedIndex]);
            audio.appendChild(currentVoiceSource);
            audio.load();
        });

        el.appendChild(document.createElement("br"));

        var audio = document.createElement("Audio");
        audio.controls = true;

        currentVoiceSource = document.getElementById("Rosa01.mp3");
        audio.appendChild(currentVoiceSource);
        el.appendChild(audio);
    }
}
