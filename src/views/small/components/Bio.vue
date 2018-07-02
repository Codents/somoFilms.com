<template>
  <div class="bio"
       @click="$emit('click')">
    <div class="profile">
      <div :class="member">
      </div>
      <div class="text-container">
        <span class="name">{{ $t(name) }}</span>
        <span class="role">{{ $t(role) }}</span>
        <div class="text">
          {{ $t(bioText) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'bioText', 'member', 'role']
};
</script>

<style lang="postcss" scoped>
.bio {
  position: absolute;
  overflow-y: auto;
  height: 70%;
  top: 4rem;
  border-radius: 5px;
  background-color: white;
  margin: 1rem;
  padding: 0.5rem;
  text-align: justify;
  opacity: 0.9;
  .profile {
    display: flex;
    flex-direction: column;
    height: 100%;
    .one {
      height: 50%;
      background-image: url('../../../assets/img/team_landscape_david_palacios.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .two {
      height: 50%;
      background-image: url('../../../assets/img/team_landscape_salome_garcia.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .three {
      height: 50%;
      background-image: url('../../../assets/img/team_landscape_kike_palacios.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .four {
      height: 50%;
      background-image: url('../../../assets/img/team_landscape_pedro_r_soto.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .text-container {
      height: 50%;
      display: flex;
      flex-direction: column;
      .role {
        font-weight: bold;
        font-size: 1.5rem;
      }
      .name {
        font-size: 2rem;
        margin-top: 0.2rem;
      }
      .text {
        margin-top: 0.8rem;
      }
    }
  }
}
</style>
