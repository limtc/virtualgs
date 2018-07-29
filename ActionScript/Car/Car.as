// Car

package {
	import flash.display.*;
	import flash.events.*;
	import flash.media.*;
	import flash.net.URLRequest;	
	
	public class Car extends Sprite {
		private var horn: Sound;
		private var acar: MyCar;
		
		public function Car():void {
			
			// Setup
			
			horn = new Sound(new URLRequest("beep.mp3"));

			// Create sky
			
			graphics.beginFill(0xFFFF);
			graphics.drawRect(0,0,640,200);
			graphics.endFill();
			
			// Create hills
			
			graphics.beginFill(0xFF00);
			graphics.moveTo(0,200);
			graphics.lineTo(160,100);
			graphics.lineTo(213,200);
			graphics.lineTo(373,130);
			graphics.lineTo(533,200);
			graphics.lineTo(586,150);
			graphics.lineTo(640,200);
			graphics.lineTo(0,200);	
			graphics.endFill();
			
			// Create road
			
			graphics.beginFill(0x7F7F7F);
			graphics.drawRect(0,200,640,200);
			graphics.endFill();
			
			// Create car

			acar = new MyCar();
			addChild(acar);		
			
			// Handle events
							
			addEventListener(Event.ENTER_FRAME, onEnterFrame);
			acar.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
		}
		
		// Handle update event
		
		public function onEnterFrame(event: Event):void {
			acar.go();
		}	
		
		// Handle mouse event
		
		public function onMouseDown(event: MouseEvent):void {
			horn.play();
		}	
	}
}			
					