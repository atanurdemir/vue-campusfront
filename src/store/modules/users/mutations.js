export default {
  setMe(state, payload) {
    state.userInfo = payload.userInfo.data;
  },
};
