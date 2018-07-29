
// Size Box

package {
	import flash.display.Sprite;

	public class SizeBox extends Sprite {
		public var size:int;
		
		public function SizeBox(sz:int) {
			size = sz * 2 + 1;

			graphics.beginFill(0, 0);
			graphics.drawRect(0, 0, 25, 25);
			graphics.endFill();

			graphics.beginFill(0xffffff);
			graphics.drawCircle(12, 12, size);
			graphics.endFill();	
		}
	}
}