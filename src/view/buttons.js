




import * as PIXI from 'pixi.js'
import {increaseGravity, decreaseGravity} from './../model/shapes'
import { increaseShapesPerSec, decreaseShapesPerSec } from './gameLoop';


const gravityVar = new PIXI.Text('');
gravityVar.x = 570;
gravityVar.y = 725;


const shapesPerSecVar = new PIXI.Text('');
shapesPerSecVar.x = 145;
shapesPerSecVar.y = 725;




function addText(x, y ,sumbol){
   const text = new PIXI.Text(sumbol);
   text.x = x;
   text.y = y;
   return text;
}


function button(x, y, width, height, arc, onclick, text ){
   const rectangle = new PIXI.Graphics();
   rectangle.lineStyle(2, 0x650A5A, 1);
   rectangle.beginFill(0xFFFFFF);
   rectangle.drawRoundedRect(x, y, width, height, arc)
   rectangle.endFill();

   rectangle.addChild(text);

   rectangle.interactive = true;
   rectangle.buttonMode = true;
   rectangle.on('mousedown', () => {onclick()});

   return rectangle;
}



const buttonsWithInfo = new PIXI.Container();
buttonsWithInfo.addChild(button(10,720, 60, 40, 20, decreaseShapesPerSec, addText(30,725,'-') ))
buttonsWithInfo.addChild(button(80,720, 60, 40, 20, increaseShapesPerSec, addText(100,725,'+') ))
buttonsWithInfo.addChild(shapesPerSecVar)

buttonsWithInfo.addChild(button(430,720, 60, 40, 20, decreaseGravity, addText(450,725,'-') ))
buttonsWithInfo.addChild(button(500,720, 60, 40, 20, increaseGravity, addText(520,725,'+') ))
buttonsWithInfo.addChild(gravityVar)



export {buttonsWithInfo, gravityVar, shapesPerSecVar}

