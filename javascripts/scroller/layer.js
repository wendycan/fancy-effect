function Far() {
  var texture = PIXI.Texture.fromImage('/resources/bg-far.png')
  PIXI.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 0
  this.tilePosition.x = 0
  this.tilePosition.y = 0
  this.viewportX = 0
}

Far.constructor = Far
Far.prototype = Object.create(PIXI.TilingSprite.prototype)

Far.DELTA_X = 0.064

Far.prototype.setViewportX = function(newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX
  this.viewportX = newViewportX
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X)
}

function Mid() {
  var texture = PIXI.Texture.fromImage('/resources/bg-mid.png')
  PIXI.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 128
  this.tilePosition.x = 0
  this.tilePosition.y = 0
  this.viewportX = 0
}

Mid.DELTA_X = 0.32

Mid.constructor = Mid
Mid.prototype = Object.create(PIXI.TilingSprite.prototype)

Mid.prototype.setViewportX = function(newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX
  this.viewportX = newViewportX
  this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X)
}
