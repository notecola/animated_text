function CreateNode(id, classname)
{
    var node = document.createElement('div');
    node.id = id;
    node.className = classname;
    node.style.position = "absolute";
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

function InitBlocks()
{
    var animations = [];
    for(var i = 0; i < 50; ++i)
    {
        var node = CreateNode("block" + i, "blocks");
        //SetText(node, Math.random() * 100);
        //SetText(node, "<a class=alink onclick='OnNumberClick(this);' href='#'>" +  i + "</a>");
        SetText(node, "<a class=alink onclick='OnNumberClick(this);' href='#'><img src='gif2.gif'/></a>");
        var ani = new RotateZoomAndMoveDownAnimation();
        ani.node = node;
        ani.Init();
        animations.push(ani);
    }
    return animations;
}

function GetNewGameInfo()
{
    var obj = {};
    obj.curTime = new Date();
    obj.startTime = new Date();
    obj.curNum   = 0;
    obj.elapsed = "";
    return obj;
}

function UpdateTime( gameInfo )
{
    gameInfo.curTime = new Date();
    var ms = gameInfo.curTime - gameInfo.startTime;

    var hours = ms / (1000 * 60 * 60);
    hours = Math.floor(hours);
    ms %= (1000 * 60 * 60);

    var minutes = ms / (1000 * 60);
    minutes = Math.floor(minutes);
    ms %= (1000 * 60);

    var seconds = ms / 1000;
    seconds = Math.floor(seconds);

    gameInfo.elapsed = "";
    if (hours > 10){
        gameInfo.elapsed = hours + ":";
    }
    else if (hours > 0){
        gameInfo.elapsed = "0" + hours + ":";
    }

    if (minutes > 10){
        gameInfo.elapsed += minutes + ":";
    }
    else if (minutes > 0){
        gameInfo.elapsed += "0" + minutes + ":";
    }
    if (seconds > 10){
        gameInfo.elapsed += seconds;
    }
    else if (seconds > 0){
        gameInfo.elapsed += "0" + seconds;
    }
}