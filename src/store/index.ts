import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    sidebarVisible: 'none',
    dummyJSON: '{"version": "07.10.2022","type": "recipes","lang": "de","description": "Kochrezepte","data": [{"id": "123","name": "Kartoffelwedges","img": "link1","altText": "Food pic","portions": "1","updated": "11.11.2022","ingredients": [{"name": "Kartoffeln", "amount": "3"},{"name": "Salz", "amount": "1Msp"},{"name": "Öl", "amount": "1EL"}],  "preparation": [{"title": "Vorbereitung", "content": "Kartoffeln schälen..."},{"title": "Zubereitung", "content": "Kartoffeln mit Öl und Salz vermengen..."}],"additionalText": "blabla"},{"id": "124","name": "Pommes","img": "link","altText": "Food pic2","portions": "1","updated": "11.11.2022","ingredients": [{"name": "Kartoffeln", "amount": "3"},{"name": "Salz", "amount": "1Msp"},{"name": "Öl", "amount": "1EL"}],  "preparation": [{"title": "Vorbereitung", "content": "Kartoffeln schälen..."},{"title": "Zubereitung", "content": "Kartoffeln mit Öl und Salz vermengen..."}],"additionalText": "blabla"}]}',
    displayList: {},
    subHeadings: '',
    dummyObj: { name: 'john' },
  },
  getters: {
    getVis: () => 'state.sidebarVisible',
    getItemsList(state) {
      return state.displayList;
    },
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
      fetch('exampleRecipes.json')
        .then((resp) => resp.json())
        .then((json) => {
          this.state.displayList = json;
        })
        .catch((error) => {
          console.log(error);
        });
      // this.state.displayList = JSON.parse(this.state.dummyJSON);
      return true;
    },
  },
  modules: {
  },
});
