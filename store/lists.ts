import { ShoppingItem } from '@/models/ShoppingItem.model';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: false,
})
export default class lists extends VuexModule {
  _list = [
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
  ];
  _history = [
    { title: 'Batterien' },
  ];

  @Mutation
  addItem(item: ShoppingItem) {
    this._list.unshift(item);
  };

  @Mutation
  checkItem(checkedItem: ShoppingItem) {
    this._history.push(checkedItem);
    const index = this._list.findIndex((item) => item.title === checkedItem.title);
    if (index !== -1) {
      this._list.push(this._list.splice(index, 1)[0]);
      // setTimeout(() => {
        this._list.pop();
      // }, 0);
    }
  };

  @Mutation
  readdItem(readdItem: ShoppingItem) {
    const index = this._history.findIndex((item) => item.title === readdItem.title);
    if (index !== -1) {
      // setTimeout(() => {
      this._history.push(this._history.splice(index, 1)[0]);
      this._history.pop();
      // }, 0);
    }
  };

  @Action({ rawError: true })
  foo(item: any) {
    console.log(`i'm here!`);
    this.context.commit('readdItem', item);
    this.context.commit('addItem', item);
  }

  get shoppingList() {
    return this._list;
  }

  get history() {
    return this._history;
  }
}