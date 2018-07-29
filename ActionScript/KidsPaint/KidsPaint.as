// Kids Paint

package {
	import flash.ui.*;
	import flash.events.*;
	import flash.display.*;

	public class KidsPaint extends Sprite {
		private var cursor:Shape = new Shape();
		private var mouseDown:Boolean = false;
		private var size:int = Math.random() * 10 + 5;
		private var color:Number = Math.random() * 0xffffff;

		public function KidsPaint():void {
			
			// Create custom cursor
			
			cursor.graphics.beginFill(color);
			cursor.graphics.drawCircle(0, 0, size);
			cursor.graphics.endFill();
			cursor.alpha = 0.8;
						
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
							
			// Paint dot
				
			graphics.moveTo(mouseX, mouseY);
			graphics.lineStyle();
			graphics.beginFill(color);
			graphics.drawCircle(mouseX, mouseY, size);
			graphics.endFill();
			graphics.moveTo(mouseX, mouseY);
		}

	 	private function onMouseUp(event:MouseEvent):void {
	 		
	 		// Reset brush
	 				
			mouseDown = false;
			size = Math.random() * 10 + 5;
			color = Math.random() * 0xffffff;
			cursor.graphics.clear();
			cursor.graphics.beginFill(color);
			cursor.graphics.drawCircle(0, 0, size);
			cursor.graphics.endFill();
		}
		
		private function onMouseMove(event:MouseEvent):void {
			
			// Move cursor
			
			cursor.x = mouseX;
			cursor.y = mouseY;

			if (mouseDown) {
				
				// Paint brush
				
				graphics.lineStyle(size * 2, color);
				graphics.lineTo(mouseX, mouseY);
			}
		}
		
		// Handle keyboard event
	
		private function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				
				// Clear screen
				
				case Keyboard.SPACE:
					graphics.clear();
					mouseDown = false;
					break;
				
				// Set brush to erase mode
				
				case Keyboard.DELETE:
				case Keyboard.BACKSPACE:
					size = 15;
					color = 0;
					cursor.graphics.clear();
					cursor.graphics.lineStyle(1, 0xffffff, 0.8);
					cursor.graphics.drawCircle(0, 0, size);
					break;
			}
		}
	} 
} 