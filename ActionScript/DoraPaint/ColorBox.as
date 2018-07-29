// Color Box

package {
	import flash.display.Sprite;

	public class ColorBox extends Sprite {
		public var color:Number;
		
		public function ColorBox(cl:Number):void {
			color = cl;
			graphics.lineStyle(1, 0);
			graphics.beginFill(color);
			graphics.drawRect(0, 0, 25, 25);
			graphics.endFill();	
		}
	}
}