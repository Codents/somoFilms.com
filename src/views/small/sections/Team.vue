<template>
  <section class="team-container f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('team.title') }}</span>
    </div>
    <div class="body f f-column f-justify-center f-align-items-center">
      <div class="row f f-row f-justify-center f-align-items-center">
        <div class="img-wrapper f f-row f-justify-center f-align-items-center"
             @click="handleClick"
             id="one"
             ref="one"
             data-name="team.bio.david.name"
             data-role="team.bio.david.role"
             data-bio-text="team.bio.david.text">
          <img alt="team.bio.david.name"
               class="img"
               src="/static/team/team_portrait_david_palacios.jpg" />
        </div>
        <div class="img-wrapper f f-row f-justify-center f-align-items-center"
             @click="handleClick"
             id="two"
             ref="two"
             data-name="team.bio.salome.name"
             data-role="team.bio.salome.role"
             data-bio-text="team.bio.salome.text">
          <img alt="team.bio.david.name"
               class="img"
               src="/static/team/team_portrait_salome_garcia.jpg" />
        </div>
      </div>
      <div class="row f f-row f-justify-center f-align-items-center">
        <div class="img-wrapper f f-row f-justify-center f-align-items-center"
             @click="handleClick"
             id="three"
             ref="three"
             data-name="team.bio.kike.name"
             data-role="team.bio.kike.role"
             data-bio-text="team.bio.kike.text">
          <img alt="team.bio.david.name"
               class="img"
               src="/static/team/team_portrait_kike_palacios.jpg" />
        </div>
        <div class="img-wrapper f f-row f-justify-center f-align-items-center"
             @click="handleClick"
             id="four"
             ref="four"
             data-name="team.bio.pedro.name"
             data-role="team.bio.pedro.role"
             data-bio-text="team.bio.pedro.text">
          <img alt="team.bio.david.name"
               class="img"
               src="/static/team/team_portrait_pedro_r_soto.jpg" />
        </div>
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
import Bio from '../components//Bio';

export default {
  components: { Bio },
  data: function() {
    return {
      showBio: false,
      bioText: '',
      name: '',
      role: '',
      member: 'one'
    };
  },
  methods: {
    handleClick(ev) {
      this.name = this.$refs[ev.currentTarget.id].dataset.name;
      this.bioText = this.$refs[ev.currentTarget.id].dataset.bioText;
      this.showBio = !this.showBio;
      this.role = this.$refs[ev.currentTarget.id].dataset.role;
      this.member = ev.currentTarget.id;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../flex.scss';
@import 'animate.css/animate.min.css';
.team-container {
  position: relative;
  width: 100%;
  height: 100%;
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
    width: 100%;
    .row {
      width: 100%;
      height: 50%;
      margin: .2rem;
      .img-wrapper {
        border-radius: 5px;
        height: 100%;
        overflow: hidden;
        max-width: 240px;
        margin: .2rem;
        .img {
          max-width: 240px;
        }
      }
    }
  }
}
</style>
