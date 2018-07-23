<template>
  <section class="team-container p-relative w-100 h-100 f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('team.title') }}</span>
    </div>
    <div class="body w-100 f f-row f-justify-center f-align-items-start f-wrap">
      <div v-for="(member, index) in team"
           :key="index"
           class="profile f f-column f-justify-start f-align-items-center border-r"
           @click="handleClick"
           :id="member.id"
           :ref="member.id">
        <div class="img-frame f f-column f-justify-center f-align-items-center border-rm w-100">
          <img :alt="member.name"
               class="img border-r"
               :src="member.url[$mq]" />
        </div>
        <div class="text-container">
          <span class="name">{{ $t(member.name) }}</span>
          <span class="role">{{ $t(member.role) }}</span>
          <div class="text">
            {{ $t(member.text) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { team } from '@/constants';
import Bio from './components/BioSm';

export default {
  components: { Bio },
  data: function() {
    return {
      team,
      showBio: false,
      bioText: '',
      name: '',
      role: '',
      member: 'one'
    };
  },
  methods: {
    handleClick(ev) {
      this.name = this.$refs[ev.currentTarget.id][0].dataset.name;
      this.bioText = this.$refs[ev.currentTarget.id][0].dataset.bioText;
      this.showBio = !this.showBio;
      this.role = this.$refs[ev.currentTarget.id][0].dataset.role;
      this.member = ev.currentTarget.id;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../styles/flex.scss';
@import 'animate.css/animate.min.css';
.team-container {
  .header {
    height: 20%;
    margin-bottom: 2rem;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 4rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    max-width: 1024px;
    margin-bottom: 0.4rem;
    .profile {
      margin: 0.8rem;
      width: 42%;
      height: 35rem;
      border: solid 1px;
      padding: 0.4rem;
      .img-frame {
        height: 18rem;
        .img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
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
          text-align: justify;
        }
      }
    }
  }
}
</style>
