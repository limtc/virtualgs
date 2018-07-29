// Picture

package {
	import flash.events.*;
	import flash.display.*;
	import flash.net.URLRequest;

	public class Picture extends Sprite {
		private var speed:Number;
		private var swidth:int;
		private var sheight:int;
		private var top:int;

		// Setup picture

		public function Picture(url:String, depth:int, width:int, height:int):void {
			var loader:Loader = new Loader();
			var shadow:Shape = new Shape();

			// Add shadow

			shadow.graphics.beginFill(0);
			shadow.graphics.drawRect(5, 5, 320, 200);
			shadow.graphics.endFill();
			shadow.alpha = 0.5;
			addChild(shadow);
			
			// Add image
			
			loader.load(new URLRequest(url));
			addChild(loader);

			// Position picture

			swidth = width - 32 * (depth + 1);
			sheight = height;

			x = Math.random() * swidth;
			y = Math.random() * sheight + sheight;
			scaleX = (depth + 1) / 10;
			scaleY = (depth + 1) / 10;
			speed = -depth / 2;
			top = (depth + 1) * -20;
		}
		
		// Move picture
		
		public function move():void {
			y += speed;

			if (y > sheight || y < top) {
				x = Math.random() * swidth;
				y = sheight;
				if (speed > 0)
				  speed *= -1;
			}
		}
		
		// Click picture to change direction
		
		public function onMouseDown(event:MouseEvent):void {
			speed *= -1;
		}
	} 
}