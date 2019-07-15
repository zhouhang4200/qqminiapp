//logs.js
const util = require('../../utils/util.js');
const app = getApp();
const axios = require('../../utils/axios.js');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    logs: [],
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  bindCate(e) {
    var hasUserInfo = this.data.hasUserInfo;
    if (hasUserInfo) {
      var id = e.currentTarget.dataset.id;
      if (id) {
        var res = this.getNavData(id);
        this.setNavData(id, {
          isWatch: !res.isWatch
        });
        this.setsubscribe();
      }
    }
  },
  setsubscribe() {
    var category_id = [];
    var navCate = this.data.navCate;
    navCate.forEach(item => {
      item.children.forEach(c => {
        if (c.isWatch) {
          category_id.push(c.id);
        }
      });
    });
    category_id = category_id.join(',');
    axios
      .post('/category/subscribe', {
        showLoading: false,
        data: {
          category_id: category_id
        }
      })
      .then(res => {
        qq.setStorageSync('isUpdateGZ', 1);
        // console.log(res);
      })
      .catch(err => console.log(err));
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
      this.loadCate();
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        this.loadCate();
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          app.login();
          this.loadCate();
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  loadCate() {
    axios
      .get('/category')
      .then(res => {
        res.forEach(item => {
          if (item.children.length == 0) {
            item.children.push({
              id: item.id,
              pid: item.id,
              name: item.name
            });
          }
        });
        this.setData({
          navCate: res
        });
        this.loadGZ();
      })
      .catch(err => console.log(err));
  },
  getNavData(id) {
    var res = {};
    this.data.navCate.forEach(item => {
      item.children.forEach(c => {
        if (c.id == id) {
          res = c;
        }
      });
    });
    return res;
  },
  setNavData(id, data) {
    var res = {};
    var navCate = this.data.navCate;
    navCate.forEach(item => {
      item.children.forEach(c => {
        if (c.id == id) {
          Object.assign(c, data);
          res = c;
        }
      });
    });
    this.setData({
      navCate: navCate
    });
    return res;
  },
  loadGZ() {
    var hasUserInfo = this.data.hasUserInfo;
    if (hasUserInfo) {
      axios
        .get('/category/user')
        .then(res => {
          var arr = res.categories;
          var navCate = this.data.navCate;
          navCate.forEach(item => {
            item.children.forEach(c => {
              arr.forEach(item => {
                if (c.id == item.id) {
                  c.isWatch = 1;
                }
              });
            });
          });
          this.setData({
            navCate: navCate
          });
        })
        .catch(err => console.log(err));
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    // 当前用户未授权
    if (!e.detail.userInfo) return;
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
