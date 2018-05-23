//Moving sprites
var Warrior;
var Shadow;
var bg;
var bottom;
var x = 1;
var c = 1;
var p = 1;
var v = 1;
var z = 1;
var t = 1;

function preload() {
    bg = loadImage(m);
}
function setup() {
  createCanvas(1800,800);
  Shadow = createSprite(100, 650, 50, 100);
  Warrior = createSprite(1650, 650, 50, 100);
  bottom = createSprite(500, 900, 5000, 30);
  ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoIdle/zatoidle1.png", "ZatoIdle/zatoidle12.png");
  ShadowWalk = Shadow.addAnimation("shadowwalk", "ZatoWalk/zatowalk1.png", "ZatoWalk/zatowalk8.png");
  ShadowCharge = Shadow.addAnimation("shadowcharge", "ZatoCharge/zatocharge1.png", "ZatoCharge/zatocharge28.png");
  ShadowSlash = Shadow.addAnimation("shadowslash", "ZatoSlash/zatoslash1.png", "ZatoSlash/zatoslash12.png");
  ShadowSpecial = Shadow.addAnimation("shadowspecial", "ZatoSpecial/zatospecial1.png", "ZatoSpecial/zatospecial2.png");
  IdleAnim = Warrior.addAnimation("idle", "Idle/idle1.png", "Idle/idle9.png");
  WalkAnim = Warrior.addAnimation("walk", "Walk/Walk1.png", "Walk/Walk4.png");
  SlashAnim = Warrior.addAnimation("slash", "Slash/slash1.png", "Slash/slash12.png");
  JumpAnim = Warrior.addAnimation("jump", "Jump/jump1.png", "Jump/jump20.png");
  ChargeAnim =Warrior.addAnimation("charge", "Charge/charge1.png", "Charge/charge29.png")
  SpecialAnim =Warrior.addAnimation("special100", "Special/special1.png", "Special/special22.png")

  IdleAnim.frameDelay = 10;
  SlashAnim.frameDelay = 5;
  Warrior.mirrorX(-1);
  Shadow.mirrorX(1);



}

function draw() {

  background(bg);

  if(keyDown("RIGHT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim) && (x != 2) && (c != 2) && (p != 2)){
    Warrior.position.x += 5;
    Warrior.changeAnimation("walk");


  }
  else if(keyDown("LEFT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim) && (x != 2) && (c != 2) && (p != 2)){
    Warrior.position.x += -5;
    Warrior.changeAnimation("walk");


  }
  else if (keyWentUp ("LEFT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim) && (x != 2 && (c != 2) && (p != 2))){
    Warrior.changeAnimation("idle");

  }
  else if (keyWentUp ("RIGHT_ARROW") && (Warrior.animation != SlashAnim) && (Warrior.animation != JumpAnim) && (x != 2) && (c != 2) && (p != 2)){
    Warrior.changeAnimation("idle");

  }
  else if (keyWentDown ("k") && (x != 2) && (c == 1) && (p != 2)){
    c = 2;
    IdleAnim = Warrior.addAnimation("idle", "Slash/slash1.png", "Slash/slash12.png");
    IdleAnim.frameDelay = 5;
    setTimeout(attack, 1000)
  }
  else if (keyWentDown ("l") && (x != 2) && (c == 1) && (p == 1)){
    p=2;
    Warrior.position.y += -100
    IdleAnim = Warrior.addAnimation("idle", "Charge/charge1.png", "Charge/charge29.png")
    IdleAnim.frameDelay = 5;
    setTimeout(special, 1000)
  }
  else if (keyWentDown ("UP_ARROW") && (x != 2) && (Warrior.animation != SlashAnim) && (c != 2) && (p != 2))
  {
    x = 2;
    IdleAnim = Warrior.addAnimation("idle", "Jump/jump1.png", "Jump/jump20.png");
    Warrior.velocity.y = -7;
    IdleAnim.frameDelay = 6;
    setTimeout(rainbow, 1000);
  }


if ((Warrior.animation == WalkAnim) && (Warrior.position.x <= 50) && (p != 2)){
   Warrior.position.x += 10;
}
else if ((Warrior.animation == WalkAnim) && (Warrior.position.x >= 1750)&& (p != 2)){
   Warrior.position.x += -10;
}
else if ((Warrior.position.x <= 50) && (p == 2)){
   Warrior.position.x += 30;
}

if (Warrior.collide(bottom) && (x == 2)) {
   Warrior.velocity.y = 0;
   IdleAnim = Warrior.addAnimation("idle", "Idle/idle1.png", "Idle/idle9.png");
   IdleAnim.frameDelay = 10;
   x = 1;
}
function rainbow() {
  Warrior.velocity.y = 6;
}

function attack() {
  IdleAnim = Warrior.addAnimation("idle", "Idle/idle1.png", "Idle/idle9.png");
  c = 1
  IdleAnim.frameDelay = 10
}
function special(){
  IdleAnim = Warrior.addAnimation("idle", "Special/special1.png", "Special/special22.png");
  IdleAnim.frameDelay = 3;
  Warrior.velocity.x = -15;
  Warrior.position.y += 100
  setTimeout(specialchain, 1000)
}
function specialchain(){
  Warrior.velocity.x = 0;
  IdleAnim = Warrior.addAnimation("idle", "Idle/idle1.png", "Idle/idle9.png");
  IdleAnim.frameDelay = 10;
  setTimeout(specialchain2, 10000);
  p = 3;
}
function specialchain2(){
  p = 1;
}
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//Zato Code
if(keyDown("d") && (Shadow.animation != ShadowSlash) && (v != 2) && (z != 2) && (t != 2)){
    Shadow.position.x += 5;
    Shadow.changeAnimation("shadowwalk");


  }
  else if(keyDown("a") && (Shadow.animation != ShadowSlash) && (v != 2) && (z != 2) && (t != 2)){
    Shadow.position.x += -5;
    Shadow.changeAnimation("shadowwalk");


  }
  else if (keyWentUp ("a") && (Shadow.animation != ShadowSlash) && (v != 2) && (z != 2) && (t != 2)){
    Shadow.changeAnimation("shadowidle");

  }
  else if (keyWentUp ("d") && (Shadow.animation != ShadowSlash) && (v != 2) && (z != 2) && (t != 2)){
    Shadow.changeAnimation("shadowidle");

  }
  else if (keyWentDown ("z") && (v != 2) && (z != 2) && (t != 2)){
    z = 2;
    ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoSlash/zatoslash1.png", "ZatoSlash/zatoslash12.png");
    ShadowIdle.frameDelay = 5;
    setTimeout(attack1, 1000)
  }
  else if (keyWentDown ("x") && (v != 2) && (z != 2) && (t == 1)){
    t = 2;
    ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoCharge/zatocharge1.png", "ZatoCharge/zatocharge28.png")
    ShadowIdle.frameDelay = 5;
    setTimeout(special2, 1000);
  }
  else if (keyWentDown ("w") && (v != 2) && (z != 2) && (t != 2))
  {
    v = 2;
    ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoJump/zatojump1.png", "ZatoJump/zatojump25.png");
    Shadow.velocity.y = -7;
    ShadowIdle.frameDelay = 7;
    setTimeout(rainbow1, 1000);
  }



if ((Shadow.animation == ShadowWalk) && (Shadow.position.x <= 50) && (t != 2)){
   Shadow.position.x += 10;
}
else if ((Shadow.animation == ShadowWalk) && (Shadow.position.x >= 1750)&& (t != 2)){
   Shadow.position.x += -10;
}
else if ((Shadow.position.x >= 1750) && (t == 2)){
   Shadow.position.x += -30;
}

if (Shadow.collide(bottom) && (v == 2)) {
   Shadow.velocity.y = 0;
   ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoIdle/zatoidle1.png", "ZatoIdle/zatoidle12.png");
   ShadowIdle.frameDelay = 3;
   Shadow.position.y += 40
   v = 1;
}
function rainbow1() {
  Shadow.velocity.y = 6;
  ShadowIdle.frameDelay = 3;
}

function attack1() {
  ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoIdle/zatoidle1.png", "ZatoIdle/zatoidle12.png");
  z = 1

  ShadowIdle.frameDelay = 3
}
function special2(){
  ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoSpecial/zatospecial1.png", "ZatoSpecial/zatospecial2.png");
  ShadowIdle.frameDelay = 3;
  Shadow.velocity.x = 15;

  setTimeout(specialchain3, 1000)
}
function specialchain3(){
  Shadow.velocity.x = 0;
  ShadowIdle = Shadow.addAnimation("shadowidle", "ZatoIdle/zatoidle1.png", "ZatoIdle/zatoidle12.png");
  ShadowIdle.frameDelay = 3;
  setTimeout(specialchain4, 10000);
  t = 3;
}
function specialchain4(){
  t = 1;
}
drawSprites();
  }


