(function () {
	var canvas = document.getElementById('unicorn');
	var context = canvas.getContext('2d');

	var background = new Image();
	background.src = "img/unicorn.png";

	background.onload = function(){
		//unicorn
	    context.drawImage(background,500,310);   
		context.beginPath();
		// #sadface D:
		context.arc(520, 390, 8, 0, Math.PI, false);
		context.closePath();
		context.lineWidth = 2;
		context.fillStyle = 'pink';
		context.fill();
		context.strokeStyle = '#550000';
		context.stroke();
	};


function refresh(dc, width, height) // Sample code by Jim Bumgardner
{
  dc.clearRect(0,0,width,height);
  
  var skyBlue = '#87CEEB';
  var lightSkyBlue = '#87CEFA';
  var deepSkyBlue = '#00BFFF';
  
  var grad = dc.createLinearGradient(0,0,1,height);
  grad.addColorStop(0, deepSkyBlue);
  grad.addColorStop(.33, skyBlue);
  grad.addColorStop(.66, lightSkyBlue);
  grad.addColorStop(1, 'white');
  
  function hslaColor(h,s,l,a)
  {
    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  }
  
  function arch(dc,color,cx,cy,rad)
  {
    dc.strokeStyle = color;
    dc.beginPath();
    dc.arc(cx, cy, rad, Math.PI, 2*Math.PI, false);
    dc.stroke();
  }
  
  var cx = width/2;
  var cy = height;
  var rainbowThick = width/12;
  var bandDistance = rainbowThick*2;
  var outerRad = width*.32;
  
  dc.lineWidth = 2;
  
  for (var band = 0; band < 2; ++band) {
    for (var i = 0; i < rainbowThick; ++i) {
      var ratio = i/rainbowThick;
      if (band == 1)
        ratio = 1-ratio;
      var hue = Math.floor(360*ratio*ratio);
      var sat = 100;
      var lum = 50;
      var alpha = Math.sin(Math.PI*ratio) * 1.5 * (band? .2 : .5);
      arch(dc, hslaColor(hue,sat,lum,alpha), cx, cy, band * bandDistance + outerRad-i);
    }
  }
  
}


refresh(context, 702, 502)

})();