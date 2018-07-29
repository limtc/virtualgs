
// Mystery Paint - by Lim Thye Chean

package {
	import flash.ui.*;
	import flash.events.*;
	import flash.display.*;
	import flash.net.URLRequest;

	public class MysteryPaint extends Sprite {
		private var loader;
      	private var data:BitmapData;
		private var mouseDown:Boolean = false;
		private var cursor:Shape = new Shape();
		private var pics:Array = new Array();

		public function MysteryPaint() {
			
			// Add images
			
			[Embed(source="DingWen.jpg")]
			var DingWen:Class;
			var dw:Bitmap = new DingWen();
			pics.push(dw.bitmapData);
			
			[Embed(source="XinQuan.jpg")]
			var XinQuan:Class;
			var xq:Bitmap = new XinQuan();
			pics.push(xq.bitmapData);

			[Embed(source="XinMei.jpg")]
			var XinMei:Class;
			var xm:Bitmap = new XinMei();
			pics.push(xm.bitmapData);
			
			data = pics[int(Math.random() * 3)];
			
			// Create custom cursor
			
			Mouse.hide();
			cursor.graphics.beginFill(0xffffff);
			cursor.graphics.drawCircle(0, 0, 30);
			cursor.graphics.endFill();
			cursor.alpha = 0.5;
			addChild(cursor);	
      				
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
				graphics.beginBitmapFill(data);
				graphics.drawCircle(mouseX, mouseY, 30);
				graphics.endFill();
			}
		}
		
		// Handle keyboard event
	
		private function onKeyDown(event:KeyboardEvent):void {
			switch (event.keyCode) {
				case Keyboard.SPACE:
					graphics.clear();
      				data = pics[int(Math.random() * 3)];
					break;
			}
		}
	} 
}