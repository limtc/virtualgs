// The Snow ( object for Snow.as )

package {
	import flash.display.*;	
	
	public class TheSnow extends Sprite {
		private var speed: int;
		private var slide: int;
		private var size: int;
		 	
		public function TheSnow(swidth:int, sheight:int):void {
			size = Math.random() * 6;
			x = Math.random() * swidth;
			y = Math.random() * sheight;
			
			graphics.beginFill(0xFFFFFF);
			graphics.drawCircle(0,0,size / 2);
			graphics.endFill();
		}
		
		// Move Snow
		
		public function move():void {
			speed = Math.random() * (6 + 1);
			slide = Math.random() * (10 - 5);
			
			y += speed;
			x += slide;
			
			if (x > 640)
				x = 0;
			
			if (x < 0)
				x = 640;
			
			if (y > 400) {
				x = Math.random() * 640;
				y = 0;
			}
		}				
	}
}		