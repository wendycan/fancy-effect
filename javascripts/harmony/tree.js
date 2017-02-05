function Tree(x, y, speed) {
  var texture = PIXI.Texture.fromImage('/resources/tree.png')
  PIXI.Sprite.call(this, texture)

  this.position.x = x
  this.position.y = y
  this.speed = speed || 1
  this.increase = true
  this.currentHeight = 226
  this.anchor = new PIXI.Point(1, 1)
  this.viewportY = y
}

Tree.prototype = Object.create(PIXI.Sprite.prototype)
Tree.prototype.constructor = Tree

Tree.prototype.setViewportX = function(newViewportX) {
  this.viewportX = this.checkViewportXBounds(newViewportX)

  this.position.x = this.viewportX
}

Tree.prototype.scaleY = function() {
  if (this.currentHeight > 240) {
    this.increase = false
    this.currentHeight -= 0.3
    this.height = this.currentHeight
    return
  }
  if (this.currentHeight < 200) {
    this.increase = true
    this.currentHeight += 0.3
    this.height = this.currentHeight
    return
  }
  if (this.increase) {
    this.currentHeight += 0.3
    this.height = this.currentHeight
    return
  } else {
    this.currentHeight -= 0.3
    this.height = this.currentHeight
    return
  }
}

Tree.prototype.checkViewportXBounds = function(viewportX) {
  var maxViewportX = 800
  var randomDeltaX = Math.ceil(Math.random() * 500)
  if (viewportX < -300) {
    viewportX = maxViewportX + randomDeltaX
  }
  return viewportX
}
