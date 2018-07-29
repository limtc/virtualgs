 
// Simple Paint - by Lim Thye Chean

package {
	import flash.ui.*;
	import flash.events.*;
	import flash.display.*;
	import flash.geom.Matrix;

	public class SimplePaint extends Sprite {
		private var mouseDown:Boolean = false;
		private var cursor:Shape = new Shape();
		private var palette:Palette = new Palette();

		public function SimplePaint() {
			setCursor();
			cursor.alpha = 0.8;

			Mouse.hide();
			addChild(palette);	
			addChild(cursor);
			
			// Register events

			stage.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;
		}

		// Handle mouse events
		
		private function onMouseDown(event:MouseEvent):void {
			if (event.target == stage) {
				mouseDown = true;
				palette.hide();
				
				// Draw dot
				
				graphics.moveTo(mouseX, mouseY);
				graphics.lineStyle();
				graphics.beginFill(palette.color);
				graphics.drawCircle(mouseX, mouseY, palette.size);
				graphics.endFill();
				graphics.moveTo(mouseX, mouseY);
			}
			else {
				palette.hide();
				
				if (event.ctrlKey) {
					
					// Set background color
					
					graphics.clear();
					graphics.beginFill(palette.bcolor);
					graphics.drawRect(0, 0, 640, 400);
					graphics.endFill();
				}
				else if (event.shiftKey) {
					
					// Set background gradient color
					
					var matrix:Matrix = new Matrix();
					matrix.createGradientBox(640, 400, 0, 0, 0);
					
					graphics.clear();
					graphics.beginGradientFill(GradientType.LINEAR, 
					  [palette.color, palette.bcolor], [1, 1], [0, 255], matrix);
					graphics.drawRect(0, 0, 640, 400);
					graphics.endFill();
				}
				else
					setCursor();
			}
		}

	 	private function onMouseUp(event:MouseEvent):void {
			mouseDown = false;
		}
		
		private function onMouseMove(event:MouseEvent):void {

			// Move cursor
			
			cursor.x = mouseX;
			cursor.y = mouseY;

			if (mouseDown) {
				
				// Draw connected dots
				
				graphics.lineStyle(palette.size * 2, palette.color);
				graphics.lineTo(mouseX, mouseY);
			}
			else
			
				// Show palette
			
				if (mouseY == 0)
					palette.show();
		}

		// Set cursor
		
		private function setCursor():void {
			cursor.graphics.clear();
			cursor.graphics.lineStyle(1, 0xffffff);
			cursor.graphics.beginFill(palette.color);
			cursor.graphics.drawCircle(0, 0, palette.size);
			cursor.graphics.endFill();
		}
		
		// Handle keyboard event
	
		private function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				
				// Clear screen
				
				case Keyboard.BACKSPACE:
				case Keyboard.DELETE:
					graphics.clear();
					mouseDown = false;
					break;
					
				// Toggle palette
				
				case Keyboard.SPACE:
					palette.toggle();
					break;
					
				// Toggle cursor
				
				case Keyboard.TAB:
					if (cursor.alpha == 0)
						cursor.alpha = 0.8;
					else
						cursor.alpha = 0;
			}
		}
	} 
}