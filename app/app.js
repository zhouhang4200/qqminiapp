//app.js
const axios = require('./utils/axios.js');
App({
  onShow(res) {
    var query = res.query;
    if (query.page == 'detail') {
      qq.navigateTo({
        url: 'pages/detail/detail?id=' + query.id
      });
    }

    console.log('onShow', res);
  },
  onLaunch: function() {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone']
    });
    // 展示本地存储能力
    var logs = qq.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    qq.setStorageSync('logs', logs);
    // 登录
    // qq.login({
    //   success: res => {
    //     console.log(res)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    qq.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          qq.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              //登录
              this.login();
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  // 当前用户授权登录
  login(fn) {
    qq.login({
      success: res => {
        if (res.code) {
          axios
            .post('/code', {
              data: {
                code: res.code
              }
            })
            .then(res => {
              qq.setStorageSync('token', res);
              //用户登录
              if(this.userLoginCallback){
                this.userLoginCallback();
              }
              fn && fn();
            })
            .catch(err => console.log(err));
        } else {
          console.log('登录失败！' + res.errMsg);
        }
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  globalData: {
    userInfo: null,
    token: '',
    tjpage: 1
  }
});
