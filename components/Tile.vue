<template>
  <div class="tile">
    <div class="abbreviation">{{abbreviation}}</div>
    <span class="title">{{item.title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShoppingItem } from '@/models/ShoppingItem.model';

@Component
export default class Tile extends Vue {
  @Prop() private item!: ShoppingItem;

  get abbreviation(): string {
    return this.item.title.charAt(0).toUpperCase();
  }
}
</script>

<style scoped lang="scss">
.tile {
  margin: 1px;
  height: 80px;
  width: 80px;
  border: 1px solid black;
  position: relative;

  &:hover {
    cursor: pointer;
    background: darken($color: #FFF, $amount: 5%);
  }
}
.abbreviation {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
.title {
  font-size: 11px;
  text-align: center;
  padding-top: 5px;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.9em;
  line-height: 1.2em;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
</style>
