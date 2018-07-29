// Apple Paint

package {
	import flash.ui.*;
	import flash.events.*;
	import flash.display.*;
	import flash.net.URLRequest;

	public class ApplePaint extends Sprite {
      	private var bitmap:BitmapData;
		private var loader:Loader = new Loader();
		private var cursor:Shape = new Shape();
		private var mouseDown:Boolean = false;

		public function ApplePaint():void {
			loader.load(new URLRequest("apple.gif"));
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, onComplete);
		}

		// Load image

		private function onComplete(event:Event):void {
      		bitmap = new BitmapData(loader.width, loader.height);
      		bitmap.draw(loader);
    			
			// Create custom cursor
			
			cursor.graphics.beginFill(0xffffff);
			cursor.graphics.drawCircle(0, 0, 10);
			cursor.graphics.endFill();
			cursor.alpha = 0.5;			

			addChild(cursor);
			Mouse.hide();
			
			// Register events
			
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);		

			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;
		}
		
		// Handle mouse events
		
		private function onMouseDown(event:MouseEvent):void {
			mouseDown = true;
		}

	 	private function onMouseUp(event:MouseEvent):void {			
			mouseDown = false;
		}
		
		private function onMouseMove(event:MouseEvent):void {
			cursor.x = mouseX;
			cursor.y = mouseY;

			if (mouseDown) {
				graphics.beginBitmapFill(bitmap);
				graphics.drawCircle(mouseX, mouseY, 10);
				graphics.endFill();
			}
		}
		
		// Handle keyboard event
	
		private function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				case Keyboard.SPACE:
					graphics.clear();
					break;
			}
		}
	} 
}