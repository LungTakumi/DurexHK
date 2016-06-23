<?php

	$pw = 683;
	$ph = 1024;

	$ow = $pw;
	$oh = $ph;
	
	if(isset($_REQUEST['width']))
		$ow = $_REQUEST['width'];
	
	if(isset($_REQUEST['height']))
		$oh = $_REQUEST['height'];


	$cw = $ow;
	$ch = floor($ow * 1024 / 683);
	if($oh < $ch)
	{
		$cw = floor($oh * 0.683);
		$ch = $oh;		
	}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Game</title>

<script src="easeljs-0.7.0.min.js"></script>
<script src="tweenjs-0.5.0.min.js"></script>
<script src="movieclip-0.7.0.min.js"></script>
<script src="preloadjs-0.4.0.min.js"></script>


<script type="text/javascript" src="./src/createjs/utils/Proxy.js"></script>
<script type="text/javascript" src="./src/createjs/utils/IndexOf.js"></script>
<script type="text/javascript" src="./src/createjs/events/Event.js"></script>
<script type="text/javascript" src="./src/createjs/events/EventDispatcher.js"></script>
<script type="text/javascript" src="./src/soundjs/Sound.js"></script>
<script type="text/javascript" src="./src/soundjs/WebAudioPlugin.js"></script>
<script type="text/javascript" src="./src/soundjs/HTMLAudioPlugin.js"></script>

<script src="jquery-1.11.0.min.js"></script>
<script src="jquery.touchSwipe.min.js"></script>
<script src="GameMain.js"></script>
<script src="SoundsLib.js"></script>
<script src="DurexMobileWeb.js"></script>

<script>
var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
        //loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
        var context = canvas.getContext("2d");
		/*
        context.font=canvas.width*0.08+"pt Calibri";
        context.textAlign = "center";
        context.fillStyle = "#ffffff";
        context.fillText("Loading images...",canvas.width/2,canvas.height/2, canvas.width);
		*/
		var scaleX = 1,
			scaleY = 1,
			w = 676,
			h = 163;
		scaleX = scaleY = canvas.width/<?php echo $pw; ?>;
		if(<?php echo $oh; ?> < canvas.height)
		{
			scaleX = scaleY = canvas.height/<?php echo $ph; ?>;
		}
		w *= scaleX;
		h *= scaleY;
		var imageObj = new Image();
		imageObj.onload = function() {
		  context.drawImage(imageObj, canvas.width/2-w/2, canvas.height/2-h/2, w, h);
		};
		imageObj.src = "images/Loadin_Button03.png";
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	exportRoot = new lib.DurexMobileWeb();


	exportRoot.scaleX = exportRoot.scaleY = canvas.width/<?php echo $pw; ?>;
	if(<?php echo $oh; ?> < canvas.height)
	{
		exportRoot.scaleX = exportRoot.scaleY = canvas.height/<?php echo $ph; ?>;
	}

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

</script>
</head>

<body onload="init();" style="background-color:#000000">
	<div style="width:<?php echo $cw; ?>px; margin:0 auto;"><canvas id="canvas" width="<?php echo $cw; ?>" height="<?php echo $ch; ?>" style="background-color:#000000;"></canvas></div>
</body>
</html>