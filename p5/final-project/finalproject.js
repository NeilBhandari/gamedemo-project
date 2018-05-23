var s = "Choose your Pokemon!"; //intro and during battles
var i = "" //chat for enemy characters
var introtext;
var playercharacter; //player's mini char
var bg; //background image
var bgimage1; //first bg
var Idle; //idle for mini
var inbattle = false; //are you in battle
var currentmap = 0; //which map to set to
var song1; //peaceful song
var speed = 3;//movement speed of mini player
var starter = 0; //charizard = 1, blastoise = 2, venosaur = 3
var house; //collider
var sfx;
var house2; //collider
var pokecenter; //collider
var museum; //collider
var gym; //collider
var charizard; //intro sequence
var venosaur; //intro sequence
var blastoise;
var trainer1; //first trainer's mini sprite
var trainer1defeated = false; //is trainer1 ded
var fight = 0; //which trainer you're fighting
var starterpoke //trainer's pokemon
var startername = "Charizard" //variable for player's pokemon name
var startermove = "Fire Blast" // variable for player's pokemon's move
var Potions = 0; //potions

var Money = 0; //cash
var trainerpoke // trainer's pokemon
var trainerpokename = "" //variable for trainer's pokemon name
var trainerpokemove = "" //variable for trainer's move name
var trainername = "" //variable for trainer's name
var playerhealth = 500;
var enemyhealth = 250;
var playerattack;//sprite for attack image
var enemyattack; //sprite for attack image
var enemytext = ""; //displays enemy hp
var playertext = ""; // displays hp
var playerturn = true //Checks if it is players attack turn
var attackbutton;
var defensebutton;
var potionbutton;
var playerchoice = 0;// 1 - attack, 2- defend 3- potion
var enemychoice = 0; //1- attack 2 - defend
var phase = 0; //phase of attack
var playerdefending = false; //checks if player defending
var enemydefending = false; // checks if enemy defending
var trainer2;
var trainer2defeated = false;
var Lawrence;
var shop;
var bgimagedead;
var trainer3;
var trainer3defeated = false;

//variables
function preload() {
    bgimagedead = loadImage("Background/Dead.png")
    song1 = loadSound('Music/peace2.mp3');
    battlesong1 = loadSound('Music/Magma.mp3');
    bgimage1 = loadImage('Background/pokemongrass2.png');
    bg = bgimage1;
    song2 = loadSound('Music/title.mp3')
     bgimage2 = loadImage('Background/Black.png');
     bgimage3 = loadImage('Background/forestbattle.JPG')
    sfx = loadSound('Music/bang.mp3')
battlesong2 = loadSound('Music/Battle1.mp3');
Lawrence = loadImage ('Trainers/Lawrence.png');
battlesong3 = loadSound('Music/wild.mp3');
}

function setup() {
     createCanvas(2000,1000);
     playercharacter = createSprite(900, 800);
     Idle = playercharacter.addAnimation("idle", "Player/idle/back.png");
     WalkForward = playercharacter.addAnimation("walkforward", "Player/forward/forward1.png", "Player/forward/forward2.png")
     WalkBack = playercharacter.addAnimation("walkback", "Player/back/back1.png", "Player/back/back2.png")
     WalkRight = playercharacter.addAnimation("walkright", "Player/right/right1.png", "Player/right/right2.png","Player/right/right3.png")
     WalkLeft = playercharacter.addAnimation("walkleft", "Player/left/left1.png", "Player/left/left2.png", "Player/left/left3.png")
    WalkForward.frameDelay = 5
     WalkRight.frameDelay = 5
      WalkLeft.frameDelay = 5
       WalkBack.frameDelay = 5
       ////////////////
    charizard = createSprite(500, 500);
    blastoise = createSprite(1000, 500)
    venosaur = createSprite(1500, 500)
    StarterAnim1 = venosaur.addAnimation("starterfront1", "Starters/venosaur/green1.png", "Starters/venosaur/green45.png");
    StarterAnim2 = charizard.addAnimation("starterfront2", "Starters/charizard/fire1.png", "Starters/charizard/fire55.png")
    StarterAnim3 = blastoise.addAnimation("starterfront3", "Starters/blastoise/roar1.png", "Starters/blastoise/roar43.png")
    StarterAnim2.frameDelay = 3
    StarterAnim1.frameDelay = 5
    StarterAnim3.frameDelay = 5
    charizard.mouseActive = true;
    blastoise.mouseActive = true;
    venosaur.mouseActive = true;
    StarterAnim3.frameDelay = 3
    StarterAnim1.frameDelay = 2
    ////////////////////////////////
        house = createSprite(400, 500)
        house2 = createSprite(1500, 400)
        pokecenter= createSprite(800, 500)
        museum = createSprite(400, 200)
        gym = createSprite(1100, 500)

        HouseAnim = house.addAnimation("house", "Barriers/House1.png")
        HouseAnim2 = house2.addAnimation("house2", "Barriers/house2.png")
        PokeAnim = pokecenter.addAnimation("pokecenter", "Barriers/pokecenter.png")
        MuseumAnim = museum.addAnimation("museum", "Barriers/museum.png")
        GymAnim = gym.addAnimation("gym", "Barriers/gym.png")
        playercharacter.depth = 2
        pokecenter.depth = 1
        museum.depth = 1
        house.depth = 1
        house2.depth = 1
        gym.depth = 1
        ///////////////////
        starterpoke = createSprite(650, 750)
        starterpoke.visible = false
        Charizardback = starterpoke.addAnimation("charizard", "Pokemon/Back/Chari/char1.png", "Pokemon/Back/Chari/char52.png")
        Charizardback.frameDelay = 0.5
        BlastoiseBack = starterpoke.addAnimation("blastoise", "Pokemon/Back/Blasto/blast1.png", "Pokemon/Back/Blasto/blast83.png")
        BlastoiseBack.frameDelay = 0.5
        Venusaurback = starterpoke.addAnimation("venusaur", "Pokemon/Back/Venu/venu1.png", "Pokemon/Back/Venu/venu63.png")
        starterpoke.depth = 1
        playerattack = createSprite(1030, 580)
        playerattack.addAnimation("fireattack", "Barriers/Flame/flame1.png", "Barriers/Flame/flame24.png")
        playerattack.addAnimation("waterattack", "Barriers/Water/water1.png", "Barriers/Water/water28.png")
        playerattack.addAnimation("natureattack", "Barriers/GreenAttack/ga1.png", "Barriers/GreenAttack/ga24.png")
        playerattack.visible = false




    ///////////////////
    trainer1 = createSprite(1700,800);
    trainer1anim = trainer1.addAnimation("trainer1", "Characters/trainer1.png")
    trainer1defeated = false;
    trainer1.depth = 1


    trainer2 = createSprite(1700,400);
    trainer2anim = trainer2.addAnimation("trainer2", "Characters/tiki2.png")
    trainer2defeated = false;
    trainer2.depth = 1
    trainer2.visible = false
     Lawrence = createSprite (1070, 500);
        Lawrence.visible = false;
        LawrenceAnim = Lawrence.addAnimation("lawrence", "Trainers/Lawrence2.png")
        Lawrence.depth = 0
        trainer3 = createSprite(1700, 650)
        trainer3anim = trainer3.addAnimation("trainer3", "Characters/police.png")
        trainer3.visible = false
        trainer3.depth = 1;
        trainer3defeated = false
    ////////////////////
    trainerpoke=createSprite(1030, 580)
    Electanim = trainerpoke.addAnimation("electabuzz", "Pokemon/Front/Electraa/elec1.png", "Pokemon/Front/Electraa/elec33.png")
    Noseanim = trainerpoke.addAnimation("nosepass", "Pokemon/Front/Nosepass/nose1.png", "Pokemon/Front/Nosepass/nose69.png")
    Lucanim = trainerpoke.addAnimation("lucario", "Pokemon/Front/Lucario/Lucario1.png", "Pokemon/Front/Lucario/Lucario42.png")
    trainerpoke.depth = 1
    enemyattack = createSprite(700, 800)
    EnemAttack = enemyattack.addAnimation("claw", "Barriers/tackle.png")
    EnemkameAttack = enemyattack.addAnimation("kame", "Barriers/Kame/elec1.png", "Barriers/Kame/elec15.png")
    LightningAttack = enemyattack.addAnimation("electricity", "Barriers/Light/lightning1.png", "Barriers/Light/lightning4.png")
    enemyattack.depth = 2;
    enemyattack.visible = false
    /////
    attackbutton = createSprite(1300, 900)
    defensebutton = createSprite(1500, 900)
    potionbutton = createSprite(1700, 900)
    Attackbuttonanim = attackbutton.addAnimation("attackingbutton", "Barriers/sword.png")
    Defensebuttonanim = defensebutton.addAnimation("defendingbutton", "Barriers/shield.png")
    Potionbuttonanim = potionbutton.addAnimation("potioniningbutton", "Barriers/potion.png")
    attackbutton.visible = false
    defensebutton.visible = false
    potionbutton.visible = false
    attackbutton.mouseActive = true
    defensebutton.mouseActive = true
    potionbutton.mouseActive = true
    shop = createSprite(200, 900)
    shopanim = shop.addAnimation("shop", "Barriers/potion.png")
    }

function draw() {
     background(bg);
///////////////////////////
if ((inbattle == true) && (fight == 2))
{
    Lawrence.visible = true;
}

if ((inbattle == true) && (phase == 0) && (playerturn == true) && (playerhealth > 0) && (enemyhealth > 0)){

    }
    else if ((inbattle == true) && (phase != 0) && (playerturn == true) && (playerhealth > 0) && (enemyhealth > 0)){

    }
    else if ((inbattle == true) && (playerturn == false) && (playerhealth > 0) && (enemyhealth > 0)){

    }
    else if ((inbattle == true) && (fight == 1) && ((playerhealth < 1) || (enemyhealth < 1))){
    Money += 100
    inbattle = false
    currentmap = 1
    speed = 3
    battlesong1.stop()
    fight = 0;
    enemyhealth = 250
    trainer1defeated = true
    playerturn = true

    }
    else if ((inbattle == true) && (fight == 2) && ((playerhealth < 1) || (enemyhealth < 1))){
    Money += 100
    inbattle = false
    currentmap = 1
    speed = 3
    battlesong2.stop()
    fight = 0;
    enemyhealth = 250
    playerturn = true
    trainer2defeated = true
    Lawrence.visible = false

    }
    else if ((inbattle == true) && (fight == 3) && ((playerhealth < 1) || (enemyhealth < 1))){
    Money += 100
    inbattle = false
    currentmap = 1
    speed = 3
    battlesong3.stop()
    fight = 0;
    enemyhealth = 250
    trainer3defeated = true
    playerturn = true

    }
if (playerhealth > 500){
    playerhealth = 500
}

if ((inbattle == true) && (phase == 0) && (playerturn == true) && (attackbutton.mouseIsOver == true) && (attackbutton.mouseIsPressed == true) && (enemydefending == false)){
    phase = 1
    playerattack.visible = true
    s = startername + " used " + startermove + " on " + trainerpokename;
    sfx.play()
    setTimeout(playerattackingfunction, 2500)
    }
    else if ((inbattle == true) && (phase == 0) && (playerturn == true) && (attackbutton.mouseIsOver == true) && (attackbutton.mouseIsPressed == true) && (enemydefending == true)){
    phase = 1
    playerattack.visible = true
    s = startername + " used " + startermove + " on " + trainerpokename;
    sfx.play()
    setTimeout(playerattackingdefense, 2500)
    }
    else if ((inbattle == true) && (phase == 0) && (playerturn == true) && (defensebutton.mouseIsOver == true) && (defensebutton.mouseIsPressed == true)){
    phase = 1

    s = startername + " defended"

    setTimeout(playerdefendingfunction, 2500)
    }
    else if ((inbattle == true) && (phase == 0) && (playerturn == true) && (potionbutton.mouseIsOver == true) && (potionbutton.mouseIsPressed == true) && (Potions > 0)){
    phase = 1


s = startername + " drank potion"

setTimeout(playerpotionfunction, 2500)
}

//add elseif statement for defense and potion button

function playerattackingfunction(){
    enemyhealth -= 30
    playerattack.visible = false
    playerturn = false
    s = ""
    phase = 0


}
function playerattackingdefense(){
    enemyhealth -= 10
    playerattack.visible = false
    playerturn = false
    s = ""
    phase = 0
    enemydefending = false
}


function playerdefendingfunction(){
    playerdefending = true;
    playerturn = false
    s = "";
    phase = 0;
    enemydefending = false
}


function playerpotionfunction(){
    playerhealth += 150
    playerturn = false
    Potions -= 1
    s = "";
    phase = 0;
    enemydefending = false
}


if ((inbattle == true) && (phase == 0) && (playerturn == false)){
phase = 1
s = "Opponent's Turn"
setTimeout(enemyfunction, 2000)

}

function enemyfunction(){
 var values = ["attack", "attack", "defend"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    if ((valueToUse == "attack") && (playerdefending == false)){
        setTimeout(enemyattackingfunction, 2500)
        enemyattack.visible = true;
        s = trainerpokename + " attacked " + startername
        sfx.play()
    }
    else if ((valueToUse == "attack") && (playerdefending == true)){
        setTimeout(enemyattackingdefenderfunction, 2500)
        enemyattack.visible = true;
        s = trainerpokename + " attacked " + startername
        sfx.play()
    }
    else if (valueToUse == "defend"){
        s = trainerpokename + " defended"
        setTimeout(enemydefendingfunction, 2500)

    }

}
function enemyattackingfunction(){
enemyattack.visible = false
 playerhealth -= 30
    playerturn = true
    s = ""
    phase = 0
}
function enemyattackingdefenderfunction(){
enemyattack.visible = false
 playerhealth -= 10
    playerturn = true
    s = ""
    phase = 0
    playerdefending = false
}
function enemydefendingfunction(){
    enemydefending = true
    playerdefending = false
    playerturn = true
    s = ""
    phase = 0
}

////////////////////
textAlign(CENTER);
fill(1000);
textSize(40);
text(i, 430, 900, 1200, 800);

textAlign(LEFT);
fill(1000);
textSize(40);
text(playertext, 200, 900, 1200, 800);

textAlign(LEFT);
fill(1000);
textSize(40);
text(startername, 200, 850, 1200, 800);

textAlign(LEFT);
fill(1000);
textSize(40);
text(enemytext, 200, 300, 1200, 800)

textAlign(LEFT);
fill(1000);
textSize(40);
text(trainerpokename, 200, 250, 1200, 800)

if (currentmap != 0){
textAlign(RIGHT);
fill(1000);
textSize(40);
text("Buckaroos: " + Money, 480, 100, 1200, 800);

textAlign(RIGHT);
fill(1000);
textSize(40);
text("Potions: " + Potions, 480, 150, 1200, 800);

}
     //Battle Sprites
     if ((starter == 1) && (inbattle == true)){
         starterpoke.changeAnimation("charizard")
         startername = "Charizard"
        startermove = "Fire Ball"
        starterpoke.position.x = 650
        starterpoke.position.y = 750
        playerattack.changeAnimation("fireattack")
     }
     else if ((starter == 2) && (inbattle == true)){
          starterpoke.changeAnimation("blastoise")
          startername = "Blastoise"
        startermove = "Water Burst"
         starterpoke.position.x = 750
        starterpoke.position.y = 800
        playerattack.changeAnimation("waterattack")
     }
     else if ((starter == 3) && (inbattle == true)){
        starterpoke.changeAnimation("venusaur")
        startername = "Venusaur"
        startermove = "Natures Fury"
        starterpoke.position.x = 770
        starterpoke.position.y = 800
        playerattack.changeAnimation("natureattack")
     }

    if (inbattle == true){
        starterpoke.visible = true
        trainerpoke.visible = true
        playertext = "Health: " + playerhealth
        enemytext = "Health: " + enemyhealth
        attackbutton.visible = true
        defensebutton.visible = true
        potionbutton.visible = true


    }
    else if (inbattle == false){
        starterpoke.visible = false
        trainerpoke.visible = false
        playertext = ""
        enemytext = ""
        attackbutton.visible = false
        defensebutton.visible = false
        potionbutton.visible = false


    }
    if (fight == 0){
        trainerpokename = ""
        startername = ""
    }
    if ((fight == 1) && (inbattle == true)){
        trainerpokename = "Electabuzz"
        trainerpokemove = "Electric Shockwave"
        trainerpoke.changeAnimation("electabuzz")
        trainername = "Edgy Roleplayer"
        enemyattack.changeAnimation("electricity")

    }
    else if
    ((fight == 2) && (inbattle == true)){
        trainerpokename = "Giant Nosepass"
        trainerpokemove = "Slash"
        trainerpoke.changeAnimation("nosepass")
        trainername = "Lawrence Okolo"
        enemyattack.changeAnimation("claw")
    }
    else if
    ((fight == 3) && (inbattle == true)){
        trainerpokename = "Lucario"
        trainerpokemove = "Kamehameha"
        trainerpoke.changeAnimation("lucario")
        trainername = "Policeman"
        enemyattack.changeAnimation("kame")
    }
     //Battle Sprites end
     //background
     if ((inbattle == false) && (currentmap == 1)){
         bg = bgimage1;
         s = ""

     }
     else if ((inbattle == false) && (currentmap == 0) && (starter == 0)){
    bg = bgimage2;
     }
     else if ((inbattle == true)){
         currentmap = 3;
         bg = bgimage3;
     }
     //background end

     //music

     if ((inbattle == false) && (song1.isPlaying() == false) && (currentmap == 1)) {
        song1.loop();
        song2.stop();

        }
     else if ((inbattle == true) && (song1.isPlaying() == true)){
         song1.stop();
         song2.stop();
     }
     else if ((inbattle == false) && (song2.isPlaying() == false) && (currentmap == 0) && (starter == 0)){
        song2.loop();

     }
     else if ((inbattle == true) && (fight == 1) && (battlesong1.isPlaying() == false)){

         battlesong1.loop()
         song1.stop()
         song2.stop()
     }
     else if ((inbattle == true) && (fight == 2) && (battlesong2.isPlaying() == false)){

         battlesong2.loop()
         song1.stop()
         song2.stop()
     }
     else if ((inbattle == true) && (fight == 3) && (battlesong3.isPlaying() == false)){

         battlesong3.loop()
         song1.stop()
         song2.stop()
     }
     //music end
     if (playerhealth < 1){
     bg = bgimagedead
     }
     //walk
    if ((inbattle == true) || (currentmap == 0) || (playerhealth < 1)){
        playercharacter.visible = false
        speed = 0;
         house.visible = false
        house2.visible = false
        pokecenter.visible = false
        museum.visible = false
        gym.visible = false
        trainer1.visible = false
        trainer2.visible = false
        shop.visible = false
        trainer3.visible = false
    }
    else if (((inbattle == false) && (currentmap == 1)) && (fight == 0)){
        playercharacter.visible = true
        speed = 2;
         house.visible = true
        house2.visible = true
        pokecenter.visible = true
        museum.visible = true
        gym.visible = true
        trainer1.visible = true
        trainer2.visible = true
        trainer3.visible = true
        shop.visible = true
    }
    else if ((inbattle == false) && (currentmap == 1) && (fight == 1) && (trainer1defeated == false)){
        speed = 0;
    }

    if (keyDown ("UP_ARROW")){
        playercharacter.position.y -= speed
        playercharacter.changeAnimation("walkforward");
    }
    else if (keyDown ("RIGHT_ARROW")){
        playercharacter.position.x += speed
        playercharacter.changeAnimation("walkright");
    }
    else if (keyDown ("LEFT_ARROW")){
        playercharacter.position.x -= speed
        playercharacter.changeAnimation("walkleft");
    }
    else if (keyDown ("DOWN_ARROW")){
        playercharacter.position.y += speed
        playercharacter.changeAnimation("walkback");
    }
    else if (keyWentUp ("UP_ARROW")){

        playercharacter.changeAnimation("idle");
    }
    else if (keyWentUp ("RIGHT_ARROW")){

        playercharacter.changeAnimation("idle");
    }
    else if (keyWentUp ("LEFT_ARROW")){

        playercharacter.changeAnimation("idle");
    }
    else if (keyWentUp ("DOWN_ARROW")){

        playercharacter.changeAnimation("idle");
    }

 if ((playercharacter.animation == WalkForward) && (playercharacter.position.y <= 20)){
   playercharacter.position.y += 6;

}
else if ((playercharacter.animation == WalkBack) && (playercharacter.position.y >= 980)){
   playercharacter.position.y -= 6;

}
else if ((playercharacter.animation == WalkRight) && (playercharacter.position.x >= 1980)){
   playercharacter.position.x -= 6;

}
else if ((playercharacter.animation == WalkLeft) && (playercharacter.position.x <= 20)){
   playercharacter.position.x += 6;

}
else if ((playercharacter.animation == WalkForward) && (((((playercharacter.collide(pokecenter)) || (playercharacter.collide(house)) || (playercharacter.collide(house2)) || (playercharacter.collide(museum)) || (playercharacter.collide(gym)))))))
{
    playercharacter.position.y += 6;

}
else if ((playercharacter.animation == WalkBack) && (((((playercharacter.collide(pokecenter)) || (playercharacter.collide(house)) || (playercharacter.collide(house2)) || (playercharacter.collide(museum)) || (playercharacter.collide(gym)))))))
{
    playercharacter.position.y -= 6;

}
else if ((playercharacter.animation == WalkRight) && (((((playercharacter.collide(pokecenter)) || (playercharacter.collide(house)) || (playercharacter.collide(house2)) || (playercharacter.collide(museum)) || (playercharacter.collide(gym)))))))
{
    playercharacter.position.x -= 6;

}
else if ((playercharacter.animation == WalkLeft) && (((((playercharacter.collide(pokecenter)) || (playercharacter.collide(house)) || (playercharacter.collide(house2)) || (playercharacter.collide(museum)) || (playercharacter.collide(gym)))))))
{
    playercharacter.position.x += 6;

}
else if ((playercharacter.collide(trainer1)) && (trainer1defeated == false) && (inbattle == false)){

    i = "This will be too easy. You're just a pathetic wannabe...";

    fight = 1;
    setTimeout(trainer1start, 3000)
}
else if ((playercharacter.collide(trainer2)) && (trainer2defeated == false) && (inbattle == false)){

    i = "I, Lawrence, will cross you up!";
    speed = 0;
    fight = 2;
    setTimeout(trainer1start, 3000)
}
else if ((playercharacter.collide(trainer3)) && (trainer3defeated == false) && (inbattle == false)){

    i = "I was planning to rob that tiki. Looks like youre getting in my way!";
    speed = 0;
    fight = 3;
    setTimeout(trainer1start, 3000)
}

else if ((playercharacter.collide(shop)) && (Money > 99) && (inbattle == false)){

    Money -= 100
    Potions += 1
}







     //walk end
     //Collisions

     //Collisions End
function trainer1start(){

    inbattle = true;
    i = ""
}


     //Starter choose
textAlign(CENTER);
fill(1000);
textSize(40);
introtext = text(s, 430, 100, 1200, 800);



if ((charizard.mouseIsPressed == true) && (charizard.mouseIsOver == true)){
starter = 1;
currentmap = 1;
charizard.remove()
blastoise.remove()
venosaur.remove()
}
else if ((blastoise.mouseIsPressed == true) && (blastoise.mouseIsOver == true)){
starter = 2;
currentmap = 1;
charizard.remove()
blastoise.remove()
venosaur.remove()
}
else if ((venosaur.mouseIsPressed == true) && (venosaur.mouseIsOver == true)){
starter = 3;
currentmap = 1;
charizard.remove()
blastoise.remove()
venosaur.remove()
}

     //starter end


drawSprites();
}





//https://www.pkparaiso.com/xy/sprites_pokemon.php
//https://archives.bulbagarden.net/wiki/Category:Generation_V_Trainer_sprites
//https://www.spriters-resource.com/game_boy_gbc/pokemongoldsilver/
//https://www140.lunapic.com/editor/
//https://www.iloveimg.com/resize-image/resize-png
