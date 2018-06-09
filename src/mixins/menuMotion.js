import { TweenLite, Power2 } from 'gsap/all';
import { getOrientation } from '@/utils';

export default {
  methods: {
    handleOrientationChange() {
      this.orientation = getOrientation();
    },
    goOptionMenu(ev) {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      activeMenu.classList.remove('selected');
      ev.currentTarget.classList.add('selected');
      if (this.$refs.track.querySelector(`#${ev.currentTarget.id}-section`)) {
        TweenLite.to(this.$refs.track, 1, {
          scrollTo: `#${ev.currentTarget.id}-section`,
          ease: Power2.easeOut
        });
      } else {
        console.error(`Section doesnt exist : #${ev.currentTarget.id}-section`);
      }
    },
    moveRight() {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      const index = Number(activeMenu.getAttribute('data-index'));
      const newActiveMenu = this.$refs.menu.$el.querySelector(
        `[data-index="${index + 1}"]`
      );
      if (newActiveMenu) {
        activeMenu.classList.remove('selected');
        newActiveMenu.classList.add('selected');
        if (this.$refs.track.querySelector(`#${newActiveMenu.id}-section`)) {
          TweenLite.to(this.$refs.track, 1, {
            scrollTo: `#${newActiveMenu.id}-section`,
            ease: Power2.easeOut
          });
        } else {
          console.error(`Section doesnt exist : #${newActiveMenu.id}-section`);
        }
      }
    },
    moveLeft() {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      const index = Number(activeMenu.getAttribute('data-index'));
      if (index > 0) {
        activeMenu.classList.remove('selected');
        const newActiveMenu = this.$refs.menu.$el.querySelector(
          `[data-index="${index - 1}"]`
        );
        if (newActiveMenu) {
          newActiveMenu.classList.add('selected');
          if (this.$refs.track.querySelector(`#${newActiveMenu.id}-section`)) {
            TweenLite.to(this.$refs.track, 1, {
              scrollTo: `#${newActiveMenu.id}-section`,
              ease: Power2.easeOut
            });
          } else {
            console.error(
              `Section doesnt exist : #${newActiveMenu.id}-section`
            );
          }
        }
      }
    }
  }
};
