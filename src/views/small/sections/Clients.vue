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

export default {
  mounted() {
    const height = screen.availHeight;
    engine = Engine.create();
    const world = engine.world;
    render = Render.create({
      element: this.$refs.world,
      engine: engine,
      options: {
        width: screen.availWidth,
        height,
        showAngleIndicator: true
      }
    });
    const wallsWidth = 10;
    World.add(world, [
      // walls : Se calcula por su centro
      Bodies.rectangle(screen.availWidth / 2, 0, screen.availWidth, wallsWidth, { isStatic: true }), // Top
      Bodies.rectangle(screen.availWidth / 2, height, screen.availWidth, wallsWidth, { isStatic: true }), // Bottom
      Bodies.rectangle(screen.availWidth, height / 2, wallsWidth, height, { isStatic: true }), // Right
      Bodies.rectangle(0, height / 2, wallsWidth, height, { isStatic: true }) // Left
    ]);
    runner = Runner.create();
    const stack = this.clientBuilder();
    World.add(world, stack);
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: screen.availWidth, y: height }
    });
  },
  methods: {
    handle() {
      console.log('Init animation');
      Matter.Render.stop(render);
      Render.run(render);
      Runner.run(runner, engine);
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

