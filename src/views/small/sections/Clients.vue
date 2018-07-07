<template>
  <section class="clients-container">
    <i class="icon-add icon-small-add"
       @click="handle" />
    <div class="world"
         ref="world">
    </div>
  </section>
</template>

<script>
import Matter from 'matter-js';
import clientResources from '@/mixins/clientsResources';

const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const World = Matter.World;
const Bodies = Matter.Bodies;

let runner = null;
let engine = null;
let render = null;
let world = null;

export default {
  mixins: [clientResources],
  data: function() {
    return {
      index: 0,
      textures: this.loadTextures()
    };
  },
  mounted() {
    console.log('Init animation');
    this.destroyWorld();
    this.initWorld();
    this.compoundWorld();
  },
  methods: {
    getTexture() {
      if (this.index >= this.textures.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
      return this.textures[this.index];
    },
    handle() {
      this.clientBuilder();
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
          background: 'transparent',
          wireframes: false,
          showAngleIndicator: false
        }
      });
      runner = Runner.create();
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight }
      });
    },
    compoundWorld() {
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
      const render = {
        fillStyle: 'rgba(0,0,0,0)'
      };
      return [
        // walls : Se calcula por su centro
        Bodies.rectangle(width / 2, 0, width, wallsWidth, {
          isStatic: true,
          render
        }), // Top
        Bodies.rectangle(width / 2, height, width, wallsWidth, {
          isStatic: true,
          render
        }), // Bottom
        Bodies.rectangle(width, height / 2, wallsWidth, height, {
          isStatic: true,
          render
        }), // Right
        Bodies.rectangle(0, height / 2, wallsWidth, height, {
          isStatic: true,
          render
        }) // Left
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
      const chamfer = {
        radius: 10
      };
      const texture = this.getTexture();
      const body = Bodies.rectangle(40, 40, texture.w, texture.h, {
        chamfer,
        render: {
          sprite: {
            texture: texture.src
          }
        }
      });
      World.addBody(world, body);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../base.scss';
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
}
.icon-add {
  position: absolute;
  z-index: 18;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 0.2rem;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

