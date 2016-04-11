function CreateNode(id, htmltype, classname)
{
    var node = document.createElement(htmltype);
    node.id = id;
    node.className = classname;
    //node.style.position = "absolute";
    node.appendChild(document.createTextNode(""));
    document.body.appendChild(node);
    return node;
}

function SetText(node, txt)
{
    if (node)
    {
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
        node.innerHTML = txt;
    }
}

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}

function InitBlocks()
{
    var tmpNodes = [];

    var animations = [];
    var strText = document.getElementById("textsrc").innerText;
    var finalStage = document.getElementById("finalstage");
    finalStage.innerHTML = "";
    for(var i = 0; i < strText.length; ++i){
        var c = strText[i];

        var node = CreateNode("block" + i, "span", "blocks");
        SetText(node, c);
        finalStage.appendChild(node);

        var ani = new RotateZoomAndMoveToThePointAnimation();
        ani.SetFinalPosition(getOffset(node).left, getOffset(node).top);
        ani.node = node;
        ani.Init();
        animations.push(ani);
    }
    return animations;
}

