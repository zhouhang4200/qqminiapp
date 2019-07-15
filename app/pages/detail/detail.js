//logs.js
const app = getApp();
const util = require('../../utils/util.js');
const axios = require('../../utils/axios.js');
Page({
  data: {
    logs: [],
    id: 0,
    isSearch: !1,
    isError: !1,
    isVideo: !1,
    isMore: !1,
    cateid: 'tj',
    page: 1,
    hide: !0,
    inputVal: '',
    curdata: [],
    searchdata: [],
    video: {}
  },
  onLoad: function(e) {
    //详情页
    if (e && e.id) {
      this.setData({
        id: e.id,
        isError: !1,
        isVideo: !1,
        isMore: !1,
        isSearch: !1
      });
      this.loadVideo();
      this.loadData();
    } else {
      // 搜索页
      this.setData({
        isError: !1,
        isVideo: !1,
        isMore: !1,
        isSearch: !0
      });
    }
  },
  bindClear() {
    this.setData({
      inputVal: '',
      hide: !0
    });
  },
  bindChangeInput(e) {
    this.setData({
      hide: e.detail.value == '',
      inputVal: e.detail.value
    });
  },
  bindSearch() {
    var inputVal = util.trim(this.data.inputVal);
    var t1 = inputVal.length > 0;
    var t2 = inputVal != this.data.cacheVal;
    if (t1 && t2) {
      axios
        .get('/video', {
          data: {
            title: inputVal
          }
        })
        .then(res => {
          var is = res.data.length == 0;
          if (!is) {
            this.setData({
              isMore: is
            });
          }
          this.setData({
            isError: is,
            cacheVal: inputVal,
            searchdata: res.data
          });
          if (is) {
            this.loadData('upper');
          }
        })
        .catch(err => console.log(err));
    } else {
      if (t2) {
        this.setData({
          isError: false,
          isMore: false,
          searchdata: []
        });
      }
    }
  },
  onReachBottom: function(event) {
    if (this.data.isMore) {
      this.loadData();
    }
  },
  loadData(type) {
    const cateid = this.data.cateid;
    const page = app.globalData.tjpage;
    axios
      .get('/video', {
        data: {
          category_id: cateid,
          page: page
        }
      })
      .then(res => {
        var curdata = res.data;
        var olddata = this.data.curdata;
        var curdata = this.fixData(curdata);
        if (type == 'upper') {
          curdata = curdata.concat(olddata);
        } else {
          curdata = olddata.concat(curdata);
        }
        app.globalData.tjpage = page + 1;
        this.setData({
          isMore: true,
          curdata: curdata
        });
      })
      .catch(err => console.log(err));
  },
  bindGoTo(e) {
    var path = e.currentTarget.dataset.path;
    qq.navigateTo({
      url: path
    });
  },
  getcurdata(id) {
    var data = this.data.curdata.filter(item => {
      return item.id == id;
    });
    return data.length == 1 ? data[0] : {};
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
  fixData(data) {
    data.forEach(item => {
      item.play_time = util.formatSS(item.play_time);
    });
    return data;
  },
  onShow(e) {
    console.log('onShow', e);
  },
  onHide(e) {
    console.log('onHide', e);
  },
  onUnload(e) {
    console.log('onHide', e);
  },
  bindPlayVideo(e) {
    console.log(e);
  },
  loadVideo() {
    axios
      .get('/video/detail', {
        data: {
          video_id: this.data.id
        }
      })
      .then(res => {
        res.play_time = util.formatSS(res.play_time);
        this.setData({ video: res, isVideo: true });
      });
  }
});
