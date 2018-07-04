<template>
  <section class="clients-container">
    <button class="t-bottom"
            @click="handle">Init</button>
    <div class="world"
         ref="world">

    </div>
  </section>
</template>

<script>
import Matter from 'matter-js';

const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Composites = Matter.Composites;
const Common = Matter.Common;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const World = Matter.World;
const Bodies = Matter.Bodies;

let runner = null;
let engine = null;
let render = null;
let world = null;
let stack = null;

export default {
  mounted() {
    console.log('CLIENTS MOUNTED');
  },
  methods: {
    handle() {
      console.log('Init animation');
      this.destroyWorld();
      this.initWorld();
      this.compoundWorld();
    },
    initWorld() {
      engine = Engine.create();
      world = engine.world;
      render = Render.create({
        element: this.$refs.world,
        engine: engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          showAngleIndicator: true
        }
      });
      runner = Runner.create();
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight }
      });
    },
    compoundWorld() {
      if (!stack) stack = this.clientBuilder();
      World.add(world, stack);
      World.add(world, this.contentBuilder());
      World.add(world, this.createMouseConstrant());
      Render.run(render);
      Runner.run(runner, engine);
    },
    destroyWorld() {
      if (render) {
        Matter.Render.stop(render);
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
      }
      if (world) Matter.World.clear(world);
      if (engine) Matter.Engine.clear(engine);
    },
    contentBuilder() {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const wallsWidth = 10;
      return [
        // walls : Se calcula por su centro
        Bodies.rectangle(
          width / 2,
          0,
          width,
          wallsWidth,
          { isStatic: true }
        ), // Top
        Bodies.rectangle(
          width / 2,
          height,
          width,
          wallsWidth,
          { isStatic: true }
        ), // Bottom
        Bodies.rectangle(width, height / 2, wallsWidth, height, {
          isStatic: true
        }), // Right
        Bodies.rectangle(0, height / 2, wallsWidth, height, { isStatic: true }) // Left
      ];
    },
    createMouseConstrant() {
      const mouse = Mouse.create(render.canvas);
      return MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
    },
    clientBuilder() {
      return Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
        let sides = Math.round(Common.random(1, 8));

        // triangles can be a little unstable, so avoid until fixed
        sides = sides === 3 ? 4 : sides;

        // round the edges of some bodies
        let chamfer = null;
        if (sides > 2 && Common.random() > 0.7) {
          chamfer = {
            radius: 10
          };
        }

        switch (Math.round(Common.random(0, 1))) {
          case 0:
            if (Common.random() < 0.8) {
              return Bodies.rectangle(
                x,
                y,
                Common.random(25, 50),
                Common.random(25, 50),
                { chamfer: chamfer }
              );
            } else {
              return Bodies.rectangle(
                x,
                y,
                Common.random(80, 120),
                Common.random(25, 30),
                { chamfer: chamfer }
              );
            }
          case 1:
            return Bodies.polygon(x, y, sides, Common.random(25, 50), {
              chamfer: chamfer
            });
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.clients-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
  .t-bottom {
    position: absolute;
    height: 20px;
    flex-shrink: 0;
    width: 100px;
    border: solid 1px blueviolet;
    border-radius: 5px;
  }
  .world {
  }
}
</style>

