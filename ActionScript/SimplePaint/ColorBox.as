
// Color Box

package {
	import flash.display.Sprite;

	public class ColorBox extends Sprite {
		public var color:uint;
		
		public function ColorBox(cl:uint) {
			color = cl;
			
			graphics.lineStyle(1, 0x333333);
			graphics.beginFill(color);
			graphics.drawRect(0, 0, 25, 25);
			graphics.endFill();	
		}
	}
}