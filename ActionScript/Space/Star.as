// Star

package {
	import flash.display.Shape;

	public class Star extends Shape {
		private var swidth:int;
		private var sheight:int;
		private var speed:int;
		
		public function Star(width:int, height:int):void {
			swidth = width;
			sheight = height;
			
			x = Math.random() * swidth;
			y = Math.random() * sheight;
			speed = Math.random() * 10 + 1;
			
			graphics.beginFill(Math.random() * 0xffffff);
			graphics.drawCircle(0, 0, Math.random() * 4 + 1);
			graphics.endFill();
		}
		
		// Move star
		
		public function move():void {
			x += speed;
	
			if (x > swidth) {
				x = 10;
				y = Math.random() * sheight;
				speed = Math.random() * 10 + 1;
			}	
		}
	}
} 