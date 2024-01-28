AFRAME.registerComponent("scroll-hold-rotation", {
  init: function () {
    this.isRotating = false;
    this.rotationSpeed = 5;

    this.initialCursorX = 0;
    this.initialCursorY = 0;
    this.initialRotation = { x: 0, y: 0, z: 0 };

    document.addEventListener("mousedown", this.onMouseDown.bind(this));
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
  },

  onMouseDown: function (event) {
    // console.log("Click Down");
    if (event.button === 1) {
      this.isRotating = true;

      this.initialCursorX = event.clientX;
      this.initialCursorY = event.clientY;

      this.initialRotation = {
        x: this.el.object3D.rotation.x,
        y: this.el.object3D.rotation.y,
        z: this.el.object3D.rotation.z,
      };

      console.log("Click Down");
    }
  },

  onMouseMove: function (event) {
    if (this.isRotating) {
      console.log("Moving");
      const deltaX = event.clientX - this.initialCursorX + 1;
      const deltaY = event.clientY - this.initialCursorY + 1;

      const newRotationX =
        this.initialRotation.x + (this.rotationSpeed * deltaY) / 360;
      const newRotationY =
        this.initialRotation.y + (this.rotationSpeed * deltaX) / 360;

      this.el.object3D.rotation.set(newRotationX, newRotationY, 0);
    }
  },

  onMouseUp: function (event) {
    if (event.button === 1) {
      this.isRotating = false;
      console.log("Click up");
    }
  },
});
