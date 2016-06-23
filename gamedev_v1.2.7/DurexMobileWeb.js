(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 683,
	height: 1024,
	fps: 30,
	color: "#333333",
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/d0.png", id:"d0"},
		{src:"images/d1.png", id:"d1"},
		{src:"images/d2.png", id:"d2"},
		{src:"images/d3.png", id:"d3"},
		{src:"images/d4.png", id:"d4"},
		{src:"images/d5.png", id:"d5"},
		{src:"images/d6.png", id:"d6"},
		{src:"images/d7.png", id:"d7"},
		{src:"images/d8.png", id:"d8"},
		{src:"images/d9.png", id:"d9"},
		{src:"images/Durex_UI_04_10a03.png", id:"Durex_UI_04_10a03"},
		{src:"images/Durex_UI_04_10a_Artboard20.png", id:"Durex_UI_04_10a_Artboard20"},
		{src:"images/Durex_UI_04_602.png", id:"Durex_UI_04_602"},
		{src:"images/Durex_UI_04_604_on.png", id:"Durex_UI_04_604_on"},
		{src:"images/Durex_UI_04_606.png", id:"Durex_UI_04_606"},
		{src:"images/Durex_UI_04_6_Artboard15.png", id:"Durex_UI_04_6_Artboard15"},
		{src:"images/Durex_UI_04_6_Artboard15_on.png", id:"Durex_UI_04_6_Artboard15_on"},
		{src:"images/Durex_UI_04_7a03.png", id:"Durex_UI_04_7a03"},
		{src:"images/Durex_UI_04_8_M02_1.png", id:"Durex_UI_04_8_M02_1"},
		{src:"images/Durex_UI_04_8_M03_2.png", id:"Durex_UI_04_8_M03_2"},
		{src:"images/Durex_UI_04_8_M_Artboard_3.png", id:"Durex_UI_04_8_M_Artboard_3"},
		{src:"images/Durex_UI_04_9a04_male_disc.png", id:"Durex_UI_04_9a04_male_disc"},
		{src:"images/Durex_UI_04_9a06.png", id:"Durex_UI_04_9a06"},
		{src:"images/Durex_UI_04_9b04_female_disc.png", id:"Durex_UI_04_9b04_female_disc"},
		{src:"images/Durex_UI_05_10a01.jpg", id:"Durex_UI_05_10a01"},
		{src:"images/Durex_UI_05_10b01.png", id:"Durex_UI_05_10b01"},
		{src:"images/Durex_UI_05_11_F06.png", id:"Durex_UI_05_11_F06"},
		{src:"images/Durex_UI_05_11_F07.png", id:"Durex_UI_05_11_F07"},
		{src:"images/Durex_UI_05_601.jpg", id:"Durex_UI_05_601"},
		{src:"images/Durex_UI_05_7a01.jpg", id:"Durex_UI_05_7a01"},
		{src:"images/Durex_UI_05_7b01.jpg", id:"Durex_UI_05_7b01"},
		{src:"images/Durex_UI_05_8_F05.png", id:"Durex_UI_05_8_F05"},
		{src:"images/Durex_UI_05_8_F06.png", id:"Durex_UI_05_8_F06"},
		{src:"images/Durex_UI_05_8_M06.png", id:"Durex_UI_05_8_M06"},
		{src:"images/Durex_UI_05_9a01.jpg", id:"Durex_UI_05_9a01"},
		{src:"images/Durex_UI_05_9a16.png", id:"Durex_UI_05_9a16"},
		{src:"images/Durex_UI_05_9a17.png", id:"Durex_UI_05_9a17"},
		{src:"images/Durex_UI_05_9a18.png", id:"Durex_UI_05_9a18"},
		{src:"images/Durex_UI_05_9a19.png", id:"Durex_UI_05_9a19"},
		{src:"images/Durex_UI_05_9b01.png", id:"Durex_UI_05_9b01"},
		{src:"images/Durex_UI_05_9b06.png", id:"Durex_UI_05_9b06"},
		{src:"images/Durex_UI_05_9b09.png", id:"Durex_UI_05_9b09"},
		{src:"images/Loadin_Button03.png", id:"Loadin_Button03"}
	]
};

// stage content:
(lib.DurexMobileWeb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,chooseGender:4,turnOn:14,countDown:19,game:139,gameOver:153});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		gameMainInstance = new GameMain(this);
		
		this.addEventListener("tick", onTick);
		var st = this.scoreText;
		
		var previousTime = createjs.Ticker.getTime();
		function onTick(event)
		{
			var ct = createjs.Ticker.getTime();
			var delta = ct - previousTime;
			var dt = delta * 0.001;
			gameMainInstance.dt = dt;
			
			var fps = Math.floor(1 / gameMainInstance.dt);
			
			st.text = fps;	
			previousTime = ct;
			
			gameMainInstance.simulate(dt);
			//console.log('fps: ' + fps);
		}
		gameMainInstance.changeScene("chooseGender");
	}
	this.frame_4 = function() {
		this.stop();
		
		this.maleBtn.addEventListener("click", onMaleBtn.bind(this));
		this.femaleBtn.addEventListener("click", onFemaleBtn.bind(this));
		this.startBtn.addEventListener("click", onStartBtn.bind(this));
		
		function onMaleBtn()
		{
			gameMainInstance.isMale = true;
			this.maleBtn.gotoAndStop(0);
			this.femaleBtn.gotoAndStop(0);
		}
		
		function onFemaleBtn()
		{
			gameMainInstance.isMale = false;
			this.maleBtn.gotoAndStop(1);
			this.femaleBtn.gotoAndStop(1);
		}
		
		function onStartBtn(){
			this.maleBtn.removeAllEventListeners();
			this.femaleBtn.removeAllEventListeners();
			this.startBtn.removeAllEventListeners();
			gameMainInstance.changeScene("turnOn");
		}
	}
	this.frame_14 = function() {
		this.stop();
		this.loadSound.visible = false;
		if(gameMainInstance.isMale){
			this.turnOnMale.visible = true;
			this.turnOnMale.gotoAndStop(0);
			this.turnOnFemale.visible = false;
		}else{
			this.turnOnFemale.visible = true;
			this.turnOnFemale.gotoAndStop(0);
			this.turnOnMale.visible = false;
		}
		this.startGameButton.addEventListener("click", onStartBtn.bind(this));
		
		function onStartBtn(){
			var loader = new createjs.LoadQueue(false);
			loader.installPlugin(createjs.Sound);
			loader.addEventListener("fileload", handleFileLoad.bind(this));
			loader.addEventListener("complete", handleComplete.bind(this));
			loader.loadManifest(soundManifest);
			
			this.startGameButton.removeAllEventListeners();
			this.removeChild(this.startGameButton);
			/*
			if(gameMainInstance.isMale){
				this.turnOnMale.gotoAndStop(1);
			}else{
				this.turnOnFemale.gotoAndStop(1);
			}
			*/
		}
		
		function handleFileLoad(evt) {
			/*
			var context = canvas.getContext("2d");
			context.font=canvas.width*0.08+"pt Calibri";
			context.textAlign = "center";
			context.fillStyle = "#ffffff";
			context.fillText("Loading sounds...",canvas.width/2,canvas.height/2, canvas.width);
			*/
			this.loadSound.visible = true;
		}
		
		function handleComplete() {
			this.loadSound.visible = false;
			gameMainInstance.changeScene("countDown");
		}
	}
	this.frame_19 = function() {
		/*
		this.stop();
		var ref = this;
		
		var loadProxy = createjs.proxy(function(event){
			console.log('handleLoad');
			createjs.Sound.play(event.src);
			ref.play();
		}, this);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.addEventListener("fileload", loadProxy);
		createjs.Sound.registerSound('sounds/swipe.mp3');
		*/
		if(gameMainInstance.level == 2){
			this.chLv2.visible = true;
		}else{
			this.chLv2.visible = false;
		}
		if(gameMainInstance.level == 3){
			this.chLv3.visible = true;
		}else{
			this.chLv3.visible = false;
		}
		if (gameMainInstance.isMale == true) {
			this.countDownBGMale.visible = true;
			this.countDownBGFemale.visible = false;
		} else {
			this.countDownBGMale.visible = false;
			this.countDownBGFemale.visible = true;
		}
		gameMainInstance.stopGameplay();
		this.play();
	}
	this.frame_139 = function() {
		this.stop();
		
		$("#canvas").swipe("enable");
		
		gameMainInstance.timeLeft = gameMainInstance.levelTime[gameMainInstance.level-1];
		gameMainInstance.dx = 0;
		gameMainInstance.defaultRSpd = 0;
		gameMainInstance.rSpd = 0;
		gameMainInstance.newSpd = 0;
		gameMainInstance.isMove = false;
		gameMainInstance.damping = 0;
		gameMainInstance.isInit = false;
		gameMainInstance.bgm = null;
		gameMainInstance.bgmMode = "";
		
		gameMainInstance.mcArrow = this.arrow;
		gameMainInstance.mcDigit1 = this.d1;
		gameMainInstance.mcDigit2 = this.d2;
		gameMainInstance.mcIndicator = this.indicator;
		gameMainInstance.mcHand = this.hand;
		
		if(gameMainInstance.isMale)
		{
			this.gameBgMale.visible = true;
			this.gameBgFemale.visible = false;
			
			this.musicDiscMale.visible = true;
			this.musicDiscFemale.visible = false;
			gameMainInstance.mcDisc = this.musicDiscMale;
			
			this.maleGood.visible = true;
			this.femaleGood.visible = false;
			gameMainInstance.mcGood = this.maleGood;
			
			this.hand.scaleX *= -1;
			this.hand.x = 0;
		}
		else
		{
			this.gameBgMale.visible = false;
			this.gameBgFemale.visible = true;
			
			this.musicDiscMale.visible = false;
			this.musicDiscFemale.visible = true;
			gameMainInstance.mcDisc = this.musicDiscFemale;
			
			this.maleGood.visible = false;
			this.femaleGood.visible = true;
			gameMainInstance.mcGood = this.femaleGood;
		}
		
		gameMainInstance.startGameplay();
	}
	this.frame_153 = function() {
		this.stop();
		if(gameMainInstance.isMale){
			this.gameOverBgMale.visible = true;
			this.gameOverBgFemale.visible = false;
		}else{
			this.gameOverBgMale.visible = false;
			this.gameOverBgFemale.visible = true;
		}
		
		gameMainInstance.stopGameplay();
		
		this.tryBtn.addEventListener("click", onTryBtn.bind(this));
		this.mainBtn.addEventListener("click", onMainBtn.bind(this));
		function onTryBtn(e){
			clearAll(this);
			gameMainInstance.changeScene("game");
		}
		function onMainBtn(e){
			clearAll(this);
			//gameMainInstance.changeScene("chooseGender");
			window.location.replace("./../index.php");
		}
		function clearAll(stage){
			stage.tryBtn.removeAllEventListeners();
			stage.mainBtn.removeAllEventListeners();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(5).call(this.frame_19).wait(120).call(this.frame_139).wait(14).call(this.frame_153).wait(11));

	// Layer 9
	this.loadSound = new lib.LoadSound();
	this.loadSound.setTransform(341.5,851.5,1,1,0,0,0,0,-0.1);

	this.chLv3 = new lib.ChLv3();
	this.chLv3.setTransform(559.5,267,1,1,0,0,0,218,81.5);

	this.chLv2 = new lib.ChLv2();
	this.chLv2.setTransform(561,273,1,1,0,0,0,219.5,87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.loadSound}]},14).to({state:[{t:this.chLv2},{t:this.chLv3}]},5).to({state:[]},120).wait(25));

	// Layer 2
	this.instance = new lib.Durex_UI_04_8_M_Artboard_3();
	this.instance.setTransform(236.5,297.5);

	this.instance_1 = new lib.Durex_UI_04_8_M03_2();
	this.instance_1.setTransform(236.5,297.5);

	this.instance_2 = new lib.Durex_UI_04_8_M02_1();
	this.instance_2.setTransform(236.5,297.5);

	this.instance_3 = new lib.Durex_UI_05_8_F05();
	this.instance_3.setTransform(94,396);

	this.instance_4 = new lib.Durex_UI_04_9a06();
	this.instance_4.setTransform(424,348.5);

	this.hand = new lib.Hand();
	this.hand.setTransform(683,1023.5,1,1,0,0,0,204.5,168.5);

	this.musicDiscFemale = new lib.MusicDiscFemale();
	this.musicDiscFemale.setTransform(341.5,717.4);

	this.musicDiscMale = new lib.MusicDiscMale();
	this.musicDiscMale.setTransform(341.5,720.4);

	this.hand_1 = new lib.Hand();
	this.hand_1.setTransform(546.5,872.9,1,1,0,0,0,204.5,168.5);

	this.femaleGood = new lib.FemaleGood();
	this.femaleGood.setTransform(417.5,222.5,1,1,0,0,0,76,32);

	this.maleGood = new lib.MaleGood();
	this.maleGood.setTransform(414.5,228,1,1,0,0,0,73,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},4).to({state:[]},10).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.maleGood},{t:this.femaleGood},{t:this.hand_1},{t:this.musicDiscMale},{t:this.musicDiscFemale},{t:this.hand},{t:this.instance_4}]},30).to({state:[]},14).wait(11));

	// Layer 1
	this.startBtn = new lib.StartBtn();
	this.startBtn.setTransform(341.5,832.8);

	this.femaleBtn = new lib.FemaleBtn();
	this.femaleBtn.setTransform(509.7,546.4,0.755,0.755);

	this.maleBtn = new lib.MaleBtn();
	this.maleBtn.setTransform(187.1,548.5,0.768,0.768);

	this.startGameButton = new lib.Symbol1();
	this.startGameButton.setTransform(341.5,854,1,1,0,0,0,322,65);
	new cjs.ButtonHelper(this.startGameButton, 0, 1, 1);

	this.countDownBGMale = new lib.Symbol2();
	this.countDownBGMale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.countDownBGFemale = new lib.CountDownBgFemale();
	this.countDownBGFemale.setTransform(342,512,1,1,0,0,0,342,512.5);

	this.arrow = new lib.Arrow();
	this.arrow.setTransform(333.5,242.9,0.649,0.649);

	this.d1 = new lib.Timer();
	this.d1.setTransform(501.5,125.6,2,2,0,0,0,1,3);

	this.d2 = new lib.Timer();
	this.d2.setTransform(560.5,125.6,2,2,0,0,0,1,3);

	this.indicator = new lib.Indicator();
	this.indicator.setTransform(685,363,1,1,0,0,0,343.5,70.5);

	this.tryBtn = new lib.tryAgainBtn();
	this.tryBtn.setTransform(341.5,739.5);

	this.mainBtn = new lib.MainBtn();
	this.mainBtn.setTransform(341.5,929.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.maleBtn},{t:this.femaleBtn},{t:this.startBtn}]},4).to({state:[{t:this.startGameButton}]},10).to({state:[{t:this.countDownBGFemale},{t:this.countDownBGMale}]},5).to({state:[{t:this.indicator},{t:this.d2},{t:this.d1},{t:this.arrow}]},120).to({state:[{t:this.mainBtn},{t:this.tryBtn}]},14).wait(11));

	// BG
	this.instance_5 = new lib.Durex_UI_05_601();
	this.instance_5.setTransform(0,-0.5);

	this.turnOnMale = new lib.TurnOnMale();
	this.turnOnMale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.turnOnFemale = new lib.TurnOnFemale();
	this.turnOnFemale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.gameBgMale = new lib.GameBgMale();
	this.gameBgMale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.gameBgFemale = new lib.GameBgFemale();
	this.gameBgFemale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.gameOverBgMale = new lib.GameOverBgMale();
	this.gameOverBgMale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.gameOverBgFemale = new lib.GameOverBgFemale();
	this.gameOverBgFemale.setTransform(341.5,511.5,1,1,0,0,0,341.5,512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.turnOnFemale},{t:this.turnOnMale}]},10).to({state:[]},5).to({state:[{t:this.gameBgFemale},{t:this.gameBgMale}]},120).to({state:[{t:this.gameOverBgFemale},{t:this.gameOverBgMale}]},14).wait(11));

	// FpsText
	this.scoreText = new cjs.Text("", "bold 28px 'Verdana'");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 30;
	this.scoreText.lineWidth = 100;
	this.scoreText.setTransform(225.3,59.1,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525.2,571.2,86.7,31.7);


// symbols:
(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,49);


(lib.d0 = function() {
	this.initialize(img.d0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d2 = function() {
	this.initialize(img.d2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d3 = function() {
	this.initialize(img.d3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d4 = function() {
	this.initialize(img.d4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d5 = function() {
	this.initialize(img.d5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d6 = function() {
	this.initialize(img.d6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d7 = function() {
	this.initialize(img.d7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d8 = function() {
	this.initialize(img.d8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.d9 = function() {
	this.initialize(img.d9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.Durex_UI_04_10a03 = function() {
	this.initialize(img.Durex_UI_04_10a03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,186);


(lib.Durex_UI_04_10a_Artboard20 = function() {
	this.initialize(img.Durex_UI_04_10a_Artboard20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,185);


(lib.Durex_UI_04_602 = function() {
	this.initialize(img.Durex_UI_04_602);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,99);


(lib.Durex_UI_04_604_on = function() {
	this.initialize(img.Durex_UI_04_604_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,306);


(lib.Durex_UI_04_606 = function() {
	this.initialize(img.Durex_UI_04_606);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,306);


(lib.Durex_UI_04_6_Artboard15 = function() {
	this.initialize(img.Durex_UI_04_6_Artboard15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,306);


(lib.Durex_UI_04_6_Artboard15_on = function() {
	this.initialize(img.Durex_UI_04_6_Artboard15_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,306);


(lib.Durex_UI_04_7a03 = function() {
	this.initialize(img.Durex_UI_04_7a03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,130);


(lib.Durex_UI_04_8_M02_1 = function() {
	this.initialize(img.Durex_UI_04_8_M02_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,356);


(lib.Durex_UI_04_8_M03_2 = function() {
	this.initialize(img.Durex_UI_04_8_M03_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,356);


(lib.Durex_UI_04_8_M_Artboard_3 = function() {
	this.initialize(img.Durex_UI_04_8_M_Artboard_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,356);


(lib.Durex_UI_04_9a04_male_disc = function() {
	this.initialize(img.Durex_UI_04_9a04_male_disc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,578);


(lib.Durex_UI_04_9a06 = function() {
	this.initialize(img.Durex_UI_04_9a06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,392);


(lib.Durex_UI_04_9b04_female_disc = function() {
	this.initialize(img.Durex_UI_04_9b04_female_disc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,578);


(lib.Durex_UI_05_10a01 = function() {
	this.initialize(img.Durex_UI_05_10a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_10b01 = function() {
	this.initialize(img.Durex_UI_05_10b01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_11_F06 = function() {
	this.initialize(img.Durex_UI_05_11_F06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,175);


(lib.Durex_UI_05_11_F07 = function() {
	this.initialize(img.Durex_UI_05_11_F07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,163);


(lib.Durex_UI_05_601 = function() {
	this.initialize(img.Durex_UI_05_601);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_7a01 = function() {
	this.initialize(img.Durex_UI_05_7a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_7b01 = function() {
	this.initialize(img.Durex_UI_05_7b01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_8_F05 = function() {
	this.initialize(img.Durex_UI_05_8_F05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,231);


(lib.Durex_UI_05_8_F06 = function() {
	this.initialize(img.Durex_UI_05_8_F06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,684,1025);


(lib.Durex_UI_05_8_M06 = function() {
	this.initialize(img.Durex_UI_05_8_M06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,684,1025);


(lib.Durex_UI_05_9a01 = function() {
	this.initialize(img.Durex_UI_05_9a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_9a16 = function() {
	this.initialize(img.Durex_UI_05_9a16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,148);


(lib.Durex_UI_05_9a17 = function() {
	this.initialize(img.Durex_UI_05_9a17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,141);


(lib.Durex_UI_05_9a18 = function() {
	this.initialize(img.Durex_UI_05_9a18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,73);


(lib.Durex_UI_05_9a19 = function() {
	this.initialize(img.Durex_UI_05_9a19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,337);


(lib.Durex_UI_05_9b01 = function() {
	this.initialize(img.Durex_UI_05_9b01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.Durex_UI_05_9b06 = function() {
	this.initialize(img.Durex_UI_05_9b06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,148);


(lib.Durex_UI_05_9b09 = function() {
	this.initialize(img.Durex_UI_05_9b09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,64);


(lib.Loadin_Button03 = function() {
	this.initialize(img.Loadin_Button03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,163);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_7a03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,644,130);


(lib.TurnOnMale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_7a01();

	this.instance_1 = new lib.Durex_UI_05_8_M06();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.TurnOnFemale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_7b01();

	this.instance_1 = new lib.Durex_UI_05_8_F06();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.tryAgainBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_10a_Artboard20();
	this.instance.setTransform(-345.5,-92.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-345.5,-92.5,691,185);


(lib.Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.d0();
	this.instance.setTransform(-12.5,-23.5);

	this.instance_1 = new lib.d1();
	this.instance_1.setTransform(-12.5,-23.5);

	this.instance_2 = new lib.d2();
	this.instance_2.setTransform(-12.5,-23.5);

	this.instance_3 = new lib.d3();
	this.instance_3.setTransform(-12.5,-23.5);

	this.instance_4 = new lib.d4();
	this.instance_4.setTransform(-12.5,-23.5);

	this.instance_5 = new lib.d5();
	this.instance_5.setTransform(-12.5,-23.5);

	this.instance_6 = new lib.d6();
	this.instance_6.setTransform(-12.5,-23.5);

	this.instance_7 = new lib.d7();
	this.instance_7.setTransform(-12.5,-23.5);

	this.instance_8 = new lib.d8();
	this.instance_8.setTransform(-12.5,-23.5);

	this.instance_9 = new lib.d9();
	this.instance_9.setTransform(-12.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-23.5,25,47);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_8_M06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,684,1025);


(lib.StartBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_602();
	this.instance.setTransform(-245,-49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245,-49.5,490,99);


(lib.MusicDiscMale = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_9a04_male_disc();
	this.instance.setTransform(-286,-289);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-286,-289,572,578);


(lib.MusicDiscFemale = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_9b04_female_disc();
	this.instance.setTransform(-286,-289);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-286,-289,572,578);


(lib.MaleGood = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_9a18();
	this.instance.setTransform(-73,-36.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73,-36.5,146,73);


(lib.MaleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_04_604_on();
	this.instance.setTransform(-150,-153);

	this.instance_1 = new lib.Durex_UI_04_606();
	this.instance_1.setTransform(-150,-153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-153,300,306);


(lib.MainBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_04_10a03();
	this.instance.setTransform(-345.5,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-345.5,-93,691,186);


(lib.LoadSound = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Loadin_Button03();
	this.instance.setTransform(-338,-83.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338,-83.5,676,163);


(lib.Indicator = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_9a17();
	this.instance.setTransform(-343.5,-70.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-343.5,-70.5,687,141);


(lib.Hand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_9a19();
	this.instance.setTransform(-204.5,-168.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-204.5,-168.5,409,337);


(lib.GameOverBgMale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_10a01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.GameOverBgFemale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_10b01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.GameBgMale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_9a16();
	this.instance.setTransform(453.5,46);

	this.instance_1 = new lib.Durex_UI_05_9a01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.GameBgFemale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_05_9b06();
	this.instance.setTransform(453.5,46);

	this.instance_1 = new lib.Durex_UI_05_9b01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,1024);


(lib.FemaleGood = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_9b09();
	this.instance.setTransform(-76,-32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-32,152,64);


(lib.FemaleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Durex_UI_04_6_Artboard15();
	this.instance.setTransform(-150,-153);

	this.instance_1 = new lib.Durex_UI_04_6_Artboard15_on();
	this.instance_1.setTransform(-150,-153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-153,300,306);


(lib.CountDownBgFemale = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_8_F06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,684,1025);


(lib.ChLv3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_11_F07();
	this.instance.setTransform(-218,-81.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-218,-81.5,436,163);


(lib.ChLv2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Durex_UI_05_11_F06();
	this.instance.setTransform(-219.5,-87.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-219.5,-87.5,439,175);


(lib.Arrow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-28.5,-24.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-24.5,57,49);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;