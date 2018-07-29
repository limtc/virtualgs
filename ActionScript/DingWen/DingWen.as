// Ding Wen

package {
	import flash.net.*;
	import flash.media.*;
	import flash.events.*;
	import flash.display.*;

	public class DingWen extends Sprite {
		public function DingWen():void {
		    var sw:int = stage.stageWidth;
		    var sh:int = stage.stageHeight;
			
			var nc:NetConnection;
			var ns:NetStream;
			var video:Video;

			// Add Apple IIGS
			
			drawAppleIIGS();

			// Add video
			
			nc = new NetConnection();
			nc.connect(null); 
			ns = new NetStream(nc);
			ns.addEventListener(AsyncErrorEvent.ASYNC_ERROR, onAsyncError);
		//	ns.play("wen.mp4");
			ns.play("http://virtualgs.larwe.com/ActionScript/DingWen/wen.mp4");

			video = new Video();
			video.x = 180;
			video.y = 100;
			video.width = 160;
			video.height = 100;		
			video.attachNetStream(ns); 
			addChild(video);
		}

		function onAsyncError(event:AsyncErrorEvent):void { }
		
		function drawAppleIIGS():void {
			var keyX:int = 140;
			
			// Draw moniter device
			
			graphics.beginFill(0xeeeeee);
			graphics.drawRoundRect(160,74,200,150,50,50);
			graphics.endFill();
			
			graphics.beginFill(0xffff);
			graphics.drawRoundRect(180,100,160,100,45,45);
			graphics.endFill();
			
			graphics.beginFill(0x777777);
			graphics.drawRect(180,224,160,26);
			graphics.endFill();
						
			// Draw IIGS machine with logo
			
			graphics.beginFill(0xeeeeee);
			graphics.drawRect(160,250,200,50);
			graphics.endFill();
			
			graphics.lineStyle(1,0);
			graphics.drawRect(160,250,200,50);			
			
			graphics.beginFill(0xff0000);
			graphics.drawCircle(185,271,1);
			graphics.drawCircle(185,278,5);
			graphics.endFill();		
			
			// Draw disk drive device
			 
			graphics.beginFill(0xeeeeee);
			graphics.drawRect(360,250,120,50);
			graphics.endFill();
			
			graphics.lineStyle(1,0);
			graphics.drawRect(360,250,120,50);
			
			graphics.moveTo(365,260);
			graphics.lineTo(475,260);
			
			// Draw keyboard & mouse device
			
			graphics.beginFill(0xeeeeee);
			graphics.drawRect(140,330,240,44);
			graphics.endFill();
			
			graphics.lineStyle(1,0);
			graphics.drawRect(140,330,240,44);
			
			for (var i:int = 0; i < 12; i++) {
				graphics.beginFill(0);
				graphics.drawEllipse(keyX,344,20,14);
				graphics.endFill();	
				keyX += 20;
			}
			
			graphics.beginFill(0xeeeeee);
			graphics.drawRoundRect(400,340,40,20,10,10);
			graphics.endFill();				
		}
	}
}