// Coding Train 
// https://www.youtube.com/watch?v=AaGK-fj-BAM

let snake;
let snake2;

let rez = 20;
let food;
let w;
let h;

let game_status=false;
let game_over = 0;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  
 snake = new Snake(255,100,150, floor(h/3), floor(w/8) ,5);
 snake2 = new Snake(155,200,150, floor(h/7), floor(w/2) ,5);
  

  
}


function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  }
  //-----------------------------------
  // A = 65, W=87 , s=83 , d=68
  else if(keyCode === 65) {
    snake2.setDir(-1, 0);
  } else if (keyCode === 68) {
  	snake2.setDir(1, 0);
  } else if (keyCode === 83) {
  	snake2.setDir(0, 1);
  } else if (keyCode === 87) {
  	snake2.setDir(0, -1);
  }
  
  else if(keyCode === 13){ //enter 입력한경우
    if(game_status == false || game_over != 0 ){ 
      snake = new Snake(255,100,150, floor(h/3), floor(w/8) ,5);
      snake2 = new Snake(155,200,150, floor(h/7), floor(w/2) ,5);
      game_status = false; //게임 중단
      game_over = 0;
    }
  }
  
  
  
  else if (keyCode === 32) {
  	  game_status = !game_status;
    snake.setDir(1, 0);
    snake2.setDir(1, 0);
  }
  
  //print(keyCode);
  
  
  //-----------------------------------
  

}

function draw() {
  scale(rez); //스케일을 낮춤 (그리드)
  
  
  if(game_over != 0){ //게임 오버일시 처리
      background(100);
    
      snake.show();
      snake2.show()
    fill(255,0,0);
    
    text("GAME OVER..",3,10);
      
      if(game_over == 1 || game_over == 3){
          fill(0,255,0);
          text("녹색이 승!",11,10);
      }else{
          fill(255,0,255);
          text("분홍이 승!",11,10);
      }
    
      fill(255,255,255);
      switch(game_over){
        case 1: text("분홍이가 벽 또는 자기자신에 충격을 받았어요",3,11);
        break;
        case 2: text("녹색이가 벽 또는 자기자신에 충격을 받았어요",3,11);
        break;
        case 3: text("분홍이 에너지가 부족해요!",3,11);
        break;
        case 4: text("녹색이 에너지가 부족해요!",3,11);
        break;
        
      }
    text("ENTER 를 눌러 게임을 재시작 하세요!",3,12);
    
    ;
    
    
  }
  else{ 
      background(220);
      text_view();

      //--------------------------
      let snake_last = createVector( //위치 끝값 가지고오기
                        snake.body[snake.body.length-1].x ,
                        snake.body[snake.body.length-1].y);


      let snake_last2 = createVector( //위치 끝값 가지고오기
                        snake2.body[snake2.body.length-1].x ,
                        snake2.body[snake2.body.length-1].y);

       if (snake.eat_snake(snake_last2)) {
          snake2.grow(); //증가
          snake.un_grow(); //감소
          print("snake(녹색) 가먹음");
       }

      if (snake2.eat_snake(snake_last)) {
          snake.grow(); //증가
          snake2.un_grow(); //감소
          print("snake(분홍) 가먹음");

      }


      //----------------------------
     
    
      if(game_status == true){
          snake.update();
          snake2.update();

      }


      snake.show();
      snake2.show();  

      /*
      if (snake.endGame()) {
        print("END GAME");
        background(255, 0, 0); 
        noLoop();
      }*/
      let game_over_cach = endGame_over();
      //let game_over_cach = 0;
      if(game_over_cach != 0){
          game_over = game_over_cach;
      }
  }    
  
}

function endGame_over(){ //게임이 죽는경우
   if (snake.endGame()) {
      print("분홍이가 자살함"); 
      return 1;
   }
  else if(snake2.endGame()){
      print("녹색이가 자살함"); 
      return 2;
  }
  else if(snake.body.length-1 == 0){
      print("분홍이가 에너지 다 떨어짐"); 
      return 3;
    
  }
  else if(snake2.body.length-1 == 0){
      print("녹색이가 에너지 다 떨어짐");
      return 4;
  }
  return 0;
  
}

function text_view(){
   textSize(1);
   fill(0, 0, 0);
   text('게임상태: ' + game_status , 12, 1);
   if(game_status == false){
     text('(space 버튼을 클릭하면 게임시작)' , 8, 2);
       
   }
   fill(255,100,150);
  
    let s1_sum = snake.body.length-1;
    let s2_sum = snake2.body.length-1;
  
  
   text('분홍이 생명: ' + s1_sum  , 0, 1);
   fill(155,200,150);
   text('녹색이 생명: ' + s2_sum  , 0, 2);
  
  
  
}
