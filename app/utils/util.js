const axios = require('./axios.js');
const app = getApp();

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
module.exports = {
  //登录状态
  getUserInfo(e) {
    // 授权状态
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
    }
  },
  // 当前用户授权登录
  login(fn) {
    qq.login({
      success: res => {
        if (res.code) {
          axios.get({
            url: '/login',
            data: {
              code: res.code
            },
            success(res) {
              qq.setStorageSync('uuid', res.uuid);
              fn && fn();
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  formatTime(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  }
};
