<template>
<div class="card shoppingList p-3">
  <h4 class="d-flex">Einkaufsliste</h4>
  <AddItemComponent></AddItemComponent>
  <TilesList
    :items="shoppingList"
    @tileClick="handleTileClick"
  ></TilesList>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TilesList from '@/components/TilesList.vue';
import AddItemComponent from '@/components/AddItemComponent.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';
import { namespace } from 'nuxt-property-decorator'

@Component({
  components: {
    TilesList,
    AddItemComponent,
  },
})
export default class ShoppingList extends Vue {
  public shoppingList = this.$store.getters.shoppingList;

  public handleTileClick(item: ShoppingItem) {
    this.$store.commit('checkItem', item);
  }
}
</script>

<style scoped lang="scss">
.shoppingList {
  width: 444px;
}
</style>
