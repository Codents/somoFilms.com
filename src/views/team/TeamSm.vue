<template>
  <section class="team-container p-relative w-100 h-100 f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('team.title') }}</span>
    </div>
    <div class="body w-100 f f-row f-justify-center f-align-items-center f-wrap">
      <div v-for="(member, index) in team"
           :key="index"
           class="img-wrapper f f-row f-justify-center f-align-items-center"
           @click="handleClick"
           :id="member.id"
           :ref="member.id"
           :data-name="member.name"
           :data-role="member.role"
           :data-bio-text="member.text">
        <img :alt="member.name"
             class="img"
             :src="member.url" />
      </div>
    </div>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated hinge">
      <Bio :name="name"
           :bioText="bioText"
           :member="member"
           :role="role"
           v-show="showBio"
           @click="showBio=false" />
    </transition>
  </section>
</template>

<script>
import Bio from '@/components/Bio';
import { team } from '@/constants';

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
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    .img-wrapper {
      border-radius: 5px;
      overflow: hidden;
      width: 48%;
      height: 50%;
      margin: 0.2rem;
      .img {
        max-width: 240px;
      }
    }
  }
}
</style>
