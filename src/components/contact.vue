<template>
    <svg>
      <circle :cx="x" :cy="y" :r="radius" fill="blue" @mousedown="startDragging" @mousemove="drag" @mouseup="stopDragging" />
    </svg>
  </template>
  
  <script>
  export default {
    data() {
      return {
        x: 50,
        y: 50,
        radius: 25,
        isDragging: false,
        mouseX: 0,
        mouseY: 0,
        offsetX: 0,
        offsetY: 0,
      };
    },
    methods: {
      startDragging(event) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.x;
        this.offsetY = event.clientY - this.y;
      },
      drag(event) {
        if (this.isDragging) {
          this.mouseX = event.clientX;
          this.mouseY = event.clientY;
          this.x = this.mouseX - this.offsetX;
          this.y = this.mouseY - this.offsetY;
        }
      },
      stopDragging() {
        this.isDragging = false;
      },
    },
  };
  </script>
  