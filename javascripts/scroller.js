function Far () {
  var texture = PIXI.Texture.fromImage('/resources/bg-far.png')
  PIXI.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 0
  this.tilePosition.x = 0
  this.tilePosition.y = 0
}

Far.constructor = Far
Far.prototype = Object.create(PIXI.TilingSprite.prototype)
Far.prototype.update = function () {
  this.tilePosition.x -= 0.128
}

function Mid () {
  var texture = PIXI.Texture.fromImage('/resources/bg-mid.png')
  PIXI.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 128
  this.tilePosition.x = 0
  this.tilePosition.y = 0
}

Mid.constructor = Mid
Mid.prototype = Object.create(PIXI.TilingSprite.prototype)
Mid.prototype.update = function () {
  this.tilePosition.x -= 0.64
}
