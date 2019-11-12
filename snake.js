class Snake {
  
  constructor(c_r, c_g, c_b , c_x, c_y, c_head) { //생성자
  	this.body = []; //몸체를 어레이로 만듬
    this.start_vector = random(1,10);
    if(this.start_vector % 2 !== 0){
        this.start_vector++;
    }
    
    
    this.body[0] = createVector( c_x, c_y ); 
    //첫번째는 위치를 정함
    this.xdir = 0; //x축방향
    this.ydir = 0; //y축 방향
    this.len = 0; //몸체 수량
    this.color_r = c_r;
    this.color_g = c_g;
    this.color_b = c_b;
    
    for(let i=1; i<c_head; i++){
        this.grow();
        this.body[i].x +=  1;
        //this.body[i].y += 10;
    }
    
    
    
  
  }
  
  
  setDir(x, y) {//움직임 결졍하는거
  	this.xdir = x;
    this.ydir = y;
  }
  
  grow() {
  	let head = this.body[this.body.length-1].copy();
    // this.len++;
    this.body.push(head);
  }
  
  un_grow() {
      this.body.splice(0,1);
  }
  
  new_game(c_r, c_g, c_b , c_x, c_y, c_head){
  this.start_vector = random(1,10);
    if(this.start_vector % 2 !== 0){
        this.start_vector++;
    }
    
    this.body[0] = createVector( c_x, c_y ); 
    //첫번째는 위치를 정함
    this.xdir = 0; //x축방향
    this.ydir = 0; //y축 방향
    this.len = 0; //몸체 수량
    this.color_r = c_r;
    this.color_g = c_g;
    this.color_b = c_b;
    
    for(let i=1; i<c_head; i++){
     //   this.grow();
        this.body[i].x +=  1;
        //this.body[i].y += 10;
    }
    
    
     
    
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) { //x,y 좌표값 검출해줌
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  //----------------------------------------------
  eat_snake(pos) { //x,y 좌표값 검출해줌
  	let x = this.body[0].x;
    let y = this.body[0].y;
    if(x == pos.x && y == pos.y) {
            return true;
    }
    return false;
  }
  
  
//-----------------------
    update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {   
      let ref = 1 / this.body.length;
      
       fill(  this.color_r * (  i * ref ),
              this.color_g * (  i * ref ),
              this.color_b * ( i * ref  )
       
       );
      
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
      //print(this.body[i].y);
      
    }
  }

}