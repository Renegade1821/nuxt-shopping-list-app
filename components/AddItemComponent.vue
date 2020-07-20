<template>
  <div class="addItemWrapper">
    <input class="form-control mr-2" v-model="newItem" v-on:keyup.enter="handleSubmit()" />
    <button class="btn btn-primary" type="submit" v-on:click="handleSubmit()"><b>+</b></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

@Component
export default class AddItemComponent extends Vue {
  private newItem = '';

  public handleSubmit() {
    if (this.newItem === '') {
      return;
    }
    this.$store.commit('addItemList', { title: this.newItem })
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
