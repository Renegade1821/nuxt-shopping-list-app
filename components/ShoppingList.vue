<template>
<div class="card shoppingList p-3">
  <h4 class="d-flex">Einkaufsliste</h4>
  <AddItemComponent></AddItemComponent>
  <TilesList
    :items="list"
    @tileClick="handleTileClick"
  ></TilesList>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import TilesList from '@/components/TilesList.vue';
import AddItemComponent from '@/components/AddItemComponent.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';

@Component({
  components: {
    // TilesList,
    // AddItemComponent,
  },
})
export default class ShoppingList extends Vue {
  private newItem = '';

  private store = store;

  private list = store.state.list;

  public addItem() {
    if (this.newItem === '') {
      return;
    }
    store.addItem({
      title: this.newItem,
    });
    this.newItem = '';
  }

  public handleTileClick(item: ShoppingItem) {
    this.store.checkItem(item);
  }
}
</script>

<style scoped lang="scss">
.shoppingList {
  width: 444px;
}
</style>
