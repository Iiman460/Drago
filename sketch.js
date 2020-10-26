//Create variables here
var database;
var foodstock;
var foods;
var dog,dogImage,dogHappy;
var count;
function preload()
{
  //load images here
 dogImage = loadImage("images/dogimg.png");
 dogHappy = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  console.log(firebase);
  foodstock = database.ref('Food');
  foodstock.on("value",Readstock);
dog = createSprite(400,400);
dog.addImage(dogImage);
dog.scale = 0.5;
}


function draw() {  
  background(46, 139, 87);

 
  drawSprites();
  //add styles here
  fill("White");
  text("Note: Press UP_ARROW key to Feed Drago Milk!",250,100);
  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(dogHappy);
    console.log(foods);
  }
  text("Food remaining: "+count,250,200);
}
function Readstock(data){
  foodS=data.val();
  console.log(foods);
}
function writeStocks(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  });
 
  count = x;
}


