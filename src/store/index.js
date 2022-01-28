import { createStore } from "vuex";
import UsersModule from "./modules/users/index";
import CoursesModule from "./modules/courses/index";

export default createStore({
  modules: {
    users: UsersModule,
    courses: CoursesModule,
  },
});
