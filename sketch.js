var dog,happyDog,database,foodS,foodStock,mydataBase;
var Bottle,FoodS;

function preload()
{
  dogImage1=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/dogImg1.png")
  bottle=loadImage("images/Milk.png")
}

function setup() 
{
  createCanvas(500, 500);
  
  mydataBase=firebase.database()

  dog=createSprite(260,260,20,20);
  dog.addImage(dogImage1)
  dog.scale=0.15

  foodStock=mydataBase.ref("Food")
  foodStock.on("value",readStock)

 
  
}


function draw() 
{  

 background(46, 139, 87)

 fill("Black")
 textSize(15)
  text("Note: Press Up Arrow key to feed the dog milk!",100,50)
  drawSprites();
  
  



  if(keyWentDown(UP_ARROW))
  {
    
    Bottle=createSprite(0,Math.round(random(20,370)),10,10)
    Bottle.addImage(bottle)
    Bottle.scale=0.1
    Bottle.velocityX=2;
    
    writeStock()
    {
      dog.addImage(dogImage2);
    }
    }

  if(keyWentDown(DOWN_ARROW))
  {
    dog.addImage(dogImage1)
  }
}


  function readStock(data)
  {
   FoodS=data.val()
  }

  function writeStock()
  {

  }