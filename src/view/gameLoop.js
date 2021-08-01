
import * as PIXI from 'pixi.js'

import { Utils } from '../model/utils';
import {randShape, gravity} from './../model/shapes'
import { drawShapes, countShapes } from '../controller/shapesControl';
import { UpperUi, curentShapes } from './upperUI';
import { ContainerForShapes} from './containerForShapes';
import { BottomUi } from './bottomUi';
import {gravityVar, shapesPerSecVar} from './buttons'

const app = new PIXI.Application({
   width: Utils.appWidth,
   height: Utils.appHeight, 
   
   backgroundColor: 0xFFFFFF, 
   resolution: window.devicePixelRatio || 1,
   
});

app.ticker.add(gameLoop)

app.stage.sortableChildren = true;
app.stage.hitArea = app.renderer.screen;

app.stage.addChild(UpperUi)
app.stage.addChild(ContainerForShapes)
app.stage.addChild(BottomUi)


function addShape(x, y){
   const shape = randShape(x, y);
   ContainerForShapes.addChild(shape.draw())
}

let shapesPerSec = 1;
function increaseShapesPerSec(){
   shapesPerSec++;
}
function decreaseShapesPerSec(){
   if(shapesPerSec > 1){
      shapesPerSec--;
   }
}
const sg = randShape()
console.log(sg.graphic)

function gameLoop(delta){
   if(!start){
    getTimer(delta, 60)
   }
   if(start){
      for(let i = 0; i < shapesPerSec; i++){
         addShape();
      }
      start = false; 
   }
   // counting shapes on screen
   curentShapes.text =`${Utils.curentShapeString}`+`${countShapes(ContainerForShapes.children)}`;
   //shapes per second update info
   shapesPerSecVar.text =`${Utils.shapesPerSecString}`+`${shapesPerSec}`;
   //gravity update info
   gravityVar.text =`${Utils.gravityString}`+`${gravity}`;
   
   // Move and delete shapes 
   drawShapes(ContainerForShapes.children);
   
}

// timer =================
let start = false;
let timer = 0;

function getTimer(delta, maxTime){
   timer = timer + delta;
   if(timer > maxTime){
      start = true;
      timer = 0;
   }
}
// timer =================
export {app, addShape, increaseShapesPerSec, decreaseShapesPerSec}
