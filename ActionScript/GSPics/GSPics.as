// GS Pictures

package {
	import flash.display.*;
	import flash.events.*;
	import flash.net.URLRequest;

	public class GSPics extends Sprite {
		private var pic:Picture;
		private var pics:Array = new Array();
		
		// Setup pictures		
				
		public function GSPics():void {
			var loader:Loader = new Loader();
			var swidth:int = stage.stageWidth;
			var sheight:int = stage.stageHeight;

			if (swidth == 0)
				swidth = 640;
			
			if (sheight == 0)
				sheight = 400;
				
			// Add background
			
			loader.load(new URLRequest("background.jpg"));
			addChild(loader);
				
			// Add pictures
				
			for (var i:int = 1; i < 10; i++) {
				pic = new Picture("pic" + i + ".jpg", i, swidth, sheight);
				pics.push(pic);
				addChild(pic);
				
				pic.addEventListener(MouseEvent.MOUSE_DOWN, pic.onMouseDown);
			}

			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, onComplete);
			stage.displayState = StageDisplayState.FULL_SCREEN;
			stage.scaleMode = StageScaleMode.EXACT_FIT;	
		}
		
		// Start moving pictures

		public function onComplete(event:Event):void {
			addEventListener(Event.ENTER_FRAME, onEnterFrame);
		}		
		
		// Move pictures

		public function onEnterFrame(event:Event):void {
			for each (var pic:Picture in pics)
				pic.move();
		}
	} 
}