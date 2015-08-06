function Far () {
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

Far.DELTA_X = 0.128

Far.prototype.setViewportX = function (newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX
  this.viewportX = newViewportX
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X)
}

function Mid () {
  var texture = PIXI.Texture.fromImage('/resources/bg-mid.png')
  PIXI.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 128
  this.tilePosition.x = 0
  this.tilePosition.y = 0
  this.viewportX = 0
}

Mid.DELTA_X = 0.64

Mid.constructor = Mid
Mid.prototype = Object.create(PIXI.TilingSprite.prototype)

Mid.prototype.setViewportX = function (newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX
  this.viewportX = newViewportX
  this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X)
}

function Scroller (stage) {
  this.far = new Far()
  stage.addChild(this.far)

  this.mid = new Mid()
  stage.addChild(this.mid)

  this.viewportX = 0
}

Scroller.prototype.setViewportX = function (viewportX) {
  this.viewportX = viewportX
  this.far.setViewportX(viewportX)
  this.mid.setViewportX(viewportX)
}

Scroller.prototype.getViewportX = function () {
  return this.viewportX
}

Scroller.prototype.moveViewportXBy = function (units) {
  var newViewportX = this.viewportX + units
  this.setViewportX(newViewportX)
}

function Main () {
  this.stage = new PIXI.Stage(0x66FF99)
  this.renderer = new PIXI.autoDetectRenderer(
    512,
    384,
    {view: document.getElementById('game-canvas')}
  )

  this.loadSpriteSheet()
}

Main.prototype.update = function () {
  this.scroller.moveViewportXBy(Main.SCROLL_SPEED)
  this.renderer.render(this.stage)
  requestAnimFrame(this.update.bind(this))
}

Main.prototype.loadSpriteSheet = function () {
  var assetsToLoad = ['/resources/wall.json']
  loader = new PIXI.AssetLoader(assetsToLoad)
  loader.onComplete = this.spriteSheetLoaded.bind(this)
  loader.load()
}

Main.prototype.spriteSheetLoaded = function () {
  this.scroller = new Scroller(this.stage)
  requestAnimFrame(this.update.bind(this))

  this.pool = new WallSpritesPool()
  this.wallSlices = []
}

Main.SCROLL_SPEED = 5

Main.prototype.borrowWallSprites = function (num) {
  for (var i = 0; i < num; i++) {
    var sprite = this.pool.borrowWindow()
    sprite.position.x = -32 + (i * 64)
    sprite.position.y = 128

    this.wallSlices.push(sprite)

    this.stage.addChild(sprite)
  }
}

Main.prototype.returnWallSprites = function () {
  for (var i = 0; i < this.wallSlices.length; i++) {
    var sprite = this.wallSlices[i]
    this.stage.removeChild(sprite)
    this.pool.returnWindow(sprite)
  }

  this.wallSlices = []
}

function WallSpritesPool () {
  this.createWindows()
}

WallSpritesPool.prototype.createWindows = function () {
  this.windows = []

  this.addWindowSprites(6, 'window_01')
  this.addWindowSprites(6, 'window_02')

  this.shuffle(this.windows)
}

WallSpritesPool.prototype.addWindowSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    this.windows.push(sprite)
  }
}

WallSpritesPool.prototype.shuffle = function (array) {
  var len = array.length
  var shuffles = len * 3
  for (var i = 0; i < shuffles; i++) {
    var wallSlice = array.pop()
    var pos = Math.floor(Math.random() * (len - 1))
    array.splice(pos, 0, wallSlice)
  }
}

WallSpritesPool.prototype.borrowWindow = function () {
  return this.windows.shift()
}

WallSpritesPool.prototype.returnWindow = function (sprite) {
  this.windows.push(sprite)
}
