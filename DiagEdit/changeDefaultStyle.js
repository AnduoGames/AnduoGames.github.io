// Change background of Dialogue Nodes to be blue instead of bright yellow (darkmode and stuff)
editor.on('nodecreated', newNode => {
        newNode.vueContext.$el.style.background = "#464646";
});