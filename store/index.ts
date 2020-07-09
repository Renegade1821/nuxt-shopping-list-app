import { ShoppingItem } from '@/models/ShoppingItem.model';

export interface State {
  list: ShoppingItem[];
  history: ShoppingItem[];
}

export const store = {
  state: {
    list: [
      { title: 'Holzkohle' },
      { title: 'Grillkäse' },
      { title: 'Baguette' },
      { title: 'BBQ Sauce' },
      { title: 'Steak' },
      { title: 'Wildlachs' },
      { title: 'Salat' },
      { title: 'Reisdorf Kölsch' },
      { title: 'Ketchup' },
      { title: 'Bratwurst' },
      { title: 'Chips' },
      { title: 'fritz-kola' },
    ],
    history: [
      { title: 'Batterien' },
    ],
  } as State,

  addItem(item: ShoppingItem) {
    this.state.list.unshift(item);
  },

  checkItem(checkedItem: ShoppingItem) {
    this.state.history.push(checkedItem);
    const index = this.state.list.findIndex((item) => item.title === checkedItem.title);
    if (index !== -1) {
      this.removeFromList(this.state.list, index);
    }
  },

  readdItem(readdItem: ShoppingItem) {
    const index = this.state.history.findIndex((item) => item.title === readdItem.title);
    if (index !== -1) {
      this.removeFromList(this.state.history, index);
    }
    this.addItem(readdItem);
  },

  removeFromList(list: ShoppingItem[], index: number) {
    list.push(list.splice(index, 1)[0]);
    // TODO whacky... should be better when using real state management (better mutation management)
    // this.$nextTick(() => {  // use this ???
    //   list.pop();
    // });
    setTimeout(() => {
      list.pop();
    }, 0);
  },
};
