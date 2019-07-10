//index.js
//获取应用实例
const app = getApp();
const axios = require('../../utils/axios.js');
const util = require('../../utils/util.js')
Page({
  data: {
    statusBarHeight: qq.getSystemInfoSync().statusBarHeight,
    navCate: [],
    navSubCate: [],
    cur: 0,
    subCur: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  bindSearch() {
    qq.navigateTo({
      url: '../logs/logs'
    });
  },
  //事件处理函数
  bindViewTap: function() {
    qq.navigateTo({
      url: '../logs/logs'
    });
  },
  loadCate() {
    var t = this;
    axios.get({
      url: '/cate',
      data: {
        uuid: app.globalData.uuid
      },
      success(res) {
        t.setData({
          navCate: res,
          navSubCate: res[0].children
        });
      }
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
    this.loadCate();
    // util.login();
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
