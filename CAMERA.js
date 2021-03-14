// Camera position and sprites

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

let victim_1_hp = 500;
let victim_2_hp = 400;
let victim_3_hp = 400;
let victim_4_hp = 300;
let victim_5_hp = 700;
let victim_6_hp = 700;
let victim_7_hp = 700;

let victim_1_status = "alive";
let victim_2_status = "alive";
let victim_3_status = "alive";
let victim_4_status = "alive";
let victim_5_status = "alive";

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
    sprite_height = victim_y.height
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