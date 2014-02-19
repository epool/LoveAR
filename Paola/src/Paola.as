package
{
	import flash.events.Event;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import org.papervision3d.objects.parsers.DAE;
	import Sonido;
	
	[SWF(width=640,height=480,backgroundColor=0xC0DEED,frameRate=30)]
	
	/**
	 * ...
	 * @author epool
	 */
	public class Paola extends PV3DARApp
	{
		private var corazon:DAE;
		private var sonido:Sonido;
		private var rotateSpeed:Number;
		
		private var urlLoader:URLLoader;
		private var properties:Object;
		
		public function Paola()
		{
			addEventListener(Event.INIT, _onInit);
			loadProperties();
		}
		
		private function loadProperties():void
		{
			urlLoader = new URLLoader();
			urlLoader.addEventListener(Event.COMPLETE, _onPropertiesLoad);
			var request:URLRequest = new URLRequest('properties.json');
			urlLoader.load(request);
		}
		
		private function _onPropertiesLoad(event:Event):void
		{
			properties = JSON.parse(urlLoader.data);
			
			rotateSpeed = Number(properties.rotateSpeedDirection);
			init(properties.cameraParams, properties.marker);
		}
		
		private function _onInit(e:Event):void
		{
			corazon = new DAE();
			corazon.load(properties.dae3DModel);
			corazon.scale = Number(properties.dae3DModelScale);
			corazon.rotationX = Number(properties.dae3DModelRotateX);
			corazon.rotationZ += 90;
			_markerNode.addChild(corazon);
			
			mirror = !mirror;
			
			if (properties.playAudio == 'true')
			{
				sonido = new Sonido(properties.audio, 3, 0, -1);
				sonido.reproducir();
			}
			
			addEventListener(Event.ENTER_FRAME, _update);
		}
		
		private function _update(e:Event):void
		{
			corazon.rotationZ += rotateSpeed;
		}
	}
}