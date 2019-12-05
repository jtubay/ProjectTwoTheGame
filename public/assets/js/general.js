const startMenu = $("#startupFour");

function changeText(cont1, cont2, speed) {
  let Otext = cont1.text();

  let Ocontent = Otext.split("");

  let i = 0;

  function show() {
    if (i < Ocontent.length) {
      cont2.append(Ocontent[i]);

      i = i + 1;
    }
  }

  let Otimer = setInterval(show, speed);
}

$(document).ready(function() {
  changeText($(".p1"), $(".p2"), 75); //  150 = the Delay time in milliseconds between strokes.

});
