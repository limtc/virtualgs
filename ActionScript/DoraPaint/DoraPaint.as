// Dora Paint

package {
	import flash.ui.*;
	import flash.media.*;
	import flash.events.*;
	import flash.display.*;
	import flash.net.URLRequest;

	public class DoraPaint extends Sprite {
		private var voice:Sound = new Sound(new URLRequest("Dora.mp3"));
		private var cursor:Shape = new Shape();
		private var color:Number = 0xffffff;
		private var pos:int = 1;
		private var bitmap:Bitmap;
		private var loader:Loader;
		private var colors:Array = [0x10101, 0x777777, 0x884411, 0x7722CC, 0xFF, 0x8800, 0xFF7700, 0xDD0000, 
		  0xFFAA99, 0xFFFF00, 0xEE00, 0x44DDFF, 0xDDAAFF, 0x7788FF, 0xCCCCCC, 0xFFFFFF];

		public function DoraPaint():void {
			voice.play(0);
			loadImage();

			// Draw color palette
      		
			for (var i:int = 0; i < 16; i++) {
				var box:ColorBox = new ColorBox(colors[i]);
				box.x = 0;
				box.y = i * 25;
				box.addEventListener(MouseEvent.MOUSE_DOWN, onSelectColor);
				addChild(box);
			}
			
			// Create custom cursor
			
			Mouse.hide();
			cursor.graphics.lineStyle(1, 0);
			cursor.graphics.beginFill(color);
			cursor.graphics.drawCircle(0, 0, 3);
			cursor.graphics.endFill();
			cursor.alpha = 0.8;
			addChild(cursor);

			// Register events
			
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;
		}

		// Load image
		
		private function loadImage() {			
			loader = new Loader();
			loader.load(new URLRequest("dora" + pos + ".gif"));
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, onComplete);
		}
		
		// Setup picture

		private function onComplete(event:Event):void {
			bitmap = Bitmap(loader.content);
      		addChildAt(bitmap, 0);
		}

		// Handle mouse events
		
		private function onMouseDown(event:MouseEvent):void {
			var data:BitmapData = bitmap.bitmapData;
			
			if (mouseX > 25 && data.getPixel(mouseX, mouseY) > 0)
				data.floodFill(mouseX, mouseY, color);
		}
		
		private function onMouseMove(event:MouseEvent):void {
			cursor.x = mouseX;
			cursor.y = mouseY;
		}
		
		private function onSelectColor(event:MouseEvent):void {
			color = event.currentTarget.color;

			cursor.graphics.clear();
			cursor.graphics.lineStyle(1, 0);
			cursor.graphics.beginFill(color);
			cursor.graphics.drawCircle(0, 0, 3);
			cursor.graphics.endFill();
		}
				
		// Handle keyboard event
	
		private function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				case Keyboard.BACKSPACE:
				case Keyboard.DELETE:
					removeChild(bitmap);
					loadImage();
					break;
				
				case Keyboard.SPACE:
					
					// Change picture
					
					pos++;
					if (pos > 6)
						pos = 1;
					
					removeChild(bitmap);
					loadImage();
					break;
			}
		}
	} 
}