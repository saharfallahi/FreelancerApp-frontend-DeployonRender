import http from "./httpService";

export function getOtp(data) {
  return http
    .post("/user/get-otp", data, {
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      // },
    })
    .then(({ data }) => data.data)
    .catch((error) => {
      console.error("OTP Error:", error.response?.data || error.message);
      throw error;
    });
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
// How do API know which user to send information to?
// res: Refresh and Access Token

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
