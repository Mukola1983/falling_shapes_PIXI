
class Utils {

   static randomNum(min, max) {
      return Math.round(Math.random() * (max - min) + min);
   }

   static RGBAtoHEX(color){
      const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
      const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
      return hex;
   }

   static randColor(){
      return Math.floor(Math.random()*16777215).toString(16)
   }

   static appWidth = 800;
   static appHeight = 800;

   static curentShapeString = 'Number of curent shapes: ';
   static areaOcupiedString = 'Area Ocupied: ';
   static shapesPerSecString = 'Shapes per second: ';
   static gravityString = 'Gravity value: ';
}

export {Utils}