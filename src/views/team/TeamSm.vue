<template>
  <section class="team-container p-relative w-100 h-100 f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('team.title') }}</span>
    </div>
    <div class="body w-100 f f-row f-justify-center f-align-items-center f-wrap">
      <div v-for="(member, index) in team"
           :id="member.id"
           :key="index"
           :ref="member.id"
           class="img-wrapper f f-row f-justify-center f-align-items-center"
           :data-name="member.name"
           :data-role="member.role"
           :data-bio-text="member.text"
           @click="handleClick">
        <img :alt="member.name"
             class="img"
             :src="member.url[$mq]">
      </div>
    </div>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut">
      <Bio v-show="showBio"
           :name="name"
           :bio-text="bioText"
           :member="member"
           :role="role"
           @click="showBio=false" />
    </transition>
  </section>
</template>

<script>
import { team } from '@/constants';
import Bio from './components/BioSm';

export default {
  components: { Bio },
  data: function () {
    return {
      team,
      showBio: false,
      bioText: '',
      name: '',
      role: '',
      member: 'one',
    };
  },
  methods: {
    handleClick(ev) {
      this.name = this.$refs[ev.currentTarget.id][0].dataset.name;
      this.bioText = this.$refs[ev.currentTarget.id][0].dataset.bioText;
      this.showBio = !this.showBio;
      this.role = this.$refs[ev.currentTarget.id][0].dataset.role;
      this.member = ev.currentTarget.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/flex.scss';
@import '@/styles/animate.scss';
.team-container {
  .header {
    height: 20%;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    overflow-y: auto;
    margin-bottom: .4rem;
    .img-wrapper {
      border-radius: 5px;
      overflow: hidden;
      width: 48%;
      height: 48%;
      margin: 0.2rem;
      .img {
        max-width: 240px;
      }
    }
  }
}
</style>
