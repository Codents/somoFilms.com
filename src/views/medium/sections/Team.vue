<template>
  <section class="team-container">
    <div class="row">
      <div :class="['cell', 'one', isLandscape ? 'landscape' : 'portrait']"
           @click="showBio =! showBio"></div>
      <div :class="['cell', 'two', isLandscape ? 'landscape' : 'portrait']"></div>
    </div>
    <div class="row">
      <div :class="['cell', 'three', isLandscape ? 'landscape' : 'portrait']"></div>
      <div :class="['cell', 'four', isLandscape ? 'landscape' : 'portrait']"></div>
    </div>
    <transition enter-active-class="animated bounceInRight"
                leave-active-class="animated hinge">
      <div class="bio"
           v-show="showBio"
           @click="showBio=false">
        <div class="profile">
          <div class="picture">
          </div>
          <div class="text-container">
            <span class="name">Kike Palacio</span>
            <div class="text">
              {{ $t('team.bio.kike') }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: ['isLandscape'],
  data: function() {
    return {
      showBio: false
    };
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
      }
      &.three {
        &.landscape {
          background-image: url('../../../assets/img/team_landscape_kike_palacios.jpg');
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
      }
      &.four {
        &.landscape {
          background-image: url('../../../assets/img/team-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
        }
      }
    }
  }
  .bio {
    position: absolute;
    height: 70%;
    top: 4rem;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 1rem;
    padding: 0.5rem;
    text-align: justify;
    .profile {
      display: flex;
      flex-direction: row;
      height: 100%;
      .text-container {
        overflow-y: auto;
        width: 60%;
        .name {
          font-size: 2.5rem;
          margin-top: 0.2rem;
          padding-left: 0.5rem;
          font-weight: bold;
        }
        .text {
          font-size: 2rem;
          padding: 0.5rem;
        }
      }
      .picture {
        height: 100%;
        width: 40%;
        background-image: url('../../../assets/img/team_portrait_kike_palacios.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        border-radius: 5px;
      }
    }
  }
}
</style>
