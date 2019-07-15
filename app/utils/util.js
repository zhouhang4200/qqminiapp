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
  trim: function(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "")
},
  formatSS(a) {
    var h = Math.floor(a / 3600);
    var mm = Math.floor((a - h * 3600) / 60);
    if (mm < 10) mm = '0' + mm;
    var ss = Math.floor((a - h * 3600) % 60);
    if (ss < 10) ss = '0' + ss;
    return (h > 0 ? h + ':' : '') + mm + ':' + ss;
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
