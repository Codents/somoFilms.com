<template>
  <section class="clients-container f f-column h-100">
    <div class="header f f-column f-justify-center">
      <span class="title">{{ $t('clients.title') }}</span>
    </div>
    <div class="body f f-column f-justify-center h-100 w-100">
      <div class="cli-carrousel p-relative">
        <i class="icon-nav-prev icon-medium-nav-prev p-absolute"
           @click="scrollLeft" />
        <i class="icon-nav-next icon-medium-nav-next p-absolute"
           @click="scrollRight" />
        <div class="track f f-row" ref="track">
          <div v-for="(logo, index) in clients"
               :key="index"
               class="item f f-column f-space-between f-shrink-0">
            <div class="logo f f-column f-justify-center f-align-items-center f-grow-1">
              <img alt="logo"
                   class="pic"
                   :src="logo.src" />
            </div>
            <span class="title">{{ logo.name || 'Some name' }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenLite, Power2 } from 'gsap/umd/TweenLite';
import 'gsap/umd/ScrollToPlugin';
import clientResources from '@/mixins/clientsResources';

export default {
  mixins: [clientResources],
  data: function() {
    return {
      clients: this.loadTextures()
    };
  },
  methods: {
    scrollLeft() {
      const width = this.$refs.track.offsetWidth;
      const left = this.$refs.track.scrollLeft;
      TweenLite.to(this.$refs.track, 1, {
        scrollTo: { x: left - width < 0 ? 0 : left - width },
        ease: Power2.easeOut
      });
    },
    scrollRight() {
      const width = this.$refs.track.offsetWidth;
      const left = this.$refs.track.scrollLeft;
      TweenLite.to(this.$refs.track, 1, {
        scrollTo: { x: left + width },
        ease: Power2.easeOut
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../styles/base.scss';
@import '../../styles/flex.scss';
.icon-nav-prev {
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  border: solid 1px;
  background-color: rgba(255, 255, 255, 0.8);
}

.icon-nav-next {
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  border: solid 1px;
  background-color: rgba(255, 255, 255, 0.8);
}
.clients-container {
  position: relative;
}
.icon-close {
  z-index: 40;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.header {
  height: 20%;
  .title {
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    font-size: 4rem;
    text-align: center;
  }
}
.body {
  -webkit-overflow-scrolling: touch;
  .cli-carrousel {
    margin: 1rem;
    .controls {
      position: absolute;
    }
    .track {
      overflow-x: auto;
      .item {
        border: solid 1px #eae6e6;
        margin: 1rem;
        padding: 0.5rem;
        .logo {
          .pic {
            width: 150px;
          }
        }
        .title {
          text-align: center;
          font-size: 2rem;
        }
      }
      .item:first-child {
        margin-left: 6rem;
      }
      .item:last-child {
        padding-right: 6rem;
      }
    }
  }
}
</style>

