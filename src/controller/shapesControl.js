
import { Utils } from '../model/utils.js';

function drawShapes(arr){
   for(let i=0; i < arr.length; i++){
      arr[i].y +=arr[i].speed;
     if(arr[i].y>Utils.appHeight-100){
      arr[i].delete = true;
     }
     if(arr[i].delete){
        
      arr.splice(i, 1);
     }
   }
}


function countShapes(arr){
   let numShapes
	if(arr.length > 0){
		for(let i=0;i<arr.length; i++){

			if(arr[i].y+arr[i].height-40 > 0){
				arr[i].onScreen = true;
			}
			const shapeOnScreen = arr.reduce(function(num, item) {
					if(item.onScreen){
						return num += 1;
					}else{
						return num;
					}
			}, 0 );

         numShapes = shapeOnScreen-1
		}
	}
   return numShapes;
}


export {drawShapes, countShapes};