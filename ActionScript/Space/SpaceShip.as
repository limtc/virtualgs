// Space Ship

package {
	import flash.events.*;
	import flash.ui.Keyboard;
	import flash.display.Sprite;

	public class SpaceShip extends Sprite {		
		private var swidth:int;
		private var sheight:int;
		
		public function SpaceShip(width: int, height: int):void {
			swidth = width;
			sheight = height;
			x = swidth / 2 - 25;
			y = sheight / 2;
			
			graphics.beginFill(0xff);
			graphics.drawEllipse(0, 0, 50, 20);
			graphics.endFill();
			graphics.beginFill(0xff0000, 0.8);
			graphics.drawCircle(25, 0, 10);
			graphics.endFill();
		}

		// Reset ship
		
		public function reset():void {
			x = Math.random() * (swidth - 50);
			y = Math.random() * (sheight - 25);
			rotation = 0;
		}
		
		// Handle keyboard event
		
		public function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				case Keyboard.LEFT:
					if (x > 0)
						x -= 10;
					break;
					
				case Keyboard.RIGHT:
					if (x < swidth - 50)
						x += 10;
					break;
					
				case Keyboard.UP:
					if (y > 10)
						y -= 10;
					break;
					
				case Keyboard.DOWN:
					if (y < sheight - 20)
						y += 10;
					break;
					
				case Keyboard.SPACE:
					rotation += 90;
			}
		}
	}
} 