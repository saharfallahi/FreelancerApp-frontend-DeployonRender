import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// err =>request,response
app.interceptors.request.use(
  (res) => {
    console.log("Request:", res.method, res.url);
    return res;
  },
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.error("Error details:", {
      status: err.response?.status,
      method: err.config?.method,
      url: err.config?.url,
      message: err.response?.data?.message,
    });

    const originalConfig = err.config;
    if (err.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  delete: app.delete,
  post: app.post,
  put: app.put,
  patch: app.patch,
};

export default http;
