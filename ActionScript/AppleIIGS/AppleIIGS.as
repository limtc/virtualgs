// Apple IIGS

package {
	import flash.display.*;

	public class AppleIIGS extends Sprite {		
		public function AppleIIGS():void {
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