import { createStore } from 'vuex';

export default createStore({
  state: {
    availableCharacters: [
      {
        id: 1,
        name: 'Red Guard',
        hpBase: 10,
        hpLevelIncrease: 2,
        hpLevelIncreaseUneven: false,
        handSize: 10,
      },
      {
        id: 1,
        name: 'Void Warden',
        hpBase: 6,
        hpLevelIncrease: 1,
        hpLevelIncreaseUneven: false,
        handSize: 11,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
