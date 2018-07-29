// Space Demo

package {
	import flash.text.*;
	import flash.media.*;
	import flash.events.*;
	import flash.display.*;
	import flash.net.URLRequest;

	public class Space extends Sprite {
		private var music:Sound;
		private var effect:Sound;
	 	private var ship:SpaceShip;
		private var stars:Array = new Array();
		
		public function Space():void {
			var swidth:int = stage.stageWidth;
			var sheight:int = stage.stageHeight;
			
			if (swidth == 0)
				swidth = 640;
			
			if (sheight == 0)
				sheight = 400;

			// Load sound effects
			
			effect = new Sound(new URLRequest("Laser.mp3"));
			music = new Sound(new URLRequest("Delta.mp3"));
			music.play(0, 99);
			
			// Write title

			var text:TextField = new TextField;
			var format:TextFormat = new TextFormat;
						
			text.text = "SPACE";
			text.y = sheight / 2 - 50;
			text.width = swidth;
			text.selectable = false;
			text.textColor = 0xffff;
			format.size = "30";
			format.align = TextFormatAlign.CENTER;
			text.setTextFormat(format);
			
			addChild(text);
		
			// Create stars
		
			for (var i:int = 0; i < 20; i++) {
				var star:Star = new Star(swidth, sheight);
				stars.push(star);
				addChild(star);
			}

			// Create space ship

			ship = new SpaceShip(swidth, sheight);
			addChild(ship);

			// Handle events

			addEventListener(Event.ENTER_FRAME, onEnterFrame);
			ship.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, ship.onKeyDown);		
			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;
		}
		
		// Handle update event

		public function onEnterFrame(event:Event):void {
			for each (var star:Star in stars)
				star.move();
		}
	
		// Handle mouse event
		
		public function onMouseDown(event:MouseEvent):void {
			effect.play();
			ship.reset();
		}
	} 
}