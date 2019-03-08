<template>
  <div class="bio" @click="$emit('click')">
    <i class="icon-close icon-small-close p-absolute border-r icon-small-menu" />
    <div class="profile">
      <div :class="member" />
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
  props: {
    name: {
      type: String,
      default: '',
    },
    bioText: {
      type: String,
      default: '',
    },
    member: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.bio {
  position: absolute;
  overflow-y: auto;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  padding: 0.5rem;
  text-align: justify;
  z-index: 100;
  .icon-close {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.2rem;
    right: 1rem;
    top: 1rem;
  }
  .profile {
    display: flex;
    flex-direction: column;
    height: 100%;
    .david {
      height: 50%;
      background-image: url('/team/team_landscape_david_palacios.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .salome {
      height: 50%;
      background-image: url('/team/team_landscape_salome_garcia.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .kike {
      height: 50%;
      background-image: url('/team/team_landscape_kike_palacios.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 5px;
    }
    .pedro {
      height: 50%;
      background-image: url('/team/team_landscape_pedro_r_soto.jpg');
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
