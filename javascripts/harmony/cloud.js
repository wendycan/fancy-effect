function Cloud (x, y, speed) {
  var texture = PIXI.Texture.fromImage('/resources/cloud.png')
  PIXI.Sprite.call(this, texture)

  this.position.x = x
  this.position.y = y
  this.speed = speed || 1
  this.increase = true
  this.currentWidth = 261

  this.viewportX = x
}

Cloud.prototype.constructor = Cloud
Cloud.prototype = Object.create(PIXI.Sprite.prototype)

Cloud.prototype.setViewportX = function (newViewportX) {
  this.viewportX = this.checkViewportXBounds(newViewportX)

  this.position.x = this.viewportX
}

Cloud.prototype.scaleX = function () {
  if (this.currentWidth > 270) {
    this.increase = false
    this.currentWidth -= 0.3
    this.width = this.currentWidth
    return
  }
  if (this.currentWidth < 250){
    this.increase = true
    this.currentWidth += 0.3
    this.width = this.currentWidth
    return
  }
  if (this.increase) {
    this.currentWidth += 0.3
    this.width = this.currentWidth
    return
  } else {
    this.currentWidth -= 0.3
    this.width = this.currentWidth
    return
  }
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
