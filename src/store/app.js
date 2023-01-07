const state = {
  sidebar: {
    opened: false,
  },
  device: "desktop",
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
