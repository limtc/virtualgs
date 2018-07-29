
// Palette

package {
	import flash.ui.*;
	import flash.text.*;
	import flash.events.*;
	import flash.display.*;
	import flash.geom.Matrix;

	public class Palette extends Sprite {
		public var size:int = 5;
		public var color:uint = 0xffffff;
		public var bcolor:uint = 0;
		private var colors:Array = [0, 0x777777, 0x884411, 0x7722CC, 0xFF, 0x8800, 0xFF7700, 0xDD0000, 
		  0xFFAA99, 0xFFFF00, 0xEE00, 0x44DDFF, 0xDDAAFF, 0x7788FF, 0xCCCCCC, 0xFFFFFF];
		  
		public function Palette() {
			var i:int;
			var title:TextField = new TextField();

			// Draw palette
			
			var matrix:Matrix = new Matrix();
			matrix.createGradientBox(640, 27, Math.PI / 2, 0, 0);
					
			graphics.beginGradientFill(GradientType.LINEAR, 
			  [0, 0x666666], [1, 1], [0, 255], matrix);
			graphics.drawRect(0, 0, 640, 27);
			graphics.endFill();
    	
    		// Draw color boxes
    	
			for (i = 0; i < 16; i++) {
				var cbox:ColorBox = new ColorBox(colors[i]);
				cbox.x = i * 25 + 1;
				cbox.y = 1;
				cbox.addEventListener(MouseEvent.MOUSE_DOWN, onSetColor);
				addChild(cbox);
			}
			
			// Draw size boxes
			
			for (i = 0; i < 6; i++) {
				var sbox:SizeBox = new SizeBox(i);
				sbox.x = i * 25 + 405;
				sbox.y = 1;
				sbox.addEventListener(MouseEvent.MOUSE_DOWN, onSetSize);
				addChild(sbox);
			}
			
			// Draw title
				
			title.text = "Simple Paint";
			title.x = 570;
			title.y = 6;
			title.selectable = false;
			title.autoSize = TextFieldAutoSize.LEFT;
			title.textColor = 0xcccccc;
			addChild(title);
		}
		
		// Show palette
		
		public function show():void {
			y = 0;
		}
		
		// Hide palette
		
		public function hide():void {
			y = -30;
		}
		
		// Toggle palette
		
		public function toggle():void {
			if (y < 0)
				show();
			else
				hide();
		}

		// Set color
		
		private function onSetColor(event:MouseEvent):void {
			if (event.ctrlKey || event.shiftKey)
				bcolor = event.target.color;
			else
				color = event.target.color;
		}

		// Set size
		
		private function onSetSize(event:MouseEvent):void {
			size = event.target.size;
		}
	} 
}