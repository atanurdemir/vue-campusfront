import axios from "axios";

const axiosClient = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 20000,
  });

  instance.interceptors.response.use(
    (res) => {
      const { data } = res;
      if (!data.status) throw new Error(data.message);
      return data;
    },
    (err) => {
      console.log(`[axios][interceptors][response][failure] ${err}`);
      throw err;
    }
  );

  function makeRequest(type, path, data = null, options = {}) {
    console.log(`[axios][makeRequest] ${type} ${path}`);

    return new Promise((resolve, reject) => {
      instance(path, {
        method: type,
        data,
        headers: {
          Authorization: "public",
        },
        ...options,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err.response || err);
        });
    });
  }

  async function makeRequestAuth(type, path, data = null) {
    // console.log(`[axios][makeRequestAuth] ${type} ${path} ${data}`);
    const token = localStorage.getItem("campusToken");
    return makeRequest(type, path, data, {
      headers: {
        Authorization: token,
      },
    });
  }

  return {
    instance,
    makeRequest,
    makeRequestAuth,
  };
};

export default axiosClient;
