console.log("hello");

function changeText(cont1, cont2, speed) {
  let Otext = cont1.text();

  let Ocontent = Otext.split("");

  let i = 0;

  function show() {
    if (i < Ocontent.length) {
      cont2.append(Ocontent[i]);

      i = i + 1;
    } else {
      $("#menu").removeClass("starting");
    }
  }

  let Otimer = setInterval(show, speed);
}




$(document).ready(function() {
  changeText($(".p1"), $(".p2"), 50); //  150 = the Delay time in milliseconds between strokes.
  $("#attack").click(function() {
    console.log("clicked");
    const soundPlay = new Audio("/assets/music/laser.mp3");
    soundPlay.play();
    $("#enemyPic").attr("src", "/assets/image/dragon.png");
    $("#enemy").addClass("shake");
    setTimeout(function() {
      $("#enemy").removeClass("shake");
   }, 600)
  
  });
  $("#potion").click(function() {
    const soundPlay = new Audio("/assets/music/drink.mp3");
    soundPlay.play();
  });

  $("#specialAttk").click(function() {
    const soundPlay = new Audio("/assets/music/laser.mp3");
    soundPlay.play();
    $("#enemyPic").attr("src", "/assets/image/dragon.png");
    $("#enemy").addClass("shake");
    setTimeout(function() {
      $("#enemy").removeClass("shake");
   }, 600)
  });

  $("#dodge").click(function() {
    const soundPlay = new Audio("/assets/music/laser.mp3");
    soundPlay.play();
  });

  $("#battle").click(function() {
    console.log("clicked");
    const soundPlay = new Audio("/assets/music/battle.mp3");
    soundPlay.play();
  });
});
