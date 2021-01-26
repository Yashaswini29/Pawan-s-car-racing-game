var track, trackimg;
var scene, sceneimg;
var startx, starty, angle=0, increment=10, radius=150;

function preload(){
  trackimg = loadImage("track (2).png")
  sceneimg = loadImage("background.jpg")
  car1img = loadImage("car1.png")
  car2img = loadImage("car2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  /*
  track = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  track.addImage(trackimg)
  track.scale = 2
*/

//image(trackimg, displayWidth/2,displayHeight/2, displayWidth*3, displayHeight*2)
track = createSprite(displayWidth/2, displayHeight/2, displayWidth*3, displayHeight*2)
track.addImage(trackimg)
track.scale = 2.5

startx=displayWidth/2-200
starty = displayHeight-135
car1 = createSprite(startx, starty)
car1.addImage(car1img)
//to rotate the car towards the direction of its movement
car1.rotateToDirection=true;

car1.scale = 0.2;
car2 = createSprite(displayWidth/2-200, displayHeight-40)
car2.addImage(car2img)
car2.scale = 0.2;

}

function draw() {
  //background(sceneimg);
  imageMode(CENTER)
image(sceneimg, displayWidth/2,displayHeight/2, displayWidth*3, displayHeight*2)
  if(keyDown("up")){
    car1.velocityX = 3
  }
  if(keyDown("down")){
    car1.velocityX = -2
  }
  if(keyDown("w")){
    car2.velocityX = 2
  }
  if(keyDown("s")){
    car2.velocityX = -2
  }
  if(car1.x>1010){
    car1.setSpeedAndDirection(3,car1.getDirection()-0.6);
  }
  if(car1.x<520){
    car1.setSpeedAndDirection(3,car1.getDirection()-0.6);
  }
  camera.position.x = car1.x
  camera.position.y = car1.y  

  drawSprites();
  
  text("x: " + mouseX + "y: " + mouseY,mouseX, mouseY);  
}

