//Create variables here
var dog,foodStock,foodS,database,dogIMG;
var happyDogIMG;

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  

  
  happyDogIMG = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500)

 
   dog = createSprite(260,250,20,20)
  
  

  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
 

  
}


function draw() {  
  background(46,139,87);

  
  dog.addImage(dogIMG);
  dogIMG.resize(185,198)
 
 

    
  if(foodS!== undefined){

           
    
    
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      
    dog.addImage(happyDogIMG)
    happyDogIMG.resize(230,180)


    }
    



    
    

  
  //add styles here
  fill("black")
  textSize(18);
  stroke("blue")
    text("Food Remaining " + foodS,177,140)
    textSize(23)
fill("black");
  text("Note : Click the UP Arrow to feed Drago milk",25,50)
  
      
  }
  

drawSprites();

}
 


function readStock(data){
   foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
      x = x - 1
  }
  
  

   database.ref('/').update({

      Food: x

   })

   

}

