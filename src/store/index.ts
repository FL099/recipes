import { createStore } from 'vuex';

export default createStore({
  state: {
    sidebarVisible: 'none',
    dummySubheadingsList: [{ name: 'Subheading 1', htmlId: 'subheading1' }, { name: 'Subheading 2', htmlId: 'subheading2' }],
    dummyJSON: '{ "version": "07.10.2022", "type": "recipes", "lang": "de", "description": "Kochrezepte", "data": [ { "id": "123", "name": "Kartoffelwedges", "zutaten": [ "Kartoffeln", "Salz", "Öl" ], "zubereitung": "kommt noch" }, { "id": "124", "name": "Pommes", "zutaten": [ "Kartoffeln", "Salz", "Öl" ], "zubereitung": "kommt noch"} ] }',
    displayList: {},
    subHeadings: '',
  },
  getters: {
    getVis: () => 'state.sidebarVisible',
  },
  mutations: {
    toggleSidebar: (state) => {
      if (state.sidebarVisible === 'none') {
        state.sidebarVisible = 'inline-block';
      } else {
        state.sidebarVisible = 'none';
      }
    },
  },
  actions: {
    getItems(state, kindOfItem: string) {
      this.state.displayList = JSON.parse(this.state.dummyJSON);
      console.log(this.state.displayList);
      return true;
    },
  },
  modules: {
  },
});
