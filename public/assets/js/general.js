const startMenu = $("#startupFour");

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
