import { UserService } from "../../../services";
export default {
  async getCourses(context) {
    const data = await UserService.course.get();
    context.commit("setCourse", { courseInfo: data });
  },
};
