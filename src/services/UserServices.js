import axiosClient from "../plugins/axios";

const { makeRequest, makeRequestAuth } = axiosClient(
  process.env.VUE_APP_API_ENDPOINT
);

const auth = {
  signIn: (data) => makeRequest("post", "signin", data),
  signUp: (data) => makeRequest("post", "signup", data),
};

const course = {
  add: (data) => makeRequestAuth("post", `course/take`, data),
  get: () => makeRequestAuth("get", `course/get`),
  remove: (courseId) => makeRequestAuth("delete", `course/${courseId}`),
};

const profile = {
  getMe: () => makeRequestAuth("get", `user/me`),
  get: (email) => makeRequest("get", `user/${email}`),
  updateUser: (data) => makeRequestAuth("patch", "user/update", data),
  updateStudent: (userId, data) =>
    makeRequestAuth("patch", `admin/update/${userId}`, data),
};

const department = {
  add: (data) => makeRequestAuth("post", `courses/add`, data),
  get: (name, semester) =>
    makeRequest("get", `courses?name=${name}&semester=${semester}`),
};

const cafeteria = {
  get: () => makeRequest("get", `cafeteria`),
  add: (data) => makeRequestAuth("post", `cafeteria/add`, data),
  reserve: (data) => makeRequestAuth("patch", `cafeteria/reserve`, data),
  addReserve: (data) => makeRequestAuth("post", `cafeteria/addreserv`, data),
  getReserve: (cafeteriaId) =>
    makeRequestAuth("get", `cafeteria/${cafeteriaId}`),
};

const finance = {
  getUnpaids: () => makeRequest("get", `finance/unpaid`),
  get: (userId) => makeRequest("get", `finance/${userId}`),
  add: (data) => makeRequestAuth("post", `finance/add`, data),
  approve: (userId) => makeRequestAuth("patch", `finance/approve/${userId}`),
};

const dormitory = {
  getById: (userId) => makeRequest("get", `dormitory/${userId}`),
  add: (data) => makeRequestAuth("post", `dormitory/request`, data),
  approve: (userId) => makeRequestAuth("patch", `dormitory/approve/${userId}`),
  getByParameters: (type, capacity) =>
    makeRequest("get", `dormitory?type=${type}&capacity=${capacity}`),
};

const notification = {
  get: () => makeRequest("get", `notification`),
  add: (data) => makeRequestAuth("post", `notification/publish`, data),
  remove: (data) => makeRequestAuth("delete", `notification/${data}`),
};

export default {
  auth,
  course,
  profile,
  finance,
  dormitory,
  cafeteria,
  department,
  notification,
};
