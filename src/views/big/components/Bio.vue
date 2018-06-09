<template>
  <div :class="['bio', isLandscape ? 'landscape' : 'portrait']"
       @click="$emit('click')">
    <span class="name">{{ $t(name) }}</span>
    <div class="text">
      {{ $t(bioText) }}
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
    width: 40%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    .name {
      height: 20%;
      font-size: 2.5rem;
      margin-top: 0.2rem;
      padding-left: 0.5rem;
      font-weight: bold;
    }
    .text {
      height: 80%;
      text-align: justify;
      font-size: 2rem;
      padding: 0.5rem;
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
