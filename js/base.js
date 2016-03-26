//=======================================================================
//Base class for all animations
//=======================================================================

function AnimationBase()
{
   this.node = null;
}

AnimationBase.prototype.Init = function()
{

}

AnimationBase.prototype.Step = function()
{

}

AnimationBase.prototype.IsFinished = function()
{
    return false;
}

//=======================================================================
//Moving down animation
//=======================================================================
function MoveDownAnimation() {
    AnimationBase.call(this);
    this.curY = 0;
}

MoveDownAnimation.prototype = Object.create(AnimationBase.prototype);
MoveDownAnimation.prototype.constructor = MoveDownAnimation;

MoveDownAnimation.prototype.Init = function()
{
    this.maxY = window.innerHeight;
    this.curY = 0;
    this.moveSpeed = Math.random() * 3;
    var x = Math.floor(window.innerWidth * (0.9 * Math.random()));
    this.node.style.left = x  + 'px'; // show frame
    this.node.style.top = '0px'; // show frame
}

MoveDownAnimation.prototype.Step = function()
{
    this.curY += this.moveSpeed;
    //this.node.style.left = this.curY  + 'px'; // show frame
    this.node.style.top = this.curY  + 'px'; // show frame
}

MoveDownAnimation.prototype.IsFinished = function()
{
    return (this.curY > this.maxY * 0.9);
}


//=======================================================================
//Rotate and Move down animation
//=======================================================================
function RotateAndMoveDownAnimation() {
    AnimationBase.call(this);
    this.curY = 0;
    this.curAngle = 0;
    this.rotateSpeed = 0;
    this.moveSpeed = 0;
}

RotateAndMoveDownAnimation.prototype = Object.create(AnimationBase.prototype);
RotateAndMoveDownAnimation.prototype.constructor = RotateAndMoveDownAnimation;

RotateAndMoveDownAnimation.prototype.Init = function()
{
    this.maxY = window.innerHeight;
    this.curY = 0;
    this.curAngle = 0;
    this.rotateSpeed = 1 - Math.random() * 2;
    this.moveSpeed = Math.random() * 3;

    var x = Math.floor(window.innerWidth * (0.9 * Math.random()));
    this.node.style.left = x  + 'px'; // show frame
    this.node.style.top = '0px'; // show frame
}

RotateAndMoveDownAnimation.prototype.Step = function()
{
    this.curY +=  this.moveSpeed;
    this.curAngle += this.rotateSpeed;
    //this.node.style.left = this.curY  + 'px'; // show frame
    this.node.style.top = this.curY  + 'px'; // show frame
    this.node.style.webkitTransform = 'rotate(' + this.curAngle + 'deg)';
}

RotateAndMoveDownAnimation.prototype.IsFinished = function()
{
    return (this.curY > this.maxY * 0.9);
}


//=======================================================================
//Rotate and Zoom and Move down animation
//=======================================================================
function RotateZoomAndMoveDownAnimation() {
    AnimationBase.call(this);
    this.curScale = 1.0;
    this.curY = 0;
    this.curAngle = 0;
    this.rotateSpeed = 0;
    this.moveSpeed = 0;
}

RotateZoomAndMoveDownAnimation.prototype = Object.create(AnimationBase.prototype);
RotateZoomAndMoveDownAnimation.prototype.constructor = RotateZoomAndMoveDownAnimation;

RotateZoomAndMoveDownAnimation.prototype.Init = function()
{
    this.maxY = window.innerHeight;
    this.curY = 0;
    this.curAngle = 0;
    this.curScale = 1.0;

    this.rotateSpeed = 0.5 * (1 - Math.random() * 2);
    this.moveSpeed = Math.random() * 10;
    this.scaleSpeedBase = (0.5 - Math.random()) / 50;
    this.scaleSpeed = this.scaleSpeedBase;
    this.scaleMax = 1 + 1 * Math.random();
    this.scaleMin = 0.5;

    var x = Math.floor(window.innerWidth * (0.9 * Math.random()));
    this.node.style.left = x  + 'px'; // show frame
    this.node.style.top = '0px'; // show frame

    //function getColor() {
    //    function c() {
    //        var hex = Math.floor(Math.random()*200).toString(16);
    //        return ("0"+String(hex)).substr(-2); // pad with zero
    //    }
    //    return "#"+c()+c()+c()+";";
    //}
    //this.node.style.color=getColor();
}

RotateZoomAndMoveDownAnimation.prototype.Step = function()
{
    this.curY +=  this.moveSpeed;
    this.curAngle += this.rotateSpeed;

    if (this.curScale >= this.scaleMax)
    {
        this.scaleSpeed =  (-1) * this.scaleSpeedBase;
    }
    else if (this.curScale < this.scaleMin)
    {
        this.scaleSpeed =  (+1) * this.scaleSpeedBase;
    }

    this.curScale += this.scaleSpeed;
    //this.node.style.left = this.curY  + 'px'; // show frame
    this.node.style.top = this.curY  + 'px'; // show frame
    this.node.style.webkitTransform = 'rotate(' + this.curAngle + 'deg) ';
    this.node.style.webkitTransform += 'scale(' + this.curScale + ')';
}

RotateZoomAndMoveDownAnimation.prototype.IsFinished = function()
{
    return (this.curY > this.maxY * 0.9);
}

