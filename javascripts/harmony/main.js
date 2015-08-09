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
  trees = []
  cloud1 = new Cloud(800, 0, 1)
  clouds.push(cloud1)

  cloud2 = new Cloud(400, 0, 1)
  clouds.push(cloud2)

  cloud3 = new Cloud(800, 20, 1.5)
  clouds.push(cloud3)

  tree1 = new Tree(70, 450, 0)
  trees.push(tree1)

  tree2 = new Tree(120, 440, 0)
  trees.push(tree2)

  tree3 = new Tree(400, 450, 0)
  trees.push(tree3)

  tree4 = new Tree(700, 400, 0)
  trees.push(tree4)

  tree5 = new Tree(770, 450, 0)
  trees.push(tree5)

  for (var i = clouds.length - 1; i >= 0; i--) {
    stage.addChild(clouds[i])
  };

  for (var i = trees.length - 1; i >= 0; i--) {
    stage.addChild(trees[i])
  };

}

function update () {
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].setViewportX(clouds[i].viewportX - clouds[i].speed)
    clouds[i].scaleX()
  }

  for (var i = 0; i < trees.length; i++) {
    trees[i].scaleY()
  }

  renderer.render(stage)
  requestAnimFrame(update)
}
