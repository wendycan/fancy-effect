function Butterfly(x, y, speed) {
  this.texture_1 = PIXI.Texture.fromImage('/resources/butterfly_1.png')
  this.texture_2 = PIXI.Texture.fromImage('/resources/butterfly_2.png')
  PIXI.Sprite.call(this, this.texture_1)

  this.originSpeed = speed
  this.position.x = x
  this.position.y = y
  this.speed = speed
  this.currentY = y
  this.changed = false
  this.counter = 0

  this.increase = true
  this.viewportX = x
}

Butterfly.prototype = Object.create(PIXI.Sprite.prototype)
Butterfly.prototype.constructor = Butterfly

Butterfly.prototype.setViewportX = function(newViewportX) {
  this.viewportX = this.checkViewportXBounds(newViewportX)
  this.position.x = this.viewportX

  this.counter++
    if (this.counter > 15) {
      this.changed = !this.changed
      if (this.changed) {
        this.texture = this.texture_2
      } else {
        this.texture = this.texture_1
      }
      this.counter = 0
    }
}

Butterfly.prototype.checkViewportXBounds = function(viewportX) {
  var minViewportX = 0
  var randomDeltaX = Math.ceil(Math.random() * 100)
  if (viewportX > 800) {
    this.speed = this.originSpeed
    viewportX = minViewportX - randomDeltaX
  }
  return viewportX
}

Butterfly.prototype.moveY = function() {
  if (this.currentY > 300) {
    this.increase = false
    this.currentY -= 0.3
    this.position.y = this.currentY
    return
  }
  if (this.currentY < 150) {
    this.increase = true
    this.currentY += 0.3
    this.position.y = this.currentY
    return
  }
  if (this.increase) {
    this.currentY += 0.3
    this.speed -= 0.001
    this.position.y = this.currentY
    return
  } else {
    this.currentY -= 0.3
    this.speed += 0.001
    this.position.y = this.currentY
    return
  }
}
