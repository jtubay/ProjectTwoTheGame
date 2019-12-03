/*var i = 0;
var txt = 'Help Defend the Kol-da-sack'; /* The text */
/*var speed = 50; /* The speed/duration of the effect in milliseconds */

/*function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}*/

function changeText(cont1, cont2, speed) {
  var Otext = cont1.text();

  var Ocontent = Otext.split("");

  var i = 0;

  function show() {
    if (i < Ocontent.length) {
      cont2.append(Ocontent[i]);

      i = i + 1;
    }
  }

  var Otimer = setInterval(show, speed);
}

$(document).ready(function() {
  changeText($(".p1"), $(".p2"), 75); //  150 = the Delay time in milliseconds between strokes.

  clearInterval(Otimer);
});
