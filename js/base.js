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
    this.scaleSpeedBase = (0.5 - Math.random()) / 100;
    this.scaleSpeed = this.scaleSpeedBase;
    this.scaleMax = 1 + 1 * Math.random();
    this.scaleMin = 0.2;

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



//=======================================================================
//Rotate and Zoom and Move to the Point animation
//=======================================================================
function RotateZoomAndMoveToThePointAnimation() {
    AnimationBase.call(this);
    this.curScale = 1.0;
    this.curY = 0;
    this.curAngle = 0;
    this.rotateSpeed = 0;
    this.moveSpeed = 0;
    this.finalX = 0;
    this.finalY = 0;
}

RotateZoomAndMoveToThePointAnimation.prototype = Object.create(AnimationBase.prototype);
RotateZoomAndMoveToThePointAnimation.prototype.constructor = RotateZoomAndMoveToThePointAnimation;

RotateZoomAndMoveToThePointAnimation.prototype.SetFinalPosition = function(x, y)
{
    this.finalX = x;
    this.finalY = y;
	console.log("x: " + x + " y: " + y);
}

RotateZoomAndMoveToThePointAnimation.prototype.Init = function()
{
    this.maxY = window.innerHeight;
    this.curX = 0;
    this.curY = 0;
	this.stepId = 0;
    this.curAngle = 0;
    this.curScale = 1.0;
    this.epsilon = 0.01;
    this.moveSpeedX = 2 + 5 * Math.random();
    this.moveSpeedY = 2 + 5 * Math.random();
    this.scaleSpeed = (0.5 - Math.random()) / 100;
    this.scaleMax = 1 + 1 * Math.random();
    this.scaleMin = 0.2;


    //function getColor() {
    //    function c() {
    //        var hex = Math.floor(Math.random()*200).toString(16);
    //        return ("0"+String(hex)).substr(-2); // pad with zero
    //    }
    //    return "#"+c()+c()+c()+";";
    //}
    //this.node.style.color=getColor();
}

RotateZoomAndMoveToThePointAnimation.prototype.StepScale = function()
{
    var dscale = 1.0 - this.curScale;

    this.scaleSpeed = 0.01 * dscale * Math.random();
    if (Math.abs(dscale) > this.epsilon)
    {
        this.curScale += this.scaleSpeed;
        this.node.style.webkitTransform = 'scale(' + this.curScale + ')';
    }
    else {
        this.curScale = 1.0;
        this.node.style.webkitTransform = 'scale(' + this.curScale + ')';
    }
}

RotateZoomAndMoveToThePointAnimation.prototype.StepPosition = function()
{
    var dy = this.finalY - this.curY;
    var dx = this.finalX - this.curX;
    this.moveSpeedY = (this.finalY - this.curY) / 100;
    this.moveSpeedX = (this.finalX - this.curX) / 100;

    if (Math.abs(dy) < 2)
    {
        this.curY = this.finalY;
    }
    if (Math.abs(dx) < 2)
    {
        this.curX = this.finalX;
    }
    if (Math.abs(dy) < 1 && Math.abs(dx) < 1)
    {
        this.curX = this.finalX;
        this.curY = this.finalY;
        this.node.style.left = this.curX  + 'px'; // show frame
        this.node.style.top = this.curY  + 'px'; // show frame
        return;
    }
    else {
        if (Math.abs(dy) > 1)
        {
            this.curY += this.moveSpeedY;
        }
        if (Math.abs(dx) > 1)
        {
            this.curX += this.moveSpeedX;
        }
    }

    this.node.style.left = this.curX  + 'px'; // show frame
    this.node.style.top = this.curY  + 'px'; // show frame
}

RotateZoomAndMoveToThePointAnimation.prototype.StepAngle= function()
{
    var da = (this.curAngle % (360.0));
    var dy = this.finalY - this.curY;
    var dx = this.finalX - this.curX;
    if (Math.abs(dy) > 2 || Math.abs(dx) > 2 || Math.abs(da) > 5)
    {
        this.curAngle += this.rotateSpeed;
        this.node.style.webkitTransform += 'rotate(' + this.curAngle + 'deg) ';
    }
}

RotateZoomAndMoveToThePointAnimation.prototype.Step = function()
{
	if (this.stepId == 0)
	{
	    var x = Math.floor(window.innerWidth * (0.95 * Math.random()));
	    var y = Math.floor(window.innerHeight * (0.95 * Math.random()));
		this.curX = x;
		this.curY = y;
        this.curScale = 2 + Math.random() * (this.scaleMax - this.scaleMin);
        this.curAngle = 360.0 * Math.random();
        this.rotateSpeed = 5 * (2 - 4 * Math.random());
        this.scaleSpeed = ((0.1 * (1 - this.curScale)) * Math.random());
        this.moveSpeedY = (this.curY  -this.finalY ) / 100;
        this.moveSpeedX = (this.curX - this.finalX) / 100;
        this.node.style.position = "absolute";
        this.node.style.left = x  + 'px'; // show frame
	    this.node.style.top = y + 'px'; // show frame
        this.node.style.webkitTransform = 'scale(' + this.curScale + ')';
        this.node.style.webkitTransform = 'rotate(' + this.curAngle + 'deg) ';
        ++this.stepId;
        return;
	}
    this.node.style.webkitTransform = "";
    this.StepScale();
    this.StepPosition();
    this.StepAngle();
}

RotateZoomAndMoveToThePointAnimation.prototype.IsFinished = function()
{
    var dscale = this.curScale - 1.0;
    var dy = this.finalY - this.curY;
    var dx = this.finalX - this.curX;
    var da = Math.abs(this.curAngle % (360.0));
    return (Math.abs(dy) < 1 && Math.abs(dx) < 1 && Math.abs(dscale) < this.epsilon && (da < this.epsilon));
}
