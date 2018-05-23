//Moving sprites
var Warrior;
var bg;
var jumptimes = false;
var jump = 5;
var Gravity = 0;
var jumptimer = millis();


function preload() {
    bg = loadImage("BACK.jpg");
}
function setup() {
  createCanvas(1800,800);
  Warrior = createSprite(100, 650, 50, 100);
  IdleAnim = Warrior.addAnimation("idle", "Idle/idle1.png", "Idle/idle9.png");
  WalkAnim = Warrior.addAnimation("walk", "Walk/Walk1.png", "Walk/Walk4.png");
  SlashAnim = Warrior.addAnimation("slash", "Slash/slash1.png", "Slash/slash12.png");
  JumpAnim = Warrior.addAnimation("jump", "Jump/jump1.png", "Jump/jump14.png");
  IdleAnim.frameDelay = 10
  SlashAnim.frameDelay = 5


}

function draw() {

  background(bg);

  if(keyDown("RIGHT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim)){
    Warrior.position.x += 5
    Warrior.changeAnimation("walk");

    Warrior.mirrorX(1);
  }
  else if(keyDown("LEFT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim)){
    Warrior.position.x += -5
    Warrior.changeAnimation("walk");

    Warrior.mirrorX(-1);
  }
  else if (keyWentUp ("LEFT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim)){
    Warrior.changeAnimation("idle");

  }
  else if (keyWentUp ("RIGHT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim)){
    Warrior.changeAnimation("idle");

  }
  else if (keyDown("z") && (Warrior.animation == IdleAnim)){
    Warrior.changeAnimation("slash");
  }
  else if (keyWentUp ("z")){
    SlashAnim = Warrior.addAnimation("slash", "Slash/slash1.png", "Slash/slash12.png");
    Warrior.changeAnimation("idle");
  }
    			  Gravity += Warrior.position.y;

			if (keyWentDown("x")) {
			  jumptimes = true;
				Warrior.changeAnimation("JumpAnim");
				Warrior.velocity. y = -jump;
  			if (Warrior.position.y == 500)
  			{
  			  Gravity + 10;
  			}

    	else if (Warrior.velocity.y == 100)
      {
        var jumptimes = true;
        Gravity = 0;
        Warrior.velocity.y = 0;
      }

  		else
  		{
  		      Gravity = 0;

  		}



if ((Warrior.animation == WalkAnim) && (Warrior.position.x <= 50)){
   Warrior.position.x += 10
}
else if ((Warrior.animation == WalkAnim) && (Warrior.position.x >= 1750)){
   Warrior.position.x += -10
}

drawSprites();
  }
}









