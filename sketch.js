var dog, happyDog, database, foodS, foodStock, dogImg, dogImg1

function preload()
{
  dogImg = loadIamge("images/dogImg.png");
  dogImg1 = loadIamge("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = creteSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('food');
  foodStock.on("20", readStock)
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  food:x
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
}Food:x

database.ref("/").update({

})