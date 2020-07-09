<template>
  <div>
    <transition-group name="list" tag="p" class="d-flex flex-wrap">
      <Tile
        class="tile"
        v-for="item in items"
        :key="item.title"
        :item="item"
        @click.native="handleTileClick(item)"
      ></Tile>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';

@Component({
  components: {
    Tile,
  },
})
export default class TilesList extends Vue {
  @Prop() private items!: ShoppingItem[];

  handleTileClick(item: ShoppingItem) {
    this.$emit('tileClick', item);
  }
}

</script>

<style scoped lang="scss">

.tile {
  display: inline-block;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 0.5s;
}
</style>
