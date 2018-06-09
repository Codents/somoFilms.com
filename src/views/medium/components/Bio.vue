<template>
  <div :class="['bio', isLandscape ? 'landscape' : 'portrait']" @click="$emit('click')">
    <div class="profile">
      <div class="picture">
      </div>
      <div class="text-container">
        <span class="name">{{ $t(name) }}</span>
        <div class="text">
          {{ $t(bioText) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'bioText', 'isLandscape']
};
</script>

<style lang="postcss" scoped>
.bio {
  &.landscape {
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
  &.portrait {
    position: absolute;
    height: 70%;
    top: 4rem;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 1rem;
    padding: 0.5rem;
    overflow-y: auto;
    .profile {
      display: flex;
      flex-direction: column;
      height: 100%;
      .text-container {
        height: 50%;
        .name {
          font-size: 2.5rem;
          margin-top: 0.2rem;
          padding-left: 0.5rem;
          font-weight: bold;
        }
        .text {
          text-align: justify;
          font-size: 2rem;
          padding: 0.5rem;
        }
      }
      .picture {
        height: 50%;
        background-image: url('../../../assets/img/team_landscape_kike_palacios.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 5px;
      }
    }
  }
}
</style>
