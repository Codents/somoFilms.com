<template>
  <section class="team-container">
    <div class="row">
      <div :class="['cell', 'one', isLandscape ? 'landscape' : 'portrait']"
           @click="handleClick"
           id="cellOne"
           ref="cellOne"
           data-name="team.bio.kike.name"
           data-bio-text="team.bio.kike.text"></div>
      <div :class="['cell', 'two', isLandscape ? 'landscape' : 'portrait']"></div>
    </div>
    <div class="row">
      <div :class="['cell', 'three', isLandscape ? 'landscape' : 'portrait']"></div>
      <div :class="['cell', 'four', isLandscape ? 'landscape' : 'portrait']"></div>
    </div>
    <transition :enter-active-class="isLandscape ? 'animated bounceInRight' : 'animated bounceInUp'"
                leave-active-class="animated hinge">
      <Bio :name="name"
           :bioText="bioText"
           :isLandscape="isLandscape"
           v-show="showBio"
           @click="showBio=false" />
    </transition>
  </section>
</template>

<script>
import Bio from '../components/Bio';

export default {
  props: ['isLandscape'],
  components: { Bio },
  data: function() {
    return {
      showBio: false,
      bioText: '',
      name: ''
    };
  },
  methods: {
    handleClick(ev) {
      this.name = this.$refs[ev.currentTarget.id].dataset.name;
      this.bioText = this.$refs[ev.currentTarget.id].dataset.bioText;
      this.showBio = !this.showBio;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
.team-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
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
</style>
