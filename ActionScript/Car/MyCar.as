// My Car ( object for Car.as )

package {
	import flash.display.*;
	
	public class MyCar extends Sprite {
				
		public function MyCar():void {
			x = -210;
			y = 150;
			
			// Create top
			
			graphics.beginFill(0xFF);
			graphics.drawRect(0,0,210,50);
			graphics.endFill();
			
			// Create base
			
			graphics.beginFill(0xFF0000);
			graphics.drawRect(-30,50,270,30);
						
			// Create wheels
			
			graphics.beginFill(0x3F3F3F);
			graphics.drawCircle(30,80,30);
			graphics.drawCircle(180,80,30);
			graphics.endFill();
			
			// Create windows
			
			graphics.beginFill(0xFFFF);
			graphics.drawRect(10,10,90,30);
			graphics.drawRect(110,10,90,30);
			graphics.endFill();
			
		}
		
		// Go car
		
		public function go():void {
			x += 3;
			
			if (x > 640)
				x = -210;
		}
	}
}						