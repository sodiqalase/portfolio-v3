export const state = () => ({
  initHeroAnimation: false
});

export const mutations = {
  set(state, [field, value]) {
    state[field] = value;
  }
};

export const actions = {
  initHeroAnimation({ commit }) {
    commit("set", ["initHeroAnimation", true]);
  }
};

export const getters = {
  initHeroAnimation: state => state.initHeroAnimation
};
