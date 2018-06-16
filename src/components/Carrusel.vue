<template>
  <div class="scroll-container">
    <div class="indexes"
         ref="indexes"
         v-show="!noIndex && pages.length > 1">
      <div v-for="(page, index) in pages"
           :key="index"
           :class="['index', index === currentPage ? 'current' : '']"
           @click="(ev) => goToPage({ index })">{{ index }}</div>
    </div>
    <div class="track"
         @scroll="scrollFinishHandler"
         :data-items-per-page="itemsPerPage"
         ref="track">
      <div v-for="(item, index) in items"
           ref="items"
           :key="index"
           :data-page-index="Math.floor(index / itemsPerPage)"
           :data-visibility="calcIsItemVisible(index)"
           :class="['item', 'slot-wrapper']">
        <!--Inside this div, only could exist the 'slot' tag.
                    To avoid wrong responsive calculations -->
        <slot :index="index"
              :item="item" />
      </div>
    </div>
    <div class="controls"
         v-show="!noControls && pages.length > 1">
      <i :class="['init', 'events', disableMovement ? 'disable' : 'enable' ]"
         @click="goToPage({ index: 0 })">INIT</i>
      <i :class="['left', 'events', disableMovement ? 'disable' : 'enable' ]"
         @click="moveLeft">LEFT</i>
      <i :class="['right', 'events', disableMovement ? 'disable' : 'enable' ]"
         @click="moveRight">RIGHT</i>
      <i :class="['end', 'events', disableMovement ? 'disable' : 'enable' ]"
         @click="goToPage({ index: pages.length - 1 })">END</i>
    </div>
  </div>
</template>

<script>
import chunk from 'lodash/chunk';
import debounce from 'lodash/debounce';

const DEBOUNCE_DELAY = 150;
const DEBOUNCE_RESIZE_DELAY = 250;
const DEBOUNCE_SCROLL_DELAY = 250;
const VISIBLE = 'VISIBLE';
const PARTIALY_VISIBLE = 'PARTIALY_VISIBLE';
const NO_VISIBLE = 'NO_VISIBLE';
const PARTIALY_VISIBLE_ALIGN_LEFT = 'PARTIALY_VISIBLE_ALIGN_LEFT';

export default {
  props: {
    items: Array,
    noIndex: {
      type: Boolean,
      default: false
    },
    noControls: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      itemsPerPage: 3,
      itemWidth: 0,
      itemChildWidth: 0,
      trackWidth: 0,
      componentWasInit: false,
      currentPage: 0,
      disableMovement: false,
      lastPosition: 0
    };
  },
  computed: {
    pages: function() {
      return chunk(this.items, this.itemsPerPage);
    }
  },
  created() {
    window.addEventListener(
      'resize',
      debounce(this.resize, DEBOUNCE_RESIZE_DELAY)
    );
  },
  mounted() {
    this.trackWidth = this.$refs.track.offsetWidth;
    if (this.$refs.items && this.$refs.items.length) {
      this.itemWidth = this.$refs.items[0].offsetWidth;
      this.itemChildWidth = this.$refs.items[0].firstElementChild.offsetWidth;
      this.itemsPerPage = this.calcItemsPerPage();
    }
  },
  updated() {
    if (!this.componentWasInit) {
      this.$nextTick(function() {
        if (this.$refs.items && this.$refs.items.length) {
          this.componentWasInit = true;
          this.itemWidth = this.$refs.items[0].offsetWidth;
          this.itemChildWidth = this.$refs.items[0].firstElementChild.offsetWidth;
          this.itemsPerPage = this.calcItemsPerPage();
          this.resize();
        }
      });
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    scrollFinishHandler: debounce(function() {
      if (!this.$root.$data.showFullScreen) {
        this.lastPosition = this.$refs.track.scrollLeft;
      }
      console.log(`Last position ${this.lastPosition}`);
      this.currentPage = this.calcCurrentPageIndex();
      this.$emit('scroll-finish');
      this.updateDOMVisivility();
    }, DEBOUNCE_SCROLL_DELAY),
    updateDOMVisivility() {
      this.$refs.items.forEach((item, index) => {
        item.dataset.visibility = this.calcIsItemVisible(index);
      });
    },
    calcItemsPerPage() {
      const itemsPerPage = Math.floor(
        isFinite(this.trackWidth / this.itemWidth)
          ? this.trackWidth / this.itemWidth
          : 0
      );
      return itemsPerPage <= 1 ? 1 : itemsPerPage;
    },
    resize() {
      if (
        this.$refs.track &&
        this.trackWidth !== this.$refs.track.offsetWidth
      ) {
        this.trackWidth = this.$refs.track.offsetWidth;
        this.itemsPerPage = this.calcItemsPerPage();
        this.currentPage = this.calcCurrentPageIndex();
        this.goToPage({
          index: this.currentPage,
          behavior: 'smooth'
        });
      }
    },
    calcFirstItemInPage(pageIndex) {
      return chunk(
        Array.from({ length: this.pages.length }, (v, k) => k),
        this.itemsPerPage
      )[pageIndex][0];
    },
    calcPageIndex: function(itemPerLastPage, itemIndex) {
      const $track = this.$refs.track;
      if (!$track) return 0;
      if ($track.offsetWidth + $track.scrollLeft === $track.scrollWidth) {
        return this.pages.length - 1;
      }
      return Math.floor(itemIndex / itemPerLastPage);
    },
    calcCurrentPageIndex: function() {
      const firstVisibleIndex = this.calcVisibleItems().findIndex(Boolean);
      return this.calcPageIndex(this.itemsPerPage, firstVisibleIndex);
    },
    calcPositionOfNearLeftItem() {
      const itemPerLastPage = Math.ceil(
        Math.abs(this.$refs.track.scrollLeft - this.$refs.track.scrollWidth) /
          this.itemWidth
      );
      return (this.items.length - itemPerLastPage) * this.itemWidth;
    },
    calcVisibleItems() {
      const visibleItems = Array(this.items.length).fill(false);
      for (let i = 0; i < this.$refs.items.length; i += 1) {
        const x1 = this.$refs.items[i].offsetLeft;
        const x2 = this.$refs.items[i].offsetLeft + this.itemChildWidth;
        const min = this.$refs.track.scrollLeft;
        const max = this.$refs.track.scrollLeft + this.$refs.track.offsetWidth;
        if ((x1 >= min && x1 < max) || (x2 > min && x2 <= max)) {
          visibleItems[i] = true;
        }
      }
      return visibleItems;
    },
    calcIsItemVisible(index) {
      if (this.$refs && !this.$refs.items) return NO_VISIBLE;
      const node = this.$refs.items[index];
      const x1 = node.offsetLeft;
      const x2 = node.offsetLeft + this.itemChildWidth;
      const min = this.$refs.track.scrollLeft;
      const max = this.$refs.track.scrollLeft + this.$refs.track.offsetWidth;
      if (x1 >= min && x1 < max && (x2 > min && x2 <= max)) {
        return VISIBLE;
      } else if ((x1 > min && x1 < max) || (x2 > min && x2 < max)) {
        return PARTIALY_VISIBLE;
      } else if ((x1 === min && x1 < max) || (x2 > min && x2 <= max)) {
        return PARTIALY_VISIBLE_ALIGN_LEFT;
      }
      return NO_VISIBLE;
    },
    moveLeft: debounce(function() {
      if (this.$refs.track.scrollLeft > 0) {
        this.disableMovement = true;
        const firstVisibleIndex = this.calcVisibleItems().findIndex(Boolean);
        const currentPageIndex = this.currentPage;
        let left = 0;
        const visbility = this.calcIsItemVisible(firstVisibleIndex);
        if (
          visbility === VISIBLE ||
          visbility === PARTIALY_VISIBLE_ALIGN_LEFT
        ) {
          left =
            this.$refs.track.scrollLeft - this.itemWidth * this.itemsPerPage;
          this.move({ left, behavior: 'smooth' }).finally(
            () => (this.disableMovement = false)
          );
        } else if (visbility == PARTIALY_VISIBLE) {
          this.goToPage({
            index:
              currentPageIndex === this.pages.length - 1
                ? currentPageIndex - 1
                : currentPageIndex,
            behavior: 'smooth'
          });
        } else {
          left =
            this.calcPositionOfNearLeftItem() -
            this.itemWidth * (this.itemsPerPage - 1);
          this.move({ left, behavior: 'smooth' }).finally(
            () => (this.disableMovement = false)
          );
        }
      }
    }, DEBOUNCE_DELAY),
    moveRight: debounce(function() {
      const currentPageIndex = this.currentPage;
      if (currentPageIndex < this.pages.length - 1) {
        this.disableMovement = true;
        const firstVisibleIndex = this.calcVisibleItems().findIndex(Boolean);
        const currentPageIndex = this.currentPage;
        let left = 0;
        const visbility = this.calcIsItemVisible(firstVisibleIndex);
        if (
          visbility === VISIBLE ||
          visbility === PARTIALY_VISIBLE_ALIGN_LEFT
        ) {
          left =
            this.$refs.track.scrollLeft + this.itemWidth * this.itemsPerPage;
          this.move({ left, behavior: 'smooth' }).finally(
            () => (this.disableMovement = false)
          );
        } else if (visbility == PARTIALY_VISIBLE) {
          this.goToPage({
            index: currentPageIndex + 1,
            behavior: 'smooth'
          });
        }
      }
    }, DEBOUNCE_DELAY),
    goToPage: function({ index = 0, behavior = 'auto' }) {
      this.disableMovement = true;
      const indexPageToGo = Number(index);
      const lastIndexPage = this.pages.length - 1;
      const left =
        indexPageToGo === lastIndexPage
          ? this.$refs.track.scrollWidth
          : this.itemWidth * (this.itemsPerPage * indexPageToGo);
      this.move({ left, behavior }).finally(() => {
        this.disableMovement = false;
      });
    },
    move: function({ left = 0, behavior = 'auto' }) {
      const $track = this.$refs.track;
      if ($track.scrollLeft === left) return Promise.resolve();
      return new Promise(resolve => {
        this.$on('scroll-finish', resolve);
        $track.scrollTo({ left, behavior });
      });
    }
  }
};
</script>


<style lang="postcss" scoped>
.events {
  &.enable {
    color: green;
    font-weight: bold;
    pointer-events: all;
  }
  &.disable {
    color: red;
    font-weight: bold;
    pointer-events: none;
  }
}

.scroll-container {
  display: flex;
  flex-direction: column;
  .indexes {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 0.5em;
    flex-wrap: wrap;
    .slide {
      width: 30px;
      color: white;
      background-color: black;
      margin-right: 0.2em;
      text-align: center;
      font-weight: bold;
      &.current {
        background-color: blue;
      }
    }
  }
  .track {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      display: none;
    }
    .slot-wrapper {
      padding-right: 2px;
    }
    .slide {
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
