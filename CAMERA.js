// Camera position and sprites

// Game variables 
let isCarCutscene = false;

// Timer
let timer = 30;

let intervals = [];
$(".elements").each(function() {
    var i = setInterval(function() {

    }, 1000);
    intervals.push(i);
});

document.getElementById("timer").style.color = "red";

function setTimer () {
  timer = timer - 1;
  document.getElementById("timer").innerHTML = "<tt>Timer: " + timer + "s</tt>"

  if (timer < 1) {
    clearScreen();
    is_not_playing = true;
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/776177977733939250/unknown.png')";
    document.getElementById("timer").innerHTML = "<tt>Game Over...</tt>";

    setTimeout(function () {
      location = "";
    }, 1000);
  }
}

function clearTimer () {
  if (window.myInterval != undefined && window.myInterval != 'undefined') {
    window.clearInterval(window.myInterval);
  }
}

// Window Variables
let is_not_playing = true;
let screen = 0;

$('body').bind('copy paste',function (e) {
    e.preventDefault(); return false; 
});

const death_src = "https://media.discordapp.net/attachments/772064957793435678/820287190344794142/9-90096_-png-blood-on-the-floor-png.png?width=792&height=632";
const boss_placeholder_src = "https://media.discordapp.net/attachments/772064957793435678/820327091454476318/largeTransparent.png?width=843&height=632";

const victim_1_src = "https://media.discordapp.net/attachments/772064957793435678/820146043764080640/image-removebg-preview.png";
const victim_1_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820146809548046356/retard.png";

const victim_2_src = "https://media.discordapp.net/attachments/772064957793435678/820147818457989130/image-removebg-preview.png";
const victim_2_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820148346252558346/fuckdse.png";

const victim_3_src = "https://media.discordapp.net/attachments/772064957793435678/820334315262443590/image-removebg-preview.png";
const victim_3_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820335813249597511/pixil-frame-0.png";

const victim_4_src = "https://media.discordapp.net/attachments/772064957793435678/820347462039502858/image-removebg-preview.png";

const victim_5_src = "https://media.discordapp.net/attachments/772064957793435678/820405716568899604/image-removebg-preview.png";

const victim_6_src = "https://media.discordapp.net/attachments/772064957793435678/820419287121788989/1f693.png";

const victim_7_src = "https://media.discordapp.net/attachments/772064957793435678/820419838123573278/kdojgKhYLuPEOqdqzUZ2BoABUhzNGAQEQAAEQAIFEEYACkKjlgDAgAAIgAAIgUB0CUACqwxmjgAAIgAAIgECiCEABSNRyQBgQAAE.png";

const victim_8_src = "https://media.discordapp.net/attachments/772064957793435678/820676613716181020/image-removebg-preview.png";
const victim_8_hitbox = "https://media.discordapp.net/attachments/772064957793435678/820327091454476318/largeTransparent.png?width=843&height=632";

const victim_9_src = "https://media.discordapp.net/attachments/772064957793435678/820753649163829258/images.png";
const victim_9_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820761571520544798/unknown.png";

const victim_10_src = "https://media.discordapp.net/attachments/772064957793435678/820753778323882014/9k.png";
const victim_10_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820756355165061120/unknown.png";

const victim_11_src = "https://media.discordapp.net/attachments/772064957793435678/820754033316200479/93970ca95ec2449108ea2d882e4c3442.png?width=532&height=447";
const victim_11_blood_src = "https://media.discordapp.net/attachments/772064957793435678/820761668140662784/unknown.png";

const victim_12_src = "https://media.discordapp.net/attachments/772064957793435678/820815162419183656/Screen_Shot_2021-03-14_at_8.png";

const victim_13_src = "https://media.discordapp.net/attachments/772064957793435678/820815368015708190/Screen_Shot_2021-03-14_at_8.png";

const victim_14_src = "https://media.discordapp.net/attachments/772064957793435678/820830027154587698/Screen_Shot_2021-03-14_at_9.png";

let victim_15_src = "https://media.discordapp.net/attachments/772064957793435678/820851713325137920/latest.png";

let victim_16_src = "https://media.discordapp.net/attachments/772064957793435678/820851757692485632/3dc8808484e9ae99ae1505432455828c.png";

let victim_17_src = "https://media.discordapp.net/attachments/772064957793435678/820844572397273148/Screen_Shot_2021-03-14_at_10.png";

// Window Rendering
const window_canvas = document.getElementById("window");
const window_render = window_canvas.getContext("2d");

const boss_placeholder = new Image();
const text_line = new Image();
const victim_1 = new Image();
const victim_2 = new Image();
const victim_3 = new Image();
const victim_4 = new Image();
const victim_5 = new Image();
const victim_6 = new Image();
const victim_7 = new Image();
const victim_8 = new Image();
const victim_9 = new Image();
const victim_10 = new Image();
const victim_11 = new Image();
const victim_12 = new Image();
const victim_13 = new Image();
const victim_14 = new Image();
const victim_15 = new Image();
const victim_16 = new Image();
const victim_17 = new Image();

let boss_placeholder_x = 0;
let boss_placeholder_y = 0;

let victim_1_x = 0;
let victim_1_y = 0;

let victim_2_x = 300;
let victim_2_y = 0;

let victim_3_x = 0;
let victim_3_y = 70;

let victim_4_x = 0;
let victim_4_y = 30;

let victim_5_x = 0;
let victim_5_y = 0;

let victim_6_x = 0;
let victim_6_y = 0;

let victim_7_x = 200;
let victim_7_y = 0;

let victim_8_x = 0;
let victim_8_y = 90;

let victim_8_hitbox_x = victim_8_x;
let victim_8_hitbox_y = victim_8_y;

let victim_9_x = 500;
let victim_9_y = 70;

let victim_10_x = 580;
let victim_10_y = 70;

let victim_11_x = 620;
let victim_11_y = 70;

let victim_12_x = 0;
let victim_12_y = 90;

let victim_13_x = 200;
let victim_13_y = 90;

let victim_14_x = 0;
let victim_14_y = 0;

let victim_15_x = 0;
let victim_15_y = 0;

let victim_16_x = 0;
let victim_16_y = 0;

let victim_17_x = 0;
let victim_17_y = 0;

let victim_1_hp = 500;
let victim_2_hp = 400;
let victim_3_hp = 400;
let victim_4_hp = 300;
let victim_5_hp = 700;
let victim_6_hp = 700;
let victim_7_hp = 700;
let victim_9_hp = 100;
let victim_10_hp = 100;
let victim_11_hp = 100;
let victim_12_hp = 200;
let victim_13_hp = 200;
let victim_14_hp = 700;
let victim_15_hp = 300;
let victim_16_hp = 300;
let victim_17_hp = 1200;

let victim_1_status = "alive";
let victim_2_status = "alive";
let victim_3_status = "alive";
let victim_4_status = "alive";
let victim_5_status = "alive";
let victim_9_status = "alive";
let victim_10_status = "alive";
let victim_11_status = "alive";
let victim_12_status = "alive";
let victim_13_status = "alive";
let victim_14_status = "alive";
let victim_15_status = "alive";
let victim_16_status = "alive";
let victim_17_status = "alive";

const text_line_x = 0;
const text_line_y = -50;

function clearScreen () {
  window_render.clearRect(0, 0, window_canvas.width, window_canvas.height);
}

function hitActor (sprite) {
  const mousePos = {
    x: event.clientX - window_canvas.offsetLeft,
    y: event.clientY - window_canvas.offsetTop
  };

  let sprite_x = 0;
  let sprite_y = 0;

  if (sprite === "victim_1") {
    sprite_x = victim_1_x;
    sprite_y = victim_1_y;

    sprite_width = victim_1.width; 
    sprite_height = victim_1.height;
  }

  if (sprite === "victim_2") {
    sprite_x = victim_2_x;
    sprite_y = victim_2_y;

    sprite_width = victim_2.width;
    sprite_height = victim_2.height;
  }

  if (sprite === "victim_3") {
    sprite_x = victim_3_x;
    sprite_y = victim_3_y;

    sprite_width = victim_3.width;
    sprite_height = victim_3.height;
  }

  if (sprite === "victim_4") {
    sprite_x = victim_4_x;
    sprite_y = victim_4_y;

    sprite_width = victim_4.width;
    sprite_height = victim_4.height;
  }

  if (sprite === "victim_5") {
    sprite_x = victim_5_x;
    sprite_y = victim_5_y;

    sprite_width = victim_5.width;
    sprite_height = victim_5.height;
  }

  if (sprite === "victim_6") {
    sprite_x = victim_6_x;
    sprite_y = victim_6_y;

    sprite_width = victim_6.width;
    sprite_height = victim_6.height;
  }

  if (sprite === "victim_7") {
    sprite_x = victim_7_x;
    sprite_y = victim_7_y;

    sprite_width = victim_7.width;
    sprite_height = victim_7.height
  }

  if (sprite === "victim_8") {
    sprite_X = victim_8_x;
    sprite_y = victim_8_y; 

    sprite_width = victim_8_hitbox.width;
    sprite_height = victim_8_hitbox.height;
  }

  if (sprite === "victim_9") {
    sprite_x = victim_9_x;
    sprite_y = victim_9_y;

    sprite_width = victim_9.width;
    sprite_height = victim_9.height
  }

  if (sprite === "victim_10") {
    sprite_x = victim_10_x;
    sprite_y = victim_10_y;

    sprite_width = victim_10.width;
    sprite_height = victim_10.height
  }

  if (sprite === "victim_11") {
    sprite_x = victim_11_x;
    sprite_y = victim_11_y;

    sprite_width = victim_11.width;
    sprite_height = victim_11.height;
  }

  if (sprite === "victim_12") {
    sprite_x = victim_12_x;
    sprite_y = victim_12_y;

    sprite_width = victim_12.width;
    sprite_height = victim_12.height;
  }

  if (sprite === "victim_13") {
    sprite_x = victim_13_x;
    sprite_y = victim_13_y;

    sprite_width = victim_13.width;
    sprite_height = victim_13.height;
  }

  if (sprite === "victim_14") {
    sprite_x = victim_14_x;
    sprite_y = victim_14_y;

    sprite_width = victim_14.width;
    sprite_height = victim_14.height;
  }

  if (sprite === "victim_15") {
    sprite_x = victim_15_x;
    sprite_y = victim_15_y;

    sprite_width = victim_15.width;
    sprite_height = victim_15.height;
  }

  if (sprite === "victim_16") {
    sprite_x = victim_16_x;
    sprite_y = victim_16_y;

    sprite_width = victim_16.width;
    sprite_height = victim_16.height;
  }

  if (sprite === "victim_17") {
    sprite_x = victim_17_x;
    sprite_y = victim_17_y;

    sprite_width = victim_17.width;
    sprite_height = victim_17.height;
  }

  if (sprite === "boss_placeholder") {
    sprite_x = boss_placeholder_x;
    sprite_y = boss_placeholder_y;

    sprite_width = boss_placeholder.width;
    sprite_height = boss_placeholder.height;
  }

  console.log(sprite_x + " " + sprite_y);

  if (mousePos.x > sprite_x && mousePos.x < sprite_width + sprite_x && mousePos.y > sprite_y && mousePos.y < sprite_height + sprite_y) {
    console.log("HIT " + sprite);
    return true;
  }

  else {
    console.log("MISSED " + sprite);
    return false;
  }
}

function callBossPlaceHolder (coord1, coord2) {
  boss_placeholder.onload = function () {
    boss_placeholder_x = coord1;
    boss_placeholder_y = coord2;
    window_render.drawImage(boss_placeholder, coord1, coord2);
  }
  boss_placeholder.src = boss_placeholder_src;
}

function renderSceneOne () {
  let timer_scene_one = setInterval(setTimer, 1000);

  victim_1.onload = function () {
    window_render.drawImage(victim_1, victim_1_x, victim_1_y, 112 - 30, 226 - 50);
  }
  victim_1.src = victim_1_src;

  setTimeout(function () {
    victim_2.onload = function () {
      window_render.drawImage(victim_2, victim_2_x, victim_2_y, 98 - 20, 276 - 20);
    }
    victim_2.src = victim_2_src
  }, 1);
}

function renderSceneTwo () {
  boss_placeholder_x = 10000;
  victim_1_x = 10000;
  const moveAroundInterval = setInterval(moveAround, 200);

  function moveAround () {
    clearScreen();

    victim_4_x = Math.floor(Math.random() * (200 - 0) + 0);

    victim_4.onload = function () {
      window_render.drawImage(victim_4, victim_4_x, victim_4_y, 93, 132.5);
    }
    victim_4.src = victim_4_src;

    if (victim_4_hp < 1) {
      clearInterval(moveAroundInterval);

      timer = timer + 40;
    }
  }
}

function renderSceneThree () {
  clearScreen();

  victim_5.onload = function () {
    window_render.drawImage(victim_5, victim_5_x, victim_5_y, 243.5, 162.5);
  }
  victim_5.src = victim_5_src;
}

function renderSceneFour () {
  clearScreen();

  victim_6.onload = function () {
    window_render.drawImage(victim_6, victim_6_x, victim_6_y, 512 / 2 - 100, 512 / 2 - 100);
  }
  victim_6.src = victim_6_src;

  setTimeout(function () {
    victim_7.onload = function () {
      window_render.drawImage(victim_7, victim_7_x, victim_7_y, 512 / 2 - 100, 512 / 2 - 100);
    }
    victim_7.src = victim_7_src;
  }, 10)
}

function renderSceneFive () {
  clearScreen();
  victim_7_x = 10000;
  victim_6_x = 10000;
  victim_5_x = 10000;
  victim_4_x = 10000;
  boss_placeholder_x = 10000;
  victim_1_x = 10000;

  is_not_playing = false;
  isCarCutscene = true;

  document.getElementById("window").style.height = "600px";
  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820676272844963860/urban-landscape-empty-urban-street-traffic-road-sidewalk-crosswalk-city-road-crossroads-traffic-ligh.png')";

  victim_8.onload = function () {
    window_render.drawImage(victim_8, victim_8_x, victim_8_y, 160, 71);
  }
  victim_8.src = victim_8_src;

  victim_8_hitbox.onload = function () {
    window_render.drawImage(victim_8_hitbox, victim_8_hitbox_x, victim_8_hitbox_y);
  }
  victim_8_hitbox.src = victim_8_src;
}

function renderScene6 () {
  is_not_playing = false;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820793481982378035/side-view-of-a-road-with-a-crash-barrier-roadside-green-meadow-in-the-vector-id1125724422.png')";
  const driveByInterval = setInterval(driveBy, 150);

  function driveBy () {
    clearScreen();
    
    victim_9_x = victim_9_x - 10;
    victim_10_x = victim_10_x - 10;
    victim_11_x = victim_11_x - 10;

    victim_9.onload = function () {
      window_render.drawImage(victim_9, victim_9_x, victim_9_y, 70, 50);
    }
    if (victim_9_status === "alive") {
      victim_9.src = victim_9_src;
    }

    else {
      victim_9.src = victim_9_blood_src;
    }

    victim_10.onload = function () {
      window_render.drawImage(victim_10, victim_10_x, victim_10_y, 70, 50);
    }
    if (victim_10_status === "alive") {
      victim_10.src = victim_10_src;
    }

    else {
      victim_10.src = victim_10_blood_src;
    }

    victim_11.onload = function () {
      window_render.drawImage(victim_11, victim_11_x, victim_11_y, 70, 50);
    }
    if (victim_11_status === "alive") {
      victim_11.src = victim_11_src;
    }

    else {
      victim_11.src = victim_11_blood_src;
    }

    if (victim_11_x < -100) {
      clearInterval(driveByInterval);

      setTimeout(function () {
        is_not_playing = true;
        clearScreen();

        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820808991327518730/Screen_Shot_2021-03-14_at_8.01.31_PM.png')";

        timer = timer + 30

        setTimeout(function () {
          renderCutSceneFour();
        }, 3000);
      }, 1000);
    }
  }
}

function renderSceneSeven() {
  clearScreen();
  is_not_playing = false;
  
  victim_11_x = 10000;
  victim_10_x = 10000;
  victim_9_x = 10000;
  victim_8_x = 10000;
  victim_7_x = 10000;
  victim_6_x = 10000;
  victim_5_x = 10000;
  victim_4_x = 10000;
  boss_placeholder_x = 10000;
  victim_1_x = 10000;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820818656996360202/bar-clipart-bartender-11.png?width=637&height=447')";

  document.getElementById("track3").pause();
  document.getElementById("track4").play();

  victim_12.onload = function () {
    window_render.drawImage(victim_12, victim_12_x, victim_12_y, 81.1, 68.8);
  }
  victim_12.src = victim_12_src;

  victim_13.onload = function () {
    window_render.drawImage(victim_13, victim_13_x, victim_13_y, 81.1, 68.8);
  }
  victim_13.src = victim_13_src;
}

function renderSceneEight () {
  clearScreen();
  is_not_playing = false;

  victim_13_x = 10000;
  victim_12_x = 10000;
  victim_11_x = 10000;
  victim_10_x = 10000;
  victim_9_x = 10000;
  victim_8_x = 10000;
  victim_7_x = 10000;
  victim_6_x = 10000;
  victim_5_x = 10000;
  victim_4_x = 10000;
  boss_placeholder_x = 10000;
  victim_1_x = 10000;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820830175410913290/background-of-bar-counter-background-of-bar-counter-with-stools-and-alcohol-drinks-on-shelves-clipar.png')";

  victim_14.onload = function () {
    window_render.drawImage(victim_14, victim_14_x, victim_14_y, 100, 100);
  }
  victim_14.src = victim_14_src;
}

function renderSceneNine () {
  clearScreen();
  is_not_playing = false;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820860940231639040/access-corner-conf1xx2581-1936-6-0.png?width=596&height=447')";
  
  victim_14_x = 10000;
  victim_13_x = 10000;
  victim_12_x = 10000;
  victim_11_x = 10000;
  victim_10_x = 10000;
  victim_9_x = 10000;
  victim_8_x = 10000;
  victim_7_x = 10000;
  victim_6_x = 10000;
  victim_5_x = 10000;
  victim_4_x = 10000;
  boss_placeholder_x = 10000;
  victim_1_x = 10000;

  const randomXInterval = setInterval(moveAroundYoopUndPlory, 500);

  function moveAroundYoopUndPlory () {
    clearScreen();

    victim_15_x = Math.floor(Math.random() * (200 - 0) + 0);
    victim_15_y = Math.floor(Math.random() * (200 - 0) + 0);

    victim_16_x = Math.floor(Math.random() * (200 - 0) + 0);
    victim_16_y = Math.floor(Math.random() * (200 - 0) + 0);

    if (victim_15_status === "dead" && victim_16_status === "dead") {
      clearInterval(randomXInterval);
      renderCutSceneSeven();
    }

    else {
      if (victim_15_status === "dead") {
        victim_15_x = 0;
        victim_15_y = 0;

        victim_15_src = "https://media.discordapp.net/attachments/772064957793435678/820855397555503124/58888429bc2fc2ef3a186093.png";
      }

      if (victim_16_status === "dead") {
        victim_16_x = 0;
        victim_16_y = 0;

        victim_16_src = "https://media.discordapp.net/attachments/772064957793435678/820855397555503124/58888429bc2fc2ef3a186093.png";
      }

      victim_15.onload = function () {
        window_render.drawImage(victim_15, victim_15_x, victim_15_y, 81.1, 68.8);
      }
      victim_15.src = victim_15_src;

      victim_16.onload = function () {
        window_render.drawImage(victim_16, victim_16_x, victim_16_y, 81.1, 68.8);
      }
      victim_16.src = victim_16_src;
    }
  }
}

function renderSceneTen () {
  clearScreen();
  is_not_playing = false;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820864089932431370/W75WOcbm2QOl7vSyBUkAqi76QvDvTtXmUDnl0o525CxBQcLat7kZmobCzJxsGN402M321hmZL5IaROLlCOgdz_VD.png')";
  
  victim_16_x = 10000;
  victim_15_x = 10000;
  victim_14_x = 10000;
  victim_13_x = 10000;
  victim_12_x = 10000;
  victim_11_x = 10000;
  victim_10_x = 10000;
  victim_9_x = 10000;
  victim_8_x = 10000;
  victim_7_x = 10000;
  victim_6_x = 10000;
  victim_5_x = 10000;
  victim_4_x = 10000;
  boss_placeholder_x = 10000;
  victim_1_x = 10000;

  victim_17.onload = function () {
    window_render.drawImage(victim_17, victim_17_x, victim_17_y, 50, 50);
  }
  victim_17.src = victim_17_src;
}

function renderCutSceneOne () {
  clearScreen();

  victim_3.onload = function () {
    window_render.drawImage(victim_3, victim_3_x, victim_3_y, 574 / 5, 435 / 5);
  }
  victim_3.src = victim_3_src;

  setTimeout(function () {
    window_render.font = "10px Arial";
    window_render.fillStyle = "red";
    window_render.textAlign = "left";
    window_render.fillText("Sweet-T...why would you do this?", 0, 50);

    setTimeout(function () {
      clearScreen();

      victim_3.onload = function () {
        window_render.drawImage(victim_3, victim_3_x, victim_3_y, 574 / 5, 435 / 5);
      }
      victim_3.src = victim_3_src;

      window_render.font = "8px Arial";
      window_render.fillStyle = "red";
      window_render.textAlign = "left";
      window_render.fillText("Just so you know, Curriculum Associates security is on their way here.", 0, 50);

      setTimeout(function () {
        clearScreen();

        document.getElementById("soundeffect1").cloneNode(true).play();

        victim_3.onload = function () {
          window_render.drawImage(victim_3, victim_3_x, victim_3_y, 574 / 5, 435 / 5);
        }
        victim_3.src = "https://media.discordapp.net/attachments/772064957793435678/820337225228353556/image-removebg-preview.png";

        window_render.font = "10px Arial";
        window_render.fillStyle = "red";
        window_render.textAlign = "left";
        window_render.fillText("Ugh! I've been shot!", 0, 50);

        setTimeout(function () {
          clearScreen();

          document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820346350645673984/cafe-canteen-affordable-place-to-eat-chat-modern-cafeteria-interior-chairs-tables-have-lunch-togethe.png')";

          document.getElementById("track1").pause();
          document.getElementById("track2").play();

          victim_4.onload = function () {
            window_render.drawImage(victim_4, victim_4_x, victim_4_y, 93, 132.5);
          }
          victim_4.src = victim_4_src;

          setTimeout(function () {
            is_not_playing = false;

            renderSceneTwo();
          }, 1000);
        }, 2000);
      }, 3000)
    }, 3000);
  }, 1);
}

function renderCutSceneTwo () {
  clearScreen();
  is_not_playing = true;
  document.getElementById("window").style.height = "800px";

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820665006345420840/unknown.png?width=880&height=632')";

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820665212414984192/unknown.png?width=840&height=632')";

    setTimeout(function () {
      document.getElementById("soundeffect1").cloneNode(true).play();

      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820665726942576650/unknown.png?width=829&height=632')";

      setTimeout(function () {
        document.getElementById("soundeffect1").cloneNode(true).play();

        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820665843511853066/unknown.png?width=856&height=632')";

        setTimeout(function () {
          document.getElementById("soundeffect1").cloneNode(true).play();

          document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820665944342528010/unknown.png?width=832&height=632')";

          setTimeout(function () {
            document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820666731495161856/unknown.png?width=897&height=632')";

            setTimeout(function () {
              renderSceneFive();
            }, 2000)
          }, 2000)
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

function renderCutSceneThree () {
  clearScreen();

  is_not_playing = true;

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820709305623773184/unknown.png?width=959&height=632')";

    setTimeout(function () {
      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820709491590037504/unknown.png?width=949&height=632')";

      setTimeout(function () {
        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820709840493084702/unknown.png?width=950&height=632')";

        setTimeout(function () {
          renderScene6();
        }, 1000);
      }, 2000);
    }, 2000)
  }, 2000);
}

function renderCutSceneFour () {
  clearScreen();

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820816142074511380/Screen_Shot_2021-03-14_at_8.30.03_PM.png')";

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820816452545282098/Screen_Shot_2021-03-14_at_8.31.12_PM.png')";

    setTimeout(function () {
      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820816616954265630/Screen_Shot_2021-03-14_at_8.31.54_PM.png')";

      setTimeout(function () {
        renderSceneSeven();
      }, 2000);
    }, 2000);
  }, 2000);
}

function renderCutSceneFive () {
  clearScreen();

  is_not_playing = true;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820829672048820264/Screen_Shot_2021-03-14_at_9.20.25_PM.png')";

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820829699818258463/Screen_Shot_2021-03-14_at_9.23.31_PM.png')";

    setTimeout(function () {
      renderSceneEight();
    }, 2000);
  }, 2000);
}

function renderCutSceneSix () {
  clearScreen();
  is_not_playing = true;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820840143644393532/Screen_Shot_2021-03-14_at_10.05.26_PM.png')";

  document.getElementById("track4").pause();
  document.getElementById("track5").play();

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820842583072571402/Screen_Shot_2021-03-14_at_10.15.05_PM.png')";

    setTimeout(function () {
      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820845762362736640/Screen_Shot_2021-03-14_at_10.27.44_PM.png')";

      setTimeout(function () {
        renderSceneNine();
      }, 2000);
    }, 2000);
  }, 3000);
}

function renderCutSceneSeven () {
  clearScreen();
  is_not_playing = true;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820857647267840010/Screen_Shot_2021-03-14_at_11.14.56_PM.png')";

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820857820605186098/Screen_Shot_2021-03-14_at_11.15.37_PM.png')";

    setTimeout(function () {
      renderSceneTen();
    }, 2000);
  }, 2000);
}

function renderCutSceneEight () {
  clearScreen();
  is_not_playing = true;
  
  timer = timer + 800;

  document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820866693014093824/Screen_Shot_2021-03-14_at_11.50.55_PM.png')";

  setTimeout(function () {
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820866990108311552/Screen_Shot_2021-03-14_at_11.52.06_PM.png')";

    setTimeout(function () {
      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820867195403894794/Screen_Shot_2021-03-14_at_11.52.56_PM.png')";

      setTimeout(function () {
        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820867864843517972/Screen_Shot_2021-03-14_at_11.55.35_PM.png')";

        setTimeout(function () {
          document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820868152375640064/Screen_Shot_2021-03-14_at_11.54.38_PM.png')";

          setTimeout(function () {
            document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820868203638292510/Screen_Shot_2021-03-14_at_11.56.30_PM.png')";

            setTimeout(function () {
              document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820868405908996167/Screen_Shot_2021-03-14_at_11.57.42_PM.png')";

              setTimeout(function () {
                document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820869066201235466/Screen_Shot_2021-03-15_at_12.00.20_AM.png')";

                setTimeout(function () {
                  location.href = "";
                }, 10000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 3000);
    }, 2000);
  }, 2000);
}

function victim1_blood () {
  clearScreen();

  victim_1.onload = function () {
    window_render.drawImage(victim_1, victim_1_x, victim_1_y, 112 - 30, 226 - 50);
  }
  
  if (victim_1_status === "alive") {
    victim_1.src = victim_1_blood_src;
  }

  else {
    victim_1.src = death_src;
  }

  setTimeout(function () {
    victim_2.onload = function () {
      window_render.drawImage(victim_2, victim_2_x, victim_2_y, 98 - 20, 276 - 20);
    }
    
    if (victim_2_status === "alive") {
      victim_2.src = victim_2_src;
    }

    else {
      victim_2.src = death_src;
    }

    setTimeout(function () {
      clearScreen();

      victim_1.onload = function () {
        window_render.drawImage(victim_1, victim_1_x, victim_1_y, 112 - 30, 226 - 50);
      }
      
      if (victim_1_status === "alive") {
        victim_1.src = victim_1_src;
      }

      else {
        victim_1.src = death_src;
      }

      setTimeout(function () {
        victim_2.onload = function () {
          window_render.drawImage(victim_2, victim_2_x, victim_2_y, 98 - 20, 276 - 20);
        }

        if (victim_2_status === "alive") {
          victim_2.src = victim_2_src;
        }

        else {
          victim_2.src = death_src;
        }
      }, 1);
    }, 100);
  }, 1);
}

function victim2_blood () {
  clearScreen();

  victim_2.onload = function () {
    window_render.drawImage(victim_1, victim_2_x, victim_2_y, 98 - 20, 276 - 20);
  }
  
  if (victim_2_status === "alive") {
    victim_2.src = victim_2_blood_src;
  }

  else {
    victim_2.src = death_src;
  }

  setTimeout(function () {
    victim_1.onload = function () {
      window_render.drawImage(victim_1, victim_1_x, victim_1_y, 112 - 30, 226 - 50);
    }
    
    if (victim_1_status === "alive") {
      victim_1.src = victim_2_src;
    }

    else {
      victim_1.src = death_src;
    }

    setTimeout(function () {
      clearScreen();

      victim_2.onload = function () {
        window_render.drawImage(victim_2, victim_2_x, victim_2_y, 98 - 20, 276 - 20);
      }
      
      if (victim_2_status === "alive") {
        victim_2.src = victim_2_src;
      }

      else {
        victim_2.src = death_src;
      }

      setTimeout(function () {
        victim_1.onload = function () {
          window_render.drawImage(victim_1, victim_1_x, victim_1_y, 112 - 30, 226 - 50);
        }
        

        if (victim_1_status === "alive") {
          victim_1.src = victim_1_src;
        }

        else {
          victim_1.src = death_src;
        }
      }, 1);
    }, 100);
  }, 1);
}

function barDeath () {
  if (victim_12_status === "dead" && victim_13_status === "dead") {
    setTimeout(function () {
      renderCutSceneFive();
    }, 1000);
  }

  else {
    if (victim_12_status === "dead") {
      clearScreen();

      victim_12.onload = function () {
        window_render.drawImage(victim_12, victim_12_x, victim_12_y, 50, 50);
      }
      victim_12.src = "https://media.discordapp.net/attachments/772064957793435678/820820360374255616/poop_PNG46.png?width=520&height=447";

      victim_13.onload = function () {
        window_render.drawImage(victim_13, victim_13_x, victim_13_y, 81.1, 68.8);
      }
      victim_13.src = victim_13_src;
    }

    if (victim_13_status === "dead") {
      clearScreen();

      victim_13.onload = function () {
        window_render.drawImage(victim_13, victim_13_x, victim_13_y, 50, 50);
      }
      victim_13.src = "https://media.discordapp.net/attachments/772064957793435678/820820360374255616/poop_PNG46.png?width=520&height=447";

      victim_12.onload = function () {
        window_render.drawImage(victim_12, victim_12_x, victim_12_y, 81.1, 68.8);
      }
      victim_12.src = victim_12_src;
    }
  }
}

function holdYourFire () {
  window_render.font = "30px Arial";
  window_render.fillStyle = "red";
  window_render.textAlign = "center";
  window_render.fillText("HOLD YOUR FIRE", window_canvas.width/2, window_canvas.height/2); 
}

// Background
document.querySelector("body").style.backgroundColor = "black";
document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820119084061687819/unknown.png?width=1120&height=632')";

// Set position of machine gun fire 
$("#machine_gun_fire").hide();
document.getElementById("machine_gun_fire").style.position = "absolute";
document.getElementById("machine_gun_fire").style.zIndex = "100";

// Gun tracking
const screams_array = ["soundeffect2", "soundeffect3", "soundeffect4", "soundeffect5"];

$(document).mousemove(function (e) {
  $("#machine_gun_fire").css({
    left: e.clientX,
    top: e.clientY
  });
});

document.getElementById("window").addEventListener('mousedown', e => {
  if (is_not_playing === true) {
    return false;
  }

  $("#machine_gun_fire").show();

  document.getElementById("soundeffect1").cloneNode(true).play();

  const mousePos = {
    x: event.clientX - window_canvas.offsetLeft,
    y: event.clientY - window_canvas.offsetTop
  };

  if (hitActor("victim_1") === true) {
    victim_1_hp = victim_1_hp - 30;

    if (victim_1_hp < 1) {
      victim_1_status = "dead";
      victim_2_x = 50;
      victim_1_x = 1000;
      victim2_blood();
      callBossPlaceHolder(victim_2_x, victim_2_y);
    }

    victim1_blood();
  }

  if (hitActor("boss_placeholder") === true) {
    victim_2_hp = victim_2_hp - 30;

    if (victim_2_hp < 1) {
      victim_2_status = "dead";
      clearScreen();
      boss_placeholder_x = 100000;
      timer = timer + 50;

      setTimeout(function () {
        clearScreen();
        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820330164055441458/139253620-appropriately-equipped-high-school-canteen-providing-services-for-students-community-class.png?width=1180&height=632')";
        holdYourFire();
        is_not_playing = true;

        setTimeout(function () {
          renderCutSceneOne();
        }, 1000);
      }, 1000)
    }

    victim2_blood()
  }

  if (hitActor("victim_4") === true) {
    victim_4_hp = victim_4_hp - 30;

    if (victim_4_hp < 1) {
      victim_4_status = "dead";

      setTimeout(function () {
        clearScreen();
        document.getElementById("window").style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/l8hpeSxiRxGMDGIBRl-PYJrFsarWNQlWYhvFAG1LYOA/https/lh3.googleusercontent.com/proxy/Um6kdGiLENut1AhkN7pSt2oNN7D5LQ31wWSz023I1xK6RjdOoNdlYWyhsQtdXeTBVWLZrDPxvKRekXMl_sMq_6yaDncBj8L9b_MtR-a_Cpnfg9Z-ltZZ__8PRTmL')";

        renderSceneThree();
      }, 1000)
    }
  }

  if (hitActor("victim_5") === true) {
    victim_5_hp = victim_5_hp - 30;

    if (victim_5_hp < 1) {
      victim_5_status = "dead";
      is_not_playing = true;
      victim_5_x = 10000;
      victim_4_x = 10000;
      boss_placeholder_x = 10000;
      victim_1_x = 10000;
      clearScreen();

      setTimeout(function () {
        clearScreen();
        timer = timer + 50;
        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820413462265987142/unknown.png')";
        clearScreen();

        document.getElementById("track2").pause();
        document.getElementById("track3").play();
        document.getElementById("soundeffect6").play();

        setTimeout(function () {
          clearScreen();
          document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820418260179746836/basketball-hoop-horizontal-bars-on-260nw-1660543450.png')";

          is_not_playing = false;
          renderSceneFour();
        }, 2000);
      }, 1000)
    }
  }

  if (hitActor("victim_6") === true) {
    victim_6_hp = victim_6_hp - 30;

    if (victim_6_hp < 1) {
      victim_6_x = 10000;

      if (victim_7_hp < 1) {
        clearScreen();
        timer = timer + 10;
        renderCutSceneTwo();
      }
    }
  }

  if (hitActor("victim_7") === true) {
    victim_7_hp = victim_7_hp - 30;

    if (victim_7_hp < 1) {
      victim_7_x = 100000;

      if (victim_6_hp < 1) {
        clearScreen();
        timer = timer + 10;
        renderCutSceneTwo();
      }
    }
  }

  if (hitActor("victim_8") === true) {
    timer = timer + 10;

    renderCutSceneThree();
  }

  if (hitActor("victim_9") === true) {
    victim_9_hp = victim_9_hp - 50;

    if (victim_9_hp < 1) {
      timer = timer + 5;
      victim_9_status = "dead";
    }
  }

  if (hitActor("victim_10") === true) {
    victim_10_hp = victim_10_hp - 50;

    if (victim_10_hp < 1) {
      timer = timer + 5;
      victim_10_status = "dead";
    }
  }

  if (hitActor("victim_11") === true) {
    victim_11_hp = victim_11_hp - 50;

    if (victim_11_hp < 1) {
      timer = timer + 5;
      victim_11_status = "dead";
    }
  }

  if (hitActor("victim_12") === true) {
    victim_12_hp = victim_12_hp - 50;

    if (victim_12_hp < 1) {
      victim_12_status = "dead";
      barDeath();
    }
  }

  if (hitActor("victim_13") === true) {
    victim_13_hp = victim_13_hp - 50;

    if (victim_13_hp < 1) {
      victim_13_status = "dead";
      barDeath();
    }
  }

  if (hitActor("victim_14") === true) {
    victim_14_hp = victim_14_hp - 50;

    if (victim_14_hp < 1) {
      victim_14_status = "dead";
      renderCutSceneSix();
    }
  }

  if (hitActor("victim_15") === true) {
    victim_15_hp = victim_15_hp - 50;

    if (victim_15_hp < 1) {
      victim_15_status = "dead";
    }
  }

  if (hitActor("victim_16") === true) {
    victim_16_hp = victim_16_hp - 50;

    if (victim_16_hp < 1) {
      victim_16_status = "dead";
    }
  }

  if (hitActor("victim_17") === true) {
    victim_17_hp = victim_17_hp - 50;

    if (victim_17_hp < 1) {
      renderCutSceneEight();
    }
  }
  
  if (is_not_playing === false) {
    let item = screams_array[Math.floor(Math.random() * screams_array.length)];
    document.getElementById(item).play();
  }

  setTimeout(function () {
    $("#machine_gun_fire").hide();
  }, 100)
});

document.querySelector("body").addEventListener('mouseup', e => {
  $("#machine_gun_fire").hide();
});

// Machine gun fire
const blink_speed = 100; 
const blink = setInterval(function () {
  const ele = document.getElementById('machine_gun_fire');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

// Key Detection 
$(this).keypress(function (event) {
  if (is_not_playing === true && event.keyCode === 120 && screen === 0) {
    document.getElementById("track1").play();
    screen = 1;
    document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820120770957017099/unknown.png?width=1112&height=632')";

    setTimeout(function () {
      document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820124504986484806/unknown.png?width=803&height=632')";

      setTimeout(function () {
        document.getElementById("window").style.backgroundImage = "url('https://media.discordapp.net/attachments/772064957793435678/820131608513347595/wu7rx0PzUcCXlLanC_8ekUgXgaEZzO35kkSQvL8A-Frikru1LggS9j8rRKlxr-t4d814NEQvqB6kddmxyL8jBDqY.png')";
      }, 2000);

      setTimeout(function () {
        renderSceneOne();
        setTimeout(function () {
          holdYourFire();

          setTimeout(function () {
            clearScreen();
            renderSceneOne();

            is_not_playing = false;
          }, 500);
        }, 50);
      }, 2000);
    }, 1000);
  }
});

// Screen Click Detection 
$("#window").click(function () {
  if (isCarCutscene === true) {
    timer = timer + 10;
    renderCutSceneThree();
    isCarCutscene = false;
  }

  else {
    return false;
  }
});