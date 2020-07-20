<template>
  <div class="card history p-3">
    <h4 class="d-flex">Zuletzt verwendet</h4>
    <TilesList
    :items="history"
    @tileClick="handleTileClick"
    ></TilesList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TilesList from '@/components/TilesList.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';
import { namespace } from 'nuxt-property-decorator';

@Component({
  components: {
    TilesList,
  },
})
export default class HistoryList extends Vue {
  public history = this.$store.getters.history;

  public handleTileClick(item: ShoppingItem) {
    this.$store.dispatch('checkHistoryItem', item);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.history {
  width: 444px;
}
</style>
