<template>
  <section class="team-container" ref="teamContainer">
    <i :class="['material-icons', 'icon-more', isLandscape ? 'landscape' : 'portrait']"
       @click="viewMore">expand_more</i>
    <div class="row">
      <div :class="['cell', 'picture', 'one', isLandscape ? 'landscape' : 'portrait']"
           @click="handleClick"
           id="cellOne"
           ref="cellOne"
           data-name="team.bio.kike.name"
           data-bio-text="team.bio.kike.text"></div>
      <div :class="['cell', 'bio', isLandscape ? 'landscape' : 'portrait']">
        <div class="name"
             v-t="name"></div>
        <div class="text">{{ $t(bioText) }}{{ $t(bioText) }}</div>
      </div>
    </div>
    <div class="row reverse">
      <div :class="['cell', 'picture', 'two', isLandscape ? 'landscape' : 'portrait']"
           @click="handleClick"
           id="cellOne"
           ref="cellOne"
           data-name="team.bio.kike.name"
           data-bio-text="team.bio.kike.text"></div>
      <div :class="['cell', 'bio', isLandscape ? 'landscape' : 'portrait']">
        <div class="name"
             v-t="name"></div>
        <div class="text"
             v-t="bioText"></div>
      </div>
    </div>
    <div class="row">
      <div :class="['cell', 'picture', 'three', isLandscape ? 'landscape' : 'portrait']"
           @click="handleClick"
           id="cellOne"
           ref="cellOne"
           data-name="team.bio.kike.name"
           data-bio-text="team.bio.kike.text"></div>
      <div :class="['cell', 'bio', isLandscape ? 'landscape' : 'portrait']">
        <div class="name"
             v-t="name"></div>
        <div class="text"
             v-t="bioText"></div>
      </div>
    </div>
    <div class="row reverse">
      <div :class="['cell', 'picture', 'four', isLandscape ? 'landscape' : 'portrait']"
           @click="handleClick"
           id="cellOne"
           ref="cellOne"
           data-name="team.bio.kike.name"
           data-bio-text="team.bio.kike.text"></div>
      <div :class="['cell', 'bio', isLandscape ? 'landscape' : 'portrait']">
        <div class="name"
             v-t="name"></div>
        <div class="text"
             v-t="bioText"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenLite, Power2 } from 'gsap/umd/TweenLite';
import 'gsap/umd/ScrollToPlugin';
import Bio from '../components/Bio';

export default {
  props: ['isLandscape'],
  components: { Bio },
  data: function() {
    return {
      showBio: false,
      bioText: 'team.bio.kike.text',
      name: 'team.bio.kike.name'
    };
  },
  methods: {
    handleClick(ev) {
      this.name = this.$refs[ev.currentTarget.id].dataset.name;
      this.bioText = this.$refs[ev.currentTarget.id].dataset.bioText;
      this.showBio = !this.showBio;
    },
    viewMore() {
      TweenLite.to(this.$refs.teamContainer, 1, {
        scrollTo: '.four',
        ease: Power2.easeOut
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
.team-container {
  background-color: #fafafa;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
  .icon-more {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    &.landscape {
      font-size: 3rem;
    }
    &.portrait {
      font-size: 3.5rem;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    height: 50%;
    flex-shrink: 0;
    &.reverse {
      flex-direction: row-reverse;
    }
    .cell {
      &.picture {
        width: 50%;
        &.one {
          &.landscape {
            background-image: url('../../../assets/img/team_landscape_david_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team_portrait_david_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.three {
          &.landscape {
            background-image: url('../../../assets/img/team_landscape_kike_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team_portrait_kike_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.two {
          &.landscape {
            background-image: url('../../../assets/img/team-3.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team-3.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.four {
          &.landscape {
            background-image: url('../../../assets/img/team-1.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team-1.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
      }
      &.bio {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .name {
          margin-top: 1rem;
          font-size: 3rem;
          font-weight: bold;
        }
        .text {
          padding: 1rem;
          font-size: 1rem;
          overflow-y: auto;
          text-align: justify;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
  /*
    .row {
      height: 50%;
      display: flex;
      .cell {
        width: 50%;
        display: flex;
        &.one {
          &.landscape {
            background-image: url('../../../assets/img/team_landscape_david_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team_portrait_david_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.three {
          &.landscape {
            background-image: url('../../../assets/img/team_landscape_kike_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team_portrait_kike_palacios.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.two {
          &.landscape {
            background-image: url('../../../assets/img/team-3.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team-3.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
        &.four {
          &.landscape {
            background-image: url('../../../assets/img/team-1.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
          &.portrait {
            background-image: url('../../../assets/img/team-1.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          }
        }
      }
    }
  }
  */
}
</style>
