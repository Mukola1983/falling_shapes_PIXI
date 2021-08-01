


import * as PIXI from 'pixi.js'
import { Utils } from './../model/utils';
import {addShape} from './gameLoop'


const rectangle = new PIXI.Graphics();
rectangle.lineStyle(2, 0xFEEB77, 1);
rectangle.beginFill(0xFFFFFF);
      
rectangle.drawRect(0, 0, Utils.appWidth, 600);
rectangle.speed = 0;
rectangle.shapeOnScreen = false;
rectangle.endFill();

rectangle.interactive = true;
rectangle.buttonMode = true;
rectangle.on('pointerdown',(e) => {
   addShape(e.data.global.x-20,e.data.global.y-100 )
});




const ContainerForShapes = new PIXI.Container();
ContainerForShapes.addChild(rectangle)
ContainerForShapes.y = 100
ContainerForShapes.zIndex = 0



export {ContainerForShapes}

