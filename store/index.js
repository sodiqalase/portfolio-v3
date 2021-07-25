export const state = () => ({
  initHeroAnimation: false,
  mousePosition: {
    x: 0,
    y: 0
  }
});

export const mutations = {
  set(state, [field, value]) {
    state[field] = value;
  }
};

export const actions = {
  initHeroAnimation({ commit }) {
    commit("set", ["initHeroAnimation", true]);
  },
  setMousePosition({ commit }, position) {
    commit("set", ["mousePosition", position]);
  }
};

export const getters = {
  initHeroAnimation: state => state.initHeroAnimation,
  mousePosition: state => state.mousePosition
};
