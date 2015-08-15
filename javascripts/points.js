$(window).resize(resize)
window.onorientationchange = resize;

document.addEventListener('DOMContentLoaded', start, false);

var w = 1024;
var h = 768;

var n = 2000;
var d = 1;
var current = 1;
var objs = 17;
var vx = 0;
var vy = 0;
var vz = 0;
var points1 = [];
var points2 = [];
var points3 = [];
var tpoint1 = [];
var tpoint2 = [];
var tpoint3 = [];
var balls = [];

function start() {

  var ballTexture = new PIXI.Texture.fromImage("/resources/pixel.png");

   renderer = new PIXI.autoDetectRenderer(
    w,
    h, {
      view: document.getElementById('game-canvas')
    }
  )

  stage = new PIXI.Stage;

  makeObject(5);

  for (var i = 0; i < n; i++) {
    tpoint1[i] = points1[i];
    tpoint2[i] = points2[i];
    tpoint3[i] = points3[i];

    var tempBall = new PIXI.Sprite(ballTexture);
    tempBall.anchor.x = 0.5;
    tempBall.anchor.y = 0.5;
    tempBall.alpha = 0.5;
    balls[i] = tempBall;

    stage.addChild(tempBall);
  }

  resize();

  setTimeout(nextObject, 5000);

  requestAnimFrame(update);

}

function nextObject() {

  current++;

  if (current > objs) {
    current = 0;
  }

  makeObject(current);

  setTimeout(nextObject, 8000);

}

function makeObject(t) {
  var xd;

  switch (t) {
    case 0:

      for (var i = 0; i < n; i++) {
        points1[i] = -50 + Math.round(Math.random() * 100);
        points2[i] = 0;
        points3[i] = 0;
      }
      break;

    case 1:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(t * 360 / n) * 10);
        points2[i] = (Math.cos(xd) * 10) * (Math.sin(t * 360 / n) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 2:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(t * 360 / n) * 10);
        points2[i] = (Math.cos(xd) * 10) * (Math.sin(t * 360 / n) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 3:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 4:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 5:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 6:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 7:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 8:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 9:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 10:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 11:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.sin(xd) * 10) * (Math.sin(i * 360 / n) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 12:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.sin(xd) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 13:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 14:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.sin(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.sin(xd) * 10) * (Math.sin(i * 360 / n) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 15:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;

    case 16:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
        points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
        points3[i] = Math.sin(xd) * 100;
      }
      break;

    case 17:

      for (var i = 0; i < n; i++) {
        xd = -90 + Math.round(Math.random() * 180);
        points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
        points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
        points3[i] = Math.sin(i * 360 / n) * 100;
      }
      break;
  }

}

function resize() {
  w = $(window).width() - 16;
  h = $(window).height() - 16;

  renderer.resize(w, h);
}

function update() {
  var x3d, y3d, z3d, tx, ty, tz, ox;

  if (d < 250) {
    d++;
  }

  vx += 0.0075;
  vy += 0.0075;
  vz += 0.0075;

  for (var i = 0; i < n; i++) {
    if (points1[i] > tpoint1[i]) {
      tpoint1[i] = tpoint1[i] + 1;
    }
    if (points1[i] < tpoint1[i]) {
      tpoint1[i] = tpoint1[i] - 1;
    }
    if (points2[i] > tpoint2[i]) {
      tpoint2[i] = tpoint2[i] + 1;
    }
    if (points2[i] < tpoint2[i]) {
      tpoint2[i] = tpoint2[i] - 1;
    }
    if (points3[i] > tpoint3[i]) {
      tpoint3[i] = tpoint3[i] + 1;
    }
    if (points3[i] < tpoint3[i]) {
      tpoint3[i] = tpoint3[i] - 1;
    }

    x3d = tpoint1[i];
    y3d = tpoint2[i];
    z3d = tpoint3[i];

    ty = (y3d * Math.cos(vx)) - (z3d * Math.sin(vx));
    tz = (y3d * Math.sin(vx)) + (z3d * Math.cos(vx));
    tx = (x3d * Math.cos(vy)) - (tz * Math.sin(vy));
    tz = (x3d * Math.sin(vy)) + (tz * Math.cos(vy));
    ox = tx;
    tx = (tx * Math.cos(vz)) - (ty * Math.sin(vz));
    ty = (ox * Math.sin(vz)) + (ty * Math.cos(vz));

    balls[i].position.x = (512 * tx) / (d - tz) + w / 2;
    balls[i].position.y = (h / 2) - (512 * ty) / (d - tz);

  }

  renderer.render(stage);

  requestAnimFrame(update);
}
