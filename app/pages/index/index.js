//index.js
//获取应用实例
const app = getApp();
const axios = require('../../utils/axios.js');
const util = require('../../utils/util.js');
Page({
  data: {
    statusBarHeight: qq.getSystemInfoSync().statusBarHeight,
    navCate: [],
    navSubCate: [],
    cur: '',
    subcur: '',
    cateid: '',
    curdata: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    showFeed: true,
    isOneByWatch: qq.getStorageSync('isOneByWatch'),
    kandata: [],
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  bindGoTo(e) {
    var path = e.currentTarget.dataset.path;
    qq.navigateTo({
      url: path
    });
  },
  bindOnceByWatch() {
    this.setData({
      isOneByWatch: 2
    });
    qq.setStorageSync('isOneByWatch', 2);
  },
  bindNavCate(e) {
    var navtype = e.currentTarget.dataset.navtype;
    var cur = e.currentTarget.dataset.cur;
    // 新手提示
    if (cur == 'gz') {
      var isOneByWatch = this.data.isOneByWatch;
      if (!isOneByWatch) {
        this.setData({
          isOneByWatch: 1
        });
      }
    }
    this.navCate(cur, navtype);
  },
  getNavData(id) {
    var res = {};
    this.data.navCate.forEach(item => {
      if (item.id == id) {
        res = item;
      } else {
        item.children.forEach(c => {
          if (c.id == id) {
            res = c;
          }
        });
      }
    });
    return res;
  },
  setNavData(id, data) {
    var res = {};
    var navCate = this.data.navCate;
    navCate.forEach(item => {
      if (item.id == id) {
        Object.assign(item, data);
        res = item;
      } else {
        item.children.forEach(c => {
          if (c.id == id) {
            Object.assign(c, data);
            res = c;
          }
        });
      }
    });
    this.setData({
      navCate: navCate
    });
    return res;
  },
  navCate(cateid, navtype) {
    var old = this.data[navtype];
    // 重复点击不做操作
    if (cateid === old) return;
    this.setData({
      [navtype]: cateid,
      showFeed: false,
      cateid: cateid
    });
    var item = this.getNavData(cateid);
    if (navtype == 'cur') {
      this.setData({
        subcur: item.subcur,
        navSubCate: item.children
      });
    } else if (navtype == 'subcur') {
      this.setNavData(this.data.cur, {
        subcur: cateid
      });
    }
    if (item.curdata.length > 0) {
      this.setData({
        curdata: item.curdata,
        showFeed: true
      });
    } else {
      this.loadData('upper');
    }
  },
  upper(e) {
    this.loadData('upper');
  },
  lower(e) {
    this.loadData('lower');
  },
  onReachBottom: function(event) {
    this.loadData('lower');
  },
  onPullDownRefresh() {
    this.loadData('upper');
  },
  loadData(type) {
    const cateid = this.data.cateid;
    var item = this.getNavData(cateid);
    axios
      .get('/video', {
        data: {
          category_id: cateid,
          page: item.page
        }
      })
      .then(res => {
        var curdata = res.data;
        // if (curdata.length == 0) {
        //   qq.showToast({
        //     title: '暂无最新内容',
        //     icon: 'none',
        //     duration: 2000
        //   });
        // }
        var curdata = this.fixData(curdata);
        if (type == 'upper') {
          curdata = curdata.concat(item.curdata);
        } else {
          curdata = item.curdata.concat(curdata);
        }
        this.setNavData(cateid, {
          curdata: curdata,
          page: item.page + 1
        });
        this.setData({
          curdata: curdata,
          showFeed: true
        });
      })
      .catch(err => console.log(err));
  },
  fixData(data) {
    data.forEach(item => {
      item.play_time = util.formatSS(item.play_time);
    });
    return data;
  },
  //事件处理函数
  bindViewTap: function() {
    qq.navigateTo({
      url: '../logs/logs'
    });
  },
  loadCate() {
    axios
      .get('/category')
      .then(res => {
        this.fixCateData(res);
        this.updateGZ();
      })
      .catch(err => console.log(err));
  },
  updateGZ() {
    qq.setStorageSync('isUpdateGZ', '1');
    this.loadGZ();
  },
  loadGZ() {
    var hasUserInfo = this.data.hasUserInfo;
    var isUpdateGZ = qq.getStorageSync('isUpdateGZ');
    if (hasUserInfo && isUpdateGZ == 1) {
      qq.setStorageSync('isUpdateGZ', '');
      axios
        .get('/category/user')
        .then(res => {
          var arr = res.categories;
          var child = this.getNavData('gz').children;
          if (child.length > 1) {
            var i;
            arr.forEach(item => {
              for (i = 1; i < child.length; i++) {
                if (child[i].id == item.id) {
                  Object.assign(item, child[i]);
                  break;
                }
              }
            });
          }
          arr.unshift(child[0]);
          this.setNavData('gz', {
            children: arr
          });
        })
        .catch(err => console.log(err));
    }
  },
  fixCateData(res) {
    var initData = {
      page: 1,
      curdata: []
    };
    var nav = [
      {
        id: 'tj',
        name: '推荐',
        children: []
      },
      {
        id: 'gz',
        name: '关注',
        children: []
      }
    ];
    // res.splice(1, 0, this.data.watchData);
    // res.unshift(this.data.watchData);
    res = nav.concat(res);
    res.forEach(item => {
      item.children.unshift({
        id: item.id,
        pid: item.id,
        name: '全部'
      });
      item.children.forEach(c => {
        Object.assign(c, initData);
      });
      Object.assign(item, { subcur: item.children[0].id }, initData);
    });
    this.setData({
      navCate: res
    });
    this.navCate(res[0].id, 'cur');
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      var id = res.target.dataset.id;
      var item = this.getcurdata(id);
      return {
        title: item.title,
        imageUrl: item.thumb,
        query: `page=detail&id=${id}`
      };
    } else {
      return {
        title: '今日好看',
        imageUrl: '',
        query: `page=index`
      };
    }
  },
  getcurdata(id) {
    var data = this.data.curdata.filter(item => {
      return item.id == id;
    });
    return data.length == 1 ? data[0] : {};
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
          app.login();
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
    // this.loadUser();
    this.loadCate();
  },
  onShow(e) {
    console.log('onShow', e);
    this.loadGZ();
  },
  onHide(e) {
    var tj = this.getNavData('tj');
    if (tj && tj.page) {
      app.globalData.tjpage = tj.page;
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
