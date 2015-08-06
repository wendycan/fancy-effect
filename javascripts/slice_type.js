function SliceType() {}

SliceType.FRONT      = 0;
SliceType.BACK       = 1;
SliceType.STEP       = 2;
SliceType.DECORATION = 3;
SliceType.WINDOW     = 4;
SliceType.GAP        = 5;

function WallSlice(type, y) {
  this.type   = type;
  this.y      = y;
  this.sprite = null;
}

WallSlice.WIDTH = 64;
