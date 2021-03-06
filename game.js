// class Game{
//     constructor(){

//     }
//     getState(){
//         var gamestateref = database.ref('gameState');
//         gamestateref.on("value",function(data){
//             gameState = data.val();
        
//         })
//     }
//     update(state){
//         database.ref('/').update({
//             gameState:state
//         })

//     }
//     async start(){
//         if(gameState === 0){
//             Player = new player();
//             var pcref = await database.ref('playerCount').once("value");
//             if(pcref.exists()){
//                 playerCount = pcref.val();
//                 Player.getCount();
//             }
            
//             form = new Form();
//             form.display();
//         }
//         car1 = createSprite(100,200);
//         car2 = createSprite(300,200);
//         car3 = createSprite(500,200);
//         car4 = createSprite(700,200);
//         cars = [car1,car2,car3,car4];
//     }
//     play(){
//         form.hide();
//         //textSize(30);
//         //text("Game Start",120,100);
//         player.getPlayerinfo();
//         if(allplayers !== undefined){
//             var index = 0;
//             var x = 0;
//             var y = 0;

//             //var displayposition = 130;
//             for(var plr in allplayers){
//                 /*if(plr === "player"+Player.index)
//                     fill("red");
//                 else
//                     fill("black");
//                 displayposition = displayposition + 20;
//                 textSize(15);
//                 text(allplayers[plr].name + ":"+allplayers[plr].distance,120,displayposition);*/
                
//                 index = index + 1;
//                 x = x + 200;
                
//                 y = displayHeight - allplayers[plr].distance;
//                 cars[index-1].x = x;
//                 console.log("value"+x);
//                 cars[index-1].y = y;

//              if(index === Player.index){
//                 cars[index-1].shapeColor = "red";
//                 camera.position.x = displayWidth/2;
//                 camera.position.y = cars[index-1].y;
//              }
              
//             }
//         }
//         if(keyIsDown(UP_ARROW)&& Player.index !== null){
//             Player.distance += 50;
//             Player.update();

//         }
//         drawSprites();
//     }

// }
class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        Player = new player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          Player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      cars = [car1, car2, car3, car4];
    }
  
    play(){
      //Form.hide();
        form.button.hide();
        form.input.hide();
        
        form.greeting.hide();
      player.getPlayerinfo();
      
      if(allPlayers !== undefined){
        background("#c68767");

        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  


        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === Player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && Player.index !== null){
        Player.distance +=10
        Player.update();
      }
      if(Player.distance > 3860){
        gameState = 2;
      }
  
      drawSprites();
    }
    end(){
      console.log("end");
    }
  }