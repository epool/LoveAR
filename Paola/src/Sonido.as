package
{
	import flash.display.Sprite;
	import flash.net.URLRequest;
	import flash.media.Sound;
	import flash.media.SoundLoaderContext;
	
	//--------------------------
	public class Sonido extends Sprite
	{
		private var sonido:Sound;
		private var url:URLRequest;
		private var buffer:SoundLoaderContext;
		private var ini:Number;
		private var loop:Number;
		
		//----------------------
		public function Sonido(qUrl:String, qBuffer:Number, qIni:Number, qLoop:Number)
		{
			url = new URLRequest(qUrl);
			buffer = new SoundLoaderContext(qBuffer * 1000);
			ini = qIni * 1000;
			loop = (qLoop >= 0) ? qLoop : int.MAX_VALUE;
			sonido = new Sound(url, buffer);
		}
		
		public function reproducir():void
		{
			sonido.play(ini, loop);
		}
	}
}