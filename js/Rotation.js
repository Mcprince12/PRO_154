//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.5;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.5;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var planeRotation = this.data.speedOfRotation;
      var planePosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (planeRotation.y < 360) {
          planeRotation.y += 55;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.y > -360) {
          planeRotation.y -= 55;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (planeRotation.z <360) {
          planeRotation.z += 5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y < 360) {
          planePosition.y += 10;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (planeRotation.z > -360) {
          planeRotation.z -= 5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y > -360) {
          planePosition.y -= 10;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "3") {
        if (planeRotation.x > -360) {
          planeRotation.x -= 5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.x > -360) {
          planePosition.x -= 10;
          this.el.setAttribute("position", planePosition);
        }
      }

      if (e.key === "4") {
        if (planeRotation.x > 360) {
          planeRotation.x -= -5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.x > -360) {
          planePosition.x -= -10;
          this.el.setAttribute("position", planePosition);
        }
      }

      if (e.key === "6") {
        if (planeRotation.x > 360) {
          planeRotation.x -= -5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.z > -360) {
          planePosition.z -= -10;
          this.el.setAttribute("position", planePosition);
        }
      }

      if (e.key === "5") {
        if (planeRotation.x > -360) {
          planeRotation.x -= 5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.z > -360) {
          planePosition.z -= 10;
          this.el.setAttribute("position", planePosition);
        }
      }
    });
  }
});
