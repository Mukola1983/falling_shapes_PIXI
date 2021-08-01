
import * as PIXI from 'pixi.js'
import { Utils } from './../model/utils';


function rect(x, y, width, height){
   const rectangle = new PIXI.Graphics();
   rectangle.beginFill(0xFEEB77);    
   rectangle.drawRect(x, y, width, height);
   rectangle.speed = 0;
   rectangle.endFill();

   return rectangle;
}

const curentShapes = new PIXI.Text('');
curentShapes.x = 10;
curentShapes.y = 50;


const areaOcupiedString = `${Utils.areaOcupiedString}`;
const areaOcupied = new PIXI.Text(`${areaOcupiedString}`);
areaOcupied.x = 400;
areaOcupied.y = 50;


const UpperUi = new PIXI.Container();
UpperUi.addChild(rect(0, 0, Utils.appWidth, 100))
UpperUi.addChild(curentShapes)
UpperUi.addChild(areaOcupied)
UpperUi.zIndex = 15



export {UpperUi, curentShapes}

