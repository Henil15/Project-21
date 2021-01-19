var canvas;
var music;
var box1 , surface1 , surface3 , surface2;
var box1

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   box1 = createSprite(70,590,120,20);
   box1.shapeColor = "lightgreen"

   surface1 = createSprite(290,590,120,20);
   surface1.shapeColor = "lightblue"

   surface3 = createSprite(510,590,120,20);
   surface3.shapeColor = "yellow"

   surface2 = createSprite(730,590,120,20);
   surface2.shapeColor = "orange"

  box1 = createSprite(random(70,730,));
  box1.shapeColor = "white"
  box1.scale = 0.2
  box1.velocityY = 5

}

function draw() {
    background(rgb(169,169,169));
console.log("Iam checking")
    if(box1.isTouching(box1)){
        box1.shapeColor = "lightgreen"
        box1.x = 200
        box1.y = 300
        box1.velocityY = 0
    }

    if(box1.isTouching(surface1)){
        box1.shapeColor = "lightblue"
        box1.x = 200
        box1.y = 300
        box1.velocityY = 0
    }

        if(box1.isTouching(surface3)){
            box1.shapeColor = "yellow"
            box1.x = 200
            box1.y = 300
            box1.velocityY = 0
        }

            if(box1.isTouching(surface2)){
                box1.shapeColor = "orange"
                box1.x = 200
                box1.y = 300
                box1.velocityY = 0
            }

            function bounceoff(box1,surface1){
                if (box1.x - surface1.x < surface1.width/2 + box1.width/2
                    && surface1.x - box1.x < surface1.width/2 + box1.width/2) {
                  box1.velocityX = box1.velocityX * (-1);
                  surface1.velocityX = surface1.velocityX * (-1);
                  box1.shapeColor = "lightgreen"
                }
                }
                if (box1.y - surface1.y < surface1.height/2 + box1.height/2
                  && surface1.y - box1.y < surface1.height/2 + box1.height/2){
                  box1.velocityY = box1.velocityY * (-1);
                  surface1.velocityY = surface1.velocityY * (-1);
                  box1.shapeColor = "lightgreen"
                }else{
                    surface2.shapeColor - "lightblue"
                }
            

            function isTouching(box1,surface1){
                if (box1.x - surface1.x < surface1.width/2 + box1.width/2
                    && surface1.x - box1.x < surface1.width/2 + box1.width/2
                    && box1.y - surface1.y < surface1.height/2 + box1.height/2
                    && surface1.y - box1.y < surface1.height/2 + box1.height/2) {
                  return true
                }
                else {
                  return false
                }
            }

         surface1.debug = true

            bounceoff(box1,surface1)
      drawSprites();
  
}
