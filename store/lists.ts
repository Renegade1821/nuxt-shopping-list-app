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
  addItemList(addItem: ShoppingItem) {
    const index = this._list.findIndex((item) => item.title === addItem.title);
    if (index === -1) {
      this._list.unshift(addItem);
    }
  };

  @Mutation
  addItemHistory(addItem: ShoppingItem) {
    const index = this._history.findIndex((item) => item.title === addItem.title);
    if (index === -1) {
      this._history.unshift(addItem);
    }
  };

  @Mutation
  pushToLastIndexList(selectedItem: ShoppingItem) {
    const index = this._list.findIndex((item) => item.title === selectedItem.title);
    if (index !== -1) {
      this._list.push(this._list.splice(index, 1)[0]);
    }
  }

  @Mutation
  removeLastIndexList() {
    this._list.pop();
  }

  @Mutation
  pushToLastIndexHistory(selectedItem: ShoppingItem) {
    const index = this._history.findIndex((item) => item.title === selectedItem.title);
    if (index !== -1) {
      this._history.push(this._history.splice(index, 1)[0]);
    }
  }

  @Mutation
  removeLastIndexHistory() {
    this._history.pop();
  }

  @Action
  checkListItem(item: ShoppingItem) {
    this.context.commit('addItemHistory', item);
    this.context.commit('pushToLastIndexList', item);
    setTimeout(() => {
      this.context.commit('removeLastIndexList');
    }, 100);
  }

  @Action({ rawError: true })
  checkHistoryItem(item: ShoppingItem) {
    this.context.commit('addItemList', item);
    this.context.commit('pushToLastIndexHistory', item);
    setTimeout(() => {
      this.context.commit('removeLastIndexHistory');
    }, 0);
  }

  get shoppingList() {
    return this._list;
  }

  get history() {
    return this._history;
  }
}