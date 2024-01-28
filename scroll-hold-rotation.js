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

AFRAME.registerComponent("rotate-on-hover", {
  init: function () {
    // Flag to track if the component is being hovered
    this.isHovered = false;

    // Store the current rotation state
    this.currentRotation = { x: 0, y: 0, z: 0 };

    // Add event listeners for mouseenter and mouseleave events
    this.el.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.el.addEventListener("mouseleave", this.onMouseLeave.bind(this));

    // Add an event listener to the document for mousemove events
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
  },

  onMouseEnter: function () {
    // Set the hover flag to true when the mouse enters the component
    this.isHovered = true;
  },

  onMouseLeave: function () {
    // Set the hover flag to false when the mouse leaves the component
    this.isHovered = false;
  },

  onMouseMove: function (event) {
    // Check if the component is being hovered
    if (this.isHovered) {
      // Calculate the rotation angles based on the mouse position
      const rotationX = (event.clientY / window.innerHeight) * 360;
      const rotationY = (event.clientX / window.innerWidth) * 360;

      // Update the current rotation state
      this.currentRotation = {
        x: rotationX,
        y: rotationY,
        z: 0,
      };

      // Set the rotation of the object
      this.el.setAttribute("rotation", this.currentRotation);
    }
  },
});
