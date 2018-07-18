<template>
  <section class="clients-container">
    <button class="bt-start"
            v-show="gameStoped"
            @click="handle">START</button>
    <div class="gameover"
         v-show="gameOver">
      <i class="icon-close icon-small-close"
         @click="gameOver = !gameOver" />
      <div class="header">
        <span class="title">{{ $t('clients.title') }}</span>
      </div>
      <div class="body">
        <div class="cli-carrousel">
          <div class="controls"></div>
          <div class="track">
            <div v-for="(logo, index) in textures"
                 :key="index">
              <div class="item">
                <div class="w-logo">
                  <img alt="logo"
                       :src="logo.src" />
                </div>
                <span class="title">{{ logo.name || 'Some name' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="score">{{ score }}</span>
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
const Events = Matter.Events;
const MouseConstraint = Matter.MouseConstraint;
const Composite = Matter.Composite;
const Mouse = Matter.Mouse;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Bounds = Matter.Bounds;

let runner = null;
let engine = null;
let render = null;
let world = null;
let mouseConstrant = null;

const INTERVAL = 1000;

export default {
  mixins: [clientResources],
  data: function() {
    return {
      intervalPtr: null,
      interval: INTERVAL,
      time: 0,
      score: 0,
      gameStoped: true,
      gameOver: false,
      index: 0,
      textures: this.loadTextures(),
      worldHeight: window.innerHeight
    };
  },
  mounted() {
    this.destroyWorld();
    this.initWorld();
    this.compoundWorld();
  },
  beforeDestroy() {
    clearInterval(this.intervalPtr);
    this.interval = INTERVAL;
    this.gameOver = false;
    this.gameStoped = true;
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
      this.gameStoped = false;
      this.score = 0;
      this.clientBuilder();
      this.intervalPtr = setInterval(this.updateLoop.bind(this), this.interval);
    },
    updateLoop() {
      this.time += this.interval;
      if (this.time >= this.interval * 4) {
        this.time = 0;
        if (this.interval > 300) this.interval -= 200;
        clearInterval(this.intervalPtr);
        this.intervalPtr = setInterval(
          this.updateLoop.bind(this),
          this.interval
        );
      }
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
          height: this.worldHeight,
          background: 'transparent',
          wireframes: false,
          showAngleIndicator: false
        }
      });
      runner = Runner.create();
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: this.worldHeight }
      });
    },
    compoundWorld() {
      World.add(world, this.contentBuilder());
      mouseConstrant = this.createMouseConstrant();
      Events.on(mouseConstrant, 'mousedown', this.handleMouseClick.bind(this));
      Events.on(engine, 'collisionActive', this.handleCollision.bind(this));
      World.add(world, mouseConstrant);
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
    handleCollision() {
      if (Composite.allBodies(world).length > 30) {
        this.gameOver = true;
        clearInterval(this.intervalPtr);
        this.time = 0;
        this.interval = INTERVAL;
        this.gameStoped = true;
        this.destroyWorld();
        this.initWorld();
        this.compoundWorld();
      }
    },
    handleMouseClick(ev) {
      const body = Composite.allBodies(world).filter(
        k =>
          k.label !== 'CONTAINER' &&
          Bounds.contains(k.bounds, ev.mouse.position)
      );
      if (body.length) {
        this.score += Number(body[0].points);
        World.remove(world, body);
      }
    },
    contentBuilder() {
      const height = this.worldHeight;
      const width = window.innerWidth;
      const wallsWidth = 10;
      const render = {
        fillStyle: 'rgba(0,0,0,0)'
      };
      return [
        // walls : Se calcula por su centro
        Bodies.rectangle(width / 2, 0, width, wallsWidth, {
          isStatic: true,
          render,
          label: 'CONTAINER'
        }), // Top
        Bodies.rectangle(width / 2, height, width, wallsWidth, {
          isStatic: true,
          render,
          label: 'CONTAINER'
        }), // Bottom
        Bodies.rectangle(width, height / 2, wallsWidth, height, {
          isStatic: true,
          render,
          label: 'CONTAINER'
        }), // Right
        Bodies.rectangle(0, height / 2, wallsWidth, height, {
          isStatic: true,
          render,
          label: 'CONTAINER'
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
        },
        points: texture.points
      });
      World.addBody(world, body);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/base.scss';
.clients-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}
.bt-start {
  position: absolute;
  z-index: 18;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
  border-radius: 5px;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  font-size: 2.2rem;
  background-color: white;
  font-family: 'Poiret One', serif;
  outline: none;
  animation: blinker 2s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.gameover {
  .icon-close {
    z-index: 40;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
  z-index: 20;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  .header {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .cli-carrousel {
      position: relative;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 75%;
      .controls {
        position: absolute;
      }
      .track {
        display: flex;
        flex-direction: row;
        .item {
          height: 100%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: solid 1px #eae6e6;
          margin: 0.5rem;
          padding: 0.5rem;
          .w-logo {
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .logo {
              width: 150px;
            }
          }
          .title {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
.score {
  position: absolute;
  z-index: 19;
  padding: 1rem;
  right: 0.5rem;
  font-weight: bold;
  font-size: 3rem;
  color: #312f2f;
}
</style>

