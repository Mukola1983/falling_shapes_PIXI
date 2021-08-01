

import * as PIXI from 'pixi.js'
import { Utils } from '../model/utils';
import {buttonsWithInfo} from './buttons'


function rect(x, y, width, height){
   const rectangle = new PIXI.Graphics();
   rectangle.beginFill(0xFEEB77);     
   rectangle.drawRect(x, y, width, height);
   rectangle.endFill();

   return rectangle;
}




const BottomUi = new PIXI.Container();
BottomUi.addChild(rect(0, 700, Utils.appWidth, 100))
BottomUi.addChild(buttonsWithInfo)
BottomUi.zIndex = 15



export {BottomUi}

