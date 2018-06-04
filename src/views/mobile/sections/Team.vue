<template>
  <section :class="[isLandscape ? 'landscape' : 'portrait', 'team']">
    <div class="row">
      <div class="cell one"
           @click="handleClick"></div>
      <div class="cell two"></div>
    </div>
    <div class="row">
      <div class="cell three"></div>
      <div class="cell four"></div>
    </div>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated hinge">
      <div class="bio"
           v-show="showBio"
           @click="showBio=false">
        <div class="profile">
          <div class="header">
            <span class="name">Kike Palacio</span>
            <img class="picture"
                 src="../../../assets/img/team-4.jpg" />
          </div>
          <div class="text">
            {{ $t('team.bio.kike') }}
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
  },
  methods: {
    handleClick() {
      this.showBio = !this.showBio;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
.portrait {
  &.team {
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
          background-image: url('../../../assets/img/team-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
        }
        &.three {
          background-image: url('../../../assets/img/team-3.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
        }
        &.two {
          background-image: url('../../../assets/img/team-2.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
        }
        &.four {
          background-image: url('../../../assets/img/team-4.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
        }
      }
    }
    .bio {
      position: absolute;
      overflow-y: auto;
      height: 70%;
      top: 4em;
      border-radius: 5px;
      background-color: white;
      margin: 1em;
      padding: 0.5em;
      text-align: justify;
      opacity: 0.9;
      .profile {
        display: flex;
        flex-direction: column;
        .text {
          margin-top: 0.8em;
        }
      }
      .header {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: flex-start;
        .name {
          font-size: 2em;
          margin-top: 0.2em;
        }
        .picture {
          border-radius: 5px;
        }
      }
    }
  }
}
.landscape {
  &.team {
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
          background-image: url('../../../assets/img/team-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        &.two {
          background-image: url('../../../assets/img/team-2.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        &.three {
          background-image: url('../../../assets/img/team-3.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        &.four {
          background-image: url('../../../assets/img/team-4.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
    }
    .bio {
      z-index: 10;
      position: absolute;
      overflow-y: auto;
      height: 60%;
      top: 0.5em;
      border-radius: 5px;
      background-color: white;
      margin: 1em;
      padding: 0.5em;
      text-align: justify;
      opacity: 0.9;
      font-size: 0.7em;
      .profile {
        display: flex;
        flex-direction: column;
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          .name {
            font-size: 2em;
          }
          .picture {
            height: 5em;
            border-radius: 5px;
          }
        }
        .text {
          margin-top: 1em;
        }
      }
    }
  }
}
</style>
