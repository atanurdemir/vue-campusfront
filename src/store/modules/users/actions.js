import { UserService } from "../../../services";
export default {
  async getMe(context) {
    const data = await UserService.profile.getMe();
    context.commit("setMe", { userInfo: data });
  },
};
