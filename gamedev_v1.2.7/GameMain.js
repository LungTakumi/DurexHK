var gameMainInstance = null;

var GameMain = function(stage){
    this.initialize(stage);
}

//var p = GameMain.prototype;
var p = GameMain.prototype = new createjs.EventDispatcher();

p.dt = 0;
p.sc = "init";
p.levelTime = [50, 30, 20];
p.levelSpd = {male: [240, 360, 480], female: [160, 120, 96]};
p.level = 1;
p.isSwipe = false;
p.v = 0;
p.levelBgm = ["1", "2", "3"];
p.swipePower = 25;
p.reachRange = 12.5;

p.isMale = true;
p.bgmReference = null;
p.playStart = false;

p.timeLeft = null;
p.dx = 0;
p.defaultRSpd = 0;
p.rSpd = 0;
p.newSpd = 0;
p.isMove = false;
p.damping = 0;
p.isInit = false;
p.bgm = null;
p.bgmMode = "";

p.mcDisc = null;
p.mcArrow = null;
p.mcDigit1 = null;
p.mcDigit2 = null;
p.mcInductor = null;
p.mcGood = null;
p.mcHand = null;

p.swipeSound = null;
p.swipeVolume = 0.5;

p.avgTime = 0.1;
p.avgTimer = 0;
p.avgRSpd = 0;
p.avgCount = {total: 0 , count: 0};
p.acceptRange = 0.1;
p.acceptTime = 1;
p.acceptTimer = 0;
p.isInRange = false; //change it to true to win
p.acurateRate = 0.5;
p.isWin = false; //unused, use isInRange instead
p.isWinAll = false;

p.initialize = function(stage)
{
    this.stage = stage;
    this.initGame();	
}

p.initGame = function(){
    
    //$("#canvas").swipe("disable");	
}

p.simulate = function(delta)
{
	if(this.playStart)
	{		
		if(!this.isInit){
			this.isInit = true;
		
			if(this.isMale){
				this.defaultRSpd = this.levelSpd.male[this.level-1];
				this.damping = this.defaultRSpd/3;
				this.setBgm("m");
			}else{
				this.defaultRSpd = this.levelSpd.female[this.level-1];
				this.damping = -this.defaultRSpd/3;
                                this.setBgm("f");
			}
			this.rSpd = this.defaultRSpd;
			this.newSpd = this.rSpd;
		}
		//console.log('rSpd: ' + rSpd);
		//console.log('isSwipe: ' + main.isSwipe);
		if(this.isSwipe){
			this.isSwipe = false;
			this.isMove = true;
			this.newSpd = this.rSpd - this.v * this.swipePower;
			if(this.isMale){
				if(this.newSpd < 0)
					this.newSpd = 0;
				if(this.newSpd > this.defaultRSpd)
					this.newSpd = this.defaultRSpd;
			}else{
				if(this.newSpd < this.defaultRSpd)
					this.newSpd = this.defaultRSpd;
				if(this.newSpd > this.defaultRSpd*2)
					this.newSpd = this.defaultRSpd*2;
			}
		}
		if(this.isMove){
			this.rSpd += ((this.newSpd - this.rSpd) * 2) * this.dt;
			if(Math.abs(this.newSpd - this.rSpd) <= this.reachRange){
				this.isMove = false;
			}
		}else{
			this.rSpd += this.damping * this.dt;
			if(this.isMale){
				if(this.rSpd < 0)
					this.rSpd = 0;
				if(this.rSpd > this.defaultRSpd)
					this.rSpd = this.defaultRSpd;
			}else{
				if(this.rSpd < this.defaultRSpd)
					this.rSpd = this.defaultRSpd;
				if(this.rSpd > this.defaultRSpd*2)
					this.rSpd = this.defaultRSpd*2;
			}
		}
				
		if(this.mcDisc)
		{			
			this.mcDisc.rotation += this.rSpd * this.dt;
		}
	
		var _d1 = Math.floor(this.timeLeft * 0.1);
		var _d2 = this.timeLeft % 10;
	
		if(this.mcDigit1)
		{			
			this.mcDigit1.gotoAndStop(_d1);
		}
	
		if(this.mcDigit2)
		{
			this.mcDigit2.gotoAndStop(_d2);
		}	
	
		this.timeLeft -= this.dt;
		if(this.timeLeft <= 0){
                    if(this.isInRange){
                        if(this.level < 3){
                            //this.isWin = false;
                            this.clearAll();
                            this.level++;
                            this.changeScene("countDown");
                            //changeScene("nextLevel");
                        }else{
                            this.winAllLevels();
                        }
                    }else{
			this.clearAll();
			this.timeLeft = this.levelTime[this.level-1];
			this.changeScene("gameOver");
                    }
		}
	
		if(this.mcArrow && this.mcIndicator)
		{
			var indicatorWidth = this.mcIndicator.getTransformedBounds().width;
			var hw = indicatorWidth * 0.5;
			
			var dx = 0;
			if(this.isMale)
				dx = -(this.rSpd - this.defaultRSpd * 0.5)/(this.defaultRSpd * 0.5) * hw;
			else
				dx = -(this.rSpd - this.defaultRSpd * 1.5)/(this.defaultRSpd * 0.5) * hw;
					
			this.mcArrow.x = hw + dx;
		}
                
                this.determindWin();
                
		/*
		if(Math.abs(dx/(indicatorWidth/2))<=(1/3)){
			setBgm("_normal");
		}else if(dx < 0){
			setBgm("_slow");
		}else{
			setBgm("_fast");
		}
		*/			
	}
}

p.determindWin = function(){
    this.avgCount.total += this.rSpd;
    this.avgCount.count ++;
    this.avgTimer += this.dt;
    if(this.avgTimer >= this.avgTime){
        this.avgTimer -= this.avgTime;
        this.avgRSpd = this.avgCount.total/this.avgCount.count;
        if(this.isMale){
            if(Math.abs(this.defaultRSpd*0.5-this.avgRSpd) <= this.defaultRSpd*this.acceptRange){
                this.isInRange = true;
            }else{
                this.isInRange = false; 
            }
        }else{
            if(Math.abs(this.defaultRSpd*1.5-this.avgRSpd) <= this.defaultRSpd*this.acceptRange){
                this.isInRange = true;
            }else{
                this.isInRange = false;
            }
        }
        if(this.mcGood){
            this.mcGood.visible = this.isInRange;
        }
        this.avgCount.total = 0;
        this.avgCount.count = 0;
    }
    //avgDx = (avgRSpd-defaultRSpd/2)/(defaultRSpd/2)*(indicatorWidth/2);
    this.acceptTime = this.levelTime[this.level-1] * this.acurateRate;
    if(this.isInRange && !this.isWin){
        this.acceptTimer += this.dt;
        if(this.acceptTimer >= this.acceptTime){
            this.acceptTimer = 0;
            //this.isWin = true;
        }
    }
    //console.log(this.acceptTimer);
}

p.startGameplay = function()
{
    var ref = this;
	
    $("#canvas").swipe( {
            //Generic swipe handler for all directions
            click:function(event, target) {
                
            },
			
			swipe:function (event, direction, distance, duration, fingerCount, fingerData)
			{
				console.log("You swiped " + direction );
                                if(ref.mcHand){
                                    ref.mcHand.visible = false;
                                }
				ref.moveDisc(distance, duration, direction);
			},
			
            //Default is 75px, set to 0 for demo so any distance triggers swipe
             threshold:0
    });	
	$("#canvas").swipe("enable");
	
	this.playStart = true;
}

p.stopGameplay = function()
{
	$("#canvas").swipe("disable");
	this.playStart = false;
}

p.clearAll = function(){
    //$("#canvas").swipe("disable");

    /*
    if(this.mcDisc)
            this.mcDisc.removeAllEventListeners();
    */

    //stage.disc.removeAllEventListeners();

    if(this.bgm)
    {
        this.bgm.stop();
    }  
}

p.moveDisc = function(d, t, dir){
    this.isSwipe = true;
    if(dir == "right")
        this.v = d/t;
    else if(dir == "left")
        this.v = -d/t;
    //var sound = playSound("horse");
    //sound.volume = 0.125;
	/*
	console.log('this.swipeSound: ' + this.swipeSound);
	if(this.swipeSound)
		this.swipeSound.play({loop: 1});
	else
		this.swipeSound = createjs.Sound.play('swipe', createjs.Sound.INTERRUPT_EARLY, 0, 0, 1);
    */
    var sound = this.playSound("swipe");
    sound.volume = this.swipeVolume;
}

p.changeScene = function(sc){
    this.sc = sc;
    this.stage.gotoAndStop(sc);
}

p.setBgm = function(mode){
    if(this.bgmMode != mode){
        this.bgmMode = mode;
        if(this.bgm){
            this.bgm.stop();
        }
        this.bgm = this.playSound(this.bgmMode+this.levelBgm[this.level-1], -1);
    }
}

p.playSound = function(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

p.winAllLevels = function(){
    if(!this.isWinAll){
        this.isWinAll = true;
        this.stopGameplay();
        var data = "win";
        var dataString = 'gameResult=' + data;

        $.ajax({
            type: "POST",
            url: "./../InputWins.php",
            data: dataString,
            cache: false,
            success: function() {
               window.location.replace("./../win.php");
            }
        });
    }
}

/*
(function (){
    
var GameMain = function(rootContainer)
{
    this.initialize(rootContainer);
}

var p = GameMain.prototype = new createjs.EventDispatcher();

p.rootContainer;

p.initialize = function(rootContainer)
{
	this.rootContainer = rootContainer;
	
	this.initGame();
}

p.initGame = function()
{
    
}

window.GameMain = GameMain;
}());
*/