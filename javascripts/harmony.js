function init() {
  stage = new PIXI.Stage(0x37a463)
  renderer = new PIXI.autoDetectRenderer(
    800,
    500, {
      view: document.getElementById('game-canvas')
    }
  )

  loadObject()
  requestAnimFrame(update)
}

function loadObject () {
  clouds = []
  cloud1 = new Cloud(800, 0, 2)
  clouds.push(cloud1)

  cloud2 = new Cloud(500, 0, 2)
  clouds.push(cloud2)

  cloud3 = new Cloud(800, 20, 2.5)
  clouds.push(cloud3)

  for (var i = clouds.length - 1; i >= 0; i--) {
    stage.addChild(clouds[i])
  };
}

function update () {
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].setViewportX(clouds[i].viewportX - clouds[i].speed)
  };
  renderer.render(stage)
  requestAnimFrame(update)
}

function Cloud (x, y, speed) {
  var texture = PIXI.Texture.fromImage('/resources/cloud.png')
  PIXI.Sprite.call(this, texture)

  this.position.x = x
  this.position.y = y
  this.speed = speed || 1
  this.viewportX = x
}

Cloud.prototype.constructor = Cloud
Cloud.prototype = Object.create(PIXI.Sprite.prototype)

Cloud.prototype.setViewportX = function (newViewportX) {
  this.viewportX = this.checkViewportXBounds(newViewportX)

  this.position.x = this.viewportX
}

Cloud.prototype.checkViewportXBounds = function(viewportX) {
  var maxViewportX = 800
  var randomDeltaX = Math.ceil(Math.random() * 500)
  if (viewportX < -300)
  {
    viewportX = maxViewportX + randomDeltaX
  }
  return viewportX
}
