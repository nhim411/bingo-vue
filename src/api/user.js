import request from "@/utils/request";

export default {
  login(data) {
    return request({
      url: "/signin",
      method: "post",
      data,
    });
  },

  signup() {
    return request({
      url: "/auth/local/register",
      method: "post",
    });
  },

  getInfo() {
    return request({
      url: "/getUserInfo",
      method: "get",
    });
  },

  logout() {
    return request({
      url: "/vue-admin-template/user/logout",
      method: "post",
    });
  },
};
