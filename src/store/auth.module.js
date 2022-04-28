import {AuthFirebaseService} from '@/services';

export default {
  state: () => ({
    userInfo: null,
    accessToken: null,
    isAuthProcessLoading: false
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setInfo(state, userInfo) {
      state.info = userInfo;
    },
    setIsAuthProcessLoading(state, isLoadingValue) {
      state.isAuthProcessLoading = isLoadingValue;
    }
  },
  actions: {
    async login({ state }) {
      console.log(state);
      // const response = AuthFirebaseService.login(data);
    },
    async signup({ state }) {
      console.log(state)
    },
    async logout({ state }) {
      console.log(state);
    },
    reset() {

    },
    updateInfo() {

    }
  },
  namespaced: true
};