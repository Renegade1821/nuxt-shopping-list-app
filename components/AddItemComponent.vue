<template>
  <div class="addItemWrapper">
    <input class="form-control mr-2" v-model="newItem" v-on:keyup.enter="addItem()" />
    <button class="btn btn-primary" type="submit" v-on:click="addItem()"><b>+</b></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';

@Component
export default class AddItemComponent extends Vue {
  private newItem = '';

  public addItem() {
    if (this.newItem === '') {
      return;
    }
    store.addItem({ title: this.newItem });
    this.newItem = '';
  }
}
</script>

<style scoped lang="scss">
.addItemWrapper {
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
