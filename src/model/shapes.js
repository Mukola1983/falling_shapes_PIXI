
import * as PIXI from 'pixi.js'
import { Utils } from './utils.js';

let gravity = 1;

function increaseGravity(){
   gravity++
}
function decreaseGravity(){
   if(gravity >1){
      gravity--
   }
}


class Shape  {
	constructor( x, y, numOfSides, width, height, name){
      this.graphic = new PIXI.Graphics();
      this.graphic.x = x;
      this.graphic.y = y;
      this.graphic.numOfSides = numOfSides ;
      this.width = width;
      this.height =  height;
      this.graphic.name =  name;
      this.graphic.speed = gravity;
      this.graphic.delete = false;
      this.graphic.color = Utils.randColor();
      this.graphic.shapeOnScreen = false;

      this.graphic.interactive = true;
      this.graphic.buttonMode = true;
      this.graphic.on('pointerdown', () => {this.graphic.delete = true;});
            
	}
}

class Rect extends Shape {
   draw(){
      this.graphic.beginFill(`0x` + `${this.graphic.color}`);
    
      
      this.graphic.drawRect(0, 0, this.width, this.height);
      this.graphic.endFill();

      return this.graphic;
   } 
}

class Poligon extends Shape {

   draw(){
      this.graphic.beginFill(`0x` + `${this.graphic.color}`);
      this.graphic.moveTo (0 + this.width * Math.cos(0), 0 +  this.width *  Math.sin(0));
      for (var i = 1; i <= this.graphic.numOfSides;i += 1) {
         this.graphic.lineTo (0 + this.width * Math.cos(i * 2 * Math.PI / this.graphic.numOfSides), 0 + this.width  * Math.sin(i * 2 * Math.PI / this.graphic.numOfSides));
      }
      this.graphic.endFill();

      return this.graphic;
   } 
}

class Circle extends Shape {
   draw(){
      this.graphic.beginFill(`0x` + `${this.graphic.color}`);
      this.graphic.drawCircle(0, 0, this.width);
      this.graphic.endFill();

      return this.graphic;
   } 
}



function randShape(x, y){
   let rand = Utils.randomNum(0, 4);
	let shape;
	if(rand === 0){
		return shape = new Poligon(
         x ||  Utils.randomNum(0, Utils.appWidth-100),
         y || -150,
         3,
           Utils.randomNum(30, 150),
           Utils.randomNum(30, 150),
           'triangle'
      );
	}
   if(rand === 1){
		return shape = new Rect(
         x || Utils.randomNum(0, Utils.appWidth-100),
         y ||-150,
          4,
          Utils.randomNum(30, 150),
          Utils.randomNum(30, 150),
          'rect'
      );
	}
   if(rand === 2){
		return shape = new Poligon(
         x || Utils.randomNum(0, Utils.appWidth-100),
         y ||-150,
          5,
          Utils.randomNum(30, 150),
          Utils.randomNum(30, 150),
          'pentagon'
      );
	}
   if(rand === 3){
		return shape = new Poligon(
         x || Utils.randomNum(0, Utils.appWidth-100),
         y ||-150,
          6,
          Utils.randomNum(30, 150),
          Utils.randomNum(30, 150),
          'hexagon'
      );
	}
   if(rand === 4){
		return shape = new Circle(
         x || Utils.randomNum(0, Utils.appWidth-100),
         y ||-150,
          4,
          Utils.randomNum(30, 150),
          Utils.randomNum(30, 150),
          'circle'
      );
	}

	return shape;
}
//=================================================================================


// class Shape_02 extends  PIXI.Graphics {
// 	constructor(x = Utils.randomNum(0, Utils.appWidth-100),
//                y = 150,
//                speed = 2,
//                width = Utils.randomNum(30, 150),
//                height = Utils.randomNum(30, 150),
//                name = 'shape',
//       ){
//          super();
//          this.x = x;
//          this.y = y;
//          this.delete = false;
//          this.speed = speed;
//          this.color = Utils.randColor();
//          this.width = width;
//          this.height = height;
//          this.name = name;
//          this.shapeOnScreen = false;

        
// 	}
// }

// class Poligon_02 extends Shape_02 {
//    constructor(
//    ){
//       super();
//       this.beginFill(`0x` + `${this.color}`);
    
//       this.drawRect(0, 0, Utils.randomNum(30, 150),Utils.randomNum(30, 150));
//       this.endFill();
//       this.zIndex = 10;

//       this.interactive = true;
//       this.buttonMode = true;
//       this.on('mousedown', () => {this.delete = true;});

//    }
// }




export { randShape, increaseGravity, decreaseGravity, gravity}





