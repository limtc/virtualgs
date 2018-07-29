// Snow

package {
	import flash.display.*;
	import flash.events.*;
	import flash.media.*;
	import flash.net.URLRequest;	
	
	public class Snow extends Sprite { 
		private var snows: Array = new Array;
		private var music: Sound;
				
		public function Snow():void {
			var swidth:int = stage.stageWidth;
			var sheight:int = stage.stageHeight;

			if (swidth == 0)
				swidth = 640;
			
			if (sheight == 0)
				sheight = 400;
				
			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;	

			// Load sound effects
			
			music = new Sound ( new URLRequest ("Snow.mp3"));
			music.play(0,99);
			
			// Create snow
			
			for (var i: int = 0; i < 100; i++) {
				var snow: TheSnow = new TheSnow(swidth, sheight);
				snows.push(snow);
				addChild(snow);
			}
			
			// Handle events
			
			addEventListener(Event.ENTER_FRAME,onEnterFrame);	
		}
		
		// Handle update event
		
		public function onEnterFrame(event: Event):void {
			for each (var snow: TheSnow in snows)
				snow.move();
		}		
	}
}			
					